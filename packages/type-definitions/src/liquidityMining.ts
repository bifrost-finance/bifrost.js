export default {
  rpc: {},
  types: {
    PoolId: 'u128',
    PoolInfo: {
      pool_id: 'PoolId',
      creator: 'AccountId',
      trading_pair: '(CurrencyId, CurrencyId)',
      min_deposit_to_start: 'Balance',
      duration: 'BlockNumber',
      after_block_to_start: 'BlockNumber',
      update_b: 'BlockNumber',
      deposit: 'Balance',
      rewards: '(CurrencyId, RewardData)',
      state: 'PoolState',
      type: 'PoolType',
      block_startup: 'BlockNumber'
    },
    PoolType: {
      _enum: ['Mining', 'Farming']
    },
    PoolState: {
      _enum: ['UnderAudit', 'Approved', 'Ongoing', 'Retired', 'Dead']
    },
    DepositData: {
      deposit: 'Balance',
      gain_avgs: '(CurrencyId, FixedU128)',
      update_b: 'BlockNumber'
    },
    RewardData: {
      total: 'BalanceOf',
      per_block: 'BalanceOf',
      claimed: 'BalanceOf',
      gain_avg: 'FixedU128'
    }
  }
};
