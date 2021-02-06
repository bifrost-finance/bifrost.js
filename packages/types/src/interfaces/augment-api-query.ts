// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Data, Option, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { AccountAsset, Price, Token } from '@bifrost-finance/types/interfaces/assets';
import type { BiddingOrderId, BiddingOrderUnitOf, EraId, RewardRecord } from '@bifrost-finance/types/interfaces/bid';
import type { PoolDetails, PoolId, PoolToken, PoolWeight } from '@bifrost-finance/types/interfaces/swap';
import type { MintPrice, VtokenPool } from '@bifrost-finance/types/interfaces/vtokenMint';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { ProxyAnnouncement, ProxyDefinition } from '@polkadot/types/interfaces/proxy';
import type { ActiveRecovery, RecoveryConfig } from '@polkadot/types/interfaces/recovery';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, OpaqueCall, Perbill, Permill, Releases, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { Bid, BidKind, SocietyVote, StrikeCount, VouchingStatus } from '@polkadot/types/interfaces/society';
import type { ActiveEraInfo, ElectionResult, ElectionScore, ElectionStatus, EraIndex, EraRewardPoints, Exposure, Forcing, Nominations, RewardDestination, SeatHolder, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs, Voter } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Bounty, BountyIndex, OpenTip, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      /**
       * A collection of asset which an account owned
       **/
      accountAssetIds: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<AssetId>>, [AccountId]>;
      /**
       * The number of units of assets held by any given asset ans given account.
       **/
      accountAssets: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, AccountId]> | [AssetId | AnyNumber | Uint8Array, AccountId | string | Uint8Array]) => Observable<AccountAsset>, [ITuple<[AssetId, AccountId]>]>;
      /**
       * The next asset identifier up for grabs.
       **/
      nextAssetId: AugmentedQuery<ApiType, () => Observable<AssetId>, []>;
      /**
       * The number of units of prices held by any given asset.
       **/
      prices: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Price>, [AssetId]>;
      /**
       * Details of the token corresponding to an asset id.
       **/
      tokens: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Token>, [AssetId]>;
    };
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
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
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
       * NOTE: This is only used in the case that this module is used to store balances.
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
    bid: {
      /**
       * Bidder proposals in queue which haven't been matched.
       **/
      bidderProposalInQueue: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Vec<BiddingOrderId>>, [AccountId, AssetId]>;
      /**
       * Record bidder token orders in service in the form of id in a map.
       **/
      bidderTokenOrdersInService: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Vec<BiddingOrderId>>, [AccountId, AssetId]>;
      /**
       * queue for unmatched bidding proposals
       **/
      biddingQueues: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[Permill, BiddingOrderId]>>>, [AssetId]>;
      /**
       * Block number per era for each vtoken
       **/
      blockNumberPerEra: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<BlockNumber>, [AssetId]>;
      /**
       * Orders have been unbonded because of user withdrawing within current era. If vtoken supply increase later
       * within current era, the deleted orders recorded in this storage can restore.
       * vtoken => (deleted_order_id, original_end_block_number)
       **/
      forciblyUnbondOrdersInCurrentEra: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[BiddingOrderId, BiddingOrderUnitOf]>>>, [AssetId]>;
      /**
       * the min and max number of blocks that an matched order can last. 【token => (min, max)】
       **/
      minMaxOrderLastingBlockNum: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<ITuple<[BlockNumber, BlockNumber]>>, [AssetId]>;
      /**
       * Recording the orders in service ids for every end block number.
       **/
      orderEndBlockNumMap: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<BiddingOrderId>>, [BlockNumber]>;
      /**
       * Order next id
       **/
      orderNextId: AugmentedQuery<ApiType, () => Observable<BiddingOrderId>, []>;
      /**
       * map for recording orders in service. key is id, value is BiddingOrderUnit struct.
       **/
      ordersInService: AugmentedQuery<ApiType, (arg: BiddingOrderId | AnyNumber | Uint8Array) => Observable<BiddingOrderUnitOf>, [BiddingOrderId]>;
      /**
       * proposal Id
       **/
      proposalNextId: AugmentedQuery<ApiType, () => Observable<BiddingOrderId>, []>;
      /**
       * Proposals map, recording all the proposals. key is id, value is proposal detail.
       **/
      proposalsInQueue: AugmentedQuery<ApiType, (arg: BiddingOrderId | AnyNumber | Uint8Array) => Observable<BiddingOrderUnitOf>, [BiddingOrderId]>;
      /**
       * the block number lag before we can vote for another validator when we stop a staking
       **/
      serviceStopBlockNumLag: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<BlockNumber>, [AssetId]>;
      /**
       * Slash amounts for orders in service. This storage should be updated by the Staking pallet whenever there is
       * slash occurred for a certain order. When the order ends, remaining slash deposit should be return to the
       * bidder and the record in this storage should be deleted.
       **/
      slashForOrdersInService: AugmentedQuery<ApiType, (arg: BiddingOrderId | AnyNumber | Uint8Array) => Observable<Balance>, [BiddingOrderId]>;
      /**
       * slash margin rates for each type of token
       **/
      slashMarginRates: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Permill>, [AssetId]>;
      /**
       * maintain a list of order id for each token in the order of ROI increasing. Every Vec constrain
       * to a constant length. token => (annual roi, order id), order by annual roi ascending.
       **/
      tokenOrderRoiList: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[Permill, BiddingOrderId]>>>, [AssetId]>;
      /**
       * Record the releasing votes from now to the end of current era.
       **/
      toReleaseVotesTilEndOfEra: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, EraId]> | [AssetId | AnyNumber | Uint8Array, EraId | AnyNumber | Uint8Array]) => Observable<Balance>, [ITuple<[AssetId, EraId]>]>;
      /**
       * the bidding balance of each registered vtoken.
       **/
      totalProposalsInQueue: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Balance>, [AssetId]>;
      /**
       * total votes which are already in service
       **/
      totalVotesInService: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Balance>, [AssetId]>;
      /**
       * vtokens that have been registered for bidding marketplace
       **/
      vtokensRegisteredForBidding: AugmentedQuery<ApiType, () => Observable<Vec<AssetId>>, []>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bounty>>, [BountyIndex]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<BountyIndex>>, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<BountyIndex>, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [BountyIndex]>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]>;
    };
    elections: {
      /**
       * The present candidate list. A current member or runner-up can never enter this vector
       * and is always implicitly assumed to be a candidate.
       * 
       * Second element is the deposit.
       * 
       * Invariant: Always sorted based on account id.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>, []>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current elected members.
       * 
       * Invariant: Always sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []>;
      /**
       * The current reserved runners-up.
       * 
       * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
       * last (i.e. _best_) runner-up will be replaced.
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []>;
      /**
       * Votes and locked stake of a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
       **/
      voting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voter>, [AccountId]>;
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
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Registration>>, [AccountId]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>, [AccountId]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Data]>>>, [AccountId]>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `T::ValidatorId` to the
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
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]>;
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
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyAnnouncement>, BalanceOf]>>, [AccountId]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyDefinition>, BalanceOf]>>, [AccountId]>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
    };
    recovery: {
      /**
       * Active recovery attempts.
       * 
       * First account is the account to be recovered, and the second account
       * is the user trying to recover the account.
       **/
      activeRecoveries: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<ActiveRecovery>>, [AccountId, AccountId]>;
      /**
       * The list of allowed proxy accounts.
       * 
       * Map from the user who can access it to the recovered account.
       **/
      proxy: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
      /**
       * The set of recoverable accounts and their recovery configuration.
       **/
      recoverable: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<RecoveryConfig>>, [AccountId]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
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
    society: {
      /**
       * The current bids, stored ordered by the value of the bid.
       **/
      bids: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>, []>;
      /**
       * The current set of candidates; bidders that are attempting to become members.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<Bid>>, []>;
      /**
       * The defending member currently being challenged.
       **/
      defender: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Votes for the defender.
       **/
      defenderVotes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>, [AccountId]>;
      /**
       * The first member.
       **/
      founder: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * The most primary from the most recently approved members.
       **/
      head: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * The max number of members for the society at one time.
       **/
      maxMembers: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current set of members, ordered.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * Pending payouts; ordered by block number, with the amount that should be paid out.
       **/
      payouts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>, [AccountId]>;
      /**
       * Amount of our account balance that is specifically for the next round's bid(s).
       **/
      pot: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * A hash of the rules of this society concerning membership. Can only be set once and
       * only by the founder.
       **/
      rules: AugmentedQuery<ApiType, () => Observable<Option<Hash>>, []>;
      /**
       * The ongoing number of losing votes cast by the member.
       **/
      strikes: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<StrikeCount>, [AccountId]>;
      /**
       * The set of suspended candidates.
       **/
      suspendedCandidates: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[BalanceOf, BidKind]>>>, [AccountId]>;
      /**
       * The set of suspended members.
       **/
      suspendedMembers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]>;
      /**
       * Double map from Candidate -> Voter -> (Maybe) Vote.
       **/
      votes: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<SocietyVote>>, [AccountId, AccountId]>;
      /**
       * Members currently vouching or banned from vouching again
       **/
      vouching: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VouchingStatus>>, [AccountId]>;
    };
    staking: {
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era being currently rewarded. Validator set of this era must be
       * equal to [`SessionInterface::validators`].
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<ActiveEraInfo>>, []>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       * 
       * Must contains information for eras for the range:
       * `[active_era - bounding_duration; active_era]`
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>, []>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []>;
      /**
       * The earliest era for which we have a pending, unapplied slash.
       **/
      earliestUnappliedSlash: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []>;
      /**
       * Flag to control the execution of the offchain election. When `Open(_)`, we accept
       * solutions to be submitted.
       **/
      eraElectionStatus: AugmentedQuery<ApiType, () => Observable<ElectionStatus>, []>;
      /**
       * Rewards for the last `HISTORY_DEPTH` eras.
       * If reward hasn't been set or has been removed then 0 reward is returned.
       **/
      erasRewardPoints: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<EraRewardPoints>, [EraIndex]>;
      /**
       * Exposure of validator at era.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakers: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]>;
      /**
       * Clipped Exposure of validator at era.
       * 
       * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
       * `T::MaxNominatorRewardedPerValidator` biggest stakers.
       * (Note: the field `total` and `own` of the exposure remains unchanged).
       * This is used to limit the i/o cost for the nominator payout.
       * 
       * This is keyed fist by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakersClipped: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]>;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       * 
       * Note: This tracks the starting session (i.e. session index when era start being active)
       * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [EraIndex]>;
      /**
       * The total amount staked for the last `HISTORY_DEPTH` eras.
       * If total hasn't been set or has been removed then 0 stake is returned.
       **/
      erasTotalStake: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<BalanceOf>, [EraIndex]>;
      /**
       * Similar to `ErasStakers`, this holds the preferences of validators.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       **/
      erasValidatorPrefs: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [EraIndex, AccountId]>;
      /**
       * The total validator era payout for the last `HISTORY_DEPTH` eras.
       * 
       * Eras that haven't finished yet or has been removed doesn't have reward.
       **/
      erasValidatorReward: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex]>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []>;
      /**
       * Number of eras to keep in history.
       * 
       * Information is kept for eras in `[current_era - history_depth; current_era]`.
       * 
       * Must be more than the number of eras delayed by session otherwise. I.e. active era must
       * always be in history. I.e. `active_era > current_era - history_depth` must be
       * guaranteed.
       **/
      historyDepth: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * True if the current **planned** session is final. Note that this does not take era
       * forcing into account.
       **/
      isCurrentSessionFinal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<StakingLedger>>, [AccountId]>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map from nominator stash key to the set of stash keys of all validators to nominate.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Nominations>>, [AccountId]>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex, AccountId]>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardDestination>, [AccountId]>;
      /**
       * The next validator set. At the end of an era, if this is available (potentially from the
       * result of an offchain worker), it is immediately used. Otherwise, the on-chain election
       * is executed.
       **/
      queuedElected: AugmentedQuery<ApiType, () => Observable<Option<ElectionResult>>, []>;
      /**
       * The score of the current [`QueuedElected`].
       **/
      queuedScore: AugmentedQuery<ApiType, () => Observable<Option<ElectionScore>>, []>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SlashingSpans>>, [AccountId]>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * 
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * Snapshot of nominators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotNominators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []>;
      /**
       * Snapshot of validators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotValidators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, SpanIndex]> | [AccountId | string | Uint8Array, SpanIndex | AnyNumber | Uint8Array]) => Observable<SpanRecord>, [ITuple<[AccountId, SpanIndex]>]>;
      /**
       * True if network has been upgraded to this version.
       * Storage version of the pallet.
       * 
       * This is set to v5.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Vec<UnappliedSlash>>, [EraIndex]>;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [AccountId]>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>, [EraIndex, AccountId]>;
    };
    stakingReward: {
      point: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, AccountId]> | [AssetId | AnyNumber | Uint8Array, AccountId | string | Uint8Array]) => Observable<Balance>, [ITuple<[AssetId, AccountId]>]>;
      reward: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Vec<RewardRecord>>, [AssetId]>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
    };
    swap: {
      /**
       * Record the calculated deducted BNC bonus amount for each pool,
       * including deducted but unclaimed amount as well as claimed amount
       **/
      deductedBonusAmountInPool: AugmentedQuery<ApiType, (arg: PoolId | AnyNumber | Uint8Array) => Observable<Balance>, [PoolId]>;
      /**
       * Pool info
       **/
      pools: AugmentedQuery<ApiType, (arg: PoolId | AnyNumber | Uint8Array) => Observable<PoolDetails>, [PoolId]>;
      /**
       * total pool tokens in pool.
       **/
      poolTokensInPool: AugmentedQuery<ApiType, (arg: PoolId | AnyNumber | Uint8Array) => Observable<PoolToken>, [PoolId]>;
      /**
       * Token balance info for pools
       **/
      tokenBalancesInPool: AugmentedQueryDoubleMap<ApiType, (key1: PoolId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Balance>, [PoolId, AssetId]>;
      /**
       * Token weights info for pools. Weights must be normalized at the beginning.
       * Sum of all the token weights for a pool must be 1 * WeightPrecision. Should be ensured when set up the pool.
       **/
      tokenWeightsInPool: AugmentedQueryDoubleMap<ApiType, (key1: PoolId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<PoolWeight>, [PoolId, AssetId]>;
      /**
       * Users' pool tokens in different pools
       **/
      userPoolTokensInPool: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: PoolId | AnyNumber | Uint8Array) => Observable<PoolToken>, [AccountId, PoolId]>;
      /**
       * Record user unclaimed liquidity bonus. There are two occasions that will trigger the calculation of unclaimed bonus:
       * 1. The user adds or removes his liquidity to the pool.
       * 2. The user claims his bonus.
       * The value part of the map is a tuple contains (un_claimed_Bonus, last_calculation_block).
       * "un_claimed_Bonus" shows the remaining unclaimed but calculated bonus balance.
       * "last_calculation_block" records the block number of last time when liquidity bonus calculation is triggered.
       **/
      userUnclaimedBonusInPool: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: PoolId | AnyNumber | Uint8Array) => Observable<ITuple<[Balance, BlockNumber]>>, [AccountId, PoolId]>;
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
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    technicalMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
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
    tips: {
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Bytes>>, [Hash]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<OpenTip>>, [Hash]>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>, [ProposalIndex]>;
    };
    vesting: {
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VestingInfo>>, [AccountId]>;
    };
    voucher: {
      /**
       * How much voucher you have
       **/
      balancesVoucher: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Balance>, [AccountId]>;
      /**
       * Current remaining BNC adds all others vouchers, equaling to TotalSuppliedBNC
       **/
      remainingBnc: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
      /**
       * Total BNC in mainnet
       **/
      totalSuppliedBnc: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    vtokenMint: {
      /**
       * referer channels for all users
       **/
      allReferrerChannels: AugmentedQuery<ApiType, () => Observable<ITuple<[BTreeMap<AccountId, Balance>, Balance]>>, []>;
      /**
       * mint price between two tokens, vtoken => (token, mint_price)
       **/
      mintPrice: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<MintPrice>, [AssetId]>;
      /**
       * Vtoken mint pool
       **/
      pool: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<VtokenPool>, [AssetId]>;
      /**
       * collect referrer, minter => ([(referrer1, 1000), (referrer2, 2000), ...], total_point)
       * total_point = 1000 + 2000 + ...
       * referrer must be unique, so check it unique while a new referrer incoming.
       * and insert the new channel to the
       **/
      referrerChannels: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ITuple<[AccountId, Balance]>>, Balance]>>, [AccountId]>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
