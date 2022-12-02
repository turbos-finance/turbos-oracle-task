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

const shared = '0x1baef83150ab5b3ebd8f27b54bc21d7a42a7ecbc';
const packageObjectId = '0xb385af6057e8de63dfbdc64d9da12d94d5a41adb';

@Injectable()
export class AumTaskService {
  signer: RawSigner;
  provider: JsonRpcProvider;
  shared: string;
  packageObjectId: string;
  account: string;
  obj: SuiObjectInfo
  constructor(
    private readonly configService: ConfigService,
  ) {
    this.shared = shared;
    this.packageObjectId = packageObjectId;

    this.init();
  }

  async init() {
    if (this.configService.get('AUM_TASK') !== '1') {
      return;
    }

    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    const { signer, address } = await this.getKeypair();

    this.signer = signer;
    this.account = address;

    const objects = await this.provider.getObjectsOwnedByAddress(address);
    this.obj = objects.find((item: SuiObjectInfo) => item.type.indexOf(`${packageObjectId}::aum::AuthorityCap`) > -1);

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
    const start = Date.now();
    try {
      const moveCallTxn = await this.signer.executeMoveCall({
        packageObjectId: packageObjectId,
        module: 'aum',
        function: 'update',
        typeArguments: [],
        arguments: [
          this.obj.objectId,
          shared,
          10000000000000,
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

  // // every 60s run
  // @Cron('0 * * * * *')
  // async handleCron() {

  // }

  // every 2s run
  // @Cron('*/2 * * * * *')
  // async runTimeTask() {
  //   this.run();
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