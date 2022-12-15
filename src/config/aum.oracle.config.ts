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
				PoolObjectId: string,
				PoolDataObjectId?: string
			}
		}
	} & ContractConfigValueType
};

export const contractConfig: NewContractConfigType = {
	"DEVNET": {
		"ExchangePackageId": "0xca6910376e2f0b03025382ec25853b2a39888291",
		"VaultObjectId": "0x995b483a67392dfcd8e5630b72b62754576db4d0",
		"PositionsObjectId": "0xe9bb30ff6468cb2bb8d5f2b9c194ad1eca95b84a",
		"ManagerCapObjectId": "0xd1263cb7646670495060733b304e6f511b14d6bb",
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
				"PoolObjectId": "0x613a7b82797e037a85fd2f0ff5d13dfe32a15dd0",
				"PoolDataObjectId": "0x59791a80c385c311cbfdbfb42057b0806cd1f47d"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0x242ae419464bb592c1c00fb40adfc98527e0f925",
				"PoolDataObjectId": "0x37cb8e55b8edb5f691363d9e3cf7c766a77aabf6"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0x536c6359366a9df62b7c470956d27c56950feea4",
				"PoolDataObjectId": "0x146382cb604d58a7dae52e9758c5316e374c2b69"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xb1fd7e6dca57d420349cd0101af6a4d71a8d186a",
				"PoolDataObjectId": "0x21224da4144e9ce0cb73d99e3e13642cf0de63ba"
			}
		}
	},
	"TESTNET": {
		"ExchangePackageId": "0xca6910376e2f0b03025382ec25853b2a39888291",
		"VaultObjectId": "0x995b483a67392dfcd8e5630b72b62754576db4d0",
		"PositionsObjectId": "0xe9bb30ff6468cb2bb8d5f2b9c194ad1eca95b84a",
		"ManagerCapObjectId": "0xd1263cb7646670495060733b304e6f511b14d6bb",
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
				"PoolObjectId": "0x613a7b82797e037a85fd2f0ff5d13dfe32a15dd0",
				"PoolDataObjectId": "0x59791a80c385c311cbfdbfb42057b0806cd1f47d"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0x242ae419464bb592c1c00fb40adfc98527e0f925",
				"PoolDataObjectId": "0x37cb8e55b8edb5f691363d9e3cf7c766a77aabf6"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0x536c6359366a9df62b7c470956d27c56950feea4",
				"PoolDataObjectId": "0x146382cb604d58a7dae52e9758c5316e374c2b69"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xb1fd7e6dca57d420349cd0101af6a4d71a8d186a",
				"PoolDataObjectId": "0x21224da4144e9ce0cb73d99e3e13642cf0de63ba"
			}
		}
	},
	"MAINNET": {
		"ExchangePackageId": "0xca6910376e2f0b03025382ec25853b2a39888291",
		"VaultObjectId": "0x995b483a67392dfcd8e5630b72b62754576db4d0",
		"PositionsObjectId": "0xe9bb30ff6468cb2bb8d5f2b9c194ad1eca95b84a",
		"ManagerCapObjectId": "0xd1263cb7646670495060733b304e6f511b14d6bb",
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
				"PoolObjectId": "0x613a7b82797e037a85fd2f0ff5d13dfe32a15dd0",
				"PoolDataObjectId": "0x59791a80c385c311cbfdbfb42057b0806cd1f47d"
			},
			"ETH": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0xc373f18d5fad303def9e755ac3a6dec4908c0eb2",
				"PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH",
				"PoolObjectId": "0x242ae419464bb592c1c00fb40adfc98527e0f925",
				"PoolDataObjectId": "0x37cb8e55b8edb5f691363d9e3cf7c766a77aabf6"
			},
			"USDC": {
				"PackageId": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a",
				"PriceFeedObjectId": "0x8c45e88cde3fcad33fad806c24640e6fd72f1071",
				"PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
				"Type": "0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC",
				"PoolObjectId": "0x536c6359366a9df62b7c470956d27c56950feea4",
				"PoolDataObjectId": "0x146382cb604d58a7dae52e9758c5316e374c2b69"
			},
			"SUI": {
				"PackageId": "0x0000000000000000000000000000000000000002",
				"PriceFeedObjectId": "0xc7e9e068606daff369b31cc1bba212ddcccc940b",
				"PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
				"Type": "0x0000000000000000000000000000000000000002::sui::SUI",
				"PoolObjectId": "0xb1fd7e6dca57d420349cd0101af6a4d71a8d186a",
				"PoolDataObjectId": "0x21224da4144e9ce0cb73d99e3e13642cf0de63ba"
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