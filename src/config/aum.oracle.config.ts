import { ContractConfigType, NetworkType, SymbolType, OracleConfigType, ContractConfigValueType } from "./config.type";

type NewSymbolType = SymbolType | 'SUI';

type NewContractConfigType = {
	[x in NetworkType]: {
		Coin: {
			[y in NewSymbolType]: {
				PackageId: string,
				PriceFeedObjectId: string,
				Type: string,
				PoolObjectId: string
			}
		}
	} & ContractConfigValueType
};

export const contractConfig: NewContractConfigType = {
	"DEVNET": {
		"ExchangePackageId": "0xf2e9dc033023ad6487188991135bdf72598e3265",
		"VaultObjectId": "0x24240041a922b9c3c241e41c790390636d83cc3a",
		"PositionsObjectId": "0x95521845bb75ccebd52b3ef9276ee2099f49c22f",
		"ManagerCapObjectId": "0x5ff857e390b3d22394202acc8cfd9029c98c5f70",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x72f2750398c7258730723312da698ca574525203",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0x18762db61b9267d89e27105a9a8ed7958e8651d5"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x4eb9b0fc93c3769a56d0d65ffe07f6cfbdd19289",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0x80b2b8f7503d3f64e1bf50a98da61d7a4711cfa6"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8b945410f8b376cd2d737c34e5f1c6def7313b17",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0x30230651a9ec889b23a4cfe0d338bd3a537d58dd"
			},
			"SUI": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x0049f30fd93d3b6fd40860db27a4d1dd2bc0eabe",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xd3882d8410c17ef7c8f0a8b8d50a08a8b90b1205"
			}
		}
	},
	"TESTNET": {
		"ExchangePackageId": "0x8435e6fc0f2d592b321d83ce59a9425290b122e1",
		"VaultObjectId": "0xbea9200dfb078d398961107d0186af4da31bc3d5",
		"PositionsObjectId": "0x03d9072476f2047200a9b6e89de455806859547f",
		"ManagerCapObjectId": "0x2563730c4ca34da85325c36e69bc462cd514a3ed",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0x5b3447a1eff6e39ee23f0901f16e309471e12409",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x7daac4844e7c0d619447e7b2fa6f4a218a7682ed",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0x4c2a33d9aa8d0f5efeb93fb7c2caecbdbc06d878"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x2bb133c11f8c3d0de399778dcd1d7a2e5577b8bb",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0xf3473a8927efeaa5cb858a1494267df62177df30"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x27d20086147d14760f41d6cf58c958e50c5a29c0",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0xd252b935e3abce480c72e41deaaa91c00e51b3ca"
			},
			"SUI": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x0049f30fd93d3b6fd40860db27a4d1dd2bc0eabe",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0x30230651a9ec889b23a4cfe0d338bd3a537d58dd"
			}
		}
	},
	"MAINNET": {
		"ExchangePackageId": "0x8435e6fc0f2d592b321d83ce59a9425290b122e1",
		"VaultObjectId": "0xbea9200dfb078d398961107d0186af4da31bc3d5",
		"PositionsObjectId": "0x03d9072476f2047200a9b6e89de455806859547f",
		"ManagerCapObjectId": "0x2563730c4ca34da85325c36e69bc462cd514a3ed",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0x5b3447a1eff6e39ee23f0901f16e309471e12409",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x7daac4844e7c0d619447e7b2fa6f4a218a7682ed",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0x4c2a33d9aa8d0f5efeb93fb7c2caecbdbc06d878"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x2bb133c11f8c3d0de399778dcd1d7a2e5577b8bb",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0xf3473a8927efeaa5cb858a1494267df62177df30"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x27d20086147d14760f41d6cf58c958e50c5a29c0",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0xd252b935e3abce480c72e41deaaa91c00e51b3ca"
			},
			"SUI": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x0049f30fd93d3b6fd40860db27a4d1dd2bc0eabe",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0x30230651a9ec889b23a4cfe0d338bd3a537d58dd"
			}
		}
	}
};

export const aumOracleConfig: OracleConfigType = {
	"DEVNET": {
		"sharedObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"packageObjectId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
	},
	"TESTNET": {
		"sharedObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"packageObjectId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
	},
	"MAINNET": {
		"sharedObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"packageObjectId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
	}
}