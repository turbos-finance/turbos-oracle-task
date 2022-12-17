import { OracleConfigType } from "./config.type";

export const timeOracleConfig: OracleConfigType = {
  "DEVNET": {
    "sharedObjectId": "0x5413d396dd54a0c8d955f0b77ff3fb74a73ceeea",
    "packageObjectId": "0x57e49a481e5714ee11ed09e916728e4c53fcde3e",
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