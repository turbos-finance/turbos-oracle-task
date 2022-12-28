import { TokenTaskConfigType } from "./config.type";

const tokenTaskConfig: TokenTaskConfigType = {
	'DEVNET': {
		packageObjectId: '0xd761ae94019061d3ea91201e415dc0f66d3f5164',
		sharedObjectId: '0x7b7c6b0a27492516ad8a5ec3080fde039a113680',
		'BTC': {
			type: '0x1d48e0c74ab73ade13e1dba1a3ed9a9079ca7bdf::btc::BTC',
			// objectId: '0x72f2750398c7258730723312da698ca574525203',
			turbosPriceId: 'fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525',
			symbol: 'BTCUSD',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			type: '0x1d48e0c74ab73ade13e1dba1a3ed9a9079ca7bdf::eth::ETH',
			// objectId: '0x4eb9b0fc93c3769a56d0d65ffe07f6cfbdd19289',
			turbosPriceId: '3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f',
			symbol: 'ETHUSD',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			type: '0x1d48e0c74ab73ade13e1dba1a3ed9a9079ca7bdf::usdc::USDC',
			// objectId: '0x8b945410f8b376cd2d737c34e5f1c6def7313b17',
			turbosPriceId: '348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d',
			symbol: 'USDCUSD',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	},
	'TESTNET': {
		packageObjectId: '0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02',
		sharedObjectId: '0x8b1b12dc5f79f4b95d53d7539110497638c3298b',
		'BTC': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC',
			// objectId: '0x72f2750398c7258730723312da698ca574525203',
			turbosPriceId: 'fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525',
			symbol: 'BTCUSD',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH',
			// objectId: '0x4eb9b0fc93c3769a56d0d65ffe07f6cfbdd19289',
			turbosPriceId: '3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f',
			symbol: 'ETHUSD',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC',
			// objectId: '0x8b945410f8b376cd2d737c34e5f1c6def7313b17',
			turbosPriceId: '348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d',
			symbol: 'USDCUSD',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	},
	'MAINNET': {
		packageObjectId: '0xf1cd4d6b6e2266ee6cd055670b9983eddb085a02',
		sharedObjectId: '0x8b1b12dc5f79f4b95d53d7539110497638c3298b',
		'BTC': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::btc::BTC',
			// objectId: '0x72f2750398c7258730723312da698ca574525203',
			turbosPriceId: 'fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525',
			symbol: 'BTCUSD',
			priceId: '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b'
		},
		'ETH': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::eth::ETH',
			// objectId: '0x4eb9b0fc93c3769a56d0d65ffe07f6cfbdd19289',
			turbosPriceId: '3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f',
			symbol: 'ETHUSD',
			priceId: '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
		},
		'USDC': {
			type: '0x33e5b1bafadeca4c678f7bae6cea3d326a44a02a::usdc::USDC',
			// objectId: '0x8b945410f8b376cd2d737c34e5f1c6def7313b17',
			turbosPriceId: '348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d',
			symbol: 'USDCUSD',
			priceId: '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722'
		}
	}

}
export default tokenTaskConfig;