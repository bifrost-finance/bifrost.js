export default {
  rpc: {},
  types: {
    TokenSymbol: {
      _enum: {
        ASG: 0,
        BNC: 1,
        KUSD: 2,
        DOT: 3,
        KSM: 4,
        ETH: 5
      }
    },
    CurrencyId: {
      _enum: {
        Native: 'TokenSymbol',
        VToken: 'TokenSymbol',
        Token: 'TokenSymbol',
        Stable: 'TokenSymbol',
        VSToken: 'TokenSymbol',
        VSBond: '(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)',
        LPToken: '(TokenSymbol, u8, TokenSymbol, u8)'
      }
    },
    CurrencyIdOf: 'CurrencyId',
    TAssetBalance: 'Balance',
    AmountOf: 'Balance',
    StorageVersion: 'Releases',
    ShareWeight: 'Balance',
    TransferOriginType: {
      _enum: {
        FromSelf: 0,
        FromRelayChain: 1,
        FromSiblingParaChain: 2
      }
    }
  }
};
