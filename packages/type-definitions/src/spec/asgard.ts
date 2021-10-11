import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      TokenSymbol: {
        _enum: {
          ASG: 0,
          BNC: 1,
          KUSD: 2,
          DOT: 3,
          KSM: 4,
          ETH: 5,
          KAR: 6,
          ZLK: 7
        }
      }
    }
  }
];

export default versioned;
