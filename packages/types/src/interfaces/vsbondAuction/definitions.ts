export default {
  rpc: {},
  types: {
    OrderId: "u64",
    OrderInfo: {
      owner: "AccountIdOf",
      vsbond: "CurrencyId",
      supply: "u128",
      remain: "u128",
      unit_price: "u128",
      order_id: "OrderId",
      order_state: "OrderState",
    },
    OrderState: {
      _enum: ["InTrade", "Revoked", "Clinchd"],
    },
  },
};
