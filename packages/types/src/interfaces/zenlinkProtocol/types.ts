// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u128, u32, u8 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name AssetId */
export interface AssetId extends Struct {
  readonly chain_id: u32;
  readonly asset_type: u8;
  readonly asset_index: u32;
}

/** @name PairInfo */
export interface PairInfo extends Struct {
  readonly asset_0: AssetId;
  readonly asset_1: AssetId;
  readonly account: AccountId;
  readonly total_liquidity: ZenlinkAssetBalance;
  readonly holding_liquidity: ZenlinkAssetBalance;
  readonly reserve_0: ZenlinkAssetBalance;
  readonly reserve_1: ZenlinkAssetBalance;
  readonly lp_asset_id: AssetId;
}

/** @name ZenlinkAssetBalance */
export interface ZenlinkAssetBalance extends u128 {}

export type PHANTOM_ZENLINKPROTOCOL = 'zenlinkProtocol';
