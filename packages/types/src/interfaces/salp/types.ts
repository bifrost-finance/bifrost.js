// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u32 } from '@polkadot/types';
import type { AccountId, AccountIdOf, Balance, BalanceOf } from '@bifrost-finance/types/interfaces/runtime';
import type { MultiSignature } from '@polkadot/types/interfaces/extrinsics';
import type { LeasePeriod, ParaId } from '@polkadot/types/interfaces/parachains';

/** @name ContributeCall */
export interface ContributeCall extends Enum {
  readonly isContribute: boolean;
  readonly asContribute: Contribution;
}

/** @name Contribution */
export interface Contribution extends Struct {
  readonly index: ParaId;
  readonly value: BalanceOf;
  readonly signature: Option<MultiSignature>;
}

/** @name ContributionStatus */
export interface ContributionStatus extends Enum {
  readonly isContributing: boolean;
  readonly isContributed: boolean;
  readonly isRedeeming: boolean;
  readonly isRedeemed: boolean;
}

/** @name CrowdloanContributeCall */
export interface CrowdloanContributeCall extends Enum {
  readonly isCrowdloanContribute: boolean;
  readonly asCrowdloanContribute: ContributeCall;
}

/** @name FundInfo */
export interface FundInfo extends Struct {
  readonly depositor: AccountId;
  readonly deposit: Balance;
  readonly raised: Balance;
  readonly cap: Balance;
  readonly first_slot: LeasePeriod;
  readonly last_slot: LeasePeriod;
  readonly trie_index: TrieIndex;
  readonly status: FundStatus;
}

/** @name FundStatus */
export interface FundStatus extends Enum {
  readonly isOngoing: boolean;
  readonly isRetired: boolean;
  readonly isSuccess: boolean;
  readonly isFailed: boolean;
  readonly isWithdrew: boolean;
  readonly isEnd: boolean;
}

/** @name RedeemStatus */
export interface RedeemStatus extends BalanceOf {}

/** @name TrieIndex */
export interface TrieIndex extends u32 {}

/** @name Withdraw */
export interface Withdraw extends Struct {
  readonly who: AccountIdOf;
  readonly index: ParaId;
}

/** @name WithdrawCall */
export interface WithdrawCall extends Enum {
  readonly isWithdraw: boolean;
  readonly asWithdraw: Withdraw;
}

export type PHANTOM_SALP = 'salp';
