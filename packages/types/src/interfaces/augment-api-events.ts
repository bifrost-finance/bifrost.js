// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Vec, bool, u16, u32 } from '@polkadot/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { AuctionIndex, CandidateReceipt, CoreIndex, GroupIndex, HeadData, HrmpChannelId, LeasePeriod, ParaId, SlotRange } from '@polkadot/types/interfaces/parachains';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIndex, Balance, BlockNumber, Hash, PhantomData, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { MultiLocation, Outcome, Xcm } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    auctions: {
      /**
       * An auction ended. All funds become unreserved. [auction_index]
       **/
      AuctionClosed: AugmentedEvent<ApiType, [AuctionIndex]>;
      /**
       * An auction started. Provides its index and the block number where it will begin to
       * close and the first lease period of the quadruplet that is auctioned.
       * [auction_index, lease_period, ending]
       **/
      AuctionStarted: AugmentedEvent<ApiType, [AuctionIndex, LeasePeriod, BlockNumber]>;
      /**
       * A new bid has been accepted as the current winner.
       * \[who, para_id, amount, first_slot, last_slot\]
       **/
      BidAccepted: AugmentedEvent<ApiType, [AccountId, ParaId, Balance, LeasePeriod, LeasePeriod]>;
      /**
       * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
       * but no parachain slot has been leased.
       * \[parachain_id, leaser, amount\]
       **/
      ReserveConfiscated: AugmentedEvent<ApiType, [ParaId, AccountId, Balance]>;
      /**
       * Funds were reserved for a winning bid. First balance is the extra amount reserved.
       * Second is the total. [bidder, extra_reserved, total_amount]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Funds were unreserved since bidder is no longer active. [bidder, amount]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
       * \[auction_index, block_number\]
       **/
      WinningOffset: AugmentedEvent<ApiType, [AuctionIndex, BlockNumber]>;
      /**
       * Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
       * [bidder, range, parachain_id, amount]
       **/
      WonDeploy: AugmentedEvent<ApiType, [AccountId, SlotRange, ParaId, Balance]>;
      /**
       * An existing parachain won the right to continue.
       * First balance is the extra amount reserved. Second is the total amount reserved.
       * [parachain_id, begin, count, total_amount]
       **/
      WonRenewal: AugmentedEvent<ApiType, [ParaId, LeasePeriod, LeasePeriod, Balance]>;
    };
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    collective: {
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    crowdloan: {
      /**
       * A parachain has been moved to NewRaise
       **/
      AddedToNewRaise: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * All loans in a fund have been refunded. [fund_index]
       **/
      AllRefunded: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Contributed to a crowd sale. [who, fund_index, amount]
       **/
      Contributed: AugmentedEvent<ApiType, [AccountId, ParaId, Balance]>;
      /**
       * Create a new crowdloaning campaign. [fund_index]
       **/
      Created: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * The deploy data of the funded parachain is set. [fund_index]
       **/
      DeployDataFixed: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Fund is dissolved. [fund_index]
       **/
      Dissolved: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * The configuration to a crowdloan has been edited. [fund_index]
       **/
      Edited: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * The result of trying to submit a new bid to the Slots pallet.
       **/
      HandleBidResult: AugmentedEvent<ApiType, [ParaId, DispatchResult]>;
      /**
       * A memo has been updated. [who, fund_index, memo]
       **/
      MemoUpdated: AugmentedEvent<ApiType, [AccountId, ParaId, Bytes]>;
      /**
       * On-boarding process for a winning parachain fund is completed. [find_index, parachain_id]
       **/
      Onboarded: AugmentedEvent<ApiType, [ParaId, ParaId]>;
      /**
       * The loans in a fund have been partially dissolved, i.e. there are some left
       * over child keys that still need to be killed. [fund_index]
       **/
      PartiallyRefunded: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Withdrew full balance of a contributor. [who, fund_index, amount]
       **/
      Withdrew: AugmentedEvent<ApiType, [AccountId, ParaId, Balance]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    hrmp: {
      /**
       * HRMP channel closed. \[by_parachain, channel_id\]
       **/
      ChannelClosed: AugmentedEvent<ApiType, [ParaId, HrmpChannelId]>;
      /**
       * Open HRMP channel accepted. \[sender, recipient\]
       **/
      OpenChannelAccepted: AugmentedEvent<ApiType, [ParaId, ParaId]>;
      /**
       * Open HRMP channel requested.
       * \[sender, recipient, proposed_max_capacity, proposed_max_message_size\]
       **/
      OpenChannelRequested: AugmentedEvent<ApiType, [ParaId, ParaId, u32, u32]>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    inclusion: {
      /**
       * A candidate was backed. [candidate, head_data]
       **/
      CandidateBacked: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
      /**
       * A candidate was included. [candidate, head_data]
       **/
      CandidateIncluded: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
      /**
       * A candidate timed out. [candidate, head_data]
       **/
      CandidateTimedOut: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex]>;
    };
    indices: {
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    membership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot]>;
    };
    paras: {
      /**
       * A para has been queued to execute pending actions. \[para_id\]
       **/
      ActionQueued: AugmentedEvent<ApiType, [ParaId, SessionIndex]>;
      /**
       * A code upgrade has been scheduled for a Para. \[para_id\]
       **/
      CodeUpgradeScheduled: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Current code has been updated for a Para. \[para_id\]
       **/
      CurrentCodeUpdated: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Current head has been updated for a Para. \[para_id\]
       **/
      CurrentHeadUpdated: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * A new head has been noted for a Para. \[para_id\]
       **/
      NewHeadNoted: AugmentedEvent<ApiType, [ParaId]>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    registrar: {
      Deregistered: AugmentedEvent<ApiType, [ParaId]>;
      Registered: AugmentedEvent<ApiType, [ParaId, AccountId]>;
      Reserved: AugmentedEvent<ApiType, [ParaId, AccountId]>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    slots: {
      /**
       * An existing parachain won the right to continue.
       * First balance is the extra amount reseved. Second is the total amount reserved.
       * \[parachain_id, leaser, period_begin, period_count, extra_reseved, total_amount\]
       **/
      Leased: AugmentedEvent<ApiType, [ParaId, AccountId, LeasePeriod, LeasePeriod, Balance, Balance]>;
      /**
       * A new [lease_period] is beginning.
       **/
      NewLeasePeriod: AugmentedEvent<ApiType, [LeasePeriod]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId, Hash]>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
    validatorManager: {
      /**
       * Validators were removed from the set.
       **/
      ValidatorsDeregistered: AugmentedEvent<ApiType, [Vec<ValidatorId>]>;
      /**
       * New validators were added to the set.
       **/
      ValidatorsRegistered: AugmentedEvent<ApiType, [Vec<ValidatorId>]>;
    };
    xcmPallet: {
      Attempted: AugmentedEvent<ApiType, [Outcome]>;
      Sent: AugmentedEvent<ApiType, [MultiLocation, MultiLocation, Xcm]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
