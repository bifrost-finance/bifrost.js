// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, U256, u64 } from '@polkadot/types';
import type { Balance } from '@bifrost-finance/types/interfaces/runtime';

/** @name NumberOrHex */
export interface NumberOrHex extends Enum {
  readonly isNumber: boolean;
  readonly asNumber: u64;
  readonly isHex: boolean;
  readonly asHex: U256;
}

/** @name PalletBalanceOf */
export interface PalletBalanceOf extends Balance {}

export type PHANTOM_FLEXIBLEFEE = 'flexibleFee';
