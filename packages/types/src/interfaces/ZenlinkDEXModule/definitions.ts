export default {
  rpc: {
    getSovereignsInfo: {
      description: "Get the ownership of a certain currency for each parachain.",
      params: [
        {
          name: "assetId",
          type: "ZenlinkAssetId",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "(u32, AccountId, NumberOrHex)",
    },
    getAllPairs: {
      description: "Get the information of all the exchange pairs.",
      params: [
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "Vec<PairInfo<AccountId, NumberOrHex>>",
    },
    getOwnerPairs: {
      description: "Get ownership of all exchange pairs for a particular account.",
      params: [
        {
          name: "owner",
          type: "AccountId",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "Vec<PairInfo<AccountId, NumberOrHex>>",
    },
    getPairByAssetId: {
      description: "Get the detailed information of a particular exchange pair.",
      params: [
        {
          name: "token0",
          type: "ZenlinkAssetId",
        },
        {
          name: "token1",
          type: "ZenlinkAssetId",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "Option<PairInfo<AccountId, NumberOrHex>>",
    },
    getAmountInPrice: {
      description: "Get the output token amount for an exact input token amount.",
      params: [
        {
          name: "supply",
          type: "TokenBalance",
        },
        {
          name: "path",
          type: "Vec<AssetId>",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "NumberOrHex",
    },
    getAmountOutPrice: {
      description: "Get the input token amount for an exact output token amount.",
      params: [
        {
          name: "supply",
          type: "TokenBalance",
        },
        {
          name: "path",
          type: "Vec<AssetId>",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "NumberOrHex",
    },
    getEstimateLptoken: {
      description:
        "Get the estimated number of LP token acquired given the desired and minimum amount for both in-token and out-token.",
      params: [
        {
          name: "token0",
          type: "ZenlinkAssetId",
        },
        {
          name: "token1",
          type: "ZenlinkAssetId",
        },
        {
          name: "amount0Desired",
          type: "TokenBalance",
        },
        {
          name: "amount1Desired",
          type: "TokenBalance",
        },
        {
          name: "amount0Min",
          type: "TokenBalance",
        },
        {
          name: "amount1Min",
          type: "TokenBalance",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "NumberOrHex",
    },
  },
  types: {
    TokenBalance: "Balance",
    PairId: "u32",
    ZenlinkAssetId: {
      _enum: {
        NativeCurrency: null,
        ParaCurrency: "u32",
      },
    },
    Pair: {
      token_0: "ZenlinkAssetId",
      token_1: "ZenlinkAssetId",
      account: "AccountId",
      total_liquidity: "TokenBalance",
    },
    PairInfo: {
      token_0: "ZenlinkAssetId",
      token_1: "ZenlinkAssetId",

      account: "AccountId",
      total_liquidity: "TokenBalance",
      holding_liquidity: "TokenBalance",
      reserve_0: "TokenBalance",
      reserve_1: "TokenBalance",
    },
  },
};
