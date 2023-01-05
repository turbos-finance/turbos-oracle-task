import { TokenFaucetConfigType } from "./config.type";

const tokenFaucetConfig: TokenFaucetConfigType = {
	'DEVNET': {
		'BTC': {
			type: '0x6e6100221904c8a8e1984190c1c371ba449cd706::btc::BTC',
			symbol: 'BTC',
			balance: 1,
			decimals: 9
		},
		'ETH': {
			type: '0x6e6100221904c8a8e1984190c1c371ba449cd706::eth::ETH',
			symbol: 'ETH',
			balance: 10,
			decimals: 9
		},
		'USDC': {
			type: '0x6e6100221904c8a8e1984190c1c371ba449cd706::usdc::USDC',
			symbol: 'USDC',
			balance: 10000,
			decimals: 9
		}
	},
	'TESTNET': {
		'BTC': {
			type: '0x676fd08a38a0eef77b0ac9d9bf478a32e9c45d05::btc::BTC',
			symbol: 'BTC',
			balance: 1,
			decimals: 9
		},
		'ETH': {
			type: '0x1c744ef099d7258e7a2980ead4bd278429af2e6c::eth::ETH',
			symbol: 'ETH',
			balance: 10,
			decimals: 9
		},
		'USDC': {
			type: '0x21947bdf8bec8fdd299c303dff77f12893dab004::usdc::USDC',
			symbol: 'USDC',
			balance: 10000,
			decimals: 9
		}
	},
	'MAINNET': {
		'BTC': {
			type: '0x676fd08a38a0eef77b0ac9d9bf478a32e9c45d05::btc::BTC',
			symbol: 'BTC',
			balance: 1,
			decimals: 9
		},
		'ETH': {
			type: '0x1c744ef099d7258e7a2980ead4bd278429af2e6c::eth::ETH',
			symbol: 'ETH',
			balance: 10,
			decimals: 9
		},
		'USDC': {
			type: '0x21947bdf8bec8fdd299c303dff77f12893dab004::usdc::USDC',
			symbol: 'USDC',
			balance: 10000,
			decimals: 9
		}
	}

}
export default tokenFaucetConfig;