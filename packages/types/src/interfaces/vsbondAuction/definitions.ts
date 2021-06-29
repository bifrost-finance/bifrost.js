export default {
    rpc: {},
    types: {
        OrderId: "u64",
        OrderInfo: {
            owner: "AccountIdOf",
            vsbond: "CurrencyIdOf",
            supply: "BalanceOf",
            remain: "BalanceOf",
            unit_price: "BalanceOf",
            order_id: "OrderId",
            order_state: "OrderState"
        },
        OrderState: {
            _enum: ["InTrade", "Revoked", "Clinchd"],
        }
    },
  };
