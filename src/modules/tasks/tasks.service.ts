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

@Injectable()
export class TasksService {
  signer: RawSigner;
  provider: JsonRpcProvider;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.init();
  }

  async init() {
    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    this.signer = await this.getKeypair();
  }

  async getKeypair() {
    const keypair = Ed25519Keypair.deriveKeypair(this.configService.get('PRIVACYKEY'))
    let address = keypair?.getPublicKey().toSuiAddress() || null;
    if (address && !address.startsWith('0x')) {
      address = `0x${address}`;
    }
    if (!address) return;
    return new RawSigner(keypair, this.provider);
  }

  // every 60s run
  @Cron('0 * * * * *')
  async handleCron() {

  }

  // every 2s run
  @Cron('*/2 * * * * *')
  async getQty() {

  }

  // every 1h run
  @Cron('1 0 * * * *')
  async hoursStatistics() {

  }

  // every 30 minute run
  @Cron('0 */30 * * * *')
  async updateContractDate() {
  }

  // every 10 minute run
  @Cron('0 */10 * * * *')
  async tenMinitesRun() {

  }
}