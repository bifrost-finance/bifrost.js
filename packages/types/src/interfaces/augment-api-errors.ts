// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    assets: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * This operation will cause balance to overflow
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Account still has active reserved
       **/
      StillHasActiveReserved: AugmentedError<ApiType>;
      /**
       * This operation will cause total issuance to overflow
       **/
      TotalIssuanceOverflow: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    brmlAssets: {
      /**
       * This operation will cause balance to overflow
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Destroy balance too much
       **/
      BurnTooMuch: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
    };
    minterReward: {
      /**
       * There's no price at all.
       **/
      FailToGetSwapPrice: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    voucher: {
      /**
       * Transferring too big balance
       **/
      TransferringTooBigBalance: AugmentedError<ApiType>;
    };
    vtokenMint: {
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Balance should be non-zero.
       **/
      BalanceZero: AugmentedError<ApiType>;
      /**
       * Empty vtoken pool, cause there's no price at all.
       **/
      EmptyVtokenPool: AugmentedError<ApiType>;
      /**
       * The amount of token you want to mint is bigger than the vtoken pool.
       **/
      NotEnoughVtokenPool: AugmentedError<ApiType>;
      /**
       * Token type not support.
       **/
      NotSupportTokenType: AugmentedError<ApiType>;
      /**
       * User's token still under staking while he want to redeem.
       **/
      UnderStaking: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Bad location.
       **/
      BadLocation: AugmentedError<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * Location given was invalid or unsupported.
       **/
      AccountIdBadLocation: AugmentedError<ApiType>;
      /**
       * Asset has not been created.
       **/
      AssetNotExists: AugmentedError<ApiType>;
      /**
       * Transaction block number is larger than the end block number.
       **/
      Deadline: AugmentedError<ApiType>;
      /**
       * Ensure correct parameter in cross chain add liquidity.
       **/
      DeniedAddLiquidityToParachain: AugmentedError<ApiType>;
      /**
       * Trading pair can't be created.
       **/
      DeniedCreatePair: AugmentedError<ApiType>;
      /**
       * The target chain is not in whitelist.
       **/
      DeniedReachTargetChain: AugmentedError<ApiType>;
      /**
       * Swap in local parachain by XCM message
       **/
      DeniedSwapInLocal: AugmentedError<ApiType>;
      /**
       * Transfer to self by XCM message
       **/
      DeniedTransferToSelf: AugmentedError<ApiType>;
      /**
       * Sold amount is more than exception.
       **/
      ExcessiveSoldAmount: AugmentedError<ApiType>;
      /**
       * XCM execution failed
       **/
      ExecutionFailed: AugmentedError<ApiType>;
      /**
       * Incorrect asset amount range.
       **/
      IncorrectAssetAmountRange: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity is not enough.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Trading pair does have enough asset.
       **/
      InsufficientPairReserve: AugmentedError<ApiType>;
      /**
       * Get target amount is less than exception.
       **/
      InsufficientTargetAmount: AugmentedError<ApiType>;
      /**
       * Can't find pair though trading path.
       **/
      InvalidPath: AugmentedError<ApiType>;
      /**
       * XCM can not reach target chain, probably because of the hrmp channel is closed.
       **/
      MaybeHrmpChannelIsClosed: AugmentedError<ApiType>;
      /**
       * AssetId is native currency
       **/
      NotParaCurrency: AugmentedError<ApiType>;
      /**
       * Overflow.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Trading pair already exists.
       **/
      PairAlreadyExists: AugmentedError<ApiType>;
      /**
       * Trading pair does not exist.
       **/
      PairNotExists: AugmentedError<ApiType>;
      /**
       * Transfer Error
       **/
      TransferError: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  }
}
