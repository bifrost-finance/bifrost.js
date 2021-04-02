// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Option, Vec, bool, u32, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { CurrencyId, TokenSymbol } from '@bifrost-finance/types/interfaces/assets';
import type { BlockNumberFor } from '@bifrost-finance/types/interfaces/chargeTransactionFee';
import type { CurrencyIdOf, IsExtended, ShareWeight, StorageVersion } from '@bifrost-finance/types/interfaces/vtokenMint';
import type { Pair, PairId, TokenBalance } from '@bifrost-finance/types/interfaces/zenlinkProtocol';
import type { TAssetBalance } from '@polkadot/types/interfaces/assets';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { AbridgedHostConfiguration, MessageQueueChain, MessagingStateSnapshot, ParaId, PersistedValidationData, RelayChainBlockNumber, UpwardMessage } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Hash, Moment, Permill, Releases } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyId | { Token: any } | string | Uint8Array) => Observable<AccountData>, [AccountId, CurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyId | { Token: any } | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, CurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: CurrencyId | { Token: any } | string | Uint8Array) => Observable<TAssetBalance>, [CurrencyId]>;
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
    chargeTransactionFee: {
      defaultFeeChargeOrderList: AugmentedQuery<ApiType, () => Observable<Vec<CurrencyId>>, []>;
      userFeeChargeOrderList: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<CurrencyId>>, [AccountId]>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]>;
    };
    minterReward: {
      /**
       * How much BNC will be issued to minters each block after.
       **/
      bncRewardByOneBlock: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Record maximum vtoken value is minted and when minted
       **/
      currentRound: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Ieally, BNC reward will be issued after each 50 blocks.
       **/
      currentRoundStartAt: AugmentedQuery<ApiType, () => Observable<BlockNumberFor>, []>;
      /**
       * Record maximum vtoken value is minted and when minted
       **/
      maximumVtokenMinted: AugmentedQuery<ApiType, () => Observable<ITuple<[BlockNumberFor, BalanceOf, CurrencyIdOf, IsExtended]>>, []>;
      /**
       * Who mints vtoken
       **/
      minter: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<BalanceOf>, [AccountId, CurrencyIdOf]>;
      /**
       * Current storage version
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<StorageVersion>, []>;
      totalVtokenMinted: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * Record a user how much bnc s/he reveives.
       **/
      userBncReward: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId]>;
      weights: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<ShareWeight>, [CurrencyIdOf]>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<ParaId>, []>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finialize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<AbridgedHostConfiguration>>, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<MessageQueueChain>, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<ParaId, MessageQueueChain>>, []>;
      /**
       * The last relay parent block number at which we signalled the code upgrade.
       **/
      lastUpgrade: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * HRMP channels with the given recipients are awaiting to be processed. If a `ParaId` is
       * present in this vector then `OutboundHrmpMessages` for it should be not empty.
       **/
      nonEmptyHrmpChannels: AugmentedQuery<ApiType, () => Observable<Vec<ParaId>>, []>;
      /**
       * Essentially `OutboundHrmpMessage`s grouped by the recipients.
       **/
      outboundHrmpMessages: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Vec<Bytes>>, [ParaId]>;
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<UpwardMessage>>, []>;
      pendingValidationFunction: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[RelayChainBlockNumber, Bytes]>>>, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<MessagingStateSnapshot>>, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PersistedValidationData>>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
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
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
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
       * Referer channels for all users.
       **/
      allReferrerChannels: AugmentedQuery<ApiType, () => Observable<ITuple<[BTreeMap<AccountId, BalanceOf>, BalanceOf]>>, []>;
      /**
       * Total mint pool
       **/
      mintPool: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * The ROI of each token by every block.
       **/
      rateOfInterestEachBlock: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * Record when and how much balance user want to redeem.
       **/
      redeemRecord: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>, [AccountId, CurrencyIdOf]>;
      /**
       * Collect referrer, minter => ([(referrer1, 1000), (referrer2, 2000), ...], total_point)
       * total_point = 1000 + 2000 + ...
       * referrer must be unique, so check it unique while a new referrer incoming.
       * and insert the new channel to the
       **/
      referrerChannels: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ITuple<[AccountId, BalanceOf]>>, BalanceOf]>>, [AccountId]>;
      /**
       * List lock period while staking.
       **/
      stakingLockPeriod: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<BlockNumber>, [CurrencyIdOf]>;
      /**
       * List user staking revenue.
       **/
      userStakingRevenue: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: TokenSymbol | 'BNC' | 'aUSD' | 'DOT' | 'vDOT' | 'KSM' | 'vKSM' | 'ETH' | 'vETH' | 'EOS' | 'vEOS' | 'IOST' | 'vIOST' | number | Uint8Array) => Observable<BalanceOf>, [AccountId, TokenSymbol]>;
      /**
       * Yeild rate for each token
       **/
      yieldRate: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | string | Uint8Array) => Observable<Permill>, [CurrencyIdOf]>;
    };
    xTokens: {
    };
    zenlinkProtocol: {
      assetsToPair: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, AssetId]> | [AssetId | { NativeCurrency: any } | { ParaCurrency: any } | string | Uint8Array, AssetId | { NativeCurrency: any } | { ParaCurrency: any } | string | Uint8Array]) => Observable<Option<Pair>>, [ITuple<[AssetId, AssetId]>]>;
      liquidityPool: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, AccountId]> | [AccountId | string | Uint8Array, AccountId | string | Uint8Array]) => Observable<TokenBalance>, [ITuple<[AccountId, AccountId]>]>;
      nextPairId: AugmentedQuery<ApiType, () => Observable<PairId>, []>;
      pairs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AssetId, AssetId]>>>, []>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
