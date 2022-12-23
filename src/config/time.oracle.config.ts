import { OracleConfigType } from "./config.type";

export const timeOracleConfig: OracleConfigType = {
  "DEVNET": {
    "sharedObjectId": "0xf5a44a9834fddcc941668ab8b9e27c353e854911",
    "packageObjectId": "0x268496428ee1ad90e62cfaca5d44e6ae6584eec3",
  },
  "TESTNET": {
    "sharedObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
    "packageObjectId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
  },
  "MAINNET": {
    "sharedObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
    "packageObjectId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
  }
}