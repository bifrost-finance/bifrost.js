import type { Definitions } from '@polkadot/types/types';

import primitives from '@bifrost-finance/type-definitions/primitives';

export default {
  rpc: {},
  types: {
    ...primitives.types
  }
} as Definitions;
