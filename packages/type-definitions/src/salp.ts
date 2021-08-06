export default {
  rpc: {},
  types: {
    TrieIndex: 'u32',
    FundInfo: {
      depositor: 'AccountId',
      deposit: 'Balance',
      raised: 'Balance',
      cap: 'Balance',
      first_slot: 'LeasePeriod',
      last_slot: 'LeasePeriod',
      trie_index: 'TrieIndex',
      status: 'FundStatus'
    },
    FundStatus: {
      _enum: ['Ongoing', 'Retired', 'Success', 'Failed', 'RefundWithdrew', 'RedeemWithdrew', 'End']
    },
    ContributionStatus: {
      _enum: ['Idle', 'Refunded', 'Unlocked', 'Refunding', 'Contributing(BalanceOf)']
    },
    RedeemStatus: {
      _enum: ['Idle', 'Redeeming(BalanceOf)']
    },
    CrowdloanContributeCall: {
      _enum: {
        CrowdloanContribute: 'ContributeCall'
      }
    },
    ContributeCall: {
      _enum: {
        Contribute: 'Contribution'
      }
    },
    Contribution: {
      index: 'ParaId',
      value: 'BalanceOf',
      signature: 'Option<MultiSignature>'
    },
    Withdraw: {
      who: 'AccountIdOf',
      index: 'ParaId'
    },
    WithdrawCall: {
      _enum: {
        Withdraw: 'Withdraw'
      }
    }
  }
};
