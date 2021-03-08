// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    authorship: {
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
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
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    hrmp: {
      /**
       * The channel is already confirmed.
       **/
      AcceptHrmpChannelAlreadyConfirmed: AugmentedError<ApiType>;
      /**
       * The channel from the sender to the origin doesn't exist.
       **/
      AcceptHrmpChannelDoesntExist: AugmentedError<ApiType>;
      /**
       * The recipient already has the maximum number of allowed inbound channels.
       **/
      AcceptHrmpChannelLimitExceeded: AugmentedError<ApiType>;
      /**
       * The channel close request is already requested.
       **/
      CloseHrmpChannelAlreadyUnderway: AugmentedError<ApiType>;
      /**
       * The channel to be closed doesn't exist.
       **/
      CloseHrmpChannelDoesntExist: AugmentedError<ApiType>;
      /**
       * The origin tries to close a channel where it is neither the sender nor the recipient.
       **/
      CloseHrmpChannelUnauthorized: AugmentedError<ApiType>;
      /**
       * The channel already exists
       **/
      OpenHrmpChannelAlreadyExists: AugmentedError<ApiType>;
      /**
       * There is already a request to open the same channel.
       **/
      OpenHrmpChannelAlreadyRequested: AugmentedError<ApiType>;
      /**
       * The requested capacity exceeds the global limit.
       **/
      OpenHrmpChannelCapacityExceedsLimit: AugmentedError<ApiType>;
      /**
       * The recipient is not a valid para.
       **/
      OpenHrmpChannelInvalidRecipient: AugmentedError<ApiType>;
      /**
       * The sender already has the maximum number of allowed outbound channels.
       **/
      OpenHrmpChannelLimitExceeded: AugmentedError<ApiType>;
      /**
       * The open request requested the message size that exceeds the global limit.
       **/
      OpenHrmpChannelMessageSizeExceedsLimit: AugmentedError<ApiType>;
      /**
       * The sender tried to open a channel to themselves.
       **/
      OpenHrmpChannelToSelf: AugmentedError<ApiType>;
      /**
       * The requested capacity is zero.
       **/
      OpenHrmpChannelZeroCapacity: AugmentedError<ApiType>;
      /**
       * The requested maximum message size is 0.
       **/
      OpenHrmpChannelZeroMessageSize: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
    };
    inclusion: {
      /**
       * Multiple bitfields submitted by same validator or validators out of order by index.
       **/
      BitfieldDuplicateOrUnordered: AugmentedError<ApiType>;
      /**
       * Candidate not in parent context.
       **/
      CandidateNotInParentContext: AugmentedError<ApiType>;
      /**
       * Candidate scheduled despite pending candidate already existing for the para.
       **/
      CandidateScheduledBeforeParaFree: AugmentedError<ApiType>;
      /**
       * Head data exceeds the configured maximum.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * The candidate didn't follow the rules of HRMP watermark advancement.
       **/
      HrmpWatermarkMishandling: AugmentedError<ApiType>;
      /**
       * The downward message queue is not processed correctly.
       **/
      IncorrectDownwardMessageHandling: AugmentedError<ApiType>;
      /**
       * Insufficient (non-majority) backing.
       **/
      InsufficientBacking: AugmentedError<ApiType>;
      /**
       * Internal error only returned when compiled with debug assertions.
       **/
      InternalError: AugmentedError<ApiType>;
      /**
       * Invalid (bad signature, unknown validator, etc.) backing.
       **/
      InvalidBacking: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      InvalidBitfieldSignature: AugmentedError<ApiType>;
      /**
       * Invalid group index in core assignment.
       **/
      InvalidGroupIndex: AugmentedError<ApiType>;
      /**
       * The HRMP messages sent by the candidate is not valid.
       **/
      InvalidOutboundHrmp: AugmentedError<ApiType>;
      /**
       * At least one upward message sent does not pass the acceptance criteria.
       **/
      InvalidUpwardMessages: AugmentedError<ApiType>;
      /**
       * Output code is too large
       **/
      NewCodeTooLarge: AugmentedError<ApiType>;
      /**
       * Collator did not sign PoV.
       **/
      NotCollatorSigned: AugmentedError<ApiType>;
      /**
       * Code upgrade prematurely.
       **/
      PrematureCodeUpgrade: AugmentedError<ApiType>;
      /**
       * Scheduled cores out of order.
       **/
      ScheduledOutOfOrder: AugmentedError<ApiType>;
      /**
       * The bitfield contains a bit relating to an unassigned availability core.
       **/
      UnoccupiedBitInBitfield: AugmentedError<ApiType>;
      /**
       * Candidate submitted but para not scheduled.
       **/
      UnscheduledCandidate: AugmentedError<ApiType>;
      /**
       * The validation data hash does not match expected.
       **/
      ValidationDataHashMismatch: AugmentedError<ApiType>;
      /**
       * Validator index out of bounds.
       **/
      ValidatorIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Availability bitfield has unexpected size.
       **/
      WrongBitfieldSize: AugmentedError<ApiType>;
      /**
       * Candidate included with the wrong collator.
       **/
      WrongCollator: AugmentedError<ApiType>;
    };
    inclusionInherent: {
      /**
       * The hash of the submitted parent header doesn't correspond to the saved block hash of
       * the parent.
       **/
      InvalidParentHeader: AugmentedError<ApiType>;
      /**
       * Inclusion inherent called more than once per block.
       **/
      TooManyInclusionInherents: AugmentedError<ApiType>;
    };
    parachainsConfiguration: {
      /**
       * The new value for a configuration parameter is invalid.
       **/
      InvalidNewValue: AugmentedError<ApiType>;
    };
    paras: {
      /**
       * Para cannot be downgraded to a parathread.
       **/
      CannotDowngrade: AugmentedError<ApiType>;
      /**
       * Para cannot be offboarded at this time.
       **/
      CannotOffboard: AugmentedError<ApiType>;
      /**
       * Para cannot be onboarded because it is already tracked by our system.
       **/
      CannotOnboard: AugmentedError<ApiType>;
      /**
       * Para cannot be upgraded to a parachain.
       **/
      CannotUpgrade: AugmentedError<ApiType>;
      /**
       * Para is not registered in our system.
       **/
      NotRegistered: AugmentedError<ApiType>;
    };
    parasSudoWrapper: {
      /**
       * Could not schedule para cleanup.
       **/
      CouldntCleanup: AugmentedError<ApiType>;
      /**
       * The validation code provided doesn't start with the Wasm file magic string.
       **/
      DefinitelyNotWasm: AugmentedError<ApiType>;
      /**
       * A DMP message couldn't be sent because it exceeds the maximum size allowed for a downward
       * message.
       **/
      ExceedsMaxMessageSize: AugmentedError<ApiType>;
      /**
       * The specified parachain or parathread is already registered.
       **/
      ParaAlreadyExists: AugmentedError<ApiType>;
      /**
       * The specified parachain or parathread is not registered.
       **/
      ParaDoesntExist: AugmentedError<ApiType>;
    };
    proposeParachain: {
      /**
       * Registration requires at least one validator.
       **/
      AtLeastOneValidatorRequired: AugmentedError<ApiType>;
      /**
       * Couldn't schedule parachain cleanup.
       **/
      CouldntCleanup: AugmentedError<ApiType>;
      /**
       * The given WASM blob is definitley not valid.
       **/
      DefinitelyNotWasm: AugmentedError<ApiType>;
      /**
       * The name of the parachain is too long.
       **/
      NameTooLong: AugmentedError<ApiType>;
      /**
       * Not authorized to do a certain operation.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * Parachain is already approved for registration.
       **/
      ParachainAlreadyApproved: AugmentedError<ApiType>;
      /**
       * Parachain is already scheduled for registration.
       **/
      ParachainAlreadyScheduled: AugmentedError<ApiType>;
      /**
       * The requested parachain id is already proposed for another parachain.
       **/
      ParachainIdAlreadyProposed: AugmentedError<ApiType>;
      /**
       * The requested parachain id is already registered.
       **/
      ParachainIdAlreadyTaken: AugmentedError<ApiType>;
      /**
       * No information about the registered parachain found.
       **/
      ParachainInfoNotFound: AugmentedError<ApiType>;
      /**
       * Could not find the parachain proposal.
       **/
      ProposalNotFound: AugmentedError<ApiType>;
      /**
       * A validator is already registered in the active validator set.
       **/
      ValidatorAlreadyRegistered: AugmentedError<ApiType>;
    };
    registrar: {
      /**
       * Cannot deregister para
       **/
      CannotDeregister: AugmentedError<ApiType>;
      /**
       * Invalid para code size.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * The validation code provided doesn't start with the Wasm file magic string.
       **/
      DefinitelyNotWasm: AugmentedError<ApiType>;
      /**
       * Invalid para head data size.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * Invalid parachain ID.
       **/
      InvalidChainId: AugmentedError<ApiType>;
      /**
       * Invalid parathread ID.
       **/
      InvalidThreadId: AugmentedError<ApiType>;
      /**
       * Parachain already exists.
       **/
      ParaAlreadyExists: AugmentedError<ApiType>;
      /**
       * Parathreads registration is disabled.
       **/
      ParathreadsRegistrationDisabled: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
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
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  }
}
