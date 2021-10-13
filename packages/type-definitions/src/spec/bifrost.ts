import type { OverrideVersionedType } from '@polkadot/types/types';

const TokenSymbol = {
  _enum: {
    BNC: 1,
    KUSD: 2,
    KSM: 4,
    KAR: 6
  }
};

const xcmV0={
  MultiAsset: 'MultiAssetV0',
  Xcm: 'XcmV0',
  XcmOrder: 'XcmOrderV0',
  MultiLocation: 'MultiLocationV0'
}

const xcmV1={
  MultiAsset: 'MultiAssetV1',
  Xcm: 'XcmV1',
  XcmOrder: 'XcmOrderV1',
  MultiLocation: 'MultiLocationV1'
}

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 901],
    types: {
      TokenSymbol,
      ...xcmV0
    }
  },
  {
    minmax: [902, undefined],
    types: {
      TokenSymbol,
      ...xcmV1
    }
  }
];

export default versioned;
