// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u128 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { CurrencyId } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, FixedU128 } from '@bifrost-finance/types/interfaces/runtime';

/** @name DepositData */
export interface DepositData extends Struct {
  readonly deposit: Balance;
  readonly gain_avgs: ITuple<[CurrencyId, FixedU128]>;
  readonly update_b: BlockNumber;
}

/** @name PoolId */
export interface PoolId extends u128 {}

/** @name PoolInfo */
export interface PoolInfo extends Struct {
  readonly pool_id: PoolId;
  readonly creator: AccountId;
  readonly trading_pair: ITuple<[CurrencyId, CurrencyId]>;
  readonly min_deposit_to_start: Balance;
  readonly duration: BlockNumber;
  readonly after_block_to_start: BlockNumber;
  readonly update_b: BlockNumber;
  readonly deposit: Balance;
  readonly rewards: ITuple<[CurrencyId, RewardData]>;
  readonly state: PoolState;
  readonly type: PoolType;
  readonly block_startup: BlockNumber;
}

/** @name PoolState */
export interface PoolState extends Enum {
  readonly isUnderAudit: boolean;
  readonly isApproved: boolean;
  readonly isOngoing: boolean;
  readonly isRetired: boolean;
  readonly isDead: boolean;
}

/** @name PoolType */
export interface PoolType extends Enum {
  readonly isMining: boolean;
  readonly isFarming: boolean;
}

/** @name RewardData */
export interface RewardData extends Struct {
  readonly total: BalanceOf;
  readonly per_block: BalanceOf;
  readonly claimed: BalanceOf;
  readonly gain_avg: FixedU128;
}

export type PHANTOM_LIQUIDITYMINING = 'liquidityMining';
