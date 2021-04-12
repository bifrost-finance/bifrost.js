export default {
  rpc: {},
  types: {
    TokenSymbol: {
      _enum: {
        ASG: 0,
        aUSD: 1,
        DOT: 2,
        vDOT: 3,
        KSM: 4,
        vKSM: 5,
        ETH: 6,
        vETH: 7,
        EOS: 8,
        vEOS: 9,
        IOST: 10,
        vIOST: 11,
      },
    },
    CurrencyId: {
      _enum: {
        Token: "TokenSymbol",
      },
    },
    AmountOf: "i128",
    ChainId: {
      _enum: {
        RelayChain: "Null",
        ParaChain: "ParaId",
      },
    },
    XCurrencyId: {
      chainId: "ChainId",
      currencyId: "Vec<u8>",
    },
  },
};
