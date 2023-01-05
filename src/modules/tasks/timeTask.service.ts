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
import { timeOracleConfig } from '../../config/time.oracle.config';

@Injectable()
export class TimeTaskService {
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

    const timeOracleCon = timeOracleConfig[this.network];
    this.shared = timeOracleCon.sharedObjectId;
    this.packageObjectId = timeOracleCon.packageObjectId;

    this.init();
  }

  async init() {
    this.provider = new JsonRpcProvider(Network[this.network]);

    if (this.configService.get('TIME_TASK') !== '1') {
      return;
    }

    const { signer, address } = await this.getKeypair();

    this.signer = signer;
    this.account = address;

    const objects = await this.provider.getObjectsOwnedByAddress(address);
    this.obj = objects.find((item: SuiObjectInfo) => item.type.indexOf(`${this.packageObjectId}::time::AuthorityCap`) > -1);

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
        packageObjectId: this.packageObjectId,
        module: 'time',
        function: 'stamp',
        typeArguments: [],
        arguments: [
          this.obj.objectId,
          this.shared,
          Date.now().toString()
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
}