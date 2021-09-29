export default {
  rpc: {
    getAllAssets: {
      description: 'zenlinkProtocol getAllAssets',
      params: [
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: 'Vec<AssetId>'
    },
    getBalance: {
      description: 'zenlinkProtocol getBalance',
      params: [
        {
          name: 'asset_id',
          type: 'AssetId'
        },
        {
          name: 'account',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'Hash',
          isOptional: true
        }
      ],
      type: 'String'
    },
    getSovereignsInfo: {
      description: 'Get the ownership of a certain currency for each parachain.',
      params: [
        {
          name: 'asset_id',
          type: 'AssetId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(u32, AccountId, String)'
    },
    getAllPairs: {
      description: 'Get the information of all the exchange pairs.',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<PairInfo>'
    },
    getOwnerPairs: {
      description: 'Get ownership of all exchange pairs for a particular account.',
      params: [
        {
          name: 'owner',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<PairInfo>'
    },
    getPairByAssetId: {
      description: 'Get the detailed information of a particular exchange pair.',
      params: [
        {
          name: 'asset_0',
          type: 'AssetId'
        },
        {
          name: 'asset_1',
          type: 'AssetId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'PairInfo'
    },
    getAmountInPrice: {
      description: 'Get the output token amount for an exact input token amount.',
      params: [
        {
          name: 'supply',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'path',
          type: 'Vec<AssetId>'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'u128'
    },
    getAmountOutPrice: {
      description: 'Get the input token amount for an exact output token amount.',
      params: [
        {
          name: 'supply',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'path',
          type: 'Vec<AssetId>'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'u128'
    },
    getEstimateLptoken: {
      description:
        'Get the estimated number of LP token acquired given the desired and minimum amount for both in-token and out-token.',
      params: [
        {
          name: 'asset_0',
          type: 'AssetId'
        },
        {
          name: 'asset_1',
          type: 'AssetId'
        },
        {
          name: 'amount_0_desired',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'amount_1_desired',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'amount_0_min',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'amount_1_min',
          type: 'ZenlinkAssetBalance'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'u128'
    }
  },
  types: {
    ZenlinkAssetBalance: 'u128',
    PairInfo: {
      asset0: 'AssetId',
      asset1: 'AssetId',
      account: 'AccountId',
      totalLiquidity: 'ZenlinkAssetBalance',
      holdingLiquidity: 'ZenlinkAssetBalance',
      reserve0: 'ZenlinkAssetBalance',
      reserve1: 'ZenlinkAssetBalance',
      lpAssetId: 'AssetId'
    },
    AssetBalance: "u128",
    PairMetadata:{
      pair_account:"AccountId",
      target_supply: "AssetBalance"
    },
    BootstrapParamter: {
      min_contribution: "(AssetBalance, AssetBalance)",
      target_supply: "(AssetBalance, AssetBalance)",
      accumulated_supply: "(AssetBalance, AssetBalance)",
      end_block_number: "BlockNumber",
      pair_account: "AccountId"
    },
    PairStatus:{
      _enum: {
        Trading: "PairMetadata",
        Bootstrap: "BootstrapParamter",
        Disable: null
      }
    }
  }
};
