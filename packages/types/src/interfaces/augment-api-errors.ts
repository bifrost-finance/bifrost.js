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
    bounties: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
    };
    claims: {
      /**
       * Invalid Ethereum signature.
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * A needed statement was not included.
       **/
      InvalidStatement: AugmentedError<ApiType>;
      /**
       * There's not enough in the pot to pay out some unvested amount. Generally implies a logic
       * error.
       **/
      PotUnderflow: AugmentedError<ApiType>;
      /**
       * Account ID sending tx has no claim.
       **/
      SenderHasNoClaim: AugmentedError<ApiType>;
      /**
       * Ethereum address has no claim.
       **/
      SignerHasNoClaim: AugmentedError<ApiType>;
      /**
       * The account already has a vested balance.
       **/
      VestedBalanceExists: AugmentedError<ApiType>;
    };
    council: {
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
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Unknown index
       **/
      BadIndex: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      InvalidWitness: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * Not delegated
       **/
      NotDelegated: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      NotLocked: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * OCW submitted solution for wrong round
       **/
      OcwCallWrongEra: AugmentedError<ApiType>;
      /**
       * Submission was too early.
       **/
      PreDispatchEarlySubmission: AugmentedError<ApiType>;
      /**
       * Submission was too weak, score-wise.
       **/
      PreDispatchWeakSubmission: AugmentedError<ApiType>;
      /**
       * Wrong number of winners presented.
       **/
      PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
    };
    gilt: {
      /**
       * The amount of the bid is less than the minimum allowed.
       **/
      AmountTooSmall: AugmentedError<ApiType>;
      /**
       * The queue for the bid's duration is full and the amount bid is too low to get in through
       * replacing an existing bid.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * The duration is the bid is greater than the number of queues.
       **/
      DurationTooBig: AugmentedError<ApiType>;
      /**
       * The duration of the bid is less than one.
       **/
      DurationTooSmall: AugmentedError<ApiType>;
      /**
       * Gilt not yet at expiry date.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * The given bid for retraction is not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Not the owner of the gilt.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * Gilt index is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
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
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
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
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
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
    parasHrmp: {
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
    parasInclusion: {
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
    phragmenElection: {
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
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
    recovery: {
      /**
       * This account is already set up for recovery
       **/
      AlreadyProxy: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyRecoverable: AugmentedError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      AlreadyStarted: AugmentedError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      AlreadyVouched: AugmentedError<ApiType>;
      /**
       * Some internal state is broken.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      DelayPeriod: AugmentedError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      MaxFriends: AugmentedError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      NotEnoughFriends: AugmentedError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      NotFriend: AugmentedError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      NotRecoverable: AugmentedError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      NotSorted: AugmentedError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      NotStarted: AugmentedError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      StillActive: AugmentedError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      Threshold: AugmentedError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      ZeroThreshold: AugmentedError<ApiType>;
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
    society: {
      /**
       * User has already made a bid.
       **/
      AlreadyBid: AugmentedError<ApiType>;
      /**
       * User is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      BadPosition: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouching: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Can not bond with value less than minimum balance.
       **/
      InsufficientValue: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
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
    technicalCommittee: {
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
    technicalMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
    };
    tips: {
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
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
