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
  isValidSuiAddress
} from '@mysten/sui.js';
import { insufficientTokenBalanceException, tokenNotExistException, wrongSuiAddressException } from "src/exception/auth.exception";
import tokenFaucetConfig from "src/config/token.faucet.config";

import { ConfigService } from '../config/config.service';


@Injectable()
export class GasService {
  signer: RawSigner;
  provider: JsonRpcProvider;
  address: SuiAddress

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.init();
  }

  async init() {
    this.provider = new JsonRpcProvider(Network[this.configService.get('NETWORK')]);
    this.getKeypair();
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
    return new RawSigner(keypair, this.provider);
  }


  async gas(account: string, token: string): Promise<any> {
    const config = tokenFaucetConfig[this.configService.get('NETWORK')][token.toLocaleUpperCase()];

    if (!config) {
      throw new tokenNotExistException();
    }

    if (!isValidSuiAddress(account)) {
      throw new wrongSuiAddressException();
    }

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

    const trans = await this.signer.pay({
      inputCoins: result,
      recipients: [account],
      amounts: [config.number],
      gasBudget: 1000,
    });

    return {
      data: trans
    };
  }

  async run(){
    
  }
}
