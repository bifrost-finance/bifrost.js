// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u32, u8 } from '@polkadot/types';
import type { CurrencyId, CurrencyIdOf } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { BlockNumberFor } from '@bifrost-finance/types/interfaces/chargeTransactionFee';
import type { SystemPalletId } from '@bifrost-finance/types/interfaces/minterReward';
import type { LeasePeriod } from '@polkadot/types/interfaces/parachains';
import type { Balance, BalanceOf, BlockNumber, Moment, PalletId, Percent, RuntimeDbWeight } from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { BlockLength, BlockWeights } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & AugmentedConst<ApiType>;
    };
    bancor: {
      interventionPercentage: BalanceOf & AugmentedConst<ApiType>;
    };
    chargeTransactionFee: {
      nativeCurrencyId: CurrencyId & AugmentedConst<ApiType>;
    };
    currencies: {
      getNativeCurrencyId: CurrencyIdOf & AugmentedConst<ApiType>;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: BlockNumber & AugmentedConst<ApiType>;
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
      minimumDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: BlockNumber & AugmentedConst<ApiType>;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: BalanceOf & AugmentedConst<ApiType>;
    };
    minterReward: {
      /**
       * Allow maximum blocks can be extended.
       **/
      maximumExtendedPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Reward period, normally it's 50 blocks after.
       **/
      rewardPeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * Identifier for adjusting weight
       **/
      systemPalletId: SystemPalletId & AugmentedConst<ApiType>;
      /**
       * Two year as a round, 600 * 24 * 365 * 2
       **/
      twoYear: BlockNumberFor & AugmentedConst<ApiType>;
    };
    salp: {
      /**
       * The number of blocks over which a single period lasts.
       **/
      leasePeriod: BlockNumberFor & AugmentedConst<ApiType>;
      /**
       * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
       * at least ExistentialDeposit.
       **/
      minContribution: BalanceOf & AugmentedConst<ApiType>;
      /**
       * ModuleID for the crowdloan module. An appropriate value could be
       * ```ModuleId(*b"py/cfund")```
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * The time interval from 1:1 redeem-pool to bancor-pool to release.
       **/
      releaseCycle: LeasePeriod & AugmentedConst<ApiType>;
      /**
       * The release ratio from the 1:1 redeem-pool to the bancor-pool per cycle.
       * 
       * **NOTE: THE RELEASE RATIO MUST BE IN [0, 1].**
       **/
      releaseRatio: Percent & AugmentedConst<ApiType>;
      relyChainToken: CurrencyId & AugmentedConst<ApiType>;
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
      slotLength: LeasePeriod & AugmentedConst<ApiType>;
      vsBondValidPeriod: BlockNumberFor & AugmentedConst<ApiType>;
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
    vsBondAuction: {
      /**
       * The currency type that buyer to pay
       **/
      invoicingCurrency: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The amount of orders in-trade that user can hold
       **/
      maximumOrderInTrade: u32 & AugmentedConst<ApiType>;
      /**
       * The sale quantity needs to be greater than `MinimumSupply` to create an order
       **/
      minimumSupply: BalanceOf & AugmentedConst<ApiType>;
    };
    vtokenMint: {
      /**
       * Identifier for the staking lock.
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
  }
}
