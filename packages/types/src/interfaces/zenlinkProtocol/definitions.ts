export default {
  rpc: {
    getAllAssets: {
      description: "zenlinkProtocol getAllAssets",
      params: [
        {
          name: "at",
          type: "Hash",
          isOptional: true,
        },
      ],
      type: "Vec<AssetId>",
    },
    getBalance: {
      description: "zenlinkProtocol getBalance",
      params: [
        {
          name: "asset_id",
          type: "AssetId",
        },
        {
          name: "account",
          type: "AccountId",
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true,
        },
      ],
      type: "String",
    },
    getSovereignsInfo: {
      description: "Get the ownership of a certain currency for each parachain.",
      params: [
        {
          name: "asset_id",
          type: "AssetId",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "(u32, AccountId, String)",
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
      type: "Vec<PairInfo>",
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
      type: "Vec<PairInfo>",
    },
    getPairByAssetId: {
      description: "Get the detailed information of a particular exchange pair.",
      params: [
        {
          name: "asset_0",
          type: "AssetId",
        },
        {
          name: "asset_1",
          type: "AssetId",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "PairInfo",
    },
    getAmountInPrice: {
      description: "Get the output token amount for an exact input token amount.",
      params: [
        {
          name: "supply",
          type: "ZenlinkAssetBalance",
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
      type: "String",
    },
    getAmountOutPrice: {
      description: "Get the input token amount for an exact output token amount.",
      params: [
        {
          name: "supply",
          type: "ZenlinkAssetBalance",
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
      type: "String",
    },
    getEstimateLptoken: {
      description:
        "Get the estimated number of LP token acquired given the desired and minimum amount for both in-token and out-token.",
      params: [
        {
          name: "asset_0",
          type: "AssetId",
        },
        {
          name: "asset_1",
          type: "AssetId",
        },
        {
          name: "amount_0_desired",
          type: "ZenlinkAssetBalance",
        },
        {
          name: "amount_1_desired",
          type: "ZenlinkAssetBalance",
        },
        {
          name: "amount_0_min",
          type: "ZenlinkAssetBalance",
        },
        {
          name: "amount_1_min",
          type: "ZenlinkAssetBalance",
        },
        {
          name: "at",
          type: "BlockHash",
          isHistoric: true,
          isOptional: true,
        },
      ],
      type: "String",
    },
  },
  types: {
    AssetId: {
      chain_id: "u32",
      asset_type: "u8",
      asset_index: "u32"
    },
    ZenlinkAssetBalance: "u128",
    PairInfo: {
      asset_0: "AssetId",
      asset_1: "AssetId",
      account: "AccountId",
      total_liquidity: "ZenlinkAssetBalance",
      holding_liquidity: "ZenlinkAssetBalance",
      reserve_0: "ZenlinkAssetBalance",
      reserve_1: "ZenlinkAssetBalance",
      lp_asset_id: "AssetId"
    },
  },
  typesAlias: {
    ZenlinkProtocol: {
      AssetBalance: "ZenlinkAssetBalance"
    }
  }
};
