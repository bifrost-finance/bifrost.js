export default {
  types: {
    BiddingOrderId: "u64",
    RewardRecord: { account_id: "AccountId", record_amount: "Balance" },
    EraId: "u32",
    BiddingOrderUnit: {
      bidder_id: "AccountId",
      token_id: "AssetId",
      block_num: "BlockNumber",
      votes: "Balance",
      annual_roi: "Permill",
      validator: "AccountId",
    },
    BiddingOrderUnitOf: "BiddingOrderUnit",
  },
};
