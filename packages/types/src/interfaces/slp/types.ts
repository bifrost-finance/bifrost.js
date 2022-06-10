// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId, Balance } from '@bifrost-finance/types/interfaces/runtime';
import type { Struct, U32, Vec } from '@polkadot/types-codec';

/** @name ledger */
export interface ledger extends Struct {
  readonly Substrate: SubstrateLedger;
}

/** @name MinimumsMaximums */
export interface MinimumsMaximums extends Struct {
  readonly delegator_bonded_minimum: Balance;
  readonly bond_extra_minimum: Balance;
  readonly unbond_minimum: Balance;
  readonly rebond_minimum: Balance;
  readonly unbond_record_maximum: U32;
  readonly validators_back_maximum: U32;
  readonly delegator_active_staking_maximum: Balance;
}

/** @name SubstrateLedger */
export interface SubstrateLedger extends Struct {
  readonly account: AccountId;
  readonly total: Balance;
  readonly active: Balance;
  readonly unlocking: Vec<UnlockChunk>;
}

/** @name TimeUnit */
export interface TimeUnit extends Struct {
  readonly Era: U32;
  readonly SlashingSpan: U32;
}

/** @name UnlockChunk */
export interface UnlockChunk extends Struct {
  readonly value: Balance;
  readonly unlock_time: TimeUnit;
}

export type PHANTOM_SLP = 'slp';
