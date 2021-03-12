export default {
  types: {
    TokenBalance: "Balance",
    PairId: "u32",
    AssetId: {
      _enum: {
        NativeCurrency: null,
        ParaCurrency: "u32",
      },
    },
    Pair: {
      token_0: "AssetId",
      token_1: "AssetId",
      account: "AccountId",
      total_liquidity: "TokenBalance",
    },
    PairInfo: {
      token_0: "AssetId",
      token_1: "AssetId",

      account: "AccountId",
      total_liquidity: "TokenBalance",
      holding_liquidity: "TokenBalance",
      reserve_0: "TokenBalance",
      reserve_1: "TokenBalance",
    },
  },
};
