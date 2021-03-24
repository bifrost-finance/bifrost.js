export default {
  types: {
    TokenSymbol: {
      _enum: ["BNC", "aUSD", "DOT", "vDOT", "KSM", "vKSM", "ETH", "vETH", "EOS", "vEOS", "IOST", "vIOST"],
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
