// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u16, u32, u64, u8 } from '@polkadot/types';
import type { Balance, BalanceOf, BlockNumber, Moment, PalletId, RuntimeDbWeight } from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { BlockLength, BlockWeights } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    auctions: {
      /**
       * The number of blocks over which an auction may be retroactively ended.
       **/
      endingPeriod: BlockNumber & AugmentedConst<ApiType>;
      leasePeriodsPerSlot: u32 & AugmentedConst<ApiType>;
      /**
       * The length of each sample to take during the ending period.
       * 
       * EndingPeriod / SampleLength = Total # of Samples
       **/
      sampleLength: BlockNumber & AugmentedConst<ApiType>;
      slotRangeCount: u32 & AugmentedConst<ApiType>;
    };
    babe: {
      /**
       * The amount of time, in slots, that each epoch should last.
       * NOTE: Currently it is not possible to change the epoch duration after
       * the chain has started. Attempting to do so will brick block production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: Moment & AugmentedConst<ApiType>;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & AugmentedConst<ApiType>;
    };
    bridgeRococoGrandpa: {
      /**
       * Maximal number of finalized headers to keep in the storage.
       * 
       * The setting is there to prevent growing the on-chain state indefinitely. Note
       * the setting does not relate to block numbers - we will simply keep as much items
       * in the storage, so it doesn't guarantee any fixed timeframe for finality headers.
       **/
      headersToKeep: u32 & AugmentedConst<ApiType>;
      /**
       * The upper bound on the number of requests allowed by the pallet.
       * 
       * A request refers to an action which writes a header to storage.
       * 
       * Once this bound is reached the pallet will not allow any dispatchables to be called
       * until the request count has decreased.
       **/
      maxRequests: u32 & AugmentedConst<ApiType>;
    };
    bridgeWococoGrandpa: {
      /**
       * Maximal number of finalized headers to keep in the storage.
       * 
       * The setting is there to prevent growing the on-chain state indefinitely. Note
       * the setting does not relate to block numbers - we will simply keep as much items
       * in the storage, so it doesn't guarantee any fixed timeframe for finality headers.
       **/
      headersToKeep: u32 & AugmentedConst<ApiType>;
      /**
       * The upper bound on the number of requests allowed by the pallet.
       * 
       * A request refers to an action which writes a header to storage.
       * 
       * Once this bound is reached the pallet will not allow any dispatchables to be called
       * until the request count has decreased.
       **/
      maxRequests: u32 & AugmentedConst<ApiType>;
    };
    crowdloan: {
      /**
       * The minimum amount that may be contributed into a crowdloan. Should almost certainly be at
       * least ExistentialDeposit.
       **/
      minContribution: BalanceOf & AugmentedConst<ApiType>;
      /**
       * PalletId for the crowdloan pallet. An appropriate value could be ```PalletId(*b"py/cfund")```
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * Max number of storage keys to remove per extrinsic call.
       **/
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: BalanceOf & AugmentedConst<ApiType>;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16 bytes).
       **/
      announcementDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u16 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a pre-existing
       * storage value. Thus, when configuring `ProxyDepositFactor` one should take into account
       * `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: BalanceOf & AugmentedConst<ApiType>;
    };
    registrar: {
      dataDepositPerByte: BalanceOf & AugmentedConst<ApiType>;
      maxCodeSize: u32 & AugmentedConst<ApiType>;
      maxHeadSize: u32 & AugmentedConst<ApiType>;
      paraDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    slots: {
      leasePeriod: BlockNumber & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: BlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: BlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u8 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: RuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: Moment & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<WeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  }
}
