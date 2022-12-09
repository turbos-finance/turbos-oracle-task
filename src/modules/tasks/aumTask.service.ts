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

import { ConfigService } from '../config/config.service';
import { contractConfig, aumOracleConfig } from '../../config/aum.oracle.config';
import BigNumber from 'bignumber.js';
import { ContractConfigValueType, NetworkType } from '../../config/config.type';

@Injectable()
export class AumTaskService {
  signer: RawSigner;
  provider: JsonRpcProvider;
  shared: string;
  packageObjectId: string;
  account: string;
  obj: SuiObjectInfo;
  network: string;
  constructor(
    private readonly configService: ConfigService,
  ) {
    this.network = this.configService.get('NETWORK');

    const aumOracleCon = aumOracleConfig[this.network];
    this.shared = aumOracleCon.sharedObjectId;
    this.packageObjectId = aumOracleCon.packageObjectId;

    this.init();
  }

  async init() {
    this.provider = new JsonRpcProvider(Network[this.network]);

    if (this.configService.get('AUM_TASK') !== '1') {
      return;
    }

    const { signer, address } = await this.getKeypair();

    this.signer = signer;
    this.account = address;

    const objects = await this.provider.getObjectsOwnedByAddress(address);
    this.obj = objects.find((item: SuiObjectInfo) => item.type.indexOf(`${this.packageObjectId}::aum::AuthorityCap`) > -1);

    if (!this.obj || !this.signer || !this.account) return;

    this.run();
  }

  async getKeypair() {
    const keypair = Ed25519Keypair.deriveKeypair(this.configService.get('AUM_PRIVACYKEY'))
    let address = keypair?.getPublicKey().toSuiAddress() || null;
    if (address && !address.startsWith('0x')) {
      address = `0x${address}`;
    }
    if (!address) return;

    return { signer: new RawSigner(keypair, this.provider), address };
  }

  async run() {
    const aum = await this.getAumForPool(this.provider, contractConfig[this.network]);
    const start = Date.now();
    try {
      const moveCallTxn = await this.signer.executeMoveCall({
        packageObjectId: this.packageObjectId,
        module: 'aum',
        function: 'update',
        typeArguments: [],
        arguments: [
          this.obj.objectId,
          this.shared,
          aum,
          Date.now()
        ],
        gasBudget: 10000,
      });
      const transactionDigest = getTransactionDigest(moveCallTxn);
      const end = Date.now();
      console.log(`Aum transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);
    } catch (err: any) {
      console.log(`AumTask Erro: ${err.message}`);
    }

    this.run();
  }


  async getAumForPool(provider: JsonRpcProvider, config: ContractConfigValueType) {
    const vaultObject = await provider.getObject(config.VaultObjectId);
    const vault = getObjectFields(vaultObject);
    let aum = BigNumber(vault?.aum_addition);
    let aum_deduction = BigNumber(vault?.aum_deduction);
    let short_profits = BigNumber(0);

    const symbols = Object.keys(config.Coin);
    const priceFeeds = symbols.map((item: string) => (config.Coin[item] as any).PriceFeedObjectId);
    const pools = symbols.map((item: string) => (config.Coin[item] as any).PoolObjectId)
    const priceFeedsObjectIds = await provider.getObjectBatch(priceFeeds);
    const poolsObjectIds = await provider.getObjectBatch(pools);

    return priceFeedsObjectIds
      .filter((item: any) => getObjectExistsResponse(item))
      .reduce((sum: BigNumber, item: any, index: number) => {
        const pool = getObjectFields(poolsObjectIds[index]);
        const field = getObjectFields(item);

        if (!pool || !field) {
          return sum;
        }
        let price = BigNumber(field.price);

        let pool_amount = BigNumber(pool.pool_amounts);
        let decimals = pool.token_decimals;
        let average_price = BigNumber(pool.global_short_average_prices);

        let price_delta = average_price.minus(price).isGreaterThan(0) ? average_price.minus(price) : price.minus(average_price);
        let delta = price_delta.multipliedBy(pool.global_short_sizes).dividedBy(average_price);
        let has_profit = average_price.minus(price).isGreaterThan(0);

        if (pool.is_stable_token) {
          aum = aum.plus(pool_amount.multipliedBy(price).dividedBy(10 ** decimals));
        } else {
          if (pool.global_short_sizes > 0) {
            if (!has_profit) {
              aum = aum.plus(delta);
            } else {
              short_profits = short_profits.plus(delta);
            };
          };

          aum = aum.plus(pool.guaranteed_usd);
          aum = aum.plus(pool_amount.minus(pool.reserved_amounts).multipliedBy(price).dividedBy(10 ** decimals));
        }

        aum = short_profits.minus(aum).isGreaterThan(0) ? BigNumber(0) : aum.minus(short_profits);
        aum = aum_deduction.minus(aum).isGreaterThan(0) ? BigNumber(0) : aum.minus(aum_deduction);
        return sum.plus(aum)
      }, BigNumber(0)).multipliedBy(10 ** 9).toNumber();
  }
}