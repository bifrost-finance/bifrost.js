// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { AccountId32, H256, Perbill, Percent, Permill } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Compact, Null, Option, Result, U8aFixed, Vec, bool, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { BifrostAssetRegistryAssetMetadata, BifrostFeeShareInfo, BifrostKusamaRuntimeProxyType, BifrostLiquidityMiningPoolType, BifrostSlpPrimitivesDelays, BifrostSlpPrimitivesLedger, BifrostSlpPrimitivesLedgerUpdateEntry, BifrostSlpPrimitivesMinimumsMaximums, BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry, BifrostSlpPrimitivesXcmOperation, BifrostSystemMakerInfo, BifrostVsbondAuctionOrderType, BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee, BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate, FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, NodePrimitivesCurrencyAssetIds, NodePrimitivesCurrencyCurrencyId, NodePrimitivesExtraFeeName, NodePrimitivesTimeUnit, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletMultisigTimepoint, ParachainStakingDelegationRequestsCancelledScheduledRequest, ParachainStakingDelegatorAdded, SpRuntimeDispatchError, SpWeightsWeightV2Weight, XcmInterfaceXcmInterfaceOperation, XcmV2MultiLocation, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetMultiAssets, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, ZenlinkProtocolPrimitivesAssetId } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * The asset registered.
       **/
      AssetRegistered: AugmentedEvent<ApiType, [assetId: NodePrimitivesCurrencyAssetIds, metadata: BifrostAssetRegistryAssetMetadata], { assetId: NodePrimitivesCurrencyAssetIds, metadata: BifrostAssetRegistryAssetMetadata }>;
      /**
       * The asset updated.
       **/
      AssetUpdated: AugmentedEvent<ApiType, [assetId: NodePrimitivesCurrencyAssetIds, metadata: BifrostAssetRegistryAssetMetadata], { assetId: NodePrimitivesCurrencyAssetIds, metadata: BifrostAssetRegistryAssetMetadata }>;
      /**
       * The CurrencyId registered.
       **/
      CurrencyIdRegistered: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, metadata: BifrostAssetRegistryAssetMetadata], { currencyId: NodePrimitivesCurrencyCurrencyId, metadata: BifrostAssetRegistryAssetMetadata }>;
      /**
       * MultiLocation Force set.
       **/
      MultiLocationSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, location: XcmV3MultiLocation, weight: SpWeightsWeightV2Weight], { currencyId: NodePrimitivesCurrencyCurrencyId, location: XcmV3MultiLocation, weight: SpWeightsWeightV2Weight }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    callSwitchgear: {
      /**
       * Switch off transaction . \[pallet_name, function_name\]
       **/
      TransactionSwitchedoff: AugmentedEvent<ApiType, [Bytes, Bytes]>;
      /**
       * Switch on transaction . \[pallet_name, function_name\]
       **/
      TransactionSwitchedOn: AugmentedEvent<ApiType, [Bytes, Bytes]>;
      TransferAccountDisabled: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId]>;
      TransferAccountEnabled: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    councilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
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
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crossInOut: {
      AddedToIssueList: AugmentedEvent<ApiType, [account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId], { account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId }>;
      AddedToRegisterList: AugmentedEvent<ApiType, [account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId], { account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId }>;
      CrossedIn: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, dest: AccountId32, location: XcmV2MultiLocation, amount: u128, remark: Option<Bytes>], { currencyId: NodePrimitivesCurrencyCurrencyId, dest: AccountId32, location: XcmV2MultiLocation, amount: u128, remark: Option<Bytes> }>;
      CrossedOut: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, crosser: AccountId32, location: XcmV2MultiLocation, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, crosser: AccountId32, location: XcmV2MultiLocation, amount: u128 }>;
      CrossingMinimumAmountSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, crossInMinimum: u128, crossOutMinimum: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, crossInMinimum: u128, crossOutMinimum: u128 }>;
      CurrencyDeregistered: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId], { currencyId: NodePrimitivesCurrencyCurrencyId }>;
      CurrencyRegistered: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId], { currencyId: NodePrimitivesCurrencyCurrencyId }>;
      LinkedAccountRegistered: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, foreignLocation: XcmV2MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, foreignLocation: XcmV2MultiLocation }>;
      RemovedFromIssueList: AugmentedEvent<ApiType, [account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId], { account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId }>;
      RemovedFromRegisterList: AugmentedEvent<ApiType, [account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId], { account: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
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
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV3TraitsOutcome], { messageId: U8aFixed, outcome: XcmV3TraitsOutcome }>;
      /**
       * Downward message is invalid XCM.
       **/
      InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The maximum number of downward messages was.
       **/
      MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Downward message from the overweight queue was executed.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight], { overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight }>;
      /**
       * Downward message is unsupported version of XCM.
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The weight limit for handling downward messages was reached.
       **/
      WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    farming: {
      AllForceGaugeClaimed: AugmentedEvent<ApiType, [gid: u32], { gid: u32 }>;
      AllRetired: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      BoostCharged: AugmentedEvent<ApiType, [who: AccountId32, rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>], { who: AccountId32, rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> }>;
      Charged: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>], { who: AccountId32, pid: u32, rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>> }>;
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, pid: u32], { who: AccountId32, pid: u32 }>;
      Deposited: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, addValue: u128, gaugeInfo: Option<ITuple<[u128, u32]>>], { who: AccountId32, pid: u32, addValue: u128, gaugeInfo: Option<ITuple<[u128, u32]>> }>;
      FarmingPoolClosed: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolCreated: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolEdited: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolKilled: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolReset: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      GaugeWithdrawn: AugmentedEvent<ApiType, [who: AccountId32, gid: u32], { who: AccountId32, gid: u32 }>;
      PartiallyForceGaugeClaimed: AugmentedEvent<ApiType, [gid: u32], { gid: u32 }>;
      PartiallyRetired: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      RetireLimitSet: AugmentedEvent<ApiType, [limit: u32], { limit: u32 }>;
      RoundEnd: AugmentedEvent<ApiType, [totalVotes: u128, startRound: u32, endRound: u32], { totalVotes: u128, startRound: u32, endRound: u32 }>;
      RoundStart: AugmentedEvent<ApiType, [roundLength: u32], { roundLength: u32 }>;
      RoundStartError: AugmentedEvent<ApiType, [info: SpRuntimeDispatchError], { info: SpRuntimeDispatchError }>;
      Voted: AugmentedEvent<ApiType, [who: AccountId32, voteList: Vec<ITuple<[u32, Percent]>>], { who: AccountId32, voteList: Vec<ITuple<[u32, Percent]>> }>;
      WithdrawClaimed: AugmentedEvent<ApiType, [who: AccountId32, pid: u32], { who: AccountId32, pid: u32 }>;
      Withdrawn: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, removeValue: Option<u128>], { who: AccountId32, pid: u32, removeValue: Option<u128> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    feeShare: {
      Created: AugmentedEvent<ApiType, [info: BifrostFeeShareInfo], { info: BifrostFeeShareInfo }>;
      Deleted: AugmentedEvent<ApiType, [distributionId: u32], { distributionId: u32 }>;
      Edited: AugmentedEvent<ApiType, [info: BifrostFeeShareInfo], { info: BifrostFeeShareInfo }>;
      EraLengthSet: AugmentedEvent<ApiType, [eraLength: u32, nextEra: u32], { eraLength: u32, nextEra: u32 }>;
      Executed: AugmentedEvent<ApiType, [distributionId: u32], { distributionId: u32 }>;
      ExecuteFailed: AugmentedEvent<ApiType, [distributionId: u32, info: BifrostFeeShareInfo, nextEra: u32], { distributionId: u32, info: BifrostFeeShareInfo, nextEra: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    flexibleFee: {
      ExtraFeeDeducted: AugmentedEvent<ApiType, [NodePrimitivesExtraFeeName, NodePrimitivesCurrencyCurrencyId, u128]>;
      FixedRateFeeExchanged: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, u128]>;
      FlexibleFeeExchanged: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    lighteningRedeem: {
      /**
       * [start, end]
       **/
      BlockIntervalEdited: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * [adder, ksm_amount]
       **/
      KSMAdded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * [exchanger, ksm_amount]
       **/
      KSMExchanged: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * [original_prce, new_price]
       **/
      PriceEdited: AugmentedEvent<ApiType, [u128, u128]>;
      /**
       * [originla_amount_per_day, amount_per_day]
       **/
      ReleasedPerDayEdited: AugmentedEvent<ApiType, [u128, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidityMining: {
      /**
       * Lazy migration event
       * 
       * [deposit_data_migration_nums, pool_info_migration_nums]
       **/
      LazyMigration: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * The liquidity-pool was charged
       * 
       * [pool_id, pool_type, trading_pair, investor]
       **/
      PoolCharged: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
      /**
       * The liquidity-pool was created
       * 
       * [pool_id, pool_type, trading_pair, keeper]
       **/
      PoolCreated: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
      /**
       * The liquidity-pool was edited
       * 
       * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
       * new_unlock_limit_nums]
       **/
      PoolEdited: AugmentedEvent<ApiType, [u32, u32, u32, u32, u32]>;
      /**
       * The liquidity-pool was killed
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolKilled: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * The liquidity-pool was retired forcefully
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolRetiredForcefully: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * The liquidity-pool was started up
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolStarted: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * User cancels a pending-unlock from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_canceled, user]
       **/
      UserCancelUnlock: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * User withdrew the rewards whose deserved from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, rewards, user]
       **/
      UserClaimed: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, AccountId32]>;
      /**
       * User deposited tokens to a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_deposited, user]
       **/
      UserDeposited: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * User redeemed tokens from a liquidity-mining
       * 
       * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
       **/
      UserRedeemed: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, u32, AccountId32]>;
      /**
       * User unlock tokens from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_redeemed, user]
       **/
      UserUnlocked: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidityMiningDOT: {
      /**
       * Lazy migration event
       * 
       * [deposit_data_migration_nums, pool_info_migration_nums]
       **/
      LazyMigration: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * The liquidity-pool was charged
       * 
       * [pool_id, pool_type, trading_pair, investor]
       **/
      PoolCharged: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
      /**
       * The liquidity-pool was created
       * 
       * [pool_id, pool_type, trading_pair, keeper]
       **/
      PoolCreated: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
      /**
       * The liquidity-pool was edited
       * 
       * [pool_id, old_redeem_limit_time, old_unlock_limit_nums, new_redeem_limit_time,
       * new_unlock_limit_nums]
       **/
      PoolEdited: AugmentedEvent<ApiType, [u32, u32, u32, u32, u32]>;
      /**
       * The liquidity-pool was killed
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolKilled: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * The liquidity-pool was retired forcefully
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolRetiredForcefully: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * The liquidity-pool was started up
       * 
       * [pool_id, pool_type, trading_pair]
       **/
      PoolStarted: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
      /**
       * User cancels a pending-unlock from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_canceled, user]
       **/
      UserCancelUnlock: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * User withdrew the rewards whose deserved from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, rewards, user]
       **/
      UserClaimed: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, AccountId32]>;
      /**
       * User deposited tokens to a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_deposited, user]
       **/
      UserDeposited: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * User redeemed tokens from a liquidity-mining
       * 
       * [pool_id, pool_type, trading_pair, amount_redeemed, unlock_height, user]
       **/
      UserRedeemed: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, u32, AccountId32]>;
      /**
       * User unlock tokens from a liquidity-pool
       * 
       * [pool_id, pool_type, trading_pair, amount_redeemed, user]
       **/
      UserUnlocked: AugmentedEvent<ApiType, [u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    merkleDistributor: {
      /**
       * add account who can create merkle distributor. \ [account]
       **/
      AddToWhiteList: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * claim reward. \[merkle distributor id, account, balance]
       **/
      Claim: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * create a merkle distributor. \ [merkle distributor id, merkle tree root, total reward balance]
       **/
      Create: AugmentedEvent<ApiType, [u32, H256, u128]>;
      /**
       * remove account from the set who can create merkle distributor. \ [account]
       **/
      RemoveFromWhiteList: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * withdraw reward. \ [merkle distributor id, account, balance]
       **/
      Withdraw: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /**
       * XCM message sent. \[to, message\]
       **/
      Sent: AugmentedEvent<ApiType, [to: XcmV3MultiLocation, message: XcmV3Xcm], { to: XcmV3MultiLocation, message: XcmV3Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainStaking: {
      /**
       * Set blocks per round
       **/
      BlocksPerRoundSet: AugmentedEvent<ApiType, [currentRound: u32, firstBlock: u32, old: u32, new_: u32, newPerRoundInflationMin: Perbill, newPerRoundInflationIdeal: Perbill, newPerRoundInflationMax: Perbill], { currentRound: u32, firstBlock: u32, old: u32, new_: u32, newPerRoundInflationMin: Perbill, newPerRoundInflationIdeal: Perbill, newPerRoundInflationMax: Perbill }>;
      /**
       * Cancelled request to decrease candidate's bond.
       **/
      CancelledCandidateBondLess: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, executeRound: u32], { candidate: AccountId32, amount: u128, executeRound: u32 }>;
      /**
       * Cancelled request to leave the set of candidates.
       **/
      CancelledCandidateExit: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Cancelled request to change an existing delegation.
       **/
      CancelledDelegationRequest: AugmentedEvent<ApiType, [delegator: AccountId32, cancelledRequest: ParachainStakingDelegationRequestsCancelledScheduledRequest, collator: AccountId32], { delegator: AccountId32, cancelledRequest: ParachainStakingDelegationRequestsCancelledScheduledRequest, collator: AccountId32 }>;
      /**
       * Candidate rejoins the set of collator candidates.
       **/
      CandidateBackOnline: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Candidate has decreased a self bond.
       **/
      CandidateBondedLess: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, newBond: u128], { candidate: AccountId32, amount: u128, newBond: u128 }>;
      /**
       * Candidate has increased a self bond.
       **/
      CandidateBondedMore: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, newTotalBond: u128], { candidate: AccountId32, amount: u128, newTotalBond: u128 }>;
      /**
       * Candidate requested to decrease a self bond.
       **/
      CandidateBondLessRequested: AugmentedEvent<ApiType, [candidate: AccountId32, amountToDecrease: u128, executeRound: u32], { candidate: AccountId32, amountToDecrease: u128, executeRound: u32 }>;
      /**
       * Candidate has left the set of candidates.
       **/
      CandidateLeft: AugmentedEvent<ApiType, [exCandidate: AccountId32, unlockedAmount: u128, newTotalAmtLocked: u128], { exCandidate: AccountId32, unlockedAmount: u128, newTotalAmtLocked: u128 }>;
      /**
       * Candidate has requested to leave the set of candidates.
       **/
      CandidateScheduledExit: AugmentedEvent<ApiType, [exitAllowedRound: u32, candidate: AccountId32, scheduledExit: u32], { exitAllowedRound: u32, candidate: AccountId32, scheduledExit: u32 }>;
      /**
       * Candidate temporarily leave the set of collator candidates without unbonding.
       **/
      CandidateWentOffline: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Candidate selected for collators. Total Exposed Amount includes all delegations.
       **/
      CollatorChosen: AugmentedEvent<ApiType, [round: u32, collatorAccount: AccountId32, totalExposedAmount: u128], { round: u32, collatorAccount: AccountId32, totalExposedAmount: u128 }>;
      /**
       * Set collator commission to this value.
       **/
      CollatorCommissionSet: AugmentedEvent<ApiType, [old: Perbill, new_: Perbill], { old: Perbill, new_: Perbill }>;
      /**
       * New delegation (increase of the existing one).
       **/
      Delegation: AugmentedEvent<ApiType, [delegator: AccountId32, lockedAmount: u128, candidate: AccountId32, delegatorPosition: ParachainStakingDelegatorAdded], { delegator: AccountId32, lockedAmount: u128, candidate: AccountId32, delegatorPosition: ParachainStakingDelegatorAdded }>;
      DelegationDecreased: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool], { delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool }>;
      /**
       * Delegator requested to decrease a bond for the collator candidate.
       **/
      DelegationDecreaseScheduled: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amountToDecrease: u128, executeRound: u32], { delegator: AccountId32, candidate: AccountId32, amountToDecrease: u128, executeRound: u32 }>;
      DelegationIncreased: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool], { delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool }>;
      /**
       * Delegation kicked.
       **/
      DelegationKicked: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128 }>;
      /**
       * Delegator requested to revoke delegation.
       **/
      DelegationRevocationScheduled: AugmentedEvent<ApiType, [round: u32, delegator: AccountId32, candidate: AccountId32, scheduledExit: u32], { round: u32, delegator: AccountId32, candidate: AccountId32, scheduledExit: u32 }>;
      /**
       * Delegation revoked.
       **/
      DelegationRevoked: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128 }>;
      /**
       * Cancelled a pending request to exit the set of delegators.
       **/
      DelegatorExitCancelled: AugmentedEvent<ApiType, [delegator: AccountId32], { delegator: AccountId32 }>;
      /**
       * Delegator requested to leave the set of delegators.
       **/
      DelegatorExitScheduled: AugmentedEvent<ApiType, [round: u32, delegator: AccountId32, scheduledExit: u32], { round: u32, delegator: AccountId32, scheduledExit: u32 }>;
      /**
       * Delegator has left the set of delegators.
       **/
      DelegatorLeft: AugmentedEvent<ApiType, [delegator: AccountId32, unstakedAmount: u128], { delegator: AccountId32, unstakedAmount: u128 }>;
      /**
       * Delegation from candidate state has been remove.
       **/
      DelegatorLeftCandidate: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128, totalCandidateStaked: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128, totalCandidateStaked: u128 }>;
      /**
       * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
       **/
      InflationSet: AugmentedEvent<ApiType, [annualMin: Perbill, annualIdeal: Perbill, annualMax: Perbill, roundMin: Perbill, roundIdeal: Perbill, roundMax: Perbill], { annualMin: Perbill, annualIdeal: Perbill, annualMax: Perbill, roundMin: Perbill, roundIdeal: Perbill, roundMax: Perbill }>;
      /**
       * Account joined the set of collator candidates.
       **/
      JoinedCollatorCandidates: AugmentedEvent<ApiType, [account: AccountId32, amountLocked: u128, newTotalAmtLocked: u128], { account: AccountId32, amountLocked: u128, newTotalAmtLocked: u128 }>;
      /**
       * Started new round.
       **/
      NewRound: AugmentedEvent<ApiType, [startingBlock: u32, round: u32, selectedCollatorsNumber: u32, totalBalance: u128], { startingBlock: u32, round: u32, selectedCollatorsNumber: u32, totalBalance: u128 }>;
      /**
       * Account (re)set for parachain bond treasury.
       **/
      ParachainBondAccountSet: AugmentedEvent<ApiType, [old: AccountId32, new_: AccountId32], { old: AccountId32, new_: AccountId32 }>;
      /**
       * Percent of inflation reserved for parachain bond (re)set.
       **/
      ParachainBondReservePercentSet: AugmentedEvent<ApiType, [old: Percent, new_: Percent], { old: Percent, new_: Percent }>;
      /**
       * Transferred to account which holds funds reserved for parachain bond.
       **/
      ReservedForParachainBond: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * Paid the account (delegator or collator) the balance as liquid rewards.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, rewards: u128], { account: AccountId32, rewards: u128 }>;
      /**
       * Staking expectations set.
       **/
      StakeExpectationsSet: AugmentedEvent<ApiType, [expectMin: u128, expectIdeal: u128, expectMax: u128], { expectMin: u128, expectIdeal: u128, expectMax: u128 }>;
      /**
       * Set total selected candidates to this value.
       **/
      TotalSelectedSet: AugmentedEvent<ApiType, [old: u32, new_: u32], { old: u32, new_: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    phragmenElection: {
      /**
       * A candidate was slashed by amount due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128], { candidate: AccountId32, amount: u128 }>;
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
       * A member has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new term with new_members. This indicates that enough candidates existed to run
       * the election, not that enough have has been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [newMembers: Vec<ITuple<[AccountId32, u128]>>], { newMembers: Vec<ITuple<[AccountId32, u128]>> }>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A seat holder was slashed by amount by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [seatHolder: AccountId32, amount: u128], { seatHolder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       * 
       * \[ paying location, fees \]
       **/
      FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected querier, maybe actual querier \]
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       * 
       * \[ destination, result, cost \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain sends us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain stops sending us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: BifrostKusamaRuntimeProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    salp: {
      /**
       * all refund
       **/
      AllRefunded: AugmentedEvent<ApiType, [u32]>;
      AllUnlocked: AugmentedEvent<ApiType, [u32]>;
      Buyback: AugmentedEvent<ApiType, [u128]>;
      Continued: AugmentedEvent<ApiType, [u32, u32, u32]>;
      /**
       * Contributed to a crowd sale. [who, fund_index, amount]
       **/
      Contributed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Fail on contribute to crowd sale. [who, fund_index, amount]
       **/
      ContributeFailed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Contributing to a crowd sale. [who, fund_index, amount]
       **/
      Contributing: AugmentedEvent<ApiType, [AccountId32, u32, u128, U8aFixed]>;
      /**
       * Create a new crowdloaning campaign. [fund_index]
       **/
      Created: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund is dissolved. [fund_index]
       **/
      Dissolved: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund is edited. [fund_index]
       **/
      Edited: AugmentedEvent<ApiType, [u32]>;
      End: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund status change
       **/
      Failed: AugmentedEvent<ApiType, [u32]>;
      /**
       * redeem to account. [who, fund_index, first_slot, last_slot, value]
       **/
      Redeemed: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * refund to account. [who, fund_index,value]
       **/
      Refunded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      RefundedDissolved: AugmentedEvent<ApiType, [u32, u32, u32]>;
      Retired: AugmentedEvent<ApiType, [u32]>;
      Success: AugmentedEvent<ApiType, [u32]>;
      /**
       * The vsToken/vsBond was be unlocked. [who, fund_index, value]
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      VstokenUnlocked: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Withdrew full balance of a contributor. [who, fund_index, amount]
       **/
      Withdrew: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    salpLite: {
      AllUnlocked: AugmentedEvent<ApiType, [u32]>;
      Continued: AugmentedEvent<ApiType, [u32, u32, u32]>;
      /**
       * Create a new crowdloaning campaign. [fund_index]
       **/
      Created: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund is dissolved. [fund_index]
       **/
      Dissolved: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund is edited. [fund_index]
       **/
      Edited: AugmentedEvent<ApiType, [u32]>;
      /**
       * Fund status change
       **/
      Failed: AugmentedEvent<ApiType, [u32]>;
      /**
       * Contributed to a crowd sale. [who, fund_index, amount]
       **/
      Issued: AugmentedEvent<ApiType, [AccountId32, u32, u128, U8aFixed]>;
      /**
       * redeem to account. [who, fund_index, first_slot, last_slot, value]
       **/
      Redeemed: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * refund to account. [who, fund_index,value]
       **/
      Refunded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      RefundedDissolved: AugmentedEvent<ApiType, [u32, u32, u32]>;
      Retired: AugmentedEvent<ApiType, [u32]>;
      Success: AugmentedEvent<ApiType, [u32]>;
      /**
       * The vsToken/vsBond was be unlocked. [who, fund_index, value]
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Withdrew full balance of a contributor. [who, fund_index, amount]
       **/
      Withdrew: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    slp: {
      Chill: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, queryId: Compact<u64>, queryIdHash: H256], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, queryId: Compact<u64>, queryIdHash: H256 }>;
      ConvertAsset: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation, amount: Compact<u128> }>;
      CurrencyDelaysSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delays: Option<BifrostSlpPrimitivesDelays>], { currencyId: NodePrimitivesCurrencyCurrencyId, delays: Option<BifrostSlpPrimitivesDelays> }>;
      CurrencyTuneExchangeRateLimitSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, tuneExchangeRateLimit: Option<ITuple<[u32, Permill]>>], { currencyId: NodePrimitivesCurrencyCurrencyId, tuneExchangeRateLimit: Option<ITuple<[u32, Permill]>> }>;
      Delegated: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, targets: Option<Vec<XcmV3MultiLocation>>, queryId: Compact<u64>, queryIdHash: H256], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, targets: Option<Vec<XcmV3MultiLocation>>, queryId: Compact<u64>, queryIdHash: H256 }>;
      DelegatorAdded: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, index: Compact<u16>, delegatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, index: Compact<u16>, delegatorId: XcmV3MultiLocation }>;
      DelegatorBonded: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, bondedAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, bondedAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation> }>;
      DelegatorBondExtra: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, extraBondedAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, extraBondedAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation> }>;
      DelegatorInitialized: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation }>;
      DelegatorLedgerQueryResponseConfirmed: AugmentedEvent<ApiType, [queryId: Compact<u64>, entry: BifrostSlpPrimitivesLedgerUpdateEntry], { queryId: Compact<u64>, entry: BifrostSlpPrimitivesLedgerUpdateEntry }>;
      DelegatorLedgerQueryResponseFailed: AugmentedEvent<ApiType, [queryId: Compact<u64>], { queryId: Compact<u64> }>;
      DelegatorLedgerSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegator: XcmV3MultiLocation, ledger: Option<BifrostSlpPrimitivesLedger>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegator: XcmV3MultiLocation, ledger: Option<BifrostSlpPrimitivesLedger> }>;
      DelegatorRebond: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, rebondAmount: Option<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, rebondAmount: Option<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation> }>;
      DelegatorRemoved: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation }>;
      DelegatorUnbond: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, unbondAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, unbondAmount: Compact<u128>, queryId: Compact<u64>, queryIdHash: H256, validator: Option<XcmV3MultiLocation> }>;
      DelegatorUnbondAll: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, queryId: Compact<u64>, queryIdHash: H256], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, queryId: Compact<u64>, queryIdHash: H256 }>;
      FeeSourceSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, whoAndFee: Option<ITuple<[XcmV3MultiLocation, u128]>>], { currencyId: NodePrimitivesCurrencyCurrencyId, whoAndFee: Option<ITuple<[XcmV3MultiLocation, u128]>> }>;
      FeeSupplemented: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>, from: XcmV3MultiLocation, to: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>, from: XcmV3MultiLocation, to: XcmV3MultiLocation }>;
      FundMoveFromExitToEntrance: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128> }>;
      HostingFeeCharged: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128> }>;
      HostingFeesSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, fees: Option<ITuple<[Permill, XcmV3MultiLocation]>>], { currencyId: NodePrimitivesCurrencyCurrencyId, fees: Option<ITuple<[Permill, XcmV3MultiLocation]>> }>;
      Liquidize: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, timeUnit: Option<NodePrimitivesTimeUnit>, queryId: Compact<u64>, queryIdHash: H256, amount: Option<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, timeUnit: Option<NodePrimitivesTimeUnit>, queryId: Compact<u64>, queryIdHash: H256, amount: Option<u128> }>;
      MinimumsMaximumsSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, minimumsAndMaximums: Option<BifrostSlpPrimitivesMinimumsMaximums>], { currencyId: NodePrimitivesCurrencyCurrencyId, minimumsAndMaximums: Option<BifrostSlpPrimitivesMinimumsMaximums> }>;
      OngoingTimeUnitUpdateIntervalSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, interval: Option<u32>], { currencyId: NodePrimitivesCurrencyCurrencyId, interval: Option<u32> }>;
      OperateOriginSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, operator: Option<AccountId32>], { currencyId: NodePrimitivesCurrencyCurrencyId, operator: Option<AccountId32> }>;
      Payout: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validator: XcmV3MultiLocation, timeUnit: Option<NodePrimitivesTimeUnit>], { currencyId: NodePrimitivesCurrencyCurrencyId, validator: XcmV3MultiLocation, timeUnit: Option<NodePrimitivesTimeUnit> }>;
      PoolTokenDecreased: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128> }>;
      PoolTokenIncreased: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: Compact<u128> }>;
      Refund: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, timeUnit: NodePrimitivesTimeUnit, index: Compact<u32>, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, timeUnit: NodePrimitivesTimeUnit, index: Compact<u32>, amount: Compact<u128> }>;
      RemovedFromBoostList: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation }>;
      SupplementFeeAccountWhitelistAdded: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation }>;
      SupplementFeeAccountWhitelistRemoved: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation }>;
      TimeUnitUpdated: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, old: Option<NodePrimitivesTimeUnit>, new_: NodePrimitivesTimeUnit], { currencyId: NodePrimitivesCurrencyCurrencyId, old: Option<NodePrimitivesTimeUnit>, new_: NodePrimitivesTimeUnit }>;
      TransferBack: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, from: XcmV3MultiLocation, to: XcmV3MultiLocation, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, from: XcmV3MultiLocation, to: XcmV3MultiLocation, amount: Compact<u128> }>;
      TransferTo: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, from: XcmV3MultiLocation, to: XcmV3MultiLocation, amount: Compact<u128>], { currencyId: NodePrimitivesCurrencyCurrencyId, from: XcmV3MultiLocation, to: XcmV3MultiLocation, amount: Compact<u128> }>;
      Undelegated: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, targets: Vec<XcmV3MultiLocation>, queryId: Compact<u64>, queryIdHash: H256], { currencyId: NodePrimitivesCurrencyCurrencyId, delegatorId: XcmV3MultiLocation, targets: Vec<XcmV3MultiLocation>, queryId: Compact<u64>, queryIdHash: H256 }>;
      ValidatorBoostListAdded: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation, dueBlockNumber: u32], { currencyId: NodePrimitivesCurrencyCurrencyId, who: XcmV3MultiLocation, dueBlockNumber: u32 }>;
      ValidatorBoostListSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validatorBoostList: Vec<ITuple<[XcmV3MultiLocation, u32]>>], { currencyId: NodePrimitivesCurrencyCurrencyId, validatorBoostList: Vec<ITuple<[XcmV3MultiLocation, u32]>> }>;
      ValidatorsAdded: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, validatorId: XcmV3MultiLocation }>;
      ValidatorsByDelegatorQueryResponseConfirmed: AugmentedEvent<ApiType, [queryId: Compact<u64>, entry: BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry], { queryId: Compact<u64>, entry: BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry }>;
      ValidatorsByDelegatorQueryResponseFailed: AugmentedEvent<ApiType, [queryId: Compact<u64>], { queryId: Compact<u64> }>;
      ValidatorsByDelegatorSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validatorsList: Vec<XcmV3MultiLocation>, delegatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, validatorsList: Vec<XcmV3MultiLocation>, delegatorId: XcmV3MultiLocation }>;
      ValidatorsRemoved: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validatorId: XcmV3MultiLocation], { currencyId: NodePrimitivesCurrencyCurrencyId, validatorId: XcmV3MultiLocation }>;
      ValidatorsReset: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, validatorList: Vec<XcmV3MultiLocation>], { currencyId: NodePrimitivesCurrencyCurrencyId, validatorList: Vec<XcmV3MultiLocation> }>;
      XcmDestWeightAndFeeSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, operation: BifrostSlpPrimitivesXcmOperation, weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>], { currencyId: NodePrimitivesCurrencyCurrencyId, operation: BifrostSlpPrimitivesXcmOperation, weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    systemMaker: {
      Charged: AugmentedEvent<ApiType, [who: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, value: u128], { who: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, value: u128 }>;
      Closed: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId], { currencyId: NodePrimitivesCurrencyCurrencyId }>;
      ConfigSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, info: BifrostSystemMakerInfo], { currencyId: NodePrimitivesCurrencyCurrencyId, info: BifrostSystemMakerInfo }>;
      Paid: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, value: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, value: u128 }>;
      RedeemFailed: AugmentedEvent<ApiType, [vcurrencyId: NodePrimitivesCurrencyCurrencyId, amount: u128], { vcurrencyId: NodePrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    systemStaking: {
      DepositFailed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      MintFailed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      MintSuccess: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      NewRound: AugmentedEvent<ApiType, [current: u32, first: u32, length: u32], { current: u32, first: u32, length: u32 }>;
      Payout: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, vtoken: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, free: u128, vfree: u128, shadow: u128], { token: NodePrimitivesCurrencyCurrencyId, vtoken: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, free: u128, vfree: u128, shadow: u128 }>;
      Redeemed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      RedeemFailed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      TokenConfigChanged: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, execDelay: u32, systemStakableFarmingRate: Permill, addOrSub: bool, systemStakableBase: u128, farmingPoolids: Vec<u32>, lptokenRates: Vec<Perbill>], { token: NodePrimitivesCurrencyCurrencyId, execDelay: u32, systemStakableFarmingRate: Permill, addOrSub: bool, systemStakableBase: u128, farmingPoolids: Vec<u32>, lptokenRates: Vec<Perbill> }>;
      TokenInfoRefreshed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId], { token: NodePrimitivesCurrencyCurrencyId }>;
      VtokenNotFound: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId], { token: NodePrimitivesCurrencyCurrencyId }>;
      WithdrawFailed: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      WithdrawSuccess: AugmentedEvent<ApiType, [token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128], { token: NodePrimitivesCurrencyCurrencyId, amount: u128, farmingStakingAmount: u128, systemStakableAmount: u128, systemShadowAmount: u128, pendingRedeemAmount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
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
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /**
       * A new tip suggestion has been opened.
       **/
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been closed.
       **/
      TipClosed: AugmentedEvent<ApiType, [tipHash: H256, who: AccountId32, payout: u128], { tipHash: H256, who: AccountId32, payout: u128 }>;
      /**
       * A tip suggestion has reached threshold and is closing.
       **/
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been retracted.
       **/
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been slashed.
       **/
      TipSlashed: AugmentedEvent<ApiType, [tipHash: H256, finder: AccountId32, deposit: u128], { tipHash: H256, finder: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokenIssuer: {
      /**
       * Successful added a new account to the issue whitelist. \[account, currency_id]\
       **/
      AddedToIssueList: AugmentedEvent<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Successful added a new account to the transfer whitelist. \[account, currency_id]\
       **/
      AddedToTransferList: AugmentedEvent<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Token issue success, \[currency_id, dest, amount\]
       **/
      Issued: AugmentedEvent<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId, u128]>;
      /**
       * Successful remove an account from the issue whitelist. \[account, currency_id]\
       **/
      RemovedFromIssueList: AugmentedEvent<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Successful remove an account from the transfer whitelist. \[account, currency_id]\
       **/
      RemovedFromTransferList: AugmentedEvent<ApiType, [AccountId32, NodePrimitivesCurrencyCurrencyId]>;
      /**
       * Token transferred success, \[origin, dest, currency_id, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [AccountId32, AccountId32, NodePrimitivesCurrencyCurrencyId, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some free balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32], { lockId: U8aFixed, currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some locked balance was freed.
       **/
      Unlocked: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128], { currencyId: NodePrimitivesCurrencyCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    unknownTokens: {
      /**
       * Deposit success.
       **/
      Deposited: AugmentedEvent<ApiType, [asset: XcmV3MultiAsset, who: XcmV3MultiLocation], { asset: XcmV3MultiAsset, who: XcmV3MultiLocation }>;
      /**
       * Withdraw success.
       **/
      Withdrawn: AugmentedEvent<ApiType, [asset: XcmV3MultiAsset, who: XcmV3MultiLocation], { asset: XcmV3MultiAsset, who: XcmV3MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested. No further vesting can happen.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked).
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vsBondAuction: {
      /**
       * The order has been clinched.
       * 
       * [order_id, order_type, order_creator, order_opponent, vsbond_type,
       * vsbond_amount_clinched, vsbond_amount, vsbond_remain, total_price]
       **/
      OrderClinchd: AugmentedEvent<ApiType, [u64, BifrostVsbondAuctionOrderType, AccountId32, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128, u128, u128]>;
      /**
       * The order has been created.
       * 
       * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, total_price]
       **/
      OrderCreated: AugmentedEvent<ApiType, [u64, BifrostVsbondAuctionOrderType, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128]>;
      /**
       * The order has been revoked.
       * 
       * [order_id, order_type, order_creator, vsbond_type, vsbond_amount, vsbond_remain,
       * total_price]
       **/
      OrderRevoked: AugmentedEvent<ApiType, [u64, BifrostVsbondAuctionOrderType, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128, u128]>;
      /**
       * Transaction fee rate has been reset.
       * 
       * [buy_fee_rate, sell_fee_rate]
       **/
      TransactionFeeRateSet: AugmentedEvent<ApiType, [Permill, Permill]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vstokenConversion: {
      ExchangeFeeSet: AugmentedEvent<ApiType, [exchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee], { exchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee }>;
      ExchangeRateSet: AugmentedEvent<ApiType, [lease: i32, exchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate], { lease: i32, exchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate }>;
      RelaychainLeaseSet: AugmentedEvent<ApiType, [lease: u32], { lease: u32 }>;
      VsbondConvertToVsdot: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsdotAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsdotAmount: u128 }>;
      VsbondConvertToVsksm: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsksmAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsksmAmount: u128 }>;
      VsbondConvertToVstoken: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vstokenAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vstokenAmount: u128 }>;
      VsdotConvertToVsbond: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsdotAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsdotAmount: u128 }>;
      VsksmConvertToVsbond: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsksmAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vsksmAmount: u128 }>;
      VstokenConvertToVsbond: AugmentedEvent<ApiType, [address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vstokenAmount: u128], { address: AccountId32, currencyId: NodePrimitivesCurrencyCurrencyId, vsbondAmount: u128, vstokenAmount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vtokenMinting: {
      FastRedeemFailed: AugmentedEvent<ApiType, [err: SpRuntimeDispatchError], { err: SpRuntimeDispatchError }>;
      /**
       * Several fees has been set.
       **/
      FeeSet: AugmentedEvent<ApiType, [mintFee: Permill, redeemFee: Permill], { mintFee: Permill, redeemFee: Permill }>;
      HookIterationLimitSet: AugmentedEvent<ApiType, [limit: u32], { limit: u32 }>;
      MinimumMintSet: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128], { tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128 }>;
      MinimumRedeemSet: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128], { tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128 }>;
      Minted: AugmentedEvent<ApiType, [address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128], { address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128 }>;
      MinTimeUnitSet: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId, timeUnit: NodePrimitivesTimeUnit], { tokenId: NodePrimitivesCurrencyCurrencyId, timeUnit: NodePrimitivesTimeUnit }>;
      Rebonded: AugmentedEvent<ApiType, [address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128], { address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128 }>;
      RebondedByUnlockId: AugmentedEvent<ApiType, [address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128], { address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128 }>;
      Redeemed: AugmentedEvent<ApiType, [address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128], { address: AccountId32, tokenId: NodePrimitivesCurrencyCurrencyId, tokenAmount: u128, vtokenAmount: u128, fee: u128 }>;
      RedeemSuccess: AugmentedEvent<ApiType, [unlockId: u32, tokenId: NodePrimitivesCurrencyCurrencyId, to: AccountId32, tokenAmount: u128], { unlockId: u32, tokenId: NodePrimitivesCurrencyCurrencyId, to: AccountId32, tokenAmount: u128 }>;
      SupportRebondTokenAdded: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId], { tokenId: NodePrimitivesCurrencyCurrencyId }>;
      SupportRebondTokenRemoved: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId], { tokenId: NodePrimitivesCurrencyCurrencyId }>;
      UnlockDurationSet: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId, unlockDuration: NodePrimitivesTimeUnit], { tokenId: NodePrimitivesCurrencyCurrencyId, unlockDuration: NodePrimitivesTimeUnit }>;
      UnlockingTotalSet: AugmentedEvent<ApiType, [tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128], { tokenId: NodePrimitivesCurrencyCurrencyId, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmInterface: {
      TransferredStatemineMultiAsset: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
       **/
      XcmDestWeightUpdated: AugmentedEvent<ApiType, [XcmInterfaceXcmInterfaceOperation, SpWeightsWeightV2Weight]>;
      /**
       * Xcm dest weight has been updated. \[xcm_operation, new_xcm_dest_weight\]
       **/
      XcmFeeUpdated: AugmentedEvent<ApiType, [XcmInterfaceXcmInterfaceOperation, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight }>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight], { sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight }>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: SpWeightsWeightV2Weight], { index: u64, used: SpWeightsWeightV2Weight }>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight }>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `MultiAsset` with fee.
       **/
      TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation], { sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * Transact in trading \[owner, recipient, swap_path, balances\]
       **/
      AssetSwap: AugmentedEvent<ApiType, [AccountId32, AccountId32, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<u128>]>;
      /**
       * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
       * asset_0_refund, asset_1_refund, lp_amount\]
       **/
      BootstrapClaim: AugmentedEvent<ApiType, [AccountId32, AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
       **/
      BootstrapContribute: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, u128, ZenlinkProtocolPrimitivesAssetId, u128]>;
      /**
       * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
       * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
       **/
      BootstrapCreated: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
      /**
       * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
       * total_lp_supply]
       **/
      BootstrapEnd: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
       * asset_0_refund, asset_1_refund\]
       **/
      BootstrapRefund: AugmentedEvent<ApiType, [AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128]>;
      /**
       * Update a bootstrap pair. \[caller, asset_0, asset_1,
       * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
       **/
      BootstrapUpdate: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
      /**
       * Some assets were burned. \[asset_id, owner, amount\]
       **/
      Burned: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
      /**
       * Charge reward into a bootstrap.
       **/
      ChargeReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Bootstrap distribute some rewards to contributors.
       **/
      DistributeReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
       * mint_balance_lp\]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
       * burn_balance_lp\]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Some assets were minted. \[asset_id, owner, amount\]
       **/
      Minted: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
      /**
       * Swap
       * Create a trading pair. \[asset_0, asset_1\]
       **/
      PairCreated: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Foreign Asset
       * Some assets were transferred. \[asset_id, owner, target, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, AccountId32, u128]>;
      /**
       * Transfer by xcm
       * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
       **/
      TransferredToParachain: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u32, AccountId32, u128, u64]>;
      /**
       * Withdraw all reward from a bootstrap.
       **/
      WithdrawReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    zenlinkStableAMM: {
      /**
       * Supply some liquidity to a pool.
       **/
      AddLiquidity: AugmentedEvent<ApiType, [poolId: u32, who: AccountId32, to: AccountId32, supplyAmounts: Vec<u128>, fees: Vec<u128>, newD: u128, mintAmount: u128], { poolId: u32, who: AccountId32, to: AccountId32, supplyAmounts: Vec<u128>, fees: Vec<u128>, newD: u128, mintAmount: u128 }>;
      /**
       * A pool's admin fee was collected.
       **/
      CollectProtocolFee: AugmentedEvent<ApiType, [poolId: u32, currencyId: NodePrimitivesCurrencyCurrencyId, feeAmount: u128], { poolId: u32, currencyId: NodePrimitivesCurrencyCurrencyId, feeAmount: u128 }>;
      /**
       * A pool was created.
       **/
      CreatePool: AugmentedEvent<ApiType, [poolId: u32, currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>, lpCurrencyId: NodePrimitivesCurrencyCurrencyId, a: u128, account: AccountId32, adminFeeReceiver: AccountId32], { poolId: u32, currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>, lpCurrencyId: NodePrimitivesCurrencyCurrencyId, a: u128, account: AccountId32, adminFeeReceiver: AccountId32 }>;
      /**
       * Swap a amounts of currency to get other.
       **/
      CurrencyExchange: AugmentedEvent<ApiType, [poolId: u32, who: AccountId32, to: AccountId32, inIndex: u32, inAmount: u128, outIndex: u32, outAmount: u128], { poolId: u32, who: AccountId32, to: AccountId32, inIndex: u32, inAmount: u128, outIndex: u32, outAmount: u128 }>;
      CurrencyExchangeUnderlying: AugmentedEvent<ApiType, [poolId: u32, account: AccountId32, inAmount: u128, outAmount: u128, currencyIndexFrom: u32, currencyIndexTo: u32, to: AccountId32], { poolId: u32, account: AccountId32, inAmount: u128, outAmount: u128, currencyIndexFrom: u32, currencyIndexTo: u32, to: AccountId32 }>;
      /**
       * A pool's admin fee parameters was updated
       **/
      NewAdminFee: AugmentedEvent<ApiType, [poolId: u32, newAdminFee: u128], { poolId: u32, newAdminFee: u128 }>;
      /**
       * A pool's swap fee parameters was updated
       **/
      NewSwapFee: AugmentedEvent<ApiType, [poolId: u32, newSwapFee: u128], { poolId: u32, newSwapFee: u128 }>;
      /**
       * A pool's 'A' was ramped.
       **/
      RampA: AugmentedEvent<ApiType, [poolId: u32, initialAPrecise: u128, futureAPrecise: u128, now: u128, futureATime: u128], { poolId: u32, initialAPrecise: u128, futureAPrecise: u128, now: u128, futureATime: u128 }>;
      /**
       * Remove some liquidity from a pool.
       **/
      RemoveLiquidity: AugmentedEvent<ApiType, [poolId: u32, who: AccountId32, to: AccountId32, amounts: Vec<u128>, fees: Vec<u128>, newTotalSupply: u128], { poolId: u32, who: AccountId32, to: AccountId32, amounts: Vec<u128>, fees: Vec<u128>, newTotalSupply: u128 }>;
      /**
       * Remove liquidity from a pool with specify the amounts of currencies to be obtained.
       **/
      RemoveLiquidityImbalance: AugmentedEvent<ApiType, [poolId: u32, who: AccountId32, to: AccountId32, amounts: Vec<u128>, fees: Vec<u128>, newD: u128, newTotalSupply: u128], { poolId: u32, who: AccountId32, to: AccountId32, amounts: Vec<u128>, fees: Vec<u128>, newD: u128, newTotalSupply: u128 }>;
      /**
       * Remove some liquidity from a pool to get only one currency.
       **/
      RemoveLiquidityOneCurrency: AugmentedEvent<ApiType, [poolId: u32, who: AccountId32, to: AccountId32, outIndex: u32, burnAmount: u128, outAmount: u128], { poolId: u32, who: AccountId32, to: AccountId32, outIndex: u32, burnAmount: u128, outAmount: u128 }>;
      /**
       * A pool's ramping A was stopped.
       **/
      StopRampA: AugmentedEvent<ApiType, [poolId: u32, currentA: u128, now: u128], { poolId: u32, currentA: u128, now: u128 }>;
      /**
       * A pool's admin_fee_receiver was updated.
       **/
      UpdateAdminFeeReceiver: AugmentedEvent<ApiType, [poolId: u32, adminFeeReceiver: AccountId32], { poolId: u32, adminFeeReceiver: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    zenlinkSwapRouter: {
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
