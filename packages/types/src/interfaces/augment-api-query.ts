// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { AssignmentId, AvailabilityBitfieldRecord, BufferedSessionChange, CandidateCommitments, CandidatePendingAvailability, CoreAssignment, CoreOccupied, HeadData, HostConfiguration, HrmpChannel, HrmpChannelId, HrmpOpenChannelRequest, InboundDownwardMessage, InboundHrmpMessage, ParaGenesisArgs, ParaId, ParaLifecycle, ParaPastCodeMeta, ParaValidatorIndex, ParachainProposal, ParathreadClaimQueue, RegisteredParachainInfo, SessionInfo, UpwardMessage, ValidationCode } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, Releases, Slot, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ValidatorIndex } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
      /**
       * Temporary value (cleared at block finalization) that includes the VRF output generated
       * at this block. This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<MaybeRandomness>, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeRandomness>>, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
      /**
       * Next epoch configuration, if changed.
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<NextConfigDescriptor>>, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
      /**
       * Randomness under construction.
       * 
       * We make a tradeoff between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Randomness>>, [u32]>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    dmp: {
      /**
       * A mapping that stores the downward message queue MQC head for each para.
       * 
       * Each link in this chain has a form:
       * `(prev_head, B, H(M))`, where
       * - `prev_head`: is the previous head hash or zero if none.
       * - `B`: is the relay-chain block number in which a message was appended.
       * - `H(M)`: is the hash of the message being appended.
       **/
      downwardMessageQueueHeads: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Hash>, [ParaId]>;
      /**
       * The downward messages addressed for a certain para.
       **/
      downwardMessageQueues: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<InboundDownwardMessage>>, [ParaId]>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>, []>;
    };
    hrmp: {
      /**
       * This mapping tracks how many open channel requests were accepted by a given recipient para.
       * Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
       * `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
       **/
      hrmpAcceptedChannelRequestCount: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<u32>, [ParaId]>;
      /**
       * Storage for the messages for each channel.
       * Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
       **/
      hrmpChannelContents: AugmentedQuery<ApiType, (arg: HrmpChannelId | { sender?: any; receiver?: any } | string | Uint8Array) => Observable<Vec<InboundHrmpMessage>>, [HrmpChannelId]>;
      /**
       * Maintains a mapping that can be used to answer the question:
       * What paras sent a message at the given block number for a given reciever.
       * Invariants:
       * - The inner `Vec<ParaId>` is never empty.
       * - The inner `Vec<ParaId>` cannot store two same `ParaId`.
       * - The outer vector is sorted ascending by block number and cannot store two items with the same
       * block number.
       **/
      hrmpChannelDigests: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, Vec<ParaId>]>>>, [ParaId]>;
      /**
       * HRMP channel data associated with each para.
       * Invariant:
       * - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
       **/
      hrmpChannels: AugmentedQuery<ApiType, (arg: HrmpChannelId | { sender?: any; receiver?: any } | string | Uint8Array) => Observable<Option<HrmpChannel>>, [HrmpChannelId]>;
      /**
       * A set of pending HRMP close channel requests that are going to be closed during the session change.
       * Used for checking if a given channel is registered for closure.
       * 
       * The set is accompanied by a list for iteration.
       * 
       * Invariant:
       * - There are no channels that exists in list but not in the set and vice versa.
       **/
      hrmpCloseChannelRequests: AugmentedQuery<ApiType, (arg: HrmpChannelId | { sender?: any; receiver?: any } | string | Uint8Array) => Observable<Option<ITuple<[]>>>, [HrmpChannelId]>;
      hrmpCloseChannelRequestsList: AugmentedQuery<ApiType, () => Observable<Vec<HrmpChannelId>>, []>;
      hrmpEgressChannelsIndex: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<ParaId>>, [ParaId]>;
      /**
       * Ingress/egress indexes allow to find all the senders and receivers given the opposite
       * side. I.e.
       * 
       * (a) ingress index allows to find all the senders for a given recipient.
       * (b) egress index allows to find all the recipients for a given sender.
       * 
       * Invariants:
       * - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
       * as `(I, P)`.
       * - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
       * as `(P, E)`.
       * - there should be no other dangling channels in `HrmpChannels`.
       * - the vectors are sorted.
       **/
      hrmpIngressChannelsIndex: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<ParaId>>, [ParaId]>;
      /**
       * This mapping tracks how many open channel requests are inititated by a given sender para.
       * Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
       * as the number of `HrmpOpenChannelRequestCount` for `X`.
       **/
      hrmpOpenChannelRequestCount: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<u32>, [ParaId]>;
      /**
       * The set of pending HRMP open channel requests.
       * 
       * The set is accompanied by a list for iteration.
       * 
       * Invariant:
       * - There are no channels that exists in list but not in the set and vice versa.
       **/
      hrmpOpenChannelRequests: AugmentedQuery<ApiType, (arg: HrmpChannelId | { sender?: any; receiver?: any } | string | Uint8Array) => Observable<Option<HrmpOpenChannelRequest>>, [HrmpChannelId]>;
      hrmpOpenChannelRequestsList: AugmentedQuery<ApiType, () => Observable<Vec<HrmpChannelId>>, []>;
      /**
       * The HRMP watermark associated with each para.
       * Invariant:
       * - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
       **/
      hrmpWatermarks: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<BlockNumber>>, [ParaId]>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<u32>, [SessionIndex, ValidatorId]>;
      /**
       * The block number after which it's ok to send heartbeats in current session.
       * 
       * At the beginning of each session we set this to a value that should
       * fall roughly in the middle of the session duration.
       * The idea is to first wait for the validators to produce a block
       * in the current session, so that the heartbeat later on will not be necessary.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []>;
      /**
       * For each session index, we keep a mapping of `AuthIndex` to
       * `offchain::OpaqueNetworkState`.
       **/
      receivedHeartbeats: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [SessionIndex, AuthIndex]>;
    };
    inclusion: {
      /**
       * The latest bitfield for each validator, referred to by their index in the validator set.
       **/
      availabilityBitfields: AugmentedQuery<ApiType, (arg: ValidatorIndex | AnyNumber | Uint8Array) => Observable<Option<AvailabilityBitfieldRecord>>, [ValidatorIndex]>;
      /**
       * Candidates pending availability by `ParaId`.
       **/
      pendingAvailability: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<CandidatePendingAvailability>>, [ParaId]>;
      /**
       * The commitments of candidates pending availability, by ParaId.
       **/
      pendingAvailabilityCommitments: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<CandidateCommitments>>, [ParaId]>;
      /**
       * The current validators, by their parachain session keys.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
    };
    inclusionInherent: {
      /**
       * Whether the inclusion inherent was included within this block.
       * 
       * The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
       * due to the guarantees of FRAME's storage APIs.
       * 
       * If this is `None` at the end of the block, we panic and render the block invalid.
       **/
      included: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[]>>>, []>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]>;
    };
    initializer: {
      /**
       * Buffered session changes along with the block number at which they should be applied.
       * 
       * Typically this will be empty or one element long. Apart from that this item never hits
       * the storage.
       * 
       * However this is a `Vec` regardless to handle various edge cases that may occur at runtime
       * upgrade boundaries or if governance intervenes.
       **/
      bufferedSessionChanges: AugmentedQuery<ApiType, () => Observable<Vec<BufferedSessionChange>>, []>;
      /**
       * Whether the parachains modules have been initialized within this block.
       * 
       * Semantically a bool, but this guarantees it should never hit the trie,
       * as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
       * 
       * As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
       * them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
       * the semantics of this variable.
       **/
      hasInitialized: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[]>>>, []>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQueryDoubleMap<ApiType, (key1: Kind | string | Uint8Array, key2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, [Kind, OpaqueTimeSlot]>;
      /**
       * Deferred reports that have been rejected by the offence handler and need to be submitted
       * at a later time.
       **/
      deferredOffences: AugmentedQuery<ApiType, () => Observable<Vec<DeferredOffenceOf>>, []>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>, [ReportIdOf]>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * 
       * All reports are sorted by the time of offence.
       * 
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>, [Kind]>;
    };
    parachainsConfiguration: {
      /**
       * The active configuration for the current session.
       **/
      activeConfig: AugmentedQuery<ApiType, () => Observable<HostConfiguration>, []>;
      /**
       * Pending configuration (if any) for the next session.
       **/
      pendingConfig: AugmentedQuery<ApiType, (arg: SessionIndex | AnyNumber | Uint8Array) => Observable<Option<HostConfiguration>>, [SessionIndex]>;
    };
    paras: {
      /**
       * The actions to perform during the start of a specific session index.
       **/
      actionsQueue: AugmentedQuery<ApiType, (arg: SessionIndex | AnyNumber | Uint8Array) => Observable<Vec<ParaId>>, [SessionIndex]>;
      /**
       * The validation code of every live para.
       **/
      currentCode: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ValidationCode>>, [ParaId]>;
      /**
       * The actual future code of a para.
       **/
      futureCode: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ValidationCode>>, [ParaId]>;
      /**
       * The block number at which the planned code change is expected for a para.
       * The change will be applied after the first parablock for this ID included which executes
       * in the context of a relay chain block with a number >= `expected_at`.
       **/
      futureCodeUpgrades: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<BlockNumber>>, [ParaId]>;
      /**
       * The head-data of every registered para.
       **/
      heads: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<HeadData>>, [ParaId]>;
      /**
       * All parachains. Ordered ascending by ParaId. Parathreads are not included.
       **/
      parachains: AugmentedQuery<ApiType, () => Observable<Vec<ParaId>>, []>;
      /**
       * The current lifecycle of a all known Para IDs.
       **/
      paraLifecycles: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ParaLifecycle>>, [ParaId]>;
      /**
       * Actual past code, indicated by the para id as well as the block number at which it became outdated.
       **/
      pastCode: AugmentedQuery<ApiType, (arg: ITuple<[ParaId, BlockNumber]> | [ParaId | AnyNumber | Uint8Array, BlockNumber | AnyNumber | Uint8Array]) => Observable<Option<ValidationCode>>, [ITuple<[ParaId, BlockNumber]>]>;
      /**
       * Past code of parachains. The parachains themselves may not be registered anymore,
       * but we also keep their code on-chain for the same amount of time as outdated code
       * to keep it available for secondary checkers.
       **/
      pastCodeMeta: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<ParaPastCodeMeta>, [ParaId]>;
      /**
       * Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
       * Note that this is the actual height of the included block, not the expected height at which the
       * code upgrade would be applied, although they may be equal.
       * This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
       * from the time at which the parachain perceives a code upgrade as having occurred.
       * Multiple entries for a single para are permitted. Ordered ascending by block number.
       **/
      pastCodePruning: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ParaId, BlockNumber]>>>, []>;
      /**
       * Upcoming paras instantiation arguments.
       **/
      upcomingParasGenesis: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ParaGenesisArgs>>, [ParaId]>;
    };
    proposeParachain: {
      /**
       * Proposals that are approved.
       **/
      approvedProposals: AugmentedQuery<ApiType, () => Observable<Vec<ParaId>>, []>;
      /**
       * Information about the registered parachains.
       **/
      parachainInfo: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<RegisteredParachainInfo>>, [ParaId]>;
      /**
       * The validation WASM code of the parachain.
       **/
      parachainValidationCode: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ValidationCode>>, [ParaId]>;
      /**
       * All the proposals.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ParachainProposal>>, [ParaId]>;
      /**
       * Proposals that are scheduled at for a fixed session to be applied.
       **/
      scheduledProposals: AugmentedQuery<ApiType, (arg: SessionIndex | AnyNumber | Uint8Array) => Observable<Vec<ParaId>>, [SessionIndex]>;
      /**
       * Validators that should be added.
       **/
      validatorsToAdd: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
      /**
       * Validators that should be retired, because their Parachain was deregistered.
       **/
      validatorsToRetire: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
    };
    registrar: {
      /**
       * Users who have paid a parathread's deposit.
       **/
      debtors: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<AccountId>, [ParaId]>;
      /**
       * Map of all registered parathreads/chains.
       **/
      paras: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<bool>>, [ParaId]>;
      /**
       * Whether parathreads are enabled or not.
       **/
      parathreadsRegistrationEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Pending swap operations.
       **/
      pendingSwap: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<ParaId>>, [ParaId]>;
    };
    scheduler: {
      /**
       * One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
       * temporarily `Some` if scheduled but not occupied.
       * The i'th parachain belongs to the i'th core, with the remaining cores all being
       * parathread-multiplexers.
       * 
       * Bounded by the maximum of either of these two values:
       * * The number of parachains and parathread multiplexers
       * * The number of validators divided by `configuration.max_validators_per_core`.
       **/
      availabilityCores: AugmentedQuery<ApiType, () => Observable<Vec<Option<CoreOccupied>>>, []>;
      /**
       * An index used to ensure that only one claim on a parathread exists in the queue or is
       * currently being handled by an occupied core.
       * 
       * Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
       **/
      parathreadClaimIndex: AugmentedQuery<ApiType, () => Observable<Vec<ParaId>>, []>;
      /**
       * A queue of upcoming claims and which core they should be mapped onto.
       * 
       * The number of queued claims is bounded at the `scheduling_lookahead`
       * multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
       **/
      parathreadQueue: AugmentedQuery<ApiType, () => Observable<ParathreadClaimQueue>, []>;
      /**
       * Currently scheduled cores - free but up to be occupied.
       * 
       * Bounded by the number of cores: one for each parachain and parathread multiplexer.
       * 
       * The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
       * for the upcoming block.
       **/
      scheduled: AugmentedQuery<ApiType, () => Observable<Vec<CoreAssignment>>, []>;
      /**
       * The block number where the session start occurred. Used to track how many group rotations have occurred.
       * 
       * Note that in the context of parachains modules the session change is signalled during
       * the block and enacted at the end of the block (at the finalization stage, to be exact).
       * Thus for all intents and purposes the effect of the session change is observed at the
       * block following the session change, block number of which we save in this storage value.
       **/
      sessionStartBlock: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * All the validator groups. One for each core.
       * 
       * Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
       * Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
       **/
      validatorGroups: AugmentedQuery<ApiType, () => Observable<Vec<Vec<ParaValidatorIndex>>>, []>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
    };
    sessionInfo: {
      /**
       * Assignment keys for the current session.
       * Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
       * When in doubt, use `Sessions` API instead.
       **/
      assignmentKeysUnsafe: AugmentedQuery<ApiType, () => Observable<Vec<AssignmentId>>, []>;
      /**
       * The earliest session for which previous session info is stored.
       **/
      earliestStoredSession: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
      /**
       * Session information in a rolling window.
       * Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
       * Does not have any entries before the session index in the first session change notification.
       **/
      sessions: AugmentedQuery<ApiType, (arg: SessionIndex | AnyNumber | Uint8Array) => Observable<Option<SessionInfo>>, [SessionIndex]>;
    };
    shared: {
      /**
       * The current session index.
       **/
      currentSessionIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    ump: {
      /**
       * The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
       * 
       * Invariant:
       * - The set of items from this vector should be exactly the set of the keys in
       * `RelayDispatchQueues` and `RelayDispatchQueueSize`.
       **/
      needsDispatch: AugmentedQuery<ApiType, () => Observable<Vec<ParaId>>, []>;
      /**
       * This is the para that gets will get dispatched first during the next upward dispatchable queue
       * execution round.
       * 
       * Invariant:
       * - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
       **/
      nextDispatchRoundStartWith: AugmentedQuery<ApiType, () => Observable<Option<ParaId>>, []>;
      /**
       * The messages waiting to be handled by the relay-chain originating from a certain parachain.
       * 
       * Note that some upward messages might have been already processed by the inclusion logic. E.g.
       * channel management messages.
       * 
       * The messages are processed in FIFO order.
       **/
      relayDispatchQueues: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<UpwardMessage>>, [ParaId]>;
      /**
       * Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
       * 
       * First item in the tuple is the count of messages and second
       * is the total length (in bytes) of the message payloads.
       * 
       * Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
       * messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
       * loading the whole message queue if only the total size and count are required.
       * 
       * Invariant:
       * - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
       **/
      relayDispatchQueueSize: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<ITuple<[u32, u32]>>, [ParaId]>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
