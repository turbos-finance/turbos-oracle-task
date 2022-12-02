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

const shared = '0x97fcd0a08770552f456c8c7d8b89d3520b644d34';
const packageObjectId = '0x2046307f7787ad605261b3b82057daa5fe5884ba';

@Injectable()
export class TimeTaskService {
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
    if (this.configService.get('TIME_TASK') !== '1') {
      return;
    }

    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    const { signer, address } = await this.getKeypair();

    this.signer = signer;
    this.account = address;

    const objects = await this.provider.getObjectsOwnedByAddress(address);
    this.obj = objects.find((item: SuiObjectInfo) => item.type.indexOf(`${packageObjectId}::time::AuthorityCap`) > -1);

    if (!this.obj || !this.signer || !this.account) return;

    this.run();
  }

  async getKeypair() {
    const keypair = Ed25519Keypair.deriveKeypair(this.configService.get('TIME_PRIVACYKEY'))
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
        module: 'time',
        function: 'stamp',
        typeArguments: [],
        arguments: [
          this.obj.objectId,
          shared,
          Date.now()
        ],
        gasBudget: 10000,
      });
      const transactionDigest = getTransactionDigest(moveCallTxn);
      const end = Date.now();
      console.log(`time transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);
    } catch (err: any) {
      console.log(`TimeTask Error : ${err.message}`);
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