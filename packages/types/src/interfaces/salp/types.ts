// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountIdOf, Balance, BalanceOf } from '@bifrost-finance/types/interfaces/runtime';
import type { Enum, Option, Struct, u32 } from '@polkadot/types';
import type { MultiSignature } from '@polkadot/types/interfaces/extrinsics';
import type { LeasePeriod, ParaId } from '@polkadot/types/interfaces/parachains';
import type { SessionKeys1 } from '@polkadot/types/interfaces/session';

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
  readonly isIdle: boolean;
  readonly isRefunded: boolean;
  readonly isRedeemed: boolean;
  readonly isUnlocked: boolean;
  readonly isMigratedIdle: boolean;
  readonly isContributing: boolean;
}

/** @name CrowdloanContributeCall */
export interface CrowdloanContributeCall extends Enum {
  readonly isCrowdloanContribute: boolean;
  readonly asCrowdloanContribute: ContributeCall;
}

/** @name FundInfo */
export interface FundInfo extends Struct {
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
  readonly isRefundWithdrew: boolean;
  readonly isRedeemWithdrew: boolean;
  readonly isEnd: boolean;
}

/** @name Keys */
export interface Keys extends SessionKeys1 {}

/** @name ParachainDerivedProxyAccountType */
export interface ParachainDerivedProxyAccountType extends Enum {
  readonly isSalp: boolean;
  readonly isStaking: boolean;
}

/** @name ParachainTransactProxyType */
export interface ParachainTransactProxyType extends Enum {
  readonly isPrimary: boolean;
  readonly isDerived: boolean;
}

/** @name ParachainTransactType */
export interface ParachainTransactType extends Enum {
  readonly isXcm: boolean;
  readonly isProxy: boolean;
}

/** @name RedeemStatus */
export interface RedeemStatus extends BalanceOf {}

/** @name RpcContributionStatus */
export interface RpcContributionStatus extends Enum {
  readonly isIdle: boolean;
  readonly isContributing: boolean;
  readonly isRefunded: boolean;
  readonly isUnlocked: boolean;
  readonly isRedeemed: boolean;
}

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
