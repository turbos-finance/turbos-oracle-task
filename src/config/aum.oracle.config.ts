export const contractConfig = {
	"DEVNET": {
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
			}
		}
	},
	"TESTNET": {

	},
	"MAINNET": {

	}
};

export const aumOracleConfig = {
	"DEVNET": {
		"sharedObjectId": "0xe74a7cd72b04c5a7c5000db939e34cc591d31063",
		"packageObjectId": "0x8f1aa56e8ed59e34b85d1d1deb260dd9e2bf9e1e",
	},
	"TESTNET": {

	},
	"MAINNET": {

	}
}