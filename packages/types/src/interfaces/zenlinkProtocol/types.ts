// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32, u8 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name AssetId */
export interface AssetId extends Struct {
  readonly chain_id: u32;
  readonly module_index: u8;
  readonly asset_index: u32;
}

/** @name AssetProperty */
export interface AssetProperty extends Enum {
  readonly isForeign: boolean;
  readonly isLp: boolean;
  readonly asLp: LpProperty;
}

/** @name LpProperty */
export interface LpProperty extends Struct {
  readonly token_0: AssetId;
  readonly token_1: AssetId;
}

/** @name Pair */
export interface Pair extends Struct {
  readonly token_0: AssetId;
  readonly token_1: AssetId;
  readonly account: AccountId;
  readonly total_liquidity: TokenBalance;
  readonly lp_asset_id: AssetId;
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
  readonly lp_asset_id: AssetId;
}

/** @name TokenBalance */
export interface TokenBalance extends Balance {}

/** @name TokenId */
export interface TokenId extends u32 {}

export type PHANTOM_ZENLINKPROTOCOL = 'zenlinkProtocol';
