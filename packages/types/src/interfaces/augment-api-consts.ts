// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { u32 } from '@polkadot/types';
import type { Codec } from '@polkadot/types/types';
import type { CurrencyIdOf } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { Weight } from '@bifrost-finance/types/interfaces/runtime';
import type { MultiLocation } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    currencies: {
      getNativeCurrencyId: CurrencyIdOf & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: Weight & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: MultiLocation & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
