import { ContractConfigType, NetworkType, SymbolType, OracleConfigType, ContractConfigValueType } from "./config.type";

type NewSymbolType = SymbolType | 'SUI';

type NewContractConfigType = {
	[x in NetworkType]: {
		PriceFeedStorageObjectId: string,
		Coin: {
			[y in NewSymbolType]: {
				PackageId: string,
				PriceFeedObjectId: string,
				Type: string,
				PriceFeedId: string,
				PoolObjectId: string
			}
		}
	} & ContractConfigValueType
};

export const contractConfig: NewContractConfigType = {
	"DEVNET": {
		"ExchangePackageId": "0x4c7e6fac5208f4ebe6c40523a68670b0a8d17d5e",
		"VaultObjectId": "0x3a847239f43de4d25afba5397bcbc0f32680cde5",
		"PositionsObjectId": "0x34c86a6018e361664ce360226346bfb34cf7e193",
		"ManagerCapObjectId": "0xb5e5be4ed854e44f367286750929b7e7cb4018be",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"PriceFeedStorageObjectId": "0x8b1b12dc5f79f4b95d53d7539110497638c3298b",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x72f2750398c7258730723312da698ca574525203",
				"PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0xe1c065c4c122c0a402d683b726d8a52136fb22d3"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0xf7bb458c6b88646e92851d7fb1a85dc534612065"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0xd4a32dbec1f8da00904b5982a39708040c9ac122"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xc9b64fa3c0a00b7a4faa262c6f90ceeeba0927db"
			}
		}
	},
	"TESTNET": {
		"ExchangePackageId": "0x4c7e6fac5208f4ebe6c40523a68670b0a8d17d5e",
		"VaultObjectId": "0x3a847239f43de4d25afba5397bcbc0f32680cde5",
		"PositionsObjectId": "0x34c86a6018e361664ce360226346bfb34cf7e193",
		"ManagerCapObjectId": "0xb5e5be4ed854e44f367286750929b7e7cb4018be",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"PriceFeedStorageObjectId": "0x8b1b12dc5f79f4b95d53d7539110497638c3298b",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x72f2750398c7258730723312da698ca574525203",
				"PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0xe1c065c4c122c0a402d683b726d8a52136fb22d3"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0xf7bb458c6b88646e92851d7fb1a85dc534612065"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0xd4a32dbec1f8da00904b5982a39708040c9ac122"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xc9b64fa3c0a00b7a4faa262c6f90ceeeba0927db"
			}
		}
	},
	"MAINNET": {
		"ExchangePackageId": "0x4c7e6fac5208f4ebe6c40523a68670b0a8d17d5e",
		"VaultObjectId": "0x3a847239f43de4d25afba5397bcbc0f32680cde5",
		"PositionsObjectId": "0x34c86a6018e361664ce360226346bfb34cf7e193",
		"ManagerCapObjectId": "0xb5e5be4ed854e44f367286750929b7e7cb4018be",
		"AumOraclePackageId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
		"TimeOraclePackageId": "0xeef3fbe65868da00192e59371e98ec07c6017f00",
		"PriceOraclePackageId": "0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02",
		"AumOracleObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"TimeOracleObjectId": "0xd150885f3308ff2c6d1d5c0e7dbf1ed369cf42c3",
		"PriceFeedStorageObjectId": "0x8b1b12dc5f79f4b95d53d7539110497638c3298b",
		"Coin": {
			"BTC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x72f2750398c7258730723312da698ca574525203",
				"PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC",
				"PoolObjectId": "0xe1c065c4c122c0a402d683b726d8a52136fb22d3"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0xf7bb458c6b88646e92851d7fb1a85dc534612065"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0xd4a32dbec1f8da00904b5982a39708040c9ac122"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xc9b64fa3c0a00b7a4faa262c6f90ceeeba0927db"
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