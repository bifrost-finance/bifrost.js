// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Enum, Struct, u128 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { CurrencyId } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, FixedU128 } from '@bifrost-finance/types/interfaces/runtime';

/** @name DepositData */
export interface DepositData extends Struct {
  readonly deposit: Balance;
  readonly gain_avgs: BTreeMap<CurrencyId, FixedU128>;
  readonly update_b: BlockNumber;
}

/** @name PoolId */
export interface PoolId extends u128 {}

/** @name PoolInfo */
export interface PoolInfo extends Struct {
  readonly pool_id: PoolId;
  readonly keeper: AccountId;
  readonly investor: AccountId;
  readonly trading_pair: ITuple<[CurrencyId, CurrencyId]>;
  readonly duration: BlockNumber;
  readonly type: PoolType;
  readonly min_deposit_to_start: Balance;
  readonly after_block_to_start: BlockNumber;
  readonly deposit: Balance;
  readonly update_b: BlockNumber;
  readonly rewards: BTreeMap<CurrencyId, RewardData>;
  readonly state: PoolState;
  readonly block_startup: BlockNumber;
}

/** @name PoolState */
export interface PoolState extends Enum {
  readonly isUnCharged: boolean;
  readonly isCharged: boolean;
  readonly isOngoing: boolean;
  readonly isRetired: boolean;
  readonly isDead: boolean;
}

/** @name PoolType */
export interface PoolType extends Enum {
  readonly isMining: boolean;
  readonly isFarming: boolean;
  readonly isEbFarming: boolean;
}

/** @name RewardData */
export interface RewardData extends Struct {
  readonly total: BalanceOf;
  readonly per_block: BalanceOf;
  readonly claimed: BalanceOf;
  readonly gain_avg: FixedU128;
}

export type PHANTOM_LIQUIDITYMINING = 'liquidityMining';
