// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Permill } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, Struct, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { BifrostAssetRegistryAssetMetadata, BifrostKusamaRuntimeOriginCaller, BifrostKusamaRuntimeProxyType, BifrostKusamaRuntimeSessionKeys, BifrostSalpFundStatus, BifrostSalpLiteFundStatus, BifrostSlpPrimitivesDelays, BifrostSlpPrimitivesLedger, BifrostSlpPrimitivesMinimumsMaximums, BifrostSlpPrimitivesXcmOperation, BifrostSystemMakerInfo, BifrostVestingVestingInfo, BifrostVsbondAuctionOrderType, BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee, BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportPreimagesBounded, NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyTokenSymbol, NodePrimitivesTimeUnit, PalletDemocracyConviction, PalletDemocracyVoteAccountVote, PalletElectionsPhragmenRenouncing, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletMultisigTimepoint, SpWeightsWeightV2Weight, XcmInterfaceXcmInterfaceOperation, XcmV2MultiLocation, XcmV3MultiLocation, XcmV3Response, XcmV3WeightLimit, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm, ZenlinkProtocolPrimitivesAssetId, ZenlinkSwapRouterRoute } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      forceSetMultilocation: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, SpWeightsWeightV2Weight]>;
      registerMultilocation: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, SpWeightsWeightV2Weight]>;
      registerNativeAsset: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, metadata: BifrostAssetRegistryAssetMetadata | { name?: any; symbol?: any; decimals?: any; minimalBalance?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, BifrostAssetRegistryAssetMetadata]>;
      registerTokenMetadata: AugmentedSubmittable<(metadata: BifrostAssetRegistryAssetMetadata | { name?: any; symbol?: any; decimals?: any; minimalBalance?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BifrostAssetRegistryAssetMetadata]>;
      registerVsbondMetadata: AugmentedSubmittable<(tokenId: u8 | AnyNumber | Uint8Array, paraId: u32 | AnyNumber | Uint8Array, firstSlot: u32 | AnyNumber | Uint8Array, lastSlot: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8, u32, u32, u32]>;
      registerVstokenMetadata: AugmentedSubmittable<(tokenId: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      registerVtokenMetadata: AugmentedSubmittable<(tokenId: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      updateNativeAsset: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, metadata: BifrostAssetRegistryAssetMetadata | { name?: any; symbol?: any; decimals?: any; minimalBalance?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, BifrostAssetRegistryAssetMetadata]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is not
       * assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       *
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Set the balances of a given account.
       *
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also alter the total issuance of the system (`TotalIssuance`) appropriately.
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       *
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       *
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       *
       * The dispatch origin for this call must be `Signed` by the transactor.
       *
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for input config
       * types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex
       * computation.
       *
       * Related functions:
       *
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
       * that the transfer will not kill the origin account.
       * ---------------------------------
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
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
       * keep the sender account alive (true). # <weight>
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       * #</weight>
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       *
       * 99% of the time you want [`transfer`] instead.
       *
       * [`transfer`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       *
       * May only be called from `T::SpendOrigin`.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
       * after a delay.
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
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
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
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
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
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
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
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
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
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * Assign a curator to a funded bounty.
       *
       * May only be called from `T::SpendOrigin`.
       *
       * # <weight>
       * - O(1).
       * # </weight>
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a bounty.
       *
       * This function can only be called by the `RejectOrigin` a signed origin.
       *
       * If this function is called by the `RejectOrigin`, we assume that the curator is
       * malicious or inactive. As a result, we will slash the curator when possible.
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
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    callSwitchgear: {
      disableTransfers: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      enableTransfers: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      switchoffTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      switchonTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
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
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
       * `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
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
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
       * `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      closeOldWeight: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
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
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       *
       * Origin must be a member of the collective.
       *
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
       * `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
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
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       *
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       *
       * Requires root origin.
       *
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       *
       * # WARNING:
       *
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       *
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
       * members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       *
       * Requires the sender to be a member.
       *
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    councilMembership: {
      /**
       * Add a member `who` to the set.
       *
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Swap out the sending member for some other key `new`.
       *
       * May only be called from `Signed` origin of a current member.
       *
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
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
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       *
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Set the prime member. Must be a current member.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Swap out one member `remove` for another `add`.
       *
       * May only be called from `T::SwapOrigin`.
       *
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, add: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    crossInOut: {
      addToIssueWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      addToRegisterWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      changeOuterLinkedAccount: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, foreignLocation: XcmV2MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV2MultiLocation, AccountId32]>;
      crossIn: AugmentedSubmittable<(location: XcmV2MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, remark: Option<Bytes> | null | Uint8Array | Bytes | string) => SubmittableExtrinsic<ApiType>, [XcmV2MultiLocation, NodePrimitivesCurrencyCurrencyId, Compact<u128>, Option<Bytes>]>;
      /**
       * Destroy some balance from an account and issue cross-out event.
       **/
      crossOut: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      deregisterCurrencyForCrossInOut: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      registerCurrencyForCrossInOut: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      registerLinkedAccount: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: AccountId32 | string | Uint8Array, foreignLocation: XcmV2MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32, XcmV2MultiLocation]>;
      removeFromIssueWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      removeFromRegisterWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      setCrossingMinimumAmount: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, crossInMinimum: u128 | AnyNumber | Uint8Array, crossOutMinimum: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Transfer some native currency to another account.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * update amount of account `who` under `currency_id`.
       *
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * Remove a proposal.
       *
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       *
       * - `prop_index`: The index of the proposal to cancel.
       *
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove a referendum.
       *
       * The dispatch origin of this call must be _Root_.
       *
       * - `ref_index`: The index of the referendum to cancel.
       *
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
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
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       *
       * Emits `Delegated`.
       *
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletDemocracyConviction, u128]>;
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
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       *
       * The dispatch origin of this call must be `ExternalOrigin`.
       *
       * - `proposal_hash`: The preimage hash of the proposal.
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
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
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
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
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       *
       * The dispatch of this call must be `FastTrackOrigin`.
       *
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * Must be always greater than zero.
       * For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       *
       * Emits `Started`.
       *
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
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
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
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
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
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
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Signals agreement with a particular proposal.
       *
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       *
       * - `proposal`: The index of the proposal to second.
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
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
      unlock: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
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
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       *
       * The dispatch origin of this call must be _Signed_.
       *
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * Service a single overweight message.
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    farming: {
      addBoostPoolWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      charge: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>;
      chargeBoost: AugmentedSubmittable<(rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>;
      claim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      closePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      createFarmingPool: AugmentedSubmittable<(tokensProportion: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, Perbill]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[], basicRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], gaugeInit: Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]], minDepositToStart: u128 | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitTime: Compact<u32> | AnyNumber | Uint8Array, claimLimitTime: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitCount: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, Perbill]>>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>>, u128, Compact<u32>, Compact<u32>, Compact<u32>, u8]>;
      deposit: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, addValue: u128 | AnyNumber | Uint8Array, gaugeInfo: Option<ITuple<[u128, u32]>> | null | Uint8Array | ITuple<[u128, u32]> | [u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<ITuple<[u128, u32]>>]>;
      editPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, gaugeBasicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>, Option<u32>, Option<u32>, Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>, Option<u8>]>;
      endBoostRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      forceGaugeClaim: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      forceRetirePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      gaugeWithdraw: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      killPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      resetPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], minDepositToStart: Option<u128> | null | Uint8Array | u128 | AnyNumber, afterBlockToStart: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber, gaugeInit: Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]]) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>, Option<u128>, Option<u32>, Option<u32>, Option<u32>, Option<u8>, Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>>]>;
      setNextRoundWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      setRetireLimit: AugmentedSubmittable<(limit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      startBoostRound: AugmentedSubmittable<(roundLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      vote: AugmentedSubmittable<(voteList: Vec<ITuple<[u32, Percent]>> | ([u32 | AnyNumber | Uint8Array, Percent | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, Percent]>>]>;
      withdraw: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, removeValue: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
      withdrawClaim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    feeShare: {
      createDistribution: AugmentedSubmittable<(tokenType: Vec<NodePrimitivesCurrencyCurrencyId> | (NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array)[], tokensProportion: Vec<ITuple<[AccountId32, Perbill]>> | ([AccountId32 | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[], ifAuto: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<NodePrimitivesCurrencyCurrencyId>, Vec<ITuple<[AccountId32, Perbill]>>, bool]>;
      deleteDistribution: AugmentedSubmittable<(distributionId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      editDistribution: AugmentedSubmittable<(distributionId: u32 | AnyNumber | Uint8Array, tokenType: Option<Vec<NodePrimitivesCurrencyCurrencyId>> | null | Uint8Array | Vec<NodePrimitivesCurrencyCurrencyId> | (NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array)[], tokensProportion: Option<Vec<ITuple<[AccountId32, Perbill]>>> | null | Uint8Array | Vec<ITuple<[AccountId32, Perbill]>> | ([AccountId32 | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[], ifAuto: Option<bool> | null | Uint8Array | bool | boolean) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<NodePrimitivesCurrencyCurrencyId>>, Option<Vec<ITuple<[AccountId32, Perbill]>>>, Option<bool>]>;
      executeDistribute: AugmentedSubmittable<(distributionId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      setEraLength: AugmentedSubmittable<(eraLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    flexibleFee: {
      removeFromUserFeeChargeOrderList: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Set universal fee currency order list
       **/
      setUniversalFeeCurrencyOrderList: AugmentedSubmittable<(defaultList: Vec<NodePrimitivesCurrencyCurrencyId> | (NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<NodePrimitivesCurrencyCurrencyId>]>;
      /**
       * Set user default fee currency
       **/
      setUserDefaultFeeCurrency: AugmentedSubmittable<(maybeFeeCurrency: Option<NodePrimitivesCurrencyCurrencyId> | null | Uint8Array | NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string) => SubmittableExtrinsic<ApiType>, [Option<NodePrimitivesCurrencyCurrencyId>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * Add a registrar to the system.
       *
       * The dispatch origin for this call must be `T::RegistrarOrigin`.
       *
       * - `account`: the account of the registrar.
       *
       * Emits `RegistrarAdded` if successful.
       *
       * # <weight>
       * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
       * - One storage mutation (codec `O(R)`).
       * - One event.
       * # </weight>
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Add the given account to the sender's subs.
       *
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Cancel a previous request.
       *
       * Payment: A previously reserved deposit is returned on success.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       *
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       *
       * Emits `JudgementUnrequested` if successful.
       *
       * # <weight>
       * - `O(R + X)`.
       * - One balance-reserve operation.
       * - One storage mutation `O(R + X)`.
       * - One event
       * # </weight>
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       *
       * Payment: All reserved balances on the account are returned.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       *
       * Emits `IdentityCleared` if successful.
       *
       * # <weight>
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       * - One balance-unreserve operation.
       * - `2` storage reads and `S + 2` storage deletions.
       * - One event.
       * # </weight>
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       *
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       *
       * The dispatch origin for this call must match `T::ForceOrigin`.
       *
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       *
       * Emits `IdentityKilled` if successful.
       *
       * # <weight>
       * - `O(R + S + X)`.
       * - One balance-reserve operation.
       * - `S + 2` storage mutations.
       * - One event.
       * # </weight>
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Provide a judgement for an account's identity.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       *
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
       *
       * Emits `JudgementGiven` if successful.
       *
       * # <weight>
       * - `O(R + X)`.
       * - One balance-transfer operation.
       * - Up to one account-lookup operation.
       * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
       * - One event.
       * # </weight>
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * Remove the sender as a sub-account.
       *
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender (*not* the original depositor).
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * super-identity.
       *
       * NOTE: This should not normally be used, but is provided in the case that the non-
       * controller of an account is maliciously registered as a sub-account.
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the given account from the sender's subs.
       *
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Alter the associated name of the given sub-account.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Request a judgement from a registrar.
       *
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       *
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       *
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       *
       * Emits `JudgementRequested` if successful.
       *
       * # <weight>
       * - `O(R + X)`.
       * - One balance-reserve operation.
       * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
       * - One event.
       * # </weight>
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Change the account associated with a registrar.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       *
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       *
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
       * # </weight>
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       *
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       *
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
       * # </weight>
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Set the field information for a registrar.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       *
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       *
       * # <weight>
       * - `O(R)`.
       * - One storage mutation `O(R)`.
       * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
       * # </weight>
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       *
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * - `info`: The identity information.
       *
       * Emits `IdentitySet` if successful.
       *
       * # <weight>
       * - `O(X + X' + R)`
       * - where `X` additional-field-count (deposit-bounded and code-bounded)
       * - where `R` judgements-count (registrar-count-bounded)
       * - One balance reserve operation.
       * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
       * - One event.
       * # </weight>
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * Set the sub-accounts of the sender.
       *
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       *
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       *
       * - `subs`: The identity's (new) sub-accounts.
       *
       * # <weight>
       * - `O(P + S)`
       * - where `P` old-subs-count (hard- and deposit-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - At most one balance operations.
       * - DB:
       * - `P + S` storage mutations (codec complexity `O(1)`)
       * - One storage read (codec complexity `O(P)`).
       * - One storage write (codec complexity `O(S)`).
       * - One storage-exists (`IdentityOf::contains_key`).
       * # </weight>
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
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
      forceTransfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
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
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the
       * deposit.
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
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
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
      transfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    lighteningRedeem: {
      /**
       * Anyone can add KSM to the pool.
       **/
      addKsmToPool: AugmentedSubmittable<(tokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      editExchangePrice: AugmentedSubmittable<(price: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      editReleasePerDay: AugmentedSubmittable<(amountPerDay: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      editReleaseStartAndEndBlock: AugmentedSubmittable<(start: u32 | AnyNumber | Uint8Array, end: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      exchangeForKsm: AugmentedSubmittable<(tokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidityMining: {
      /**
       * Caller cancels the specific pending-unlock.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to cancel:
       * - The pool state is `PoolState::Ongoing`.
       * - There is a `pending-unlock` that is specific by the parameter `index`;
       **/
      cancelUnlock: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
       *
       * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
       * When the extrinsic was executed successfully, the liquidity-pool would be at
       * `PoolState::Charged`.
       **/
      charge: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller withdraw the unclaimed rewards owned by self from a pool.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to claim:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing`.
       **/
      claim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
       * `vsToken` and reserved `vsBond` as deposit.
       **/
      createEbFarmingPool: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, firstSlot: u32 | AnyNumber | Uint8Array, lastSlot: u32 | AnyNumber | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
       * and free `vsBond` as deposit.
       **/
      createFarmingPool: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, firstSlot: u32 | AnyNumber | Uint8Array, lastSlot: u32 | AnyNumber | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
       * deposit.
       **/
      createMiningPool: AugmentedSubmittable<(tradingPair: ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array], mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
       * deposit.
       **/
      createSingleTokenPool: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Caller deposits some token to a liquidity-pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * The conditions to deposit:
       * - The deposit caller was contributed to the pool should be bigger than
       * `T::MinimumDeposit`;
       * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
       **/
      deposit: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Edit the parameters of a liquidity-pool.
       *
       * __NOTE__: Forbid editing the liquidity-pool which type is `PoolType::EBFarming`;
       **/
      editPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, redeemLimitTime: u32 | AnyNumber | Uint8Array, unlockLimitNums: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * Make a liquidity-pool be at `PoolState::Retired` forcefully.
       *
       * __NOTE__:
       * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
       * the pool would be deleted and the rewards charged would be returned back.
       *
       * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
       * the field `block_retired` of the pool would be set to the current block height.
       **/
      forceRetirePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Kill a liquidity-pool at `PoolState::Uncharged`.
       **/
      killPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      lazyMigrationV200: AugmentedSubmittable<(maxNums: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller redeems some deposit owned by self from a pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * __NOTE__:
       * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
       * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
       * than `T::MinimumDeposit`.
       *
       * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
       * owned by the caller, whatever the `value` is.
       *
       * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
       * after calling the extrinsic, the remaining rewards left in the pool will be returned
       * back to the charger.
       *
       * The condition to redeem:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
       **/
      redeem: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Caller redeems all deposit owned by self from a pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * __NOTE__:
       * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
       * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
       * than `T::MinimumDeposit`.
       *
       * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
       * after calling the extrinsic, the remaining rewards left in the pool will be
       * returned back to the charger.
       *
       * The condition to redeem:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
       **/
      redeemAll: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller unlocks the locked deposit in the liquidity-pool.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to unlock:
       * - The pool type is not `PoolType::EBFarming`.
       * - There are pending-unlocks in the deposit_data.
       * - The current block-height exceeded the unlock-height;
       **/
      unlock: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A selfless man intimately helps depositors of the pool to redeem their deposit,
       * aaaaaaah, such a grateful!!
       *
       * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
       * randomly;
       *
       * If the `account` is specific and a depositor of the pool indeed, who will be given
       * "freedom" by the extrinsic.
       *
       * The condition to redeem:
       * - The pool is at `PoolState::Retired`.
       **/
      volunteerToRedeem: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, account: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidityMiningDOT: {
      /**
       * Caller cancels the specific pending-unlock.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to cancel:
       * - The pool state is `PoolState::Ongoing`.
       * - There is a `pending-unlock` that is specific by the parameter `index`;
       **/
      cancelUnlock: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
       *
       * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
       * When the extrinsic was executed successfully, the liquidity-pool would be at
       * `PoolState::Charged`.
       **/
      charge: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller withdraw the unclaimed rewards owned by self from a pool.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to claim:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing`.
       **/
      claim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
       * `vsToken` and reserved `vsBond` as deposit.
       **/
      createEbFarmingPool: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, firstSlot: u32 | AnyNumber | Uint8Array, lastSlot: u32 | AnyNumber | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
       * and free `vsBond` as deposit.
       **/
      createFarmingPool: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, firstSlot: u32 | AnyNumber | Uint8Array, lastSlot: u32 | AnyNumber | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
       * deposit.
       **/
      createMiningPool: AugmentedSubmittable<(tradingPair: ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array], mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
       * deposit.
       **/
      createSingleTokenPool: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]> | [NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array], optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], duration: Compact<u32> | AnyNumber | Uint8Array, minDepositToStart: Compact<u128> | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, redeemLimitTime: Compact<u32> | AnyNumber | Uint8Array, unlockLimitNums: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Caller deposits some token to a liquidity-pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * The conditions to deposit:
       * - The deposit caller was contributed to the pool should be bigger than
       * `T::MinimumDeposit`;
       * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
       **/
      deposit: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Edit the parameters of a liquidity-pool.
       *
       * __NOTE__: Forbid editing the liquidity-pool which type is `PoolType::EBFarming`;
       **/
      editPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, redeemLimitTime: u32 | AnyNumber | Uint8Array, unlockLimitNums: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * Make a liquidity-pool be at `PoolState::Retired` forcefully.
       *
       * __NOTE__:
       * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
       * the pool would be deleted and the rewards charged would be returned back.
       *
       * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
       * the field `block_retired` of the pool would be set to the current block height.
       **/
      forceRetirePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Kill a liquidity-pool at `PoolState::Uncharged`.
       **/
      killPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      lazyMigrationV200: AugmentedSubmittable<(maxNums: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller redeems some deposit owned by self from a pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * __NOTE__:
       * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
       * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
       * than `T::MinimumDeposit`.
       *
       * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
       * owned by the caller, whatever the `value` is.
       *
       * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
       * after calling the extrinsic, the remaining rewards left in the pool will be returned
       * back to the charger.
       *
       * The condition to redeem:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
       **/
      redeem: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Caller redeems all deposit owned by self from a pool.
       *
       * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
       *
       * __NOTE__:
       * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
       * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
       * than `T::MinimumDeposit`.
       *
       * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
       * after calling the extrinsic, the remaining rewards left in the pool will be
       * returned back to the charger.
       *
       * The condition to redeem:
       * - There is enough deposit owned by the caller in the pool.
       * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
       **/
      redeemAll: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Caller unlocks the locked deposit in the liquidity-pool.
       *
       * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
       *
       * The conditions to unlock:
       * - The pool type is not `PoolType::EBFarming`.
       * - There are pending-unlocks in the deposit_data.
       * - The current block-height exceeded the unlock-height;
       **/
      unlock: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A selfless man intimately helps depositors of the pool to redeem their deposit,
       * aaaaaaah, such a grateful!!
       *
       * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
       * randomly;
       *
       * If the `account` is specific and a depositor of the pool indeed, who will be given
       * "freedom" by the extrinsic.
       *
       * The condition to redeem:
       * - The pool is at `PoolState::Retired`.
       **/
      volunteerToRedeem: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, account: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    merkleDistributor: {
      addToCreateWhitelist: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Charge currency to the account of merkle distributor
       *
       * `merkle_distributor_id`: ID of a merkle distributor.
       **/
      charge: AugmentedSubmittable<(merkleDistributorId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * `claim` Claim rewards through user information and merkle proof.
       *
       * - `merkle_distributor_id`: ID of a merkle distributor.
       * - `index`: The index of the merkle tree leaf.
       * - `account`: The owner's account of merkle proof.
       * - `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
       **/
      claim: AugmentedSubmittable<(merkleDistributorId: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array, account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, merkleProof: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress, u128, Vec<H256>]>;
      /**
       * `create_merkle_distributor` will create a merkle distributor,
       * which allow specified users claim asset.
       *
       * The dispatch origin for this call must be `Signed` by root.
       *
       * - `merkle_root`: The root of a merkle tree.
       * - `description`: About the purpose of this distribution.
       * - `distribute_currency`: The id of currency about this distribution.
       * - `distribute_amount`: The total currency amount of this distribution.
       **/
      createMerkleDistributor: AugmentedSubmittable<(merkleRoot: H256 | string | Uint8Array, description: Bytes | string | Uint8Array, distributeCurrency: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, distributeAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, NodePrimitivesCurrencyCurrencyId, u128]>;
      emergencyWithdraw: AugmentedSubmittable<(merkleDistributorId: u32 | AnyNumber | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, u128]>;
      removeFromCreateWhitelist: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
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
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account]
       * - Writes: Multisig Storage, [Caller Account]
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
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
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
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
       * - Read: Multisig Storage, [Caller Account], Refund Account
       * - Write: Multisig Storage, [Caller Account], Refund Account
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * Send an XCM message as parachain sovereign.
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * Cancel pending request to adjust the collator candidate self bond
       **/
      cancelCandidateBondLess: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Cancel request to change an existing delegation.
       **/
      cancelDelegationRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Cancel open request to leave candidates
       * - only callable by collator account
       * - result upon successful call is the candidate is active in the candidate pool
       **/
      cancelLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel a pending request to exit the set of delegators. Success clears the pending exit
       * request (thereby resetting the delay upon another `leave_delegators` call).
       **/
      cancelLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Increase collator candidate self bond by `more`
       **/
      candidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * If caller is not a delegator and not a collator, then join the set of delegators
       * If caller is a delegator, then makes delegation to change their delegation state
       **/
      delegate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32, u32]>;
      /**
       * Bond more for delegators wrt a specific collator candidate.
       **/
      delegatorBondMore: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * Execute pending request to adjust the collator candidate self bond
       **/
      executeCandidateBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Execute pending request to change an existing delegation
       **/
      executeDelegationRequest: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
      /**
       * Execute leave candidates request
       **/
      executeLeaveCandidates: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Execute the right to exit the set of delegators and revoke all ongoing delegations.
       **/
      executeLeaveDelegators: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Temporarily leave the set of collator candidates without unbonding
       **/
      goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Rejoin the set of collator candidates if previously had called `go_offline`
       **/
      goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Hotfix to migrate a collator's reserve to a lock. For any given collator in the
       * provided list:
       * * this fn is idempotent
       * * is safe to call if the collator doesn't exist
       * * is safe to call if the collator has been migrated
       * * is safe to call if the collator is a collator (this is a no-op)
       *
       * weight calculation:
       * reads:
       * * CollatorReserveToLockMigrations
       * * CandidateInfo
       * writes:
       * * unreserve()
       * * set_lock()
       * * CollatorReserveToLockMigrations
       * other: 50M flat weight + 100M weight per item
       **/
      hotfixMigrateCollatorsFromReserveToLocks: AugmentedSubmittable<(collators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Hotfix to migrate a delegator's reserve to a lock. For any given delegator in the
       * provided list:
       * * this fn is idempotent
       * * is safe to call if the delegator doesn't exist
       * * is safe to call if the delegator has been migrated
       * * is safe to call if the delegator is a collator (this is a no-op)
       *
       * weight calculation:
       * reads:
       * * DelegatorReserveToLockMigrations
       * * DelegatorState
       * writes:
       * * unreserve()
       * * set_lock()
       * * DelegatorReserveToLockMigrations
       * other: 50M flat weight + 100M weight per item
       **/
      hotfixMigrateDelegatorsFromReserveToLocks: AugmentedSubmittable<(delegators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Hotfix to remove existing empty entries for candidates that have left.
       **/
      hotfixRemoveDelegationRequestsExitedCandidates: AugmentedSubmittable<(candidates: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Join the set of collator candidates
       **/
      joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Request by collator candidate to decrease self bond by `less`
       **/
      scheduleCandidateBondLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Request bond less for delegators wrt a specific collator candidate.
       **/
      scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * Request to leave the set of candidates. If successful, the account is immediately
       * removed from the candidate pool to prevent selection as a collator.
       **/
      scheduleLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Request to leave the set of delegators. If successful, the caller is scheduled to be
       * allowed to exit via a [DelegationAction::Revoke] towards all existing delegations.
       * Success forbids future delegation requests until the request is invoked or cancelled.
       **/
      scheduleLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Request to revoke an existing delegation. If successful, the delegation is scheduled
       * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
       **/
      scheduleRevokeDelegation: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Set blocks per round
       * - if called with `new` less than length of current round, will transition immediately
       * in the next block
       * - also updates per-round inflation config
       **/
      setBlocksPerRound: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the commission for all collators
       **/
      setCollatorCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Set the annual inflation rate to derive per-round inflation
       **/
      setInflation: AugmentedSubmittable<(schedule: {
    readonly min: Perbill;
    readonly ideal: Perbill;
    readonly max: Perbill;
  } & Struct | { min?: any; ideal?: any; max?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [{
    readonly min: Perbill;
    readonly ideal: Perbill;
    readonly max: Perbill;
  } & Struct]>;
      /**
       * Set the account that will hold funds set aside for parachain bond
       **/
      setParachainBondAccount: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Set the percent of inflation set aside for parachain bond
       **/
      setParachainBondReservePercent: AugmentedSubmittable<(updated: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * Set the expectations for total staked. These expectations determine the issuance for
       * the round according to logic in `fn compute_issuance`
       **/
      setStakingExpectations: AugmentedSubmittable<(expectations: {
    readonly min: u128;
    readonly ideal: u128;
    readonly max: u128;
  } & Struct | { min?: any; ideal?: any; max?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [{
    readonly min: u128;
    readonly ideal: u128;
    readonly max: u128;
  } & Struct]>;
      /**
       * Set the total number of collator candidates selected per round
       * - changes are not applied until the start of the next round
       **/
      setTotalSelected: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
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
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    phragmenElection: {
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
       * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
       * started, else, nothing happens.
       *
       * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
       * it is returned.
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
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, slashBond: bool | boolean | Uint8Array, rerunElection: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool, bool]>;
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
       * Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
       * are immediately used. If the prime is renouncing, then no prime will exist until the
       * next round.
       *
       * The dispatch origin of this call must be signed, and have one of the above roles.
       *
       * # <weight>
       * The type of renouncing must be provided as witness data.
       * # </weight>
       **/
      renounceCandidacy: AugmentedSubmittable<(renouncing: PalletElectionsPhragmenRenouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionsPhragmenRenouncing]>;
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
       * If `value` is more than `who`'s free balance, then the maximum of the two is used.
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
      vote: AugmentedSubmittable<(votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * Set a safe XCM version (the version that XCM should be encoded with if the most recent
       * version a destination can accept is unknown).
       *
       * - `origin`: Must be Root.
       * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Ask a location to notify us regarding their XCM version and any changes to it.
       *
       * - `origin`: Must be Root.
       * - `location`: The location to which we should subscribe for XCM version notifications.
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Require that a particular destination should no longer notify us regarding any XCM
       * version changes.
       *
       * - `origin`: Must be Root.
       * - `location`: The location to which we are currently subscribed for XCM version
       * notifications which we no longer desire.
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       *
       * - `origin`: Must be Root.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV3MultiLocation, u32]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       *
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       *
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       *
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       *
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       *
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * Register a preimage on-chain.
       *
       * If the preimage was previously requested, no fees or deposits are taken for providing
       * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Request a preimage be uploaded to the chain without paying any fees or deposits.
       *
       * If the preimage requests has already been provided on-chain, we unreserve any deposit
       * a user may have paid, and take the control of the preimage out of their hands.
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear an unrequested preimage from the runtime storage.
       *
       * If `len` is provided, then it will be a much cheaper operation.
       *
       * - `hash`: The hash of the preimage to be removed from the store.
       * - `len`: The length of the preimage of `hash`.
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear a previously made request for a preimage.
       *
       * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, BifrostKusamaRuntimeProxyType, u32]>;
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
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
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
       **/
      createPure: AugmentedSubmittable<(proxyType: BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BifrostKusamaRuntimeProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       *
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       *
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       *
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       *
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, BifrostKusamaRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<BifrostKusamaRuntimeProxyType> | null | Uint8Array | BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<BifrostKusamaRuntimeProxyType>, Call]>;
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
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<BifrostKusamaRuntimeProxyType> | null | Uint8Array | BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<BifrostKusamaRuntimeProxyType>, Call]>;
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
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
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
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * WARNING: This may be called on accounts created by `pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
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
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: BifrostKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, BifrostKusamaRuntimeProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    salp: {
      /**
       * Unlock the reserved vsToken/vsBond after fund success
       **/
      batchUnlock: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      buyback: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Confirm contribute
       **/
      confirmContribute: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, isSuccess: bool | boolean | Uint8Array, messageId: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u32>, bool, U8aFixed]>;
      confirmContribution: AugmentedSubmittable<(queryId: u64 | AnyNumber | Uint8Array, response: XcmV3Response | { Null: any } | { Assets: any } | { ExecutionResult: any } | { Version: any } | { PalletsInfo: any } | { DispatchResult: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, XcmV3Response]>;
      continueFund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
       * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
       * slot is unable to be purchased and the timeout expires.
       **/
      contribute: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
       **/
      create: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolve: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolveRefunded: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Edit the configuration for an in-progress crowdloan.
       *
       * Can only be called by Root origin.
       **/
      edit: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, raised: Compact<u128> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, fundStatus: Option<BifrostSalpFundStatus> | null | Uint8Array | BifrostSalpFundStatus | 'Ongoing' | 'Retired' | 'Success' | 'Failed' | 'RefundWithdrew' | 'RedeemWithdrew' | 'FailedToContinue' | 'End' | number) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u128>, Compact<u32>, Compact<u32>, Option<BifrostSalpFundStatus>]>;
      fundEnd: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      fundFail: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      fundRetire: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      fundSuccess: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      redeem: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      refund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>, Compact<u128>]>;
      setMultisigConfirmAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Unlock the reserved vsToken/vsBond after fund success
       **/
      unlock: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u32>]>;
      unlockByVsbond: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, vsbond: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      unlockVstoken: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Withdraw full balance of the parachain.
       * - `index`: The parachain to whose crowdloan the contribution was made.
       **/
      withdraw: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    salpLite: {
      continueFund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
       **/
      create: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolve: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolveRefunded: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>]>;
      /**
       * Edit the configuration for an in-progress crowdloan.
       *
       * Can only be called by Root origin.
       **/
      edit: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, raised: Compact<u128> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, fundStatus: Option<BifrostSalpLiteFundStatus> | null | Uint8Array | BifrostSalpLiteFundStatus | 'Ongoing' | 'Retired' | 'Success' | 'Failed' | 'RefundWithdrew' | 'RedeemWithdrew' | 'FailedToContinue' | number) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u128>, Compact<u32>, Compact<u32>, Option<BifrostSalpLiteFundStatus>]>;
      fundFail: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      fundRetire: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      fundSuccess: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
       * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
       * slot is unable to be purchased and the timeout expires.
       **/
      issue: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, messageId: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u32>, Compact<u128>, U8aFixed]>;
      redeem: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      refund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>, Compact<u128>]>;
      setMultisigConfirmAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Withdraw full balance of the parachain.
       * - `index`: The parachain to whose crowdloan the contribution was made.
       **/
      withdraw: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Cancel a named scheduled task.
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Anonymously schedule a task.
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       *
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task.
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task after a delay.
       *
       * # <weight>
       * Same as [`schedule_named`](Self::schedule_named).
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       *
       * This doesn't take effect until the next session.
       *
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       *
       * # <weight>
       * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
       * of `T::Keys::key_ids()` which is fixed.
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
       * - Complexity: `O(1)`. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: BifrostKusamaRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BifrostKusamaRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    slp: {
      /**
       * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
       **/
      addDelegator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, index: Compact<u16> | AnyNumber | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u16>, XcmV3MultiLocation]>;
      addSupplementFeeAccountToWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      addToValidatorBoostList: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * Update storage Validators<T>.
       **/
      addValidator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * First time bonding some amount to a delegator.
       **/
      bond: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, validator: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Compact<u128>, Option<XcmV3MultiLocation>]>;
      /**
       * Bond extra amount to a delegator.
       **/
      bondExtra: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, validator: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<XcmV3MultiLocation>, Compact<u128>]>;
      /**
       * Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
       * for single delegator.
       **/
      chargeHostFeeAndTuneVtokenExchangeRate: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, who: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u128>, Option<XcmV3MultiLocation>]>;
      /**
       * Initiate payout for a certain delegator.
       **/
      chill: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      confirmDelegatorLedger: AugmentedSubmittable<(queryId: u64 | AnyNumber | Uint8Array, response: XcmV3Response | { Null: any } | { Assets: any } | { ExecutionResult: any } | { Version: any } | { PalletsInfo: any } | { DispatchResult: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, XcmV3Response]>;
      /**
       * ********************************************************************
       * *************Outer Confirming Xcm queries functions ****************
       * ********************************************************************
       **/
      confirmDelegatorLedgerQueryResponse: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, queryId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u64>]>;
      confirmValidatorsByDelegator: AugmentedSubmittable<(queryId: u64 | AnyNumber | Uint8Array, response: XcmV3Response | { Null: any } | { Assets: any } | { ExecutionResult: any } | { Version: any } | { PalletsInfo: any } | { DispatchResult: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, XcmV3Response]>;
      confirmValidatorsByDelegatorQueryResponse: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, queryId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u64>]>;
      convertAsset: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, ifFromCurrency: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Compact<u128>, bool]>;
      decreaseTokenPool: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Delegate to some validator set.
       **/
      delegate: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, targets: Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Vec<XcmV3MultiLocation>]>;
      failDelegatorLedgerQueryResponse: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, queryId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u64>]>;
      failValidatorsByDelegatorQueryResponse: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, queryId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u64>]>;
      increaseTokenPool: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * *****************************
       * ****** Outer Calls ******
       * *****************************
       *
       * Delegator initialization work. Generate a new delegator and return its ID.
       **/
      initializeDelegator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, delegatorLocation: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<XcmV3MultiLocation>]>;
      /**
       * Withdraw the due payout into free balance.
       **/
      liquidize: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, when: Option<NodePrimitivesTimeUnit> | null | Uint8Array | NodePrimitivesTimeUnit | { Era: any } | { SlashingSpan: any } | { Round: any } | { Kblock: any } | { Hour: any } | string, validator: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string, amount: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<NodePrimitivesTimeUnit>, Option<XcmV3MultiLocation>, Option<u128>]>;
      /**
       * Initiate payout for a certain delegator.
       **/
      payout: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, validator: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, when: Option<NodePrimitivesTimeUnit> | null | Uint8Array | NodePrimitivesTimeUnit | { Era: any } | { SlashingSpan: any } | { Round: any } | { Kblock: any } | { Hour: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, XcmV3MultiLocation, Option<NodePrimitivesTimeUnit>]>;
      /**
       * Rebond some unlocking amount to a delegator.
       **/
      rebond: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, validator: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string, amount: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<XcmV3MultiLocation>, Option<u128>]>;
      /**
       * Re-delegate existing delegation to a new validator set.
       **/
      redelegate: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, targets: Option<Vec<XcmV3MultiLocation>> | null | Uint8Array | Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<Vec<XcmV3MultiLocation>>]>;
      refundCurrencyDueUnbond: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
       **/
      removeDelegator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * Update storage Validator_boost_list<T>.
       **/
      removeFromValidatorBootList: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      removeSupplementFeeAccountFromWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * Update storage Validators<T>.
       **/
      removeValidator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * Reset the whole storage Validators<T>.
       **/
      resetValidators: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, validatorList: Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Vec<XcmV3MultiLocation>]>;
      /**
       * Update storage Delays<T>.
       **/
      setCurrencyDelays: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, maybeDelays: Option<BifrostSlpPrimitivesDelays> | null | Uint8Array | BifrostSlpPrimitivesDelays | { unlockDelay?: any; leaveDelegatorsDelay?: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<BifrostSlpPrimitivesDelays>]>;
      /**
       * Set  CurrencyTuneExchangeRateLimit<T> storage.
       **/
      setCurrencyTuneExchangeRateLimit: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, maybeTuneExchangeRateLimit: Option<ITuple<[u32, Permill]>> | null | Uint8Array | ITuple<[u32, Permill]> | [u32 | AnyNumber | Uint8Array, Permill | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<ITuple<[u32, Permill]>>]>;
      /**
       * Update storage DelegatorLedgers<T>.
       **/
      setDelegatorLedger: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, ledger: Option<BifrostSlpPrimitivesLedger> | null | Uint8Array | BifrostSlpPrimitivesLedger | { Substrate: any } | { Moonbeam: any } | { ParachainStaking: any } | { Filecoin: any } | { Phala: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<BifrostSlpPrimitivesLedger>]>;
      /**
       * Update storage FeeSources<T>.
       **/
      setFeeSource: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, whoAndFee: Option<ITuple<[XcmV3MultiLocation, u128]>> | null | Uint8Array | ITuple<[XcmV3MultiLocation, u128]> | [XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<ITuple<[XcmV3MultiLocation, u128]>>]>;
      /**
       * Set HostingFees storage.
       **/
      setHostingFees: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, maybeFeeSet: Option<ITuple<[Permill, XcmV3MultiLocation]>> | null | Uint8Array | ITuple<[Permill, XcmV3MultiLocation]> | [Permill | AnyNumber | Uint8Array, XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<ITuple<[Permill, XcmV3MultiLocation]>>]>;
      /**
       * Update storage MinimumsAndMaximums<T>.
       **/
      setMinimumsAndMaximums: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, constraints: Option<BifrostSlpPrimitivesMinimumsMaximums> | null | Uint8Array | BifrostSlpPrimitivesMinimumsMaximums | { delegatorBondedMinimum?: any; bondExtraMinimum?: any; unbondMinimum?: any; rebondMinimum?: any; unbondRecordMaximum?: any; validatorsBackMaximum?: any; delegatorActiveStakingMaximum?: any; validatorsRewardMaximum?: any; delegationAmountMinimum?: any; delegatorsMaximum?: any; validatorsMaximum?: any } | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<BifrostSlpPrimitivesMinimumsMaximums>]>;
      /**
       * Set  OngoingTimeUnitUpdateInterval<T> storage.
       **/
      setOngoingTimeUnitUpdateInterval: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, maybeInterval: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<u32>]>;
      /**
       * Update storage OperateOrigins<T>.
       **/
      setOperateOrigin: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<AccountId32>]>;
      /**
       * Reset the whole storage Validator_boost_list<T>.
       **/
      setValidatorBoostList: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, validatorList: Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Vec<XcmV3MultiLocation>]>;
      /**
       * Update storage ValidatorsByDelegator<T>.
       **/
      setValidatorsByDelegator: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, validators: Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Vec<XcmV3MultiLocation>]>;
      /**
       * *****************************
       * ****** Storage Setters ******
       * *****************************
       *
       * Update storage XcmDestWeightAndFee<T>.
       **/
      setXcmDestWeightAndFee: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, operation: BifrostSlpPrimitivesXcmOperation | 'XtokensTransfer' | 'Bond' | 'WithdrawUnbonded' | 'BondExtra' | 'Unbond' | 'Rebond' | 'Delegate' | 'Payout' | 'Liquidize' | 'TransferBack' | 'TransferTo' | 'Chill' | 'Undelegate' | 'CancelLeave' | 'XtokensTransferBack' | 'ExecuteLeave' | 'ConvertAsset' | number | Uint8Array, weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>> | null | Uint8Array | ITuple<[SpWeightsWeightV2Weight, u128]> | [SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, BifrostSlpPrimitivesXcmOperation, Option<ITuple<[SpWeightsWeightV2Weight, u128]>>]>;
      supplementFeeReserve: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, dest: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      transferBack: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, from: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, to: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, XcmV3MultiLocation, Compact<u128>]>;
      transferTo: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, from: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, to: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, XcmV3MultiLocation, Compact<u128>]>;
      /**
       * Decrease some amount to a delegator. Leave no less than the minimum delegator
       * requirement.
       **/
      unbond: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, validator: Option<XcmV3MultiLocation> | null | Uint8Array | XcmV3MultiLocation | { parents?: any; interior?: any } | string, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Option<XcmV3MultiLocation>, Compact<u128>]>;
      /**
       * Unbond all the active amount of a delegator.
       **/
      unbondAll: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation]>;
      /**
       * Re-delegate existing delegation to a new validator set.
       **/
      undelegate: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, who: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, targets: Vec<XcmV3MultiLocation> | (XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, XcmV3MultiLocation, Vec<XcmV3MultiLocation>]>;
      updateOngoingTimeUnit: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, timeUnit: NodePrimitivesTimeUnit | { Era: any } | { SlashingSpan: any } | { Round: any } | { Kblock: any } | { Hour: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, NodePrimitivesTimeUnit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Kill all storage items with a key that starts with the given prefix.
       *
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
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
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       *
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
       * expensive).
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very
       * expensive. We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       *
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full
       * block. # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    systemMaker: {
      charge: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      close: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      payout: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      setConfig: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, info: BifrostSystemMakerInfo | { vcurrencyId?: any; annualization?: any; granularity?: any; minimumRedeem?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, BifrostSystemMakerInfo]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    systemStaking: {
      /**
       * Update token config，take effect when next round begins
       **/
      deleteToken: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * payout to treasury
       **/
      payout: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * refresh token info，query farming pallet, and update TokenInfo, change to new
       * config，ignore exec_delay, execute immediately
       **/
      refreshTokenInfo: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Update token config，take effect when next round begins
       **/
      tokenConfig: AugmentedSubmittable<(token: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, execDelay: Option<u32> | null | Uint8Array | u32 | AnyNumber, systemStakableFarmingRate: Option<Permill> | null | Uint8Array | Permill | AnyNumber, addOrSub: Option<bool> | null | Uint8Array | bool | boolean, systemStakableBase: Option<u128> | null | Uint8Array | u128 | AnyNumber, farmingPoolids: Option<Vec<u32>> | null | Uint8Array | Vec<u32> | (u32 | AnyNumber | Uint8Array)[], lptokenRates: Option<Vec<Perbill>> | null | Uint8Array | Vec<Perbill> | (Perbill | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, Option<u32>, Option<Permill>, Option<bool>, Option<u128>, Option<Vec<u32>>, Option<Vec<Perbill>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
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
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
       * `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
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
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
       * `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      closeOldWeight: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, Compact<u64>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
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
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       *
       * Origin must be a member of the collective.
       *
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
       * `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
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
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       *
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       *
       * Requires root origin.
       *
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       *
       * # WARNING:
       *
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       *
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
       * members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       *
       * Requires the sender to be a member.
       *
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalMembership: {
      /**
       * Add a member `who` to the set.
       *
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Swap out the sending member for some other key `new`.
       *
       * May only be called from `Signed` origin of a current member.
       *
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
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
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       *
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Set the prime member. Must be a current member.
       *
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Swap out one member `remove` for another `add`.
       *
       * May only be called from `T::SwapOrigin`.
       *
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, add: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
       * `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
       * depends on the implementation of `T::Tippers`.
       * - DbReads: `Tips`, `Tippers`, `tip finder`
       * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
       * # </weight>
       **/
      closeTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
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
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, MultiAddress]>;
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
      retractTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
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
      slashTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
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
       * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
       * `T`, insert tip and check closing, `T` is charged as upper bound given by
       * `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
       *
       * Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
       * is weighted as if almost full i.e of length `T-1`.
       * - DbReads: `Tippers`, `Tips`
       * - DbWrites: `Tips`
       * # </weight>
       **/
      tip: AugmentedSubmittable<(hash: H256 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
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
       * - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
       * `ContainsLengthBound`. The actual cost depends on the implementation of
       * `T::Tippers`.
       * - `O(R)`: hashing and encoding of reason of length `R`
       * - DbReads: `Tippers`, `Reasons`
       * - DbWrites: `Reasons`, `Tips`
       * # </weight>
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokenIssuer: {
      addToIssueWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      addToTransferWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      issue: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      removeFromIssueWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      removeFromTransferWhitelist: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, AccountId32]>;
      /**
       * Destroy some balance from an account.
       *
       * The dispatch origin for this call must be `Root` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source
       * account may be specified.
       *
       * The dispatch origin for this call must be _Root_.
       *
       * - `source`: The sender of the transfer.
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Set the balances of a given account.
       *
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it
       * will also decrease the total issuance of the system
       * (`TotalIssuance`). If the new free or reserved balance is below the
       * existential deposit, it will reap the `AccountInfo`.
       *
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       *
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the
       * `TransferFee`. If the sender's account is below the existential
       * deposit as a result of the transfer, the account will be reaped.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       *
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Transfer all remaining balance to the given account.
       *
       * NOTE: This function only attempts to transfer _transferable_
       * balances. This means that any locked, reserved, or existential
       * deposits (when `keep_alive` is `true`), will not be transferred by
       * this function. To ensure that this function results in a killed
       * account, you might need to prepare the account by removing any
       * reference counters, storage deposits, etc...
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       *
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `keep_alive`: A boolean to determine if the `transfer_all`
       * operation should send all of the funds the account has, causing
       * the sender account to be killed (false), or transfer everything
       * except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer
       * will not kill the origin account.
       *
       * 99% of the time you want [`transfer`] instead.
       *
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       *
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, NodePrimitivesCurrencyCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
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
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
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
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * The original deposit will no longer be returned.
       *
       * May only be called from `T::RejectOrigin`.
       * - `proposal_id`: The index of a proposal
       *
       * # <weight>
       * - Complexity: O(A) where `A` is the number of approvals
       * - Db reads and writes: `Approvals`
       * # </weight>
       *
       * Errors:
       * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
       * i.e., the proposal has not been approved. This could also mean the proposal does not
       * exist altogether, thus there is no way it would have been approved in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       *
       * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       *
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       *
       * May be called from any origin except `None`.
       *
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       *
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
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
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       *
       * May be called from any origin except `None`.
       *
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       *
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       *
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       *
       * The dispatch origin for this call must be _Root_.
       *
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
       * # </weight>
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: BifrostKusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BifrostKusamaRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       *
       * May be called from any origin except `None`.
       *
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       *
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       *
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a function call with a specified weight.
       *
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       *
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      forceSetCliff: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, cliffBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      forceSetVested: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: BifrostVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, BifrostVestingVestingInfo]>;
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
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: BifrostVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, BifrostVestingVestingInfo]>;
      initVestingStartAt: AugmentedSubmittable<(vestingStartAt: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      setVestingPerBlock: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, perBlock: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
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
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: BifrostVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, BifrostVestingVestingInfo]>;
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
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vsBondAuction: {
      /**
       * Users(non-order-creator) buy the remaining `vsbond` of a sell order.
       **/
      clinchOrder: AugmentedSubmittable<(orderId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Create a sell order or buy order to sell `vsbond`.
       **/
      createOrder: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, tokenSymbol: NodePrimitivesCurrencyTokenSymbol | 'ASG' | 'BNC' | 'KUSD' | 'DOT' | 'KSM' | 'ETH' | 'KAR' | 'ZLK' | 'PHA' | 'RMRK' | 'MOVR' | number | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, totalPrice: Compact<u128> | AnyNumber | Uint8Array, orderType: BifrostVsbondAuctionOrderType | 'Sell' | 'Buy' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, NodePrimitivesCurrencyTokenSymbol, Compact<u32>, Compact<u32>, Compact<u128>, Compact<u128>, BifrostVsbondAuctionOrderType]>;
      /**
       * Revoke a sell or buy order in trade by the order creator.
       **/
      forceRevoke: AugmentedSubmittable<(orderId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Users(non-order-creator) buys some of the remaining `vsbond` of a sell or buy order.
       **/
      partialClinchOrder: AugmentedSubmittable<(orderId: Compact<u64> | AnyNumber | Uint8Array, quantity: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>, Compact<u128>]>;
      /**
       * Revoke a sell or buy order in trade by the order creator.
       **/
      revokeOrder: AugmentedSubmittable<(orderId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      setBuyAndSellTransactionFeeRate: AugmentedSubmittable<(buyRate: u32 | AnyNumber | Uint8Array, sellRate: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vstokenConversion: {
      setExchangeFee: AugmentedSubmittable<(exchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee | { vstokenExchangeFee?: any; vsbondExchangeFeeOfVstoken?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee]>;
      setExchangeRate: AugmentedSubmittable<(lease: i32 | AnyNumber | Uint8Array, exchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate | { vsbondConvertToVstoken?: any; vstokenConvertToVsbond?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [i32, BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate]>;
      setRelaychainLease: AugmentedSubmittable<(lease: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      vsbondConvertToVstoken: AugmentedSubmittable<(vsBondCurrencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, vsbondAmount: u128 | AnyNumber | Uint8Array, minimumVstoken: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128, u128]>;
      vstokenConvertToVsbond: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, vstokenAmount: u128 | AnyNumber | Uint8Array, minimumVsbond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vtokenMinting: {
      addSupportRebondToken: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      mint: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, tokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      rebond: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, tokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      rebondByUnlockId: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, unlockId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u32]>;
      redeem: AugmentedSubmittable<(vtokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, vtokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      removeSupportRebondToken: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId]>;
      setFees: AugmentedSubmittable<(mintFee: Permill | AnyNumber | Uint8Array, redeemFee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Permill, Permill]>;
      setHookIterationLimit: AugmentedSubmittable<(limit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      setMinimumMint: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      setMinimumRedeem: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      setMinTimeUnit: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, timeUnit: NodePrimitivesTimeUnit | { Era: any } | { SlashingSpan: any } | { Round: any } | { Kblock: any } | { Hour: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, NodePrimitivesTimeUnit]>;
      setUnlockDuration: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, unlockDuration: NodePrimitivesTimeUnit | { Era: any } | { SlashingSpan: any } | { Round: any } | { Kblock: any } | { Hour: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, NodePrimitivesTimeUnit]>;
      setUnlockingTotal: AugmentedSubmittable<(tokenId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmInterface: {
      transferStatemineAssets: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, dest: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u32, Option<AccountId32>]>;
      /**
       * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
       *
       * Parameters:
       * - `updates`: vec of tuple: (XcmInterfaceOperation, WeightChange, FeeChange).
       **/
      updateXcmDestWeightAndFee: AugmentedSubmittable<(updates: Vec<ITuple<[XcmInterfaceXcmInterfaceOperation, Option<SpWeightsWeightV2Weight>, Option<u128>]>> | ([XcmInterfaceXcmInterfaceOperation | 'UmpContributeTransact' | 'StatemineTransfer' | number | Uint8Array, Option<SpWeightsWeightV2Weight> | null | Uint8Array | SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string, Option<u128> | null | Uint8Array | u128 | AnyNumber])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[XcmInterfaceXcmInterfaceOperation, Option<SpWeightsWeightV2Weight>, Option<u128>]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * Resumes all XCM executions for the XCMP queue.
       *
       * Note that this function doesn't change the status of the in/out bound channels.
       *
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Services a single overweight XCM.
       *
       * - `origin`: Must pass `ExecuteOverweightOrigin`.
       * - `index`: The index of the overweight XCM to service
       * - `weight_limit`: The amount of weight that XCM execution may take.
       *
       * Errors:
       * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
       * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
       * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
       *
       * Events:
       * - `OverweightServiced`: On success.
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
       *
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Overwrites the number of pages of messages which must be in the queue after which we drop any further
       * messages from the channel.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.drop_threshold`
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
       * message sending may recommence after it has been suspended.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.resume_threshold`
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
       * suspend their sending.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.suspend_value`
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the amount of remaining weight under which we stop processing messages.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.threshold_weight`
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Overwrites the speed to which the available weight approaches the maximum weight.
       * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Overwrite the maximum amount of weight any individual message may consume.
       * Messages above this weight go into the overweight queue and may only be serviced explicitly.
       *
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * Transfer native currencies.
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transfer: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `MultiAsset`.
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several `MultiAsset` specifying the item to be used as fee
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * `fee_item` is index of the MultiAssets that we want to use for
       * payment
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassets: AugmentedSubmittable<(assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `MultiAsset` specifying the fee and amount as separate.
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * `fee` is the multiasset to be spent to pay for execution in
       * destination chain. Both fee and amount will be subtracted form the
       * callers balance For now we only accept fee and asset having the same
       * `MultiLocation` id.
       *
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several currencies specifying the item to be used as fee
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * `fee_item` is index of the currencies tuple that we want to use for
       * payment
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> | ([NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer native currencies specifying the fee and amount as
       * separate.
       *
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       *
       * `fee` is the amount to be spent to pay for execution in destination
       * chain. Both fee and amount will be subtracted form the callers
       * balance.
       *
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       *
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NodePrimitivesCurrencyCurrencyId, u128, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
      addLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Desired: Compact<u128> | AnyNumber | Uint8Array, amount1Desired: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>]>;
      bootstrapChargeReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Claim lp asset from a bootstrap pair
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      bootstrapClaim: AugmentedSubmittable<(recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u32>]>;
      /**
       * Contribute some asset to a bootstrap pair
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
       * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      bootstrapContribute: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Contribute: Compact<u128> | AnyNumber | Uint8Array, amount1Contribute: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u32>]>;
      /**
       * Create bootstrap pair
       *
       * The order of asset don't affect result.
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `target_supply_0`: Target amount of asset_0 total contribute
       * - `target_supply_0`: Target amount of asset_1 total contribute
       * - `capacity_supply_0`: The max amount of asset_0 total contribute
       * - `capacity_supply_1`: The max amount of asset_1 total contribute
       * - `end`: The earliest ending block.
       **/
      bootstrapCreate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * End a bootstrap pair
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       **/
      bootstrapEnd: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Contributor refund from disable bootstrap pair
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       **/
      bootstrapRefund: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * update a bootstrap pair
       *
       * # Arguments
       *
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `min_contribution_0`: The new min amount of asset_0 contribute
       * - `min_contribution_0`: The new min amount of asset_1 contribute
       * - `target_supply_0`: The new target amount of asset_0 total contribute
       * - `target_supply_0`: The new target amount of asset_1 total contribute
       * - `capacity_supply_0`: The new max amount of asset_0 total contribute
       * - `capacity_supply_1`: The new max amount of asset_1 total contribute
       * - `end`: The earliest ending block.
       **/
      bootstrapUpdate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      bootstrapWithdrawReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, MultiAddress]>;
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
      createPair: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
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
      removeLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, liquidity: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, MultiAddress, Compact<u32>]>;
      /**
       * Set the protocol fee point.
       *
       * # Arguments
       *
       * - `fee_point`:
       * 0 means that all exchange fees belong to the liquidity provider.
       * 30 means that all exchange fees belong to the fee receiver.
       **/
      setFeePoint: AugmentedSubmittable<(feePoint: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      /**
       * Set the new receiver of the protocol fee.
       *
       * # Arguments
       *
       * - `send_to`:
       * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
       * (2) None: it turn off the protocol fee.
       **/
      setFeeReceiver: AugmentedSubmittable<(sendTo: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [Option<MultiAddress>]>;
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
      swapAssetsForExactAssets: AugmentedSubmittable<(amountOut: Compact<u128> | AnyNumber | Uint8Array, amountInMax: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
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
      swapExactAssetsForAssets: AugmentedSubmittable<(amountIn: Compact<u128> | AnyNumber | Uint8Array, amountOutMin: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
      /**
       * Move some assets from one holder to another.
       *
       * # Arguments
       *
       * - `asset_id`: The foreign id.
       * - `target`: The receiver of the foreign.
       * - `amount`: The amount of the foreign to transfer.
       **/
      transfer: AugmentedSubmittable<(assetId: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    zenlinkStableAMM: {
      /**
       * Supply amounts of currencies to the pool.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `amounts`: Supply amounts of currencies.
       * - `min_mint_amount`: The min amount of lp currency get.
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      addLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], minMintAmount: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Vec<u128>, u128, AccountId32, u32]>;
      /**
       * Supply amounts of currencies to the pool which contains the lp currency of the base
       * pool.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `base_pool_id`: The id of base pool.
       * - `meta_amounts`: Supply amounts of currencies to pool. The last element must be zero.
       * - `base_amounts`: Supply amounts of currencies to base pool.
       * - `min_to_mint`: The min amount of pool lp currency get.
       * - `deadline`: Height of the cutoff block of this transaction.
       **/
      addPoolAndBasePoolLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, basePoolId: u32 | AnyNumber | Uint8Array, metaAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], baseAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], minToMint: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, Vec<u128>, Vec<u128>, u128, AccountId32, u32]>;
      /**
       * Create a stable amm pool.
       *
       * Only admin can create pool.
       *
       * # Argument
       *
       * - `currency_ids`: The currencies will be join the created pool.
       * - `currency_decimals`: The currencies corresponding decimals.
       * - `lp_currency_id`: The specify lp currency id of the created pool.
       * - `a`: The initial A of created pool.
       * - `fee`: The swap fee of created pool.
       * - `admin_fee`: The admin fee of created pool.
       * - `admin_fee_receiver`: The admin fee receiver of created pool.
       * - `lp_currency_symbol`: The symbol of created pool lp currency.
       * - `lp_currency_decimal`: The decimal of created pool lp currency.
       **/
      createBasePool: AugmentedSubmittable<(currencyIds: Vec<NodePrimitivesCurrencyCurrencyId> | (NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array)[], currencyDecimals: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], a: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, adminFee: u128 | AnyNumber | Uint8Array, adminFeeReceiver: AccountId32 | string | Uint8Array, lpCurrencySymbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<NodePrimitivesCurrencyCurrencyId>, Vec<u32>, u128, u128, u128, AccountId32, Bytes]>;
      /**
       * Create a stable amm meta pool.
       *
       * Only admin can create pool.
       *
       * # Argument
       *
       * - `currency_ids`: The currencies will be join the created pool.
       * - `currency_decimals`: The currencies corresponding decimals.
       * - `lp_currency_id`: The specify lp currency id of the created pool.
       * - `a`: The initial A of created pool.
       * - `fee`: The swap fee of created pool.
       * - `admin_fee`: The admin fee of created pool.
       * - `admin_fee_receiver`: The admin fee receiver of created pool.
       * - `lp_currency_symbol`: The symbol of created pool lp currency.
       * - `lp_currency_decimal`: The decimal of created pool lp currency.
       **/
      createMetaPool: AugmentedSubmittable<(currencyIds: Vec<NodePrimitivesCurrencyCurrencyId> | (NodePrimitivesCurrencyCurrencyId | { Native: any } | { VToken: any } | { Token: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | { LPToken: any } | { ForeignAsset: any } | { Token2: any } | { VToken2: any } | { VSToken2: any } | { VSBond2: any } | { StableLpToken: any } | string | Uint8Array)[], currencyDecimals: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], a: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, adminFee: u128 | AnyNumber | Uint8Array, adminFeeReceiver: AccountId32 | string | Uint8Array, lpCurrencySymbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<NodePrimitivesCurrencyCurrencyId>, Vec<u32>, u128, u128, u128, AccountId32, Bytes]>;
      /**
       * Start ramping up or down A parameter towards given future_a and future_a_time
       *
       * Only called by admin.
       * Checks if the change is too rapid, and commits the new A value only when it falls under
       * the limit range.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `future_a`: The new A to ramp towards.
       * - `future_a_time`: Timestamp when the new A should be reached
       **/
      rampA: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, futureA: u128 | AnyNumber | Uint8Array, futureATime: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128]>;
      /**
       * Remove liquidity from a pool.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `lp_amount`: The amounts of lp currency.
       * - `min_amounts`: The min amounts of pool's currencies to get.
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidity: AugmentedSubmittable<(pooId: u32 | AnyNumber | Uint8Array, lpAmount: u128 | AnyNumber | Uint8Array, minAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, Vec<u128>, AccountId32, u32]>;
      /**
       * Remove liquidity from a pool to the specify amounts of currencies.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `amounts`: The specify amounts of receive currencies.
       * - `max_burn_amount`: The max amount of burned lp currency.
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidityImbalance: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], maxBurnAmount: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Vec<u128>, u128, AccountId32, u32]>;
      /**
       * Remove liquidity from a pool to get one currency.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `lp_amount`: The amounts of lp currency.
       * - `index`: The index of receive currency.
       * - `min_amount`: The min amounts of received currency;
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidityOneCurrency: AugmentedSubmittable<(pooId: u32 | AnyNumber | Uint8Array, lpAmount: u128 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array, minAmount: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128, AccountId32, u32]>;
      /**
       * Remove liquidity from a pool which contains the lp currency of the base pool.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `base_pool_id`: The id of base pool.
       * - `amount`: The amounts of lp currency to burn.
       * - `min_amounts_meta`: The min amounts of pool's currencies to get.
       * - `min_amounts_base`: The min amounts of basic pool's currencies to get.
       * - `deadline`: Height of the cutoff block of this transaction.
       **/
      removePoolAndBasePoolLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, basePoolId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minAmountsMeta: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], minAmountsBase: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, Vec<u128>, Vec<u128>, AccountId32, u32]>;
      /**
       * Remove liquidity from a pool which contains the lp currency of the base pool
       * to get one currency.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `base_pool_id`: The id of base pool.
       * - `amount`: The amounts of lp currency to burn.
       * - `i`: The index of target currency in basic pool.
       * - `min_amount`: The min amounts of received currency.
       * - `deadline`: Height of the cutoff block of this transaction.
       **/
      removePoolAndBasePoolLiquidityOneCurrency: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, basePoolId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, i: u32 | AnyNumber | Uint8Array, minAmount: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u32, u128, AccountId32, u32]>;
      /**
       * Update admin fee of the pool.
       *
       * Only called by admin.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `new_admin_fee`: The new admin fee of this pool.
       **/
      setAdminFee: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newAdminFee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Update fee of the pool.
       *
       * Only called by admin.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `new_swap_fee`: The new swap fee of this pool.
       **/
      setSwapFee: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newSwapFee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Stop ramping A parameter.
       *
       * Only called by admin.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       **/
      stopRampA: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Swap a amounts of currencies to get other.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `from_index`: The index of swap currency id.
       * - `to_index`: The index of receive currency id.
       * - `in_amount`: The amounts of currencies swap.
       * - `min_mint_amount`: The min amount of receive currency.
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swap: AugmentedSubmittable<(pooId: u32 | AnyNumber | Uint8Array, fromIndex: u32 | AnyNumber | Uint8Array, toIndex: u32 | AnyNumber | Uint8Array, inAmount: u128 | AnyNumber | Uint8Array, minOutAmount: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128, AccountId32, u32]>;
      swapMetaPoolUnderlying: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, inIndex: u32 | AnyNumber | Uint8Array, outIndex: u32 | AnyNumber | Uint8Array, dx: u128 | AnyNumber | Uint8Array, minDy: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128, AccountId32, u32]>;
      /**
       * Swap the currency from basic pool to get amounts of other currency in pool.
       * to get one currency.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `base_pool_id`: The id of base pool.
       * - `in_index`: The index of swap currency in basic pool.
       * - `out_index`: The index of target currency in pool.
       * - `dx`: The amounts of swap currency.
       * - `min_dy`: The min amounts of target currency.
       * - `deadline`: Height of the cutoff block of this transaction.
       **/
      swapPoolFromBase: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, basePoolId: u32 | AnyNumber | Uint8Array, inIndex: u32 | AnyNumber | Uint8Array, outIndex: u32 | AnyNumber | Uint8Array, dx: u128 | AnyNumber | Uint8Array, minDy: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u32, u128, u128, AccountId32, u32]>;
      /**
       * Swap the currency from pool to get amounts of other currency in basic pool.
       * to get one currency.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `base_pool_id`: The id of base pool.
       * - `in_index`: The index of swap currency in basic pool.
       * - `out_index`: The index of target currency in pool.
       * - `dx`: The amounts of swap currency.
       * - `min_dy`: The min amounts of target currency.
       * - `deadline`: Height of the cutoff block of this transaction.
       **/
      swapPoolToBase: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, basePoolId: u32 | AnyNumber | Uint8Array, inIndex: u32 | AnyNumber | Uint8Array, outIndex: u32 | AnyNumber | Uint8Array, dx: u128 | AnyNumber | Uint8Array, minDy: u128 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u32, u128, u128, AccountId32, u32]>;
      /**
       * Update admin fee receiver of the pool.
       *
       * Only called by admin.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       * - `fee_receiver`: The new admin fee receiver of this pool.
       **/
      updateFeeReceiver: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, feeReceiver: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Withdraw the admin fee from pool to admin fee receiver.
       *
       * Can called by anyone.
       *
       * # Argument
       *
       * - `pool_id`: The id of pool.
       **/
      withdrawAdminFee: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    zenlinkSwapRouter: {
      swapExactTokenForTokensThroughStablePool: AugmentedSubmittable<(amountIn: u128 | AnyNumber | Uint8Array, amountOutMin: u128 | AnyNumber | Uint8Array, routes: Vec<ZenlinkSwapRouterRoute> | (ZenlinkSwapRouterRoute | { Stable: any } | { Normal: any } | string | Uint8Array)[], to: AccountId32 | string | Uint8Array, deadline: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, Vec<ZenlinkSwapRouterRoute>, AccountId32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
