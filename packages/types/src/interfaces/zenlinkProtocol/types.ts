// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name AssetId */
export interface AssetId extends Enum {
  readonly isNativeCurrency: boolean;
  readonly isParaCurrency: boolean;
  readonly asParaCurrency: u32;
}

/** @name Pair */
export interface Pair extends Struct {
  readonly token_0: AssetId;
  readonly token_1: AssetId;
  readonly account: AccountId;
  readonly total_liquidity: TokenBalance;
}

/** @name PairId */
export interface PairId extends u32 {}

/** @name PairInfo */
export interface PairInfo extends Struct {
  readonly token_0: AssetId;
  readonly token_1: AssetId;
  readonly account: AccountId;
  readonly total_liquidity: TokenBalance;
  readonly holding_liquidity: TokenBalance;
  readonly reserve_0: TokenBalance;
  readonly reserve_1: TokenBalance;
}

/** @name TokenBalance */
export interface TokenBalance extends Balance {}

export type PHANTOM_ZENLINKPROTOCOL = 'zenlinkProtocol';
