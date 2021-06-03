// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    auctions: {
      /**
       * Parachain is already registered.
       **/
      AlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Auction has already ended.
       **/
      AuctionEnded: AugmentedError<ApiType>;
      /**
       * This auction is already in progress.
       **/
      AuctionInProgress: AugmentedError<ApiType>;
      /**
       * Given code size is too large.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * Given initial head data is too large.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * The code must correspond to the hash.
       **/
      InvalidCode: AugmentedError<ApiType>;
      /**
       * The origin for this call must be the origin who registered the parachain.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * The lease period is in the past.
       **/
      LeasePeriodInPast: AugmentedError<ApiType>;
      /**
       * Not an auction.
       **/
      NotAuction: AugmentedError<ApiType>;
      /**
       * Not a current auction.
       **/
      NotCurrentAuction: AugmentedError<ApiType>;
      /**
       * The origin for this call must be a parachain.
       **/
      NotParaOrigin: AugmentedError<ApiType>;
      /**
       * The parachain ID is not on-boarding.
       **/
      ParaNotOnboarding: AugmentedError<ApiType>;
      /**
       * Para is not registered
       **/
      ParaNotRegistered: AugmentedError<ApiType>;
      /**
       * Deployment data has not been set for this parachain.
       **/
      UnsetDeployData: AugmentedError<ApiType>;
    };
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
    babe: {
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
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    bridgeRococoGrandpa: {
      /**
       * The pallet has already been initialized.
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * All pallet operations are halted.
       **/
      Halted: AugmentedError<ApiType>;
      /**
       * The authority set from the underlying header chain is invalid.
       **/
      InvalidAuthoritySet: AugmentedError<ApiType>;
      /**
       * The given justification is invalid for the given header.
       **/
      InvalidJustification: AugmentedError<ApiType>;
      /**
       * The pallet is not yet initialized.
       **/
      NotInitialized: AugmentedError<ApiType>;
      /**
       * The header being imported is older than the best finalized header known to the pallet.
       **/
      OldHeader: AugmentedError<ApiType>;
      /**
       * The storage proof doesn't contains storage root. So it is invalid for given header.
       **/
      StorageRootMismatch: AugmentedError<ApiType>;
      /**
       * There are too many requests for the current window to handle.
       **/
      TooManyRequests: AugmentedError<ApiType>;
      /**
       * The header is unknown to the pallet.
       **/
      UnknownHeader: AugmentedError<ApiType>;
      /**
       * The scheduled authority set change found in the header is unsupported by the pallet.
       * 
       * This is the case for non-standard (e.g forced) authority set changes.
       **/
      UnsupportedScheduledChange: AugmentedError<ApiType>;
    };
    bridgeWococoGrandpa: {
      /**
       * The pallet has already been initialized.
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * All pallet operations are halted.
       **/
      Halted: AugmentedError<ApiType>;
      /**
       * The authority set from the underlying header chain is invalid.
       **/
      InvalidAuthoritySet: AugmentedError<ApiType>;
      /**
       * The given justification is invalid for the given header.
       **/
      InvalidJustification: AugmentedError<ApiType>;
      /**
       * The pallet is not yet initialized.
       **/
      NotInitialized: AugmentedError<ApiType>;
      /**
       * The header being imported is older than the best finalized header known to the pallet.
       **/
      OldHeader: AugmentedError<ApiType>;
      /**
       * The storage proof doesn't contains storage root. So it is invalid for given header.
       **/
      StorageRootMismatch: AugmentedError<ApiType>;
      /**
       * There are too many requests for the current window to handle.
       **/
      TooManyRequests: AugmentedError<ApiType>;
      /**
       * The header is unknown to the pallet.
       **/
      UnknownHeader: AugmentedError<ApiType>;
      /**
       * The scheduled authority set change found in the header is unsupported by the pallet.
       * 
       * This is the case for non-standard (e.g forced) authority set changes.
       **/
      UnsupportedScheduledChange: AugmentedError<ApiType>;
    };
    collective: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    crowdloan: {
      /**
       * The fund is already in NewRaise
       **/
      AlreadyInNewRaise: AugmentedError<ApiType>;
      /**
       * This parachain's bid or lease is still active and withdraw cannot yet begin.
       **/
      BidOrLeaseActive: AugmentedError<ApiType>;
      /**
       * The campaign ends before the current block number. The end must be in the future.
       **/
      CannotEndInPast: AugmentedError<ApiType>;
      /**
       * Contributions exceed maximum amount.
       **/
      CapExceeded: AugmentedError<ApiType>;
      /**
       * The contribution period has already ended.
       **/
      ContributionPeriodOver: AugmentedError<ApiType>;
      /**
       * The contribution was below the minimum, `MinContribution`.
       **/
      ContributionTooSmall: AugmentedError<ApiType>;
      /**
       * The end date for this crowdloan is not sensible.
       **/
      EndTooFarInFuture: AugmentedError<ApiType>;
      /**
       * The current lease period is more than the first lease period.
       **/
      FirstPeriodInPast: AugmentedError<ApiType>;
      /**
       * The first lease period needs to at least be less than 3 `max_value`.
       **/
      FirstPeriodTooFarInFuture: AugmentedError<ApiType>;
      /**
       * The crowdloan has not yet ended.
       **/
      FundNotEnded: AugmentedError<ApiType>;
      /**
       * Funds have not yet been returned.
       **/
      FundsNotReturned: AugmentedError<ApiType>;
      /**
       * This crowdloan has an active parachain and cannot be dissolved.
       **/
      HasActiveParachain: AugmentedError<ApiType>;
      /**
       * The origin of this call is invalid.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Invalid fund index.
       **/
      InvalidParaId: AugmentedError<ApiType>;
      /**
       * Invalid signature.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Last lease period must be greater than first lease period.
       **/
      LastPeriodBeforeFirstPeriod: AugmentedError<ApiType>;
      /**
       * The last lease period cannot be more then 3 periods after the first period.
       **/
      LastPeriodTooFarInFuture: AugmentedError<ApiType>;
      /**
       * This parachain lease is still active and retirement cannot yet begin.
       **/
      LeaseActive: AugmentedError<ApiType>;
      /**
       * The provided memo is too large.
       **/
      MemoTooLarge: AugmentedError<ApiType>;
      /**
       * There are no contributions stored in this crowdloan.
       **/
      NoContributions: AugmentedError<ApiType>;
      /**
       * This crowdloan does not correspond to a parachain.
       **/
      NotParachain: AugmentedError<ApiType>;
      /**
       * The crowdloan is not ready to dissolve. Potentially still has a slot or in retirement period.
       **/
      NotReadyToDissolve: AugmentedError<ApiType>;
      /**
       * There was an overflow.
       **/
      Overflow: AugmentedError<ApiType>;
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
       * The validation code hash of the candidate is not valid.
       **/
      InvalidValidationCodeHash: AugmentedError<ApiType>;
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
    indices: {
      /**
       * The index was not available.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The index was not already assigned.
       **/
      NotAssigned: AugmentedError<ApiType>;
      /**
       * The index is assigned to another account.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The source and destination accounts are identical.
       **/
      NotTransfer: AugmentedError<ApiType>;
      /**
       * The index is permanent and may not be freed/changed.
       **/
      Permanent: AugmentedError<ApiType>;
    };
    membership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
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
    parasInherent: {
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
    parasSudoWrapper: {
      /**
       * Cannot downgrade parachain.
       **/
      CannotDowngrade: AugmentedError<ApiType>;
      /**
       * Cannot upgrade parathread.
       **/
      CannotUpgrade: AugmentedError<ApiType>;
      /**
       * Could not schedule para cleanup.
       **/
      CouldntCleanup: AugmentedError<ApiType>;
      /**
       * A DMP message couldn't be sent because it exceeds the maximum size allowed for a downward
       * message.
       **/
      ExceedsMaxMessageSize: AugmentedError<ApiType>;
      /**
       * Not a parachain.
       **/
      NotParachain: AugmentedError<ApiType>;
      /**
       * Not a parathread.
       **/
      NotParathread: AugmentedError<ApiType>;
      /**
       * The specified parachain or parathread is already registered.
       **/
      ParaAlreadyExists: AugmentedError<ApiType>;
      /**
       * The specified parachain or parathread is not registered.
       **/
      ParaDoesntExist: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
    };
    registrar: {
      /**
       * The ID is already registered.
       **/
      AlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Cannot deregister para
       **/
      CannotDeregister: AugmentedError<ApiType>;
      /**
       * Cannot schedule downgrade of parachain to parathread
       **/
      CannotDowngrade: AugmentedError<ApiType>;
      /**
       * Cannot schedule upgrade of parathread to parachain
       **/
      CannotUpgrade: AugmentedError<ApiType>;
      /**
       * Invalid para code size.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * Invalid para head data size.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * The id you are trying to register is reserved for system parachains.
       **/
      InvalidParaId: AugmentedError<ApiType>;
      /**
       * The caller is not the owner of this Id.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * Para is not a Parachain.
       **/
      NotParachain: AugmentedError<ApiType>;
      /**
       * Para is not a Parathread.
       **/
      NotParathread: AugmentedError<ApiType>;
      /**
       * The ID is not registered.
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * The ID given for registration has not been reserved.
       **/
      NotReserved: AugmentedError<ApiType>;
      /**
       * Para is locked from manipulation by the manager. Must use parachain or relay chain governance.
       **/
      ParaLocked: AugmentedError<ApiType>;
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
    slots: {
      /**
       * There was an error with the lease.
       **/
      LeaseError: AugmentedError<ApiType>;
      /**
       * The parachain ID is not onboarding.
       **/
      ParaNotOnboarding: AugmentedError<ApiType>;
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
    xcmPallet: {
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      SendFailure: AugmentedError<ApiType>;
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  }
}
