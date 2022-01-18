require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain erosion hidden problem orange gas'; 
let testAccounts = [
"0x94df6a9ad43433f4326f92fc1e040919bec5d3bc0db5132dac614be96393bebe",
"0xf544f7e0409fb7662bb06b2ecd72764cf148b53d3964e4b2e5a172f2e0d14fbb",
"0x6219a2eeb083d69ff3875527fee2a2e15c8854d98b214c4cb330dd7a643d072c",
"0x1f3de9b6abbf66c5e103cc11586b91ef710b1c5d6d8ab99b6a5ad9bdb8b6dc88",
"0xca795dacb340089a007ca7228562e066140e1890a16d1893552cca656bdaa70d",
"0x98be35604a138b18e474ec7cab4a347768b2bac356d4fa79cff0593e106c304f",
"0x6ee9edbefeffed1f59facae10450627b19c605beceb19be69424683beeb68268",
"0x9591bcdc63fa879fd9ffac24e40a18f398eb340ada8e3d5e3b1d78690785f783",
"0x6daa1b7f62fc8bf26b111eda9f8902b0f76ea9006f019ec61cbbc2efdae60a7d",
"0x51ff2a8e507d8cae47c9ae6dcbfbd922cd6a8e5d2ebfd7c974f806b9049fac60"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


