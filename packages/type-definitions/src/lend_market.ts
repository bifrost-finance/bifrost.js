export default {
  rpc: {
    getMarketStatus: {
      description: 'getMarketStatus',
      params: [
        {
          name: 'asset_id',
          type: 'CurrencyId',
        },
      ],
      type: '(u128, u128, u128, u128, u128,u128,u128)',
    },
  },
  types: {},
};
