import type { OverrideVersionedType } from '@polkadot/types/types';

const TokenSymbol = {
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
