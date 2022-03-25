export default {
  rpc: {},
  types: {
    TimeUnit: {
      Era: 'U32',
      SlashingSpan: 'U32'
    },
    ledger: {
      Substrate: 'SubstrateLedger'
    },
    SubstrateLedger: {
      account: 'AccountId',
      total: 'Balance',
      active: 'Balance',
      unlocking: 'Vec<UnlockChunk>'
    },
    UnlockChunk: {
      value: 'Balance',
      unlock_time: 'TimeUnit'
    },
    MinimumsMaximums: {
      delegator_bonded_minimum: 'Balance',
      bond_extra_minimum: 'Balance',
      unbond_minimum: 'Balance',
      rebond_minimum: 'Balance',
      unbond_record_maximum: 'U32',
      validators_back_maximum: 'U32',
      delegator_active_staking_maximum: 'Balance'
    }
  }
};
