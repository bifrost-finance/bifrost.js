import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      AccountInfo: "AccountInfoWithRefCount",
      Address: "MultiAddress",
      LookupSource: "MultiAddress",
      TAssetBalance: "Balance"
    },
  },
];

export default versioned;
