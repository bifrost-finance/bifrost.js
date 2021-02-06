// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, u16, u64 } from '@polkadot/types';
import type { AssetId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name AccountAsset */
export interface AccountAsset extends Struct {
  readonly balance: Balance;
  readonly locked: Balance;
  readonly available: Balance;
  readonly cost: Balance;
  readonly income: Balance;
}

/** @name Price */
export interface Price extends u64 {}

/** @name Token */
export interface Token extends Struct {
  readonly symbol: Bytes;
  readonly precision: u16;
  readonly total_supply: Balance;
  readonly token_type: TokenType;
  readonly pair: Option<AssetId>;
}

/** @name TokenType */
export interface TokenType extends Enum {
  readonly isNative: boolean;
  readonly isStable: boolean;
  readonly isToken: boolean;
  readonly isVToken: boolean;
}

export type PHANTOM_ASSETS = 'assets';
