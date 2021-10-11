import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      TokenSymbol: {
        _enum: {
          BNC: 1,
          KUSD: 2,
          KSM: 4,
          KAR:6
        }
      },
    }
  }
];

export default versioned;
