export default {
  types: {
    Token: {
      symbol: "Vec<u8>",
      precision: "u16",
      total_supply: "Balance",
      token_type: "TokenType",
      pair: "Option<AssetId>",
    },
    Price: "u64",
    AccountAsset: {
      balance: "Balance",
      locked: "Balance",
      available: "Balance",
      cost: "Balance",
      income: "Balance",
    },
    TokenType: { _enum: ["Native", "Stable", "Token", "VToken"] },
  },
};
