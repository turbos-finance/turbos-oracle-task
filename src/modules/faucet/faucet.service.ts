import { Injectable } from '@nestjs/common';
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
  SuiAddress,
  isValidSuiAddress,
  SuiExecuteTransactionResponse
} from '@mysten/sui.js';
import { alreadyClaimedException, insufficientTokenBalanceException, tokenNotExistException, wrongSuiAddressException } from "src/exception/auth.exception";
import tokenFaucetConfig from "src/config/token.faucet.config";

import { ConfigService } from '../config/config.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FaucetEntity } from 'src/entities/faucet.entity';


@Injectable()
export class FaucetService {
  signer: RawSigner;
  provider: JsonRpcProvider;
  address: SuiAddress;
  isFaucetRun: boolean = false;

  constructor(
    @InjectRepository(FaucetEntity)
    private readonly faucetRepository: Repository<FaucetEntity>,

    private readonly configService: ConfigService,
  ) {
    this.init();
  }

  async saveFaucet(account: string, symbol: string, isFaucet: number = 0): Promise<FaucetEntity> {
    const faucetDate = this.faucetRepository.create();
    const data = this.faucetRepository.merge(faucetDate, {
      account,
      symbol,
      lastTimestamp: Date.now(),
      isFaucet
    });
    return await this.faucetRepository.save(data);
  }

  async init() {
    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    await this.getKeypair();
  }

  async getKeypair() {
    const keypair = Ed25519Keypair.deriveKeypair(this.configService.get('FAUCET_TOKEN_PRIVACYKEY'))
    let address = keypair?.getPublicKey().toSuiAddress() || null;
    if (address && !address.startsWith('0x')) {
      address = `0x${address}`;
    }
    if (!address) return;
    this.signer = new RawSigner(keypair, this.provider);
    this.address = address;
  }

  async faucet(account: string, symbol: string): Promise<any> {
    const config = tokenFaucetConfig[this.configService.get('NETWORK')][symbol.toLocaleUpperCase()];

    if (!config) {
      throw new tokenNotExistException();
    }

    if (!isValidSuiAddress(account)) {
      throw new wrongSuiAddressException();
    }

    const faucetData = await this.faucetRepository.findOne({ where: { account } });

    if (faucetData && faucetData.lastTimestamp - Date.now() < 1000 * 60 * 60 * 24) {
      throw new alreadyClaimedException();
    }

    await this.saveFaucet(account, symbol.toLocaleUpperCase());

    if (!this.isFaucetRun) {
      this.run();
    }

    return {
      message: 'Receive successfully'
    };
  }

  async run() {
    this.isFaucetRun = true;
    const faucetData = await this.faucetRepository.findOne({
      where: {
        isFaucet: 0
      },
      order: {
        lastTimestamp: 'ASC'
      }
    });

    if (!faucetData) {
      this.isFaucetRun = false;
      return;
    }

    const config = tokenFaucetConfig[this.configService.get('NETWORK')][faucetData.symbol.toLocaleUpperCase()];

    const actualAmount = BigInt(config.number + 1000);
    const coinsWithSufficientAmount = await this.provider.selectCoinsWithBalanceGreaterThanOrEqual(
      this.address,
      actualAmount,
      config.type
    );

    if (coinsWithSufficientAmount.length < 1) {
      throw new insufficientTokenBalanceException();
    }

    const result = coinsWithSufficientAmount.map((item: GetObjectDataResponse | SuiMoveObject) => Coin.getID(item));

    const res = await this.signer.pay({
      inputCoins: result,
      recipients: [faucetData.account],
      amounts: [config.number],
      gasBudget: 1000,
    });

    console.log(`${faucetData.symbol} faucet transaction: ${getTransactionDigest(res)}`);
    await this.saveFaucet(faucetData.account, faucetData.symbol, 1);
    this.run();
  }
}
