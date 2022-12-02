import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {
  JsonRpcProvider,
  Network,
  GetObjectDataResponse,
  SuiObjectInfo,
  SuiObject,
  getObjectExistsResponse,
  getMoveObject,
  Coin,
  SuiMoveObject,
  getObjectReference,
  getObjectId,
  getObjectFields,
  mnemonicToSeed,
  Ed25519Keypair,
  RawSigner,
  PublicKey,
  Ed25519PublicKey,
  mnemonicToSeedHex,
  getTransactionDigest,
} from '@mysten/sui.js';
import { EvmPriceServiceConnection, PriceFeed } from '@pythnetwork/pyth-evm-js';

import { ConfigService } from '../config/config.service';

const packageObjectId = '0xfc20199a519b5b551e82daef04369ee0d3e91e25';

const objectId = '0xe1d93a1e7a20abff5e9b28ada5b1d52f1d5c32cb';
const symbol = 'USDC';
const priceId = '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722';

@Injectable()
export class PriceUSDCTaskService {
  signer: RawSigner;
  provider: JsonRpcProvider;
  walletAddress: string;
  obj: SuiObjectInfo;

  Timer: NodeJS.Timeout = null;

  priceFeed: PriceFeed[] = [];

  packageObjectId: string;
  objectId: string;
  symbol: string;

  priceId: string;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.packageObjectId = packageObjectId;
    this.objectId = objectId;
    this.symbol = symbol;
    this.priceId = priceId;

    this.init();
  }

  async getPrice() {
    const connection = new EvmPriceServiceConnection(this.configService.get('PYTH_NETWORK'));
    connection.subscribePriceFeedUpdates([this.priceId], (item: PriceFeed) => {
      this.priceFeed.push(item);
    });

  }

  async init() {
    if (this.configService.get('PRICE_TASK') !== '1') {
      return;
    }

    this.getPrice();

    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    await this.getKeypair();

    const objects = await this.provider.getObjectsOwnedByAddress(this.walletAddress);
    this.obj = objects.find((item: SuiObjectInfo) => item.type.indexOf(`${this.packageObjectId}::price::AuthorityCap`) > -1);

    if (!this.obj || !this.signer || !this.walletAddress) return;

    this.run();
  }

  async getKeypair() {
    const keypair = Ed25519Keypair.deriveKeypair(this.configService.get(`PRICE_${this.symbol}_PRIVACYKEY`));
    let address = keypair?.getPublicKey().toSuiAddress() || null;
    if (address && !address.startsWith('0x')) {
      address = `0x${address}`;
    }
    if (!address) return;


    this.signer = new RawSigner(keypair, this.provider);
    this.walletAddress = address;
  }

  async run() {
    clearTimeout(this.Timer);

    const priceFeed = this.priceFeed.slice(0, 1);

    if (!priceFeed[0]) {
      this.Timer = setTimeout(() => {
        this.run();
      }, 3000);

      return
    }

    const price = Number(priceFeed[0].getPriceUnchecked().price + '0');
    const ema_price = Number(priceFeed[0].getEmaPriceUnchecked().price + '0');
    const publishTime = priceFeed[0].getPriceUnchecked().publishTime;
    const start = Date.now();

    try {
      const moveCallTxn = await this.signer.executeMoveCall({
        packageObjectId: packageObjectId,
        module: 'price',
        function: 'update_price_feed',
        typeArguments: [],
        arguments: [
          this.obj.objectId,
          this.objectId,
          price,
          ema_price,
          publishTime
        ],
        gasBudget: 10000,
      });
      const transactionDigest = getTransactionDigest(moveCallTxn);
      const end = Date.now();
      console.log(`Price ${this.symbol} transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);

      this.priceFeed.shift();
    } catch (err: any) {
      console.log(`Price ${this.symbol} Error: ${err.message}`);
    }

    this.run();
  }
}