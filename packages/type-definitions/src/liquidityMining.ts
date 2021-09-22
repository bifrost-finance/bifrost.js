export default {
  rpc: {},
  types: {
    PoolId: 'u32',
    PoolInfo: {
      pool_id: 'PoolId',
      keeper: 'AccountId',
      investor: 'Option<AccountId>',
      trading_pair: '(CurrencyId, CurrencyId)',
      duration: 'BlockNumber',
      type: 'PoolType',
      min_deposit_to_start: 'Balance',
      after_block_to_start: 'BlockNumber',
      deposit: 'Balance',
      rewards: 'BTreeMap<CurrencyId, RewardData>',
      update_b: 'BlockNumber',
      state: 'PoolState',
      block_startup: 'Option<BlockNumber>',
      block_retired: 'Option<BlockNumber>'
    },
    PoolType: {
      _enum: {
        Mining: 0,
        Farming: 1,
        EBFarming: 2
      }
    },
    PoolState: {
      _enum: {
        UnCharged: 0,
        Charged: 1,
        Ongoing: 2,
        Retired: 3,
        Dead: 4
      }
    },
    DepositData: {
      deposit: 'Balance',
      gain_avgs: 'BTreeMap<CurrencyId, FixedU128>',
      update_b: 'BlockNumber'
    },
    RewardData: {
      total: 'Balance',
      per_block: 'Balance',
      claimed: 'Balance',
      gain_avg: 'FixedU128'
    }
  }
};
