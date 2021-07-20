import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      TokenSymbol: {
        _enum: {
          ASG: 0,
          AUSD: 2,
          DOT: 3,
          KSM: 4,
          ETH: 5,
        },
      },
      CurrencyId: {
        _enum: {
          Token: "TokenSymbol",
          VToken: "TokenSymbol",
          Native: "TokenSymbol",
          Stable: "TokenSymbol",
          VSToken: "TokenSymbol",
          VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
        },
      },
      CurrencyIdOf: "CurrencyId",
      TAssetBalance: "Balance",
      AmountOf: "Balance",
      StorageVersion: "Releases",
      ShareWeight: "Balance",
    },
  },
];

export default versioned;
