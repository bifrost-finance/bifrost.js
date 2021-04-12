// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, u128, u32 } from '@polkadot/types';
import type { AmountOf, CurrencyId, XCurrencyId } from '@bifrost-finance/types/interfaces/assets';
import type { CurrencyIdOf } from '@bifrost-finance/types/interfaces/vtokenMint';
import type { TokenBalance } from '@bifrost-finance/types/interfaces/zenlinkProtocol';
import type { TAssetBalance } from '@polkadot/types/interfaces/assets';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { NetworkId, ParaId, RelayChainBlockNumber, XcmError } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    assets: {
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[account,
       * currency_id, amount\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, CurrencyId, TAssetBalance]>;
      /**
       * Token transfer success. \[currency_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyId, AccountId, AccountId, TAssetBalance]>;
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
    brmlAssets: {
      /**
       * Token burn success, \[currency_id, dest, amount\]
       **/
      Burned: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance]>;
      /**
       * Token issue success, \[currency_id, dest, amount\]
       **/
      Issued: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance]>;
    };
    chargeTransactionFee: {
      FlexibleFeeExchanged: AugmentedEvent<ApiType, [CurrencyId, u128]>;
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
    parachainSystem: {
      ValidationFunctionApplied: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
      ValidationFunctionStored: AugmentedEvent<ApiType, [RelayChainBlockNumber]>;
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
    voucher: {
      DestroyedVoucher: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A event indicate user receives transaction.
       **/
      IssuedVoucher: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    vtokenMint: {
      Minted: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance]>;
      RedeemedPointsSuccess: AugmentedEvent<ApiType, []>;
      RedeemStarted: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance, BlockNumber]>;
      UpdateRatePerBlockSuccess: AugmentedEvent<ApiType, []>;
      UpdateVtokenPoolSuccess: AugmentedEvent<ApiType, []>;
    };
    xcmHandler: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [Hash, XcmError]>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      HrmpMessageSent: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [Hash]>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [Hash]>;
    };
    xTokens: {
      /**
       * Transferred to parachain. \[x_currency_id, src, para_id, dest,
       * dest_network, amount\]
       **/
      TransferredToParachain: AugmentedEvent<ApiType, [XCurrencyId, AccountId, ParaId, AccountId, NetworkId, Balance]>;
      /**
       * Transferred to relay chain. \[src, dest, amount\]
       **/
      TransferredToRelayChain: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Transfer to parachain failed. \[x_currency_id, src, para_id, dest,
       * dest_network, amount, error\]
       **/
      TransferToParachainFailed: AugmentedEvent<ApiType, [XCurrencyId, AccountId, ParaId, AccountId, NetworkId, Balance, XcmError]>;
      /**
       * Transfer to relay chain failed. \[src, dest, amount, error\]
       **/
      TransferToRelayChainFailed: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, XcmError]>;
    };
    zenlinkProtocol: {
      /**
       * Some assets were burned. \[asset_id, owner, amount\]
       **/
      Burned: AugmentedEvent<ApiType, [AssetId, AccountId, TokenBalance]>;
      /**
       * An HRMP message was sent to a sibling parachainchain. \[xcm_hash\]
       **/
      HrmpMessageSent: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Add liquidity. \[owner, asset_id, asset_id\]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId]>;
      /**
       * Remove liquidity. \[owner, receiver, asset_id, asset_id, amount\]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId, AccountId, AssetId, AssetId, TokenBalance]>;
      /**
       * Some assets were minted. \[asset_id, owner, amount\]
       **/
      Minted: AugmentedEvent<ApiType, [AssetId, AccountId, TokenBalance]>;
      /**
       * Swap
       * Create a trading pair. \[creator, asset_id, asset_id\]
       **/
      PairCreated: AugmentedEvent<ApiType, [AccountId, AssetId, AssetId]>;
      /**
       * Transact in trading \[owner, receiver, swap_path\]
       **/
      TokenSwap: AugmentedEvent<ApiType, [AccountId, AccountId, Vec<AssetId>]>;
      /**
       * Assets
       * Some assets were transferred. \[asset_id, owner, target, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [AssetId, AccountId, AccountId, TokenBalance]>;
      /**
       * Xtransfer
       * Transferred to parachain. \[asset_id, src, para_id, dest, amount\]
       **/
      TransferredToParachain: AugmentedEvent<ApiType, [AssetId, AccountId, ParaId, AccountId, TokenBalance]>;
      /**
       * An upward message was sent to the relay chain. \[xcm_hash\]
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Bad XCM format used. \[xcm_hash\]
       **/
      XcmBadFormat: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Bad XCM version used. \[xcm_hash\]
       **/
      XcmBadVersion: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Some XCM failed. \[xcm_hash, xcm_error\]
       **/
      XcmExecuteFail: AugmentedEvent<ApiType, [Hash, XcmError]>;
      /**
       * Some XCM was executed ok. \[xcm_hash\]
       **/
      XcmExecuteSuccess: AugmentedEvent<ApiType, [Hash]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
