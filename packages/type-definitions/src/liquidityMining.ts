export default {
  rpc: {},
  types: {
    PoolId: 'u128',
    PoolInfo: {
      pool_id: 'PoolId',
      keeper: 'AccountId',
      investor: 'AccountId',
      trading_pair: '(CurrencyId, CurrencyId)',
      duration: 'BlockNumber',
      type: 'PoolType',
      min_deposit_to_start: 'Balance',
      after_block_to_start: 'BlockNumber',
      deposit: 'Balance',
      update_b: 'BlockNumber',
      rewards: 'BTreeMap<CurrencyId, RewardData>',
      state: 'PoolState',
      block_startup: 'BlockNumber'
    },
    PoolType: {
      _enum: ['Mining', 'Farming', 'EBFarming']
    },
    PoolState: {
      _enum: ['UnCharged', 'Charged', 'Ongoing', 'Retired', 'Dead']
    },
    DepositData: {
      deposit: 'Balance',
      gain_avgs: 'BTreeMap<CurrencyId, FixedU128>',
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
