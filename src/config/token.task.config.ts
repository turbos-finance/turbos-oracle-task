import { TokenTaskConfigType } from "./config.type";

const tokenTaskConfig: TokenTaskConfigType = {
	'DEVNET': {
		'BTC': {
			immutableToken: '0x9dce427c0ab627cacf5c9f9817dc9eaa7275fec5',
			coinPackageObjectId: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC',
			packageObjectId: '0x5b3447a1eff6e39ee23f0901f16e309471e12409',
			objectId: '0x7daac4844e7c0d619447e7b2fa6f4a218a7682ed',
			symbol: 'BTC',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			immutableToken: '0xdea10df243694b0f23c25ff09957783139b7a6d3',
			coinPackageObjectId: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH',
			packageObjectId: '0x7cb311cacc8a4c3fe119976e0745fcfb7ab53403',
			objectId: '0x803f3eea868dbfca2c2f0a44b197c9fb12f940b7',
			symbol: 'ETH',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			immutableToken: '0x574819c76410e55ecf7dd31d6d31c00a448c8af4',
			coinPackageObjectId: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC',
			packageObjectId: '0xc5a6d651bf46577b4a8c2fd80c0dd18b9ed492b2',
			objectId: '0x46941694089d87fb245f8c6c2e83b934ee218ab6',
			symbol: 'USDC',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	},
	'TESTNET': {
		'BTC': {
			immutableToken: '0xe7ff912ae181fa6ad03ce9dd8154161c67addfe9',
			coinPackageObjectId: '0x676fd08a38a0eef77b0ac9d9bf478a32e9c45d05::btc::BTC',
			packageObjectId: '0x3102ed43f0d6260241d3bbf8942383dde52a6fcc',
			objectId: '0x87790770eb751986daf21f74d254a345afc7b568',
			symbol: 'BTC',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			immutableToken: '0xbe26138d52965e11d1e95be4e01f42288ad4cf94',
			coinPackageObjectId: '0x1c744ef099d7258e7a2980ead4bd278429af2e6c::eth::ETH',
			packageObjectId: '0xc4060d28f5f7ca8865c486bbe2323d212a20963f',
			objectId: '0xa4091e7befbc0f355d7da84c8fa1764ffb4dedcd',
			symbol: 'ETH',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			immutableToken: '0xdde3b0100dc57a255b02a9a0025ad5e4c129dc30',
			coinPackageObjectId: '0x21947bdf8bec8fdd299c303dff77f12893dab004::usdc::USDC',
			packageObjectId: '0x190d38d4c0ba26d8b4298a04e077bde79f8f720e',
			objectId: '0xb8fcb4a282978f3f36cdda569adf52cbb53e2161',
			symbol: 'USDC',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	},
	'MAINNET': {
		'BTC': {
			immutableToken: '0xe7ff912ae181fa6ad03ce9dd8154161c67addfe9',
			coinPackageObjectId: '0x676fd08a38a0eef77b0ac9d9bf478a32e9c45d05::btc::BTC',
			packageObjectId: '0x3102ed43f0d6260241d3bbf8942383dde52a6fcc',
			objectId: '0x87790770eb751986daf21f74d254a345afc7b568',
			symbol: 'BTC',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			immutableToken: '0xbe26138d52965e11d1e95be4e01f42288ad4cf94',
			coinPackageObjectId: '0x1c744ef099d7258e7a2980ead4bd278429af2e6c::eth::ETH',
			packageObjectId: '0xc4060d28f5f7ca8865c486bbe2323d212a20963f',
			objectId: '0xa4091e7befbc0f355d7da84c8fa1764ffb4dedcd',
			symbol: 'ETH',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			immutableToken: '0xdde3b0100dc57a255b02a9a0025ad5e4c129dc30',
			coinPackageObjectId: '0x21947bdf8bec8fdd299c303dff77f12893dab004::usdc::USDC',
			packageObjectId: '0x190d38d4c0ba26d8b4298a04e077bde79f8f720e',
			objectId: '0xb8fcb4a282978f3f36cdda569adf52cbb53e2161',
			symbol: 'USDC',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	}

}
export default tokenTaskConfig;