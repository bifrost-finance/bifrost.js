import '@polkadot/types/lookup';
import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';
declare module '@polkadot/types/lookup' {
    /** @name FrameSystemAccountInfo (3) */
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u32;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: PalletBalancesAccountData;
    }
    /** @name PalletBalancesAccountData (5) */
    interface PalletBalancesAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly miscFrozen: u128;
        readonly feeFrozen: u128;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
    interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
        readonly normal: SpWeightsWeightV2Weight;
        readonly operational: SpWeightsWeightV2Weight;
        readonly mandatory: SpWeightsWeightV2Weight;
    }
    /** @name SpWeightsWeightV2Weight (8) */
    interface SpWeightsWeightV2Weight extends Struct {
        readonly refTime: Compact<u64>;
        readonly proofSize: Compact<u64>;
    }
    /** @name SpRuntimeDigest (13) */
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }
    /** @name SpRuntimeDigestDigestItem (15) */
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
    }
    /** @name FrameSystemEventRecord (18) */
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }
    /** @name FrameSystemEvent (20) */
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: {
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: {
            readonly dispatchError: SpRuntimeDispatchError;
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemarked: boolean;
        readonly asRemarked: {
            readonly sender: AccountId32;
            readonly hash_: H256;
        } & Struct;
        readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
    }
    /** @name FrameSupportDispatchDispatchInfo (21) */
    interface FrameSupportDispatchDispatchInfo extends Struct {
        readonly weight: SpWeightsWeightV2Weight;
        readonly class: FrameSupportDispatchDispatchClass;
        readonly paysFee: FrameSupportDispatchPays;
    }
    /** @name FrameSupportDispatchDispatchClass (22) */
    interface FrameSupportDispatchDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: 'Normal' | 'Operational' | 'Mandatory';
    }
    /** @name FrameSupportDispatchPays (23) */
    interface FrameSupportDispatchPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: 'Yes' | 'No';
    }
    /** @name SpRuntimeDispatchError (24) */
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: SpRuntimeModuleError;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isTooManyConsumers: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpArithmeticArithmeticError;
        readonly isTransactional: boolean;
        readonly asTransactional: SpRuntimeTransactionalError;
        readonly isExhausted: boolean;
        readonly isCorruption: boolean;
        readonly isUnavailable: boolean;
        readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
    }
    /** @name SpRuntimeModuleError (25) */
    interface SpRuntimeModuleError extends Struct {
        readonly index: u8;
        readonly error: U8aFixed;
    }
    /** @name SpRuntimeTokenError (26) */
    interface SpRuntimeTokenError extends Enum {
        readonly isNoFunds: boolean;
        readonly isWouldDie: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
    }
    /** @name SpArithmeticArithmeticError (27) */
    interface SpArithmeticArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
    }
    /** @name SpRuntimeTransactionalError (28) */
    interface SpRuntimeTransactionalError extends Enum {
        readonly isLimitReached: boolean;
        readonly isNoLayer: boolean;
        readonly type: 'LimitReached' | 'NoLayer';
    }
    /** @name PalletIndicesEvent (29) */
    interface PalletIndicesEvent extends Enum {
        readonly isIndexAssigned: boolean;
        readonly asIndexAssigned: {
            readonly who: AccountId32;
            readonly index: u32;
        } & Struct;
        readonly isIndexFreed: boolean;
        readonly asIndexFreed: {
            readonly index: u32;
        } & Struct;
        readonly isIndexFrozen: boolean;
        readonly asIndexFrozen: {
            readonly index: u32;
            readonly who: AccountId32;
        } & Struct;
        readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
    }
    /** @name CumulusPalletParachainSystemEvent (30) */
    interface CumulusPalletParachainSystemEvent extends Enum {
        readonly isValidationFunctionStored: boolean;
        readonly isValidationFunctionApplied: boolean;
        readonly asValidationFunctionApplied: {
            readonly relayChainBlockNum: u32;
        } & Struct;
        readonly isValidationFunctionDiscarded: boolean;
        readonly isUpgradeAuthorized: boolean;
        readonly asUpgradeAuthorized: {
            readonly codeHash: H256;
        } & Struct;
        readonly isDownwardMessagesReceived: boolean;
        readonly asDownwardMessagesReceived: {
            readonly count: u32;
        } & Struct;
        readonly isDownwardMessagesProcessed: boolean;
        readonly asDownwardMessagesProcessed: {
            readonly weightUsed: SpWeightsWeightV2Weight;
            readonly dmqHead: H256;
        } & Struct;
        readonly isUpwardMessageSent: boolean;
        readonly asUpwardMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
    }
    /** @name PalletBalancesEvent (32) */
    interface PalletBalancesEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly account: AccountId32;
            readonly freeBalance: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly account: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
    }
    /** @name FrameSupportTokensMiscBalanceStatus (33) */
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: 'Free' | 'Reserved';
    }
    /** @name PalletTransactionPaymentEvent (34) */
    interface PalletTransactionPaymentEvent extends Enum {
        readonly isTransactionFeePaid: boolean;
        readonly asTransactionFeePaid: {
            readonly who: AccountId32;
            readonly actualFee: u128;
            readonly tip: u128;
        } & Struct;
        readonly type: 'TransactionFeePaid';
    }
    /** @name PalletSessionEvent (35) */
    interface PalletSessionEvent extends Enum {
        readonly isNewSession: boolean;
        readonly asNewSession: {
            readonly sessionIndex: u32;
        } & Struct;
        readonly type: 'NewSession';
    }
    /** @name ParachainStakingEvent (36) */
    interface ParachainStakingEvent extends Enum {
        readonly isNewRound: boolean;
        readonly asNewRound: {
            readonly startingBlock: u32;
            readonly round: u32;
            readonly selectedCollatorsNumber: u32;
            readonly totalBalance: u128;
        } & Struct;
        readonly isJoinedCollatorCandidates: boolean;
        readonly asJoinedCollatorCandidates: {
            readonly account: AccountId32;
            readonly amountLocked: u128;
            readonly newTotalAmtLocked: u128;
        } & Struct;
        readonly isCollatorChosen: boolean;
        readonly asCollatorChosen: {
            readonly round: u32;
            readonly collatorAccount: AccountId32;
            readonly totalExposedAmount: u128;
        } & Struct;
        readonly isCandidateBondLessRequested: boolean;
        readonly asCandidateBondLessRequested: {
            readonly candidate: AccountId32;
            readonly amountToDecrease: u128;
            readonly executeRound: u32;
        } & Struct;
        readonly isCandidateBondedMore: boolean;
        readonly asCandidateBondedMore: {
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly newTotalBond: u128;
        } & Struct;
        readonly isCandidateBondedLess: boolean;
        readonly asCandidateBondedLess: {
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly newBond: u128;
        } & Struct;
        readonly isCandidateWentOffline: boolean;
        readonly asCandidateWentOffline: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCandidateBackOnline: boolean;
        readonly asCandidateBackOnline: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCandidateScheduledExit: boolean;
        readonly asCandidateScheduledExit: {
            readonly exitAllowedRound: u32;
            readonly candidate: AccountId32;
            readonly scheduledExit: u32;
        } & Struct;
        readonly isCancelledCandidateExit: boolean;
        readonly asCancelledCandidateExit: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCancelledCandidateBondLess: boolean;
        readonly asCancelledCandidateBondLess: {
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly executeRound: u32;
        } & Struct;
        readonly isCandidateLeft: boolean;
        readonly asCandidateLeft: {
            readonly exCandidate: AccountId32;
            readonly unlockedAmount: u128;
            readonly newTotalAmtLocked: u128;
        } & Struct;
        readonly isDelegationDecreaseScheduled: boolean;
        readonly asDelegationDecreaseScheduled: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly amountToDecrease: u128;
            readonly executeRound: u32;
        } & Struct;
        readonly isDelegationIncreased: boolean;
        readonly asDelegationIncreased: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly inTop: bool;
        } & Struct;
        readonly isDelegationDecreased: boolean;
        readonly asDelegationDecreased: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly inTop: bool;
        } & Struct;
        readonly isDelegatorExitScheduled: boolean;
        readonly asDelegatorExitScheduled: {
            readonly round: u32;
            readonly delegator: AccountId32;
            readonly scheduledExit: u32;
        } & Struct;
        readonly isDelegationRevocationScheduled: boolean;
        readonly asDelegationRevocationScheduled: {
            readonly round: u32;
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly scheduledExit: u32;
        } & Struct;
        readonly isDelegatorLeft: boolean;
        readonly asDelegatorLeft: {
            readonly delegator: AccountId32;
            readonly unstakedAmount: u128;
        } & Struct;
        readonly isDelegationRevoked: boolean;
        readonly asDelegationRevoked: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly unstakedAmount: u128;
        } & Struct;
        readonly isDelegationKicked: boolean;
        readonly asDelegationKicked: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly unstakedAmount: u128;
        } & Struct;
        readonly isDelegatorExitCancelled: boolean;
        readonly asDelegatorExitCancelled: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isCancelledDelegationRequest: boolean;
        readonly asCancelledDelegationRequest: {
            readonly delegator: AccountId32;
            readonly cancelledRequest: ParachainStakingDelegationRequestsCancelledScheduledRequest;
            readonly collator: AccountId32;
        } & Struct;
        readonly isDelegation: boolean;
        readonly asDelegation: {
            readonly delegator: AccountId32;
            readonly lockedAmount: u128;
            readonly candidate: AccountId32;
            readonly delegatorPosition: ParachainStakingDelegatorAdded;
        } & Struct;
        readonly isDelegatorLeftCandidate: boolean;
        readonly asDelegatorLeftCandidate: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
            readonly unstakedAmount: u128;
            readonly totalCandidateStaked: u128;
        } & Struct;
        readonly isRewarded: boolean;
        readonly asRewarded: {
            readonly account: AccountId32;
            readonly rewards: u128;
        } & Struct;
        readonly isReservedForParachainBond: boolean;
        readonly asReservedForParachainBond: {
            readonly account: AccountId32;
            readonly value: u128;
        } & Struct;
        readonly isParachainBondAccountSet: boolean;
        readonly asParachainBondAccountSet: {
            readonly old: AccountId32;
            readonly new_: AccountId32;
        } & Struct;
        readonly isParachainBondReservePercentSet: boolean;
        readonly asParachainBondReservePercentSet: {
            readonly old: Percent;
            readonly new_: Percent;
        } & Struct;
        readonly isInflationSet: boolean;
        readonly asInflationSet: {
            readonly annualMin: Perbill;
            readonly annualIdeal: Perbill;
            readonly annualMax: Perbill;
            readonly roundMin: Perbill;
            readonly roundIdeal: Perbill;
            readonly roundMax: Perbill;
        } & Struct;
        readonly isStakeExpectationsSet: boolean;
        readonly asStakeExpectationsSet: {
            readonly expectMin: u128;
            readonly expectIdeal: u128;
            readonly expectMax: u128;
        } & Struct;
        readonly isTotalSelectedSet: boolean;
        readonly asTotalSelectedSet: {
            readonly old: u32;
            readonly new_: u32;
        } & Struct;
        readonly isCollatorCommissionSet: boolean;
        readonly asCollatorCommissionSet: {
            readonly old: Perbill;
            readonly new_: Perbill;
        } & Struct;
        readonly isBlocksPerRoundSet: boolean;
        readonly asBlocksPerRoundSet: {
            readonly currentRound: u32;
            readonly firstBlock: u32;
            readonly old: u32;
            readonly new_: u32;
            readonly newPerRoundInflationMin: Perbill;
            readonly newPerRoundInflationIdeal: Perbill;
            readonly newPerRoundInflationMax: Perbill;
        } & Struct;
        readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondLess' | 'CandidateLeft' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegationKicked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'Rewarded' | 'ReservedForParachainBond' | 'ParachainBondAccountSet' | 'ParachainBondReservePercentSet' | 'InflationSet' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'BlocksPerRoundSet';
    }
    /** @name ParachainStakingDelegationRequestsCancelledScheduledRequest (38) */
    interface ParachainStakingDelegationRequestsCancelledScheduledRequest extends Struct {
        readonly whenExecutable: u32;
        readonly action: ParachainStakingDelegationRequestsDelegationAction;
    }
    /** @name ParachainStakingDelegationRequestsDelegationAction (39) */
    interface ParachainStakingDelegationRequestsDelegationAction extends Enum {
        readonly isRevoke: boolean;
        readonly asRevoke: u128;
        readonly isDecrease: boolean;
        readonly asDecrease: u128;
        readonly type: 'Revoke' | 'Decrease';
    }
    /** @name ParachainStakingDelegatorAdded (40) */
    interface ParachainStakingDelegatorAdded extends Enum {
        readonly isAddedToTop: boolean;
        readonly asAddedToTop: {
            readonly newTotal: u128;
        } & Struct;
        readonly isAddedToBottom: boolean;
        readonly type: 'AddedToTop' | 'AddedToBottom';
    }
    /** @name PalletDemocracyEvent (43) */
    interface PalletDemocracyEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly proposalIndex: u32;
            readonly deposit: u128;
        } & Struct;
        readonly isTabled: boolean;
        readonly asTabled: {
            readonly proposalIndex: u32;
            readonly deposit: u128;
        } & Struct;
        readonly isExternalTabled: boolean;
        readonly isStarted: boolean;
        readonly asStarted: {
            readonly refIndex: u32;
            readonly threshold: PalletDemocracyVoteThreshold;
        } & Struct;
        readonly isPassed: boolean;
        readonly asPassed: {
            readonly refIndex: u32;
        } & Struct;
        readonly isNotPassed: boolean;
        readonly asNotPassed: {
            readonly refIndex: u32;
        } & Struct;
        readonly isCancelled: boolean;
        readonly asCancelled: {
            readonly refIndex: u32;
        } & Struct;
        readonly isDelegated: boolean;
        readonly asDelegated: {
            readonly who: AccountId32;
            readonly target: AccountId32;
        } & Struct;
        readonly isUndelegated: boolean;
        readonly asUndelegated: {
            readonly account: AccountId32;
        } & Struct;
        readonly isVetoed: boolean;
        readonly asVetoed: {
            readonly who: AccountId32;
            readonly proposalHash: H256;
            readonly until: u32;
        } & Struct;
        readonly isBlacklisted: boolean;
        readonly asBlacklisted: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly voter: AccountId32;
            readonly refIndex: u32;
            readonly vote: PalletDemocracyVoteAccountVote;
        } & Struct;
        readonly isSeconded: boolean;
        readonly asSeconded: {
            readonly seconder: AccountId32;
            readonly propIndex: u32;
        } & Struct;
        readonly isProposalCanceled: boolean;
        readonly asProposalCanceled: {
            readonly propIndex: u32;
        } & Struct;
        readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled';
    }
    /** @name PalletDemocracyVoteThreshold (44) */
    interface PalletDemocracyVoteThreshold extends Enum {
        readonly isSuperMajorityApprove: boolean;
        readonly isSuperMajorityAgainst: boolean;
        readonly isSimpleMajority: boolean;
        readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
    }
    /** @name PalletDemocracyVoteAccountVote (45) */
    interface PalletDemocracyVoteAccountVote extends Enum {
        readonly isStandard: boolean;
        readonly asStandard: {
            readonly vote: Vote;
            readonly balance: u128;
        } & Struct;
        readonly isSplit: boolean;
        readonly asSplit: {
            readonly aye: u128;
            readonly nay: u128;
        } & Struct;
        readonly type: 'Standard' | 'Split';
    }
    /** @name PalletCollectiveEvent (47) */
    interface PalletCollectiveEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly account: AccountId32;
            readonly proposalIndex: u32;
            readonly proposalHash: H256;
            readonly threshold: u32;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly account: AccountId32;
            readonly proposalHash: H256;
            readonly voted: bool;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly isApproved: boolean;
        readonly asApproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isDisapproved: boolean;
        readonly asDisapproved: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMemberExecuted: boolean;
        readonly asMemberExecuted: {
            readonly proposalHash: H256;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isClosed: boolean;
        readonly asClosed: {
            readonly proposalHash: H256;
            readonly yes: u32;
            readonly no: u32;
        } & Struct;
        readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
    }
    /** @name PalletElectionsPhragmenEvent (51) */
    interface PalletElectionsPhragmenEvent extends Enum {
        readonly isNewTerm: boolean;
        readonly asNewTerm: {
            readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
        } & Struct;
        readonly isEmptyTerm: boolean;
        readonly isElectionError: boolean;
        readonly isMemberKicked: boolean;
        readonly asMemberKicked: {
            readonly member: AccountId32;
        } & Struct;
        readonly isRenounced: boolean;
        readonly asRenounced: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCandidateSlashed: boolean;
        readonly asCandidateSlashed: {
            readonly candidate: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSeatHolderSlashed: boolean;
        readonly asSeatHolderSlashed: {
            readonly seatHolder: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
    }
    /** @name PalletMembershipEvent (54) */
    interface PalletMembershipEvent extends Enum {
        readonly isMemberAdded: boolean;
        readonly isMemberRemoved: boolean;
        readonly isMembersSwapped: boolean;
        readonly isMembersReset: boolean;
        readonly isKeyChanged: boolean;
        readonly isDummy: boolean;
        readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
    }
    /** @name CumulusPalletXcmpQueueEvent (56) */
    interface CumulusPalletXcmpQueueEvent extends Enum {
        readonly isSuccess: boolean;
        readonly asSuccess: {
            readonly messageHash: Option<U8aFixed>;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isFail: boolean;
        readonly asFail: {
            readonly messageHash: Option<U8aFixed>;
            readonly error: XcmV3TraitsError;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isBadVersion: boolean;
        readonly asBadVersion: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isBadFormat: boolean;
        readonly asBadFormat: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isXcmpMessageSent: boolean;
        readonly asXcmpMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly sender: u32;
            readonly sentAt: u32;
            readonly index: u64;
            readonly required: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly index: u64;
            readonly used: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
    }
    /** @name XcmV3TraitsError (57) */
    interface XcmV3TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isLocationFull: boolean;
        readonly isLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isExpectationFalse: boolean;
        readonly isPalletNotFound: boolean;
        readonly isNameMismatch: boolean;
        readonly isVersionIncompatible: boolean;
        readonly isHoldingWouldOverflow: boolean;
        readonly isExportError: boolean;
        readonly isReanchorFailed: boolean;
        readonly isNoDeal: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockError: boolean;
        readonly isNoPermission: boolean;
        readonly isUnanchored: boolean;
        readonly isNotDepositable: boolean;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: SpWeightsWeightV2Weight;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly isExceedsStackLimit: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
    }
    /** @name PalletXcmEvent (59) */
    interface PalletXcmEvent extends Enum {
        readonly isAttempted: boolean;
        readonly asAttempted: XcmV3TraitsOutcome;
        readonly isSent: boolean;
        readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
        readonly isUnexpectedResponse: boolean;
        readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isResponseReady: boolean;
        readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
        readonly isNotified: boolean;
        readonly asNotified: ITuple<[u64, u8, u8]>;
        readonly isNotifyOverweight: boolean;
        readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
        readonly isNotifyDispatchError: boolean;
        readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
        readonly isNotifyDecodeFailed: boolean;
        readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
        readonly isInvalidResponder: boolean;
        readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
        readonly isInvalidResponderVersion: boolean;
        readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isResponseTaken: boolean;
        readonly asResponseTaken: u64;
        readonly isAssetsTrapped: boolean;
        readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
        readonly isVersionChangeNotified: boolean;
        readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
        readonly isSupportedVersionChanged: boolean;
        readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
        readonly isNotifyTargetSendFail: boolean;
        readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
        readonly isNotifyTargetMigrationFail: boolean;
        readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
        readonly isInvalidQuerierVersion: boolean;
        readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
        readonly isInvalidQuerier: boolean;
        readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
        readonly isVersionNotifyStarted: boolean;
        readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isVersionNotifyRequested: boolean;
        readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isVersionNotifyUnrequested: boolean;
        readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isFeesPaid: boolean;
        readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
        readonly isAssetsClaimed: boolean;
        readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
        readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
    }
    /** @name XcmV3TraitsOutcome (60) */
    interface XcmV3TraitsOutcome extends Enum {
        readonly isComplete: boolean;
        readonly asComplete: SpWeightsWeightV2Weight;
        readonly isIncomplete: boolean;
        readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
        readonly isError: boolean;
        readonly asError: XcmV3TraitsError;
        readonly type: 'Complete' | 'Incomplete' | 'Error';
    }
    /** @name XcmV3MultiLocation (61) */
    interface XcmV3MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV3Junctions;
    }
    /** @name XcmV3Junctions (62) */
    interface XcmV3Junctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV3Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name XcmV3Junction (63) */
    interface XcmV3Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: {
            readonly length: u8;
            readonly data: U8aFixed;
        } & Struct;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV3JunctionBodyId;
            readonly part: XcmV3JunctionBodyPart;
        } & Struct;
        readonly isGlobalConsensus: boolean;
        readonly asGlobalConsensus: XcmV3JunctionNetworkId;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
    }
    /** @name XcmV3JunctionNetworkId (66) */
    interface XcmV3JunctionNetworkId extends Enum {
        readonly isByGenesis: boolean;
        readonly asByGenesis: U8aFixed;
        readonly isByFork: boolean;
        readonly asByFork: {
            readonly blockNumber: u64;
            readonly blockHash: U8aFixed;
        } & Struct;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly isWestend: boolean;
        readonly isRococo: boolean;
        readonly isWococo: boolean;
        readonly isEthereum: boolean;
        readonly asEthereum: {
            readonly chainId: Compact<u64>;
        } & Struct;
        readonly isBitcoinCore: boolean;
        readonly isBitcoinCash: boolean;
        readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
    }
    /** @name XcmV3JunctionBodyId (69) */
    interface XcmV3JunctionBodyId extends Enum {
        readonly isUnit: boolean;
        readonly isMoniker: boolean;
        readonly asMoniker: U8aFixed;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name XcmV3JunctionBodyPart (70) */
    interface XcmV3JunctionBodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name XcmV3Xcm (71) */
    interface XcmV3Xcm extends Vec<XcmV3Instruction> {
    }
    /** @name XcmV3Instruction (73) */
    interface XcmV3Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV3Response;
            readonly maxWeight: SpWeightsWeightV2Weight;
            readonly querier: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly beneficiary: XcmV3MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originKind: XcmV2OriginKind;
            readonly requireWeightAtMost: SpWeightsWeightV2Weight;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV3Junctions;
        readonly isReportError: boolean;
        readonly asReportError: XcmV3QueryResponseInfo;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly beneficiary: XcmV3MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV3MultiassetMultiAssetFilter;
            readonly want: XcmV3MultiassetMultiAssets;
            readonly maximal: bool;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly reserve: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: XcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isReportHolding: boolean;
        readonly asReportHolding: {
            readonly responseInfo: XcmV3QueryResponseInfo;
            readonly assets: XcmV3MultiassetMultiAssetFilter;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV3MultiAsset;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV3Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV3Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly ticket: XcmV3MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly isBurnAsset: boolean;
        readonly asBurnAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectAsset: boolean;
        readonly asExpectAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectOrigin: boolean;
        readonly asExpectOrigin: Option<XcmV3MultiLocation>;
        readonly isExpectError: boolean;
        readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isExpectTransactStatus: boolean;
        readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
        readonly isQueryPallet: boolean;
        readonly asQueryPallet: {
            readonly moduleName: Bytes;
            readonly responseInfo: XcmV3QueryResponseInfo;
        } & Struct;
        readonly isExpectPallet: boolean;
        readonly asExpectPallet: {
            readonly index: Compact<u32>;
            readonly name: Bytes;
            readonly moduleName: Bytes;
            readonly crateMajor: Compact<u32>;
            readonly minCrateMinor: Compact<u32>;
        } & Struct;
        readonly isReportTransactStatus: boolean;
        readonly asReportTransactStatus: XcmV3QueryResponseInfo;
        readonly isClearTransactStatus: boolean;
        readonly isUniversalOrigin: boolean;
        readonly asUniversalOrigin: XcmV3Junction;
        readonly isExportMessage: boolean;
        readonly asExportMessage: {
            readonly network: XcmV3JunctionNetworkId;
            readonly destination: XcmV3Junctions;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isLockAsset: boolean;
        readonly asLockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly unlocker: XcmV3MultiLocation;
        } & Struct;
        readonly isUnlockAsset: boolean;
        readonly asUnlockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly target: XcmV3MultiLocation;
        } & Struct;
        readonly isNoteUnlockable: boolean;
        readonly asNoteUnlockable: {
            readonly asset: XcmV3MultiAsset;
            readonly owner: XcmV3MultiLocation;
        } & Struct;
        readonly isRequestUnlock: boolean;
        readonly asRequestUnlock: {
            readonly asset: XcmV3MultiAsset;
            readonly locker: XcmV3MultiLocation;
        } & Struct;
        readonly isSetFeesMode: boolean;
        readonly asSetFeesMode: {
            readonly jitWithdraw: bool;
        } & Struct;
        readonly isSetTopic: boolean;
        readonly asSetTopic: U8aFixed;
        readonly isClearTopic: boolean;
        readonly isAliasOrigin: boolean;
        readonly asAliasOrigin: XcmV3MultiLocation;
        readonly isUnpaidExecution: boolean;
        readonly asUnpaidExecution: {
            readonly weightLimit: XcmV3WeightLimit;
            readonly checkOrigin: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
    }
    /** @name XcmV3MultiassetMultiAssets (74) */
    interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {
    }
    /** @name XcmV3MultiAsset (76) */
    interface XcmV3MultiAsset extends Struct {
        readonly id: XcmV3MultiassetAssetId;
        readonly fun: XcmV3MultiassetFungibility;
    }
    /** @name XcmV3MultiassetAssetId (77) */
    interface XcmV3MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV3MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: U8aFixed;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name XcmV3MultiassetFungibility (78) */
    interface XcmV3MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV3MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV3MultiassetAssetInstance (79) */
    interface XcmV3MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
    }
    /** @name XcmV3Response (82) */
    interface XcmV3Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV3MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly isPalletsInfo: boolean;
        readonly asPalletsInfo: XcmV3VecPalletInfo;
        readonly isDispatchResult: boolean;
        readonly asDispatchResult: XcmV3MaybeErrorCode;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
    }
    /** @name XcmV3VecPalletInfo (85) */
    interface XcmV3VecPalletInfo extends Vec<XcmV3PalletInfo> {
    }
    /** @name XcmV3PalletInfo (87) */
    interface XcmV3PalletInfo extends Struct {
        readonly index: Compact<u32>;
        readonly name: Bytes;
        readonly moduleName: Bytes;
        readonly major: Compact<u32>;
        readonly minor: Compact<u32>;
        readonly patch: Compact<u32>;
    }
    /** @name XcmV3MaybeErrorCode (88) */
    interface XcmV3MaybeErrorCode extends Enum {
        readonly isSuccess: boolean;
        readonly isError: boolean;
        readonly asError: Bytes;
        readonly isTruncatedError: boolean;
        readonly asTruncatedError: Bytes;
        readonly type: 'Success' | 'Error' | 'TruncatedError';
    }
    /** @name XcmV2OriginKind (90) */
    interface XcmV2OriginKind extends Enum {
        readonly isNative: boolean;
        readonly isSovereignAccount: boolean;
        readonly isSuperuser: boolean;
        readonly isXcm: boolean;
        readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
    }
    /** @name XcmDoubleEncoded (91) */
    interface XcmDoubleEncoded extends Struct {
        readonly encoded: Bytes;
    }
    /** @name XcmV3QueryResponseInfo (92) */
    interface XcmV3QueryResponseInfo extends Struct {
        readonly destination: XcmV3MultiLocation;
        readonly queryId: Compact<u64>;
        readonly maxWeight: SpWeightsWeightV2Weight;
    }
    /** @name XcmV3MultiassetMultiAssetFilter (93) */
    interface XcmV3MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV3MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV3MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name XcmV3MultiassetWildMultiAsset (94) */
    interface XcmV3MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
        } & Struct;
        readonly isAllCounted: boolean;
        readonly asAllCounted: Compact<u32>;
        readonly isAllOfCounted: boolean;
        readonly asAllOfCounted: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
            readonly count: Compact<u32>;
        } & Struct;
        readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
    }
    /** @name XcmV3MultiassetWildFungibility (95) */
    interface XcmV3MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV3WeightLimit (96) */
    interface XcmV3WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: SpWeightsWeightV2Weight;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name XcmVersionedMultiAssets (97) */
    interface XcmVersionedMultiAssets extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiassetMultiAssets;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetMultiAssets;
        readonly type: 'V2' | 'V3';
    }
    /** @name XcmV2MultiassetMultiAssets (98) */
    interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {
    }
    /** @name XcmV2MultiAsset (100) */
    interface XcmV2MultiAsset extends Struct {
        readonly id: XcmV2MultiassetAssetId;
        readonly fun: XcmV2MultiassetFungibility;
    }
    /** @name XcmV2MultiassetAssetId (101) */
    interface XcmV2MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV2MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: Bytes;
        readonly type: 'Concrete' | 'Abstract';
    }
    /** @name XcmV2MultiLocation (102) */
    interface XcmV2MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV2MultilocationJunctions;
    }
    /** @name XcmV2MultilocationJunctions (103) */
    interface XcmV2MultilocationJunctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV2Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX7: boolean;
        readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX8: boolean;
        readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
    }
    /** @name XcmV2Junction (104) */
    interface XcmV2Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: XcmV2NetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: XcmV2NetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: XcmV2NetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV2BodyId;
            readonly part: XcmV2BodyPart;
        } & Struct;
        readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
    }
    /** @name XcmV2NetworkId (105) */
    interface XcmV2NetworkId extends Enum {
        readonly isAny: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
    }
    /** @name XcmV2BodyId (107) */
    interface XcmV2BodyId extends Enum {
        readonly isUnit: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
    }
    /** @name XcmV2BodyPart (108) */
    interface XcmV2BodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
    }
    /** @name XcmV2MultiassetFungibility (109) */
    interface XcmV2MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV2MultiassetAssetInstance;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV2MultiassetAssetInstance (110) */
    interface XcmV2MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly isBlob: boolean;
        readonly asBlob: Bytes;
        readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
    }
    /** @name XcmVersionedMultiLocation (111) */
    interface XcmVersionedMultiLocation extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiLocation;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiLocation;
        readonly type: 'V2' | 'V3';
    }
    /** @name CumulusPalletXcmEvent (112) */
    interface CumulusPalletXcmEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: U8aFixed;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: U8aFixed;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
    }
    /** @name CumulusPalletDmpQueueEvent (113) */
    interface CumulusPalletDmpQueueEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: {
            readonly messageId: U8aFixed;
            readonly outcome: XcmV3TraitsOutcome;
        } & Struct;
        readonly isWeightExhausted: boolean;
        readonly asWeightExhausted: {
            readonly messageId: U8aFixed;
            readonly remainingWeight: SpWeightsWeightV2Weight;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly messageId: U8aFixed;
            readonly overweightIndex: u64;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly overweightIndex: u64;
            readonly weightUsed: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isMaxMessagesExhausted: boolean;
        readonly asMaxMessagesExhausted: {
            readonly messageId: U8aFixed;
        } & Struct;
        readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
    }
    /** @name PalletUtilityEvent (114) */
    interface PalletUtilityEvent extends Enum {
        readonly isBatchInterrupted: boolean;
        readonly asBatchInterrupted: {
            readonly index: u32;
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isBatchCompleted: boolean;
        readonly isBatchCompletedWithErrors: boolean;
        readonly isItemCompleted: boolean;
        readonly isItemFailed: boolean;
        readonly asItemFailed: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isDispatchedAs: boolean;
        readonly asDispatchedAs: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
    }
    /** @name PalletSchedulerEvent (115) */
    interface PalletSchedulerEvent extends Enum {
        readonly isScheduled: boolean;
        readonly asScheduled: {
            readonly when: u32;
            readonly index: u32;
        } & Struct;
        readonly isCanceled: boolean;
        readonly asCanceled: {
            readonly when: u32;
            readonly index: u32;
        } & Struct;
        readonly isDispatched: boolean;
        readonly asDispatched: {
            readonly task: ITuple<[u32, u32]>;
            readonly id: Option<U8aFixed>;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isCallUnavailable: boolean;
        readonly asCallUnavailable: {
            readonly task: ITuple<[u32, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly isPeriodicFailed: boolean;
        readonly asPeriodicFailed: {
            readonly task: ITuple<[u32, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly isPermanentlyOverweight: boolean;
        readonly asPermanentlyOverweight: {
            readonly task: ITuple<[u32, u32]>;
            readonly id: Option<U8aFixed>;
        } & Struct;
        readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
    }
    /** @name PalletProxyEvent (117) */
    interface PalletProxyEvent extends Enum {
        readonly isProxyExecuted: boolean;
        readonly asProxyExecuted: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isPureCreated: boolean;
        readonly asPureCreated: {
            readonly pure: AccountId32;
            readonly who: AccountId32;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly disambiguationIndex: u16;
        } & Struct;
        readonly isAnnounced: boolean;
        readonly asAnnounced: {
            readonly real: AccountId32;
            readonly proxy: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAdded: boolean;
        readonly asProxyAdded: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isProxyRemoved: boolean;
        readonly asProxyRemoved: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
    }
    /** @name BifrostKusamaRuntimeProxyType (118) */
    interface BifrostKusamaRuntimeProxyType extends Enum {
        readonly isAny: boolean;
        readonly isNonTransfer: boolean;
        readonly isGovernance: boolean;
        readonly isCancelProxy: boolean;
        readonly isIdentityJudgement: boolean;
        readonly isStaking: boolean;
        readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'CancelProxy' | 'IdentityJudgement' | 'Staking';
    }
    /** @name PalletMultisigEvent (120) */
    interface PalletMultisigEvent extends Enum {
        readonly isNewMultisig: boolean;
        readonly asNewMultisig: {
            readonly approving: AccountId32;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigApproval: boolean;
        readonly asMultisigApproval: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly isMultisigExecuted: boolean;
        readonly asMultisigExecuted: {
            readonly approving: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isMultisigCancelled: boolean;
        readonly asMultisigCancelled: {
            readonly cancelling: AccountId32;
            readonly timepoint: PalletMultisigTimepoint;
            readonly multisig: AccountId32;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
    }
    /** @name PalletMultisigTimepoint (121) */
    interface PalletMultisigTimepoint extends Struct {
        readonly height: u32;
        readonly index: u32;
    }
    /** @name PalletIdentityEvent (122) */
    interface PalletIdentityEvent extends Enum {
        readonly isIdentitySet: boolean;
        readonly asIdentitySet: {
            readonly who: AccountId32;
        } & Struct;
        readonly isIdentityCleared: boolean;
        readonly asIdentityCleared: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isIdentityKilled: boolean;
        readonly asIdentityKilled: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isJudgementRequested: boolean;
        readonly asJudgementRequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementUnrequested: boolean;
        readonly asJudgementUnrequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementGiven: boolean;
        readonly asJudgementGiven: {
            readonly target: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isRegistrarAdded: boolean;
        readonly asRegistrarAdded: {
            readonly registrarIndex: u32;
        } & Struct;
        readonly isSubIdentityAdded: boolean;
        readonly asSubIdentityAdded: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRemoved: boolean;
        readonly asSubIdentityRemoved: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRevoked: boolean;
        readonly asSubIdentityRevoked: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
    }
    /** @name BifrostVestingEvent (123) */
    interface BifrostVestingEvent extends Enum {
        readonly isVestingUpdated: boolean;
        readonly asVestingUpdated: ITuple<[AccountId32, u128]>;
        readonly isVestingCompleted: boolean;
        readonly asVestingCompleted: AccountId32;
        readonly type: 'VestingUpdated' | 'VestingCompleted';
    }
    /** @name PalletTreasuryEvent (124) */
    interface PalletTreasuryEvent extends Enum {
        readonly isProposed: boolean;
        readonly asProposed: {
            readonly proposalIndex: u32;
        } & Struct;
        readonly isSpending: boolean;
        readonly asSpending: {
            readonly budgetRemaining: u128;
        } & Struct;
        readonly isAwarded: boolean;
        readonly asAwarded: {
            readonly proposalIndex: u32;
            readonly award: u128;
            readonly account: AccountId32;
        } & Struct;
        readonly isRejected: boolean;
        readonly asRejected: {
            readonly proposalIndex: u32;
            readonly slashed: u128;
        } & Struct;
        readonly isBurnt: boolean;
        readonly asBurnt: {
            readonly burntFunds: u128;
        } & Struct;
        readonly isRollover: boolean;
        readonly asRollover: {
            readonly rolloverBalance: u128;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly value: u128;
        } & Struct;
        readonly isSpendApproved: boolean;
        readonly asSpendApproved: {
            readonly proposalIndex: u32;
            readonly amount: u128;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isUpdatedInactive: boolean;
        readonly asUpdatedInactive: {
            readonly reactivated: u128;
            readonly deactivated: u128;
        } & Struct;
        readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
    }
    /** @name PalletBountiesEvent (125) */
    interface PalletBountiesEvent extends Enum {
        readonly isBountyProposed: boolean;
        readonly asBountyProposed: {
            readonly index: u32;
        } & Struct;
        readonly isBountyRejected: boolean;
        readonly asBountyRejected: {
            readonly index: u32;
            readonly bond: u128;
        } & Struct;
        readonly isBountyBecameActive: boolean;
        readonly asBountyBecameActive: {
            readonly index: u32;
        } & Struct;
        readonly isBountyAwarded: boolean;
        readonly asBountyAwarded: {
            readonly index: u32;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isBountyClaimed: boolean;
        readonly asBountyClaimed: {
            readonly index: u32;
            readonly payout: u128;
            readonly beneficiary: AccountId32;
        } & Struct;
        readonly isBountyCanceled: boolean;
        readonly asBountyCanceled: {
            readonly index: u32;
        } & Struct;
        readonly isBountyExtended: boolean;
        readonly asBountyExtended: {
            readonly index: u32;
        } & Struct;
        readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
    }
    /** @name PalletTipsEvent (126) */
    interface PalletTipsEvent extends Enum {
        readonly isNewTip: boolean;
        readonly asNewTip: {
            readonly tipHash: H256;
        } & Struct;
        readonly isTipClosing: boolean;
        readonly asTipClosing: {
            readonly tipHash: H256;
        } & Struct;
        readonly isTipClosed: boolean;
        readonly asTipClosed: {
            readonly tipHash: H256;
            readonly who: AccountId32;
            readonly payout: u128;
        } & Struct;
        readonly isTipRetracted: boolean;
        readonly asTipRetracted: {
            readonly tipHash: H256;
        } & Struct;
        readonly isTipSlashed: boolean;
        readonly asTipSlashed: {
            readonly tipHash: H256;
            readonly finder: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
    }
    /** @name PalletPreimageEvent (127) */
    interface PalletPreimageEvent extends Enum {
        readonly isNoted: boolean;
        readonly asNoted: {
            readonly hash_: H256;
        } & Struct;
        readonly isRequested: boolean;
        readonly asRequested: {
            readonly hash_: H256;
        } & Struct;
        readonly isCleared: boolean;
        readonly asCleared: {
            readonly hash_: H256;
        } & Struct;
        readonly type: 'Noted' | 'Requested' | 'Cleared';
    }
    /** @name OrmlXtokensModuleEvent (128) */
    interface OrmlXtokensModuleEvent extends Enum {
        readonly isTransferredMultiAssets: boolean;
        readonly asTransferredMultiAssets: {
            readonly sender: AccountId32;
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly fee: XcmV3MultiAsset;
            readonly dest: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'TransferredMultiAssets';
    }
    /** @name OrmlTokensModuleEvent (129) */
    interface OrmlTokensModuleEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly status: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly free: u128;
            readonly reserved: u128;
        } & Struct;
        readonly isTotalIssuanceSet: boolean;
        readonly asTotalIssuanceSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly freeAmount: u128;
            readonly reservedAmount: u128;
        } & Struct;
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockSet: boolean;
        readonly asLockSet: {
            readonly lockId: U8aFixed;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isLockRemoved: boolean;
        readonly asLockRemoved: {
            readonly lockId: U8aFixed;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
        } & Struct;
        readonly isLocked: boolean;
        readonly asLocked: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnlocked: boolean;
        readonly asUnlocked: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
    }
    /** @name NodePrimitivesCurrencyCurrencyId (130) */
    interface NodePrimitivesCurrencyCurrencyId extends Enum {
        readonly isNative: boolean;
        readonly asNative: NodePrimitivesCurrencyTokenSymbol;
        readonly isVToken: boolean;
        readonly asVToken: NodePrimitivesCurrencyTokenSymbol;
        readonly isToken: boolean;
        readonly asToken: NodePrimitivesCurrencyTokenSymbol;
        readonly isStable: boolean;
        readonly asStable: NodePrimitivesCurrencyTokenSymbol;
        readonly isVsToken: boolean;
        readonly asVsToken: NodePrimitivesCurrencyTokenSymbol;
        readonly isVsBond: boolean;
        readonly asVsBond: ITuple<[NodePrimitivesCurrencyTokenSymbol, u32, u32, u32]>;
        readonly isLpToken: boolean;
        readonly asLpToken: ITuple<[NodePrimitivesCurrencyTokenSymbol, u8, NodePrimitivesCurrencyTokenSymbol, u8]>;
        readonly isForeignAsset: boolean;
        readonly asForeignAsset: u32;
        readonly isToken2: boolean;
        readonly asToken2: u8;
        readonly isVToken2: boolean;
        readonly asVToken2: u8;
        readonly isVsToken2: boolean;
        readonly asVsToken2: u8;
        readonly isVsBond2: boolean;
        readonly asVsBond2: ITuple<[u8, u32, u32, u32]>;
        readonly isStableLpToken: boolean;
        readonly asStableLpToken: u32;
        readonly type: 'Native' | 'VToken' | 'Token' | 'Stable' | 'VsToken' | 'VsBond' | 'LpToken' | 'ForeignAsset' | 'Token2' | 'VToken2' | 'VsToken2' | 'VsBond2' | 'StableLpToken';
    }
    /** @name NodePrimitivesCurrencyTokenSymbol (131) */
    interface NodePrimitivesCurrencyTokenSymbol extends Enum {
        readonly isAsg: boolean;
        readonly isBnc: boolean;
        readonly isKusd: boolean;
        readonly isDot: boolean;
        readonly isKsm: boolean;
        readonly isEth: boolean;
        readonly isKar: boolean;
        readonly isZlk: boolean;
        readonly isPha: boolean;
        readonly isRmrk: boolean;
        readonly isMovr: boolean;
        readonly type: 'Asg' | 'Bnc' | 'Kusd' | 'Dot' | 'Ksm' | 'Eth' | 'Kar' | 'Zlk' | 'Pha' | 'Rmrk' | 'Movr';
    }
    /** @name OrmlUnknownTokensModuleEvent (132) */
    interface OrmlUnknownTokensModuleEvent extends Enum {
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly asset: XcmV3MultiAsset;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly asset: XcmV3MultiAsset;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'Deposited' | 'Withdrawn';
    }
    /** @name OrmlXcmModuleEvent (133) */
    interface OrmlXcmModuleEvent extends Enum {
        readonly isSent: boolean;
        readonly asSent: {
            readonly to: XcmV3MultiLocation;
            readonly message: XcmV3Xcm;
        } & Struct;
        readonly type: 'Sent';
    }
    /** @name ZenlinkProtocolEvent (134) */
    interface ZenlinkProtocolEvent extends Enum {
        readonly isTransferred: boolean;
        readonly asTransferred: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, AccountId32, u128]>;
        readonly isBurned: boolean;
        readonly asBurned: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
        readonly isMinted: boolean;
        readonly asMinted: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
        readonly isPairCreated: boolean;
        readonly asPairCreated: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
        readonly isLiquidityAdded: boolean;
        readonly asLiquidityAdded: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
        readonly isLiquidityRemoved: boolean;
        readonly asLiquidityRemoved: ITuple<[AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
        readonly isAssetSwap: boolean;
        readonly asAssetSwap: ITuple<[AccountId32, AccountId32, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<u128>]>;
        readonly isTransferredToParachain: boolean;
        readonly asTransferredToParachain: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u32, AccountId32, u128, u64]>;
        readonly isBootstrapContribute: boolean;
        readonly asBootstrapContribute: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, u128, ZenlinkProtocolPrimitivesAssetId, u128]>;
        readonly isBootstrapEnd: boolean;
        readonly asBootstrapEnd: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
        readonly isBootstrapCreated: boolean;
        readonly asBootstrapCreated: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
        readonly isBootstrapClaim: boolean;
        readonly asBootstrapClaim: ITuple<[AccountId32, AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
        readonly isBootstrapUpdate: boolean;
        readonly asBootstrapUpdate: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
        readonly isBootstrapRefund: boolean;
        readonly asBootstrapRefund: ITuple<[AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128]>;
        readonly isDistributeReward: boolean;
        readonly asDistributeReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
        readonly isChargeReward: boolean;
        readonly asChargeReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
        readonly isWithdrawReward: boolean;
        readonly asWithdrawReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32]>;
        readonly type: 'Transferred' | 'Burned' | 'Minted' | 'PairCreated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'AssetSwap' | 'TransferredToParachain' | 'BootstrapContribute' | 'BootstrapEnd' | 'BootstrapCreated' | 'BootstrapClaim' | 'BootstrapUpdate' | 'BootstrapRefund' | 'DistributeReward' | 'ChargeReward' | 'WithdrawReward';
    }
    /** @name ZenlinkProtocolPrimitivesAssetId (135) */
    interface ZenlinkProtocolPrimitivesAssetId extends Struct {
        readonly chainId: u32;
        readonly assetType: u8;
        readonly assetIndex: u64;
    }
    /** @name MerkleDistributorEvent (140) */
    interface MerkleDistributorEvent extends Enum {
        readonly isCreate: boolean;
        readonly asCreate: ITuple<[u32, H256, u128]>;
        readonly isClaim: boolean;
        readonly asClaim: ITuple<[u32, AccountId32, u128]>;
        readonly isWithdraw: boolean;
        readonly asWithdraw: ITuple<[u32, AccountId32, u128]>;
        readonly isAddToWhiteList: boolean;
        readonly asAddToWhiteList: AccountId32;
        readonly isRemoveFromWhiteList: boolean;
        readonly asRemoveFromWhiteList: AccountId32;
        readonly type: 'Create' | 'Claim' | 'Withdraw' | 'AddToWhiteList' | 'RemoveFromWhiteList';
    }
    /** @name ZenlinkStableAmmEvent (141) */
    interface ZenlinkStableAmmEvent extends Enum {
        readonly isCreatePool: boolean;
        readonly asCreatePool: {
            readonly poolId: u32;
            readonly currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>;
            readonly lpCurrencyId: NodePrimitivesCurrencyCurrencyId;
            readonly a: u128;
            readonly account: AccountId32;
            readonly adminFeeReceiver: AccountId32;
        } & Struct;
        readonly isUpdateAdminFeeReceiver: boolean;
        readonly asUpdateAdminFeeReceiver: {
            readonly poolId: u32;
            readonly adminFeeReceiver: AccountId32;
        } & Struct;
        readonly isAddLiquidity: boolean;
        readonly asAddLiquidity: {
            readonly poolId: u32;
            readonly who: AccountId32;
            readonly to: AccountId32;
            readonly supplyAmounts: Vec<u128>;
            readonly fees: Vec<u128>;
            readonly newD: u128;
            readonly mintAmount: u128;
        } & Struct;
        readonly isCurrencyExchange: boolean;
        readonly asCurrencyExchange: {
            readonly poolId: u32;
            readonly who: AccountId32;
            readonly to: AccountId32;
            readonly inIndex: u32;
            readonly inAmount: u128;
            readonly outIndex: u32;
            readonly outAmount: u128;
        } & Struct;
        readonly isRemoveLiquidity: boolean;
        readonly asRemoveLiquidity: {
            readonly poolId: u32;
            readonly who: AccountId32;
            readonly to: AccountId32;
            readonly amounts: Vec<u128>;
            readonly fees: Vec<u128>;
            readonly newTotalSupply: u128;
        } & Struct;
        readonly isRemoveLiquidityOneCurrency: boolean;
        readonly asRemoveLiquidityOneCurrency: {
            readonly poolId: u32;
            readonly who: AccountId32;
            readonly to: AccountId32;
            readonly outIndex: u32;
            readonly burnAmount: u128;
            readonly outAmount: u128;
        } & Struct;
        readonly isRemoveLiquidityImbalance: boolean;
        readonly asRemoveLiquidityImbalance: {
            readonly poolId: u32;
            readonly who: AccountId32;
            readonly to: AccountId32;
            readonly amounts: Vec<u128>;
            readonly fees: Vec<u128>;
            readonly newD: u128;
            readonly newTotalSupply: u128;
        } & Struct;
        readonly isNewSwapFee: boolean;
        readonly asNewSwapFee: {
            readonly poolId: u32;
            readonly newSwapFee: u128;
        } & Struct;
        readonly isNewAdminFee: boolean;
        readonly asNewAdminFee: {
            readonly poolId: u32;
            readonly newAdminFee: u128;
        } & Struct;
        readonly isRampA: boolean;
        readonly asRampA: {
            readonly poolId: u32;
            readonly initialAPrecise: u128;
            readonly futureAPrecise: u128;
            readonly now: u128;
            readonly futureATime: u128;
        } & Struct;
        readonly isStopRampA: boolean;
        readonly asStopRampA: {
            readonly poolId: u32;
            readonly currentA: u128;
            readonly now: u128;
        } & Struct;
        readonly isCollectProtocolFee: boolean;
        readonly asCollectProtocolFee: {
            readonly poolId: u32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly feeAmount: u128;
        } & Struct;
        readonly isCurrencyExchangeUnderlying: boolean;
        readonly asCurrencyExchangeUnderlying: {
            readonly poolId: u32;
            readonly account: AccountId32;
            readonly inAmount: u128;
            readonly outAmount: u128;
            readonly currencyIndexFrom: u32;
            readonly currencyIndexTo: u32;
            readonly to: AccountId32;
        } & Struct;
        readonly type: 'CreatePool' | 'UpdateAdminFeeReceiver' | 'AddLiquidity' | 'CurrencyExchange' | 'RemoveLiquidity' | 'RemoveLiquidityOneCurrency' | 'RemoveLiquidityImbalance' | 'NewSwapFee' | 'NewAdminFee' | 'RampA' | 'StopRampA' | 'CollectProtocolFee' | 'CurrencyExchangeUnderlying';
    }
    /** @name ZenlinkSwapRouterEvent (143) */
    type ZenlinkSwapRouterEvent = Null;
    /** @name BifrostFlexibleFeeEvent (144) */
    interface BifrostFlexibleFeeEvent extends Enum {
        readonly isFlexibleFeeExchanged: boolean;
        readonly asFlexibleFeeExchanged: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
        readonly isFixedRateFeeExchanged: boolean;
        readonly asFixedRateFeeExchanged: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
        readonly isExtraFeeDeducted: boolean;
        readonly asExtraFeeDeducted: ITuple<[NodePrimitivesExtraFeeName, NodePrimitivesCurrencyCurrencyId, u128]>;
        readonly type: 'FlexibleFeeExchanged' | 'FixedRateFeeExchanged' | 'ExtraFeeDeducted';
    }
    /** @name NodePrimitivesExtraFeeName (145) */
    interface NodePrimitivesExtraFeeName extends Enum {
        readonly isSalpContribute: boolean;
        readonly isStatemineTransfer: boolean;
        readonly isNoExtraFee: boolean;
        readonly type: 'SalpContribute' | 'StatemineTransfer' | 'NoExtraFee';
    }
    /** @name BifrostSalpEvent (146) */
    interface BifrostSalpEvent extends Enum {
        readonly isCreated: boolean;
        readonly asCreated: u32;
        readonly isContributing: boolean;
        readonly asContributing: ITuple<[AccountId32, u32, u128, U8aFixed]>;
        readonly isContributed: boolean;
        readonly asContributed: ITuple<[AccountId32, u32, u128]>;
        readonly isContributeFailed: boolean;
        readonly asContributeFailed: ITuple<[AccountId32, u32, u128]>;
        readonly isWithdrew: boolean;
        readonly asWithdrew: ITuple<[u32, u128]>;
        readonly isRefunded: boolean;
        readonly asRefunded: ITuple<[AccountId32, u32, u32, u32, u128]>;
        readonly isAllRefunded: boolean;
        readonly asAllRefunded: u32;
        readonly isRedeemed: boolean;
        readonly asRedeemed: ITuple<[AccountId32, u32, u32, u32, u128]>;
        readonly isEdited: boolean;
        readonly asEdited: u32;
        readonly isDissolved: boolean;
        readonly asDissolved: u32;
        readonly isUnlocked: boolean;
        readonly asUnlocked: ITuple<[AccountId32, u32, u128]>;
        readonly isAllUnlocked: boolean;
        readonly asAllUnlocked: u32;
        readonly isFailed: boolean;
        readonly asFailed: u32;
        readonly isSuccess: boolean;
        readonly asSuccess: u32;
        readonly isRetired: boolean;
        readonly asRetired: u32;
        readonly isEnd: boolean;
        readonly asEnd: u32;
        readonly isContinued: boolean;
        readonly asContinued: ITuple<[u32, u32, u32]>;
        readonly isRefundedDissolved: boolean;
        readonly asRefundedDissolved: ITuple<[u32, u32, u32]>;
        readonly isBuyback: boolean;
        readonly asBuyback: u128;
        readonly isVstokenUnlocked: boolean;
        readonly asVstokenUnlocked: AccountId32;
        readonly type: 'Created' | 'Contributing' | 'Contributed' | 'ContributeFailed' | 'Withdrew' | 'Refunded' | 'AllRefunded' | 'Redeemed' | 'Edited' | 'Dissolved' | 'Unlocked' | 'AllUnlocked' | 'Failed' | 'Success' | 'Retired' | 'End' | 'Continued' | 'RefundedDissolved' | 'Buyback' | 'VstokenUnlocked';
    }
    /** @name BifrostLiquidityMiningEvent (147) */
    interface BifrostLiquidityMiningEvent extends Enum {
        readonly isPoolCreated: boolean;
        readonly asPoolCreated: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
        readonly isPoolCharged: boolean;
        readonly asPoolCharged: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, AccountId32]>;
        readonly isPoolStarted: boolean;
        readonly asPoolStarted: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
        readonly isPoolKilled: boolean;
        readonly asPoolKilled: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
        readonly isPoolRetiredForcefully: boolean;
        readonly asPoolRetiredForcefully: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>]>;
        readonly isPoolEdited: boolean;
        readonly asPoolEdited: ITuple<[u32, u32, u32, u32, u32]>;
        readonly isUserDeposited: boolean;
        readonly asUserDeposited: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
        readonly isUserRedeemed: boolean;
        readonly asUserRedeemed: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, u32, AccountId32]>;
        readonly isUserClaimed: boolean;
        readonly asUserClaimed: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>, AccountId32]>;
        readonly isUserUnlocked: boolean;
        readonly asUserUnlocked: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
        readonly isUserCancelUnlock: boolean;
        readonly asUserCancelUnlock: ITuple<[u32, BifrostLiquidityMiningPoolType, ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>, u128, AccountId32]>;
        readonly isLazyMigration: boolean;
        readonly asLazyMigration: ITuple<[u32, u32]>;
        readonly type: 'PoolCreated' | 'PoolCharged' | 'PoolStarted' | 'PoolKilled' | 'PoolRetiredForcefully' | 'PoolEdited' | 'UserDeposited' | 'UserRedeemed' | 'UserClaimed' | 'UserUnlocked' | 'UserCancelUnlock' | 'LazyMigration';
    }
    /** @name BifrostLiquidityMiningPoolType (148) */
    interface BifrostLiquidityMiningPoolType extends Enum {
        readonly isMining: boolean;
        readonly isFarming: boolean;
        readonly isEbFarming: boolean;
        readonly isSingleToken: boolean;
        readonly type: 'Mining' | 'Farming' | 'EbFarming' | 'SingleToken';
    }
    /** @name BifrostTokenIssuerEvent (153) */
    interface BifrostTokenIssuerEvent extends Enum {
        readonly isAddedToIssueList: boolean;
        readonly asAddedToIssueList: ITuple<[AccountId32, NodePrimitivesCurrencyCurrencyId]>;
        readonly isRemovedFromIssueList: boolean;
        readonly asRemovedFromIssueList: ITuple<[AccountId32, NodePrimitivesCurrencyCurrencyId]>;
        readonly isAddedToTransferList: boolean;
        readonly asAddedToTransferList: ITuple<[AccountId32, NodePrimitivesCurrencyCurrencyId]>;
        readonly isRemovedFromTransferList: boolean;
        readonly asRemovedFromTransferList: ITuple<[AccountId32, NodePrimitivesCurrencyCurrencyId]>;
        readonly isIssued: boolean;
        readonly asIssued: ITuple<[AccountId32, NodePrimitivesCurrencyCurrencyId, u128]>;
        readonly isTransferred: boolean;
        readonly asTransferred: ITuple<[AccountId32, AccountId32, NodePrimitivesCurrencyCurrencyId, u128]>;
        readonly type: 'AddedToIssueList' | 'RemovedFromIssueList' | 'AddedToTransferList' | 'RemovedFromTransferList' | 'Issued' | 'Transferred';
    }
    /** @name BifrostLighteningRedeemEvent (154) */
    interface BifrostLighteningRedeemEvent extends Enum {
        readonly isKsmExchanged: boolean;
        readonly asKsmExchanged: ITuple<[AccountId32, u128]>;
        readonly isKsmAdded: boolean;
        readonly asKsmAdded: ITuple<[AccountId32, u128]>;
        readonly isPriceEdited: boolean;
        readonly asPriceEdited: ITuple<[u128, u128]>;
        readonly isBlockIntervalEdited: boolean;
        readonly asBlockIntervalEdited: ITuple<[u32, u32]>;
        readonly isReleasedPerDayEdited: boolean;
        readonly asReleasedPerDayEdited: ITuple<[u128, u128]>;
        readonly type: 'KsmExchanged' | 'KsmAdded' | 'PriceEdited' | 'BlockIntervalEdited' | 'ReleasedPerDayEdited';
    }
    /** @name BifrostSalpLiteEvent (155) */
    interface BifrostSalpLiteEvent extends Enum {
        readonly isCreated: boolean;
        readonly asCreated: u32;
        readonly isIssued: boolean;
        readonly asIssued: ITuple<[AccountId32, u32, u128, U8aFixed]>;
        readonly isWithdrew: boolean;
        readonly asWithdrew: ITuple<[u32, u128]>;
        readonly isRefunded: boolean;
        readonly asRefunded: ITuple<[AccountId32, u32, u32, u32, u128]>;
        readonly isRedeemed: boolean;
        readonly asRedeemed: ITuple<[AccountId32, u32, u32, u32, u128]>;
        readonly isEdited: boolean;
        readonly asEdited: u32;
        readonly isDissolved: boolean;
        readonly asDissolved: u32;
        readonly isUnlocked: boolean;
        readonly asUnlocked: ITuple<[AccountId32, u32, u128]>;
        readonly isAllUnlocked: boolean;
        readonly asAllUnlocked: u32;
        readonly isFailed: boolean;
        readonly asFailed: u32;
        readonly isSuccess: boolean;
        readonly asSuccess: u32;
        readonly isRetired: boolean;
        readonly asRetired: u32;
        readonly isContinued: boolean;
        readonly asContinued: ITuple<[u32, u32, u32]>;
        readonly isRefundedDissolved: boolean;
        readonly asRefundedDissolved: ITuple<[u32, u32, u32]>;
        readonly type: 'Created' | 'Issued' | 'Withdrew' | 'Refunded' | 'Redeemed' | 'Edited' | 'Dissolved' | 'Unlocked' | 'AllUnlocked' | 'Failed' | 'Success' | 'Retired' | 'Continued' | 'RefundedDissolved';
    }
    /** @name BifrostCallSwitchgearEvent (156) */
    interface BifrostCallSwitchgearEvent extends Enum {
        readonly isTransactionSwitchedoff: boolean;
        readonly asTransactionSwitchedoff: ITuple<[Bytes, Bytes]>;
        readonly isTransactionSwitchedOn: boolean;
        readonly asTransactionSwitchedOn: ITuple<[Bytes, Bytes]>;
        readonly isTransferAccountDisabled: boolean;
        readonly asTransferAccountDisabled: NodePrimitivesCurrencyCurrencyId;
        readonly isTransferAccountEnabled: boolean;
        readonly asTransferAccountEnabled: NodePrimitivesCurrencyCurrencyId;
        readonly type: 'TransactionSwitchedoff' | 'TransactionSwitchedOn' | 'TransferAccountDisabled' | 'TransferAccountEnabled';
    }
    /** @name BifrostVsbondAuctionEvent (157) */
    interface BifrostVsbondAuctionEvent extends Enum {
        readonly isOrderCreated: boolean;
        readonly asOrderCreated: ITuple<[u64, BifrostVsbondAuctionOrderType, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128]>;
        readonly isOrderRevoked: boolean;
        readonly asOrderRevoked: ITuple<[u64, BifrostVsbondAuctionOrderType, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128, u128]>;
        readonly isOrderClinchd: boolean;
        readonly asOrderClinchd: ITuple<[u64, BifrostVsbondAuctionOrderType, AccountId32, AccountId32, NodePrimitivesCurrencyCurrencyId, u128, u128, u128, u128]>;
        readonly isTransactionFeeRateSet: boolean;
        readonly asTransactionFeeRateSet: ITuple<[Permill, Permill]>;
        readonly type: 'OrderCreated' | 'OrderRevoked' | 'OrderClinchd' | 'TransactionFeeRateSet';
    }
    /** @name BifrostVsbondAuctionOrderType (158) */
    interface BifrostVsbondAuctionOrderType extends Enum {
        readonly isSell: boolean;
        readonly isBuy: boolean;
        readonly type: 'Sell' | 'Buy';
    }
    /** @name BifrostAssetRegistryEvent (160) */
    interface BifrostAssetRegistryEvent extends Enum {
        readonly isAssetRegistered: boolean;
        readonly asAssetRegistered: {
            readonly assetId: NodePrimitivesCurrencyAssetIds;
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isAssetUpdated: boolean;
        readonly asAssetUpdated: {
            readonly assetId: NodePrimitivesCurrencyAssetIds;
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isCurrencyIdRegistered: boolean;
        readonly asCurrencyIdRegistered: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isMultiLocationSet: boolean;
        readonly asMultiLocationSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly location: XcmV3MultiLocation;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'AssetRegistered' | 'AssetUpdated' | 'CurrencyIdRegistered' | 'MultiLocationSet';
    }
    /** @name NodePrimitivesCurrencyAssetIds (161) */
    interface NodePrimitivesCurrencyAssetIds extends Enum {
        readonly isForeignAssetId: boolean;
        readonly asForeignAssetId: u32;
        readonly isNativeAssetId: boolean;
        readonly asNativeAssetId: NodePrimitivesCurrencyCurrencyId;
        readonly type: 'ForeignAssetId' | 'NativeAssetId';
    }
    /** @name BifrostAssetRegistryAssetMetadata (162) */
    interface BifrostAssetRegistryAssetMetadata extends Struct {
        readonly name: Bytes;
        readonly symbol: Bytes;
        readonly decimals: u8;
        readonly minimalBalance: u128;
    }
    /** @name BifrostVtokenMintingEvent (163) */
    interface BifrostVtokenMintingEvent extends Enum {
        readonly isMinted: boolean;
        readonly asMinted: {
            readonly address: AccountId32;
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
            readonly vtokenAmount: u128;
            readonly fee: u128;
        } & Struct;
        readonly isRedeemed: boolean;
        readonly asRedeemed: {
            readonly address: AccountId32;
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
            readonly vtokenAmount: u128;
            readonly fee: u128;
        } & Struct;
        readonly isRedeemSuccess: boolean;
        readonly asRedeemSuccess: {
            readonly unlockId: u32;
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly to: AccountId32;
            readonly tokenAmount: u128;
        } & Struct;
        readonly isRebonded: boolean;
        readonly asRebonded: {
            readonly address: AccountId32;
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
            readonly vtokenAmount: u128;
            readonly fee: u128;
        } & Struct;
        readonly isRebondedByUnlockId: boolean;
        readonly asRebondedByUnlockId: {
            readonly address: AccountId32;
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
            readonly vtokenAmount: u128;
            readonly fee: u128;
        } & Struct;
        readonly isUnlockDurationSet: boolean;
        readonly asUnlockDurationSet: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly unlockDuration: NodePrimitivesTimeUnit;
        } & Struct;
        readonly isMinimumMintSet: boolean;
        readonly asMinimumMintSet: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isMinimumRedeemSet: boolean;
        readonly asMinimumRedeemSet: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isSupportRebondTokenAdded: boolean;
        readonly asSupportRebondTokenAdded: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isSupportRebondTokenRemoved: boolean;
        readonly asSupportRebondTokenRemoved: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isFeeSet: boolean;
        readonly asFeeSet: {
            readonly mintFee: Permill;
            readonly redeemFee: Permill;
        } & Struct;
        readonly isHookIterationLimitSet: boolean;
        readonly asHookIterationLimitSet: {
            readonly limit: u32;
        } & Struct;
        readonly isUnlockingTotalSet: boolean;
        readonly asUnlockingTotalSet: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isMinTimeUnitSet: boolean;
        readonly asMinTimeUnitSet: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly timeUnit: NodePrimitivesTimeUnit;
        } & Struct;
        readonly isFastRedeemFailed: boolean;
        readonly asFastRedeemFailed: {
            readonly err: SpRuntimeDispatchError;
        } & Struct;
        readonly type: 'Minted' | 'Redeemed' | 'RedeemSuccess' | 'Rebonded' | 'RebondedByUnlockId' | 'UnlockDurationSet' | 'MinimumMintSet' | 'MinimumRedeemSet' | 'SupportRebondTokenAdded' | 'SupportRebondTokenRemoved' | 'FeeSet' | 'HookIterationLimitSet' | 'UnlockingTotalSet' | 'MinTimeUnitSet' | 'FastRedeemFailed';
    }
    /** @name NodePrimitivesTimeUnit (164) */
    interface NodePrimitivesTimeUnit extends Enum {
        readonly isEra: boolean;
        readonly asEra: Compact<u32>;
        readonly isSlashingSpan: boolean;
        readonly asSlashingSpan: Compact<u32>;
        readonly isRound: boolean;
        readonly asRound: Compact<u32>;
        readonly isKblock: boolean;
        readonly asKblock: Compact<u32>;
        readonly isHour: boolean;
        readonly asHour: Compact<u32>;
        readonly type: 'Era' | 'SlashingSpan' | 'Round' | 'Kblock' | 'Hour';
    }
    /** @name BifrostSlpEvent (165) */
    interface BifrostSlpEvent extends Enum {
        readonly isDelegatorInitialized: boolean;
        readonly asDelegatorInitialized: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isDelegatorBonded: boolean;
        readonly asDelegatorBonded: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly bondedAmount: Compact<u128>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
            readonly validator: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isDelegatorBondExtra: boolean;
        readonly asDelegatorBondExtra: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly extraBondedAmount: Compact<u128>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
            readonly validator: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isDelegatorUnbond: boolean;
        readonly asDelegatorUnbond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly unbondAmount: Compact<u128>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
            readonly validator: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isDelegatorUnbondAll: boolean;
        readonly asDelegatorUnbondAll: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
        } & Struct;
        readonly isDelegatorRebond: boolean;
        readonly asDelegatorRebond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly rebondAmount: Option<u128>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
            readonly validator: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isDelegated: boolean;
        readonly asDelegated: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly targets: Option<Vec<XcmV3MultiLocation>>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
        } & Struct;
        readonly isUndelegated: boolean;
        readonly asUndelegated: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly targets: Vec<XcmV3MultiLocation>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
        } & Struct;
        readonly isPayout: boolean;
        readonly asPayout: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validator: XcmV3MultiLocation;
            readonly timeUnit: Option<NodePrimitivesTimeUnit>;
        } & Struct;
        readonly isLiquidize: boolean;
        readonly asLiquidize: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly timeUnit: Option<NodePrimitivesTimeUnit>;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
            readonly amount: Option<u128>;
        } & Struct;
        readonly isChill: boolean;
        readonly asChill: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
            readonly queryId: Compact<u64>;
            readonly queryIdHash: H256;
        } & Struct;
        readonly isTransferBack: boolean;
        readonly asTransferBack: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: XcmV3MultiLocation;
            readonly to: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferTo: boolean;
        readonly asTransferTo: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: XcmV3MultiLocation;
            readonly to: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isConvertAsset: boolean;
        readonly asConvertAsset: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isDelegatorAdded: boolean;
        readonly asDelegatorAdded: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly index: Compact<u16>;
            readonly delegatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isDelegatorRemoved: boolean;
        readonly asDelegatorRemoved: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isValidatorsAdded: boolean;
        readonly asValidatorsAdded: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isValidatorsRemoved: boolean;
        readonly asValidatorsRemoved: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isRefund: boolean;
        readonly asRefund: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly timeUnit: NodePrimitivesTimeUnit;
            readonly index: Compact<u32>;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isFundMoveFromExitToEntrance: boolean;
        readonly asFundMoveFromExitToEntrance: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTimeUnitUpdated: boolean;
        readonly asTimeUnitUpdated: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly old: Option<NodePrimitivesTimeUnit>;
            readonly new_: NodePrimitivesTimeUnit;
        } & Struct;
        readonly isPoolTokenIncreased: boolean;
        readonly asPoolTokenIncreased: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isHostingFeeCharged: boolean;
        readonly asHostingFeeCharged: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isPoolTokenDecreased: boolean;
        readonly asPoolTokenDecreased: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isFeeSupplemented: boolean;
        readonly asFeeSupplemented: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
            readonly from: XcmV3MultiLocation;
            readonly to: XcmV3MultiLocation;
        } & Struct;
        readonly isValidatorsByDelegatorSet: boolean;
        readonly asValidatorsByDelegatorSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorsList: Vec<XcmV3MultiLocation>;
            readonly delegatorId: XcmV3MultiLocation;
        } & Struct;
        readonly isXcmDestWeightAndFeeSet: boolean;
        readonly asXcmDestWeightAndFeeSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly operation: BifrostSlpPrimitivesXcmOperation;
            readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
        } & Struct;
        readonly isOperateOriginSet: boolean;
        readonly asOperateOriginSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly operator: Option<AccountId32>;
        } & Struct;
        readonly isFeeSourceSet: boolean;
        readonly asFeeSourceSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly whoAndFee: Option<ITuple<[XcmV3MultiLocation, u128]>>;
        } & Struct;
        readonly isDelegatorLedgerSet: boolean;
        readonly asDelegatorLedgerSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegator: XcmV3MultiLocation;
            readonly ledger: Option<BifrostSlpPrimitivesLedger>;
        } & Struct;
        readonly isDelegatorLedgerQueryResponseConfirmed: boolean;
        readonly asDelegatorLedgerQueryResponseConfirmed: {
            readonly queryId: Compact<u64>;
            readonly entry: BifrostSlpPrimitivesLedgerUpdateEntry;
        } & Struct;
        readonly isDelegatorLedgerQueryResponseFailed: boolean;
        readonly asDelegatorLedgerQueryResponseFailed: {
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isValidatorsByDelegatorQueryResponseConfirmed: boolean;
        readonly asValidatorsByDelegatorQueryResponseConfirmed: {
            readonly queryId: Compact<u64>;
            readonly entry: BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry;
        } & Struct;
        readonly isValidatorsByDelegatorQueryResponseFailed: boolean;
        readonly asValidatorsByDelegatorQueryResponseFailed: {
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isMinimumsMaximumsSet: boolean;
        readonly asMinimumsMaximumsSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly minimumsAndMaximums: Option<BifrostSlpPrimitivesMinimumsMaximums>;
        } & Struct;
        readonly isCurrencyDelaysSet: boolean;
        readonly asCurrencyDelaysSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delays: Option<BifrostSlpPrimitivesDelays>;
        } & Struct;
        readonly isHostingFeesSet: boolean;
        readonly asHostingFeesSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly fees: Option<ITuple<[Permill, XcmV3MultiLocation]>>;
        } & Struct;
        readonly isCurrencyTuneExchangeRateLimitSet: boolean;
        readonly asCurrencyTuneExchangeRateLimitSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly tuneExchangeRateLimit: Option<ITuple<[u32, Permill]>>;
        } & Struct;
        readonly isOngoingTimeUnitUpdateIntervalSet: boolean;
        readonly asOngoingTimeUnitUpdateIntervalSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly interval: Option<u32>;
        } & Struct;
        readonly isSupplementFeeAccountWhitelistAdded: boolean;
        readonly asSupplementFeeAccountWhitelistAdded: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isSupplementFeeAccountWhitelistRemoved: boolean;
        readonly asSupplementFeeAccountWhitelistRemoved: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isValidatorsReset: boolean;
        readonly asValidatorsReset: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorList: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isValidatorBoostListSet: boolean;
        readonly asValidatorBoostListSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorBoostList: Vec<ITuple<[XcmV3MultiLocation, u32]>>;
        } & Struct;
        readonly isValidatorBoostListAdded: boolean;
        readonly asValidatorBoostListAdded: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly dueBlockNumber: u32;
        } & Struct;
        readonly isRemovedFromBoostList: boolean;
        readonly asRemovedFromBoostList: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'DelegatorInitialized' | 'DelegatorBonded' | 'DelegatorBondExtra' | 'DelegatorUnbond' | 'DelegatorUnbondAll' | 'DelegatorRebond' | 'Delegated' | 'Undelegated' | 'Payout' | 'Liquidize' | 'Chill' | 'TransferBack' | 'TransferTo' | 'ConvertAsset' | 'DelegatorAdded' | 'DelegatorRemoved' | 'ValidatorsAdded' | 'ValidatorsRemoved' | 'Refund' | 'FundMoveFromExitToEntrance' | 'TimeUnitUpdated' | 'PoolTokenIncreased' | 'HostingFeeCharged' | 'PoolTokenDecreased' | 'FeeSupplemented' | 'ValidatorsByDelegatorSet' | 'XcmDestWeightAndFeeSet' | 'OperateOriginSet' | 'FeeSourceSet' | 'DelegatorLedgerSet' | 'DelegatorLedgerQueryResponseConfirmed' | 'DelegatorLedgerQueryResponseFailed' | 'ValidatorsByDelegatorQueryResponseConfirmed' | 'ValidatorsByDelegatorQueryResponseFailed' | 'MinimumsMaximumsSet' | 'CurrencyDelaysSet' | 'HostingFeesSet' | 'CurrencyTuneExchangeRateLimitSet' | 'OngoingTimeUnitUpdateIntervalSet' | 'SupplementFeeAccountWhitelistAdded' | 'SupplementFeeAccountWhitelistRemoved' | 'ValidatorsReset' | 'ValidatorBoostListSet' | 'ValidatorBoostListAdded' | 'RemovedFromBoostList';
    }
    /** @name BifrostSlpPrimitivesXcmOperation (171) */
    interface BifrostSlpPrimitivesXcmOperation extends Enum {
        readonly isXtokensTransfer: boolean;
        readonly isBond: boolean;
        readonly isWithdrawUnbonded: boolean;
        readonly isBondExtra: boolean;
        readonly isUnbond: boolean;
        readonly isRebond: boolean;
        readonly isDelegate: boolean;
        readonly isPayout: boolean;
        readonly isLiquidize: boolean;
        readonly isTransferBack: boolean;
        readonly isTransferTo: boolean;
        readonly isChill: boolean;
        readonly isUndelegate: boolean;
        readonly isCancelLeave: boolean;
        readonly isXtokensTransferBack: boolean;
        readonly isExecuteLeave: boolean;
        readonly isConvertAsset: boolean;
        readonly type: 'XtokensTransfer' | 'Bond' | 'WithdrawUnbonded' | 'BondExtra' | 'Unbond' | 'Rebond' | 'Delegate' | 'Payout' | 'Liquidize' | 'TransferBack' | 'TransferTo' | 'Chill' | 'Undelegate' | 'CancelLeave' | 'XtokensTransferBack' | 'ExecuteLeave' | 'ConvertAsset';
    }
    /** @name BifrostSlpPrimitivesLedger (178) */
    interface BifrostSlpPrimitivesLedger extends Enum {
        readonly isSubstrate: boolean;
        readonly asSubstrate: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger;
        readonly isMoonbeam: boolean;
        readonly asMoonbeam: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger;
        readonly isParachainStaking: boolean;
        readonly asParachainStaking: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger;
        readonly isFilecoin: boolean;
        readonly asFilecoin: BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger;
        readonly isPhala: boolean;
        readonly asPhala: BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger;
        readonly type: 'Substrate' | 'Moonbeam' | 'ParachainStaking' | 'Filecoin' | 'Phala';
    }
    /** @name BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger (179) */
    interface BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger extends Struct {
        readonly account: XcmV3MultiLocation;
        readonly total: Compact<u128>;
        readonly active: Compact<u128>;
        readonly unlocking: Vec<BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk>;
    }
    /** @name BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk (181) */
    interface BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk extends Struct {
        readonly value: Compact<u128>;
        readonly unlockTime: NodePrimitivesTimeUnit;
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger (182) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger extends Struct {
        readonly account: XcmV3MultiLocation;
        readonly delegations: BTreeMap<XcmV3MultiLocation, u128>;
        readonly total: u128;
        readonly lessTotal: u128;
        readonly requests: Vec<BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest>;
        readonly requestBriefs: BTreeMap<XcmV3MultiLocation, ITuple<[NodePrimitivesTimeUnit, u128]>>;
        readonly status: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus;
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest (186) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest extends Struct {
        readonly validator: XcmV3MultiLocation;
        readonly whenExecutable: NodePrimitivesTimeUnit;
        readonly action: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction;
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction (187) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction extends Enum {
        readonly isRevoke: boolean;
        readonly asRevoke: u128;
        readonly isDecrease: boolean;
        readonly asDecrease: u128;
        readonly type: 'Revoke' | 'Decrease';
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus (192) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus extends Enum {
        readonly isActive: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: NodePrimitivesTimeUnit;
        readonly type: 'Active' | 'Leaving';
    }
    /** @name BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger (193) */
    interface BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger extends Struct {
        readonly account: XcmV3MultiLocation;
        readonly initialPledge: Compact<u128>;
    }
    /** @name BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger (194) */
    interface BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger extends Struct {
        readonly account: XcmV3MultiLocation;
        readonly activeShares: Compact<u128>;
        readonly unlockingShares: Compact<u128>;
        readonly unlockingTimeUnit: Option<NodePrimitivesTimeUnit>;
        readonly bondedPoolId: Option<u64>;
        readonly bondedPoolCollectionId: Option<u32>;
    }
    /** @name BifrostSlpPrimitivesLedgerUpdateEntry (197) */
    interface BifrostSlpPrimitivesLedgerUpdateEntry extends Enum {
        readonly isSubstrate: boolean;
        readonly asSubstrate: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry;
        readonly isMoonbeam: boolean;
        readonly asMoonbeam: BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry;
        readonly isParachainStaking: boolean;
        readonly asParachainStaking: BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry;
        readonly type: 'Substrate' | 'Moonbeam' | 'ParachainStaking';
    }
    /** @name BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry (198) */
    interface BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry extends Struct {
        readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        readonly delegatorId: XcmV3MultiLocation;
        readonly updateOperation: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation;
        readonly amount: Compact<u128>;
        readonly unlockTime: Option<NodePrimitivesTimeUnit>;
    }
    /** @name BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation (199) */
    interface BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation extends Enum {
        readonly isBond: boolean;
        readonly isUnlock: boolean;
        readonly isRebond: boolean;
        readonly isLiquidize: boolean;
        readonly type: 'Bond' | 'Unlock' | 'Rebond' | 'Liquidize';
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry (200) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry extends Struct {
        readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        readonly delegatorId: XcmV3MultiLocation;
        readonly validatorId: Option<XcmV3MultiLocation>;
        readonly updateOperation: BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation;
        readonly amount: Compact<u128>;
        readonly unlockTime: Option<NodePrimitivesTimeUnit>;
    }
    /** @name BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation (201) */
    interface BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation extends Enum {
        readonly isBond: boolean;
        readonly isBondLess: boolean;
        readonly isRevoke: boolean;
        readonly isCancelRequest: boolean;
        readonly isLeaveDelegator: boolean;
        readonly isCancelLeave: boolean;
        readonly isExecuteLeave: boolean;
        readonly isExecuteRequest: boolean;
        readonly type: 'Bond' | 'BondLess' | 'Revoke' | 'CancelRequest' | 'LeaveDelegator' | 'CancelLeave' | 'ExecuteLeave' | 'ExecuteRequest';
    }
    /** @name BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry (202) */
    interface BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry extends Enum {
        readonly isSubstrate: boolean;
        readonly asSubstrate: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry;
        readonly type: 'Substrate';
    }
    /** @name BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry (203) */
    interface BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry extends Struct {
        readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        readonly delegatorId: XcmV3MultiLocation;
        readonly validators: Vec<XcmV3MultiLocation>;
    }
    /** @name BifrostSlpPrimitivesMinimumsMaximums (205) */
    interface BifrostSlpPrimitivesMinimumsMaximums extends Struct {
        readonly delegatorBondedMinimum: Compact<u128>;
        readonly bondExtraMinimum: Compact<u128>;
        readonly unbondMinimum: Compact<u128>;
        readonly rebondMinimum: Compact<u128>;
        readonly unbondRecordMaximum: Compact<u32>;
        readonly validatorsBackMaximum: Compact<u32>;
        readonly delegatorActiveStakingMaximum: Compact<u128>;
        readonly validatorsRewardMaximum: Compact<u32>;
        readonly delegationAmountMinimum: Compact<u128>;
        readonly delegatorsMaximum: Compact<u16>;
        readonly validatorsMaximum: Compact<u16>;
    }
    /** @name BifrostSlpPrimitivesDelays (207) */
    interface BifrostSlpPrimitivesDelays extends Struct {
        readonly unlockDelay: NodePrimitivesTimeUnit;
        readonly leaveDelegatorsDelay: NodePrimitivesTimeUnit;
    }
    /** @name XcmInterfaceEvent (214) */
    interface XcmInterfaceEvent extends Enum {
        readonly isXcmDestWeightUpdated: boolean;
        readonly asXcmDestWeightUpdated: ITuple<[XcmInterfaceXcmInterfaceOperation, SpWeightsWeightV2Weight]>;
        readonly isXcmFeeUpdated: boolean;
        readonly asXcmFeeUpdated: ITuple<[XcmInterfaceXcmInterfaceOperation, u128]>;
        readonly isTransferredStatemineMultiAsset: boolean;
        readonly asTransferredStatemineMultiAsset: ITuple<[AccountId32, u128]>;
        readonly type: 'XcmDestWeightUpdated' | 'XcmFeeUpdated' | 'TransferredStatemineMultiAsset';
    }
    /** @name XcmInterfaceXcmInterfaceOperation (215) */
    interface XcmInterfaceXcmInterfaceOperation extends Enum {
        readonly isUmpContributeTransact: boolean;
        readonly isStatemineTransfer: boolean;
        readonly type: 'UmpContributeTransact' | 'StatemineTransfer';
    }
    /** @name BifrostVstokenConversionEvent (216) */
    interface BifrostVstokenConversionEvent extends Enum {
        readonly isVsbondConvertToVsksm: boolean;
        readonly asVsbondConvertToVsksm: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vsksmAmount: u128;
        } & Struct;
        readonly isVsksmConvertToVsbond: boolean;
        readonly asVsksmConvertToVsbond: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vsksmAmount: u128;
        } & Struct;
        readonly isVsbondConvertToVsdot: boolean;
        readonly asVsbondConvertToVsdot: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vsdotAmount: u128;
        } & Struct;
        readonly isVsdotConvertToVsbond: boolean;
        readonly asVsdotConvertToVsbond: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vsdotAmount: u128;
        } & Struct;
        readonly isVsbondConvertToVstoken: boolean;
        readonly asVsbondConvertToVstoken: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vstokenAmount: u128;
        } & Struct;
        readonly isVstokenConvertToVsbond: boolean;
        readonly asVstokenConvertToVsbond: {
            readonly address: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly vstokenAmount: u128;
        } & Struct;
        readonly isExchangeFeeSet: boolean;
        readonly asExchangeFeeSet: {
            readonly exchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee;
        } & Struct;
        readonly isExchangeRateSet: boolean;
        readonly asExchangeRateSet: {
            readonly lease: i32;
            readonly exchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate;
        } & Struct;
        readonly isRelaychainLeaseSet: boolean;
        readonly asRelaychainLeaseSet: {
            readonly lease: u32;
        } & Struct;
        readonly type: 'VsbondConvertToVsksm' | 'VsksmConvertToVsbond' | 'VsbondConvertToVsdot' | 'VsdotConvertToVsbond' | 'VsbondConvertToVstoken' | 'VstokenConvertToVsbond' | 'ExchangeFeeSet' | 'ExchangeRateSet' | 'RelaychainLeaseSet';
    }
    /** @name BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee (217) */
    interface BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee extends Struct {
        readonly vstokenExchangeFee: u128;
        readonly vsbondExchangeFeeOfVstoken: u128;
    }
    /** @name BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate (219) */
    interface BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate extends Struct {
        readonly vsbondConvertToVstoken: Percent;
        readonly vstokenConvertToVsbond: Percent;
    }
    /** @name BifrostFarmingEvent (220) */
    interface BifrostFarmingEvent extends Enum {
        readonly isFarmingPoolCreated: boolean;
        readonly asFarmingPoolCreated: {
            readonly pid: u32;
        } & Struct;
        readonly isFarmingPoolReset: boolean;
        readonly asFarmingPoolReset: {
            readonly pid: u32;
        } & Struct;
        readonly isFarmingPoolClosed: boolean;
        readonly asFarmingPoolClosed: {
            readonly pid: u32;
        } & Struct;
        readonly isFarmingPoolKilled: boolean;
        readonly asFarmingPoolKilled: {
            readonly pid: u32;
        } & Struct;
        readonly isFarmingPoolEdited: boolean;
        readonly asFarmingPoolEdited: {
            readonly pid: u32;
        } & Struct;
        readonly isCharged: boolean;
        readonly asCharged: {
            readonly who: AccountId32;
            readonly pid: u32;
            readonly rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
        } & Struct;
        readonly isDeposited: boolean;
        readonly asDeposited: {
            readonly who: AccountId32;
            readonly pid: u32;
            readonly addValue: u128;
            readonly gaugeInfo: Option<ITuple<[u128, u32]>>;
        } & Struct;
        readonly isWithdrawn: boolean;
        readonly asWithdrawn: {
            readonly who: AccountId32;
            readonly pid: u32;
            readonly removeValue: Option<u128>;
        } & Struct;
        readonly isClaimed: boolean;
        readonly asClaimed: {
            readonly who: AccountId32;
            readonly pid: u32;
        } & Struct;
        readonly isWithdrawClaimed: boolean;
        readonly asWithdrawClaimed: {
            readonly who: AccountId32;
            readonly pid: u32;
        } & Struct;
        readonly isGaugeWithdrawn: boolean;
        readonly asGaugeWithdrawn: {
            readonly who: AccountId32;
            readonly gid: u32;
        } & Struct;
        readonly isAllForceGaugeClaimed: boolean;
        readonly asAllForceGaugeClaimed: {
            readonly gid: u32;
        } & Struct;
        readonly isPartiallyForceGaugeClaimed: boolean;
        readonly asPartiallyForceGaugeClaimed: {
            readonly gid: u32;
        } & Struct;
        readonly isAllRetired: boolean;
        readonly asAllRetired: {
            readonly pid: u32;
        } & Struct;
        readonly isPartiallyRetired: boolean;
        readonly asPartiallyRetired: {
            readonly pid: u32;
        } & Struct;
        readonly isRetireLimitSet: boolean;
        readonly asRetireLimitSet: {
            readonly limit: u32;
        } & Struct;
        readonly isRoundEnd: boolean;
        readonly asRoundEnd: {
            readonly totalVotes: u128;
            readonly startRound: u32;
            readonly endRound: u32;
        } & Struct;
        readonly isRoundStartError: boolean;
        readonly asRoundStartError: {
            readonly info: SpRuntimeDispatchError;
        } & Struct;
        readonly isRoundStart: boolean;
        readonly asRoundStart: {
            readonly roundLength: u32;
        } & Struct;
        readonly isVoted: boolean;
        readonly asVoted: {
            readonly who: AccountId32;
            readonly voteList: Vec<ITuple<[u32, Percent]>>;
        } & Struct;
        readonly isBoostCharged: boolean;
        readonly asBoostCharged: {
            readonly who: AccountId32;
            readonly rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
        } & Struct;
        readonly type: 'FarmingPoolCreated' | 'FarmingPoolReset' | 'FarmingPoolClosed' | 'FarmingPoolKilled' | 'FarmingPoolEdited' | 'Charged' | 'Deposited' | 'Withdrawn' | 'Claimed' | 'WithdrawClaimed' | 'GaugeWithdrawn' | 'AllForceGaugeClaimed' | 'PartiallyForceGaugeClaimed' | 'AllRetired' | 'PartiallyRetired' | 'RetireLimitSet' | 'RoundEnd' | 'RoundStartError' | 'RoundStart' | 'Voted' | 'BoostCharged';
    }
    /** @name BifrostSystemStakingEvent (225) */
    interface BifrostSystemStakingEvent extends Enum {
        readonly isNewRound: boolean;
        readonly asNewRound: {
            readonly current: u32;
            readonly first: u32;
            readonly length: u32;
        } & Struct;
        readonly isTokenConfigChanged: boolean;
        readonly asTokenConfigChanged: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly execDelay: u32;
            readonly systemStakableFarmingRate: Permill;
            readonly addOrSub: bool;
            readonly systemStakableBase: u128;
            readonly farmingPoolids: Vec<u32>;
            readonly lptokenRates: Vec<Perbill>;
        } & Struct;
        readonly isDepositFailed: boolean;
        readonly asDepositFailed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isMintSuccess: boolean;
        readonly asMintSuccess: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isMintFailed: boolean;
        readonly asMintFailed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isWithdrawSuccess: boolean;
        readonly asWithdrawSuccess: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isWithdrawFailed: boolean;
        readonly asWithdrawFailed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isRedeemed: boolean;
        readonly asRedeemed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isRedeemFailed: boolean;
        readonly asRedeemFailed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly farmingStakingAmount: u128;
            readonly systemStakableAmount: u128;
            readonly systemShadowAmount: u128;
            readonly pendingRedeemAmount: u128;
        } & Struct;
        readonly isVtokenNotFound: boolean;
        readonly asVtokenNotFound: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isTokenInfoRefreshed: boolean;
        readonly asTokenInfoRefreshed: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isPayout: boolean;
        readonly asPayout: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly vtoken: NodePrimitivesCurrencyCurrencyId;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly free: u128;
            readonly vfree: u128;
            readonly shadow: u128;
        } & Struct;
        readonly type: 'NewRound' | 'TokenConfigChanged' | 'DepositFailed' | 'MintSuccess' | 'MintFailed' | 'WithdrawSuccess' | 'WithdrawFailed' | 'Redeemed' | 'RedeemFailed' | 'VtokenNotFound' | 'TokenInfoRefreshed' | 'Payout';
    }
    /** @name BifrostSystemMakerEvent (228) */
    interface BifrostSystemMakerEvent extends Enum {
        readonly isCharged: boolean;
        readonly asCharged: {
            readonly who: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly value: u128;
        } & Struct;
        readonly isConfigSet: boolean;
        readonly asConfigSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly info: BifrostSystemMakerInfo;
        } & Struct;
        readonly isClosed: boolean;
        readonly asClosed: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isPaid: boolean;
        readonly asPaid: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly value: u128;
        } & Struct;
        readonly isRedeemFailed: boolean;
        readonly asRedeemFailed: {
            readonly vcurrencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Charged' | 'ConfigSet' | 'Closed' | 'Paid' | 'RedeemFailed';
    }
    /** @name BifrostSystemMakerInfo (229) */
    interface BifrostSystemMakerInfo extends Struct {
        readonly vcurrencyId: NodePrimitivesCurrencyCurrencyId;
        readonly annualization: u32;
        readonly granularity: u128;
        readonly minimumRedeem: u128;
    }
    /** @name BifrostFeeShareEvent (230) */
    interface BifrostFeeShareEvent extends Enum {
        readonly isCreated: boolean;
        readonly asCreated: {
            readonly info: BifrostFeeShareInfo;
        } & Struct;
        readonly isEdited: boolean;
        readonly asEdited: {
            readonly info: BifrostFeeShareInfo;
        } & Struct;
        readonly isEraLengthSet: boolean;
        readonly asEraLengthSet: {
            readonly eraLength: u32;
            readonly nextEra: u32;
        } & Struct;
        readonly isExecuted: boolean;
        readonly asExecuted: {
            readonly distributionId: u32;
        } & Struct;
        readonly isDeleted: boolean;
        readonly asDeleted: {
            readonly distributionId: u32;
        } & Struct;
        readonly isExecuteFailed: boolean;
        readonly asExecuteFailed: {
            readonly distributionId: u32;
            readonly info: BifrostFeeShareInfo;
            readonly nextEra: u32;
        } & Struct;
        readonly type: 'Created' | 'Edited' | 'EraLengthSet' | 'Executed' | 'Deleted' | 'ExecuteFailed';
    }
    /** @name BifrostFeeShareInfo (231) */
    interface BifrostFeeShareInfo extends Struct {
        readonly receivingAddress: AccountId32;
        readonly tokenType: Vec<NodePrimitivesCurrencyCurrencyId>;
        readonly tokensProportion: BTreeMap<AccountId32, Perbill>;
        readonly ifAuto: bool;
    }
    /** @name BifrostCrossInOutEvent (235) */
    interface BifrostCrossInOutEvent extends Enum {
        readonly isCrossedOut: boolean;
        readonly asCrossedOut: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly crosser: AccountId32;
            readonly location: XcmV2MultiLocation;
            readonly amount: u128;
        } & Struct;
        readonly isCrossedIn: boolean;
        readonly asCrossedIn: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly dest: AccountId32;
            readonly location: XcmV2MultiLocation;
            readonly amount: u128;
            readonly remark: Option<Bytes>;
        } & Struct;
        readonly isCurrencyRegistered: boolean;
        readonly asCurrencyRegistered: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isCurrencyDeregistered: boolean;
        readonly asCurrencyDeregistered: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isAddedToIssueList: boolean;
        readonly asAddedToIssueList: {
            readonly account: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isRemovedFromIssueList: boolean;
        readonly asRemovedFromIssueList: {
            readonly account: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isLinkedAccountRegistered: boolean;
        readonly asLinkedAccountRegistered: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly foreignLocation: XcmV2MultiLocation;
        } & Struct;
        readonly isAddedToRegisterList: boolean;
        readonly asAddedToRegisterList: {
            readonly account: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isRemovedFromRegisterList: boolean;
        readonly asRemovedFromRegisterList: {
            readonly account: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isCrossingMinimumAmountSet: boolean;
        readonly asCrossingMinimumAmountSet: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly crossInMinimum: u128;
            readonly crossOutMinimum: u128;
        } & Struct;
        readonly type: 'CrossedOut' | 'CrossedIn' | 'CurrencyRegistered' | 'CurrencyDeregistered' | 'AddedToIssueList' | 'RemovedFromIssueList' | 'LinkedAccountRegistered' | 'AddedToRegisterList' | 'RemovedFromRegisterList' | 'CrossingMinimumAmountSet';
    }
    /** @name FrameSystemPhase (237) */
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
    }
    /** @name FrameSystemLastRuntimeUpgradeInfo (240) */
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }
    /** @name FrameSystemCall (242) */
    interface FrameSystemCall extends Enum {
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
    }
    /** @name FrameSystemLimitsBlockWeights (246) */
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: SpWeightsWeightV2Weight;
        readonly maxBlock: SpWeightsWeightV2Weight;
        readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    }
    /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (247) */
    interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }
    /** @name FrameSystemLimitsWeightsPerClass (248) */
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: SpWeightsWeightV2Weight;
        readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
        readonly maxTotal: Option<SpWeightsWeightV2Weight>;
        readonly reserved: Option<SpWeightsWeightV2Weight>;
    }
    /** @name FrameSystemLimitsBlockLength (250) */
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportDispatchPerDispatchClassU32;
    }
    /** @name FrameSupportDispatchPerDispatchClassU32 (251) */
    interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }
    /** @name SpWeightsRuntimeDbWeight (252) */
    interface SpWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }
    /** @name SpVersionRuntimeVersion (253) */
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
        readonly stateVersion: u8;
    }
    /** @name FrameSystemError (257) */
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
    }
    /** @name PalletTimestampCall (258) */
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: 'Set';
    }
    /** @name PalletIndicesCall (260) */
    interface PalletIndicesCall extends Enum {
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly index: u32;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly new_: MultiAddress;
            readonly index: u32;
        } & Struct;
        readonly isFree: boolean;
        readonly asFree: {
            readonly index: u32;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly new_: MultiAddress;
            readonly index: u32;
            readonly freeze: bool;
        } & Struct;
        readonly isFreeze: boolean;
        readonly asFreeze: {
            readonly index: u32;
        } & Struct;
        readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
    }
    /** @name PalletIndicesError (262) */
    interface PalletIndicesError extends Enum {
        readonly isNotAssigned: boolean;
        readonly isNotOwner: boolean;
        readonly isInUse: boolean;
        readonly isNotTransfer: boolean;
        readonly isPermanent: boolean;
        readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
    }
    /** @name PolkadotPrimitivesV2PersistedValidationData (263) */
    interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
        readonly parentHead: Bytes;
        readonly relayParentNumber: u32;
        readonly relayParentStorageRoot: H256;
        readonly maxPovSize: u32;
    }
    /** @name PolkadotPrimitivesV2UpgradeRestriction (266) */
    interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
        readonly isPresent: boolean;
        readonly type: 'Present';
    }
    /** @name SpTrieStorageProof (267) */
    interface SpTrieStorageProof extends Struct {
        readonly trieNodes: BTreeSet<Bytes>;
    }
    /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (269) */
    interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
        readonly dmqMqcHead: H256;
        readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
        readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
        readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    }
    /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (272) */
    interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
        readonly maxMessageSize: u32;
        readonly msgCount: u32;
        readonly totalSize: u32;
        readonly mqcHead: Option<H256>;
    }
    /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (274) */
    interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
        readonly maxCodeSize: u32;
        readonly maxHeadDataSize: u32;
        readonly maxUpwardQueueCount: u32;
        readonly maxUpwardQueueSize: u32;
        readonly maxUpwardMessageSize: u32;
        readonly maxUpwardMessageNumPerCandidate: u32;
        readonly hrmpMaxMessageNumPerCandidate: u32;
        readonly validationUpgradeCooldown: u32;
        readonly validationUpgradeDelay: u32;
    }
    /** @name PolkadotCorePrimitivesOutboundHrmpMessage (280) */
    interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
        readonly recipient: u32;
        readonly data: Bytes;
    }
    /** @name CumulusPalletParachainSystemCall (281) */
    interface CumulusPalletParachainSystemCall extends Enum {
        readonly isSetValidationData: boolean;
        readonly asSetValidationData: {
            readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
        } & Struct;
        readonly isSudoSendUpwardMessage: boolean;
        readonly asSudoSendUpwardMessage: {
            readonly message: Bytes;
        } & Struct;
        readonly isAuthorizeUpgrade: boolean;
        readonly asAuthorizeUpgrade: {
            readonly codeHash: H256;
        } & Struct;
        readonly isEnactAuthorizedUpgrade: boolean;
        readonly asEnactAuthorizedUpgrade: {
            readonly code: Bytes;
        } & Struct;
        readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
    }
    /** @name CumulusPrimitivesParachainInherentParachainInherentData (282) */
    interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
        readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
        readonly relayChainState: SpTrieStorageProof;
        readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
        readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
    }
    /** @name PolkadotCorePrimitivesInboundDownwardMessage (284) */
    interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
        readonly sentAt: u32;
        readonly msg: Bytes;
    }
    /** @name PolkadotCorePrimitivesInboundHrmpMessage (287) */
    interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
        readonly sentAt: u32;
        readonly data: Bytes;
    }
    /** @name CumulusPalletParachainSystemError (290) */
    interface CumulusPalletParachainSystemError extends Enum {
        readonly isOverlappingUpgrades: boolean;
        readonly isProhibitedByPolkadot: boolean;
        readonly isTooBig: boolean;
        readonly isValidationDataNotAvailable: boolean;
        readonly isHostConfigurationNotAvailable: boolean;
        readonly isNotScheduled: boolean;
        readonly isNothingAuthorized: boolean;
        readonly isUnauthorized: boolean;
        readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
    }
    /** @name PalletBalancesBalanceLock (292) */
    interface PalletBalancesBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
        readonly reasons: PalletBalancesReasons;
    }
    /** @name PalletBalancesReasons (293) */
    interface PalletBalancesReasons extends Enum {
        readonly isFee: boolean;
        readonly isMisc: boolean;
        readonly isAll: boolean;
        readonly type: 'Fee' | 'Misc' | 'All';
    }
    /** @name PalletBalancesReserveData (296) */
    interface PalletBalancesReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name PalletBalancesCall (298) */
    interface PalletBalancesCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly keepAlive: bool;
        } & Struct;
        readonly isForceUnreserve: boolean;
        readonly asForceUnreserve: {
            readonly who: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
    }
    /** @name PalletBalancesError (299) */
    interface PalletBalancesError extends Enum {
        readonly isVestingBalance: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
    }
    /** @name PalletTransactionPaymentReleases (301) */
    interface PalletTransactionPaymentReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: 'V1Ancient' | 'V2';
    }
    /** @name BifrostKusamaRuntimeSessionKeys (305) */
    interface BifrostKusamaRuntimeSessionKeys extends Struct {
        readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    }
    /** @name SpConsensusAuraSr25519AppSr25519Public (306) */
    interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {
    }
    /** @name SpCoreSr25519Public (307) */
    interface SpCoreSr25519Public extends U8aFixed {
    }
    /** @name SpCoreCryptoKeyTypeId (309) */
    interface SpCoreCryptoKeyTypeId extends U8aFixed {
    }
    /** @name PalletSessionCall (310) */
    interface PalletSessionCall extends Enum {
        readonly isSetKeys: boolean;
        readonly asSetKeys: {
            readonly keys_: BifrostKusamaRuntimeSessionKeys;
            readonly proof: Bytes;
        } & Struct;
        readonly isPurgeKeys: boolean;
        readonly type: 'SetKeys' | 'PurgeKeys';
    }
    /** @name PalletSessionError (311) */
    interface PalletSessionError extends Enum {
        readonly isInvalidProof: boolean;
        readonly isNoAssociatedValidatorId: boolean;
        readonly isDuplicatedKey: boolean;
        readonly isNoKeys: boolean;
        readonly isNoAccount: boolean;
        readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
    }
    /** @name ParachainStakingParachainBondConfig (315) */
    interface ParachainStakingParachainBondConfig extends Struct {
        readonly account: AccountId32;
        readonly percent: Percent;
        readonly paymentInRound: u128;
    }
    /** @name ParachainStakingRoundInfo (316) */
    interface ParachainStakingRoundInfo extends Struct {
        readonly current: u32;
        readonly first: u32;
        readonly length: u32;
    }
    /** @name ParachainStakingDelegator (317) */
    interface ParachainStakingDelegator extends Struct {
        readonly id: AccountId32;
        readonly delegations: ParachainStakingSetOrderedSet;
        readonly total: u128;
        readonly lessTotal: u128;
        readonly status: ParachainStakingDelegatorStatus;
    }
    /** @name ParachainStakingSetOrderedSet (318) */
    interface ParachainStakingSetOrderedSet extends Vec<ParachainStakingBond> {
    }
    /** @name ParachainStakingBond (319) */
    interface ParachainStakingBond extends Struct {
        readonly owner: AccountId32;
        readonly amount: u128;
    }
    /** @name ParachainStakingDelegatorStatus (321) */
    interface ParachainStakingDelegatorStatus extends Enum {
        readonly isActive: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: u32;
        readonly type: 'Active' | 'Leaving';
    }
    /** @name ParachainStakingCandidateMetadata (322) */
    interface ParachainStakingCandidateMetadata extends Struct {
        readonly bond: u128;
        readonly delegationCount: u32;
        readonly totalCounted: u128;
        readonly lowestTopDelegationAmount: u128;
        readonly highestBottomDelegationAmount: u128;
        readonly lowestBottomDelegationAmount: u128;
        readonly topCapacity: ParachainStakingCapacityStatus;
        readonly bottomCapacity: ParachainStakingCapacityStatus;
        readonly request: Option<ParachainStakingCandidateBondLessRequest>;
        readonly status: ParachainStakingCollatorStatus;
    }
    /** @name ParachainStakingCapacityStatus (323) */
    interface ParachainStakingCapacityStatus extends Enum {
        readonly isFull: boolean;
        readonly isEmpty: boolean;
        readonly isPartial: boolean;
        readonly type: 'Full' | 'Empty' | 'Partial';
    }
    /** @name ParachainStakingCandidateBondLessRequest (325) */
    interface ParachainStakingCandidateBondLessRequest extends Struct {
        readonly amount: u128;
        readonly whenExecutable: u32;
    }
    /** @name ParachainStakingCollatorStatus (326) */
    interface ParachainStakingCollatorStatus extends Enum {
        readonly isActive: boolean;
        readonly isIdle: boolean;
        readonly isLeaving: boolean;
        readonly asLeaving: u32;
        readonly type: 'Active' | 'Idle' | 'Leaving';
    }
    /** @name ParachainStakingDelegationRequestsScheduledRequest (328) */
    interface ParachainStakingDelegationRequestsScheduledRequest extends Struct {
        readonly delegator: AccountId32;
        readonly whenExecutable: u32;
        readonly action: ParachainStakingDelegationRequestsDelegationAction;
    }
    /** @name ParachainStakingDelegations (329) */
    interface ParachainStakingDelegations extends Struct {
        readonly delegations: Vec<ParachainStakingBond>;
        readonly total: u128;
    }
    /** @name ParachainStakingCollatorSnapshot (331) */
    interface ParachainStakingCollatorSnapshot extends Struct {
        readonly bond: u128;
        readonly delegations: Vec<ParachainStakingBond>;
        readonly total: u128;
    }
    /** @name ParachainStakingDelayedPayout (332) */
    interface ParachainStakingDelayedPayout extends Struct {
        readonly roundIssuance: u128;
        readonly totalStakingReward: u128;
        readonly collatorCommission: Perbill;
    }
    /** @name ParachainStakingInflationInflationInfo (333) */
    interface ParachainStakingInflationInflationInfo extends Struct {
        readonly expect: {
            readonly min: u128;
            readonly ideal: u128;
            readonly max: u128;
        } & Struct;
        readonly annual: {
            readonly min: Perbill;
            readonly ideal: Perbill;
            readonly max: Perbill;
        } & Struct;
        readonly round: {
            readonly min: Perbill;
            readonly ideal: Perbill;
            readonly max: Perbill;
        } & Struct;
    }
    /** @name ParachainStakingCall (336) */
    interface ParachainStakingCall extends Enum {
        readonly isSetStakingExpectations: boolean;
        readonly asSetStakingExpectations: {
            readonly expectations: {
                readonly min: u128;
                readonly ideal: u128;
                readonly max: u128;
            } & Struct;
        } & Struct;
        readonly isSetInflation: boolean;
        readonly asSetInflation: {
            readonly schedule: {
                readonly min: Perbill;
                readonly ideal: Perbill;
                readonly max: Perbill;
            } & Struct;
        } & Struct;
        readonly isSetParachainBondAccount: boolean;
        readonly asSetParachainBondAccount: {
            readonly new_: AccountId32;
        } & Struct;
        readonly isSetParachainBondReservePercent: boolean;
        readonly asSetParachainBondReservePercent: {
            readonly new_: Percent;
        } & Struct;
        readonly isSetTotalSelected: boolean;
        readonly asSetTotalSelected: {
            readonly new_: u32;
        } & Struct;
        readonly isSetCollatorCommission: boolean;
        readonly asSetCollatorCommission: {
            readonly new_: Perbill;
        } & Struct;
        readonly isSetBlocksPerRound: boolean;
        readonly asSetBlocksPerRound: {
            readonly new_: u32;
        } & Struct;
        readonly isJoinCandidates: boolean;
        readonly asJoinCandidates: {
            readonly bond: u128;
            readonly candidateCount: u32;
        } & Struct;
        readonly isScheduleLeaveCandidates: boolean;
        readonly asScheduleLeaveCandidates: {
            readonly candidateCount: u32;
        } & Struct;
        readonly isExecuteLeaveCandidates: boolean;
        readonly asExecuteLeaveCandidates: {
            readonly candidate: AccountId32;
            readonly candidateDelegationCount: u32;
        } & Struct;
        readonly isCancelLeaveCandidates: boolean;
        readonly asCancelLeaveCandidates: {
            readonly candidateCount: u32;
        } & Struct;
        readonly isGoOffline: boolean;
        readonly isGoOnline: boolean;
        readonly isCandidateBondMore: boolean;
        readonly asCandidateBondMore: {
            readonly more: u128;
        } & Struct;
        readonly isScheduleCandidateBondLess: boolean;
        readonly asScheduleCandidateBondLess: {
            readonly less: u128;
        } & Struct;
        readonly isExecuteCandidateBondLess: boolean;
        readonly asExecuteCandidateBondLess: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCancelCandidateBondLess: boolean;
        readonly isDelegate: boolean;
        readonly asDelegate: {
            readonly candidate: AccountId32;
            readonly amount: u128;
            readonly candidateDelegationCount: u32;
            readonly delegationCount: u32;
        } & Struct;
        readonly isScheduleLeaveDelegators: boolean;
        readonly isExecuteLeaveDelegators: boolean;
        readonly asExecuteLeaveDelegators: {
            readonly delegator: AccountId32;
            readonly delegationCount: u32;
        } & Struct;
        readonly isCancelLeaveDelegators: boolean;
        readonly isScheduleRevokeDelegation: boolean;
        readonly asScheduleRevokeDelegation: {
            readonly collator: AccountId32;
        } & Struct;
        readonly isDelegatorBondMore: boolean;
        readonly asDelegatorBondMore: {
            readonly candidate: AccountId32;
            readonly more: u128;
        } & Struct;
        readonly isScheduleDelegatorBondLess: boolean;
        readonly asScheduleDelegatorBondLess: {
            readonly candidate: AccountId32;
            readonly less: u128;
        } & Struct;
        readonly isExecuteDelegationRequest: boolean;
        readonly asExecuteDelegationRequest: {
            readonly delegator: AccountId32;
            readonly candidate: AccountId32;
        } & Struct;
        readonly isCancelDelegationRequest: boolean;
        readonly asCancelDelegationRequest: {
            readonly candidate: AccountId32;
        } & Struct;
        readonly isHotfixRemoveDelegationRequestsExitedCandidates: boolean;
        readonly asHotfixRemoveDelegationRequestsExitedCandidates: {
            readonly candidates: Vec<AccountId32>;
        } & Struct;
        readonly isHotfixMigrateDelegatorsFromReserveToLocks: boolean;
        readonly asHotfixMigrateDelegatorsFromReserveToLocks: {
            readonly delegators: Vec<AccountId32>;
        } & Struct;
        readonly isHotfixMigrateCollatorsFromReserveToLocks: boolean;
        readonly asHotfixMigrateCollatorsFromReserveToLocks: {
            readonly collators: Vec<AccountId32>;
        } & Struct;
        readonly type: 'SetStakingExpectations' | 'SetInflation' | 'SetParachainBondAccount' | 'SetParachainBondReservePercent' | 'SetTotalSelected' | 'SetCollatorCommission' | 'SetBlocksPerRound' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'CandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondLess' | 'CancelCandidateBondLess' | 'Delegate' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'DelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'HotfixRemoveDelegationRequestsExitedCandidates' | 'HotfixMigrateDelegatorsFromReserveToLocks' | 'HotfixMigrateCollatorsFromReserveToLocks';
    }
    /** @name FrameSupportPalletId (337) */
    interface FrameSupportPalletId extends U8aFixed {
    }
    /** @name ParachainStakingError (338) */
    interface ParachainStakingError extends Enum {
        readonly isDelegatorDNE: boolean;
        readonly isDelegatorDNEinTopNorBottom: boolean;
        readonly isDelegatorDNEInDelegatorSet: boolean;
        readonly isCandidateDNE: boolean;
        readonly isDelegationDNE: boolean;
        readonly isDelegatorExists: boolean;
        readonly isCandidateExists: boolean;
        readonly isCandidateBondBelowMin: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isDelegatorBondBelowMin: boolean;
        readonly isDelegationBelowMin: boolean;
        readonly isAlreadyOffline: boolean;
        readonly isAlreadyActive: boolean;
        readonly isDelegatorAlreadyLeaving: boolean;
        readonly isDelegatorNotLeaving: boolean;
        readonly isDelegatorCannotLeaveYet: boolean;
        readonly isCannotDelegateIfLeaving: boolean;
        readonly isCandidateAlreadyLeaving: boolean;
        readonly isCandidateNotLeaving: boolean;
        readonly isCandidateCannotLeaveYet: boolean;
        readonly isCannotGoOnlineIfLeaving: boolean;
        readonly isExceedMaxDelegationsPerDelegator: boolean;
        readonly isAlreadyDelegatedCandidate: boolean;
        readonly isInvalidSchedule: boolean;
        readonly isCannotSetBelowMin: boolean;
        readonly isRoundLengthMustBeAtLeastTotalSelectedCollators: boolean;
        readonly isNoWritingSameValue: boolean;
        readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
        readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
        readonly isTooLowCandidateCountToLeaveCandidates: boolean;
        readonly isTooLowDelegationCountToDelegate: boolean;
        readonly isTooLowCandidateDelegationCountToDelegate: boolean;
        readonly isTooLowCandidateDelegationCountToLeaveCandidates: boolean;
        readonly isTooLowDelegationCountToLeaveDelegators: boolean;
        readonly isPendingCandidateRequestsDNE: boolean;
        readonly isPendingCandidateRequestAlreadyExists: boolean;
        readonly isPendingCandidateRequestNotDueYet: boolean;
        readonly isPendingDelegationRequestDNE: boolean;
        readonly isPendingDelegationRequestAlreadyExists: boolean;
        readonly isPendingDelegationRequestNotDueYet: boolean;
        readonly isCannotDelegateLessThanOrEqualToLowestBottomWhenFull: boolean;
        readonly isPendingDelegationRevoke: boolean;
        readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegatorBondBelowMin' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'RoundLengthMustBeAtLeastTotalSelectedCollators' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToLeaveCandidates' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull' | 'PendingDelegationRevoke';
    }
    /** @name FrameSupportPreimagesBounded (341) */
    interface FrameSupportPreimagesBounded extends Enum {
        readonly isLegacy: boolean;
        readonly asLegacy: {
            readonly hash_: H256;
        } & Struct;
        readonly isInline: boolean;
        readonly asInline: Bytes;
        readonly isLookup: boolean;
        readonly asLookup: {
            readonly hash_: H256;
            readonly len: u32;
        } & Struct;
        readonly type: 'Legacy' | 'Inline' | 'Lookup';
    }
    /** @name PalletDemocracyCall (343) */
    interface PalletDemocracyCall extends Enum {
        readonly isPropose: boolean;
        readonly asPropose: {
            readonly proposal: FrameSupportPreimagesBounded;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isSecond: boolean;
        readonly asSecond: {
            readonly proposal: Compact<u32>;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly refIndex: Compact<u32>;
            readonly vote: PalletDemocracyVoteAccountVote;
        } & Struct;
        readonly isEmergencyCancel: boolean;
        readonly asEmergencyCancel: {
            readonly refIndex: u32;
        } & Struct;
        readonly isExternalPropose: boolean;
        readonly asExternalPropose: {
            readonly proposal: FrameSupportPreimagesBounded;
        } & Struct;
        readonly isExternalProposeMajority: boolean;
        readonly asExternalProposeMajority: {
            readonly proposal: FrameSupportPreimagesBounded;
        } & Struct;
        readonly isExternalProposeDefault: boolean;
        readonly asExternalProposeDefault: {
            readonly proposal: FrameSupportPreimagesBounded;
        } & Struct;
        readonly isFastTrack: boolean;
        readonly asFastTrack: {
            readonly proposalHash: H256;
            readonly votingPeriod: u32;
            readonly delay: u32;
        } & Struct;
        readonly isVetoExternal: boolean;
        readonly asVetoExternal: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isCancelReferendum: boolean;
        readonly asCancelReferendum: {
            readonly refIndex: Compact<u32>;
        } & Struct;
        readonly isDelegate: boolean;
        readonly asDelegate: {
            readonly to: MultiAddress;
            readonly conviction: PalletDemocracyConviction;
            readonly balance: u128;
        } & Struct;
        readonly isUndelegate: boolean;
        readonly isClearPublicProposals: boolean;
        readonly isUnlock: boolean;
        readonly asUnlock: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isRemoveVote: boolean;
        readonly asRemoveVote: {
            readonly index: u32;
        } & Struct;
        readonly isRemoveOtherVote: boolean;
        readonly asRemoveOtherVote: {
            readonly target: MultiAddress;
            readonly index: u32;
        } & Struct;
        readonly isBlacklist: boolean;
        readonly asBlacklist: {
            readonly proposalHash: H256;
            readonly maybeRefIndex: Option<u32>;
        } & Struct;
        readonly isCancelProposal: boolean;
        readonly asCancelProposal: {
            readonly propIndex: Compact<u32>;
        } & Struct;
        readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal';
    }
    /** @name PalletDemocracyConviction (344) */
    interface PalletDemocracyConviction extends Enum {
        readonly isNone: boolean;
        readonly isLocked1x: boolean;
        readonly isLocked2x: boolean;
        readonly isLocked3x: boolean;
        readonly isLocked4x: boolean;
        readonly isLocked5x: boolean;
        readonly isLocked6x: boolean;
        readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
    }
    /** @name PalletCollectiveCall (345) */
    interface PalletCollectiveCall extends Enum {
        readonly isSetMembers: boolean;
        readonly asSetMembers: {
            readonly newMembers: Vec<AccountId32>;
            readonly prime: Option<AccountId32>;
            readonly oldCount: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isPropose: boolean;
        readonly asPropose: {
            readonly threshold: Compact<u32>;
            readonly proposal: Call;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly proposal: H256;
            readonly index: Compact<u32>;
            readonly approve: bool;
        } & Struct;
        readonly isCloseOldWeight: boolean;
        readonly asCloseOldWeight: {
            readonly proposalHash: H256;
            readonly index: Compact<u32>;
            readonly proposalWeightBound: Compact<u64>;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly isDisapproveProposal: boolean;
        readonly asDisapproveProposal: {
            readonly proposalHash: H256;
        } & Struct;
        readonly isClose: boolean;
        readonly asClose: {
            readonly proposalHash: H256;
            readonly index: Compact<u32>;
            readonly proposalWeightBound: SpWeightsWeightV2Weight;
            readonly lengthBound: Compact<u32>;
        } & Struct;
        readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'CloseOldWeight' | 'DisapproveProposal' | 'Close';
    }
    /** @name PalletElectionsPhragmenCall (349) */
    interface PalletElectionsPhragmenCall extends Enum {
        readonly isVote: boolean;
        readonly asVote: {
            readonly votes: Vec<AccountId32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isRemoveVoter: boolean;
        readonly isSubmitCandidacy: boolean;
        readonly asSubmitCandidacy: {
            readonly candidateCount: Compact<u32>;
        } & Struct;
        readonly isRenounceCandidacy: boolean;
        readonly asRenounceCandidacy: {
            readonly renouncing: PalletElectionsPhragmenRenouncing;
        } & Struct;
        readonly isRemoveMember: boolean;
        readonly asRemoveMember: {
            readonly who: MultiAddress;
            readonly slashBond: bool;
            readonly rerunElection: bool;
        } & Struct;
        readonly isCleanDefunctVoters: boolean;
        readonly asCleanDefunctVoters: {
            readonly numVoters: u32;
            readonly numDefunct: u32;
        } & Struct;
        readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
    }
    /** @name PalletElectionsPhragmenRenouncing (350) */
    interface PalletElectionsPhragmenRenouncing extends Enum {
        readonly isMember: boolean;
        readonly isRunnerUp: boolean;
        readonly isCandidate: boolean;
        readonly asCandidate: Compact<u32>;
        readonly type: 'Member' | 'RunnerUp' | 'Candidate';
    }
    /** @name PalletMembershipCall (351) */
    interface PalletMembershipCall extends Enum {
        readonly isAddMember: boolean;
        readonly asAddMember: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isRemoveMember: boolean;
        readonly asRemoveMember: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isSwapMember: boolean;
        readonly asSwapMember: {
            readonly remove: MultiAddress;
            readonly add: MultiAddress;
        } & Struct;
        readonly isResetMembers: boolean;
        readonly asResetMembers: {
            readonly members: Vec<AccountId32>;
        } & Struct;
        readonly isChangeKey: boolean;
        readonly asChangeKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSetPrime: boolean;
        readonly asSetPrime: {
            readonly who: MultiAddress;
        } & Struct;
        readonly isClearPrime: boolean;
        readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
    }
    /** @name CumulusPalletXcmpQueueCall (353) */
    interface CumulusPalletXcmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSuspendXcmExecution: boolean;
        readonly isResumeXcmExecution: boolean;
        readonly isUpdateSuspendThreshold: boolean;
        readonly asUpdateSuspendThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateDropThreshold: boolean;
        readonly asUpdateDropThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateResumeThreshold: boolean;
        readonly asUpdateResumeThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateThresholdWeight: boolean;
        readonly asUpdateThresholdWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateWeightRestrictDecay: boolean;
        readonly asUpdateWeightRestrictDecay: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateXcmpMaxIndividualWeight: boolean;
        readonly asUpdateXcmpMaxIndividualWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
    }
    /** @name PalletXcmCall (354) */
    interface PalletXcmCall extends Enum {
        readonly isSend: boolean;
        readonly asSend: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly isTeleportAssets: boolean;
        readonly asTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isReserveTransferAssets: boolean;
        readonly asReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly message: XcmVersionedXcm;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isForceXcmVersion: boolean;
        readonly asForceXcmVersion: {
            readonly location: XcmV3MultiLocation;
            readonly xcmVersion: u32;
        } & Struct;
        readonly isForceDefaultXcmVersion: boolean;
        readonly asForceDefaultXcmVersion: {
            readonly maybeXcmVersion: Option<u32>;
        } & Struct;
        readonly isForceSubscribeVersionNotify: boolean;
        readonly asForceSubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isForceUnsubscribeVersionNotify: boolean;
        readonly asForceUnsubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isLimitedReserveTransferAssets: boolean;
        readonly asLimitedReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isLimitedTeleportAssets: boolean;
        readonly asLimitedTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
    }
    /** @name XcmVersionedXcm (355) */
    interface XcmVersionedXcm extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Xcm;
        readonly isV3: boolean;
        readonly asV3: XcmV3Xcm;
        readonly type: 'V2' | 'V3';
    }
    /** @name XcmV2Xcm (356) */
    interface XcmV2Xcm extends Vec<XcmV2Instruction> {
    }
    /** @name XcmV2Instruction (358) */
    interface XcmV2Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV2Response;
            readonly maxWeight: Compact<u64>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV2OriginKind;
            readonly requireWeightAtMost: Compact<u64>;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV2MultilocationJunctions;
        readonly isReportError: boolean;
        readonly asReportError: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV2MultiassetMultiAssetFilter;
            readonly receive: XcmV2MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly reserve: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV2MultiAsset;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV2Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV2Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly ticket: XcmV2MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
    }
    /** @name XcmV2Response (359) */
    interface XcmV2Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV2MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
    }
    /** @name XcmV2TraitsError (362) */
    interface XcmV2TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isMultiLocationFull: boolean;
        readonly isMultiLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: u64;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
    }
    /** @name XcmV2MultiassetMultiAssetFilter (363) */
    interface XcmV2MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV2MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV2MultiassetWildMultiAsset;
        readonly type: 'Definite' | 'Wild';
    }
    /** @name XcmV2MultiassetWildMultiAsset (364) */
    interface XcmV2MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV2MultiassetAssetId;
            readonly fun: XcmV2MultiassetWildFungibility;
        } & Struct;
        readonly type: 'All' | 'AllOf';
    }
    /** @name XcmV2MultiassetWildFungibility (365) */
    interface XcmV2MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: 'Fungible' | 'NonFungible';
    }
    /** @name XcmV2WeightLimit (366) */
    interface XcmV2WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: Compact<u64>;
        readonly type: 'Unlimited' | 'Limited';
    }
    /** @name CumulusPalletDmpQueueCall (375) */
    interface CumulusPalletDmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'ServiceOverweight';
    }
    /** @name PalletUtilityCall (376) */
    interface PalletUtilityCall extends Enum {
        readonly isBatch: boolean;
        readonly asBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isAsDerivative: boolean;
        readonly asAsDerivative: {
            readonly index: u16;
            readonly call: Call;
        } & Struct;
        readonly isBatchAll: boolean;
        readonly asBatchAll: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isDispatchAs: boolean;
        readonly asDispatchAs: {
            readonly asOrigin: BifrostKusamaRuntimeOriginCaller;
            readonly call: Call;
        } & Struct;
        readonly isForceBatch: boolean;
        readonly asForceBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isWithWeight: boolean;
        readonly asWithWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
    }
    /** @name BifrostKusamaRuntimeOriginCaller (378) */
    interface BifrostKusamaRuntimeOriginCaller extends Enum {
        readonly isSystem: boolean;
        readonly asSystem: FrameSupportDispatchRawOrigin;
        readonly isVoid: boolean;
        readonly isCouncil: boolean;
        readonly asCouncil: PalletCollectiveRawOrigin;
        readonly isTechnicalCommittee: boolean;
        readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
        readonly isPolkadotXcm: boolean;
        readonly asPolkadotXcm: PalletXcmOrigin;
        readonly isCumulusXcm: boolean;
        readonly asCumulusXcm: CumulusPalletXcmOrigin;
        readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'PolkadotXcm' | 'CumulusXcm';
    }
    /** @name FrameSupportDispatchRawOrigin (379) */
    interface FrameSupportDispatchRawOrigin extends Enum {
        readonly isRoot: boolean;
        readonly isSigned: boolean;
        readonly asSigned: AccountId32;
        readonly isNone: boolean;
        readonly type: 'Root' | 'Signed' | 'None';
    }
    /** @name PalletCollectiveRawOrigin (380) */
    interface PalletCollectiveRawOrigin extends Enum {
        readonly isMembers: boolean;
        readonly asMembers: ITuple<[u32, u32]>;
        readonly isMember: boolean;
        readonly asMember: AccountId32;
        readonly isPhantom: boolean;
        readonly type: 'Members' | 'Member' | 'Phantom';
    }
    /** @name PalletXcmOrigin (382) */
    interface PalletXcmOrigin extends Enum {
        readonly isXcm: boolean;
        readonly asXcm: XcmV3MultiLocation;
        readonly isResponse: boolean;
        readonly asResponse: XcmV3MultiLocation;
        readonly type: 'Xcm' | 'Response';
    }
    /** @name CumulusPalletXcmOrigin (383) */
    interface CumulusPalletXcmOrigin extends Enum {
        readonly isRelay: boolean;
        readonly isSiblingParachain: boolean;
        readonly asSiblingParachain: u32;
        readonly type: 'Relay' | 'SiblingParachain';
    }
    /** @name SpCoreVoid (384) */
    type SpCoreVoid = Null;
    /** @name PalletSchedulerCall (385) */
    interface PalletSchedulerCall extends Enum {
        readonly isSchedule: boolean;
        readonly asSchedule: {
            readonly when: u32;
            readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isCancel: boolean;
        readonly asCancel: {
            readonly when: u32;
            readonly index: u32;
        } & Struct;
        readonly isScheduleNamed: boolean;
        readonly asScheduleNamed: {
            readonly id: U8aFixed;
            readonly when: u32;
            readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isCancelNamed: boolean;
        readonly asCancelNamed: {
            readonly id: U8aFixed;
        } & Struct;
        readonly isScheduleAfter: boolean;
        readonly asScheduleAfter: {
            readonly after: u32;
            readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly isScheduleNamedAfter: boolean;
        readonly asScheduleNamedAfter: {
            readonly id: U8aFixed;
            readonly after: u32;
            readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
            readonly priority: u8;
            readonly call: Call;
        } & Struct;
        readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
    }
    /** @name PalletProxyCall (387) */
    interface PalletProxyCall extends Enum {
        readonly isProxy: boolean;
        readonly asProxy: {
            readonly real: MultiAddress;
            readonly forceProxyType: Option<BifrostKusamaRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly isAddProxy: boolean;
        readonly asAddProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxy: boolean;
        readonly asRemoveProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxies: boolean;
        readonly isCreatePure: boolean;
        readonly asCreatePure: {
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly delay: u32;
            readonly index: u16;
        } & Struct;
        readonly isKillPure: boolean;
        readonly asKillPure: {
            readonly spawner: MultiAddress;
            readonly proxyType: BifrostKusamaRuntimeProxyType;
            readonly index: u16;
            readonly height: Compact<u32>;
            readonly extIndex: Compact<u32>;
        } & Struct;
        readonly isAnnounce: boolean;
        readonly asAnnounce: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRemoveAnnouncement: boolean;
        readonly asRemoveAnnouncement: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRejectAnnouncement: boolean;
        readonly asRejectAnnouncement: {
            readonly delegate: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAnnounced: boolean;
        readonly asProxyAnnounced: {
            readonly delegate: MultiAddress;
            readonly real: MultiAddress;
            readonly forceProxyType: Option<BifrostKusamaRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
    }
    /** @name PalletMultisigCall (389) */
    interface PalletMultisigCall extends Enum {
        readonly isAsMultiThreshold1: boolean;
        readonly asAsMultiThreshold1: {
            readonly otherSignatories: Vec<AccountId32>;
            readonly call: Call;
        } & Struct;
        readonly isAsMulti: boolean;
        readonly asAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly call: Call;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isApproveAsMulti: boolean;
        readonly asApproveAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
            readonly callHash: U8aFixed;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isCancelAsMulti: boolean;
        readonly asCancelAsMulti: {
            readonly threshold: u16;
            readonly otherSignatories: Vec<AccountId32>;
            readonly timepoint: PalletMultisigTimepoint;
            readonly callHash: U8aFixed;
        } & Struct;
        readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
    }
    /** @name PalletIdentityCall (391) */
    interface PalletIdentityCall extends Enum {
        readonly isAddRegistrar: boolean;
        readonly asAddRegistrar: {
            readonly account: MultiAddress;
        } & Struct;
        readonly isSetIdentity: boolean;
        readonly asSetIdentity: {
            readonly info: PalletIdentityIdentityInfo;
        } & Struct;
        readonly isSetSubs: boolean;
        readonly asSetSubs: {
            readonly subs: Vec<ITuple<[AccountId32, Data]>>;
        } & Struct;
        readonly isClearIdentity: boolean;
        readonly isRequestJudgement: boolean;
        readonly asRequestJudgement: {
            readonly regIndex: Compact<u32>;
            readonly maxFee: Compact<u128>;
        } & Struct;
        readonly isCancelRequest: boolean;
        readonly asCancelRequest: {
            readonly regIndex: u32;
        } & Struct;
        readonly isSetFee: boolean;
        readonly asSetFee: {
            readonly index: Compact<u32>;
            readonly fee: Compact<u128>;
        } & Struct;
        readonly isSetAccountId: boolean;
        readonly asSetAccountId: {
            readonly index: Compact<u32>;
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSetFields: boolean;
        readonly asSetFields: {
            readonly index: Compact<u32>;
            readonly fields: PalletIdentityBitFlags;
        } & Struct;
        readonly isProvideJudgement: boolean;
        readonly asProvideJudgement: {
            readonly regIndex: Compact<u32>;
            readonly target: MultiAddress;
            readonly judgement: PalletIdentityJudgement;
            readonly identity: H256;
        } & Struct;
        readonly isKillIdentity: boolean;
        readonly asKillIdentity: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isAddSub: boolean;
        readonly asAddSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRenameSub: boolean;
        readonly asRenameSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRemoveSub: boolean;
        readonly asRemoveSub: {
            readonly sub: MultiAddress;
        } & Struct;
        readonly isQuitSub: boolean;
        readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
    }
    /** @name PalletIdentityIdentityInfo (392) */
    interface PalletIdentityIdentityInfo extends Struct {
        readonly additional: Vec<ITuple<[Data, Data]>>;
        readonly display: Data;
        readonly legal: Data;
        readonly web: Data;
        readonly riot: Data;
        readonly email: Data;
        readonly pgpFingerprint: Option<U8aFixed>;
        readonly image: Data;
        readonly twitter: Data;
    }
    /** @name PalletIdentityBitFlags (428) */
    interface PalletIdentityBitFlags extends Set {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
    }
    /** @name PalletIdentityIdentityField (429) */
    interface PalletIdentityIdentityField extends Enum {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
        readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
    }
    /** @name PalletIdentityJudgement (430) */
    interface PalletIdentityJudgement extends Enum {
        readonly isUnknown: boolean;
        readonly isFeePaid: boolean;
        readonly asFeePaid: u128;
        readonly isReasonable: boolean;
        readonly isKnownGood: boolean;
        readonly isOutOfDate: boolean;
        readonly isLowQuality: boolean;
        readonly isErroneous: boolean;
        readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
    }
    /** @name BifrostVestingCall (431) */
    interface BifrostVestingCall extends Enum {
        readonly isVest: boolean;
        readonly isVestOther: boolean;
        readonly asVestOther: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isVestedTransfer: boolean;
        readonly asVestedTransfer: {
            readonly target: MultiAddress;
            readonly schedule: BifrostVestingVestingInfo;
        } & Struct;
        readonly isForceVestedTransfer: boolean;
        readonly asForceVestedTransfer: {
            readonly source: MultiAddress;
            readonly target: MultiAddress;
            readonly schedule: BifrostVestingVestingInfo;
        } & Struct;
        readonly isForceSetVested: boolean;
        readonly asForceSetVested: {
            readonly source: MultiAddress;
            readonly target: MultiAddress;
            readonly schedule: BifrostVestingVestingInfo;
        } & Struct;
        readonly isInitVestingStartAt: boolean;
        readonly asInitVestingStartAt: {
            readonly vestingStartAt: u32;
        } & Struct;
        readonly isSetVestingPerBlock: boolean;
        readonly asSetVestingPerBlock: {
            readonly target: MultiAddress;
            readonly perBlock: u128;
        } & Struct;
        readonly isForceSetCliff: boolean;
        readonly asForceSetCliff: {
            readonly target: MultiAddress;
            readonly cliffBlock: u32;
        } & Struct;
        readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'ForceSetVested' | 'InitVestingStartAt' | 'SetVestingPerBlock' | 'ForceSetCliff';
    }
    /** @name BifrostVestingVestingInfo (432) */
    interface BifrostVestingVestingInfo extends Struct {
        readonly locked: u128;
        readonly perBlock: u128;
        readonly startingBlock: u32;
    }
    /** @name PalletTreasuryCall (433) */
    interface PalletTreasuryCall extends Enum {
        readonly isProposeSpend: boolean;
        readonly asProposeSpend: {
            readonly value: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRejectProposal: boolean;
        readonly asRejectProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isApproveProposal: boolean;
        readonly asApproveProposal: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly isSpend: boolean;
        readonly asSpend: {
            readonly amount: Compact<u128>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isRemoveApproval: boolean;
        readonly asRemoveApproval: {
            readonly proposalId: Compact<u32>;
        } & Struct;
        readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
    }
    /** @name PalletBountiesCall (434) */
    interface PalletBountiesCall extends Enum {
        readonly isProposeBounty: boolean;
        readonly asProposeBounty: {
            readonly value: Compact<u128>;
            readonly description: Bytes;
        } & Struct;
        readonly isApproveBounty: boolean;
        readonly asApproveBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isProposeCurator: boolean;
        readonly asProposeCurator: {
            readonly bountyId: Compact<u32>;
            readonly curator: MultiAddress;
            readonly fee: Compact<u128>;
        } & Struct;
        readonly isUnassignCurator: boolean;
        readonly asUnassignCurator: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isAcceptCurator: boolean;
        readonly asAcceptCurator: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isAwardBounty: boolean;
        readonly asAwardBounty: {
            readonly bountyId: Compact<u32>;
            readonly beneficiary: MultiAddress;
        } & Struct;
        readonly isClaimBounty: boolean;
        readonly asClaimBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isCloseBounty: boolean;
        readonly asCloseBounty: {
            readonly bountyId: Compact<u32>;
        } & Struct;
        readonly isExtendBountyExpiry: boolean;
        readonly asExtendBountyExpiry: {
            readonly bountyId: Compact<u32>;
            readonly remark: Bytes;
        } & Struct;
        readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
    }
    /** @name PalletTipsCall (435) */
    interface PalletTipsCall extends Enum {
        readonly isReportAwesome: boolean;
        readonly asReportAwesome: {
            readonly reason: Bytes;
            readonly who: MultiAddress;
        } & Struct;
        readonly isRetractTip: boolean;
        readonly asRetractTip: {
            readonly hash_: H256;
        } & Struct;
        readonly isTipNew: boolean;
        readonly asTipNew: {
            readonly reason: Bytes;
            readonly who: MultiAddress;
            readonly tipValue: Compact<u128>;
        } & Struct;
        readonly isTip: boolean;
        readonly asTip: {
            readonly hash_: H256;
            readonly tipValue: Compact<u128>;
        } & Struct;
        readonly isCloseTip: boolean;
        readonly asCloseTip: {
            readonly hash_: H256;
        } & Struct;
        readonly isSlashTip: boolean;
        readonly asSlashTip: {
            readonly hash_: H256;
        } & Struct;
        readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
    }
    /** @name PalletPreimageCall (436) */
    interface PalletPreimageCall extends Enum {
        readonly isNotePreimage: boolean;
        readonly asNotePreimage: {
            readonly bytes: Bytes;
        } & Struct;
        readonly isUnnotePreimage: boolean;
        readonly asUnnotePreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly isRequestPreimage: boolean;
        readonly asRequestPreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly isUnrequestPreimage: boolean;
        readonly asUnrequestPreimage: {
            readonly hash_: H256;
        } & Struct;
        readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
    }
    /** @name OrmlXtokensModuleCall (437) */
    interface OrmlXtokensModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiasset: boolean;
        readonly asTransferMultiasset: {
            readonly asset: XcmVersionedMultiAsset;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferWithFee: boolean;
        readonly asTransferWithFee: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
            readonly fee: u128;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiassetWithFee: boolean;
        readonly asTransferMultiassetWithFee: {
            readonly asset: XcmVersionedMultiAsset;
            readonly fee: XcmVersionedMultiAsset;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMulticurrencies: boolean;
        readonly asTransferMulticurrencies: {
            readonly currencies: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly feeItem: u32;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isTransferMultiassets: boolean;
        readonly asTransferMultiassets: {
            readonly assets: XcmVersionedMultiAssets;
            readonly feeItem: u32;
            readonly dest: XcmVersionedMultiLocation;
            readonly destWeightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
    }
    /** @name XcmVersionedMultiAsset (438) */
    interface XcmVersionedMultiAsset extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiAsset;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiAsset;
        readonly type: 'V2' | 'V3';
    }
    /** @name OrmlTokensModuleCall (439) */
    interface OrmlTokensModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly keepAlive: bool;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isSetBalance: boolean;
        readonly asSetBalance: {
            readonly who: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly newFree: Compact<u128>;
            readonly newReserved: Compact<u128>;
        } & Struct;
        readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
    }
    /** @name OrmlCurrenciesModuleCall (440) */
    interface OrmlCurrenciesModuleCall extends Enum {
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferNativeCurrency: boolean;
        readonly asTransferNativeCurrency: {
            readonly dest: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isUpdateBalance: boolean;
        readonly asUpdateBalance: {
            readonly who: MultiAddress;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: i128;
        } & Struct;
        readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
    }
    /** @name OrmlXcmModuleCall (442) */
    interface OrmlXcmModuleCall extends Enum {
        readonly isSendAsSovereign: boolean;
        readonly asSendAsSovereign: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly type: 'SendAsSovereign';
    }
    /** @name ZenlinkProtocolCall (443) */
    interface ZenlinkProtocolCall extends Enum {
        readonly isSetFeeReceiver: boolean;
        readonly asSetFeeReceiver: {
            readonly sendTo: Option<MultiAddress>;
        } & Struct;
        readonly isSetFeePoint: boolean;
        readonly asSetFeePoint: {
            readonly feePoint: u8;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly assetId: ZenlinkProtocolPrimitivesAssetId;
            readonly recipient: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isCreatePair: boolean;
        readonly asCreatePair: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
        } & Struct;
        readonly isAddLiquidity: boolean;
        readonly asAddLiquidity: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly amount0Desired: Compact<u128>;
            readonly amount1Desired: Compact<u128>;
            readonly amount0Min: Compact<u128>;
            readonly amount1Min: Compact<u128>;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isRemoveLiquidity: boolean;
        readonly asRemoveLiquidity: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly liquidity: Compact<u128>;
            readonly amount0Min: Compact<u128>;
            readonly amount1Min: Compact<u128>;
            readonly recipient: MultiAddress;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isSwapExactAssetsForAssets: boolean;
        readonly asSwapExactAssetsForAssets: {
            readonly amountIn: Compact<u128>;
            readonly amountOutMin: Compact<u128>;
            readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
            readonly recipient: MultiAddress;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isSwapAssetsForExactAssets: boolean;
        readonly asSwapAssetsForExactAssets: {
            readonly amountOut: Compact<u128>;
            readonly amountInMax: Compact<u128>;
            readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
            readonly recipient: MultiAddress;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isBootstrapCreate: boolean;
        readonly asBootstrapCreate: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly targetSupply0: Compact<u128>;
            readonly targetSupply1: Compact<u128>;
            readonly capacitySupply0: Compact<u128>;
            readonly capacitySupply1: Compact<u128>;
            readonly end: Compact<u32>;
            readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
            readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
        } & Struct;
        readonly isBootstrapContribute: boolean;
        readonly asBootstrapContribute: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly amount0Contribute: Compact<u128>;
            readonly amount1Contribute: Compact<u128>;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isBootstrapClaim: boolean;
        readonly asBootstrapClaim: {
            readonly recipient: MultiAddress;
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly deadline: Compact<u32>;
        } & Struct;
        readonly isBootstrapEnd: boolean;
        readonly asBootstrapEnd: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
        } & Struct;
        readonly isBootstrapUpdate: boolean;
        readonly asBootstrapUpdate: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly targetSupply0: Compact<u128>;
            readonly targetSupply1: Compact<u128>;
            readonly capacitySupply0: Compact<u128>;
            readonly capacitySupply1: Compact<u128>;
            readonly end: Compact<u32>;
            readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
            readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
        } & Struct;
        readonly isBootstrapRefund: boolean;
        readonly asBootstrapRefund: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
        } & Struct;
        readonly isBootstrapChargeReward: boolean;
        readonly asBootstrapChargeReward: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
        } & Struct;
        readonly isBootstrapWithdrawReward: boolean;
        readonly asBootstrapWithdrawReward: {
            readonly asset0: ZenlinkProtocolPrimitivesAssetId;
            readonly asset1: ZenlinkProtocolPrimitivesAssetId;
            readonly recipient: MultiAddress;
        } & Struct;
        readonly type: 'SetFeeReceiver' | 'SetFeePoint' | 'Transfer' | 'CreatePair' | 'AddLiquidity' | 'RemoveLiquidity' | 'SwapExactAssetsForAssets' | 'SwapAssetsForExactAssets' | 'BootstrapCreate' | 'BootstrapContribute' | 'BootstrapClaim' | 'BootstrapEnd' | 'BootstrapUpdate' | 'BootstrapRefund' | 'BootstrapChargeReward' | 'BootstrapWithdrawReward';
    }
    /** @name MerkleDistributorCall (445) */
    interface MerkleDistributorCall extends Enum {
        readonly isAddToCreateWhitelist: boolean;
        readonly asAddToCreateWhitelist: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemoveFromCreateWhitelist: boolean;
        readonly asRemoveFromCreateWhitelist: {
            readonly account: AccountId32;
        } & Struct;
        readonly isCreateMerkleDistributor: boolean;
        readonly asCreateMerkleDistributor: {
            readonly merkleRoot: H256;
            readonly description: Bytes;
            readonly distributeCurrency: NodePrimitivesCurrencyCurrencyId;
            readonly distributeAmount: u128;
        } & Struct;
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly merkleDistributorId: u32;
            readonly index: u32;
            readonly account: MultiAddress;
            readonly amount: u128;
            readonly merkleProof: Vec<H256>;
        } & Struct;
        readonly isCharge: boolean;
        readonly asCharge: {
            readonly merkleDistributorId: u32;
        } & Struct;
        readonly isEmergencyWithdraw: boolean;
        readonly asEmergencyWithdraw: {
            readonly merkleDistributorId: u32;
            readonly recipient: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly type: 'AddToCreateWhitelist' | 'RemoveFromCreateWhitelist' | 'CreateMerkleDistributor' | 'Claim' | 'Charge' | 'EmergencyWithdraw';
    }
    /** @name ZenlinkStableAmmCall (446) */
    interface ZenlinkStableAmmCall extends Enum {
        readonly isCreateBasePool: boolean;
        readonly asCreateBasePool: {
            readonly currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>;
            readonly currencyDecimals: Vec<u32>;
            readonly a: u128;
            readonly fee: u128;
            readonly adminFee: u128;
            readonly adminFeeReceiver: AccountId32;
            readonly lpCurrencySymbol: Bytes;
        } & Struct;
        readonly isCreateMetaPool: boolean;
        readonly asCreateMetaPool: {
            readonly currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>;
            readonly currencyDecimals: Vec<u32>;
            readonly a: u128;
            readonly fee: u128;
            readonly adminFee: u128;
            readonly adminFeeReceiver: AccountId32;
            readonly lpCurrencySymbol: Bytes;
        } & Struct;
        readonly isAddLiquidity: boolean;
        readonly asAddLiquidity: {
            readonly poolId: u32;
            readonly amounts: Vec<u128>;
            readonly minMintAmount: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isSwap: boolean;
        readonly asSwap: {
            readonly pooId: u32;
            readonly fromIndex: u32;
            readonly toIndex: u32;
            readonly inAmount: u128;
            readonly minOutAmount: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isRemoveLiquidity: boolean;
        readonly asRemoveLiquidity: {
            readonly pooId: u32;
            readonly lpAmount: u128;
            readonly minAmounts: Vec<u128>;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isRemoveLiquidityOneCurrency: boolean;
        readonly asRemoveLiquidityOneCurrency: {
            readonly pooId: u32;
            readonly lpAmount: u128;
            readonly index: u32;
            readonly minAmount: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isRemoveLiquidityImbalance: boolean;
        readonly asRemoveLiquidityImbalance: {
            readonly poolId: u32;
            readonly amounts: Vec<u128>;
            readonly maxBurnAmount: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isAddPoolAndBasePoolLiquidity: boolean;
        readonly asAddPoolAndBasePoolLiquidity: {
            readonly poolId: u32;
            readonly basePoolId: u32;
            readonly metaAmounts: Vec<u128>;
            readonly baseAmounts: Vec<u128>;
            readonly minToMint: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isRemovePoolAndBasePoolLiquidity: boolean;
        readonly asRemovePoolAndBasePoolLiquidity: {
            readonly poolId: u32;
            readonly basePoolId: u32;
            readonly amount: u128;
            readonly minAmountsMeta: Vec<u128>;
            readonly minAmountsBase: Vec<u128>;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isRemovePoolAndBasePoolLiquidityOneCurrency: boolean;
        readonly asRemovePoolAndBasePoolLiquidityOneCurrency: {
            readonly poolId: u32;
            readonly basePoolId: u32;
            readonly amount: u128;
            readonly i: u32;
            readonly minAmount: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isSwapPoolFromBase: boolean;
        readonly asSwapPoolFromBase: {
            readonly poolId: u32;
            readonly basePoolId: u32;
            readonly inIndex: u32;
            readonly outIndex: u32;
            readonly dx: u128;
            readonly minDy: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isSwapPoolToBase: boolean;
        readonly asSwapPoolToBase: {
            readonly poolId: u32;
            readonly basePoolId: u32;
            readonly inIndex: u32;
            readonly outIndex: u32;
            readonly dx: u128;
            readonly minDy: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isSwapMetaPoolUnderlying: boolean;
        readonly asSwapMetaPoolUnderlying: {
            readonly poolId: u32;
            readonly inIndex: u32;
            readonly outIndex: u32;
            readonly dx: u128;
            readonly minDy: u128;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly isUpdateFeeReceiver: boolean;
        readonly asUpdateFeeReceiver: {
            readonly poolId: u32;
            readonly feeReceiver: MultiAddress;
        } & Struct;
        readonly isSetSwapFee: boolean;
        readonly asSetSwapFee: {
            readonly poolId: u32;
            readonly newSwapFee: u128;
        } & Struct;
        readonly isSetAdminFee: boolean;
        readonly asSetAdminFee: {
            readonly poolId: u32;
            readonly newAdminFee: u128;
        } & Struct;
        readonly isRampA: boolean;
        readonly asRampA: {
            readonly poolId: u32;
            readonly futureA: u128;
            readonly futureATime: u128;
        } & Struct;
        readonly isStopRampA: boolean;
        readonly asStopRampA: {
            readonly poolId: u32;
        } & Struct;
        readonly isWithdrawAdminFee: boolean;
        readonly asWithdrawAdminFee: {
            readonly poolId: u32;
        } & Struct;
        readonly type: 'CreateBasePool' | 'CreateMetaPool' | 'AddLiquidity' | 'Swap' | 'RemoveLiquidity' | 'RemoveLiquidityOneCurrency' | 'RemoveLiquidityImbalance' | 'AddPoolAndBasePoolLiquidity' | 'RemovePoolAndBasePoolLiquidity' | 'RemovePoolAndBasePoolLiquidityOneCurrency' | 'SwapPoolFromBase' | 'SwapPoolToBase' | 'SwapMetaPoolUnderlying' | 'UpdateFeeReceiver' | 'SetSwapFee' | 'SetAdminFee' | 'RampA' | 'StopRampA' | 'WithdrawAdminFee';
    }
    /** @name ZenlinkSwapRouterCall (447) */
    interface ZenlinkSwapRouterCall extends Enum {
        readonly isSwapExactTokenForTokensThroughStablePool: boolean;
        readonly asSwapExactTokenForTokensThroughStablePool: {
            readonly amountIn: u128;
            readonly amountOutMin: u128;
            readonly routes: Vec<ZenlinkSwapRouterRoute>;
            readonly to: AccountId32;
            readonly deadline: u32;
        } & Struct;
        readonly type: 'SwapExactTokenForTokensThroughStablePool';
    }
    /** @name ZenlinkSwapRouterRoute (449) */
    interface ZenlinkSwapRouterRoute extends Enum {
        readonly isStable: boolean;
        readonly asStable: ZenlinkSwapRouterStablePath;
        readonly isNormal: boolean;
        readonly asNormal: Vec<ZenlinkProtocolPrimitivesAssetId>;
        readonly type: 'Stable' | 'Normal';
    }
    /** @name ZenlinkSwapRouterStablePath (450) */
    interface ZenlinkSwapRouterStablePath extends Struct {
        readonly poolId: u32;
        readonly basePoolId: u32;
        readonly mode: ZenlinkSwapRouterStableSwapMode;
        readonly fromCurrency: NodePrimitivesCurrencyCurrencyId;
        readonly toCurrency: NodePrimitivesCurrencyCurrencyId;
    }
    /** @name ZenlinkSwapRouterStableSwapMode (451) */
    interface ZenlinkSwapRouterStableSwapMode extends Enum {
        readonly isSingle: boolean;
        readonly isFromBase: boolean;
        readonly isToBase: boolean;
        readonly type: 'Single' | 'FromBase' | 'ToBase';
    }
    /** @name BifrostFlexibleFeeCall (452) */
    interface BifrostFlexibleFeeCall extends Enum {
        readonly isSetUserDefaultFeeCurrency: boolean;
        readonly asSetUserDefaultFeeCurrency: {
            readonly maybeFeeCurrency: Option<NodePrimitivesCurrencyCurrencyId>;
        } & Struct;
        readonly isSetUniversalFeeCurrencyOrderList: boolean;
        readonly asSetUniversalFeeCurrencyOrderList: {
            readonly defaultList: Vec<NodePrimitivesCurrencyCurrencyId>;
        } & Struct;
        readonly isRemoveFromUserFeeChargeOrderList: boolean;
        readonly type: 'SetUserDefaultFeeCurrency' | 'SetUniversalFeeCurrencyOrderList' | 'RemoveFromUserFeeChargeOrderList';
    }
    /** @name BifrostSalpCall (455) */
    interface BifrostSalpCall extends Enum {
        readonly isSetMultisigConfirmAccount: boolean;
        readonly asSetMultisigConfirmAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isFundSuccess: boolean;
        readonly asFundSuccess: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isFundFail: boolean;
        readonly asFundFail: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isContinueFund: boolean;
        readonly asContinueFund: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isFundRetire: boolean;
        readonly asFundRetire: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isFundEnd: boolean;
        readonly asFundEnd: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isEdit: boolean;
        readonly asEdit: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly raised: Compact<u128>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly fundStatus: Option<BifrostSalpFundStatus>;
        } & Struct;
        readonly isContribute: boolean;
        readonly asContribute: {
            readonly index: Compact<u32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isConfirmContribute: boolean;
        readonly asConfirmContribute: {
            readonly who: AccountId32;
            readonly index: Compact<u32>;
            readonly isSuccess: bool;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isUnlock: boolean;
        readonly asUnlock: {
            readonly who: AccountId32;
            readonly index: Compact<u32>;
        } & Struct;
        readonly isUnlockByVsbond: boolean;
        readonly asUnlockByVsbond: {
            readonly who: AccountId32;
            readonly vsbond: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isUnlockVstoken: boolean;
        readonly asUnlockVstoken: {
            readonly who: AccountId32;
        } & Struct;
        readonly isBatchUnlock: boolean;
        readonly asBatchUnlock: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isRefund: boolean;
        readonly asRefund: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isRedeem: boolean;
        readonly asRedeem: {
            readonly index: Compact<u32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isDissolveRefunded: boolean;
        readonly asDissolveRefunded: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isDissolve: boolean;
        readonly asDissolve: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isBuyback: boolean;
        readonly asBuyback: {
            readonly value: Compact<u128>;
        } & Struct;
        readonly isConfirmContribution: boolean;
        readonly asConfirmContribution: {
            readonly queryId: u64;
            readonly response: XcmV3Response;
        } & Struct;
        readonly type: 'SetMultisigConfirmAccount' | 'FundSuccess' | 'FundFail' | 'ContinueFund' | 'FundRetire' | 'FundEnd' | 'Create' | 'Edit' | 'Contribute' | 'ConfirmContribute' | 'Unlock' | 'UnlockByVsbond' | 'UnlockVstoken' | 'BatchUnlock' | 'Withdraw' | 'Refund' | 'Redeem' | 'DissolveRefunded' | 'Dissolve' | 'Buyback' | 'ConfirmContribution';
    }
    /** @name BifrostSalpFundStatus (457) */
    interface BifrostSalpFundStatus extends Enum {
        readonly isOngoing: boolean;
        readonly isRetired: boolean;
        readonly isSuccess: boolean;
        readonly isFailed: boolean;
        readonly isRefundWithdrew: boolean;
        readonly isRedeemWithdrew: boolean;
        readonly isFailedToContinue: boolean;
        readonly isEnd: boolean;
        readonly type: 'Ongoing' | 'Retired' | 'Success' | 'Failed' | 'RefundWithdrew' | 'RedeemWithdrew' | 'FailedToContinue' | 'End';
    }
    /** @name BifrostLiquidityMiningCall (458) */
    interface BifrostLiquidityMiningCall extends Enum {
        readonly isCreateSingleTokenPool: boolean;
        readonly asCreateSingleTokenPool: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
            readonly optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly duration: Compact<u32>;
            readonly minDepositToStart: Compact<u128>;
            readonly afterBlockToStart: Compact<u32>;
            readonly redeemLimitTime: Compact<u32>;
            readonly unlockLimitNums: Compact<u32>;
        } & Struct;
        readonly isCreateMiningPool: boolean;
        readonly asCreateMiningPool: {
            readonly tradingPair: ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>;
            readonly mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
            readonly optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly duration: Compact<u32>;
            readonly minDepositToStart: Compact<u128>;
            readonly afterBlockToStart: Compact<u32>;
            readonly redeemLimitTime: Compact<u32>;
            readonly unlockLimitNums: Compact<u32>;
        } & Struct;
        readonly isCreateFarmingPool: boolean;
        readonly asCreateFarmingPool: {
            readonly index: u32;
            readonly firstSlot: u32;
            readonly lastSlot: u32;
            readonly mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
            readonly optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly duration: Compact<u32>;
            readonly minDepositToStart: Compact<u128>;
            readonly afterBlockToStart: Compact<u32>;
            readonly redeemLimitTime: Compact<u32>;
            readonly unlockLimitNums: Compact<u32>;
        } & Struct;
        readonly isCreateEbFarmingPool: boolean;
        readonly asCreateEbFarmingPool: {
            readonly index: u32;
            readonly firstSlot: u32;
            readonly lastSlot: u32;
            readonly mainReward: ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>;
            readonly optionRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly duration: Compact<u32>;
            readonly minDepositToStart: Compact<u128>;
            readonly afterBlockToStart: Compact<u32>;
        } & Struct;
        readonly isCharge: boolean;
        readonly asCharge: {
            readonly pid: u32;
        } & Struct;
        readonly isKillPool: boolean;
        readonly asKillPool: {
            readonly pid: u32;
        } & Struct;
        readonly isForceRetirePool: boolean;
        readonly asForceRetirePool: {
            readonly pid: u32;
        } & Struct;
        readonly isEditPool: boolean;
        readonly asEditPool: {
            readonly pid: u32;
            readonly redeemLimitTime: u32;
            readonly unlockLimitNums: u32;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly pid: u32;
            readonly value: u128;
        } & Struct;
        readonly isRedeem: boolean;
        readonly asRedeem: {
            readonly pid: u32;
            readonly value: u128;
        } & Struct;
        readonly isRedeemAll: boolean;
        readonly asRedeemAll: {
            readonly pid: u32;
        } & Struct;
        readonly isVolunteerToRedeem: boolean;
        readonly asVolunteerToRedeem: {
            readonly pid: u32;
            readonly account: Option<AccountId32>;
        } & Struct;
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly pid: u32;
        } & Struct;
        readonly isUnlock: boolean;
        readonly asUnlock: {
            readonly pid: u32;
        } & Struct;
        readonly isCancelUnlock: boolean;
        readonly asCancelUnlock: {
            readonly pid: u32;
            readonly index: u32;
        } & Struct;
        readonly isLazyMigrationV200: boolean;
        readonly asLazyMigrationV200: {
            readonly maxNums: u32;
        } & Struct;
        readonly type: 'CreateSingleTokenPool' | 'CreateMiningPool' | 'CreateFarmingPool' | 'CreateEbFarmingPool' | 'Charge' | 'KillPool' | 'ForceRetirePool' | 'EditPool' | 'Deposit' | 'Redeem' | 'RedeemAll' | 'VolunteerToRedeem' | 'Claim' | 'Unlock' | 'CancelUnlock' | 'LazyMigrationV200';
    }
    /** @name BifrostTokenIssuerCall (461) */
    interface BifrostTokenIssuerCall extends Enum {
        readonly isAddToIssueWhitelist: boolean;
        readonly asAddToIssueWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isRemoveFromIssueWhitelist: boolean;
        readonly asRemoveFromIssueWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isAddToTransferWhitelist: boolean;
        readonly asAddToTransferWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isRemoveFromTransferWhitelist: boolean;
        readonly asRemoveFromTransferWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isIssue: boolean;
        readonly asIssue: {
            readonly dest: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly dest: AccountId32;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly type: 'AddToIssueWhitelist' | 'RemoveFromIssueWhitelist' | 'AddToTransferWhitelist' | 'RemoveFromTransferWhitelist' | 'Issue' | 'Transfer';
    }
    /** @name BifrostLighteningRedeemCall (462) */
    interface BifrostLighteningRedeemCall extends Enum {
        readonly isAddKsmToPool: boolean;
        readonly asAddKsmToPool: {
            readonly tokenAmount: u128;
        } & Struct;
        readonly isExchangeForKsm: boolean;
        readonly asExchangeForKsm: {
            readonly tokenAmount: u128;
        } & Struct;
        readonly isEditExchangePrice: boolean;
        readonly asEditExchangePrice: {
            readonly price: u128;
        } & Struct;
        readonly isEditReleasePerDay: boolean;
        readonly asEditReleasePerDay: {
            readonly amountPerDay: u128;
        } & Struct;
        readonly isEditReleaseStartAndEndBlock: boolean;
        readonly asEditReleaseStartAndEndBlock: {
            readonly start: u32;
            readonly end: u32;
        } & Struct;
        readonly type: 'AddKsmToPool' | 'ExchangeForKsm' | 'EditExchangePrice' | 'EditReleasePerDay' | 'EditReleaseStartAndEndBlock';
    }
    /** @name BifrostSalpLiteCall (463) */
    interface BifrostSalpLiteCall extends Enum {
        readonly isSetMultisigConfirmAccount: boolean;
        readonly asSetMultisigConfirmAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isFundSuccess: boolean;
        readonly asFundSuccess: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isFundFail: boolean;
        readonly asFundFail: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isFundRetire: boolean;
        readonly asFundRetire: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isIssue: boolean;
        readonly asIssue: {
            readonly who: AccountId32;
            readonly index: Compact<u32>;
            readonly value: Compact<u128>;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isRedeem: boolean;
        readonly asRedeem: {
            readonly index: Compact<u32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isDissolve: boolean;
        readonly asDissolve: {
            readonly index: Compact<u32>;
        } & Struct;
        readonly isContinueFund: boolean;
        readonly asContinueFund: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isRefund: boolean;
        readonly asRefund: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isDissolveRefunded: boolean;
        readonly asDissolveRefunded: {
            readonly index: Compact<u32>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
        } & Struct;
        readonly isEdit: boolean;
        readonly asEdit: {
            readonly index: Compact<u32>;
            readonly cap: Compact<u128>;
            readonly raised: Compact<u128>;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly fundStatus: Option<BifrostSalpLiteFundStatus>;
        } & Struct;
        readonly type: 'SetMultisigConfirmAccount' | 'FundSuccess' | 'FundFail' | 'FundRetire' | 'Create' | 'Issue' | 'Withdraw' | 'Redeem' | 'Dissolve' | 'ContinueFund' | 'Refund' | 'DissolveRefunded' | 'Edit';
    }
    /** @name BifrostSalpLiteFundStatus (465) */
    interface BifrostSalpLiteFundStatus extends Enum {
        readonly isOngoing: boolean;
        readonly isRetired: boolean;
        readonly isSuccess: boolean;
        readonly isFailed: boolean;
        readonly isRefundWithdrew: boolean;
        readonly isRedeemWithdrew: boolean;
        readonly isFailedToContinue: boolean;
        readonly type: 'Ongoing' | 'Retired' | 'Success' | 'Failed' | 'RefundWithdrew' | 'RedeemWithdrew' | 'FailedToContinue';
    }
    /** @name BifrostCallSwitchgearCall (466) */
    interface BifrostCallSwitchgearCall extends Enum {
        readonly isSwitchoffTransaction: boolean;
        readonly asSwitchoffTransaction: {
            readonly palletName: Bytes;
            readonly functionName: Bytes;
        } & Struct;
        readonly isSwitchonTransaction: boolean;
        readonly asSwitchonTransaction: {
            readonly palletName: Bytes;
            readonly functionName: Bytes;
        } & Struct;
        readonly isDisableTransfers: boolean;
        readonly asDisableTransfers: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isEnableTransfers: boolean;
        readonly asEnableTransfers: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly type: 'SwitchoffTransaction' | 'SwitchonTransaction' | 'DisableTransfers' | 'EnableTransfers';
    }
    /** @name BifrostVsbondAuctionCall (467) */
    interface BifrostVsbondAuctionCall extends Enum {
        readonly isCreateOrder: boolean;
        readonly asCreateOrder: {
            readonly index: Compact<u32>;
            readonly tokenSymbol: NodePrimitivesCurrencyTokenSymbol;
            readonly firstSlot: Compact<u32>;
            readonly lastSlot: Compact<u32>;
            readonly amount: Compact<u128>;
            readonly totalPrice: Compact<u128>;
            readonly orderType: BifrostVsbondAuctionOrderType;
        } & Struct;
        readonly isRevokeOrder: boolean;
        readonly asRevokeOrder: {
            readonly orderId: Compact<u64>;
        } & Struct;
        readonly isForceRevoke: boolean;
        readonly asForceRevoke: {
            readonly orderId: Compact<u64>;
        } & Struct;
        readonly isClinchOrder: boolean;
        readonly asClinchOrder: {
            readonly orderId: Compact<u64>;
        } & Struct;
        readonly isPartialClinchOrder: boolean;
        readonly asPartialClinchOrder: {
            readonly orderId: Compact<u64>;
            readonly quantity: Compact<u128>;
        } & Struct;
        readonly isSetBuyAndSellTransactionFeeRate: boolean;
        readonly asSetBuyAndSellTransactionFeeRate: {
            readonly buyRate: u32;
            readonly sellRate: u32;
        } & Struct;
        readonly type: 'CreateOrder' | 'RevokeOrder' | 'ForceRevoke' | 'ClinchOrder' | 'PartialClinchOrder' | 'SetBuyAndSellTransactionFeeRate';
    }
    /** @name BifrostAssetRegistryCall (468) */
    interface BifrostAssetRegistryCall extends Enum {
        readonly isRegisterNativeAsset: boolean;
        readonly asRegisterNativeAsset: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly location: XcmVersionedMultiLocation;
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isUpdateNativeAsset: boolean;
        readonly asUpdateNativeAsset: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly location: XcmVersionedMultiLocation;
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isRegisterTokenMetadata: boolean;
        readonly asRegisterTokenMetadata: {
            readonly metadata: BifrostAssetRegistryAssetMetadata;
        } & Struct;
        readonly isRegisterVtokenMetadata: boolean;
        readonly asRegisterVtokenMetadata: {
            readonly tokenId: u8;
        } & Struct;
        readonly isRegisterVstokenMetadata: boolean;
        readonly asRegisterVstokenMetadata: {
            readonly tokenId: u8;
        } & Struct;
        readonly isRegisterVsbondMetadata: boolean;
        readonly asRegisterVsbondMetadata: {
            readonly tokenId: u8;
            readonly paraId: u32;
            readonly firstSlot: u32;
            readonly lastSlot: u32;
        } & Struct;
        readonly isRegisterMultilocation: boolean;
        readonly asRegisterMultilocation: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly location: XcmVersionedMultiLocation;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isForceSetMultilocation: boolean;
        readonly asForceSetMultilocation: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly location: XcmVersionedMultiLocation;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: 'RegisterNativeAsset' | 'UpdateNativeAsset' | 'RegisterTokenMetadata' | 'RegisterVtokenMetadata' | 'RegisterVstokenMetadata' | 'RegisterVsbondMetadata' | 'RegisterMultilocation' | 'ForceSetMultilocation';
    }
    /** @name BifrostVtokenMintingCall (469) */
    interface BifrostVtokenMintingCall extends Enum {
        readonly isMint: boolean;
        readonly asMint: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
        } & Struct;
        readonly isRedeem: boolean;
        readonly asRedeem: {
            readonly vtokenId: NodePrimitivesCurrencyCurrencyId;
            readonly vtokenAmount: u128;
        } & Struct;
        readonly isRebond: boolean;
        readonly asRebond: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly tokenAmount: u128;
        } & Struct;
        readonly isRebondByUnlockId: boolean;
        readonly asRebondByUnlockId: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly unlockId: u32;
        } & Struct;
        readonly isSetUnlockDuration: boolean;
        readonly asSetUnlockDuration: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly unlockDuration: NodePrimitivesTimeUnit;
        } & Struct;
        readonly isSetMinimumMint: boolean;
        readonly asSetMinimumMint: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isSetMinimumRedeem: boolean;
        readonly asSetMinimumRedeem: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isAddSupportRebondToken: boolean;
        readonly asAddSupportRebondToken: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isRemoveSupportRebondToken: boolean;
        readonly asRemoveSupportRebondToken: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isSetFees: boolean;
        readonly asSetFees: {
            readonly mintFee: Permill;
            readonly redeemFee: Permill;
        } & Struct;
        readonly isSetHookIterationLimit: boolean;
        readonly asSetHookIterationLimit: {
            readonly limit: u32;
        } & Struct;
        readonly isSetUnlockingTotal: boolean;
        readonly asSetUnlockingTotal: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: u128;
        } & Struct;
        readonly isSetMinTimeUnit: boolean;
        readonly asSetMinTimeUnit: {
            readonly tokenId: NodePrimitivesCurrencyCurrencyId;
            readonly timeUnit: NodePrimitivesTimeUnit;
        } & Struct;
        readonly type: 'Mint' | 'Redeem' | 'Rebond' | 'RebondByUnlockId' | 'SetUnlockDuration' | 'SetMinimumMint' | 'SetMinimumRedeem' | 'AddSupportRebondToken' | 'RemoveSupportRebondToken' | 'SetFees' | 'SetHookIterationLimit' | 'SetUnlockingTotal' | 'SetMinTimeUnit';
    }
    /** @name BifrostSlpCall (470) */
    interface BifrostSlpCall extends Enum {
        readonly isInitializeDelegator: boolean;
        readonly asInitializeDelegator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly delegatorLocation: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isBond: boolean;
        readonly asBond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
            readonly validator: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isBondExtra: boolean;
        readonly asBondExtra: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly validator: Option<XcmV3MultiLocation>;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isUnbond: boolean;
        readonly asUnbond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly validator: Option<XcmV3MultiLocation>;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isUnbondAll: boolean;
        readonly asUnbondAll: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isRebond: boolean;
        readonly asRebond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly validator: Option<XcmV3MultiLocation>;
            readonly amount: Option<u128>;
        } & Struct;
        readonly isDelegate: boolean;
        readonly asDelegate: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly targets: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isUndelegate: boolean;
        readonly asUndelegate: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly targets: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isRedelegate: boolean;
        readonly asRedelegate: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly targets: Option<Vec<XcmV3MultiLocation>>;
        } & Struct;
        readonly isPayout: boolean;
        readonly asPayout: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly validator: XcmV3MultiLocation;
            readonly when: Option<NodePrimitivesTimeUnit>;
        } & Struct;
        readonly isLiquidize: boolean;
        readonly asLiquidize: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly when: Option<NodePrimitivesTimeUnit>;
            readonly validator: Option<XcmV3MultiLocation>;
            readonly amount: Option<u128>;
        } & Struct;
        readonly isChill: boolean;
        readonly asChill: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isTransferBack: boolean;
        readonly asTransferBack: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: XcmV3MultiLocation;
            readonly to: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferTo: boolean;
        readonly asTransferTo: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly from: XcmV3MultiLocation;
            readonly to: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isConvertAsset: boolean;
        readonly asConvertAsset: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly amount: Compact<u128>;
            readonly ifFromCurrency: bool;
        } & Struct;
        readonly isIncreaseTokenPool: boolean;
        readonly asIncreaseTokenPool: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isDecreaseTokenPool: boolean;
        readonly asDecreaseTokenPool: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isUpdateOngoingTimeUnit: boolean;
        readonly asUpdateOngoingTimeUnit: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly timeUnit: NodePrimitivesTimeUnit;
        } & Struct;
        readonly isRefundCurrencyDueUnbond: boolean;
        readonly asRefundCurrencyDueUnbond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isSupplementFeeReserve: boolean;
        readonly asSupplementFeeReserve: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly dest: XcmV3MultiLocation;
        } & Struct;
        readonly isChargeHostFeeAndTuneVtokenExchangeRate: boolean;
        readonly asChargeHostFeeAndTuneVtokenExchangeRate: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly value: Compact<u128>;
            readonly who: Option<XcmV3MultiLocation>;
        } & Struct;
        readonly isSetXcmDestWeightAndFee: boolean;
        readonly asSetXcmDestWeightAndFee: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly operation: BifrostSlpPrimitivesXcmOperation;
            readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
        } & Struct;
        readonly isSetOperateOrigin: boolean;
        readonly asSetOperateOrigin: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: Option<AccountId32>;
        } & Struct;
        readonly isSetFeeSource: boolean;
        readonly asSetFeeSource: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly whoAndFee: Option<ITuple<[XcmV3MultiLocation, u128]>>;
        } & Struct;
        readonly isAddDelegator: boolean;
        readonly asAddDelegator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly index: Compact<u16>;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isRemoveDelegator: boolean;
        readonly asRemoveDelegator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isAddValidator: boolean;
        readonly asAddValidator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isRemoveValidator: boolean;
        readonly asRemoveValidator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isSetValidatorsByDelegator: boolean;
        readonly asSetValidatorsByDelegator: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly validators: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isSetDelegatorLedger: boolean;
        readonly asSetDelegatorLedger: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
            readonly ledger: Option<BifrostSlpPrimitivesLedger>;
        } & Struct;
        readonly isSetMinimumsAndMaximums: boolean;
        readonly asSetMinimumsAndMaximums: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly constraints: Option<BifrostSlpPrimitivesMinimumsMaximums>;
        } & Struct;
        readonly isSetCurrencyDelays: boolean;
        readonly asSetCurrencyDelays: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly maybeDelays: Option<BifrostSlpPrimitivesDelays>;
        } & Struct;
        readonly isSetHostingFees: boolean;
        readonly asSetHostingFees: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly maybeFeeSet: Option<ITuple<[Permill, XcmV3MultiLocation]>>;
        } & Struct;
        readonly isSetCurrencyTuneExchangeRateLimit: boolean;
        readonly asSetCurrencyTuneExchangeRateLimit: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly maybeTuneExchangeRateLimit: Option<ITuple<[u32, Permill]>>;
        } & Struct;
        readonly isSetOngoingTimeUnitUpdateInterval: boolean;
        readonly asSetOngoingTimeUnitUpdateInterval: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly maybeInterval: Option<u32>;
        } & Struct;
        readonly isAddSupplementFeeAccountToWhitelist: boolean;
        readonly asAddSupplementFeeAccountToWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isRemoveSupplementFeeAccountFromWhitelist: boolean;
        readonly asRemoveSupplementFeeAccountFromWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isConfirmDelegatorLedgerQueryResponse: boolean;
        readonly asConfirmDelegatorLedgerQueryResponse: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isFailDelegatorLedgerQueryResponse: boolean;
        readonly asFailDelegatorLedgerQueryResponse: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isConfirmValidatorsByDelegatorQueryResponse: boolean;
        readonly asConfirmValidatorsByDelegatorQueryResponse: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isFailValidatorsByDelegatorQueryResponse: boolean;
        readonly asFailValidatorsByDelegatorQueryResponse: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly queryId: Compact<u64>;
        } & Struct;
        readonly isConfirmDelegatorLedger: boolean;
        readonly asConfirmDelegatorLedger: {
            readonly queryId: u64;
            readonly response: XcmV3Response;
        } & Struct;
        readonly isConfirmValidatorsByDelegator: boolean;
        readonly asConfirmValidatorsByDelegator: {
            readonly queryId: u64;
            readonly response: XcmV3Response;
        } & Struct;
        readonly isResetValidators: boolean;
        readonly asResetValidators: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorList: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isSetValidatorBoostList: boolean;
        readonly asSetValidatorBoostList: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly validatorList: Vec<XcmV3MultiLocation>;
        } & Struct;
        readonly isAddToValidatorBoostList: boolean;
        readonly asAddToValidatorBoostList: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly isRemoveFromValidatorBootList: boolean;
        readonly asRemoveFromValidatorBootList: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: XcmV3MultiLocation;
        } & Struct;
        readonly type: 'InitializeDelegator' | 'Bond' | 'BondExtra' | 'Unbond' | 'UnbondAll' | 'Rebond' | 'Delegate' | 'Undelegate' | 'Redelegate' | 'Payout' | 'Liquidize' | 'Chill' | 'TransferBack' | 'TransferTo' | 'ConvertAsset' | 'IncreaseTokenPool' | 'DecreaseTokenPool' | 'UpdateOngoingTimeUnit' | 'RefundCurrencyDueUnbond' | 'SupplementFeeReserve' | 'ChargeHostFeeAndTuneVtokenExchangeRate' | 'SetXcmDestWeightAndFee' | 'SetOperateOrigin' | 'SetFeeSource' | 'AddDelegator' | 'RemoveDelegator' | 'AddValidator' | 'RemoveValidator' | 'SetValidatorsByDelegator' | 'SetDelegatorLedger' | 'SetMinimumsAndMaximums' | 'SetCurrencyDelays' | 'SetHostingFees' | 'SetCurrencyTuneExchangeRateLimit' | 'SetOngoingTimeUnitUpdateInterval' | 'AddSupplementFeeAccountToWhitelist' | 'RemoveSupplementFeeAccountFromWhitelist' | 'ConfirmDelegatorLedgerQueryResponse' | 'FailDelegatorLedgerQueryResponse' | 'ConfirmValidatorsByDelegatorQueryResponse' | 'FailValidatorsByDelegatorQueryResponse' | 'ConfirmDelegatorLedger' | 'ConfirmValidatorsByDelegator' | 'ResetValidators' | 'SetValidatorBoostList' | 'AddToValidatorBoostList' | 'RemoveFromValidatorBootList';
    }
    /** @name XcmInterfaceCall (472) */
    interface XcmInterfaceCall extends Enum {
        readonly isUpdateXcmDestWeightAndFee: boolean;
        readonly asUpdateXcmDestWeightAndFee: {
            readonly updates: Vec<ITuple<[XcmInterfaceXcmInterfaceOperation, Option<SpWeightsWeightV2Weight>, Option<u128>]>>;
        } & Struct;
        readonly isTransferStatemineAssets: boolean;
        readonly asTransferStatemineAssets: {
            readonly amount: u128;
            readonly assetId: u32;
            readonly dest: Option<AccountId32>;
        } & Struct;
        readonly type: 'UpdateXcmDestWeightAndFee' | 'TransferStatemineAssets';
    }
    /** @name BifrostVstokenConversionCall (475) */
    interface BifrostVstokenConversionCall extends Enum {
        readonly isVsbondConvertToVstoken: boolean;
        readonly asVsbondConvertToVstoken: {
            readonly vsBondCurrencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vsbondAmount: u128;
            readonly minimumVstoken: u128;
        } & Struct;
        readonly isVstokenConvertToVsbond: boolean;
        readonly asVstokenConvertToVsbond: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly vstokenAmount: u128;
            readonly minimumVsbond: u128;
        } & Struct;
        readonly isSetExchangeFee: boolean;
        readonly asSetExchangeFee: {
            readonly exchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee;
        } & Struct;
        readonly isSetExchangeRate: boolean;
        readonly asSetExchangeRate: {
            readonly lease: i32;
            readonly exchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate;
        } & Struct;
        readonly isSetRelaychainLease: boolean;
        readonly asSetRelaychainLease: {
            readonly lease: u32;
        } & Struct;
        readonly type: 'VsbondConvertToVstoken' | 'VstokenConvertToVsbond' | 'SetExchangeFee' | 'SetExchangeRate' | 'SetRelaychainLease';
    }
    /** @name BifrostFarmingCall (476) */
    interface BifrostFarmingCall extends Enum {
        readonly isCreateFarmingPool: boolean;
        readonly asCreateFarmingPool: {
            readonly tokensProportion: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, Perbill]>>;
            readonly basicRewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
            readonly gaugeInit: Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>>;
            readonly minDepositToStart: u128;
            readonly afterBlockToStart: Compact<u32>;
            readonly withdrawLimitTime: Compact<u32>;
            readonly claimLimitTime: Compact<u32>;
            readonly withdrawLimitCount: u8;
        } & Struct;
        readonly isCharge: boolean;
        readonly asCharge: {
            readonly pid: u32;
            readonly rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly pid: u32;
            readonly addValue: u128;
            readonly gaugeInfo: Option<ITuple<[u128, u32]>>;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly pid: u32;
            readonly removeValue: Option<u128>;
        } & Struct;
        readonly isClaim: boolean;
        readonly asClaim: {
            readonly pid: u32;
        } & Struct;
        readonly isWithdrawClaim: boolean;
        readonly asWithdrawClaim: {
            readonly pid: u32;
        } & Struct;
        readonly isForceRetirePool: boolean;
        readonly asForceRetirePool: {
            readonly pid: u32;
        } & Struct;
        readonly isSetRetireLimit: boolean;
        readonly asSetRetireLimit: {
            readonly limit: u32;
        } & Struct;
        readonly isClosePool: boolean;
        readonly asClosePool: {
            readonly pid: u32;
        } & Struct;
        readonly isResetPool: boolean;
        readonly asResetPool: {
            readonly pid: u32;
            readonly basicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>;
            readonly minDepositToStart: Option<u128>;
            readonly afterBlockToStart: Option<u32>;
            readonly withdrawLimitTime: Option<u32>;
            readonly claimLimitTime: Option<u32>;
            readonly withdrawLimitCount: Option<u8>;
            readonly gaugeInit: Option<ITuple<[NodePrimitivesCurrencyCurrencyId, u32, Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>]>>;
        } & Struct;
        readonly isKillPool: boolean;
        readonly asKillPool: {
            readonly pid: u32;
        } & Struct;
        readonly isEditPool: boolean;
        readonly asEditPool: {
            readonly pid: u32;
            readonly basicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>;
            readonly withdrawLimitTime: Option<u32>;
            readonly claimLimitTime: Option<u32>;
            readonly gaugeBasicRewards: Option<Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>>;
            readonly withdrawLimitCount: Option<u8>;
        } & Struct;
        readonly isGaugeWithdraw: boolean;
        readonly asGaugeWithdraw: {
            readonly gid: u32;
        } & Struct;
        readonly isForceGaugeClaim: boolean;
        readonly asForceGaugeClaim: {
            readonly gid: u32;
        } & Struct;
        readonly isAddBoostPoolWhitelist: boolean;
        readonly asAddBoostPoolWhitelist: {
            readonly whitelist: Vec<u32>;
        } & Struct;
        readonly isSetNextRoundWhitelist: boolean;
        readonly asSetNextRoundWhitelist: {
            readonly whitelist: Vec<u32>;
        } & Struct;
        readonly isVote: boolean;
        readonly asVote: {
            readonly voteList: Vec<ITuple<[u32, Percent]>>;
        } & Struct;
        readonly isStartBoostRound: boolean;
        readonly asStartBoostRound: {
            readonly roundLength: u32;
        } & Struct;
        readonly isEndBoostRound: boolean;
        readonly isChargeBoost: boolean;
        readonly asChargeBoost: {
            readonly rewards: Vec<ITuple<[NodePrimitivesCurrencyCurrencyId, u128]>>;
        } & Struct;
        readonly type: 'CreateFarmingPool' | 'Charge' | 'Deposit' | 'Withdraw' | 'Claim' | 'WithdrawClaim' | 'ForceRetirePool' | 'SetRetireLimit' | 'ClosePool' | 'ResetPool' | 'KillPool' | 'EditPool' | 'GaugeWithdraw' | 'ForceGaugeClaim' | 'AddBoostPoolWhitelist' | 'SetNextRoundWhitelist' | 'Vote' | 'StartBoostRound' | 'EndBoostRound' | 'ChargeBoost';
    }
    /** @name BifrostSystemStakingCall (483) */
    interface BifrostSystemStakingCall extends Enum {
        readonly isTokenConfig: boolean;
        readonly asTokenConfig: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
            readonly execDelay: Option<u32>;
            readonly systemStakableFarmingRate: Option<Permill>;
            readonly addOrSub: Option<bool>;
            readonly systemStakableBase: Option<u128>;
            readonly farmingPoolids: Option<Vec<u32>>;
            readonly lptokenRates: Option<Vec<Perbill>>;
        } & Struct;
        readonly isDeleteToken: boolean;
        readonly asDeleteToken: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isRefreshTokenInfo: boolean;
        readonly asRefreshTokenInfo: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isPayout: boolean;
        readonly asPayout: {
            readonly token: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly type: 'TokenConfig' | 'DeleteToken' | 'RefreshTokenInfo' | 'Payout';
    }
    /** @name BifrostSystemMakerCall (488) */
    interface BifrostSystemMakerCall extends Enum {
        readonly isSetConfig: boolean;
        readonly asSetConfig: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly info: BifrostSystemMakerInfo;
        } & Struct;
        readonly isCharge: boolean;
        readonly asCharge: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly value: u128;
        } & Struct;
        readonly isClose: boolean;
        readonly asClose: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isPayout: boolean;
        readonly asPayout: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly value: u128;
        } & Struct;
        readonly type: 'SetConfig' | 'Charge' | 'Close' | 'Payout';
    }
    /** @name BifrostFeeShareCall (489) */
    interface BifrostFeeShareCall extends Enum {
        readonly isCreateDistribution: boolean;
        readonly asCreateDistribution: {
            readonly tokenType: Vec<NodePrimitivesCurrencyCurrencyId>;
            readonly tokensProportion: Vec<ITuple<[AccountId32, Perbill]>>;
            readonly ifAuto: bool;
        } & Struct;
        readonly isEditDistribution: boolean;
        readonly asEditDistribution: {
            readonly distributionId: u32;
            readonly tokenType: Option<Vec<NodePrimitivesCurrencyCurrencyId>>;
            readonly tokensProportion: Option<Vec<ITuple<[AccountId32, Perbill]>>>;
            readonly ifAuto: Option<bool>;
        } & Struct;
        readonly isSetEraLength: boolean;
        readonly asSetEraLength: {
            readonly eraLength: u32;
        } & Struct;
        readonly isExecuteDistribute: boolean;
        readonly asExecuteDistribute: {
            readonly distributionId: u32;
        } & Struct;
        readonly isDeleteDistribution: boolean;
        readonly asDeleteDistribution: {
            readonly distributionId: u32;
        } & Struct;
        readonly type: 'CreateDistribution' | 'EditDistribution' | 'SetEraLength' | 'ExecuteDistribute' | 'DeleteDistribution';
    }
    /** @name BifrostCrossInOutCall (492) */
    interface BifrostCrossInOutCall extends Enum {
        readonly isCrossIn: boolean;
        readonly asCrossIn: {
            readonly location: XcmV2MultiLocation;
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
            readonly remark: Option<Bytes>;
        } & Struct;
        readonly isCrossOut: boolean;
        readonly asCrossOut: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isRegisterLinkedAccount: boolean;
        readonly asRegisterLinkedAccount: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly who: AccountId32;
            readonly foreignLocation: XcmV2MultiLocation;
        } & Struct;
        readonly isChangeOuterLinkedAccount: boolean;
        readonly asChangeOuterLinkedAccount: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly foreignLocation: XcmV2MultiLocation;
            readonly account: AccountId32;
        } & Struct;
        readonly isRegisterCurrencyForCrossInOut: boolean;
        readonly asRegisterCurrencyForCrossInOut: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isDeregisterCurrencyForCrossInOut: boolean;
        readonly asDeregisterCurrencyForCrossInOut: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
        } & Struct;
        readonly isAddToIssueWhitelist: boolean;
        readonly asAddToIssueWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isRemoveFromIssueWhitelist: boolean;
        readonly asRemoveFromIssueWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isAddToRegisterWhitelist: boolean;
        readonly asAddToRegisterWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isRemoveFromRegisterWhitelist: boolean;
        readonly asRemoveFromRegisterWhitelist: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly account: AccountId32;
        } & Struct;
        readonly isSetCrossingMinimumAmount: boolean;
        readonly asSetCrossingMinimumAmount: {
            readonly currencyId: NodePrimitivesCurrencyCurrencyId;
            readonly crossInMinimum: u128;
            readonly crossOutMinimum: u128;
        } & Struct;
        readonly type: 'CrossIn' | 'CrossOut' | 'RegisterLinkedAccount' | 'ChangeOuterLinkedAccount' | 'RegisterCurrencyForCrossInOut' | 'DeregisterCurrencyForCrossInOut' | 'AddToIssueWhitelist' | 'RemoveFromIssueWhitelist' | 'AddToRegisterWhitelist' | 'RemoveFromRegisterWhitelist' | 'SetCrossingMinimumAmount';
    }
    /** @name PalletDemocracyReferendumInfo (497) */
    interface PalletDemocracyReferendumInfo extends Enum {
        readonly isOngoing: boolean;
        readonly asOngoing: PalletDemocracyReferendumStatus;
        readonly isFinished: boolean;
        readonly asFinished: {
            readonly approved: bool;
            readonly end: u32;
        } & Struct;
        readonly type: 'Ongoing' | 'Finished';
    }
    /** @name PalletDemocracyReferendumStatus (498) */
    interface PalletDemocracyReferendumStatus extends Struct {
        readonly end: u32;
        readonly proposal: FrameSupportPreimagesBounded;
        readonly threshold: PalletDemocracyVoteThreshold;
        readonly delay: u32;
        readonly tally: PalletDemocracyTally;
    }
    /** @name PalletDemocracyTally (499) */
    interface PalletDemocracyTally extends Struct {
        readonly ayes: u128;
        readonly nays: u128;
        readonly turnout: u128;
    }
    /** @name PalletDemocracyVoteVoting (500) */
    interface PalletDemocracyVoteVoting extends Enum {
        readonly isDirect: boolean;
        readonly asDirect: {
            readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
            readonly delegations: PalletDemocracyDelegations;
            readonly prior: PalletDemocracyVotePriorLock;
        } & Struct;
        readonly isDelegating: boolean;
        readonly asDelegating: {
            readonly balance: u128;
            readonly target: AccountId32;
            readonly conviction: PalletDemocracyConviction;
            readonly delegations: PalletDemocracyDelegations;
            readonly prior: PalletDemocracyVotePriorLock;
        } & Struct;
        readonly type: 'Direct' | 'Delegating';
    }
    /** @name PalletDemocracyDelegations (504) */
    interface PalletDemocracyDelegations extends Struct {
        readonly votes: u128;
        readonly capital: u128;
    }
    /** @name PalletDemocracyVotePriorLock (505) */
    interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {
    }
    /** @name PalletDemocracyError (508) */
    interface PalletDemocracyError extends Enum {
        readonly isValueLow: boolean;
        readonly isProposalMissing: boolean;
        readonly isAlreadyCanceled: boolean;
        readonly isDuplicateProposal: boolean;
        readonly isProposalBlacklisted: boolean;
        readonly isNotSimpleMajority: boolean;
        readonly isInvalidHash: boolean;
        readonly isNoProposal: boolean;
        readonly isAlreadyVetoed: boolean;
        readonly isReferendumInvalid: boolean;
        readonly isNoneWaiting: boolean;
        readonly isNotVoter: boolean;
        readonly isNoPermission: boolean;
        readonly isAlreadyDelegating: boolean;
        readonly isInsufficientFunds: boolean;
        readonly isNotDelegating: boolean;
        readonly isVotesExist: boolean;
        readonly isInstantNotAllowed: boolean;
        readonly isNonsense: boolean;
        readonly isWrongUpperBound: boolean;
        readonly isMaxVotesReached: boolean;
        readonly isTooMany: boolean;
        readonly isVotingPeriodLow: boolean;
        readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow';
    }
    /** @name PalletCollectiveVotes (510) */
    interface PalletCollectiveVotes extends Struct {
        readonly index: u32;
        readonly threshold: u32;
        readonly ayes: Vec<AccountId32>;
        readonly nays: Vec<AccountId32>;
        readonly end: u32;
    }
    /** @name PalletCollectiveError (511) */
    interface PalletCollectiveError extends Enum {
        readonly isNotMember: boolean;
        readonly isDuplicateProposal: boolean;
        readonly isProposalMissing: boolean;
        readonly isWrongIndex: boolean;
        readonly isDuplicateVote: boolean;
        readonly isAlreadyInitialized: boolean;
        readonly isTooEarly: boolean;
        readonly isTooManyProposals: boolean;
        readonly isWrongProposalWeight: boolean;
        readonly isWrongProposalLength: boolean;
        readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
    }
    /** @name PalletElectionsPhragmenSeatHolder (515) */
    interface PalletElectionsPhragmenSeatHolder extends Struct {
        readonly who: AccountId32;
        readonly stake: u128;
        readonly deposit: u128;
    }
    /** @name PalletElectionsPhragmenVoter (516) */
    interface PalletElectionsPhragmenVoter extends Struct {
        readonly votes: Vec<AccountId32>;
        readonly stake: u128;
        readonly deposit: u128;
    }
    /** @name PalletElectionsPhragmenError (517) */
    interface PalletElectionsPhragmenError extends Enum {
        readonly isUnableToVote: boolean;
        readonly isNoVotes: boolean;
        readonly isTooManyVotes: boolean;
        readonly isMaximumVotesExceeded: boolean;
        readonly isLowBalance: boolean;
        readonly isUnableToPayBond: boolean;
        readonly isMustBeVoter: boolean;
        readonly isDuplicatedCandidate: boolean;
        readonly isTooManyCandidates: boolean;
        readonly isMemberSubmit: boolean;
        readonly isRunnerUpSubmit: boolean;
        readonly isInsufficientCandidateFunds: boolean;
        readonly isNotMember: boolean;
        readonly isInvalidWitnessData: boolean;
        readonly isInvalidVoteCount: boolean;
        readonly isInvalidRenouncing: boolean;
        readonly isInvalidReplacement: boolean;
        readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
    }
    /** @name PalletMembershipError (519) */
    interface PalletMembershipError extends Enum {
        readonly isAlreadyMember: boolean;
        readonly isNotMember: boolean;
        readonly isTooManyMembers: boolean;
        readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
    }
    /** @name CumulusPalletXcmpQueueInboundChannelDetails (523) */
    interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
        readonly sender: u32;
        readonly state: CumulusPalletXcmpQueueInboundState;
        readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
    }
    /** @name CumulusPalletXcmpQueueInboundState (524) */
    interface CumulusPalletXcmpQueueInboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name PolkadotParachainPrimitivesXcmpMessageFormat (527) */
    interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
        readonly isConcatenatedVersionedXcm: boolean;
        readonly isConcatenatedEncodedBlob: boolean;
        readonly isSignals: boolean;
        readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
    }
    /** @name CumulusPalletXcmpQueueOutboundChannelDetails (530) */
    interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
        readonly recipient: u32;
        readonly state: CumulusPalletXcmpQueueOutboundState;
        readonly signalsExist: bool;
        readonly firstIndex: u16;
        readonly lastIndex: u16;
    }
    /** @name CumulusPalletXcmpQueueOutboundState (531) */
    interface CumulusPalletXcmpQueueOutboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: 'Ok' | 'Suspended';
    }
    /** @name CumulusPalletXcmpQueueQueueConfigData (533) */
    interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
        readonly suspendThreshold: u32;
        readonly dropThreshold: u32;
        readonly resumeThreshold: u32;
        readonly thresholdWeight: SpWeightsWeightV2Weight;
        readonly weightRestrictDecay: SpWeightsWeightV2Weight;
        readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletXcmpQueueError (535) */
    interface CumulusPalletXcmpQueueError extends Enum {
        readonly isFailedToSend: boolean;
        readonly isBadXcmOrigin: boolean;
        readonly isBadXcm: boolean;
        readonly isBadOverweightIndex: boolean;
        readonly isWeightOverLimit: boolean;
        readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
    }
    /** @name PalletXcmQueryStatus (536) */
    interface PalletXcmQueryStatus extends Enum {
        readonly isPending: boolean;
        readonly asPending: {
            readonly responder: XcmVersionedMultiLocation;
            readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
            readonly maybeNotify: Option<ITuple<[u8, u8]>>;
            readonly timeout: u32;
        } & Struct;
        readonly isVersionNotifier: boolean;
        readonly asVersionNotifier: {
            readonly origin: XcmVersionedMultiLocation;
            readonly isActive: bool;
        } & Struct;
        readonly isReady: boolean;
        readonly asReady: {
            readonly response: XcmVersionedResponse;
            readonly at: u32;
        } & Struct;
        readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
    }
    /** @name XcmVersionedResponse (540) */
    interface XcmVersionedResponse extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Response;
        readonly isV3: boolean;
        readonly asV3: XcmV3Response;
        readonly type: 'V2' | 'V3';
    }
    /** @name PalletXcmVersionMigrationStage (546) */
    interface PalletXcmVersionMigrationStage extends Enum {
        readonly isMigrateSupportedVersion: boolean;
        readonly isMigrateVersionNotifiers: boolean;
        readonly isNotifyCurrentTargets: boolean;
        readonly asNotifyCurrentTargets: Option<Bytes>;
        readonly isMigrateAndNotifyOldTargets: boolean;
        readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
    }
    /** @name XcmVersionedAssetId (548) */
    interface XcmVersionedAssetId extends Enum {
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetAssetId;
        readonly type: 'V3';
    }
    /** @name PalletXcmRemoteLockedFungibleRecord (549) */
    interface PalletXcmRemoteLockedFungibleRecord extends Struct {
        readonly amount: u128;
        readonly owner: XcmVersionedMultiLocation;
        readonly locker: XcmVersionedMultiLocation;
        readonly users: u32;
    }
    /** @name PalletXcmError (553) */
    interface PalletXcmError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isFiltered: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isEmpty: boolean;
        readonly isCannotReanchor: boolean;
        readonly isTooManyAssets: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isBadVersion: boolean;
        readonly isBadLocation: boolean;
        readonly isNoSubscription: boolean;
        readonly isAlreadySubscribed: boolean;
        readonly isInvalidAsset: boolean;
        readonly isLowBalance: boolean;
        readonly isTooManyLocks: boolean;
        readonly isAccountNotSovereign: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockNotFound: boolean;
        readonly isInUse: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
    }
    /** @name CumulusPalletXcmError (554) */
    type CumulusPalletXcmError = Null;
    /** @name CumulusPalletDmpQueueConfigData (555) */
    interface CumulusPalletDmpQueueConfigData extends Struct {
        readonly maxIndividual: SpWeightsWeightV2Weight;
    }
    /** @name CumulusPalletDmpQueuePageIndexData (556) */
    interface CumulusPalletDmpQueuePageIndexData extends Struct {
        readonly beginUsed: u32;
        readonly endUsed: u32;
        readonly overweightCount: u64;
    }
    /** @name CumulusPalletDmpQueueError (559) */
    interface CumulusPalletDmpQueueError extends Enum {
        readonly isUnknown: boolean;
        readonly isOverLimit: boolean;
        readonly type: 'Unknown' | 'OverLimit';
    }
    /** @name PalletUtilityError (560) */
    interface PalletUtilityError extends Enum {
        readonly isTooManyCalls: boolean;
        readonly type: 'TooManyCalls';
    }
    /** @name PalletSchedulerScheduled (563) */
    interface PalletSchedulerScheduled extends Struct {
        readonly maybeId: Option<U8aFixed>;
        readonly priority: u8;
        readonly call: FrameSupportPreimagesBounded;
        readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
        readonly origin: BifrostKusamaRuntimeOriginCaller;
    }
    /** @name PalletSchedulerError (565) */
    interface PalletSchedulerError extends Enum {
        readonly isFailedToSchedule: boolean;
        readonly isNotFound: boolean;
        readonly isTargetBlockNumberInPast: boolean;
        readonly isRescheduleNoChange: boolean;
        readonly isNamed: boolean;
        readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
    }
    /** @name PalletProxyProxyDefinition (568) */
    interface PalletProxyProxyDefinition extends Struct {
        readonly delegate: AccountId32;
        readonly proxyType: BifrostKusamaRuntimeProxyType;
        readonly delay: u32;
    }
    /** @name PalletProxyAnnouncement (572) */
    interface PalletProxyAnnouncement extends Struct {
        readonly real: AccountId32;
        readonly callHash: H256;
        readonly height: u32;
    }
    /** @name PalletProxyError (574) */
    interface PalletProxyError extends Enum {
        readonly isTooMany: boolean;
        readonly isNotFound: boolean;
        readonly isNotProxy: boolean;
        readonly isUnproxyable: boolean;
        readonly isDuplicate: boolean;
        readonly isNoPermission: boolean;
        readonly isUnannounced: boolean;
        readonly isNoSelfProxy: boolean;
        readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
    }
    /** @name PalletMultisigMultisig (576) */
    interface PalletMultisigMultisig extends Struct {
        readonly when: PalletMultisigTimepoint;
        readonly deposit: u128;
        readonly depositor: AccountId32;
        readonly approvals: Vec<AccountId32>;
    }
    /** @name PalletMultisigError (578) */
    interface PalletMultisigError extends Enum {
        readonly isMinimumThreshold: boolean;
        readonly isAlreadyApproved: boolean;
        readonly isNoApprovalsNeeded: boolean;
        readonly isTooFewSignatories: boolean;
        readonly isTooManySignatories: boolean;
        readonly isSignatoriesOutOfOrder: boolean;
        readonly isSenderInSignatories: boolean;
        readonly isNotFound: boolean;
        readonly isNotOwner: boolean;
        readonly isNoTimepoint: boolean;
        readonly isWrongTimepoint: boolean;
        readonly isUnexpectedTimepoint: boolean;
        readonly isMaxWeightTooLow: boolean;
        readonly isAlreadyStored: boolean;
        readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
    }
    /** @name PalletIdentityRegistration (579) */
    interface PalletIdentityRegistration extends Struct {
        readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
        readonly deposit: u128;
        readonly info: PalletIdentityIdentityInfo;
    }
    /** @name PalletIdentityRegistrarInfo (587) */
    interface PalletIdentityRegistrarInfo extends Struct {
        readonly account: AccountId32;
        readonly fee: u128;
        readonly fields: PalletIdentityBitFlags;
    }
    /** @name PalletIdentityError (589) */
    interface PalletIdentityError extends Enum {
        readonly isTooManySubAccounts: boolean;
        readonly isNotFound: boolean;
        readonly isNotNamed: boolean;
        readonly isEmptyIndex: boolean;
        readonly isFeeChanged: boolean;
        readonly isNoIdentity: boolean;
        readonly isStickyJudgement: boolean;
        readonly isJudgementGiven: boolean;
        readonly isInvalidJudgement: boolean;
        readonly isInvalidIndex: boolean;
        readonly isInvalidTarget: boolean;
        readonly isTooManyFields: boolean;
        readonly isTooManyRegistrars: boolean;
        readonly isAlreadyClaimed: boolean;
        readonly isNotSub: boolean;
        readonly isNotOwned: boolean;
        readonly isJudgementForDifferentIdentity: boolean;
        readonly isJudgementPaymentFailed: boolean;
        readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
    }
    /** @name BifrostVestingError (590) */
    interface BifrostVestingError extends Enum {
        readonly isNotVesting: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isAmountLow: boolean;
        readonly isSamePerBlock: boolean;
        readonly isVestingStartAtNotSet: boolean;
        readonly isWrongLockedAmount: boolean;
        readonly isWrongCliffVesting: boolean;
        readonly type: 'NotVesting' | 'ExistingVestingSchedule' | 'AmountLow' | 'SamePerBlock' | 'VestingStartAtNotSet' | 'WrongLockedAmount' | 'WrongCliffVesting';
    }
    /** @name PalletTreasuryProposal (591) */
    interface PalletTreasuryProposal extends Struct {
        readonly proposer: AccountId32;
        readonly value: u128;
        readonly beneficiary: AccountId32;
        readonly bond: u128;
    }
    /** @name PalletTreasuryError (593) */
    interface PalletTreasuryError extends Enum {
        readonly isInsufficientProposersBalance: boolean;
        readonly isInvalidIndex: boolean;
        readonly isTooManyApprovals: boolean;
        readonly isInsufficientPermission: boolean;
        readonly isProposalNotApproved: boolean;
        readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
    }
    /** @name PalletBountiesBounty (594) */
    interface PalletBountiesBounty extends Struct {
        readonly proposer: AccountId32;
        readonly value: u128;
        readonly fee: u128;
        readonly curatorDeposit: u128;
        readonly bond: u128;
        readonly status: PalletBountiesBountyStatus;
    }
    /** @name PalletBountiesBountyStatus (595) */
    interface PalletBountiesBountyStatus extends Enum {
        readonly isProposed: boolean;
        readonly isApproved: boolean;
        readonly isFunded: boolean;
        readonly isCuratorProposed: boolean;
        readonly asCuratorProposed: {
            readonly curator: AccountId32;
        } & Struct;
        readonly isActive: boolean;
        readonly asActive: {
            readonly curator: AccountId32;
            readonly updateDue: u32;
        } & Struct;
        readonly isPendingPayout: boolean;
        readonly asPendingPayout: {
            readonly curator: AccountId32;
            readonly beneficiary: AccountId32;
            readonly unlockAt: u32;
        } & Struct;
        readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
    }
    /** @name PalletBountiesError (597) */
    interface PalletBountiesError extends Enum {
        readonly isInsufficientProposersBalance: boolean;
        readonly isInvalidIndex: boolean;
        readonly isReasonTooBig: boolean;
        readonly isUnexpectedStatus: boolean;
        readonly isRequireCurator: boolean;
        readonly isInvalidValue: boolean;
        readonly isInvalidFee: boolean;
        readonly isPendingPayout: boolean;
        readonly isPremature: boolean;
        readonly isHasActiveChildBounty: boolean;
        readonly isTooManyQueued: boolean;
        readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
    }
    /** @name PalletTipsOpenTip (598) */
    interface PalletTipsOpenTip extends Struct {
        readonly reason: H256;
        readonly who: AccountId32;
        readonly finder: AccountId32;
        readonly deposit: u128;
        readonly closes: Option<u32>;
        readonly tips: Vec<ITuple<[AccountId32, u128]>>;
        readonly findersFee: bool;
    }
    /** @name PalletTipsError (599) */
    interface PalletTipsError extends Enum {
        readonly isReasonTooBig: boolean;
        readonly isAlreadyKnown: boolean;
        readonly isUnknownTip: boolean;
        readonly isNotFinder: boolean;
        readonly isStillOpen: boolean;
        readonly isPremature: boolean;
        readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
    }
    /** @name PalletPreimageRequestStatus (600) */
    interface PalletPreimageRequestStatus extends Enum {
        readonly isUnrequested: boolean;
        readonly asUnrequested: {
            readonly deposit: ITuple<[AccountId32, u128]>;
            readonly len: u32;
        } & Struct;
        readonly isRequested: boolean;
        readonly asRequested: {
            readonly deposit: Option<ITuple<[AccountId32, u128]>>;
            readonly count: u32;
            readonly len: Option<u32>;
        } & Struct;
        readonly type: 'Unrequested' | 'Requested';
    }
    /** @name PalletPreimageError (604) */
    interface PalletPreimageError extends Enum {
        readonly isTooBig: boolean;
        readonly isAlreadyNoted: boolean;
        readonly isNotAuthorized: boolean;
        readonly isNotNoted: boolean;
        readonly isRequested: boolean;
        readonly isNotRequested: boolean;
        readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
    }
    /** @name OrmlXtokensModuleError (605) */
    interface OrmlXtokensModuleError extends Enum {
        readonly isAssetHasNoReserve: boolean;
        readonly isNotCrossChainTransfer: boolean;
        readonly isInvalidDest: boolean;
        readonly isNotCrossChainTransferableCurrency: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isXcmExecutionFailed: boolean;
        readonly isCannotReanchor: boolean;
        readonly isInvalidAncestry: boolean;
        readonly isInvalidAsset: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isBadVersion: boolean;
        readonly isDistinctReserveForAssetAndFee: boolean;
        readonly isZeroFee: boolean;
        readonly isZeroAmount: boolean;
        readonly isTooManyAssetsBeingSent: boolean;
        readonly isAssetIndexNonExistent: boolean;
        readonly isFeeNotEnough: boolean;
        readonly isNotSupportedMultiLocation: boolean;
        readonly isMinXcmFeeNotDefined: boolean;
        readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
    }
    /** @name OrmlTokensBalanceLock (608) */
    interface OrmlTokensBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensAccountData (610) */
    interface OrmlTokensAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly frozen: u128;
    }
    /** @name OrmlTokensReserveData (612) */
    interface OrmlTokensReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }
    /** @name OrmlTokensModuleError (614) */
    interface OrmlTokensModuleError extends Enum {
        readonly isBalanceTooLow: boolean;
        readonly isAmountIntoBalanceFailed: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isMaxLocksExceeded: boolean;
        readonly isKeepAlive: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
    }
    /** @name OrmlCurrenciesModuleError (615) */
    interface OrmlCurrenciesModuleError extends Enum {
        readonly isAmountIntoBalanceFailed: boolean;
        readonly isBalanceTooLow: boolean;
        readonly isDepositFailed: boolean;
        readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
    }
    /** @name OrmlUnknownTokensModuleError (618) */
    interface OrmlUnknownTokensModuleError extends Enum {
        readonly isBalanceTooLow: boolean;
        readonly isBalanceOverflow: boolean;
        readonly isUnhandledAsset: boolean;
        readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
    }
    /** @name OrmlXcmModuleError (619) */
    interface OrmlXcmModuleError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isBadVersion: boolean;
        readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
    }
    /** @name ZenlinkProtocolPrimitivesPairStatus (626) */
    interface ZenlinkProtocolPrimitivesPairStatus extends Enum {
        readonly isTrading: boolean;
        readonly asTrading: ZenlinkProtocolPrimitivesPairMetadata;
        readonly isBootstrap: boolean;
        readonly asBootstrap: ZenlinkProtocolPrimitivesBootstrapParameter;
        readonly isDisable: boolean;
        readonly type: 'Trading' | 'Bootstrap' | 'Disable';
    }
    /** @name ZenlinkProtocolPrimitivesPairMetadata (627) */
    interface ZenlinkProtocolPrimitivesPairMetadata extends Struct {
        readonly pairAccount: AccountId32;
        readonly totalSupply: u128;
    }
    /** @name ZenlinkProtocolPrimitivesBootstrapParameter (628) */
    interface ZenlinkProtocolPrimitivesBootstrapParameter extends Struct {
        readonly targetSupply: ITuple<[u128, u128]>;
        readonly capacitySupply: ITuple<[u128, u128]>;
        readonly accumulatedSupply: ITuple<[u128, u128]>;
        readonly endBlockNumber: u32;
        readonly pairAccount: AccountId32;
    }
    /** @name ZenlinkProtocolError (632) */
    interface ZenlinkProtocolError extends Enum {
        readonly isRequireProtocolAdmin: boolean;
        readonly isRequireProtocolAdminCandidate: boolean;
        readonly isInvalidFeePoint: boolean;
        readonly isUnsupportedAssetType: boolean;
        readonly isInsufficientAssetBalance: boolean;
        readonly isNativeBalanceTooLow: boolean;
        readonly isDeniedCreatePair: boolean;
        readonly isPairAlreadyExists: boolean;
        readonly isPairNotExists: boolean;
        readonly isAssetNotExists: boolean;
        readonly isInsufficientLiquidity: boolean;
        readonly isInsufficientPairReserve: boolean;
        readonly isInsufficientTargetAmount: boolean;
        readonly isExcessiveSoldAmount: boolean;
        readonly isInvalidPath: boolean;
        readonly isIncorrectAssetAmountRange: boolean;
        readonly isOverflow: boolean;
        readonly isDeadline: boolean;
        readonly isAccountIdBadLocation: boolean;
        readonly isExecutionFailed: boolean;
        readonly isDeniedTransferToSelf: boolean;
        readonly isTargetChainNotRegistered: boolean;
        readonly isInvariantCheckFailed: boolean;
        readonly isPairCreateForbidden: boolean;
        readonly isNotInBootstrap: boolean;
        readonly isInvalidContributionAmount: boolean;
        readonly isUnqualifiedBootstrap: boolean;
        readonly isZeroContribute: boolean;
        readonly isDenyRefund: boolean;
        readonly isDisableBootstrap: boolean;
        readonly isNotQualifiedAccount: boolean;
        readonly isNoRewardTokens: boolean;
        readonly isChargeRewardParamsError: boolean;
        readonly isExistRewardsInBootstrap: boolean;
        readonly type: 'RequireProtocolAdmin' | 'RequireProtocolAdminCandidate' | 'InvalidFeePoint' | 'UnsupportedAssetType' | 'InsufficientAssetBalance' | 'NativeBalanceTooLow' | 'DeniedCreatePair' | 'PairAlreadyExists' | 'PairNotExists' | 'AssetNotExists' | 'InsufficientLiquidity' | 'InsufficientPairReserve' | 'InsufficientTargetAmount' | 'ExcessiveSoldAmount' | 'InvalidPath' | 'IncorrectAssetAmountRange' | 'Overflow' | 'Deadline' | 'AccountIdBadLocation' | 'ExecutionFailed' | 'DeniedTransferToSelf' | 'TargetChainNotRegistered' | 'InvariantCheckFailed' | 'PairCreateForbidden' | 'NotInBootstrap' | 'InvalidContributionAmount' | 'UnqualifiedBootstrap' | 'ZeroContribute' | 'DenyRefund' | 'DisableBootstrap' | 'NotQualifiedAccount' | 'NoRewardTokens' | 'ChargeRewardParamsError' | 'ExistRewardsInBootstrap';
    }
    /** @name MerkleDistributorMerkleMetadata (633) */
    interface MerkleDistributorMerkleMetadata extends Struct {
        readonly merkleRoot: H256;
        readonly description: Bytes;
        readonly distributeCurrency: NodePrimitivesCurrencyCurrencyId;
        readonly distributeAmount: u128;
        readonly distributeHolder: AccountId32;
        readonly charged: bool;
    }
    /** @name MerkleDistributorError (636) */
    interface MerkleDistributorError extends Enum {
        readonly isBadDescription: boolean;
        readonly isInvalidMerkleDistributorId: boolean;
        readonly isMerkleVerifyFailed: boolean;
        readonly isClaimed: boolean;
        readonly isCharged: boolean;
        readonly isWithdrawAmountExceed: boolean;
        readonly isBadChargeAccount: boolean;
        readonly isAlreadyInWhiteList: boolean;
        readonly isNotInWhiteList: boolean;
        readonly type: 'BadDescription' | 'InvalidMerkleDistributorId' | 'MerkleVerifyFailed' | 'Claimed' | 'Charged' | 'WithdrawAmountExceed' | 'BadChargeAccount' | 'AlreadyInWhiteList' | 'NotInWhiteList';
    }
    /** @name ZenlinkStableAmmPrimitivesPool (637) */
    interface ZenlinkStableAmmPrimitivesPool extends Enum {
        readonly isBase: boolean;
        readonly asBase: ZenlinkStableAmmPrimitivesBasePool;
        readonly isMeta: boolean;
        readonly asMeta: ZenlinkStableAmmPrimitivesMetaPool;
        readonly type: 'Base' | 'Meta';
    }
    /** @name ZenlinkStableAmmPrimitivesBasePool (638) */
    interface ZenlinkStableAmmPrimitivesBasePool extends Struct {
        readonly currencyIds: Vec<NodePrimitivesCurrencyCurrencyId>;
        readonly lpCurrencyId: NodePrimitivesCurrencyCurrencyId;
        readonly tokenMultipliers: Vec<u128>;
        readonly balances: Vec<u128>;
        readonly fee: u128;
        readonly adminFee: u128;
        readonly initialA: u128;
        readonly futureA: u128;
        readonly initialATime: u128;
        readonly futureATime: u128;
        readonly account: AccountId32;
        readonly adminFeeReceiver: AccountId32;
        readonly lpCurrencySymbol: Bytes;
        readonly lpCurrencyDecimal: u8;
    }
    /** @name ZenlinkStableAmmPrimitivesMetaPool (639) */
    interface ZenlinkStableAmmPrimitivesMetaPool extends Struct {
        readonly basePoolId: u32;
        readonly baseVirtualPrice: u128;
        readonly baseCacheLastUpdated: u64;
        readonly baseCurrencies: Vec<NodePrimitivesCurrencyCurrencyId>;
        readonly info: ZenlinkStableAmmPrimitivesBasePool;
    }
    /** @name ZenlinkStableAmmError (640) */
    interface ZenlinkStableAmmError extends Enum {
        readonly isInvalidPooledCurrency: boolean;
        readonly isInvalidLpCurrency: boolean;
        readonly isMismatchParameter: boolean;
        readonly isInvalidCurrencyDecimal: boolean;
        readonly isInvalidPoolId: boolean;
        readonly isInvalidBasePool: boolean;
        readonly isArithmetic: boolean;
        readonly isDeadline: boolean;
        readonly isInsufficientSupply: boolean;
        readonly isInsufficientReserve: boolean;
        readonly isCheckDFailed: boolean;
        readonly isAmountSlippage: boolean;
        readonly isSwapSameCurrency: boolean;
        readonly isCurrencyIndexOutRange: boolean;
        readonly isInsufficientLpReserve: boolean;
        readonly isExceedThreshold: boolean;
        readonly isRampADelay: boolean;
        readonly isMinRampTime: boolean;
        readonly isExceedMaxAChange: boolean;
        readonly isAlreadyStoppedRampA: boolean;
        readonly isExceedMaxFee: boolean;
        readonly isExceedMaxAdminFee: boolean;
        readonly isExceedMaxA: boolean;
        readonly isLpCurrencyAlreadyUsed: boolean;
        readonly isRequireAllCurrencies: boolean;
        readonly isBadPoolCurrencySymbol: boolean;
        readonly isInvalidTransaction: boolean;
        readonly isInvalidBasePoolLpCurrency: boolean;
        readonly isTokenIndexOutOfRange: boolean;
        readonly type: 'InvalidPooledCurrency' | 'InvalidLpCurrency' | 'MismatchParameter' | 'InvalidCurrencyDecimal' | 'InvalidPoolId' | 'InvalidBasePool' | 'Arithmetic' | 'Deadline' | 'InsufficientSupply' | 'InsufficientReserve' | 'CheckDFailed' | 'AmountSlippage' | 'SwapSameCurrency' | 'CurrencyIndexOutRange' | 'InsufficientLpReserve' | 'ExceedThreshold' | 'RampADelay' | 'MinRampTime' | 'ExceedMaxAChange' | 'AlreadyStoppedRampA' | 'ExceedMaxFee' | 'ExceedMaxAdminFee' | 'ExceedMaxA' | 'LpCurrencyAlreadyUsed' | 'RequireAllCurrencies' | 'BadPoolCurrencySymbol' | 'InvalidTransaction' | 'InvalidBasePoolLpCurrency' | 'TokenIndexOutOfRange';
    }
    /** @name ZenlinkSwapRouterError (641) */
    interface ZenlinkSwapRouterError extends Enum {
        readonly isMismatchPoolAndCurrencyId: boolean;
        readonly isDeadline: boolean;
        readonly isInvalidRoutes: boolean;
        readonly isConvertCurrencyFailed: boolean;
        readonly isAmountSlippage: boolean;
        readonly isInvalidPath: boolean;
        readonly type: 'MismatchPoolAndCurrencyId' | 'Deadline' | 'InvalidRoutes' | 'ConvertCurrencyFailed' | 'AmountSlippage' | 'InvalidPath';
    }
    /** @name BifrostFlexibleFeeError (642) */
    interface BifrostFlexibleFeeError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isOverflow: boolean;
        readonly isConversionError: boolean;
        readonly isWrongListLength: boolean;
        readonly type: 'NotEnoughBalance' | 'Overflow' | 'ConversionError' | 'WrongListLength';
    }
    /** @name BifrostSalpFundInfo (645) */
    interface BifrostSalpFundInfo extends Struct {
        readonly raised: u128;
        readonly cap: u128;
        readonly firstSlot: u32;
        readonly lastSlot: u32;
        readonly trieIndex: u32;
        readonly status: BifrostSalpFundStatus;
    }
    /** @name BifrostSalpError (647) */
    interface BifrostSalpError extends Enum {
        readonly isFirstSlotTooFarInFuture: boolean;
        readonly isLastSlotBeforeFirstSlot: boolean;
        readonly isLastSlotTooFarInFuture: boolean;
        readonly isOverflow: boolean;
        readonly isContributionTooSmall: boolean;
        readonly isZeroContribution: boolean;
        readonly isInvalidParaId: boolean;
        readonly isInvalidFundStatus: boolean;
        readonly isInvalidContributionStatus: boolean;
        readonly isCapExceeded: boolean;
        readonly isFundAlreadyCreated: boolean;
        readonly isXcmFailed: boolean;
        readonly isNotEnoughReservedAssetsToRefund: boolean;
        readonly isNotEnoughBalanceInRefundPool: boolean;
        readonly isNotEnoughBalanceToUnlock: boolean;
        readonly isVsBondExpired: boolean;
        readonly isUnRedeemableNow: boolean;
        readonly isNotEnoughFreeAssetsToRedeem: boolean;
        readonly isNotEnoughBalanceInRedeemPool: boolean;
        readonly isNotEnoughBalanceInFund: boolean;
        readonly isInvalidFundSameSlot: boolean;
        readonly isInvalidFundNotExist: boolean;
        readonly isInvalidRefund: boolean;
        readonly isNotEnoughBalanceToContribute: boolean;
        readonly isNotSupportTokenType: boolean;
        readonly isResponderNotRelayChain: boolean;
        readonly isNotFindContributionValue: boolean;
        readonly type: 'FirstSlotTooFarInFuture' | 'LastSlotBeforeFirstSlot' | 'LastSlotTooFarInFuture' | 'Overflow' | 'ContributionTooSmall' | 'ZeroContribution' | 'InvalidParaId' | 'InvalidFundStatus' | 'InvalidContributionStatus' | 'CapExceeded' | 'FundAlreadyCreated' | 'XcmFailed' | 'NotEnoughReservedAssetsToRefund' | 'NotEnoughBalanceInRefundPool' | 'NotEnoughBalanceToUnlock' | 'VsBondExpired' | 'UnRedeemableNow' | 'NotEnoughFreeAssetsToRedeem' | 'NotEnoughBalanceInRedeemPool' | 'NotEnoughBalanceInFund' | 'InvalidFundSameSlot' | 'InvalidFundNotExist' | 'InvalidRefund' | 'NotEnoughBalanceToContribute' | 'NotSupportTokenType' | 'ResponderNotRelayChain' | 'NotFindContributionValue';
    }
    /** @name BifrostLiquidityMiningPoolInfo (649) */
    interface BifrostLiquidityMiningPoolInfo extends Struct {
        readonly poolId: u32;
        readonly keeper: AccountId32;
        readonly investor: Option<AccountId32>;
        readonly tradingPair: ITuple<[NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyCurrencyId]>;
        readonly duration: u32;
        readonly r_type: BifrostLiquidityMiningPoolType;
        readonly minDepositToStart: u128;
        readonly afterBlockToStart: u32;
        readonly deposit: u128;
        readonly rewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, BifrostLiquidityMiningRewardData>;
        readonly updateB: u32;
        readonly state: BifrostLiquidityMiningPoolState;
        readonly blockStartup: Option<u32>;
        readonly blockRetired: Option<u32>;
        readonly redeemLimitTime: u32;
        readonly unlockLimitNums: u32;
        readonly pendingUnlockNums: u32;
    }
    /** @name BifrostLiquidityMiningRewardData (651) */
    interface BifrostLiquidityMiningRewardData extends Struct {
        readonly total: u128;
        readonly perBlock: u128;
        readonly claimed: u128;
        readonly gainAvg: u128;
    }
    /** @name BifrostLiquidityMiningPoolState (654) */
    interface BifrostLiquidityMiningPoolState extends Enum {
        readonly isUnCharged: boolean;
        readonly isCharged: boolean;
        readonly isOngoing: boolean;
        readonly isRetired: boolean;
        readonly isDead: boolean;
        readonly type: 'UnCharged' | 'Charged' | 'Ongoing' | 'Retired' | 'Dead';
    }
    /** @name BifrostLiquidityMiningDepositData (655) */
    interface BifrostLiquidityMiningDepositData extends Struct {
        readonly deposit: u128;
        readonly gainAvgs: BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>;
        readonly updateB: u32;
        readonly pendingUnlocks: Vec<ITuple<[u32, u128]>>;
    }
    /** @name BifrostLiquidityMiningStorageVersion (661) */
    interface BifrostLiquidityMiningStorageVersion extends Enum {
        readonly isV100: boolean;
        readonly isV200: boolean;
        readonly type: 'V100' | 'V200';
    }
    /** @name BifrostLiquidityMiningError (662) */
    interface BifrostLiquidityMiningError extends Enum {
        readonly isInvalidTradingPair: boolean;
        readonly isInvalidDuration: boolean;
        readonly isInvalidRewardPerBlock: boolean;
        readonly isInvalidDepositLimit: boolean;
        readonly isInvalidPoolId: boolean;
        readonly isInvalidPoolState: boolean;
        readonly isInvalidPoolType: boolean;
        readonly isDuplicateReward: boolean;
        readonly isExceedMaximumDeposit: boolean;
        readonly isExceedMaximumCharged: boolean;
        readonly isNotEnoughToDeposit: boolean;
        readonly isNotEnoughToRedeem: boolean;
        readonly isNotEnoughToUnlock: boolean;
        readonly isNoDepositOfUser: boolean;
        readonly isTooLowToDeposit: boolean;
        readonly isTooLowToRedeem: boolean;
        readonly isTooShortBetweenTwoClaim: boolean;
        readonly isPoolChargedAlready: boolean;
        readonly isExceedMaximumUnlock: boolean;
        readonly isNoPendingUnlocks: boolean;
        readonly isWrongIndex: boolean;
        readonly isUnexpected: boolean;
        readonly isOnMigration: boolean;
        readonly isNoMigration: boolean;
        readonly type: 'InvalidTradingPair' | 'InvalidDuration' | 'InvalidRewardPerBlock' | 'InvalidDepositLimit' | 'InvalidPoolId' | 'InvalidPoolState' | 'InvalidPoolType' | 'DuplicateReward' | 'ExceedMaximumDeposit' | 'ExceedMaximumCharged' | 'NotEnoughToDeposit' | 'NotEnoughToRedeem' | 'NotEnoughToUnlock' | 'NoDepositOfUser' | 'TooLowToDeposit' | 'TooLowToRedeem' | 'TooShortBetweenTwoClaim' | 'PoolChargedAlready' | 'ExceedMaximumUnlock' | 'NoPendingUnlocks' | 'WrongIndex' | 'Unexpected' | 'OnMigration' | 'NoMigration';
    }
    /** @name BifrostTokenIssuerError (664) */
    interface BifrostTokenIssuerError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isNotExist: boolean;
        readonly isNotAllowed: boolean;
        readonly type: 'NotEnoughBalance' | 'NotExist' | 'NotAllowed';
    }
    /** @name BifrostLighteningRedeemError (665) */
    interface BifrostLighteningRedeemError extends Enum {
        readonly isNotKSM: boolean;
        readonly isDenominatorZero: boolean;
        readonly isNotGreaterThanZero: boolean;
        readonly isExceedPoolAmount: boolean;
        readonly isNotEnoughBalance: boolean;
        readonly isInvalidReleaseInterval: boolean;
        readonly isOverflow: boolean;
        readonly type: 'NotKSM' | 'DenominatorZero' | 'NotGreaterThanZero' | 'ExceedPoolAmount' | 'NotEnoughBalance' | 'InvalidReleaseInterval' | 'Overflow';
    }
    /** @name BifrostSalpLiteFundInfo (667) */
    interface BifrostSalpLiteFundInfo extends Struct {
        readonly raised: u128;
        readonly cap: u128;
        readonly firstSlot: u32;
        readonly lastSlot: u32;
        readonly trieIndex: u32;
        readonly status: BifrostSalpLiteFundStatus;
    }
    /** @name BifrostSalpLiteError (668) */
    interface BifrostSalpLiteError extends Enum {
        readonly isFirstSlotTooFarInFuture: boolean;
        readonly isLastSlotBeforeFirstSlot: boolean;
        readonly isLastSlotTooFarInFuture: boolean;
        readonly isMigrateSlotBeforeFirstSlot: boolean;
        readonly isOverflow: boolean;
        readonly isContributionTooSmall: boolean;
        readonly isZeroContribution: boolean;
        readonly isInvalidParaId: boolean;
        readonly isInvalidFundStatus: boolean;
        readonly isInvalidContributionStatus: boolean;
        readonly isCapExceeded: boolean;
        readonly isFundAlreadyCreated: boolean;
        readonly isNotEnoughReservedAssetsToRefund: boolean;
        readonly isNotEnoughBalanceInRefundPool: boolean;
        readonly isNotEnoughBalanceToUnlock: boolean;
        readonly isNotEnoughFreeAssetsToRedeem: boolean;
        readonly isNotEnoughBalanceInRedeemPool: boolean;
        readonly isNotEnoughBalanceInFund: boolean;
        readonly isInvalidFundSameSlot: boolean;
        readonly isInvalidFundNotExist: boolean;
        readonly isInvalidRefund: boolean;
        readonly type: 'FirstSlotTooFarInFuture' | 'LastSlotBeforeFirstSlot' | 'LastSlotTooFarInFuture' | 'MigrateSlotBeforeFirstSlot' | 'Overflow' | 'ContributionTooSmall' | 'ZeroContribution' | 'InvalidParaId' | 'InvalidFundStatus' | 'InvalidContributionStatus' | 'CapExceeded' | 'FundAlreadyCreated' | 'NotEnoughReservedAssetsToRefund' | 'NotEnoughBalanceInRefundPool' | 'NotEnoughBalanceToUnlock' | 'NotEnoughFreeAssetsToRedeem' | 'NotEnoughBalanceInRedeemPool' | 'NotEnoughBalanceInFund' | 'InvalidFundSameSlot' | 'InvalidFundNotExist' | 'InvalidRefund';
    }
    /** @name BifrostCallSwitchgearError (669) */
    interface BifrostCallSwitchgearError extends Enum {
        readonly isCannotSwitchOff: boolean;
        readonly isInvalidCharacter: boolean;
        readonly type: 'CannotSwitchOff' | 'InvalidCharacter';
    }
    /** @name BifrostVsbondAuctionOrderInfo (673) */
    interface BifrostVsbondAuctionOrderInfo extends Struct {
        readonly owner: AccountId32;
        readonly vsbond: NodePrimitivesCurrencyCurrencyId;
        readonly amount: u128;
        readonly remain: u128;
        readonly totalPrice: u128;
        readonly remainPrice: u128;
        readonly orderId: u64;
        readonly orderType: BifrostVsbondAuctionOrderType;
    }
    /** @name BifrostVsbondAuctionError (675) */
    interface BifrostVsbondAuctionError extends Enum {
        readonly isNotEnoughAmount: boolean;
        readonly isNotFindOrderInfo: boolean;
        readonly isNotEnoughBalanceToCreateOrder: boolean;
        readonly isDontHaveEnoughToPay: boolean;
        readonly isForbidRevokeOrderNotInTrade: boolean;
        readonly isForbidRevokeOrderWithoutOwnership: boolean;
        readonly isForbidClinchOrderNotInTrade: boolean;
        readonly isForbidClinchOrderWithinOwnership: boolean;
        readonly isExceedMaximumOrderInTrade: boolean;
        readonly isInvalidVsbond: boolean;
        readonly isUnexpected: boolean;
        readonly isInvalidRateInput: boolean;
        readonly isOverflow: boolean;
        readonly type: 'NotEnoughAmount' | 'NotFindOrderInfo' | 'NotEnoughBalanceToCreateOrder' | 'DontHaveEnoughToPay' | 'ForbidRevokeOrderNotInTrade' | 'ForbidRevokeOrderWithoutOwnership' | 'ForbidClinchOrderNotInTrade' | 'ForbidClinchOrderWithinOwnership' | 'ExceedMaximumOrderInTrade' | 'InvalidVsbond' | 'Unexpected' | 'InvalidRateInput' | 'Overflow';
    }
    /** @name BifrostAssetRegistryError (676) */
    interface BifrostAssetRegistryError extends Enum {
        readonly isBadLocation: boolean;
        readonly isMultiLocationExisted: boolean;
        readonly isAssetIdNotExists: boolean;
        readonly isAssetIdExisted: boolean;
        readonly isCurrencyIdNotExists: boolean;
        readonly isCurrencyIdExisted: boolean;
        readonly type: 'BadLocation' | 'MultiLocationExisted' | 'AssetIdNotExists' | 'AssetIdExisted' | 'CurrencyIdNotExists' | 'CurrencyIdExisted';
    }
    /** @name BifrostVtokenMintingError (684) */
    interface BifrostVtokenMintingError extends Enum {
        readonly isBelowMinimumMint: boolean;
        readonly isBelowMinimumRedeem: boolean;
        readonly isInvalidRebondToken: boolean;
        readonly isNotSupportTokenType: boolean;
        readonly isNotEnoughBalanceToUnlock: boolean;
        readonly isTokenToRebondNotZero: boolean;
        readonly isOngoingTimeUnitNotSet: boolean;
        readonly isTokenUnlockLedgerNotFound: boolean;
        readonly isUserUnlockLedgerNotFound: boolean;
        readonly isTimeUnitUnlockLedgerNotFound: boolean;
        readonly isUnlockDurationNotFound: boolean;
        readonly isUnexpected: boolean;
        readonly isCalculationOverflow: boolean;
        readonly isExceedMaximumUnlockId: boolean;
        readonly isTooManyRedeems: boolean;
        readonly isCanNotRedeem: boolean;
        readonly isCanNotRebond: boolean;
        readonly type: 'BelowMinimumMint' | 'BelowMinimumRedeem' | 'InvalidRebondToken' | 'NotSupportTokenType' | 'NotEnoughBalanceToUnlock' | 'TokenToRebondNotZero' | 'OngoingTimeUnitNotSet' | 'TokenUnlockLedgerNotFound' | 'UserUnlockLedgerNotFound' | 'TimeUnitUnlockLedgerNotFound' | 'UnlockDurationNotFound' | 'Unexpected' | 'CalculationOverflow' | 'ExceedMaximumUnlockId' | 'TooManyRedeems' | 'CanNotRedeem' | 'CanNotRebond';
    }
    /** @name BifrostSlpError (693) */
    interface BifrostSlpError extends Enum {
        readonly isOperateOriginNotSet: boolean;
        readonly isNotAuthorized: boolean;
        readonly isNotSupportedCurrencyId: boolean;
        readonly isFailToAddDelegator: boolean;
        readonly isOverFlow: boolean;
        readonly isUnderFlow: boolean;
        readonly isNotExist: boolean;
        readonly isLowerThanMinimum: boolean;
        readonly isGreaterThanMaximum: boolean;
        readonly isAlreadyBonded: boolean;
        readonly isAccountNotExist: boolean;
        readonly isDelegatorNotExist: boolean;
        readonly isXcmFailure: boolean;
        readonly isDelegatorNotBonded: boolean;
        readonly isExceedActiveMaximum: boolean;
        readonly isProblematicLedger: boolean;
        readonly isNotEnoughToUnbond: boolean;
        readonly isExceedUnlockingRecords: boolean;
        readonly isRebondExceedUnlockingAmount: boolean;
        readonly isDecodingError: boolean;
        readonly isEncodingError: boolean;
        readonly isVectorEmpty: boolean;
        readonly isValidatorSetNotExist: boolean;
        readonly isValidatorNotExist: boolean;
        readonly isInvalidTimeUnit: boolean;
        readonly isAmountZero: boolean;
        readonly isAmountNotZero: boolean;
        readonly isAlreadyExist: boolean;
        readonly isValidatorStillInUse: boolean;
        readonly isTimeUnitNotExist: boolean;
        readonly isFeeSourceNotExist: boolean;
        readonly isWeightAndFeeNotExists: boolean;
        readonly isMinimumsAndMaximumsNotExist: boolean;
        readonly isQueryNotExist: boolean;
        readonly isDelaysNotExist: boolean;
        readonly isUnexpected: boolean;
        readonly isQueryResponseRemoveError: boolean;
        readonly isInvalidHostingFee: boolean;
        readonly isInvalidAccount: boolean;
        readonly isIncreaseTokenPoolError: boolean;
        readonly isTuneExchangeRateLimitNotSet: boolean;
        readonly isCurrencyLatestTuneRecordNotExist: boolean;
        readonly isInvalidTransferSource: boolean;
        readonly isValidatorNotProvided: boolean;
        readonly isUnsupported: boolean;
        readonly isValidatorNotBonded: boolean;
        readonly isAlreadyRequested: boolean;
        readonly isRequestNotExist: boolean;
        readonly isAlreadyLeaving: boolean;
        readonly isDelegatorNotLeaving: boolean;
        readonly isRequestNotDue: boolean;
        readonly isLeavingNotDue: boolean;
        readonly isDelegatorSetNotExist: boolean;
        readonly isDelegatorLeaving: boolean;
        readonly isDelegatorAlreadyLeaving: boolean;
        readonly isValidatorError: boolean;
        readonly isAmountNone: boolean;
        readonly isInvalidDelays: boolean;
        readonly isOngoingTimeUnitUpdateIntervalNotExist: boolean;
        readonly isLastTimeUpdatedOngoingTimeUnitNotExist: boolean;
        readonly isTooFrequent: boolean;
        readonly isDestAccountNotValid: boolean;
        readonly isWhiteListNotExist: boolean;
        readonly isDelegatorAlreadyTuned: boolean;
        readonly isFeeTooHigh: boolean;
        readonly isNotEnoughBalance: boolean;
        readonly isVectorTooLong: boolean;
        readonly isMultiCurrencyError: boolean;
        readonly isNotDelegateValidator: boolean;
        readonly isDividedByZero: boolean;
        readonly isSharePriceNotValid: boolean;
        readonly isInvalidAmount: boolean;
        readonly isValidatorMultilocationNotvalid: boolean;
        readonly isAmountNotProvided: boolean;
        readonly isFailToConvert: boolean;
        readonly type: 'OperateOriginNotSet' | 'NotAuthorized' | 'NotSupportedCurrencyId' | 'FailToAddDelegator' | 'OverFlow' | 'UnderFlow' | 'NotExist' | 'LowerThanMinimum' | 'GreaterThanMaximum' | 'AlreadyBonded' | 'AccountNotExist' | 'DelegatorNotExist' | 'XcmFailure' | 'DelegatorNotBonded' | 'ExceedActiveMaximum' | 'ProblematicLedger' | 'NotEnoughToUnbond' | 'ExceedUnlockingRecords' | 'RebondExceedUnlockingAmount' | 'DecodingError' | 'EncodingError' | 'VectorEmpty' | 'ValidatorSetNotExist' | 'ValidatorNotExist' | 'InvalidTimeUnit' | 'AmountZero' | 'AmountNotZero' | 'AlreadyExist' | 'ValidatorStillInUse' | 'TimeUnitNotExist' | 'FeeSourceNotExist' | 'WeightAndFeeNotExists' | 'MinimumsAndMaximumsNotExist' | 'QueryNotExist' | 'DelaysNotExist' | 'Unexpected' | 'QueryResponseRemoveError' | 'InvalidHostingFee' | 'InvalidAccount' | 'IncreaseTokenPoolError' | 'TuneExchangeRateLimitNotSet' | 'CurrencyLatestTuneRecordNotExist' | 'InvalidTransferSource' | 'ValidatorNotProvided' | 'Unsupported' | 'ValidatorNotBonded' | 'AlreadyRequested' | 'RequestNotExist' | 'AlreadyLeaving' | 'DelegatorNotLeaving' | 'RequestNotDue' | 'LeavingNotDue' | 'DelegatorSetNotExist' | 'DelegatorLeaving' | 'DelegatorAlreadyLeaving' | 'ValidatorError' | 'AmountNone' | 'InvalidDelays' | 'OngoingTimeUnitUpdateIntervalNotExist' | 'LastTimeUpdatedOngoingTimeUnitNotExist' | 'TooFrequent' | 'DestAccountNotValid' | 'WhiteListNotExist' | 'DelegatorAlreadyTuned' | 'FeeTooHigh' | 'NotEnoughBalance' | 'VectorTooLong' | 'MultiCurrencyError' | 'NotDelegateValidator' | 'DividedByZero' | 'SharePriceNotValid' | 'InvalidAmount' | 'ValidatorMultilocationNotvalid' | 'AmountNotProvided' | 'FailToConvert';
    }
    /** @name XcmInterfaceError (694) */
    interface XcmInterfaceError extends Enum {
        readonly isFeeConvertFailed: boolean;
        readonly isXcmExecutionFailed: boolean;
        readonly isXcmSendFailed: boolean;
        readonly type: 'FeeConvertFailed' | 'XcmExecutionFailed' | 'XcmSendFailed';
    }
    /** @name BifrostVstokenConversionError (695) */
    interface BifrostVstokenConversionError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isNotSupportTokenType: boolean;
        readonly isCalculationOverflow: boolean;
        readonly type: 'NotEnoughBalance' | 'NotSupportTokenType' | 'CalculationOverflow';
    }
    /** @name BifrostFarmingRewardsPoolInfo (696) */
    interface BifrostFarmingRewardsPoolInfo extends Struct {
        readonly tokensProportion: BTreeMap<NodePrimitivesCurrencyCurrencyId, Perbill>;
        readonly basicToken: ITuple<[NodePrimitivesCurrencyCurrencyId, Perbill]>;
        readonly totalShares: u128;
        readonly basicRewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>;
        readonly rewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>>;
        readonly state: BifrostFarmingRewardsPoolState;
        readonly keeper: AccountId32;
        readonly rewardIssuer: AccountId32;
        readonly gauge: Option<u32>;
        readonly blockStartup: Option<u32>;
        readonly minDepositToStart: u128;
        readonly afterBlockToStart: u32;
        readonly withdrawLimitTime: u32;
        readonly claimLimitTime: u32;
        readonly withdrawLimitCount: u8;
    }
    /** @name BifrostFarmingRewardsPoolState (702) */
    interface BifrostFarmingRewardsPoolState extends Enum {
        readonly isUnCharged: boolean;
        readonly isCharged: boolean;
        readonly isOngoing: boolean;
        readonly isDead: boolean;
        readonly isRetired: boolean;
        readonly type: 'UnCharged' | 'Charged' | 'Ongoing' | 'Dead' | 'Retired';
    }
    /** @name BifrostFarmingGaugeGaugePoolInfo (703) */
    interface BifrostFarmingGaugeGaugePoolInfo extends Struct {
        readonly pid: u32;
        readonly token: NodePrimitivesCurrencyCurrencyId;
        readonly keeper: AccountId32;
        readonly rewardIssuer: AccountId32;
        readonly rewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, ITuple<[u128, u128, u128]>>;
        readonly gaugeBasicRewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>;
        readonly maxBlock: u32;
        readonly gaugeAmount: u128;
        readonly totalTimeFactor: u128;
        readonly gaugeState: BifrostFarmingGaugeGaugeState;
        readonly gaugeLastBlock: u32;
    }
    /** @name BifrostFarmingGaugeGaugeState (708) */
    interface BifrostFarmingGaugeGaugeState extends Enum {
        readonly isUnbond: boolean;
        readonly isBonded: boolean;
        readonly type: 'Unbond' | 'Bonded';
    }
    /** @name BifrostFarmingGaugeGaugeInfo (709) */
    interface BifrostFarmingGaugeGaugeInfo extends Struct {
        readonly who: AccountId32;
        readonly gaugeAmount: u128;
        readonly totalTimeFactor: u128;
        readonly latestTimeFactor: u128;
        readonly claimedTimeFactor: u128;
        readonly gaugeStartBlock: u32;
        readonly gaugeStopBlock: u32;
        readonly gaugeLastBlock: u32;
        readonly lastClaimBlock: u32;
    }
    /** @name BifrostFarmingRewardsShareInfo (710) */
    interface BifrostFarmingRewardsShareInfo extends Struct {
        readonly who: AccountId32;
        readonly share: u128;
        readonly withdrawnRewards: BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>;
        readonly claimLastBlock: u32;
        readonly withdrawList: Vec<ITuple<[u32, u128]>>;
    }
    /** @name BifrostFarmingBoostBoostPoolInfo (711) */
    interface BifrostFarmingBoostBoostPoolInfo extends Struct {
        readonly totalVotes: u128;
        readonly startRound: u32;
        readonly endRound: u32;
        readonly roundLength: u32;
    }
    /** @name BifrostFarmingBoostUserBoostInfo (712) */
    interface BifrostFarmingBoostUserBoostInfo extends Struct {
        readonly voteAmount: u128;
        readonly voteList: Vec<ITuple<[u32, Percent]>>;
        readonly lastVote: u32;
    }
    /** @name BifrostFarmingError (715) */
    interface BifrostFarmingError extends Enum {
        readonly isCalculationOverflow: boolean;
        readonly isPoolDoesNotExist: boolean;
        readonly isGaugePoolNotExist: boolean;
        readonly isGaugeInfoNotExist: boolean;
        readonly isInvalidPoolState: boolean;
        readonly isLastGaugeNotClaim: boolean;
        readonly isCanNotClaim: boolean;
        readonly isGaugeMaxBlockOverflow: boolean;
        readonly isWithdrawLimitCountExceeded: boolean;
        readonly isShareInfoNotExists: boolean;
        readonly isCanNotDeposit: boolean;
        readonly isWhitelistEmpty: boolean;
        readonly isRoundNotOver: boolean;
        readonly isRoundLengthNotSet: boolean;
        readonly isWhitelistLimitExceeded: boolean;
        readonly isNobodyVoting: boolean;
        readonly isNotInWhitelist: boolean;
        readonly isPercentOverflow: boolean;
        readonly type: 'CalculationOverflow' | 'PoolDoesNotExist' | 'GaugePoolNotExist' | 'GaugeInfoNotExist' | 'InvalidPoolState' | 'LastGaugeNotClaim' | 'CanNotClaim' | 'GaugeMaxBlockOverflow' | 'WithdrawLimitCountExceeded' | 'ShareInfoNotExists' | 'CanNotDeposit' | 'WhitelistEmpty' | 'RoundNotOver' | 'RoundLengthNotSet' | 'WhitelistLimitExceeded' | 'NobodyVoting' | 'NotInWhitelist' | 'PercentOverflow';
    }
    /** @name BifrostSystemStakingRoundInfo (716) */
    interface BifrostSystemStakingRoundInfo extends Struct {
        readonly current: u32;
        readonly first: u32;
        readonly length: u32;
    }
    /** @name BifrostSystemStakingTokenInfo (717) */
    interface BifrostSystemStakingTokenInfo extends Struct {
        readonly farmingStakingAmount: u128;
        readonly systemStakableAmount: u128;
        readonly systemShadowAmount: u128;
        readonly pendingRedeemAmount: u128;
        readonly currentConfig: BifrostSystemStakingTokenConfig;
        readonly newConfig: BifrostSystemStakingTokenConfig;
    }
    /** @name BifrostSystemStakingTokenConfig (718) */
    interface BifrostSystemStakingTokenConfig extends Struct {
        readonly execDelay: u32;
        readonly systemStakableFarmingRate: Permill;
        readonly lptokenRates: Vec<Perbill>;
        readonly addOrSub: bool;
        readonly systemStakableBase: u128;
        readonly farmingPoolids: Vec<u32>;
    }
    /** @name BifrostSystemStakingError (720) */
    interface BifrostSystemStakingError extends Enum {
        readonly isInvalidTokenConfig: boolean;
        readonly isExceedMaxTokenLen: boolean;
        readonly isExceedMaxFarmingPoolidLen: boolean;
        readonly isTokenInfoNotFound: boolean;
        readonly isPayoutFailed: boolean;
        readonly type: 'InvalidTokenConfig' | 'ExceedMaxTokenLen' | 'ExceedMaxFarmingPoolidLen' | 'TokenInfoNotFound' | 'PayoutFailed';
    }
    /** @name BifrostSystemMakerError (721) */
    interface BifrostSystemMakerError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isNotSupportTokenType: boolean;
        readonly isCalculationOverflow: boolean;
        readonly type: 'NotEnoughBalance' | 'NotSupportTokenType' | 'CalculationOverflow';
    }
    /** @name BifrostFeeShareError (722) */
    interface BifrostFeeShareError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isNotSupportProportion: boolean;
        readonly isCalculationOverflow: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isDistributionNotExist: boolean;
        readonly type: 'NotEnoughBalance' | 'NotSupportProportion' | 'CalculationOverflow' | 'ExistentialDeposit' | 'DistributionNotExist';
    }
    /** @name BifrostCrossInOutError (725) */
    interface BifrostCrossInOutError extends Enum {
        readonly isNotEnoughBalance: boolean;
        readonly isNotExist: boolean;
        readonly isNotAllowed: boolean;
        readonly isCurrencyNotSupportCrossInAndOut: boolean;
        readonly isNoMultilocationMapping: boolean;
        readonly isNoAccountIdMapping: boolean;
        readonly isAlreadyExist: boolean;
        readonly isNoCrossingMinimumSet: boolean;
        readonly isAmountLowerThanMinimum: boolean;
        readonly type: 'NotEnoughBalance' | 'NotExist' | 'NotAllowed' | 'CurrencyNotSupportCrossInAndOut' | 'NoMultilocationMapping' | 'NoAccountIdMapping' | 'AlreadyExist' | 'NoCrossingMinimumSet' | 'AmountLowerThanMinimum';
    }
    /** @name SpRuntimeMultiSignature (727) */
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
    }
    /** @name SpCoreEd25519Signature (728) */
    interface SpCoreEd25519Signature extends U8aFixed {
    }
    /** @name SpCoreSr25519Signature (730) */
    interface SpCoreSr25519Signature extends U8aFixed {
    }
    /** @name SpCoreEcdsaSignature (731) */
    interface SpCoreEcdsaSignature extends U8aFixed {
    }
    /** @name FrameSystemExtensionsCheckNonZeroSender (734) */
    type FrameSystemExtensionsCheckNonZeroSender = Null;
    /** @name FrameSystemExtensionsCheckSpecVersion (735) */
    type FrameSystemExtensionsCheckSpecVersion = Null;
    /** @name FrameSystemExtensionsCheckTxVersion (736) */
    type FrameSystemExtensionsCheckTxVersion = Null;
    /** @name FrameSystemExtensionsCheckGenesis (737) */
    type FrameSystemExtensionsCheckGenesis = Null;
    /** @name FrameSystemExtensionsCheckNonce (740) */
    interface FrameSystemExtensionsCheckNonce extends Compact<u32> {
    }
    /** @name FrameSystemExtensionsCheckWeight (741) */
    type FrameSystemExtensionsCheckWeight = Null;
    /** @name PalletTransactionPaymentChargeTransactionPayment (742) */
    interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {
    }
    /** @name BifrostKusamaRuntimeRuntime (743) */
    type BifrostKusamaRuntimeRuntime = Null;
}
