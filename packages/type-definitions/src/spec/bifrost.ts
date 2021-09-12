import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      MultiLocation: 'MultiLocationV0',
      TokenSymbol: {
        _enum: {
          BNC: 1,
          KUSD: 2,
          KSM: 4
        }
      },
      CurrencyId: {
        _enum: {
          Native: 'TokenSymbol',
          VToken: 'TokenSymbol',
          Token: 'TokenSymbol',
          Stable: 'TokenSymbol',
          VSToken: 'TokenSymbol',
          VSBond: '(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)'
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
  }
];

export default versioned;
