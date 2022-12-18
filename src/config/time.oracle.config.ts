import { OracleConfigType } from "./config.type";

export const timeOracleConfig: OracleConfigType = {
  "DEVNET": {
    "sharedObjectId": "0xe3e6ec368588aecfbb4d4d5fa4440a403e2d0264",
    "packageObjectId": "0xcc3bb45c48cdde1a8c99d756db1ecab9dcfb7005",
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