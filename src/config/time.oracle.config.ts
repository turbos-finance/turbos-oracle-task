import { OracleConfigType } from "./config.type";

export const timeOracleConfig: OracleConfigType = {
  "DEVNET": {
    "sharedObjectId": "0x1b9979aa6f60cdc758656952184054ff611453cc",
    "packageObjectId": "0xd702f90e8c193935c1698a3d082b5dbf4c440805",
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