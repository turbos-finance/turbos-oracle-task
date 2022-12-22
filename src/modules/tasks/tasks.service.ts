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
  SuiEventEnvelope,
  getEvents,
} from '@mysten/sui.js';

import { ConfigService } from '../config/config.service';
import { contractConfig } from '../../config/aum.oracle.config';
import { NetworkType, SymbolType } from '../../config/config.type';

@Injectable()
export class TasksService {
  signer: RawSigner;
  provider: JsonRpcProvider;

  constructor(
    private readonly configService: ConfigService,
  ) {
    // this.init();
  }

  async init() {
    const network = this.configService.get('NETWORK');
    this.provider = new JsonRpcProvider('https://fullnode.devnet.sui.io', {
      // you can also skip providing this field if you don't plan to interact with the faucet
      faucetURL: 'https://faucet.devnet.sui.io/gas',
    });

    const config = contractConfig[network as NetworkType];
    const coin = config.Coin;
    const symbols = Object.keys(coin);
    const result = await this.provider.getEvents({ MoveEvent: `${config.ExchangePackageId}::exchange::SwapEvent` }, null, 10);
    const trans = result.data.map((item: SuiEventEnvelope) => {
      const event = (item.event as any).moveEvent;
      const tokenInSymbol = symbols.find((item: string) => coin[item as SymbolType].PoolObjectId === event.fields.token_in_pool_id);
      const tokenOutPoolId = symbols.find((item: string) => coin[item as SymbolType].PoolObjectId === event.fields.token_out_pool_id)
      return {
        packageId: event.packageId,
        sender: event.sender,
        type: event.sender,
        timestamp: item.timestamp,
        txDigest: item.txDigest,
        receiver: event.fields.receiver,
        tokenInAmount: event.fields.token_in_amount,
        tokenInPoolId: event.fields.token_in_pool_id,
        tokenInSymbol,
        tokenOutAmount: event.fields.token_out_amount,
        tokenOutPoolId,
        tokenOutSymbol: event.fields.token_out_pool_id
      }
    });

    this.provider.subscribeEvent({ MoveEventType: `${config.ExchangePackageId}::exchange::SwapEvent` }, (event: SuiEventEnvelope) => {
      console.log(event);
    });
  }

  // async getKeypair() {
  //   const keypair = Ed25519Keypair.deriveKeypair(this.configService.get('PRIVACYKEY'))
  //   let address = keypair?.getPublicKey().toSuiAddress() || null;
  //   if (address && !address.startsWith('0x')) {
  //     address = `0x${address}`;
  //   }
  //   if (!address) return;
  //   return new RawSigner(keypair, this.provider);
  // }

  // // every 60s run
  // @Cron('0 * * * * *')
  // async handleCron() {

  // }

  // // every 2s run
  // @Cron('*/2 * * * * *')
  // async getQty() {

  // }

  // // every 1h run
  // @Cron('1 0 * * * *')
  // async hoursStatistics() {

  // }

  // // every 30 minute run
  // @Cron('0 */30 * * * *')
  // async updateContractDate() {
  // }

  // // every 10 minute run
  // @Cron('0 */10 * * * *')
  // async tenMinitesRun() {

  // }
}