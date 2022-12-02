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

const packageObjectId = '0x46991105f866d15a079f688f1cc121396be95963';

const objectId = '0x52ee4034ac647a276337949a6e10146b217a62a2';
const symbol = 'BTC';
const priceId = '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b';

@Injectable()
export class PriceBTCTaskService {
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