// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name Pair */
export interface Pair extends Struct {
  readonly token_0: ZenlinkAssetId;
  readonly token_1: ZenlinkAssetId;
  readonly account: AccountId;
  readonly total_liquidity: TokenBalance;
}

/** @name PairId */
export interface PairId extends u32 {}

/** @name PairInfo */
export interface PairInfo extends Struct {
  readonly token_0: ZenlinkAssetId;
  readonly token_1: ZenlinkAssetId;
  readonly account: AccountId;
  readonly total_liquidity: TokenBalance;
  readonly holding_liquidity: TokenBalance;
  readonly reserve_0: TokenBalance;
  readonly reserve_1: TokenBalance;
}

/** @name TokenBalance */
export interface TokenBalance extends Balance {}

/** @name ZenlinkAssetId */
export interface ZenlinkAssetId extends Enum {
  readonly isNativeCurrency: boolean;
  readonly isParaCurrency: boolean;
  readonly asParaCurrency: u32;
}

export type PHANTOM_ZENLINKDEXMODULE = 'ZenlinkDEXModule';
