// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U8aFixed, Vec, bool, u128, u16, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AmountOf, CurrencyId, CurrencyIdOf } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { OrderId, OrderInfo } from '@bifrost-finance/types/interfaces/vsbondAuction';
import type { AssetBalance } from '@polkadot/types/interfaces/assets';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { MessageId, OverweightIndex } from '@polkadot/types/interfaces/cumulus';
import type { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { ParaId, RelayChainBlockNumber } from '@polkadot/types/interfaces/parachains';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIdOf, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, CallHash, Hash, PhantomData, Weight } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { MultiLocation, Outcome, Xcm, XcmError } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
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
    bancor: {
      /**
       * Token has been sold.
       * 
       * [buyer, currencyId, token_sold, vsToken_paid]
       **/
      TokenSold: AugmentedEvent<ApiType, [AccountIdOf, CurrencyId, BalanceOf, BalanceOf]>;
      /**
       * [buyer, currencyId, vsToken_sold, Token_paid]
       **/
      VSTokenSold: AugmentedEvent<ApiType, [AccountIdOf, CurrencyId, BalanceOf, BalanceOf]>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      BountyAwarded: AugmentedEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      BountyCanceled: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      BountyClaimed: AugmentedEvent<ApiType, [BountyIndex, Balance, AccountId]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      BountyExtended: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. \[index\]
       **/
      BountyProposed: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      BountyRejected: AugmentedEvent<ApiType, [BountyIndex, Balance]>;
    };
    chargeTransactionFee: {
      FlexibleFeeExchanged: AugmentedEvent<ApiType, [CurrencyId, u128]>;
    };
    collatorSelection: {
      CandidateAdded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      CandidateRemoved: AugmentedEvent<ApiType, [AccountId]>;
      NewCandidacyBond: AugmentedEvent<ApiType, [Balance]>;
      NewDesiredCandidates: AugmentedEvent<ApiType, [u32]>;
      NewInvulnerables: AugmentedEvent<ApiType, [Vec<AccountId>]>;
    };
    council: {
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
    councilMembership: {
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
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, Outcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
    };
    currencies: {
      /**
       * Update balance success. [currency_id, who, amount]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AmountOf]>;
      /**
       * Deposit success. [currency_id, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Currency transfer success. [currency_id, from, to, amount]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AccountId, BalanceOf]>;
      /**
       * Withdraw success. [currency_id, who, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
    };
    democracy: {
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      Cancelled: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      Executed: AugmentedEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      NotPassed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      Passed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      PreimageMissing: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      PreimageNoted: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      PreimageReaped: AugmentedEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      PreimageUsed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      Proposed: AugmentedEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      Started: AugmentedEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      Tabled: AugmentedEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      Vetoed: AugmentedEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [MessageId, Outcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [MessageId]>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       * \[ id, index, required \]
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [MessageId, OverweightIndex, Weight]>;
      /**
       * Downward message from the overweight queue was executed.
       * \[ index, used \]
       **/
      OverweightServiced: AugmentedEvent<ApiType, [OverweightIndex, Weight]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [MessageId]>;
      /**
       * The weight limit for handling downward messages was reached.
       * \[ id, remaining, required \]
       **/
      WeightExhausted: AugmentedEvent<ApiType, [MessageId, Weight, Weight]>;
    };
    elections: {
      /**
       * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run
       * the election, not that enough have has been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
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
    minterReward: {
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       * \[ weight_used, result_mqc_head \]
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [Weight, Hash]>;
      /**
       * Some downward messages have been received and will be processed.
       * \[ count \]
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [u32]>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [Hash]>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
      /**
       * The validation function has been scheduled to apply as of the contained relay chain
       * block number.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
    };
    polkadotXcm: {
      Attempted: AugmentedEvent<ApiType, [Outcome]>;
      Sent: AugmentedEvent<ApiType, [MultiLocation, MultiLocation, Xcm]>;
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
    salp: {
      /**
       * Contributed to a crowd sale. [who, fund_index, amount]
       **/
      Contributed: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
      /**
       * Fail on contribute to crowd sale. [who, fund_index, amount]
       **/
      ContributeFailed: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
      /**
       * Contributing to a crowd sale. [who, fund_index, amount]
       **/
      Contributing: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
      /**
       * Create a new crowdloaning campaign. [fund_index]
       **/
      Created: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Fund is dissolved. [fund_index]
       **/
      Dissolved: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * Redeemed token(rely-chain) by vsToken/vsBond. [who, fund_index, amount]
       **/
      Redeemed: AugmentedEvent<ApiType, [AccountIdOf, BalanceOf]>;
      /**
       * Fail on redeem token(rely-chain) by vsToken/vsBond. [who, fund_index, amount]
       **/
      RedeemFailed: AugmentedEvent<ApiType, [AccountIdOf, BalanceOf]>;
      /**
       * Redeeming token(rely-chain) by vsToken/vsBond. [who, fund_index, amount]
       **/
      Redeeming: AugmentedEvent<ApiType, [AccountIdOf, BalanceOf]>;
      /**
       * Fail on withdraw full balance of a contributor. [who, fund_index, amount]
       **/
      WithdrawFailed: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
      /**
       * Withdrawing full balance of a contributor. [who, fund_index, amount]
       **/
      Withdrawing: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
      /**
       * Withdrew full balance of a contributor. [who, fund_index, amount]
       **/
      Withdrew: AugmentedEvent<ApiType, [AccountIdOf, ParaId, BalanceOf]>;
    };
    scheduler: {
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
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
    technicalCommittee: {
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
    technicalMembership: {
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
    tips: {
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      NewTip: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      TipClosed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      TipClosing: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      TipRetracted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
       **/
      TipSlashed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
    };
    tokens: {
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[currency_id,
       * account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[currency_id,
       * account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       * \[currency_id, who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
      /**
       * Transfer succeeded. \[currency_id, from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [CurrencyId, AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       * \[currency_id, who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [CurrencyId, AccountId, Balance]>;
    };
    treasury: {
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [ProposalIndex, Balance, AccountId]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [Balance]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [Balance]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [ProposalIndex, Balance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [Balance]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [Balance]>;
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
    vesting: {
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    vsBondAuction: {
      /**
       * The order has been clinched.
       * 
       * [order_id_clinched, order_owner, order_buyer, quantity]
       **/
      OrderClinchd: AugmentedEvent<ApiType, [OrderId, AccountIdOf, AccountIdOf, BalanceOf]>;
      /**
       * The order has been created.
       * 
       * [order_id, order_info]
       **/
      OrderCreated: AugmentedEvent<ApiType, [OrderId, OrderInfo]>;
      /**
       * The order has been revoked.
       * 
       * [order_id_revoked, order_owner]
       **/
      OrderRevoked: AugmentedEvent<ApiType, [OrderId, AccountIdOf]>;
    };
    vtokenMint: {
      Minted: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance]>;
      RedeemedPointsSuccess: AugmentedEvent<ApiType, []>;
      RedeemStarted: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance, BlockNumber]>;
      UpdateRatePerBlockSuccess: AugmentedEvent<ApiType, []>;
      UpdateVtokenPoolSuccess: AugmentedEvent<ApiType, []>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [Option<Hash>, XcmError]>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [Option<Hash>]>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [Option<Hash>]>;
    };
    zenlinkProtocol: {
      /**
       * Transact in trading \[owner, recipient, swap_path, balance_in, balance_out\]
       **/
      AssetSwap: AugmentedEvent<ApiType, [AccountId, AccountId, Vec<AssetId>, AssetBalance, AssetBalance]>;
      /**
       * Some assets were burned. \[asset_id, owner, amount\]
       **/
      Burned: AugmentedEvent<ApiType, [AssetId, AccountId, AssetBalance]>;
      /**
       * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1, mint_balance_lp\]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId, AssetBalance, AssetBalance, AssetBalance]>;
      /**
       * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1, burn_balance_lp\]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId, AccountId, AssetId, AssetId, AssetBalance, AssetBalance, AssetBalance]>;
      /**
       * Some assets were minted. \[asset_id, owner, amount\]
       **/
      Minted: AugmentedEvent<ApiType, [AssetId, AccountId, AssetBalance]>;
      /**
       * Swap
       * Create a trading pair. \[creator, asset_0, asset_1\]
       **/
      PairCreated: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId]>;
      /**
       * Foreign Asset
       * Some assets were transferred. \[asset_id, owner, target, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, AssetBalance]>;
      /**
       * Transfer by xcm
       * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
       **/
      TransferredToParachain: AugmentedEvent<ApiType, [AssetId, AccountId, ParaId, AccountId, AssetBalance, Weight]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
