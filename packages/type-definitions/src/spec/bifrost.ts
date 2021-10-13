import type { OverrideVersionedType } from '@polkadot/types/types';

const TokenSymbol = {
  _enum: {
    BNC: 1,
    KUSD: 2,
    KSM: 4,
    KAR: 6
  }
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 557119],
    types: {
      TokenSymbol,
      MultiLocation: 'MultiLocationV0'
    }
  },
  {
    minmax: [557120, undefined],
    types: {
      TokenSymbol,
      MultiLocation: 'MultiLocationV1'
    }
  }
];

export default versioned;
