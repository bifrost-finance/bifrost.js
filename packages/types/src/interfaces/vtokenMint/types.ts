// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128 } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name MintPrice */
export interface MintPrice extends VtokenMintPrice {}

/** @name VtokenMintPrice */
export interface VtokenMintPrice extends u128 {}

/** @name VtokenPool */
export interface VtokenPool extends Struct {
  readonly token_pool: Balance;
  readonly vtoken_pool: Balance;
  readonly current_reward: Balance;
  readonly pending_reward: Balance;
}

export type PHANTOM_VTOKENMINT = 'vtokenMint';
