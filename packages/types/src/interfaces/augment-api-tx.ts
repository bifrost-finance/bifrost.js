// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u16, u32, u64 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { AmountOf, CurrencyId, CurrencyIdOf } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { OrderId } from '@bifrost-finance/types/interfaces/vsbondAuction';
import type { ZenlinkAssetBalance } from '@bifrost-finance/types/interfaces/zenlinkProtocol';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { OverweightIndex } from '@polkadot/types/interfaces/cumulus';
import type { AccountVote, Conviction, PropIndex, Proposal, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { Renouncing } from '@polkadot/types/interfaces/elections';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { LeasePeriod, LeasePeriodOf, ParaId, ParachainInherentData, RelayChainBlockNumber, UpwardMessage } from '@polkadot/types/interfaces/parachains';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIdOf, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Call, CallHashOf, ChangesTrieConfiguration, Hash, Header, KeyValue, LookupSource, Moment, OpaqueCall, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Period, Priority } from '@polkadot/types/interfaces/scheduler';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { Key } from '@polkadot/types/interfaces/system';
import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type { MultiAsset, MultiLocation, Xcm } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    authorship: {
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Header>]>;
    };
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       *
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       *
       * The dispatch origin for this call is `root`.
       *
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       *
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       *
       * The dispatch origin for this call must be `Signed` by the transactor.
       *
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       *
       * Related functions:
       *
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       *
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       *
       * The dispatch origin of this call must be Signed.
       *
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       * # <weight>
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       * #</weight>
       **/
      transferAll: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       *
       * 99% of the time you want [`transfer`] instead.
       *
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
    };
    bancor: {
      exchangeForToken: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, vstokenAmount: BalanceOf | AnyNumber | Uint8Array, tokenOutMin: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, BalanceOf, BalanceOf]>;
      exchangeForVstoken: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, tokenAmount: BalanceOf | AnyNumber | Uint8Array, vstokenOutMin: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, BalanceOf, BalanceOf]>;
    };
    bounties: {
      /**
       * Accept the curator role for a bounty.
       * A deposit will be reserved from curator and refund upon successful payout.
       *
       * May only be called from the curator.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       *
       * May only be called from `T::ApproveOrigin`.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
       *
       * The dispatch origin for this call must be the curator of this bounty.
       *
       * - `bounty_id`: Bounty ID to award.
       * - `beneficiary`: The beneficiary account whom will receive the payout.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array, beneficiary: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>, LookupSource]>;
      /**
       * Claim the payout from an awarded bounty after payout delay.
       *
       * The dispatch origin for this call must be the beneficiary of this bounty.
       *
       * - `bounty_id`: Bounty ID to claim.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>]>;
      /**
       * Cancel a proposed or active bounty. All the funds will be sent to treasury and
       * the curator deposit will be unreserved if possible.
       *
       * Only `T::RejectOrigin` is able to cancel a bounty.
       *
       * - `bounty_id`: Bounty ID to cancel.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>]>;
      /**
       * Extend the expiry time of an active bounty.
       *
       * The dispatch origin for this call must be the curator of this bounty.
       *
       * - `bounty_id`: Bounty ID to extend.
       * - `remark`: additional information.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>, Bytes]>;
      /**
       * Propose a new bounty.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
       * or slashed when rejected.
       *
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * - `value`: The total payment amount of this bounty, curator fee included.
       * - `description`: The description of this bounty.
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>, Bytes]>;
      /**
       * Assign a curator to a funded bounty.
       *
       * May only be called from `T::ApproveOrigin`.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array, curator: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>, LookupSource, Compact<BalanceOf>]>;
      /**
       * Unassign curator from a bounty.
       *
       * This function can only be called by the `RejectOrigin` a signed origin.
       *
       * If this function is called by the `RejectOrigin`, we assume that the curator is malicious
       * or inactive. As a result, we will slash the curator when possible.
       *
       * If the origin is the curator, we take this as a sign they are unable to do their job and
       * they willingly give up. We could slash them, but for now we allow them to recover their
       * deposit and exit without issue. (We may want to change this if it is abused.)
       *
       * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
       * anyone in the community to call out that a curator is not doing their due diligence, and
       * we should pick a new curator. In this case the curator should also be slashed.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<BountyIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BountyIndex>]>;
    };
    chargeTransactionFee: {
      /**
       * Set user fee charge assets order.
       **/
      setUserFeeChargeOrder: AugmentedSubmittable<(assetOrderListVec: Option<Vec<CurrencyId>> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<Vec<CurrencyId>>]>;
    };
    collatorSelection: {
      leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      setCandidacyBond: AugmentedSubmittable<(bond: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf]>;
      setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       *
       * May be called by any signed account in order to finish voting and close the proposal.
       *
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       *
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       *
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       *
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       *
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       *
       * Must be called by the Root origin.
       *
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       *
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       *
       * Origin must be a member of the collective.
       *
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       *
       * Requires the sender to be member.
       *
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       *
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       *
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       *
       * Requires root origin.
       *
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       *
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       *
       * Requires the sender to be a member.
       *
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
    };
    councilMembership: {
      /**
       * Add a member `who` to the set.
       *
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       *
       * May only be called from `Signed` origin of a current member.
       *
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       *
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       *
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       *
       * May only be called from `T::SwapOrigin`.
       *
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       *
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
    };
    democracy: {
      /**
       * Permanently place a proposal into the blacklist. This prevents it from ever being
       * proposed again.
       *
       * If called on a queued public or external proposal, then this will result in it being
       * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
       * then it will be cancelled.
       *
       * The dispatch origin of this call must be `BlacklistOrigin`.
       *
       * - `proposal_hash`: The proposal hash to blacklist permanently.
       * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
       * cancelled.
       *
       * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
       * reasonable value).
       **/
      blacklist: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, maybeRefIndex: Option<ReferendumIndex> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Option<ReferendumIndex>]>;
      /**
       * Remove a proposal.
       *
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       *
       * - `prop_index`: The index of the proposal to cancel.
       *
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>]>;
      /**
       * Cancel a proposal queued for enactment.
       *
       * The dispatch origin of this call must be _Root_.
       *
       * - `which`: The index of the referendum to cancel.
       *
       * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
       **/
      cancelQueued: AugmentedSubmittable<(which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Remove a referendum.
       *
       * The dispatch origin of this call must be _Root_.
       *
       * - `ref_index`: The index of the referendum to cancel.
       *
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>]>;
      /**
       * Clears all public proposals.
       *
       * The dispatch origin of this call must be _Root_.
       *
       * Weight: `O(1)`.
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       *
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       *
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       *
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must
       * not be more than the account's current balance.
       *
       * Emits `Delegated`.
       *
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: AccountId | string | Uint8Array, conviction: Conviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Conviction, BalanceOf]>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       *
       * The dispatch origin of this call must be `CancellationOrigin`.
       *
       * -`ref_index`: The index of the referendum to cancel.
       *
       * Weight: `O(1)`.
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Enact a proposal from a referendum. For now we just make the weight be the maximum.
       **/
      enactProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, ReferendumIndex]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       *
       * The dispatch origin of this call must be `ExternalOrigin`.
       *
       * - `proposal_hash`: The preimage hash of the proposal.
       *
       * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
       * Decoding vec of length V. Charged as maximum
       **/
      externalPropose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
       * schedule an external referendum.
       *
       * The dispatch of this call must be `ExternalDefaultOrigin`.
       *
       * - `proposal_hash`: The preimage hash of the proposal.
       *
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       *
       * Weight: `O(1)`
       **/
      externalProposeDefault: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
       * an external referendum.
       *
       * The dispatch of this call must be `ExternalMajorityOrigin`.
       *
       * - `proposal_hash`: The preimage hash of the proposal.
       *
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       *
       * Weight: `O(1)`
       **/
      externalProposeMajority: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       *
       * The dispatch of this call must be `FastTrackOrigin`.
       *
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * `FastTrackVotingPeriod` if too low.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       *
       * Emits `Started`.
       *
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, BlockNumber, BlockNumber]>;
      /**
       * Register the preimage for an upcoming proposal. This requires the proposal to be
       * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
       * the preimage has not been uploaded before and matches some imminent proposal,
       * no fee is paid.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `encoded_proposal`: The preimage of a proposal.
       *
       * Emits `PreimageNoted`.
       *
       * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
       **/
      noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
       * in the dispatch queue but does require a deposit, returned once enacted.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `encoded_proposal`: The preimage of a proposal.
       *
       * Emits `PreimageNoted`.
       *
       * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
       **/
      notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Propose a sensitive action to be taken.
       *
       * The dispatch origin of this call must be _Signed_ and the sender must
       * have funds to cover the deposit.
       *
       * - `proposal_hash`: The hash of the proposal preimage.
       * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
       *
       * Emits `Proposed`.
       *
       * Weight: `O(p)`
       **/
      propose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<BalanceOf>]>;
      /**
       * Remove an expired proposal preimage and collect the deposit.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `proposal_hash`: The preimage hash of a proposal.
       * - `proposal_length_upper_bound`: an upper bound on length of the proposal.
       * Extrinsic is weighted according to this value with no refund.
       *
       * This will only work after `VotingPeriod` blocks from the time that the preimage was
       * noted, if it's the same account doing it. If it's a different account, then it'll only
       * work an additional `EnactmentPeriod` later.
       *
       * Emits `PreimageReaped`.
       *
       * Weight: `O(D)` where D is length of proposal.
       **/
      reapPreimage: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<u32>]>;
      /**
       * Remove a vote for a referendum.
       *
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the referendum was cancelled, because the voter lost the referendum or
       * because the conviction period is over.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       *
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ReferendumIndex]>;
      /**
       * Remove a vote for a referendum.
       *
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       *
       * If, however, the referendum has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       *
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for referendum `index`.
       *
       * - `index`: The index of referendum of the vote to be removed.
       *
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Signals agreement with a particular proposal.
       *
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       *
       * - `proposal`: The index of the proposal to second.
       * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
       * proposal. Extrinsic is weighted according to this value with no refund.
       *
       * Weight: `O(S)` where S is the number of seconds a proposal already has.
       **/
      second: AugmentedSubmittable<(proposal: Compact<PropIndex> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>, Compact<u32>]>;
      /**
       * Undelegate the voting power of the sending account.
       *
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       *
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       *
       * Emits `Undelegated`.
       *
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock tokens that have an expired lock.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `target`: The account to remove the lock on.
       *
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Veto and blacklist the external proposal hash.
       *
       * The dispatch origin of this call must be `VetoOrigin`.
       *
       * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
       *
       * Emits `Vetoed`.
       *
       * Weight: `O(V + log(V))` where V is number of `existing vetoers`
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       *
       * Weight: `O(R)` where R is the number of referendums the voter has voted on.
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: AccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>, AccountVote]>;
    };
    dmpQueue: {
      /**
       * Service a single overweight message.
       *
       * - `origin`: Must pass `ExecuteOverweightOrigin`.
       * - `index`: The index of the overweight message to service.
       * - `weight_limit`: The amount of weight that message execution may take.
       *
       * Errors:
       * - `Unknown`: Message of `index` is unknown.
       * - `OverLimit`: Message execution may use greater than `weight_limit`.
       *
       * Events:
       * - `OverweightServiced`: On success.
       **/
      serviceOverweight: AugmentedSubmittable<(index: OverweightIndex | AnyNumber | Uint8Array, weightLimit: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OverweightIndex, Weight]>;
    };
    elections: {
      /**
       * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
       * deposit of the removed voters are returned.
       *
       * This is an root function to be used only for cleaning the state.
       *
       * The dispatch origin of this call must be root.
       *
       * # <weight>
       * The total number of voters and those that are defunct must be provided as witness data.
       * # </weight>
       **/
      cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Remove a particular member from the set. This is effective immediately and the bond of
       * the outgoing member is slashed.
       *
       * If a runner-up is available, then the best runner-up will be removed and replaces the
       * outgoing member. Otherwise, a new phragmen election is started.
       *
       * The dispatch origin of this call must be root.
       *
       * Note that this does not affect the designated block number of the next election.
       *
       * # <weight>
       * If we have a replacement, we use a small weight. Else, since this is a root call and
       * will go into phragmen, we assume full block for now.
       * # </weight>
       **/
      removeMember: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, hasReplacement: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, bool]>;
      /**
       * Remove `origin` as a voter.
       *
       * This removes the lock and returns the deposit.
       *
       * The dispatch origin of this call must be signed and be a voter.
       **/
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Renounce one's intention to be a candidate for the next election round. 3 potential
       * outcomes exist:
       *
       * - `origin` is a candidate and not elected in any set. In this case, the deposit is
       * unreserved, returned and origin is removed as a candidate.
       * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
       * origin is removed as a runner-up.
       * - `origin` is a current member. In this case, the deposit is unreserved and origin is
       * removed as a member, consequently not being a candidate for the next round anymore.
       * Similar to [`remove_members`], if replacement runners exists, they are immediately
       * used. If the prime is renouncing, then no prime will exist until the next round.
       *
       * The dispatch origin of this call must be signed, and have one of the above roles.
       *
       * # <weight>
       * The type of renouncing must be provided as witness data.
       * # </weight>
       **/
      renounceCandidacy: AugmentedSubmittable<(renouncing: Renouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Renouncing]>;
      /**
       * Submit oneself for candidacy. A fixed amount of deposit is recorded.
       *
       * All candidates are wiped at the end of the term. They either become a member/runner-up,
       * or leave the system while their deposit is slashed.
       *
       * The dispatch origin of this call must be signed.
       *
       * ### Warning
       *
       * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
       * to get their deposit back. Losing the spot in an election will always lead to a slash.
       *
       * # <weight>
       * The number of current candidates must be provided as witness data.
       * # </weight>
       **/
      submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Vote for a set of candidates for the upcoming round of election. This can be called to
       * set the initial votes, or update already existing votes.
       *
       * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
       * reserved. The deposit is based on the number of votes and can be updated over time.
       *
       * The `votes` should:
       * - not be empty.
       * - be less than the number of possible candidates. Note that all current members and
       * runners-up are also automatically candidates for the next round.
       *
       * If `value` is more than `who`'s total balance, then the maximum of the two is used.
       *
       * The dispatch origin of this call must be signed.
       *
       * ### Warning
       *
       * It is the responsibility of the caller to **NOT** place all of their balance into the
       * lock and keep some for further operations.
       *
       * # <weight>
       * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
       * # </weight>
       **/
      vote: AugmentedSubmittable<(votes: Vec<AccountId> | (AccountId | string | Uint8Array)[], value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Compact<BalanceOf>]>;
    };
    indices: {
      /**
       * Assign an previously unassigned index.
       *
       * Payment: `Deposit` is reserved from the sender account.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `index`: the index to be claimed. This must not be in use.
       *
       * Emits `IndexAssigned` if successful.
       *
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      claim: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       *
       * The dispatch origin for this call must be _Root_.
       *
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
       *
       * Emits `IndexAssigned` if successful.
       *
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one reserve operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (original owner)
       * - Writes: Indices Accounts, System Account (original owner)
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex, bool]>;
      /**
       * Free up an index owned by the sender.
       *
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       *
       * - `index`: the index to be freed. This must be owned by the sender.
       *
       * Emits `IndexFreed` if successful.
       *
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      free: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the deposit.
       *
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       *
       * - `index`: the index to be frozen in place.
       *
       * Emits `IndexFrozen` if successful.
       *
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one slash operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      freeze: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       *
       * Emits `IndexAssigned` if successful.
       *
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One transfer operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (recipient)
       * - Writes: Indices Accounts, System Account (recipient)
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex]>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       *
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       *
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       *
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, U8aFixed, Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       *
       * If there are enough, then dispatch the call.
       *
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       *
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       *
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       *
       * # <weight>
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: OpaqueCall | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, OpaqueCall, bool, Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       *
       * Result is equivalent to the dispatched result.
       *
       * # <weight>
       * O(Z + C) where Z is the length of the call and C its execution weight.
       * -------------------------------
       * - DB Weight: None
       * - Plus Call Weight
       * # </weight>
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       *
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account], Refund Account, Calls
       * - Write: Multisig Storage, [Caller Account], Refund Account, Calls
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Timepoint, U8aFixed]>;
    };
    parachainSystem: {
      authorizeUpgrade: AugmentedSubmittable<(codeHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Force an already scheduled validation function upgrade to happen on a particular block.
       *
       * Note that coordinating this block for the upgrade has to happen independently on the
       * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
       * and this bypasses all checks and and normal protocols. Very easy to brick your chain
       * if done wrong.
       **/
      setUpgradeBlock: AugmentedSubmittable<(relayChainBlock: RelayChainBlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RelayChainBlockNumber]>;
      /**
       * Set the current validation data.
       *
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       *
       * The dispatch origin for this call must be `Inherent`
       *
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: ParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: UpwardMessage | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [UpwardMessage]>;
    };
    polkadotXcm: {
      /**
       * Execute an XCM message from a local, signed, origin.
       *
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       *
       * No more than `max_weight` will be used in its attempted execution. If this is less than the
       * maximum amount of weight that the message could take to be executed, then no execution
       * attempt will be made.
       *
       * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
       * to completion; only that *some* of it was executed.
       **/
      execute: AugmentedSubmittable<(message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { TeleportAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Xcm, Weight]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
       * a notification XCM.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
       * `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, beneficiary: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, assets: Vec<MultiAsset> | (MultiAsset | { None: any } | { All: any } | { AllFungible: any } | { AllNonFungible: any } | { AllAbstractFungible: any } | { AllAbstractNonFungible: any } | { AllConcreteFungible: any } | { AllConcreteNonFungible: any } | { AbstractFungible: any } | { AbstractNonFungible: any } | { ConcreteFungible: any } | { ConcreteNonFungible: any } | string | Uint8Array)[], destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, MultiLocation, Vec<MultiAsset>, Weight]>;
      send: AugmentedSubmittable<(dest: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { TeleportAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, Xcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
       * `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      teleportAssets: AugmentedSubmittable<(dest: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, beneficiary: MultiLocation | { Null: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, assets: Vec<MultiAsset> | (MultiAsset | { None: any } | { All: any } | { AllFungible: any } | { AllNonFungible: any } | { AllAbstractFungible: any } | { AllAbstractNonFungible: any } | { AllConcreteFungible: any } | { AllConcreteNonFungible: any } | { AbstractFungible: any } | { AbstractNonFungible: any } | { ConcreteFungible: any } | { ConcreteNonFungible: any } | string | Uint8Array)[], destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, MultiLocation, Vec<MultiAsset>, Weight]>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      addProxy: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, BlockNumber]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       *
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       *
       * No more than `MaxPending` announcements may be made at any one time.
       *
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       *
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       *
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       *
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      announce: AugmentedSubmittable<(real: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       *
       * Requires a `Signed` origin.
       *
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       *
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       *
       * Fails if there are insufficient funds to pay for deposit.
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       * TODO: Might be over counting 1 read
       **/
      anonymous: AugmentedSubmittable<(proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ProxyType, BlockNumber, u16]>;
      /**
       * Removes a previously spawned anonymous proxy.
       *
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       *
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `anonymous` with corresponding parameters.
       *
       * - `spawner`: The account that originally called `anonymous` to create this account.
       * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `anonymous`.
       * - `height`: The height of the chain when the call to `anonymous` was processed.
       * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
       *
       * Fails with `NoPermission` in case the caller is not a previously created anonymous
       * account whose `anonymous` call has corresponding parameters.
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      killAnonymous: AugmentedSubmittable<(spawner: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<BlockNumber> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, u16, Compact<BlockNumber>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       *
       * Removes any corresponding announcement(s).
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      proxy: AugmentedSubmittable<(real: AccountId | string | Uint8Array, forceProxyType: Option<ProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Option<ProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       *
       * Removes any corresponding announcement(s).
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       *
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, real: AccountId | string | Uint8Array, forceProxyType: Option<ProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId, Option<ProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       *
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       *
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Remove a given announcement.
       *
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       *
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      removeAnnouncement: AugmentedSubmittable<(real: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Unregister all proxy accounts for the sender.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * WARNING: This may be called on accounts created by `anonymous`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       *
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      removeProxy: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, BlockNumber]>;
    };
    salp: {
      /**
       * Confirm contribute
       **/
      confirmContribute: AugmentedSubmittable<(who: AccountIdOf | string | Uint8Array, index: ParaId | AnyNumber | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array, isSuccess: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIdOf, ParaId, Compact<BalanceOf>, bool]>;
      /**
       * Confirm redeem by fund owner temporarily
       **/
      confirmRedeem: AugmentedSubmittable<(who: AccountIdOf | string | Uint8Array, index: ParaId | AnyNumber | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array, isSuccess: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIdOf, ParaId, BalanceOf, bool]>;
      /**
       * Confirm withdraw by fund owner temporarily
       **/
      confirmWithdraw: AugmentedSubmittable<(index: ParaId | AnyNumber | Uint8Array, isSuccess: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, bool]>;
      /**
       * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
       * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
       * slot is unable to be purchased and the timeout expires.
       **/
      contribute: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>, Compact<BalanceOf>]>;
      /**
       * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
       **/
      create: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array, cap: Compact<BalanceOf> | AnyNumber | Uint8Array, firstSlot: Compact<LeasePeriod> | AnyNumber | Uint8Array, lastSlot: Compact<LeasePeriod> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>, Compact<BalanceOf>, Compact<LeasePeriod>, Compact<LeasePeriod>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolve: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
      fundEnd: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
      fundFail: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
      fundRetire: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
      fundSuccess: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
      redeem: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>, BalanceOf]>;
      /**
       * Withdraw full balance of the parachain. this function may need to be called multiple
       * times
       * - `index`: The parachain to whose crowdloan the contribution was made.
       **/
      withdraw: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>]>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       *
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.15 + 2.869 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancel: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, u32]>;
      /**
       * Cancel a named scheduled task.
       *
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 24.91 + 2.907 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Anonymously schedule a task.
       *
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.29 + .126 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda
       * - Will use base weight of 25 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      schedule: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       *
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task.
       *
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 29.6 + .159 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 35 which should be good for more than 30 scheduled calls
       * # </weight>
       **/
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task after a delay.
       *
       * # <weight>
       * Same as [`schedule_named`].
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       *
       * The dispatch origin of this function must be signed.
       *
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       *
       * The dispatch origin of this function must be signed.
       *
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       *
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       *
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       *
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       *
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       *
       * # <weight>
       * - `O(b)` where b is the length of the remark.
       * - 1 event.
       * # </weight>
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       *
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       *
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       *
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       *
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       *
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
    };
    technicalCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       *
       * May be called by any signed account in order to finish voting and close the proposal.
       *
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       *
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       *
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       *
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       *
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       *
       * Must be called by the Root origin.
       *
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       *
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       *
       * Origin must be a member of the collective.
       *
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       *
       * Requires the sender to be member.
       *
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       *
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       *
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       *
       * Requires root origin.
       *
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       *
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       *
       * Requires the sender to be a member.
       *
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
    };
    technicalMembership: {
      /**
       * Add a member `who` to the set.
       *
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       *
       * May only be called from `Signed` origin of a current member.
       *
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       *
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       *
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       *
       * May only be called from `T::SwapOrigin`.
       *
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
    };
    timestamp: {
      /**
       * Set the current time.
       *
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       *
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       *
       * The dispatch origin for this call must be `Inherent`.
       *
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
    };
    tips: {
      /**
       * Close and payout a tip.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * The tip identified by `hash` must have finished its countdown period.
       *
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       *
       * # <weight>
       * - Complexity: `O(T)` where `T` is the number of tippers.
       * decoding `Tipper` vec of length `T`.
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * - DbReads: `Tips`, `Tippers`, `tip finder`
       * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
       * # </weight>
       **/
      closeTip: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`.
       *
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       *
       * Emits `NewTip` if successful.
       *
       * # <weight>
       * - Complexity: `O(R)` where `R` length of `reason`.
       * - encoding and hashing of 'reason'
       * - DbReads: `Reasons`, `Tips`
       * - DbWrites: `Reasons`, `Tips`
       * # </weight>
       **/
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId]>;
      /**
       * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
       *
       * If successful, the original deposit will be unreserved.
       *
       * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
       * must have been reported by the signing account through `report_awesome` (and not
       * through `tip_new`).
       *
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       *
       * Emits `TipRetracted` if successful.
       *
       * # <weight>
       * - Complexity: `O(1)`
       * - Depends on the length of `T::Hash` which is fixed.
       * - DbReads: `Tips`, `origin account`
       * - DbWrites: `Reasons`, `Tips`, `origin account`
       * # </weight>
       **/
      retractTip: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Remove and slash an already-open tip.
       *
       * May only be called from `T::RejectOrigin`.
       *
       * As a result, the finder is slashed and the deposits are lost.
       *
       * Emits `TipSlashed` if successful.
       *
       * # <weight>
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * # </weight>
       **/
      slashTip: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Declare a tip value for an already-open tip.
       *
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       *
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
       * account ID.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       *
       * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
       * has started.
       *
       * # <weight>
       * - Complexity: `O(T)` where `T` is the number of tippers.
       * decoding `Tipper` vec of length `T`, insert tip and check closing,
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       *
       * Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
       * is weighted as if almost full i.e of length `T-1`.
       * - DbReads: `Tippers`, `Tips`
       * - DbWrites: `Tips`
       * # </weight>
       **/
      tip: AugmentedSubmittable<(hash: Hash | string | Uint8Array, tipValue: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<BalanceOf>]>;
      /**
       * Give a tip for something new; no finder's fee will be taken.
       *
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       *
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       *
       * Emits `NewTip` if successful.
       *
       * # <weight>
       * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
       * - `O(T)`: decoding `Tipper` vec of length `T`
       * `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * - `O(R)`: hashing and encoding of reason of length `R`
       * - DbReads: `Tippers`, `Reasons`
       * - DbWrites: `Reasons`, `Tips`
       * # </weight>
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId | string | Uint8Array, tipValue: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId, Compact<BalanceOf>]>;
    };
    tokens: {
      /**
       * Transfer some balance to another account.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyId, Compact<Balance>]>;
      /**
       * Transfer all remaining balance to the given account.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferAll: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyId]>;
    };
    treasury: {
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
       * and the original deposit will be returned.
       *
       * May only be called from `T::ApproveOrigin`.
       *
       * # <weight>
       * - Complexity: O(1).
       * - DbReads: `Proposals`, `Approvals`
       * - DbWrite: `Approvals`
       * # </weight>
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ProposalIndex>]>;
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value
       * is reserved and slashed if the proposal is rejected. It is returned once the
       * proposal is awarded.
       *
       * # <weight>
       * - Complexity: O(1)
       * - DbReads: `ProposalCount`, `origin account`
       * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
       * # </weight>
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array, beneficiary: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>, LookupSource]>;
      /**
       * Reject a proposed spend. The original deposit will be slashed.
       *
       * May only be called from `T::RejectOrigin`.
       *
       * # <weight>
       * - Complexity: O(1)
       * - DbReads: `Proposals`, `rejected proposer account`
       * - DbWrites: `Proposals`, `rejected proposer account`
       * # </weight>
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ProposalIndex>]>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       *
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       *
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       *
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       *
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       *
       * May be called from any origin.
       *
       * - `calls`: The calls to be dispatched from the same origin.
       *
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       *
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       *
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       *
       * May be called from any origin.
       *
       * - `calls`: The calls to be dispatched from the same origin.
       *
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       *
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
    };
    vesting: {
      /**
       * Force a vested transfer.
       *
       * The dispatch origin for this call must be _Root_.
       *
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `amount`: The amount of funds to transfer and will be vested.
       * - `schedule`: The vesting schedule attached to the transfer.
       *
       * Emits `VestingCreated`.
       *
       * # <weight>
       * - `O(1)`.
       * - DbWeight: 4 Reads, 4 Writes
       * - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
       * - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
       * # </weight>
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: VestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, VestingInfo]>;
      /**
       * Unlock any vested funds of the sender account.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this pallet.
       *
       * Emits either `VestingCompleted` or `VestingUpdated`.
       *
       * # <weight>
       * - `O(1)`.
       * - DbWeight: 2 Reads, 2 Writes
       * - Reads: Vesting Storage, Balances Locks, [Sender Account]
       * - Writes: Vesting Storage, Balances Locks, [Sender Account]
       * # </weight>
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock any vested funds of a `target` account.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this pallet.
       *
       * Emits either `VestingCompleted` or `VestingUpdated`.
       *
       * # <weight>
       * - `O(1)`.
       * - DbWeight: 3 Reads, 3 Writes
       * - Reads: Vesting Storage, Balances Locks, Target Account
       * - Writes: Vesting Storage, Balances Locks, Target Account
       * # </weight>
       **/
      vestOther: AugmentedSubmittable<(target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Create a vested transfer.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `target`: The account that should be transferred the vested funds.
       * - `amount`: The amount of funds to transfer and will be vested.
       * - `schedule`: The vesting schedule attached to the transfer.
       *
       * Emits `VestingCreated`.
       *
       * # <weight>
       * - `O(1)`.
       * - DbWeight: 3 Reads, 3 Writes
       * - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
       * - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
       * # </weight>
       **/
      vestedTransfer: AugmentedSubmittable<(target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: VestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, VestingInfo]>;
    };
    vsBondAuction: {
      clinchOrder: AugmentedSubmittable<(orderId: Compact<OrderId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<OrderId>]>;
      createOrder: AugmentedSubmittable<(index: Compact<ParaId> | AnyNumber | Uint8Array, firstSlot: Compact<LeasePeriodOf> | AnyNumber | Uint8Array, lastSlot: Compact<LeasePeriodOf> | AnyNumber | Uint8Array, supply: Compact<BalanceOf> | AnyNumber | Uint8Array, unitPrice: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ParaId>, Compact<LeasePeriodOf>, Compact<LeasePeriodOf>, Compact<BalanceOf>, Compact<BalanceOf>]>;
      partialClinchOrder: AugmentedSubmittable<(orderId: Compact<OrderId> | AnyNumber | Uint8Array, quantity: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<OrderId>, Compact<BalanceOf>]>;
      revokeOrder: AugmentedSubmittable<(orderId: Compact<OrderId> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<OrderId>]>;
    };
    vtokenMint: {
      /**
       * Mint vtoken.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      mint: AugmentedSubmittable<(vtokenId: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, tokenAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Redeem token.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      redeem: AugmentedSubmittable<(tokenId: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, vtokenAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Set price for minting vtoken.
       *
       * The dispatch origin for this call must be `Root` by the
       * transactor.
       **/
      setVtokenPool: AugmentedSubmittable<(tokenId: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array, newTokenPool: Compact<BalanceOf> | AnyNumber | Uint8Array, newVtokenPool: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyIdOf, Compact<BalanceOf>, Compact<BalanceOf>]>;
    };
    zenlinkProtocol: {
      /**
       * Provide liquidity to a pair.
       *
       * The order of foreign dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
       * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
       * - `amount_0_min`: Minimum amount of asset_0 added to the pair
       * - `amount_1_min`: Minimum amount of asset_1 added to the pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      addLiquidity: AugmentedSubmittable<(asset0: AssetId | AnyNumber | Uint8Array, asset1: AssetId | AnyNumber | Uint8Array, amount0Desired: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amount1Desired: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amount0Min: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amount1Min: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId, Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Compact<BlockNumber>]>;
      /**
       * Create pair by two assets.
       *
       * The order of foreign dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up Pair
       * - `asset_1`: Asset which make up Pair
       **/
      createPair: AugmentedSubmittable<(asset0: AssetId | AnyNumber | Uint8Array, asset1: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId]>;
      /**
       * Extract liquidity.
       *
       * The order of foreign dot effect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
       * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
       * - `recipient`: Account that accepts withdrawal of assets
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidity: AugmentedSubmittable<(asset0: AssetId | AnyNumber | Uint8Array, asset1: AssetId | AnyNumber | Uint8Array, liquidity: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amount0Min: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amount1Min: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, recipient: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AssetId, Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Buy amount of foreign by path.
       *
       * # Arguments
       *
       * - `amount_out`: Amount of the foreign will be bought
       * - `amount_in_max`: Maximum amount of sold foreign
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target foreign
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapAssetsForExactAssets: AugmentedSubmittable<(amountOut: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amountInMax: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[], recipient: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Vec<AssetId>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Sell amount of foreign by path.
       *
       * # Arguments
       *
       * - `amount_in`: Amount of the foreign will be sold
       * - `amount_out_min`: Minimum amount of target foreign
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target foreign
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapExactAssetsForAssets: AugmentedSubmittable<(amountIn: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, amountOutMin: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, path: Vec<AssetId> | (AssetId | AnyNumber | Uint8Array)[], recipient: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ZenlinkAssetBalance>, Compact<ZenlinkAssetBalance>, Vec<AssetId>, LookupSource, Compact<BlockNumber>]>;
      /**
       * Move some assets from one holder to another.
       *
       * # Arguments
       *
       * - `asset_id`: The foreign id.
       * - `target`: The receiver of the foreign.
       * - `amount`: The amount of the foreign to transfer.
       **/
      transfer: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, recipient: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, LookupSource, Compact<ZenlinkAssetBalance>]>;
      /**
       * Transfer zenlink assets to a sibling parachain.
       *
       * Zenlink assets can be either native or foreign to the sending parachain.
       *
       * # Arguments
       *
       * - `asset_id`: Global identifier for a zenlink foreign
       * - `para_id`: Destination parachain
       * - `account`: Destination account
       * - `amount`: Amount to transfer
       **/
      transferToParachain: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, paraId: ParaId | AnyNumber | Uint8Array, recipient: AccountId | string | Uint8Array, amount: Compact<ZenlinkAssetBalance> | AnyNumber | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, ParaId, AccountId, Compact<ZenlinkAssetBalance>, Weight]>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
  }
}
