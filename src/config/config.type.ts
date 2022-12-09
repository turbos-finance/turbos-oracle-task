export type NetworkType = 'DEVNET' | 'TESTNET' | 'MAINNET';
export type SymbolType = 'BTC' | 'ETH' | 'USDC';

export type SymbolConfigValueType = {
  type: string,
  symbol: string,
  balance: number,
  decimals: number
}

export type TokenFaucetConfigType = {
  [x in NetworkType]: {
    [y in SymbolType]: {
      type: string,
      symbol: string,
      balance: number,
      decimals: number
    }
  }
}

export type TokenTaskConfigType = {
  [x in NetworkType]: {
    [y in SymbolType]: {
      immutableToken?: string,
      coinPackageObjectId: string,
      packageObjectId: string,
      objectId: string,
      symbol: string,
      priceId: string
    }
  }
}
