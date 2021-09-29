// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId, BlockNumber } from '@bifrost-finance/types/interfaces/runtime';
import type { Enum, Struct, u128, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';

/** @name AssetBalance */
export interface AssetBalance extends u128 {}

/** @name BootstrapParamter */
export interface BootstrapParamter extends Struct {
  readonly min_contribution: ITuple<[AssetBalance, AssetBalance]>;
  readonly target_supply: ITuple<[AssetBalance, AssetBalance]>;
  readonly accumulated_supply: ITuple<[AssetBalance, AssetBalance]>;
  readonly end_block_number: BlockNumber;
  readonly pair_account: AccountId;
}

/** @name PairInfo */
export interface PairInfo extends Struct {
  readonly asset0: ZenlinkAssetId;
  readonly asset1: ZenlinkAssetId;
  readonly account: AccountId;
  readonly totalLiquidity: ZenlinkAssetBalance;
  readonly holdingLiquidity: ZenlinkAssetBalance;
  readonly reserve0: ZenlinkAssetBalance;
  readonly reserve1: ZenlinkAssetBalance;
  readonly lpAssetId: ZenlinkAssetId;
}

/** @name PairMetadata */
export interface PairMetadata extends Struct {
  readonly pair_account: AccountId;
  readonly target_supply: AssetBalance;
}

/** @name PairStatus */
export interface PairStatus extends Enum {
  readonly isTrading: boolean;
  readonly asTrading: PairMetadata;
  readonly isBootstrap: boolean;
  readonly asBootstrap: BootstrapParamter;
  readonly isDisable: boolean;
}

/** @name ZenlinkAssetBalance */
export interface ZenlinkAssetBalance extends u128 {}

/** @name ZenlinkAssetId */
export interface ZenlinkAssetId extends Struct {
  readonly chain_id: u32;
  readonly asset_type: u8;
  readonly asset_index: u64;
}

export type PHANTOM_ZENLINKPROTOCOL = 'zenlinkProtocol';
