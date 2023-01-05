import { OracleConfigType } from "./config.type";

export const timeOracleConfig: OracleConfigType = {
  "DEVNET": {
    "sharedObjectId": "0x06ad31b09d9e8bd03e5207b2a7e7c5a0970769a8",
    "packageObjectId": "0x76506643aa4c9c29645a0c93e261f47cf39766a8",
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