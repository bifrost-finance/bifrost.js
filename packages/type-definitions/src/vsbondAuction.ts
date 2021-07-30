export default {
  rpc: {},
  types: {
    OrderId: 'u64',
    OrderInfo: {
      owner: 'AccountIdOf',
      vsbond: 'CurrencyId',
      supply: 'u128',
      remain: 'u128',
      unit_price: 'U64F64',
      order_id: 'OrderId',
      order_state: 'OrderState'
    },
    OrderState: {
      _enum: ['InTrade', 'Revoked', 'Clinchd']
    },
    U64F64: 'u128'
  }
};
