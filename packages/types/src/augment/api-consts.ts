// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { AccountId32, Perbill, Percent, Permill } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyTokenSymbol, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmV3JunctionNetworkId, XcmV3MultiLocation } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencies: {
      getNativeCurrencyId: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    farming: {
      farmingBoost: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * ModuleID for creating sub account
       **/
      keeper: FrameSupportPalletId & AugmentedConst<ApiType>;
      rewardIssuer: FrameSupportPalletId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      whitelistMaximumLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    feeShare: {
      feeSharePalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    flexibleFee: {
      alternativeFeeCurrencyId: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Alternative Fee currency exchange rate: ?x Fee currency: ?y Native currency
       **/
      altFeeCurrencyExchangeRate: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      maxFeeCurrencyOrderListLen: u32 & AugmentedConst<ApiType>;
      nativeCurrencyId: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    lighteningRedeem: {
      /**
       * ModuleID for creating sub account
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    liquidityMining: {
      /**
       * The count of liquidity-pool charged should be less than the value
       **/
      maximumCharged: u32 & AugmentedConst<ApiType>;
      /**
       * The deposit of a liquidity-pool should be less than the value
       **/
      maximumDepositInPool: u128 & AugmentedConst<ApiType>;
      /**
       * The count of option rewards should be less than the value
       **/
      maximumOptionRewards: u32 & AugmentedConst<ApiType>;
      /**
       * The amount which be deposited to a liquidity-pool should be greater than the value
       **/
      minimumDepositOfUser: u128 & AugmentedConst<ApiType>;
      /**
       * The duration of a liquidity-pool should be greater than the value
       **/
      minimumDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of reward which will be released per block should be greater than the value
       **/
      minimumRewardPerBlock: u128 & AugmentedConst<ApiType>;
      /**
       * ModuleID for creating sub account
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The value used to construct vsbond when creating a farming-liquidity-pool
       **/
      relayChainTokenSymbol: NodePrimitivesCurrencyTokenSymbol & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    liquidityMiningDOT: {
      /**
       * The count of liquidity-pool charged should be less than the value
       **/
      maximumCharged: u32 & AugmentedConst<ApiType>;
      /**
       * The deposit of a liquidity-pool should be less than the value
       **/
      maximumDepositInPool: u128 & AugmentedConst<ApiType>;
      /**
       * The count of option rewards should be less than the value
       **/
      maximumOptionRewards: u32 & AugmentedConst<ApiType>;
      /**
       * The amount which be deposited to a liquidity-pool should be greater than the value
       **/
      minimumDepositOfUser: u128 & AugmentedConst<ApiType>;
      /**
       * The duration of a liquidity-pool should be greater than the value
       **/
      minimumDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of reward which will be released per block should be greater than the value
       **/
      minimumRewardPerBlock: u128 & AugmentedConst<ApiType>;
      /**
       * ModuleID for creating sub account
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The value used to construct vsbond when creating a farming-liquidity-pool
       **/
      relayChainTokenSymbol: NodePrimitivesCurrencyTokenSymbol & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    merkleDistributor: {
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The maximum length of a merkel description stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainStaking: {
      /**
       * Allow inflation or not
       **/
      allowInflation: bool & AugmentedConst<ApiType>;
      /**
       * Number of rounds candidate requests to decrease self-bond must wait to be executable
       **/
      candidateBondLessDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Default number of blocks per round at genesis
       **/
      defaultBlocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Default commission due to collators, is `CollatorCommission` storage value in genesis
       **/
      defaultCollatorCommission: Perbill & AugmentedConst<ApiType>;
      /**
       * Default percent of inflation set aside for parachain bond account
       **/
      defaultParachainBondReservePercent: Percent & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegation less requests must wait before executable
       **/
      delegationBondLessDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Invulnables init stake
       **/
      initSeedStk: u128 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that candidates remain bonded before exit request is executable
       **/
      leaveCandidatesDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegators remain bonded before exit request is executable
       **/
      leaveDelegatorsDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum bottom delegations (not counted) per candidate
       **/
      maxBottomDelegationsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum delegations per delegator
       **/
      maxDelegationsPerDelegator: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum top delegations counted per candidate
       **/
      maxTopDelegationsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of blocks per round
       **/
      minBlocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any account to be a collator candidate
       **/
      minCandidateStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any candidate to be in `SelectedCandidates` for the round
       **/
      minCollatorStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake for any registered on-chain account to delegate
       **/
      minDelegation: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake for any registered on-chain account to be a delegator
       **/
      minDelegatorStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum number of selected candidates every round
       **/
      minSelectedCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * PalletId
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fix payment in one round if no inflation
       **/
      paymentInRound: u128 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegations remain bonded before revocation request is executable
       **/
      revokeDelegationDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds after which block authors are rewarded
       **/
      rewardPaymentDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Invulnables to migrate
       **/
      toMigrateInvulnables: Vec<AccountId32> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    phragmenElection: {
      /**
       * How much should be locked up in order to submit one's candidacy.
       **/
      candidacyBond: u128 & AugmentedConst<ApiType>;
      /**
       * Number of members to elect.
       **/
      desiredMembers: u32 & AugmentedConst<ApiType>;
      /**
       * Number of runners_up to keep.
       **/
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of candidates in a phragmen election.
       * 
       * Warning: The election happens onchain, and this value will determine
       * the size of the election. When this limit is reached no more
       * candidates are accepted in the election.
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of voters to allow in a phragmen election.
       * 
       * Warning: This impacts the size of the election which is run onchain.
       * When the limit is reached the new voters are ignored.
       **/
      maxVoters: u32 & AugmentedConst<ApiType>;
      /**
       * Identifier for the elections-phragmen pallet's lock
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * How long each seat is kept. This defines the next block number at which an election
       * round will happen. If set to zero, no elections are ever triggered and the module will
       * be in passive mode.
       **/
      termDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit associated with voting.
       * 
       * This should be sensibly high to economically ensure the pallet cannot be attacked by
       * creating a gigantic number of votes.
       **/
      votingBondBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of bond that need to be locked for each vote (32 bytes).
       **/
      votingBondFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    salp: {
      buybackPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The number of blocks over which a single period lasts.
       **/
      leasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
       * at least ExistentialDeposit.
       **/
      minContribution: u128 & AugmentedConst<ApiType>;
      /**
       * ModuleID for the crowdloan module. An appropriate value could be
       * ```ModuleId(*b"py/cfund")```
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      relayChainToken: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The time interval from 1:1 redeem-pool to bancor-pool to release.
       **/
      releaseCycle: u32 & AugmentedConst<ApiType>;
      /**
       * The release ratio from the 1:1 redeem-pool to the bancor-pool per cycle.
       * 
       * **NOTE: THE RELEASE RATIO MUST BE IN [0, 1].**
       **/
      releaseRatio: Percent & AugmentedConst<ApiType>;
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
      slotLength: u32 & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      vsBondValidPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    salpLite: {
      batchKeysLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks over which a single period lasts.
       **/
      leasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
       * at least ExistentialDeposit.
       **/
      minContribution: u128 & AugmentedConst<ApiType>;
      /**
       * ModuleID for the crowdloan module. An appropriate value could be
       * ```ModuleId(*b"py/cfund")```
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      relayChainToken: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The time interval from 1:1 redeem-pool to bancor-pool to release.
       **/
      releaseCycle: u32 & AugmentedConst<ApiType>;
      /**
       * The release ratio from the 1:1 redeem-pool to the bancor-pool per cycle.
       **/
      releaseRatio: Percent & AugmentedConst<ApiType>;
      slotLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    slp: {
      maxRefundPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to be confirmed in a block for update queue in the
       * on_initialize queue.
       **/
      maxTypeEntryPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    systemMaker: {
      relayChainToken: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      systemMakerPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    systemStaking: {
      /**
       * 1500
       **/
      blocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Max farming poolid length
       **/
      maxFarmingPoolIdLen: u32 & AugmentedConst<ApiType>;
      /**
       * Max token length 500
       **/
      maxTokenLen: u32 & AugmentedConst<ApiType>;
      /**
       * ModuleID for creating sub account
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>;
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vsBondAuction: {
      /**
       * The currency type that buyer to pay
       **/
      invoicingCurrency: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * The amount of orders in-trade that user can hold
       **/
      maximumOrderInTrade: u32 & AugmentedConst<ApiType>;
      /**
       * The sale or buy quantity needs to be greater than `MinimumSupply` to create an order
       **/
      minimumAmount: u128 & AugmentedConst<ApiType>;
      /**
       * ModuleID for creating sub account
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The account that transaction fees go into
       **/
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vstokenConversion: {
      relayCurrencyId: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      treasuryAccount: AccountId32 & AugmentedConst<ApiType>;
      vsbondAccount: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vtokenMinting: {
      entranceAccount: FrameSupportPalletId & AugmentedConst<ApiType>;
      exitAccount: FrameSupportPalletId & AugmentedConst<ApiType>;
      feeAccount: AccountId32 & AugmentedConst<ApiType>;
      maximumUnlockIdOfTimeUnit: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of mint
       **/
      maximumUnlockIdOfUser: u32 & AugmentedConst<ApiType>;
      relayChainToken: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmInterface: {
      callBackTimeOut: u32 & AugmentedConst<ApiType>;
      contributionFee: u128 & AugmentedConst<ApiType>;
      contributionWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      parachainId: u32 & AugmentedConst<ApiType>;
      /**
       * The account of parachain on the relaychain.
       **/
      parachainSovereignAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The currency id of the RelayChain
       **/
      relaychainCurrencyId: NodePrimitivesCurrencyCurrencyId & AugmentedConst<ApiType>;
      relayNetwork: XcmV3JunctionNetworkId & AugmentedConst<ApiType>;
      statemineTransferFee: u128 & AugmentedConst<ApiType>;
      statemineTransferWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: XcmV3MultiLocation & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    zenlinkProtocol: {
      /**
       * This pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    zenlinkStableAMM: {
      /**
       * This pallet ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      poolCurrencySymbolLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
