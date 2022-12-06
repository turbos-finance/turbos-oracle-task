const tokenFaucetConfig = {
    'DEVNET': {
        'BTC': {
            type: '0x676fd08a38a0eef77b0ac9d9bf478a32e9c45d05::btc::BTC',
            symbol: 'BTC',
            number: 10000000,
            decimals: 9
        },
        'ETH': {
            type: '0x1c744ef099d7258e7a2980ead4bd278429af2e6c::eth::ETH',
            symbol: 'ETH',
            number: 100000000,
            decimals: 9
        },
        'USDC': {
            type: '0x21947bdf8bec8fdd299c303dff77f12893dab004::usdc::USDC',
            symbol: 'USDC',
            number: 100000000000,
            decimals: 9
        }
    },
    'TESTNET': {
        'BTC': {

        },
        'ETH': {

        },
        'USDC': {

        }
    },
    'MAINNET': {
        'BTC': {

        },
        'ETH': {

        },
        'USDC': {

        }
    }

}
export default tokenFaucetConfig;