"use strict";
// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable sort-keys */
exports.default = {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: 'u32',
        consumers: 'u32',
        providers: 'u32',
        sufficients: 'u32',
        data: 'PalletBalancesAccountData'
    },
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: 'u128',
        reserved: 'u128',
        miscFrozen: 'u128',
        feeFrozen: 'u128'
    },
    /**
     * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: 'SpWeightsWeightV2Weight',
        operational: 'SpWeightsWeightV2Weight',
        mandatory: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup8: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: 'Compact<u64>',
        proofSize: 'Compact<u64>'
    },
    /**
     * Lookup13: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: 'Vec<SpRuntimeDigestDigestItem>'
    },
    /**
     * Lookup15: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: 'Bytes',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            Consensus: '([u8;4],Bytes)',
            Seal: '([u8;4],Bytes)',
            PreRuntime: '([u8;4],Bytes)',
            __Unused7: 'Null',
            RuntimeEnvironmentUpdated: 'Null'
        }
    },
    /**
     * Lookup18: frame_system::EventRecord<bifrost_kusama_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: 'FrameSystemPhase',
        event: 'Event',
        topics: 'Vec<H256>'
    },
    /**
     * Lookup20: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            ExtrinsicFailed: {
                dispatchError: 'SpRuntimeDispatchError',
                dispatchInfo: 'FrameSupportDispatchDispatchInfo',
            },
            CodeUpdated: 'Null',
            NewAccount: {
                account: 'AccountId32',
            },
            KilledAccount: {
                account: 'AccountId32',
            },
            Remarked: {
                _alias: {
                    hash_: 'hash',
                },
                sender: 'AccountId32',
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup21: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: 'SpWeightsWeightV2Weight',
        class: 'FrameSupportDispatchDispatchClass',
        paysFee: 'FrameSupportDispatchPays'
    },
    /**
     * Lookup22: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
    },
    /**
     * Lookup23: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: ['Yes', 'No']
    },
    /**
     * Lookup24: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: 'Null',
            CannotLookup: 'Null',
            BadOrigin: 'Null',
            Module: 'SpRuntimeModuleError',
            ConsumerRemaining: 'Null',
            NoProviders: 'Null',
            TooManyConsumers: 'Null',
            Token: 'SpRuntimeTokenError',
            Arithmetic: 'SpArithmeticArithmeticError',
            Transactional: 'SpRuntimeTransactionalError',
            Exhausted: 'Null',
            Corruption: 'Null',
            Unavailable: 'Null'
        }
    },
    /**
     * Lookup25: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: 'u8',
        error: '[u8;4]'
    },
    /**
     * Lookup26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
    },
    /**
     * Lookup27: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    /**
     * Lookup28: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: ['LimitReached', 'NoLayer']
    },
    /**
     * Lookup29: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: 'AccountId32',
                index: 'u32',
            },
            IndexFreed: {
                index: 'u32',
            },
            IndexFrozen: {
                index: 'u32',
                who: 'AccountId32'
            }
        }
    },
    /**
     * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: 'Null',
            ValidationFunctionApplied: {
                relayChainBlockNum: 'u32',
            },
            ValidationFunctionDiscarded: 'Null',
            UpgradeAuthorized: {
                codeHash: 'H256',
            },
            DownwardMessagesReceived: {
                count: 'u32',
            },
            DownwardMessagesProcessed: {
                weightUsed: 'SpWeightsWeightV2Weight',
                dmqHead: 'H256',
            },
            UpwardMessageSent: {
                messageHash: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup32: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: 'AccountId32',
                freeBalance: 'u128',
            },
            DustLost: {
                account: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            BalanceSet: {
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            Reserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
            },
            Deposit: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Withdraw: {
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ['Free', 'Reserved']
    },
    /**
     * Lookup34: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: 'AccountId32',
                actualFee: 'u128',
                tip: 'u128'
            }
        }
    },
    /**
     * Lookup35: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: 'u32'
            }
        }
    },
    /**
     * Lookup36: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: {
                startingBlock: 'u32',
                round: 'u32',
                selectedCollatorsNumber: 'u32',
                totalBalance: 'u128',
            },
            JoinedCollatorCandidates: {
                account: 'AccountId32',
                amountLocked: 'u128',
                newTotalAmtLocked: 'u128',
            },
            CollatorChosen: {
                round: 'u32',
                collatorAccount: 'AccountId32',
                totalExposedAmount: 'u128',
            },
            CandidateBondLessRequested: {
                candidate: 'AccountId32',
                amountToDecrease: 'u128',
                executeRound: 'u32',
            },
            CandidateBondedMore: {
                candidate: 'AccountId32',
                amount: 'u128',
                newTotalBond: 'u128',
            },
            CandidateBondedLess: {
                candidate: 'AccountId32',
                amount: 'u128',
                newBond: 'u128',
            },
            CandidateWentOffline: {
                candidate: 'AccountId32',
            },
            CandidateBackOnline: {
                candidate: 'AccountId32',
            },
            CandidateScheduledExit: {
                exitAllowedRound: 'u32',
                candidate: 'AccountId32',
                scheduledExit: 'u32',
            },
            CancelledCandidateExit: {
                candidate: 'AccountId32',
            },
            CancelledCandidateBondLess: {
                candidate: 'AccountId32',
                amount: 'u128',
                executeRound: 'u32',
            },
            CandidateLeft: {
                exCandidate: 'AccountId32',
                unlockedAmount: 'u128',
                newTotalAmtLocked: 'u128',
            },
            DelegationDecreaseScheduled: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amountToDecrease: 'u128',
                executeRound: 'u32',
            },
            DelegationIncreased: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amount: 'u128',
                inTop: 'bool',
            },
            DelegationDecreased: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                amount: 'u128',
                inTop: 'bool',
            },
            DelegatorExitScheduled: {
                round: 'u32',
                delegator: 'AccountId32',
                scheduledExit: 'u32',
            },
            DelegationRevocationScheduled: {
                round: 'u32',
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                scheduledExit: 'u32',
            },
            DelegatorLeft: {
                delegator: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegationRevoked: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegationKicked: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
            },
            DelegatorExitCancelled: {
                delegator: 'AccountId32',
            },
            CancelledDelegationRequest: {
                delegator: 'AccountId32',
                cancelledRequest: 'ParachainStakingDelegationRequestsCancelledScheduledRequest',
                collator: 'AccountId32',
            },
            Delegation: {
                delegator: 'AccountId32',
                lockedAmount: 'u128',
                candidate: 'AccountId32',
                delegatorPosition: 'ParachainStakingDelegatorAdded',
            },
            DelegatorLeftCandidate: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
                unstakedAmount: 'u128',
                totalCandidateStaked: 'u128',
            },
            Rewarded: {
                account: 'AccountId32',
                rewards: 'u128',
            },
            ReservedForParachainBond: {
                account: 'AccountId32',
                value: 'u128',
            },
            ParachainBondAccountSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'AccountId32',
                new_: 'AccountId32',
            },
            ParachainBondReservePercentSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'Percent',
                new_: 'Percent',
            },
            InflationSet: {
                annualMin: 'Perbill',
                annualIdeal: 'Perbill',
                annualMax: 'Perbill',
                roundMin: 'Perbill',
                roundIdeal: 'Perbill',
                roundMax: 'Perbill',
            },
            StakeExpectationsSet: {
                expectMin: 'u128',
                expectIdeal: 'u128',
                expectMax: 'u128',
            },
            TotalSelectedSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'u32',
                new_: 'u32',
            },
            CollatorCommissionSet: {
                _alias: {
                    new_: 'new',
                },
                old: 'Perbill',
                new_: 'Perbill',
            },
            BlocksPerRoundSet: {
                _alias: {
                    new_: 'new',
                },
                currentRound: 'u32',
                firstBlock: 'u32',
                old: 'u32',
                new_: 'u32',
                newPerRoundInflationMin: 'Perbill',
                newPerRoundInflationIdeal: 'Perbill',
                newPerRoundInflationMax: 'Perbill'
            }
        }
    },
    /**
     * Lookup38: parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
     **/
    ParachainStakingDelegationRequestsCancelledScheduledRequest: {
        whenExecutable: 'u32',
        action: 'ParachainStakingDelegationRequestsDelegationAction'
    },
    /**
     * Lookup39: parachain_staking::delegation_requests::DelegationAction<Balance>
     **/
    ParachainStakingDelegationRequestsDelegationAction: {
        _enum: {
            Revoke: 'u128',
            Decrease: 'u128'
        }
    },
    /**
     * Lookup40: parachain_staking::types::DelegatorAdded<B>
     **/
    ParachainStakingDelegatorAdded: {
        _enum: {
            AddedToTop: {
                newTotal: 'u128',
            },
            AddedToBottom: 'Null'
        }
    },
    /**
     * Lookup43: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
                deposit: 'u128',
            },
            Tabled: {
                proposalIndex: 'u32',
                deposit: 'u128',
            },
            ExternalTabled: 'Null',
            Started: {
                refIndex: 'u32',
                threshold: 'PalletDemocracyVoteThreshold',
            },
            Passed: {
                refIndex: 'u32',
            },
            NotPassed: {
                refIndex: 'u32',
            },
            Cancelled: {
                refIndex: 'u32',
            },
            Delegated: {
                who: 'AccountId32',
                target: 'AccountId32',
            },
            Undelegated: {
                account: 'AccountId32',
            },
            Vetoed: {
                who: 'AccountId32',
                proposalHash: 'H256',
                until: 'u32',
            },
            Blacklisted: {
                proposalHash: 'H256',
            },
            Voted: {
                voter: 'AccountId32',
                refIndex: 'u32',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            Seconded: {
                seconder: 'AccountId32',
                propIndex: 'u32',
            },
            ProposalCanceled: {
                propIndex: 'u32'
            }
        }
    },
    /**
     * Lookup44: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
    },
    /**
     * Lookup45: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: 'Vote',
                balance: 'u128',
            },
            Split: {
                aye: 'u128',
                nay: 'u128'
            }
        }
    },
    /**
     * Lookup47: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: 'AccountId32',
                proposalIndex: 'u32',
                proposalHash: 'H256',
                threshold: 'u32',
            },
            Voted: {
                account: 'AccountId32',
                proposalHash: 'H256',
                voted: 'bool',
                yes: 'u32',
                no: 'u32',
            },
            Approved: {
                proposalHash: 'H256',
            },
            Disapproved: {
                proposalHash: 'H256',
            },
            Executed: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MemberExecuted: {
                proposalHash: 'H256',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            Closed: {
                proposalHash: 'H256',
                yes: 'u32',
                no: 'u32'
            }
        }
    },
    /**
     * Lookup51: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: 'Vec<(AccountId32,u128)>',
            },
            EmptyTerm: 'Null',
            ElectionError: 'Null',
            MemberKicked: {
                member: 'AccountId32',
            },
            Renounced: {
                candidate: 'AccountId32',
            },
            CandidateSlashed: {
                candidate: 'AccountId32',
                amount: 'u128',
            },
            SeatHolderSlashed: {
                seatHolder: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup54: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
    },
    /**
     * Lookup56: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: 'Option<[u8;32]>',
                weight: 'SpWeightsWeightV2Weight',
            },
            Fail: {
                messageHash: 'Option<[u8;32]>',
                error: 'XcmV3TraitsError',
                weight: 'SpWeightsWeightV2Weight',
            },
            BadVersion: {
                messageHash: 'Option<[u8;32]>',
            },
            BadFormat: {
                messageHash: 'Option<[u8;32]>',
            },
            XcmpMessageSent: {
                messageHash: 'Option<[u8;32]>',
            },
            OverweightEnqueued: {
                sender: 'u32',
                sentAt: 'u32',
                index: 'u64',
                required: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                index: 'u64',
                used: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup57: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            LocationFull: 'Null',
            LocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            ExpectationFalse: 'Null',
            PalletNotFound: 'Null',
            NameMismatch: 'Null',
            VersionIncompatible: 'Null',
            HoldingWouldOverflow: 'Null',
            ExportError: 'Null',
            ReanchorFailed: 'Null',
            NoDeal: 'Null',
            FeesNotMet: 'Null',
            LockError: 'Null',
            NoPermission: 'Null',
            Unanchored: 'Null',
            NotDepositable: 'Null',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'SpWeightsWeightV2Weight',
            Barrier: 'Null',
            WeightNotComputable: 'Null',
            ExceedsStackLimit: 'Null'
        }
    },
    /**
     * Lookup59: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: 'XcmV3TraitsOutcome',
            Sent: '(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)',
            UnexpectedResponse: '(XcmV3MultiLocation,u64)',
            ResponseReady: '(u64,XcmV3Response)',
            Notified: '(u64,u8,u8)',
            NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
            NotifyDispatchError: '(u64,u8,u8)',
            NotifyDecodeFailed: '(u64,u8,u8)',
            InvalidResponder: '(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)',
            InvalidResponderVersion: '(XcmV3MultiLocation,u64)',
            ResponseTaken: 'u64',
            AssetsTrapped: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)',
            VersionChangeNotified: '(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)',
            SupportedVersionChanged: '(XcmV3MultiLocation,u32)',
            NotifyTargetSendFail: '(XcmV3MultiLocation,u64,XcmV3TraitsError)',
            NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
            InvalidQuerierVersion: '(XcmV3MultiLocation,u64)',
            InvalidQuerier: '(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)',
            VersionNotifyStarted: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            VersionNotifyRequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            VersionNotifyUnrequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            FeesPaid: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
            AssetsClaimed: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)'
        }
    },
    /**
     * Lookup60: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: 'SpWeightsWeightV2Weight',
            Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
            Error: 'XcmV3TraitsError'
        }
    },
    /**
     * Lookup61: xcm::v3::multilocation::MultiLocation
     **/
    XcmV3MultiLocation: {
        parents: 'u8',
        interior: 'XcmV3Junctions'
    },
    /**
     * Lookup62: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV3Junction',
            X2: '(XcmV3Junction,XcmV3Junction)',
            X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
            X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
        }
    },
    /**
     * Lookup63: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'Option<XcmV3JunctionNetworkId>',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'Option<XcmV3JunctionNetworkId>',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'Option<XcmV3JunctionNetworkId>',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: {
                length: 'u8',
                data: '[u8;32]',
            },
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV3JunctionBodyId',
                part: 'XcmV3JunctionBodyPart',
            },
            GlobalConsensus: 'XcmV3JunctionNetworkId'
        }
    },
    /**
     * Lookup66: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: '[u8;32]',
            ByFork: {
                blockNumber: 'u64',
                blockHash: '[u8;32]',
            },
            Polkadot: 'Null',
            Kusama: 'Null',
            Westend: 'Null',
            Rococo: 'Null',
            Wococo: 'Null',
            Ethereum: {
                chainId: 'Compact<u64>',
            },
            BitcoinCore: 'Null',
            BitcoinCash: 'Null'
        }
    },
    /**
     * Lookup69: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: 'Null',
            Moniker: '[u8;4]',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup70: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup71: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: 'Vec<XcmV3Instruction>',
    /**
     * Lookup73: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV3MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV3Response',
                maxWeight: 'SpWeightsWeightV2Weight',
                querier: 'Option<XcmV3MultiLocation>',
            },
            TransferAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                beneficiary: 'XcmV3MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            Transact: {
                originKind: 'XcmV2OriginKind',
                requireWeightAtMost: 'SpWeightsWeightV2Weight',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV3Junctions',
            ReportError: 'XcmV3QueryResponseInfo',
            DepositAsset: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                beneficiary: 'XcmV3MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV3MultiassetMultiAssetFilter',
                want: 'XcmV3MultiassetMultiAssets',
                maximal: 'bool',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                reserve: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV3MultiassetMultiAssetFilter',
                dest: 'XcmV3MultiLocation',
                xcm: 'XcmV3Xcm',
            },
            ReportHolding: {
                responseInfo: 'XcmV3QueryResponseInfo',
                assets: 'XcmV3MultiassetMultiAssetFilter',
            },
            BuyExecution: {
                fees: 'XcmV3MultiAsset',
                weightLimit: 'XcmV3WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV3Xcm',
            SetAppendix: 'XcmV3Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV3MultiassetMultiAssets',
                ticket: 'XcmV3MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'SpWeightsWeightV2Weight',
            },
            UnsubscribeVersion: 'Null',
            BurnAsset: 'XcmV3MultiassetMultiAssets',
            ExpectAsset: 'XcmV3MultiassetMultiAssets',
            ExpectOrigin: 'Option<XcmV3MultiLocation>',
            ExpectError: 'Option<(u32,XcmV3TraitsError)>',
            ExpectTransactStatus: 'XcmV3MaybeErrorCode',
            QueryPallet: {
                moduleName: 'Bytes',
                responseInfo: 'XcmV3QueryResponseInfo',
            },
            ExpectPallet: {
                index: 'Compact<u32>',
                name: 'Bytes',
                moduleName: 'Bytes',
                crateMajor: 'Compact<u32>',
                minCrateMinor: 'Compact<u32>',
            },
            ReportTransactStatus: 'XcmV3QueryResponseInfo',
            ClearTransactStatus: 'Null',
            UniversalOrigin: 'XcmV3Junction',
            ExportMessage: {
                network: 'XcmV3JunctionNetworkId',
                destination: 'XcmV3Junctions',
                xcm: 'XcmV3Xcm',
            },
            LockAsset: {
                asset: 'XcmV3MultiAsset',
                unlocker: 'XcmV3MultiLocation',
            },
            UnlockAsset: {
                asset: 'XcmV3MultiAsset',
                target: 'XcmV3MultiLocation',
            },
            NoteUnlockable: {
                asset: 'XcmV3MultiAsset',
                owner: 'XcmV3MultiLocation',
            },
            RequestUnlock: {
                asset: 'XcmV3MultiAsset',
                locker: 'XcmV3MultiLocation',
            },
            SetFeesMode: {
                jitWithdraw: 'bool',
            },
            SetTopic: '[u8;32]',
            ClearTopic: 'Null',
            AliasOrigin: 'XcmV3MultiLocation',
            UnpaidExecution: {
                weightLimit: 'XcmV3WeightLimit',
                checkOrigin: 'Option<XcmV3MultiLocation>'
            }
        }
    },
    /**
     * Lookup74: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
    /**
     * Lookup76: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetFungibility'
    },
    /**
     * Lookup77: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV3MultiLocation',
            Abstract: '[u8;32]'
        }
    },
    /**
     * Lookup78: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV3MultiassetAssetInstance'
        }
    },
    /**
     * Lookup79: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]'
        }
    },
    /**
     * Lookup82: xcm::v3::Response
     **/
    XcmV3Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV3MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
            Version: 'u32',
            PalletsInfo: 'XcmV3VecPalletInfo',
            DispatchResult: 'XcmV3MaybeErrorCode'
        }
    },
    /**
     * Lookup85: xcm::v3::VecPalletInfo
     **/
    XcmV3VecPalletInfo: 'Vec<XcmV3PalletInfo>',
    /**
     * Lookup87: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        major: 'Compact<u32>',
        minor: 'Compact<u32>',
        patch: 'Compact<u32>'
    },
    /**
     * Lookup88: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: 'Null',
            Error: 'Bytes',
            TruncatedError: 'Bytes'
        }
    },
    /**
     * Lookup90: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    /**
     * Lookup91: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: 'Bytes'
    },
    /**
     * Lookup92: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: 'XcmV3MultiLocation',
        queryId: 'Compact<u64>',
        maxWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup93: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV3MultiassetMultiAssets',
            Wild: 'XcmV3MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup94: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV3MultiassetAssetId',
                fun: 'XcmV3MultiassetWildFungibility',
            },
            AllCounted: 'Compact<u32>',
            AllOfCounted: {
                id: 'XcmV3MultiassetAssetId',
                fun: 'XcmV3MultiassetWildFungibility',
                count: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup95: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup96: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'SpWeightsWeightV2Weight'
        }
    },
    /**
     * Lookup97: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: 'Null',
            V2: 'XcmV2MultiassetMultiAssets',
            __Unused2: 'Null',
            V3: 'XcmV3MultiassetMultiAssets'
        }
    },
    /**
     * Lookup98: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
    /**
     * Lookup100: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetFungibility'
    },
    /**
     * Lookup101: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: 'XcmV2MultiLocation',
            Abstract: 'Bytes'
        }
    },
    /**
     * Lookup102: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: 'u8',
        interior: 'XcmV2MultilocationJunctions'
    },
    /**
     * Lookup103: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: 'Null',
            X1: 'XcmV2Junction',
            X2: '(XcmV2Junction,XcmV2Junction)',
            X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
            X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
        }
    },
    /**
     * Lookup104: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
        _enum: {
            Parachain: 'Compact<u32>',
            AccountId32: {
                network: 'XcmV2NetworkId',
                id: '[u8;32]',
            },
            AccountIndex64: {
                network: 'XcmV2NetworkId',
                index: 'Compact<u64>',
            },
            AccountKey20: {
                network: 'XcmV2NetworkId',
                key: '[u8;20]',
            },
            PalletInstance: 'u8',
            GeneralIndex: 'Compact<u128>',
            GeneralKey: 'Bytes',
            OnlyChild: 'Null',
            Plurality: {
                id: 'XcmV2BodyId',
                part: 'XcmV2BodyPart'
            }
        }
    },
    /**
     * Lookup105: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: 'Null',
            Named: 'Bytes',
            Polkadot: 'Null',
            Kusama: 'Null'
        }
    },
    /**
     * Lookup107: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
        _enum: {
            Unit: 'Null',
            Named: 'Bytes',
            Index: 'Compact<u32>',
            Executive: 'Null',
            Technical: 'Null',
            Legislative: 'Null',
            Judicial: 'Null',
            Defense: 'Null',
            Administration: 'Null',
            Treasury: 'Null'
        }
    },
    /**
     * Lookup108: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
        _enum: {
            Voice: 'Null',
            Members: {
                count: 'Compact<u32>',
            },
            Fraction: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            AtLeastProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>',
            },
            MoreThanProportion: {
                nom: 'Compact<u32>',
                denom: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup109: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: 'Compact<u128>',
            NonFungible: 'XcmV2MultiassetAssetInstance'
        }
    },
    /**
     * Lookup110: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: 'Null',
            Index: 'Compact<u128>',
            Array4: '[u8;4]',
            Array8: '[u8;8]',
            Array16: '[u8;16]',
            Array32: '[u8;32]',
            Blob: 'Bytes'
        }
    },
    /**
     * Lookup111: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: 'Null',
            V2: 'XcmV2MultiLocation',
            __Unused2: 'Null',
            V3: 'XcmV3MultiLocation'
        }
    },
    /**
     * Lookup112: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: '[u8;32]',
            UnsupportedVersion: '[u8;32]',
            ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)'
        }
    },
    /**
     * Lookup113: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: '[u8;32]',
            },
            UnsupportedVersion: {
                messageId: '[u8;32]',
            },
            ExecutedDownward: {
                messageId: '[u8;32]',
                outcome: 'XcmV3TraitsOutcome',
            },
            WeightExhausted: {
                messageId: '[u8;32]',
                remainingWeight: 'SpWeightsWeightV2Weight',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightEnqueued: {
                messageId: '[u8;32]',
                overweightIndex: 'u64',
                requiredWeight: 'SpWeightsWeightV2Weight',
            },
            OverweightServiced: {
                overweightIndex: 'u64',
                weightUsed: 'SpWeightsWeightV2Weight',
            },
            MaxMessagesExhausted: {
                messageId: '[u8;32]'
            }
        }
    },
    /**
     * Lookup114: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: 'u32',
                error: 'SpRuntimeDispatchError',
            },
            BatchCompleted: 'Null',
            BatchCompletedWithErrors: 'Null',
            ItemCompleted: 'Null',
            ItemFailed: {
                error: 'SpRuntimeDispatchError',
            },
            DispatchedAs: {
                result: 'Result<Null, SpRuntimeDispatchError>'
            }
        }
    },
    /**
     * Lookup115: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: 'u32',
                index: 'u32',
            },
            Canceled: {
                when: 'u32',
                index: 'u32',
            },
            Dispatched: {
                task: '(u32,u32)',
                id: 'Option<[u8;32]>',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            CallUnavailable: {
                task: '(u32,u32)',
                id: 'Option<[u8;32]>',
            },
            PeriodicFailed: {
                task: '(u32,u32)',
                id: 'Option<[u8;32]>',
            },
            PermanentlyOverweight: {
                task: '(u32,u32)',
                id: 'Option<[u8;32]>'
            }
        }
    },
    /**
     * Lookup117: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            PureCreated: {
                pure: 'AccountId32',
                who: 'AccountId32',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                disambiguationIndex: 'u16',
            },
            Announced: {
                real: 'AccountId32',
                proxy: 'AccountId32',
                callHash: 'H256',
            },
            ProxyAdded: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                delay: 'u32',
            },
            ProxyRemoved: {
                delegator: 'AccountId32',
                delegatee: 'AccountId32',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                delay: 'u32'
            }
        }
    },
    /**
     * Lookup118: bifrost_kusama_runtime::ProxyType
     **/
    BifrostKusamaRuntimeProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance', 'CancelProxy', 'IdentityJudgement', 'Staking']
    },
    /**
     * Lookup120: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: 'AccountId32',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigApproval: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
            },
            MultisigExecuted: {
                approving: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]',
                result: 'Result<Null, SpRuntimeDispatchError>',
            },
            MultisigCancelled: {
                cancelling: 'AccountId32',
                timepoint: 'PalletMultisigTimepoint',
                multisig: 'AccountId32',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup121: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: 'u32',
        index: 'u32'
    },
    /**
     * Lookup122: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: 'AccountId32',
            },
            IdentityCleared: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            IdentityKilled: {
                who: 'AccountId32',
                deposit: 'u128',
            },
            JudgementRequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementUnrequested: {
                who: 'AccountId32',
                registrarIndex: 'u32',
            },
            JudgementGiven: {
                target: 'AccountId32',
                registrarIndex: 'u32',
            },
            RegistrarAdded: {
                registrarIndex: 'u32',
            },
            SubIdentityAdded: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRemoved: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128',
            },
            SubIdentityRevoked: {
                sub: 'AccountId32',
                main: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup123: bifrost_vesting::pallet::Event<T>
     **/
    BifrostVestingEvent: {
        _enum: {
            VestingUpdated: '(AccountId32,u128)',
            VestingCompleted: 'AccountId32'
        }
    },
    /**
     * Lookup124: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: 'u32',
            },
            Spending: {
                budgetRemaining: 'u128',
            },
            Awarded: {
                proposalIndex: 'u32',
                award: 'u128',
                account: 'AccountId32',
            },
            Rejected: {
                proposalIndex: 'u32',
                slashed: 'u128',
            },
            Burnt: {
                burntFunds: 'u128',
            },
            Rollover: {
                rolloverBalance: 'u128',
            },
            Deposit: {
                value: 'u128',
            },
            SpendApproved: {
                proposalIndex: 'u32',
                amount: 'u128',
                beneficiary: 'AccountId32',
            },
            UpdatedInactive: {
                reactivated: 'u128',
                deactivated: 'u128'
            }
        }
    },
    /**
     * Lookup125: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: 'u32',
            },
            BountyRejected: {
                index: 'u32',
                bond: 'u128',
            },
            BountyBecameActive: {
                index: 'u32',
            },
            BountyAwarded: {
                index: 'u32',
                beneficiary: 'AccountId32',
            },
            BountyClaimed: {
                index: 'u32',
                payout: 'u128',
                beneficiary: 'AccountId32',
            },
            BountyCanceled: {
                index: 'u32',
            },
            BountyExtended: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup126: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: 'H256',
            },
            TipClosing: {
                tipHash: 'H256',
            },
            TipClosed: {
                tipHash: 'H256',
                who: 'AccountId32',
                payout: 'u128',
            },
            TipRetracted: {
                tipHash: 'H256',
            },
            TipSlashed: {
                tipHash: 'H256',
                finder: 'AccountId32',
                deposit: 'u128'
            }
        }
    },
    /**
     * Lookup127: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Requested: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Cleared: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup128: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: 'AccountId32',
                assets: 'XcmV3MultiassetMultiAssets',
                fee: 'XcmV3MultiAsset',
                dest: 'XcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup129: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            DustLost: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Transfer: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
            },
            Reserved: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unreserved: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            ReserveRepatriated: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                status: 'FrameSupportTokensMiscBalanceStatus',
            },
            BalanceSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                free: 'u128',
                reserved: 'u128',
            },
            TotalIssuanceSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            Withdrawn: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Slashed: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                freeAmount: 'u128',
                reservedAmount: 'u128',
            },
            Deposited: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockSet: {
                lockId: '[u8;8]',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            LockRemoved: {
                lockId: '[u8;8]',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
            },
            Locked: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128',
            },
            Unlocked: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup130: node_primitives::currency::CurrencyId
     **/
    NodePrimitivesCurrencyCurrencyId: {
        _enum: {
            Native: 'NodePrimitivesCurrencyTokenSymbol',
            VToken: 'NodePrimitivesCurrencyTokenSymbol',
            Token: 'NodePrimitivesCurrencyTokenSymbol',
            Stable: 'NodePrimitivesCurrencyTokenSymbol',
            VSToken: 'NodePrimitivesCurrencyTokenSymbol',
            VSBond: '(NodePrimitivesCurrencyTokenSymbol,u32,u32,u32)',
            LPToken: '(NodePrimitivesCurrencyTokenSymbol,u8,NodePrimitivesCurrencyTokenSymbol,u8)',
            ForeignAsset: 'u32',
            Token2: 'u8',
            VToken2: 'u8',
            VSToken2: 'u8',
            VSBond2: '(u8,u32,u32,u32)',
            StableLpToken: 'u32'
        }
    },
    /**
     * Lookup131: node_primitives::currency::TokenSymbol
     **/
    NodePrimitivesCurrencyTokenSymbol: {
        _enum: ['ASG', 'BNC', 'KUSD', 'DOT', 'KSM', 'ETH', 'KAR', 'ZLK', 'PHA', 'RMRK', 'MOVR']
    },
    /**
     * Lookup132: orml_unknown_tokens::module::Event
     **/
    OrmlUnknownTokensModuleEvent: {
        _enum: {
            Deposited: {
                asset: 'XcmV3MultiAsset',
                who: 'XcmV3MultiLocation',
            },
            Withdrawn: {
                asset: 'XcmV3MultiAsset',
                who: 'XcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup133: orml_xcm::module::Event<T>
     **/
    OrmlXcmModuleEvent: {
        _enum: {
            Sent: {
                to: 'XcmV3MultiLocation',
                message: 'XcmV3Xcm'
            }
        }
    },
    /**
     * Lookup134: zenlink_protocol::pallet::Event<T>
     **/
    ZenlinkProtocolEvent: {
        _enum: {
            Transferred: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,AccountId32,u128)',
            Burned: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
            Minted: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
            PairCreated: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId)',
            LiquidityAdded: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
            LiquidityRemoved: '(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
            AssetSwap: '(AccountId32,AccountId32,Vec<ZenlinkProtocolPrimitivesAssetId>,Vec<u128>)',
            TransferredToParachain: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u32,AccountId32,u128,u64)',
            BootstrapContribute: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,u128,ZenlinkProtocolPrimitivesAssetId,u128)',
            BootstrapEnd: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
            BootstrapCreated: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
            BootstrapClaim: '(AccountId32,AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
            BootstrapUpdate: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
            BootstrapRefund: '(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128)',
            DistributeReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
            ChargeReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
            WithdrawReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32)'
        }
    },
    /**
     * Lookup135: zenlink_protocol::primitives::AssetId
     **/
    ZenlinkProtocolPrimitivesAssetId: {
        chainId: 'u32',
        assetType: 'u8',
        assetIndex: 'u64'
    },
    /**
     * Lookup140: merkle_distributor::pallet::Event<T>
     **/
    MerkleDistributorEvent: {
        _enum: {
            Create: '(u32,H256,u128)',
            Claim: '(u32,AccountId32,u128)',
            Withdraw: '(u32,AccountId32,u128)',
            AddToWhiteList: 'AccountId32',
            RemoveFromWhiteList: 'AccountId32'
        }
    },
    /**
     * Lookup141: zenlink_stable_amm::pallet::Event<T>
     **/
    ZenlinkStableAmmEvent: {
        _enum: {
            CreatePool: {
                poolId: 'u32',
                currencyIds: 'Vec<NodePrimitivesCurrencyCurrencyId>',
                lpCurrencyId: 'NodePrimitivesCurrencyCurrencyId',
                a: 'u128',
                account: 'AccountId32',
                adminFeeReceiver: 'AccountId32',
            },
            UpdateAdminFeeReceiver: {
                poolId: 'u32',
                adminFeeReceiver: 'AccountId32',
            },
            AddLiquidity: {
                poolId: 'u32',
                who: 'AccountId32',
                to: 'AccountId32',
                supplyAmounts: 'Vec<u128>',
                fees: 'Vec<u128>',
                newD: 'u128',
                mintAmount: 'u128',
            },
            CurrencyExchange: {
                poolId: 'u32',
                who: 'AccountId32',
                to: 'AccountId32',
                inIndex: 'u32',
                inAmount: 'u128',
                outIndex: 'u32',
                outAmount: 'u128',
            },
            RemoveLiquidity: {
                poolId: 'u32',
                who: 'AccountId32',
                to: 'AccountId32',
                amounts: 'Vec<u128>',
                fees: 'Vec<u128>',
                newTotalSupply: 'u128',
            },
            RemoveLiquidityOneCurrency: {
                poolId: 'u32',
                who: 'AccountId32',
                to: 'AccountId32',
                outIndex: 'u32',
                burnAmount: 'u128',
                outAmount: 'u128',
            },
            RemoveLiquidityImbalance: {
                poolId: 'u32',
                who: 'AccountId32',
                to: 'AccountId32',
                amounts: 'Vec<u128>',
                fees: 'Vec<u128>',
                newD: 'u128',
                newTotalSupply: 'u128',
            },
            NewSwapFee: {
                poolId: 'u32',
                newSwapFee: 'u128',
            },
            NewAdminFee: {
                poolId: 'u32',
                newAdminFee: 'u128',
            },
            RampA: {
                poolId: 'u32',
                initialAPrecise: 'u128',
                futureAPrecise: 'u128',
                now: 'u128',
                futureATime: 'u128',
            },
            StopRampA: {
                poolId: 'u32',
                currentA: 'u128',
                now: 'u128',
            },
            CollectProtocolFee: {
                poolId: 'u32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                feeAmount: 'u128',
            },
            CurrencyExchangeUnderlying: {
                poolId: 'u32',
                account: 'AccountId32',
                inAmount: 'u128',
                outAmount: 'u128',
                currencyIndexFrom: 'u32',
                currencyIndexTo: 'u32',
                to: 'AccountId32'
            }
        }
    },
    /**
     * Lookup143: zenlink_swap_router::pallet::Event<T>
     **/
    ZenlinkSwapRouterEvent: 'Null',
    /**
     * Lookup144: bifrost_flexible_fee::pallet::Event<T>
     **/
    BifrostFlexibleFeeEvent: {
        _enum: {
            FlexibleFeeExchanged: '(NodePrimitivesCurrencyCurrencyId,u128)',
            FixedRateFeeExchanged: '(NodePrimitivesCurrencyCurrencyId,u128)',
            ExtraFeeDeducted: '(NodePrimitivesExtraFeeName,NodePrimitivesCurrencyCurrencyId,u128)'
        }
    },
    /**
     * Lookup145: node_primitives::ExtraFeeName
     **/
    NodePrimitivesExtraFeeName: {
        _enum: ['SalpContribute', 'StatemineTransfer', 'NoExtraFee']
    },
    /**
     * Lookup146: bifrost_salp::pallet::Event<T>
     **/
    BifrostSalpEvent: {
        _enum: {
            Created: 'u32',
            Contributing: '(AccountId32,u32,u128,[u8;32])',
            Contributed: '(AccountId32,u32,u128)',
            ContributeFailed: '(AccountId32,u32,u128)',
            Withdrew: '(u32,u128)',
            Refunded: '(AccountId32,u32,u32,u32,u128)',
            AllRefunded: 'u32',
            Redeemed: '(AccountId32,u32,u32,u32,u128)',
            Edited: 'u32',
            Dissolved: 'u32',
            Unlocked: '(AccountId32,u32,u128)',
            AllUnlocked: 'u32',
            Failed: 'u32',
            Success: 'u32',
            Retired: 'u32',
            End: 'u32',
            Continued: '(u32,u32,u32)',
            RefundedDissolved: '(u32,u32,u32)',
            Buyback: 'u128',
            VstokenUnlocked: 'AccountId32'
        }
    },
    /**
     * Lookup147: bifrost_liquidity_mining::pallet::Event<T, I>
     **/
    BifrostLiquidityMiningEvent: {
        _enum: {
            PoolCreated: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),AccountId32)',
            PoolCharged: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),AccountId32)',
            PoolStarted: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId))',
            PoolKilled: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId))',
            PoolRetiredForcefully: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId))',
            PoolEdited: '(u32,u32,u32,u32,u32)',
            UserDeposited: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),u128,AccountId32)',
            UserRedeemed: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),u128,u32,AccountId32)',
            UserClaimed: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),Vec<(NodePrimitivesCurrencyCurrencyId,u128)>,AccountId32)',
            UserUnlocked: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),u128,AccountId32)',
            UserCancelUnlock: '(u32,BifrostLiquidityMiningPoolType,(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId),u128,AccountId32)',
            LazyMigration: '(u32,u32)'
        }
    },
    /**
     * Lookup148: bifrost_liquidity_mining::PoolType
     **/
    BifrostLiquidityMiningPoolType: {
        _enum: ['Mining', 'Farming', 'EBFarming', 'SingleToken']
    },
    /**
     * Lookup153: bifrost_token_issuer::pallet::Event<T>
     **/
    BifrostTokenIssuerEvent: {
        _enum: {
            AddedToIssueList: '(AccountId32,NodePrimitivesCurrencyCurrencyId)',
            RemovedFromIssueList: '(AccountId32,NodePrimitivesCurrencyCurrencyId)',
            AddedToTransferList: '(AccountId32,NodePrimitivesCurrencyCurrencyId)',
            RemovedFromTransferList: '(AccountId32,NodePrimitivesCurrencyCurrencyId)',
            Issued: '(AccountId32,NodePrimitivesCurrencyCurrencyId,u128)',
            Transferred: '(AccountId32,AccountId32,NodePrimitivesCurrencyCurrencyId,u128)'
        }
    },
    /**
     * Lookup154: bifrost_lightening_redeem::pallet::Event<T>
     **/
    BifrostLighteningRedeemEvent: {
        _enum: {
            KSMExchanged: '(AccountId32,u128)',
            KSMAdded: '(AccountId32,u128)',
            PriceEdited: '(u128,u128)',
            BlockIntervalEdited: '(u32,u32)',
            ReleasedPerDayEdited: '(u128,u128)'
        }
    },
    /**
     * Lookup155: bifrost_salp_lite::pallet::Event<T>
     **/
    BifrostSalpLiteEvent: {
        _enum: {
            Created: 'u32',
            Issued: '(AccountId32,u32,u128,[u8;32])',
            Withdrew: '(u32,u128)',
            Refunded: '(AccountId32,u32,u32,u32,u128)',
            Redeemed: '(AccountId32,u32,u32,u32,u128)',
            Edited: 'u32',
            Dissolved: 'u32',
            Unlocked: '(AccountId32,u32,u128)',
            AllUnlocked: 'u32',
            Failed: 'u32',
            Success: 'u32',
            Retired: 'u32',
            Continued: '(u32,u32,u32)',
            RefundedDissolved: '(u32,u32,u32)'
        }
    },
    /**
     * Lookup156: bifrost_call_switchgear::pallet::Event<T>
     **/
    BifrostCallSwitchgearEvent: {
        _enum: {
            TransactionSwitchedoff: '(Bytes,Bytes)',
            TransactionSwitchedOn: '(Bytes,Bytes)',
            TransferAccountDisabled: 'NodePrimitivesCurrencyCurrencyId',
            TransferAccountEnabled: 'NodePrimitivesCurrencyCurrencyId'
        }
    },
    /**
     * Lookup157: bifrost_vsbond_auction::pallet::Event<T, I>
     **/
    BifrostVsbondAuctionEvent: {
        _enum: {
            OrderCreated: '(u64,BifrostVsbondAuctionOrderType,AccountId32,NodePrimitivesCurrencyCurrencyId,u128,u128)',
            OrderRevoked: '(u64,BifrostVsbondAuctionOrderType,AccountId32,NodePrimitivesCurrencyCurrencyId,u128,u128,u128)',
            OrderClinchd: '(u64,BifrostVsbondAuctionOrderType,AccountId32,AccountId32,NodePrimitivesCurrencyCurrencyId,u128,u128,u128,u128)',
            TransactionFeeRateSet: '(Permill,Permill)'
        }
    },
    /**
     * Lookup158: bifrost_vsbond_auction::OrderType
     **/
    BifrostVsbondAuctionOrderType: {
        _enum: ['Sell', 'Buy']
    },
    /**
     * Lookup160: bifrost_asset_registry::pallet::Event<T>
     **/
    BifrostAssetRegistryEvent: {
        _enum: {
            AssetRegistered: {
                assetId: 'NodePrimitivesCurrencyAssetIds',
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            AssetUpdated: {
                assetId: 'NodePrimitivesCurrencyAssetIds',
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            CurrencyIdRegistered: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            MultiLocationSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                location: 'XcmV3MultiLocation',
                weight: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup161: node_primitives::currency::AssetIds
     **/
    NodePrimitivesCurrencyAssetIds: {
        _enum: {
            ForeignAssetId: 'u32',
            NativeAssetId: 'NodePrimitivesCurrencyCurrencyId'
        }
    },
    /**
     * Lookup162: bifrost_asset_registry::pallet::AssetMetadata<Balance>
     **/
    BifrostAssetRegistryAssetMetadata: {
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        minimalBalance: 'u128'
    },
    /**
     * Lookup163: bifrost_vtoken_minting::pallet::Event<T>
     **/
    BifrostVtokenMintingEvent: {
        _enum: {
            Minted: {
                address: 'AccountId32',
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
                vtokenAmount: 'u128',
                fee: 'u128',
            },
            Redeemed: {
                address: 'AccountId32',
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
                vtokenAmount: 'u128',
                fee: 'u128',
            },
            RedeemSuccess: {
                unlockId: 'u32',
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                to: 'AccountId32',
                tokenAmount: 'u128',
            },
            Rebonded: {
                address: 'AccountId32',
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
                vtokenAmount: 'u128',
                fee: 'u128',
            },
            RebondedByUnlockId: {
                address: 'AccountId32',
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
                vtokenAmount: 'u128',
                fee: 'u128',
            },
            UnlockDurationSet: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                unlockDuration: 'NodePrimitivesTimeUnit',
            },
            MinimumMintSet: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            MinimumRedeemSet: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            SupportRebondTokenAdded: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
            },
            SupportRebondTokenRemoved: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
            },
            FeeSet: {
                mintFee: 'Permill',
                redeemFee: 'Permill',
            },
            HookIterationLimitSet: {
                limit: 'u32',
            },
            UnlockingTotalSet: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            MinTimeUnitSet: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                timeUnit: 'NodePrimitivesTimeUnit',
            },
            FastRedeemFailed: {
                err: 'SpRuntimeDispatchError'
            }
        }
    },
    /**
     * Lookup164: node_primitives::TimeUnit
     **/
    NodePrimitivesTimeUnit: {
        _enum: {
            Era: 'Compact<u32>',
            SlashingSpan: 'Compact<u32>',
            Round: 'Compact<u32>',
            Kblock: 'Compact<u32>',
            Hour: 'Compact<u32>'
        }
    },
    /**
     * Lookup165: bifrost_slp::pallet::Event<T>
     **/
    BifrostSlpEvent: {
        _enum: {
            DelegatorInitialized: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
            },
            DelegatorBonded: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                bondedAmount: 'Compact<u128>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
                validator: 'Option<XcmV3MultiLocation>',
            },
            DelegatorBondExtra: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                extraBondedAmount: 'Compact<u128>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
                validator: 'Option<XcmV3MultiLocation>',
            },
            DelegatorUnbond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                unbondAmount: 'Compact<u128>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
                validator: 'Option<XcmV3MultiLocation>',
            },
            DelegatorUnbondAll: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
            },
            DelegatorRebond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                rebondAmount: 'Option<u128>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
                validator: 'Option<XcmV3MultiLocation>',
            },
            Delegated: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                targets: 'Option<Vec<XcmV3MultiLocation>>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
            },
            Undelegated: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                targets: 'Vec<XcmV3MultiLocation>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
            },
            Payout: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validator: 'XcmV3MultiLocation',
                timeUnit: 'Option<NodePrimitivesTimeUnit>',
            },
            Liquidize: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                timeUnit: 'Option<NodePrimitivesTimeUnit>',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
                amount: 'Option<u128>',
            },
            Chill: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
                queryId: 'Compact<u64>',
                queryIdHash: 'H256',
            },
            TransferBack: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'XcmV3MultiLocation',
                to: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
            },
            TransferTo: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'XcmV3MultiLocation',
                to: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
            },
            ConvertAsset: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
            },
            DelegatorAdded: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                index: 'Compact<u16>',
                delegatorId: 'XcmV3MultiLocation',
            },
            DelegatorRemoved: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorId: 'XcmV3MultiLocation',
            },
            ValidatorsAdded: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorId: 'XcmV3MultiLocation',
            },
            ValidatorsRemoved: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorId: 'XcmV3MultiLocation',
            },
            Refund: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                timeUnit: 'NodePrimitivesTimeUnit',
                index: 'Compact<u32>',
                amount: 'Compact<u128>',
            },
            FundMoveFromExitToEntrance: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            TimeUnitUpdated: {
                _alias: {
                    new_: 'new',
                },
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                old: 'Option<NodePrimitivesTimeUnit>',
                new_: 'NodePrimitivesTimeUnit',
            },
            PoolTokenIncreased: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            HostingFeeCharged: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            PoolTokenDecreased: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            FeeSupplemented: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
                from: 'XcmV3MultiLocation',
                to: 'XcmV3MultiLocation',
            },
            ValidatorsByDelegatorSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorsList: 'Vec<XcmV3MultiLocation>',
                delegatorId: 'XcmV3MultiLocation',
            },
            XcmDestWeightAndFeeSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                operation: 'BifrostSlpPrimitivesXcmOperation',
                weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
            },
            OperateOriginSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                operator: 'Option<AccountId32>',
            },
            FeeSourceSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                whoAndFee: 'Option<(XcmV3MultiLocation,u128)>',
            },
            DelegatorLedgerSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegator: 'XcmV3MultiLocation',
                ledger: 'Option<BifrostSlpPrimitivesLedger>',
            },
            DelegatorLedgerQueryResponseConfirmed: {
                queryId: 'Compact<u64>',
                entry: 'BifrostSlpPrimitivesLedgerUpdateEntry',
            },
            DelegatorLedgerQueryResponseFailed: {
                queryId: 'Compact<u64>',
            },
            ValidatorsByDelegatorQueryResponseConfirmed: {
                queryId: 'Compact<u64>',
                entry: 'BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry',
            },
            ValidatorsByDelegatorQueryResponseFailed: {
                queryId: 'Compact<u64>',
            },
            MinimumsMaximumsSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                minimumsAndMaximums: 'Option<BifrostSlpPrimitivesMinimumsMaximums>',
            },
            CurrencyDelaysSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delays: 'Option<BifrostSlpPrimitivesDelays>',
            },
            HostingFeesSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                fees: 'Option<(Permill,XcmV3MultiLocation)>',
            },
            CurrencyTuneExchangeRateLimitSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                tuneExchangeRateLimit: 'Option<(u32,Permill)>',
            },
            OngoingTimeUnitUpdateIntervalSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                interval: 'Option<u32>',
            },
            SupplementFeeAccountWhitelistAdded: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            SupplementFeeAccountWhitelistRemoved: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            ValidatorsReset: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorList: 'Vec<XcmV3MultiLocation>',
            },
            ValidatorBoostListSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorBoostList: 'Vec<(XcmV3MultiLocation,u32)>',
            },
            ValidatorBoostListAdded: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                dueBlockNumber: 'u32',
            },
            RemovedFromBoostList: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup171: bifrost_slp::primitives::XcmOperation
     **/
    BifrostSlpPrimitivesXcmOperation: {
        _enum: ['XtokensTransfer', 'Bond', 'WithdrawUnbonded', 'BondExtra', 'Unbond', 'Rebond', 'Delegate', 'Payout', 'Liquidize', 'TransferBack', 'TransferTo', 'Chill', 'Undelegate', 'CancelLeave', 'XtokensTransferBack', 'ExecuteLeave', 'ConvertAsset']
    },
    /**
     * Lookup178: bifrost_slp::primitives::Ledger<Balance>
     **/
    BifrostSlpPrimitivesLedger: {
        _enum: {
            Substrate: 'BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger',
            Moonbeam: 'BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger',
            ParachainStaking: 'BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger',
            Filecoin: 'BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger',
            Phala: 'BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger'
        }
    },
    /**
     * Lookup179: bifrost_slp::primitives::polkadot_primitives::SubstrateLedger<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger: {
        account: 'XcmV3MultiLocation',
        total: 'Compact<u128>',
        active: 'Compact<u128>',
        unlocking: 'Vec<BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk>'
    },
    /**
     * Lookup181: bifrost_slp::primitives::polkadot_primitives::UnlockChunk<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk: {
        value: 'Compact<u128>',
        unlockTime: 'NodePrimitivesTimeUnit'
    },
    /**
     * Lookup182: bifrost_slp::primitives::moonbeam_primitives::OneToManyLedger<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger: {
        account: 'XcmV3MultiLocation',
        delegations: 'BTreeMap<XcmV3MultiLocation, u128>',
        total: 'u128',
        lessTotal: 'u128',
        requests: 'Vec<BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest>',
        requestBriefs: 'BTreeMap<XcmV3MultiLocation, (NodePrimitivesTimeUnit,u128)>',
        status: 'BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus'
    },
    /**
     * Lookup186: bifrost_slp::primitives::moonbeam_primitives::OneToManyScheduledRequest<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest: {
        validator: 'XcmV3MultiLocation',
        whenExecutable: 'NodePrimitivesTimeUnit',
        action: 'BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction'
    },
    /**
     * Lookup187: bifrost_slp::primitives::moonbeam_primitives::OneToManyDelegationAction<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction: {
        _enum: {
            Revoke: 'u128',
            Decrease: 'u128'
        }
    },
    /**
     * Lookup192: bifrost_slp::primitives::moonbeam_primitives::OneToManyDelegatorStatus
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus: {
        _enum: {
            Active: 'Null',
            Leaving: 'NodePrimitivesTimeUnit'
        }
    },
    /**
     * Lookup193: bifrost_slp::primitives::filecoin_primitives::FilecoinLedger<Balance>
     **/
    BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger: {
        account: 'XcmV3MultiLocation',
        initialPledge: 'Compact<u128>'
    },
    /**
     * Lookup194: bifrost_slp::primitives::phala_primitives::PhalaLedger<Balance>
     **/
    BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger: {
        account: 'XcmV3MultiLocation',
        activeShares: 'Compact<u128>',
        unlockingShares: 'Compact<u128>',
        unlockingTimeUnit: 'Option<NodePrimitivesTimeUnit>',
        bondedPoolId: 'Option<u64>',
        bondedPoolCollectionId: 'Option<u32>'
    },
    /**
     * Lookup197: bifrost_slp::primitives::LedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesLedgerUpdateEntry: {
        _enum: {
            Substrate: 'BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry',
            Moonbeam: 'BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry',
            ParachainStaking: 'BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry'
        }
    },
    /**
     * Lookup198: bifrost_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry: {
        currencyId: 'NodePrimitivesCurrencyCurrencyId',
        delegatorId: 'XcmV3MultiLocation',
        updateOperation: 'BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation',
        amount: 'Compact<u128>',
        unlockTime: 'Option<NodePrimitivesTimeUnit>'
    },
    /**
     * Lookup199: bifrost_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateOperation
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation: {
        _enum: ['Bond', 'Unlock', 'Rebond', 'Liquidize']
    },
    /**
     * Lookup200: bifrost_slp::primitives::moonbeam_primitives::MoonbeamLedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry: {
        currencyId: 'NodePrimitivesCurrencyCurrencyId',
        delegatorId: 'XcmV3MultiLocation',
        validatorId: 'Option<XcmV3MultiLocation>',
        updateOperation: 'BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation',
        amount: 'Compact<u128>',
        unlockTime: 'Option<NodePrimitivesTimeUnit>'
    },
    /**
     * Lookup201: bifrost_slp::primitives::moonbeam_primitives::MoonbeamLedgerUpdateOperation
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation: {
        _enum: ['Bond', 'BondLess', 'Revoke', 'CancelRequest', 'LeaveDelegator', 'CancelLeave', 'ExecuteLeave', 'ExecuteRequest']
    },
    /**
     * Lookup202: bifrost_slp::primitives::ValidatorsByDelegatorUpdateEntry
     **/
    BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry: {
        _enum: {
            Substrate: 'BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry'
        }
    },
    /**
     * Lookup203: bifrost_slp::primitives::polkadot_primitives::SubstrateValidatorsByDelegatorUpdateEntry
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry: {
        currencyId: 'NodePrimitivesCurrencyCurrencyId',
        delegatorId: 'XcmV3MultiLocation',
        validators: 'Vec<XcmV3MultiLocation>'
    },
    /**
     * Lookup205: bifrost_slp::primitives::MinimumsMaximums<Balance>
     **/
    BifrostSlpPrimitivesMinimumsMaximums: {
        delegatorBondedMinimum: 'Compact<u128>',
        bondExtraMinimum: 'Compact<u128>',
        unbondMinimum: 'Compact<u128>',
        rebondMinimum: 'Compact<u128>',
        unbondRecordMaximum: 'Compact<u32>',
        validatorsBackMaximum: 'Compact<u32>',
        delegatorActiveStakingMaximum: 'Compact<u128>',
        validatorsRewardMaximum: 'Compact<u32>',
        delegationAmountMinimum: 'Compact<u128>',
        delegatorsMaximum: 'Compact<u16>',
        validatorsMaximum: 'Compact<u16>'
    },
    /**
     * Lookup207: bifrost_slp::primitives::Delays
     **/
    BifrostSlpPrimitivesDelays: {
        unlockDelay: 'NodePrimitivesTimeUnit',
        leaveDelegatorsDelay: 'NodePrimitivesTimeUnit'
    },
    /**
     * Lookup214: xcm_interface::pallet::Event<T>
     **/
    XcmInterfaceEvent: {
        _enum: {
            XcmDestWeightUpdated: '(XcmInterfaceXcmInterfaceOperation,SpWeightsWeightV2Weight)',
            XcmFeeUpdated: '(XcmInterfaceXcmInterfaceOperation,u128)',
            TransferredStatemineMultiAsset: '(AccountId32,u128)'
        }
    },
    /**
     * Lookup215: xcm_interface::pallet::XcmInterfaceOperation
     **/
    XcmInterfaceXcmInterfaceOperation: {
        _enum: ['UmpContributeTransact', 'StatemineTransfer']
    },
    /**
     * Lookup216: bifrost_vstoken_conversion::pallet::Event<T>
     **/
    BifrostVstokenConversionEvent: {
        _enum: {
            VsbondConvertToVsksm: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vsksmAmount: 'u128',
            },
            VsksmConvertToVsbond: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vsksmAmount: 'u128',
            },
            VsbondConvertToVsdot: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vsdotAmount: 'u128',
            },
            VsdotConvertToVsbond: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vsdotAmount: 'u128',
            },
            VsbondConvertToVstoken: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vstokenAmount: 'u128',
            },
            VstokenConvertToVsbond: {
                address: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                vstokenAmount: 'u128',
            },
            ExchangeFeeSet: {
                exchangeFee: 'BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee',
            },
            ExchangeRateSet: {
                lease: 'i32',
                exchangeRate: 'BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate',
            },
            RelaychainLeaseSet: {
                lease: 'u32'
            }
        }
    },
    /**
     * Lookup217: bifrost_vstoken_conversion::primitives::VstokenConversionExchangeFee<Balance>
     **/
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee: {
        vstokenExchangeFee: 'u128',
        vsbondExchangeFeeOfVstoken: 'u128'
    },
    /**
     * Lookup219: bifrost_vstoken_conversion::primitives::VstokenConversionExchangeRate
     **/
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate: {
        vsbondConvertToVstoken: 'Percent',
        vstokenConvertToVsbond: 'Percent'
    },
    /**
     * Lookup220: bifrost_farming::pallet::Event<T>
     **/
    BifrostFarmingEvent: {
        _enum: {
            FarmingPoolCreated: {
                pid: 'u32',
            },
            FarmingPoolReset: {
                pid: 'u32',
            },
            FarmingPoolClosed: {
                pid: 'u32',
            },
            FarmingPoolKilled: {
                pid: 'u32',
            },
            FarmingPoolEdited: {
                pid: 'u32',
            },
            Charged: {
                who: 'AccountId32',
                pid: 'u32',
                rewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
            },
            Deposited: {
                who: 'AccountId32',
                pid: 'u32',
                addValue: 'u128',
                gaugeInfo: 'Option<(u128,u32)>',
            },
            Withdrawn: {
                who: 'AccountId32',
                pid: 'u32',
                removeValue: 'Option<u128>',
            },
            Claimed: {
                who: 'AccountId32',
                pid: 'u32',
            },
            WithdrawClaimed: {
                who: 'AccountId32',
                pid: 'u32',
            },
            GaugeWithdrawn: {
                who: 'AccountId32',
                gid: 'u32',
            },
            AllForceGaugeClaimed: {
                gid: 'u32',
            },
            PartiallyForceGaugeClaimed: {
                gid: 'u32',
            },
            AllRetired: {
                pid: 'u32',
            },
            PartiallyRetired: {
                pid: 'u32',
            },
            RetireLimitSet: {
                limit: 'u32',
            },
            RoundEnd: {
                totalVotes: 'u128',
                startRound: 'u32',
                endRound: 'u32',
            },
            RoundStartError: {
                info: 'SpRuntimeDispatchError',
            },
            RoundStart: {
                roundLength: 'u32',
            },
            Voted: {
                who: 'AccountId32',
                voteList: 'Vec<(u32,Percent)>',
            },
            BoostCharged: {
                who: 'AccountId32',
                rewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>'
            }
        }
    },
    /**
     * Lookup225: bifrost_system_staking::pallet::Event<T>
     **/
    BifrostSystemStakingEvent: {
        _enum: {
            NewRound: {
                current: 'u32',
                first: 'u32',
                length: 'u32',
            },
            TokenConfigChanged: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                execDelay: 'u32',
                systemStakableFarmingRate: 'Permill',
                addOrSub: 'bool',
                systemStakableBase: 'u128',
                farmingPoolids: 'Vec<u32>',
                lptokenRates: 'Vec<Perbill>',
            },
            DepositFailed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            MintSuccess: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            MintFailed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            WithdrawSuccess: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            WithdrawFailed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            Redeemed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            RedeemFailed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                farmingStakingAmount: 'u128',
                systemStakableAmount: 'u128',
                systemShadowAmount: 'u128',
                pendingRedeemAmount: 'u128',
            },
            VtokenNotFound: {
                token: 'NodePrimitivesCurrencyCurrencyId',
            },
            TokenInfoRefreshed: {
                token: 'NodePrimitivesCurrencyCurrencyId',
            },
            Payout: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                vtoken: 'NodePrimitivesCurrencyCurrencyId',
                from: 'AccountId32',
                to: 'AccountId32',
                amount: 'u128',
                free: 'u128',
                vfree: 'u128',
                shadow: 'u128'
            }
        }
    },
    /**
     * Lookup228: bifrost_system_maker::pallet::Event<T>
     **/
    BifrostSystemMakerEvent: {
        _enum: {
            Charged: {
                who: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                value: 'u128',
            },
            ConfigSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                info: 'BifrostSystemMakerInfo',
            },
            Closed: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            Paid: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                value: 'u128',
            },
            RedeemFailed: {
                vcurrencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup229: bifrost_system_maker::pallet::Info<BalanceOf>
     **/
    BifrostSystemMakerInfo: {
        vcurrencyId: 'NodePrimitivesCurrencyCurrencyId',
        annualization: 'u32',
        granularity: 'u128',
        minimumRedeem: 'u128'
    },
    /**
     * Lookup230: bifrost_fee_share::pallet::Event<T>
     **/
    BifrostFeeShareEvent: {
        _enum: {
            Created: {
                info: 'BifrostFeeShareInfo',
            },
            Edited: {
                info: 'BifrostFeeShareInfo',
            },
            EraLengthSet: {
                eraLength: 'u32',
                nextEra: 'u32',
            },
            Executed: {
                distributionId: 'u32',
            },
            Deleted: {
                distributionId: 'u32',
            },
            ExecuteFailed: {
                distributionId: 'u32',
                info: 'BifrostFeeShareInfo',
                nextEra: 'u32'
            }
        }
    },
    /**
     * Lookup231: bifrost_fee_share::pallet::Info<sp_core::crypto::AccountId32>
     **/
    BifrostFeeShareInfo: {
        receivingAddress: 'AccountId32',
        tokenType: 'Vec<NodePrimitivesCurrencyCurrencyId>',
        tokensProportion: 'BTreeMap<AccountId32, Perbill>',
        ifAuto: 'bool'
    },
    /**
     * Lookup235: bifrost_cross_in_out::pallet::Event<T>
     **/
    BifrostCrossInOutEvent: {
        _enum: {
            CrossedOut: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                crosser: 'AccountId32',
                location: 'XcmV2MultiLocation',
                amount: 'u128',
            },
            CrossedIn: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                dest: 'AccountId32',
                location: 'XcmV2MultiLocation',
                amount: 'u128',
                remark: 'Option<Bytes>',
            },
            CurrencyRegistered: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            CurrencyDeregistered: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            AddedToIssueList: {
                account: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            RemovedFromIssueList: {
                account: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            LinkedAccountRegistered: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                foreignLocation: 'XcmV2MultiLocation',
            },
            AddedToRegisterList: {
                account: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            RemovedFromRegisterList: {
                account: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            CrossingMinimumAmountSet: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                crossInMinimum: 'u128',
                crossOutMinimum: 'u128'
            }
        }
    },
    /**
     * Lookup237: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: 'u32',
            Finalization: 'Null',
            Initialization: 'Null'
        }
    },
    /**
     * Lookup240: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
    },
    /**
     * Lookup242: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: 'Bytes',
            },
            set_heap_pages: {
                pages: 'u64',
            },
            set_code: {
                code: 'Bytes',
            },
            set_code_without_checks: {
                code: 'Bytes',
            },
            set_storage: {
                items: 'Vec<(Bytes,Bytes)>',
            },
            kill_storage: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'Vec<Bytes>',
            },
            kill_prefix: {
                prefix: 'Bytes',
                subkeys: 'u32',
            },
            remark_with_event: {
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup246: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: 'SpWeightsWeightV2Weight',
        maxBlock: 'SpWeightsWeightV2Weight',
        perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
    },
    /**
     * Lookup247: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: 'FrameSystemLimitsWeightsPerClass',
        operational: 'FrameSystemLimitsWeightsPerClass',
        mandatory: 'FrameSystemLimitsWeightsPerClass'
    },
    /**
     * Lookup248: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: 'SpWeightsWeightV2Weight',
        maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
        maxTotal: 'Option<SpWeightsWeightV2Weight>',
        reserved: 'Option<SpWeightsWeightV2Weight>'
    },
    /**
     * Lookup250: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: 'FrameSupportDispatchPerDispatchClassU32'
    },
    /**
     * Lookup251: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
    },
    /**
     * Lookup252: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: 'u64',
        write: 'u64'
    },
    /**
     * Lookup253: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<([u8;8],u32)>',
        transactionVersion: 'u32',
        stateVersion: 'u8'
    },
    /**
     * Lookup257: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
    },
    /**
     * Lookup258: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: 'Compact<u64>'
            }
        }
    },
    /**
     * Lookup260: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: 'u32',
            },
            transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
            },
            free: {
                index: 'u32',
            },
            force_transfer: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
                index: 'u32',
                freeze: 'bool',
            },
            freeze: {
                index: 'u32'
            }
        }
    },
    /**
     * Lookup262: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
    },
    /**
     * Lookup263: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV2PersistedValidationData: {
        parentHead: 'Bytes',
        relayParentNumber: 'u32',
        relayParentStorageRoot: 'H256',
        maxPovSize: 'u32'
    },
    /**
     * Lookup266: polkadot_primitives::v2::UpgradeRestriction
     **/
    PolkadotPrimitivesV2UpgradeRestriction: {
        _enum: ['Present']
    },
    /**
     * Lookup267: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: 'BTreeSet<Bytes>'
    },
    /**
     * Lookup269: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: 'H256',
        relayDispatchQueueSize: '(u32,u32)',
        ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
        egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
    },
    /**
     * Lookup272: polkadot_primitives::v2::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV2AbridgedHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<H256>'
    },
    /**
     * Lookup274: polkadot_primitives::v2::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV2AbridgedHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeCooldown: 'u32',
        validationUpgradeDelay: 'u32'
    },
    /**
     * Lookup280: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup281: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: 'CumulusPrimitivesParachainInherentParachainInherentData',
            },
            sudo_send_upward_message: {
                message: 'Bytes',
            },
            authorize_upgrade: {
                codeHash: 'H256',
            },
            enact_authorized_upgrade: {
                code: 'Bytes'
            }
        }
    },
    /**
     * Lookup282: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: 'PolkadotPrimitivesV2PersistedValidationData',
        relayChainState: 'SpTrieStorageProof',
        downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
    },
    /**
     * Lookup284: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: 'u32',
        msg: 'Bytes'
    },
    /**
     * Lookup287: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: 'u32',
        data: 'Bytes'
    },
    /**
     * Lookup290: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
    },
    /**
     * Lookup292: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: '[u8;8]',
        amount: 'u128',
        reasons: 'PalletBalancesReasons'
    },
    /**
     * Lookup293: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: ['Fee', 'Misc', 'All']
    },
    /**
     * Lookup296: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup298: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                value: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                keepAlive: 'bool',
            },
            force_unreserve: {
                who: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup299: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup301: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: ['V1Ancient', 'V2']
    },
    /**
     * Lookup305: bifrost_kusama_runtime::SessionKeys
     **/
    BifrostKusamaRuntimeSessionKeys: {
        aura: 'SpConsensusAuraSr25519AppSr25519Public'
    },
    /**
     * Lookup306: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
    /**
     * Lookup307: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: '[u8;32]',
    /**
     * Lookup309: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: '[u8;4]',
    /**
     * Lookup310: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: 'keys',
                },
                keys_: 'BifrostKusamaRuntimeSessionKeys',
                proof: 'Bytes',
            },
            purge_keys: 'Null'
        }
    },
    /**
     * Lookup311: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
    },
    /**
     * Lookup315: parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32, BalanceOf>
     **/
    ParachainStakingParachainBondConfig: {
        account: 'AccountId32',
        percent: 'Percent',
        paymentInRound: 'u128'
    },
    /**
     * Lookup316: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: 'u32',
        first: 'u32',
        length: 'u32'
    },
    /**
     * Lookup317: parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegator: {
        id: 'AccountId32',
        delegations: 'ParachainStakingSetOrderedSet',
        total: 'u128',
        lessTotal: 'u128',
        status: 'ParachainStakingDelegatorStatus'
    },
    /**
     * Lookup318: parachain_staking::set::OrderedSet<parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
     **/
    ParachainStakingSetOrderedSet: 'Vec<ParachainStakingBond>',
    /**
     * Lookup319: parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingBond: {
        owner: 'AccountId32',
        amount: 'u128'
    },
    /**
     * Lookup321: parachain_staking::types::DelegatorStatus
     **/
    ParachainStakingDelegatorStatus: {
        _enum: {
            Active: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup322: parachain_staking::types::CandidateMetadata<Balance>
     **/
    ParachainStakingCandidateMetadata: {
        bond: 'u128',
        delegationCount: 'u32',
        totalCounted: 'u128',
        lowestTopDelegationAmount: 'u128',
        highestBottomDelegationAmount: 'u128',
        lowestBottomDelegationAmount: 'u128',
        topCapacity: 'ParachainStakingCapacityStatus',
        bottomCapacity: 'ParachainStakingCapacityStatus',
        request: 'Option<ParachainStakingCandidateBondLessRequest>',
        status: 'ParachainStakingCollatorStatus'
    },
    /**
     * Lookup323: parachain_staking::types::CapacityStatus
     **/
    ParachainStakingCapacityStatus: {
        _enum: ['Full', 'Empty', 'Partial']
    },
    /**
     * Lookup325: parachain_staking::types::CandidateBondLessRequest<Balance>
     **/
    ParachainStakingCandidateBondLessRequest: {
        amount: 'u128',
        whenExecutable: 'u32'
    },
    /**
     * Lookup326: parachain_staking::types::CollatorStatus
     **/
    ParachainStakingCollatorStatus: {
        _enum: {
            Active: 'Null',
            Idle: 'Null',
            Leaving: 'u32'
        }
    },
    /**
     * Lookup328: parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegationRequestsScheduledRequest: {
        delegator: 'AccountId32',
        whenExecutable: 'u32',
        action: 'ParachainStakingDelegationRequestsDelegationAction'
    },
    /**
     * Lookup329: parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegations: {
        delegations: 'Vec<ParachainStakingBond>',
        total: 'u128'
    },
    /**
     * Lookup331: parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingCollatorSnapshot: {
        bond: 'u128',
        delegations: 'Vec<ParachainStakingBond>',
        total: 'u128'
    },
    /**
     * Lookup332: parachain_staking::types::DelayedPayout<Balance>
     **/
    ParachainStakingDelayedPayout: {
        roundIssuance: 'u128',
        totalStakingReward: 'u128',
        collatorCommission: 'Perbill'
    },
    /**
     * Lookup333: parachain_staking::inflation::InflationInfo<Balance>
     **/
    ParachainStakingInflationInflationInfo: {
        expect: {
            min: 'u128',
            ideal: 'u128',
            max: 'u128'
        },
        annual: {
            min: 'Perbill',
            ideal: 'Perbill',
            max: 'Perbill'
        },
        round: {
            min: 'Perbill',
            ideal: 'Perbill',
            max: 'Perbill'
        }
    },
    /**
     * Lookup336: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            set_staking_expectations: {
                expectations: {
                    min: 'u128',
                    ideal: 'u128',
                    max: 'u128'
                },
            },
            set_inflation: {
                schedule: {
                    min: 'Perbill',
                    ideal: 'Perbill',
                    max: 'Perbill'
                },
            },
            set_parachain_bond_account: {
                _alias: {
                    new_: 'new',
                },
                new_: 'AccountId32',
            },
            set_parachain_bond_reserve_percent: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Percent',
            },
            set_total_selected: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            set_collator_commission: {
                _alias: {
                    new_: 'new',
                },
                new_: 'Perbill',
            },
            set_blocks_per_round: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            join_candidates: {
                bond: 'u128',
                candidateCount: 'u32',
            },
            schedule_leave_candidates: {
                candidateCount: 'u32',
            },
            execute_leave_candidates: {
                candidate: 'AccountId32',
                candidateDelegationCount: 'u32',
            },
            cancel_leave_candidates: {
                candidateCount: 'u32',
            },
            go_offline: 'Null',
            go_online: 'Null',
            candidate_bond_more: {
                more: 'u128',
            },
            schedule_candidate_bond_less: {
                less: 'u128',
            },
            execute_candidate_bond_less: {
                candidate: 'AccountId32',
            },
            cancel_candidate_bond_less: 'Null',
            delegate: {
                candidate: 'AccountId32',
                amount: 'u128',
                candidateDelegationCount: 'u32',
                delegationCount: 'u32',
            },
            schedule_leave_delegators: 'Null',
            execute_leave_delegators: {
                delegator: 'AccountId32',
                delegationCount: 'u32',
            },
            cancel_leave_delegators: 'Null',
            schedule_revoke_delegation: {
                collator: 'AccountId32',
            },
            delegator_bond_more: {
                candidate: 'AccountId32',
                more: 'u128',
            },
            schedule_delegator_bond_less: {
                candidate: 'AccountId32',
                less: 'u128',
            },
            execute_delegation_request: {
                delegator: 'AccountId32',
                candidate: 'AccountId32',
            },
            cancel_delegation_request: {
                candidate: 'AccountId32',
            },
            hotfix_remove_delegation_requests_exited_candidates: {
                candidates: 'Vec<AccountId32>',
            },
            hotfix_migrate_delegators_from_reserve_to_locks: {
                delegators: 'Vec<AccountId32>',
            },
            hotfix_migrate_collators_from_reserve_to_locks: {
                collators: 'Vec<AccountId32>'
            }
        }
    },
    /**
     * Lookup337: frame_support::PalletId
     **/
    FrameSupportPalletId: '[u8;8]',
    /**
     * Lookup338: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegatorBondBelowMin', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'RoundLengthMustBeAtLeastTotalSelectedCollators', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowCandidateDelegationCountToLeaveCandidates', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull', 'PendingDelegationRevoke']
    },
    /**
     * Lookup341: frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            Inline: 'Bytes',
            Lookup: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                len: 'u32'
            }
        }
    },
    /**
     * Lookup343: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: 'FrameSupportPreimagesBounded',
                value: 'Compact<u128>',
            },
            second: {
                proposal: 'Compact<u32>',
            },
            vote: {
                refIndex: 'Compact<u32>',
                vote: 'PalletDemocracyVoteAccountVote',
            },
            emergency_cancel: {
                refIndex: 'u32',
            },
            external_propose: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            external_propose_majority: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            external_propose_default: {
                proposal: 'FrameSupportPreimagesBounded',
            },
            fast_track: {
                proposalHash: 'H256',
                votingPeriod: 'u32',
                delay: 'u32',
            },
            veto_external: {
                proposalHash: 'H256',
            },
            cancel_referendum: {
                refIndex: 'Compact<u32>',
            },
            delegate: {
                to: 'MultiAddress',
                conviction: 'PalletDemocracyConviction',
                balance: 'u128',
            },
            undelegate: 'Null',
            clear_public_proposals: 'Null',
            unlock: {
                target: 'MultiAddress',
            },
            remove_vote: {
                index: 'u32',
            },
            remove_other_vote: {
                target: 'MultiAddress',
                index: 'u32',
            },
            blacklist: {
                proposalHash: 'H256',
                maybeRefIndex: 'Option<u32>',
            },
            cancel_proposal: {
                propIndex: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup344: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
    },
    /**
     * Lookup345: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: 'Vec<AccountId32>',
                prime: 'Option<AccountId32>',
                oldCount: 'u32',
            },
            execute: {
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            propose: {
                threshold: 'Compact<u32>',
                proposal: 'Call',
                lengthBound: 'Compact<u32>',
            },
            vote: {
                proposal: 'H256',
                index: 'Compact<u32>',
                approve: 'bool',
            },
            close_old_weight: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'Compact<u64>',
                lengthBound: 'Compact<u32>',
            },
            disapprove_proposal: {
                proposalHash: 'H256',
            },
            close: {
                proposalHash: 'H256',
                index: 'Compact<u32>',
                proposalWeightBound: 'SpWeightsWeightV2Weight',
                lengthBound: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup349: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: 'Vec<AccountId32>',
                value: 'Compact<u128>',
            },
            remove_voter: 'Null',
            submit_candidacy: {
                candidateCount: 'Compact<u32>',
            },
            renounce_candidacy: {
                renouncing: 'PalletElectionsPhragmenRenouncing',
            },
            remove_member: {
                who: 'MultiAddress',
                slashBond: 'bool',
                rerunElection: 'bool',
            },
            clean_defunct_voters: {
                numVoters: 'u32',
                numDefunct: 'u32'
            }
        }
    },
    /**
     * Lookup350: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: 'Null',
            RunnerUp: 'Null',
            Candidate: 'Compact<u32>'
        }
    },
    /**
     * Lookup351: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: 'MultiAddress',
            },
            remove_member: {
                who: 'MultiAddress',
            },
            swap_member: {
                remove: 'MultiAddress',
                add: 'MultiAddress',
            },
            reset_members: {
                members: 'Vec<AccountId32>',
            },
            change_key: {
                _alias: {
                    new_: 'new',
                },
                new_: 'MultiAddress',
            },
            set_prime: {
                who: 'MultiAddress',
            },
            clear_prime: 'Null'
        }
    },
    /**
     * Lookup353: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight',
            },
            suspend_xcm_execution: 'Null',
            resume_xcm_execution: 'Null',
            update_suspend_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_drop_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_resume_threshold: {
                _alias: {
                    new_: 'new',
                },
                new_: 'u32',
            },
            update_threshold_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_weight_restrict_decay: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight',
            },
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: 'new',
                },
                new_: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup354: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: 'XcmVersionedMultiLocation',
                message: 'XcmVersionedXcm',
            },
            teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
            },
            execute: {
                message: 'XcmVersionedXcm',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            force_xcm_version: {
                location: 'XcmV3MultiLocation',
                xcmVersion: 'u32',
            },
            force_default_xcm_version: {
                maybeXcmVersion: 'Option<u32>',
            },
            force_subscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            force_unsubscribe_version_notify: {
                location: 'XcmVersionedMultiLocation',
            },
            limited_reserve_transfer_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV3WeightLimit',
            },
            limited_teleport_assets: {
                dest: 'XcmVersionedMultiLocation',
                beneficiary: 'XcmVersionedMultiLocation',
                assets: 'XcmVersionedMultiAssets',
                feeAssetItem: 'u32',
                weightLimit: 'XcmV3WeightLimit'
            }
        }
    },
    /**
     * Lookup355: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            V2: 'XcmV2Xcm',
            V3: 'XcmV3Xcm'
        }
    },
    /**
     * Lookup356: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: 'Vec<XcmV2Instruction>',
    /**
     * Lookup358: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: 'XcmV2MultiassetMultiAssets',
            ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
            ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
            QueryResponse: {
                queryId: 'Compact<u64>',
                response: 'XcmV2Response',
                maxWeight: 'Compact<u64>',
            },
            TransferAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                beneficiary: 'XcmV2MultiLocation',
            },
            TransferReserveAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            Transact: {
                originType: 'XcmV2OriginKind',
                requireWeightAtMost: 'Compact<u64>',
                call: 'XcmDoubleEncoded',
            },
            HrmpNewChannelOpenRequest: {
                sender: 'Compact<u32>',
                maxMessageSize: 'Compact<u32>',
                maxCapacity: 'Compact<u32>',
            },
            HrmpChannelAccepted: {
                recipient: 'Compact<u32>',
            },
            HrmpChannelClosing: {
                initiator: 'Compact<u32>',
                sender: 'Compact<u32>',
                recipient: 'Compact<u32>',
            },
            ClearOrigin: 'Null',
            DescendOrigin: 'XcmV2MultilocationJunctions',
            ReportError: {
                queryId: 'Compact<u64>',
                dest: 'XcmV2MultiLocation',
                maxResponseWeight: 'Compact<u64>',
            },
            DepositAsset: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                beneficiary: 'XcmV2MultiLocation',
            },
            DepositReserveAsset: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxAssets: 'Compact<u32>',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            ExchangeAsset: {
                give: 'XcmV2MultiassetMultiAssetFilter',
                receive: 'XcmV2MultiassetMultiAssets',
            },
            InitiateReserveWithdraw: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                reserve: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            InitiateTeleport: {
                assets: 'XcmV2MultiassetMultiAssetFilter',
                dest: 'XcmV2MultiLocation',
                xcm: 'XcmV2Xcm',
            },
            QueryHolding: {
                queryId: 'Compact<u64>',
                dest: 'XcmV2MultiLocation',
                assets: 'XcmV2MultiassetMultiAssetFilter',
                maxResponseWeight: 'Compact<u64>',
            },
            BuyExecution: {
                fees: 'XcmV2MultiAsset',
                weightLimit: 'XcmV2WeightLimit',
            },
            RefundSurplus: 'Null',
            SetErrorHandler: 'XcmV2Xcm',
            SetAppendix: 'XcmV2Xcm',
            ClearError: 'Null',
            ClaimAsset: {
                assets: 'XcmV2MultiassetMultiAssets',
                ticket: 'XcmV2MultiLocation',
            },
            Trap: 'Compact<u64>',
            SubscribeVersion: {
                queryId: 'Compact<u64>',
                maxResponseWeight: 'Compact<u64>',
            },
            UnsubscribeVersion: 'Null'
        }
    },
    /**
     * Lookup359: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: 'Null',
            Assets: 'XcmV2MultiassetMultiAssets',
            ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
            Version: 'u32'
        }
    },
    /**
     * Lookup362: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: 'Null',
            Unimplemented: 'Null',
            UntrustedReserveLocation: 'Null',
            UntrustedTeleportLocation: 'Null',
            MultiLocationFull: 'Null',
            MultiLocationNotInvertible: 'Null',
            BadOrigin: 'Null',
            InvalidLocation: 'Null',
            AssetNotFound: 'Null',
            FailedToTransactAsset: 'Null',
            NotWithdrawable: 'Null',
            LocationCannotHold: 'Null',
            ExceedsMaxMessageSize: 'Null',
            DestinationUnsupported: 'Null',
            Transport: 'Null',
            Unroutable: 'Null',
            UnknownClaim: 'Null',
            FailedToDecode: 'Null',
            MaxWeightInvalid: 'Null',
            NotHoldingFees: 'Null',
            TooExpensive: 'Null',
            Trap: 'u64',
            UnhandledXcmVersion: 'Null',
            WeightLimitReached: 'u64',
            Barrier: 'Null',
            WeightNotComputable: 'Null'
        }
    },
    /**
     * Lookup363: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: 'XcmV2MultiassetMultiAssets',
            Wild: 'XcmV2MultiassetWildMultiAsset'
        }
    },
    /**
     * Lookup364: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: 'Null',
            AllOf: {
                id: 'XcmV2MultiassetAssetId',
                fun: 'XcmV2MultiassetWildFungibility'
            }
        }
    },
    /**
     * Lookup365: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: ['Fungible', 'NonFungible']
    },
    /**
     * Lookup366: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: 'Null',
            Limited: 'Compact<u64>'
        }
    },
    /**
     * Lookup375: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: 'u64',
                weightLimit: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup376: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: 'Vec<Call>',
            },
            as_derivative: {
                index: 'u16',
                call: 'Call',
            },
            batch_all: {
                calls: 'Vec<Call>',
            },
            dispatch_as: {
                asOrigin: 'BifrostKusamaRuntimeOriginCaller',
                call: 'Call',
            },
            force_batch: {
                calls: 'Vec<Call>',
            },
            with_weight: {
                call: 'Call',
                weight: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup378: bifrost_kusama_runtime::OriginCaller
     **/
    BifrostKusamaRuntimeOriginCaller: {
        _enum: {
            system: 'FrameSupportDispatchRawOrigin',
            __Unused1: 'Null',
            __Unused2: 'Null',
            __Unused3: 'Null',
            __Unused4: 'Null',
            Void: 'SpCoreVoid',
            __Unused6: 'Null',
            __Unused7: 'Null',
            __Unused8: 'Null',
            __Unused9: 'Null',
            __Unused10: 'Null',
            __Unused11: 'Null',
            __Unused12: 'Null',
            __Unused13: 'Null',
            __Unused14: 'Null',
            __Unused15: 'Null',
            __Unused16: 'Null',
            __Unused17: 'Null',
            __Unused18: 'Null',
            __Unused19: 'Null',
            __Unused20: 'Null',
            __Unused21: 'Null',
            __Unused22: 'Null',
            __Unused23: 'Null',
            __Unused24: 'Null',
            __Unused25: 'Null',
            __Unused26: 'Null',
            __Unused27: 'Null',
            __Unused28: 'Null',
            __Unused29: 'Null',
            __Unused30: 'Null',
            Council: 'PalletCollectiveRawOrigin',
            TechnicalCommittee: 'PalletCollectiveRawOrigin',
            __Unused33: 'Null',
            __Unused34: 'Null',
            __Unused35: 'Null',
            __Unused36: 'Null',
            __Unused37: 'Null',
            __Unused38: 'Null',
            __Unused39: 'Null',
            __Unused40: 'Null',
            PolkadotXcm: 'PalletXcmOrigin',
            CumulusXcm: 'CumulusPalletXcmOrigin'
        }
    },
    /**
     * Lookup379: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: 'Null',
            Signed: 'AccountId32',
            None: 'Null'
        }
    },
    /**
     * Lookup380: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: '(u32,u32)',
            Member: 'AccountId32',
            _Phantom: 'Null'
        }
    },
    /**
     * Lookup382: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: 'XcmV3MultiLocation',
            Response: 'XcmV3MultiLocation'
        }
    },
    /**
     * Lookup383: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: 'Null',
            SiblingParachain: 'u32'
        }
    },
    /**
     * Lookup384: sp_core::Void
     **/
    SpCoreVoid: 'Null',
    /**
     * Lookup385: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel: {
                when: 'u32',
                index: 'u32',
            },
            schedule_named: {
                id: '[u8;32]',
                when: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            cancel_named: {
                id: '[u8;32]',
            },
            schedule_after: {
                after: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'Call',
            },
            schedule_named_after: {
                id: '[u8;32]',
                after: 'u32',
                maybePeriodic: 'Option<(u32,u32)>',
                priority: 'u8',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup387: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: 'MultiAddress',
                forceProxyType: 'Option<BifrostKusamaRuntimeProxyType>',
                call: 'Call',
            },
            add_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxy: {
                delegate: 'MultiAddress',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                delay: 'u32',
            },
            remove_proxies: 'Null',
            create_pure: {
                proxyType: 'BifrostKusamaRuntimeProxyType',
                delay: 'u32',
                index: 'u16',
            },
            kill_pure: {
                spawner: 'MultiAddress',
                proxyType: 'BifrostKusamaRuntimeProxyType',
                index: 'u16',
                height: 'Compact<u32>',
                extIndex: 'Compact<u32>',
            },
            announce: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            remove_announcement: {
                real: 'MultiAddress',
                callHash: 'H256',
            },
            reject_announcement: {
                delegate: 'MultiAddress',
                callHash: 'H256',
            },
            proxy_announced: {
                delegate: 'MultiAddress',
                real: 'MultiAddress',
                forceProxyType: 'Option<BifrostKusamaRuntimeProxyType>',
                call: 'Call'
            }
        }
    },
    /**
     * Lookup389: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: 'Vec<AccountId32>',
                call: 'Call',
            },
            as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                call: 'Call',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            approve_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                maybeTimepoint: 'Option<PalletMultisigTimepoint>',
                callHash: '[u8;32]',
                maxWeight: 'SpWeightsWeightV2Weight',
            },
            cancel_as_multi: {
                threshold: 'u16',
                otherSignatories: 'Vec<AccountId32>',
                timepoint: 'PalletMultisigTimepoint',
                callHash: '[u8;32]'
            }
        }
    },
    /**
     * Lookup391: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: 'MultiAddress',
            },
            set_identity: {
                info: 'PalletIdentityIdentityInfo',
            },
            set_subs: {
                subs: 'Vec<(AccountId32,Data)>',
            },
            clear_identity: 'Null',
            request_judgement: {
                regIndex: 'Compact<u32>',
                maxFee: 'Compact<u128>',
            },
            cancel_request: {
                regIndex: 'u32',
            },
            set_fee: {
                index: 'Compact<u32>',
                fee: 'Compact<u128>',
            },
            set_account_id: {
                _alias: {
                    new_: 'new',
                },
                index: 'Compact<u32>',
                new_: 'MultiAddress',
            },
            set_fields: {
                index: 'Compact<u32>',
                fields: 'PalletIdentityBitFlags',
            },
            provide_judgement: {
                regIndex: 'Compact<u32>',
                target: 'MultiAddress',
                judgement: 'PalletIdentityJudgement',
                identity: 'H256',
            },
            kill_identity: {
                target: 'MultiAddress',
            },
            add_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            rename_sub: {
                sub: 'MultiAddress',
                data: 'Data',
            },
            remove_sub: {
                sub: 'MultiAddress',
            },
            quit_sub: 'Null'
        }
    },
    /**
     * Lookup392: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: 'Vec<(Data,Data)>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<[u8;20]>',
        image: 'Data',
        twitter: 'Data'
    },
    /**
     * Lookup428: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: 64,
        Display: 1,
        Legal: 2,
        Web: 4,
        Riot: 8,
        Email: 16,
        PgpFingerprint: 32,
        Image: 64,
        Twitter: 128
    },
    /**
     * Lookup429: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
    },
    /**
     * Lookup430: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: 'Null',
            FeePaid: 'u128',
            Reasonable: 'Null',
            KnownGood: 'Null',
            OutOfDate: 'Null',
            LowQuality: 'Null',
            Erroneous: 'Null'
        }
    },
    /**
     * Lookup431: bifrost_vesting::pallet::Call<T>
     **/
    BifrostVestingCall: {
        _enum: {
            vest: 'Null',
            vest_other: {
                target: 'MultiAddress',
            },
            vested_transfer: {
                target: 'MultiAddress',
                schedule: 'BifrostVestingVestingInfo',
            },
            force_vested_transfer: {
                source: 'MultiAddress',
                target: 'MultiAddress',
                schedule: 'BifrostVestingVestingInfo',
            },
            force_set_vested: {
                source: 'MultiAddress',
                target: 'MultiAddress',
                schedule: 'BifrostVestingVestingInfo',
            },
            init_vesting_start_at: {
                vestingStartAt: 'u32',
            },
            set_vesting_per_block: {
                target: 'MultiAddress',
                perBlock: 'u128',
            },
            force_set_cliff: {
                target: 'MultiAddress',
                cliffBlock: 'u32'
            }
        }
    },
    /**
     * Lookup432: bifrost_vesting::VestingInfo<Balance, BlockNumber>
     **/
    BifrostVestingVestingInfo: {
        locked: 'u128',
        perBlock: 'u128',
        startingBlock: 'u32'
    },
    /**
     * Lookup433: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            reject_proposal: {
                proposalId: 'Compact<u32>',
            },
            approve_proposal: {
                proposalId: 'Compact<u32>',
            },
            spend: {
                amount: 'Compact<u128>',
                beneficiary: 'MultiAddress',
            },
            remove_approval: {
                proposalId: 'Compact<u32>'
            }
        }
    },
    /**
     * Lookup434: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: 'Compact<u128>',
                description: 'Bytes',
            },
            approve_bounty: {
                bountyId: 'Compact<u32>',
            },
            propose_curator: {
                bountyId: 'Compact<u32>',
                curator: 'MultiAddress',
                fee: 'Compact<u128>',
            },
            unassign_curator: {
                bountyId: 'Compact<u32>',
            },
            accept_curator: {
                bountyId: 'Compact<u32>',
            },
            award_bounty: {
                bountyId: 'Compact<u32>',
                beneficiary: 'MultiAddress',
            },
            claim_bounty: {
                bountyId: 'Compact<u32>',
            },
            close_bounty: {
                bountyId: 'Compact<u32>',
            },
            extend_bounty_expiry: {
                bountyId: 'Compact<u32>',
                remark: 'Bytes'
            }
        }
    },
    /**
     * Lookup435: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: 'Bytes',
                who: 'MultiAddress',
            },
            retract_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            tip_new: {
                reason: 'Bytes',
                who: 'MultiAddress',
                tipValue: 'Compact<u128>',
            },
            tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
                tipValue: 'Compact<u128>',
            },
            close_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            slash_tip: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup436: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: 'Bytes',
            },
            unnote_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            request_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256',
            },
            unrequest_preimage: {
                _alias: {
                    hash_: 'hash',
                },
                hash_: 'H256'
            }
        }
    },
    /**
     * Lookup437: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit',
            },
            transfer_multiasset: {
                asset: 'XcmVersionedMultiAsset',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit',
            },
            transfer_with_fee: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
                fee: 'u128',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit',
            },
            transfer_multiasset_with_fee: {
                asset: 'XcmVersionedMultiAsset',
                fee: 'XcmVersionedMultiAsset',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit',
            },
            transfer_multicurrencies: {
                currencies: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                feeItem: 'u32',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit',
            },
            transfer_multiassets: {
                assets: 'XcmVersionedMultiAssets',
                feeItem: 'u32',
                dest: 'XcmVersionedMultiLocation',
                destWeightLimit: 'XcmV3WeightLimit'
            }
        }
    },
    /**
     * Lookup438: xcm::VersionedMultiAsset
     **/
    XcmVersionedMultiAsset: {
        _enum: {
            __Unused0: 'Null',
            V2: 'XcmV2MultiAsset',
            __Unused2: 'Null',
            V3: 'XcmV3MultiAsset'
        }
    },
    /**
     * Lookup439: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_all: {
                dest: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                keepAlive: 'bool',
            },
            transfer_keep_alive: {
                dest: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            force_transfer: {
                source: 'MultiAddress',
                dest: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            set_balance: {
                who: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                newFree: 'Compact<u128>',
                newReserved: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup440: orml_currencies::module::Call<T>
     **/
    OrmlCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer_native_currency: {
                dest: 'MultiAddress',
                amount: 'Compact<u128>',
            },
            update_balance: {
                who: 'MultiAddress',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'i128'
            }
        }
    },
    /**
     * Lookup442: orml_xcm::module::Call<T>
     **/
    OrmlXcmModuleCall: {
        _enum: {
            send_as_sovereign: {
                dest: 'XcmVersionedMultiLocation',
                message: 'XcmVersionedXcm'
            }
        }
    },
    /**
     * Lookup443: zenlink_protocol::pallet::Call<T>
     **/
    ZenlinkProtocolCall: {
        _enum: {
            set_fee_receiver: {
                sendTo: 'Option<MultiAddress>',
            },
            set_fee_point: {
                feePoint: 'u8',
            },
            transfer: {
                assetId: 'ZenlinkProtocolPrimitivesAssetId',
                recipient: 'MultiAddress',
                amount: 'Compact<u128>',
            },
            create_pair: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
            },
            add_liquidity: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                amount0Desired: 'Compact<u128>',
                amount1Desired: 'Compact<u128>',
                amount0Min: 'Compact<u128>',
                amount1Min: 'Compact<u128>',
                deadline: 'Compact<u32>',
            },
            remove_liquidity: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                liquidity: 'Compact<u128>',
                amount0Min: 'Compact<u128>',
                amount1Min: 'Compact<u128>',
                recipient: 'MultiAddress',
                deadline: 'Compact<u32>',
            },
            swap_exact_assets_for_assets: {
                amountIn: 'Compact<u128>',
                amountOutMin: 'Compact<u128>',
                path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
                recipient: 'MultiAddress',
                deadline: 'Compact<u32>',
            },
            swap_assets_for_exact_assets: {
                amountOut: 'Compact<u128>',
                amountInMax: 'Compact<u128>',
                path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
                recipient: 'MultiAddress',
                deadline: 'Compact<u32>',
            },
            bootstrap_create: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                targetSupply0: 'Compact<u128>',
                targetSupply1: 'Compact<u128>',
                capacitySupply0: 'Compact<u128>',
                capacitySupply1: 'Compact<u128>',
                end: 'Compact<u32>',
                rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
                limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
            },
            bootstrap_contribute: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                amount0Contribute: 'Compact<u128>',
                amount1Contribute: 'Compact<u128>',
                deadline: 'Compact<u32>',
            },
            bootstrap_claim: {
                recipient: 'MultiAddress',
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                deadline: 'Compact<u32>',
            },
            bootstrap_end: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
            },
            bootstrap_update: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                targetSupply0: 'Compact<u128>',
                targetSupply1: 'Compact<u128>',
                capacitySupply0: 'Compact<u128>',
                capacitySupply1: 'Compact<u128>',
                end: 'Compact<u32>',
                rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
                limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
            },
            bootstrap_refund: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
            },
            bootstrap_charge_reward: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                chargeRewards: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
            },
            bootstrap_withdraw_reward: {
                asset0: 'ZenlinkProtocolPrimitivesAssetId',
                asset1: 'ZenlinkProtocolPrimitivesAssetId',
                recipient: 'MultiAddress'
            }
        }
    },
    /**
     * Lookup445: merkle_distributor::pallet::Call<T>
     **/
    MerkleDistributorCall: {
        _enum: {
            add_to_create_whitelist: {
                account: 'AccountId32',
            },
            remove_from_create_whitelist: {
                account: 'AccountId32',
            },
            create_merkle_distributor: {
                merkleRoot: 'H256',
                description: 'Bytes',
                distributeCurrency: 'NodePrimitivesCurrencyCurrencyId',
                distributeAmount: 'u128',
            },
            claim: {
                merkleDistributorId: 'u32',
                index: 'u32',
                account: 'MultiAddress',
                amount: 'u128',
                merkleProof: 'Vec<H256>',
            },
            charge: {
                merkleDistributorId: 'u32',
            },
            emergency_withdraw: {
                merkleDistributorId: 'u32',
                recipient: 'MultiAddress',
                amount: 'u128'
            }
        }
    },
    /**
     * Lookup446: zenlink_stable_amm::pallet::Call<T>
     **/
    ZenlinkStableAmmCall: {
        _enum: {
            create_base_pool: {
                currencyIds: 'Vec<NodePrimitivesCurrencyCurrencyId>',
                currencyDecimals: 'Vec<u32>',
                a: 'u128',
                fee: 'u128',
                adminFee: 'u128',
                adminFeeReceiver: 'AccountId32',
                lpCurrencySymbol: 'Bytes',
            },
            create_meta_pool: {
                currencyIds: 'Vec<NodePrimitivesCurrencyCurrencyId>',
                currencyDecimals: 'Vec<u32>',
                a: 'u128',
                fee: 'u128',
                adminFee: 'u128',
                adminFeeReceiver: 'AccountId32',
                lpCurrencySymbol: 'Bytes',
            },
            add_liquidity: {
                poolId: 'u32',
                amounts: 'Vec<u128>',
                minMintAmount: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            swap: {
                pooId: 'u32',
                fromIndex: 'u32',
                toIndex: 'u32',
                inAmount: 'u128',
                minOutAmount: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            remove_liquidity: {
                pooId: 'u32',
                lpAmount: 'u128',
                minAmounts: 'Vec<u128>',
                to: 'AccountId32',
                deadline: 'u32',
            },
            remove_liquidity_one_currency: {
                pooId: 'u32',
                lpAmount: 'u128',
                index: 'u32',
                minAmount: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            remove_liquidity_imbalance: {
                poolId: 'u32',
                amounts: 'Vec<u128>',
                maxBurnAmount: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            add_pool_and_base_pool_liquidity: {
                poolId: 'u32',
                basePoolId: 'u32',
                metaAmounts: 'Vec<u128>',
                baseAmounts: 'Vec<u128>',
                minToMint: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            remove_pool_and_base_pool_liquidity: {
                poolId: 'u32',
                basePoolId: 'u32',
                amount: 'u128',
                minAmountsMeta: 'Vec<u128>',
                minAmountsBase: 'Vec<u128>',
                to: 'AccountId32',
                deadline: 'u32',
            },
            remove_pool_and_base_pool_liquidity_one_currency: {
                poolId: 'u32',
                basePoolId: 'u32',
                amount: 'u128',
                i: 'u32',
                minAmount: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            swap_pool_from_base: {
                poolId: 'u32',
                basePoolId: 'u32',
                inIndex: 'u32',
                outIndex: 'u32',
                dx: 'u128',
                minDy: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            swap_pool_to_base: {
                poolId: 'u32',
                basePoolId: 'u32',
                inIndex: 'u32',
                outIndex: 'u32',
                dx: 'u128',
                minDy: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            swap_meta_pool_underlying: {
                poolId: 'u32',
                inIndex: 'u32',
                outIndex: 'u32',
                dx: 'u128',
                minDy: 'u128',
                to: 'AccountId32',
                deadline: 'u32',
            },
            update_fee_receiver: {
                poolId: 'u32',
                feeReceiver: 'MultiAddress',
            },
            set_swap_fee: {
                poolId: 'u32',
                newSwapFee: 'u128',
            },
            set_admin_fee: {
                poolId: 'u32',
                newAdminFee: 'u128',
            },
            ramp_a: {
                poolId: 'u32',
                futureA: 'u128',
                futureATime: 'u128',
            },
            stop_ramp_a: {
                poolId: 'u32',
            },
            withdraw_admin_fee: {
                poolId: 'u32'
            }
        }
    },
    /**
     * Lookup447: zenlink_swap_router::pallet::Call<T>
     **/
    ZenlinkSwapRouterCall: {
        _enum: {
            swap_exact_token_for_tokens_through_stable_pool: {
                amountIn: 'u128',
                amountOutMin: 'u128',
                routes: 'Vec<ZenlinkSwapRouterRoute>',
                to: 'AccountId32',
                deadline: 'u32'
            }
        }
    },
    /**
     * Lookup449: zenlink_swap_router::Route<PoolId, node_primitives::currency::CurrencyId, zenlink_protocol::primitives::AssetId>
     **/
    ZenlinkSwapRouterRoute: {
        _enum: {
            Stable: 'ZenlinkSwapRouterStablePath',
            Normal: 'Vec<ZenlinkProtocolPrimitivesAssetId>'
        }
    },
    /**
     * Lookup450: zenlink_swap_router::StablePath<PoolId, node_primitives::currency::CurrencyId>
     **/
    ZenlinkSwapRouterStablePath: {
        poolId: 'u32',
        basePoolId: 'u32',
        mode: 'ZenlinkSwapRouterStableSwapMode',
        fromCurrency: 'NodePrimitivesCurrencyCurrencyId',
        toCurrency: 'NodePrimitivesCurrencyCurrencyId'
    },
    /**
     * Lookup451: zenlink_swap_router::StableSwapMode
     **/
    ZenlinkSwapRouterStableSwapMode: {
        _enum: ['Single', 'FromBase', 'ToBase']
    },
    /**
     * Lookup452: bifrost_flexible_fee::pallet::Call<T>
     **/
    BifrostFlexibleFeeCall: {
        _enum: {
            set_user_default_fee_currency: {
                maybeFeeCurrency: 'Option<NodePrimitivesCurrencyCurrencyId>',
            },
            set_universal_fee_currency_order_list: {
                defaultList: 'Vec<NodePrimitivesCurrencyCurrencyId>',
            },
            remove_from_user_fee_charge_order_list: 'Null'
        }
    },
    /**
     * Lookup455: bifrost_salp::pallet::Call<T>
     **/
    BifrostSalpCall: {
        _enum: {
            set_multisig_confirm_account: {
                account: 'AccountId32',
            },
            fund_success: {
                index: 'Compact<u32>',
            },
            fund_fail: {
                index: 'Compact<u32>',
            },
            continue_fund: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            fund_retire: {
                index: 'Compact<u32>',
            },
            fund_end: {
                index: 'Compact<u32>',
            },
            create: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            edit: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                raised: 'Compact<u128>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                fundStatus: 'Option<BifrostSalpFundStatus>',
            },
            contribute: {
                index: 'Compact<u32>',
                value: 'Compact<u128>',
            },
            confirm_contribute: {
                who: 'AccountId32',
                index: 'Compact<u32>',
                isSuccess: 'bool',
                messageId: '[u8;32]',
            },
            unlock: {
                who: 'AccountId32',
                index: 'Compact<u32>',
            },
            unlock_by_vsbond: {
                who: 'AccountId32',
                vsbond: 'NodePrimitivesCurrencyCurrencyId',
            },
            unlock_vstoken: {
                who: 'AccountId32',
            },
            batch_unlock: {
                index: 'Compact<u32>',
            },
            withdraw: {
                index: 'Compact<u32>',
            },
            refund: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                value: 'Compact<u128>',
            },
            redeem: {
                index: 'Compact<u32>',
                value: 'Compact<u128>',
            },
            dissolve_refunded: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            dissolve: {
                index: 'Compact<u32>',
            },
            buyback: {
                value: 'Compact<u128>',
            },
            confirm_contribution: {
                queryId: 'u64',
                response: 'XcmV3Response'
            }
        }
    },
    /**
     * Lookup457: bifrost_salp::FundStatus
     **/
    BifrostSalpFundStatus: {
        _enum: ['Ongoing', 'Retired', 'Success', 'Failed', 'RefundWithdrew', 'RedeemWithdrew', 'FailedToContinue', 'End']
    },
    /**
     * Lookup458: bifrost_liquidity_mining::pallet::Call<T, I>
     **/
    BifrostLiquidityMiningCall: {
        _enum: {
            create_single_token_pool: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                mainReward: '(NodePrimitivesCurrencyCurrencyId,u128)',
                optionRewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                duration: 'Compact<u32>',
                minDepositToStart: 'Compact<u128>',
                afterBlockToStart: 'Compact<u32>',
                redeemLimitTime: 'Compact<u32>',
                unlockLimitNums: 'Compact<u32>',
            },
            create_mining_pool: {
                tradingPair: '(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId)',
                mainReward: '(NodePrimitivesCurrencyCurrencyId,u128)',
                optionRewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                duration: 'Compact<u32>',
                minDepositToStart: 'Compact<u128>',
                afterBlockToStart: 'Compact<u32>',
                redeemLimitTime: 'Compact<u32>',
                unlockLimitNums: 'Compact<u32>',
            },
            create_farming_pool: {
                index: 'u32',
                firstSlot: 'u32',
                lastSlot: 'u32',
                mainReward: '(NodePrimitivesCurrencyCurrencyId,u128)',
                optionRewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                duration: 'Compact<u32>',
                minDepositToStart: 'Compact<u128>',
                afterBlockToStart: 'Compact<u32>',
                redeemLimitTime: 'Compact<u32>',
                unlockLimitNums: 'Compact<u32>',
            },
            create_eb_farming_pool: {
                index: 'u32',
                firstSlot: 'u32',
                lastSlot: 'u32',
                mainReward: '(NodePrimitivesCurrencyCurrencyId,u128)',
                optionRewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                duration: 'Compact<u32>',
                minDepositToStart: 'Compact<u128>',
                afterBlockToStart: 'Compact<u32>',
            },
            charge: {
                pid: 'u32',
            },
            kill_pool: {
                pid: 'u32',
            },
            force_retire_pool: {
                pid: 'u32',
            },
            edit_pool: {
                pid: 'u32',
                redeemLimitTime: 'u32',
                unlockLimitNums: 'u32',
            },
            deposit: {
                pid: 'u32',
                value: 'u128',
            },
            redeem: {
                pid: 'u32',
                value: 'u128',
            },
            redeem_all: {
                pid: 'u32',
            },
            volunteer_to_redeem: {
                pid: 'u32',
                account: 'Option<AccountId32>',
            },
            claim: {
                pid: 'u32',
            },
            unlock: {
                pid: 'u32',
            },
            cancel_unlock: {
                pid: 'u32',
                index: 'u32',
            },
            lazy_migration_v2_0_0: {
                maxNums: 'u32'
            }
        }
    },
    /**
     * Lookup461: bifrost_token_issuer::pallet::Call<T>
     **/
    BifrostTokenIssuerCall: {
        _enum: {
            add_to_issue_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            remove_from_issue_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            add_to_transfer_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            remove_from_transfer_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            issue: {
                dest: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            transfer: {
                dest: 'AccountId32',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>'
            }
        }
    },
    /**
     * Lookup462: bifrost_lightening_redeem::pallet::Call<T>
     **/
    BifrostLighteningRedeemCall: {
        _enum: {
            add_ksm_to_pool: {
                tokenAmount: 'u128',
            },
            exchange_for_ksm: {
                tokenAmount: 'u128',
            },
            edit_exchange_price: {
                price: 'u128',
            },
            edit_release_per_day: {
                amountPerDay: 'u128',
            },
            edit_release_start_and_end_block: {
                start: 'u32',
                end: 'u32'
            }
        }
    },
    /**
     * Lookup463: bifrost_salp_lite::pallet::Call<T>
     **/
    BifrostSalpLiteCall: {
        _enum: {
            set_multisig_confirm_account: {
                account: 'AccountId32',
            },
            fund_success: {
                index: 'Compact<u32>',
            },
            fund_fail: {
                index: 'Compact<u32>',
            },
            fund_retire: {
                index: 'Compact<u32>',
            },
            create: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            issue: {
                who: 'AccountId32',
                index: 'Compact<u32>',
                value: 'Compact<u128>',
                messageId: '[u8;32]',
            },
            withdraw: {
                index: 'Compact<u32>',
            },
            redeem: {
                index: 'Compact<u32>',
                value: 'Compact<u128>',
            },
            dissolve: {
                index: 'Compact<u32>',
            },
            continue_fund: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            refund: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                value: 'Compact<u128>',
            },
            dissolve_refunded: {
                index: 'Compact<u32>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
            },
            edit: {
                index: 'Compact<u32>',
                cap: 'Compact<u128>',
                raised: 'Compact<u128>',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                fundStatus: 'Option<BifrostSalpLiteFundStatus>'
            }
        }
    },
    /**
     * Lookup465: bifrost_salp_lite::FundStatus
     **/
    BifrostSalpLiteFundStatus: {
        _enum: ['Ongoing', 'Retired', 'Success', 'Failed', 'RefundWithdrew', 'RedeemWithdrew', 'FailedToContinue']
    },
    /**
     * Lookup466: bifrost_call_switchgear::pallet::Call<T>
     **/
    BifrostCallSwitchgearCall: {
        _enum: {
            switchoff_transaction: {
                palletName: 'Bytes',
                functionName: 'Bytes',
            },
            switchon_transaction: {
                palletName: 'Bytes',
                functionName: 'Bytes',
            },
            disable_transfers: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            enable_transfers: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId'
            }
        }
    },
    /**
     * Lookup467: bifrost_vsbond_auction::pallet::Call<T, I>
     **/
    BifrostVsbondAuctionCall: {
        _enum: {
            create_order: {
                index: 'Compact<u32>',
                tokenSymbol: 'NodePrimitivesCurrencyTokenSymbol',
                firstSlot: 'Compact<u32>',
                lastSlot: 'Compact<u32>',
                amount: 'Compact<u128>',
                totalPrice: 'Compact<u128>',
                orderType: 'BifrostVsbondAuctionOrderType',
            },
            revoke_order: {
                orderId: 'Compact<u64>',
            },
            force_revoke: {
                orderId: 'Compact<u64>',
            },
            clinch_order: {
                orderId: 'Compact<u64>',
            },
            partial_clinch_order: {
                orderId: 'Compact<u64>',
                quantity: 'Compact<u128>',
            },
            set_buy_and_sell_transaction_fee_rate: {
                buyRate: 'u32',
                sellRate: 'u32'
            }
        }
    },
    /**
     * Lookup468: bifrost_asset_registry::pallet::Call<T>
     **/
    BifrostAssetRegistryCall: {
        _enum: {
            register_native_asset: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                location: 'XcmVersionedMultiLocation',
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            update_native_asset: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                location: 'XcmVersionedMultiLocation',
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            register_token_metadata: {
                metadata: 'BifrostAssetRegistryAssetMetadata',
            },
            register_vtoken_metadata: {
                tokenId: 'u8',
            },
            register_vstoken_metadata: {
                tokenId: 'u8',
            },
            register_vsbond_metadata: {
                tokenId: 'u8',
                paraId: 'u32',
                firstSlot: 'u32',
                lastSlot: 'u32',
            },
            register_multilocation: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                location: 'XcmVersionedMultiLocation',
                weight: 'SpWeightsWeightV2Weight',
            },
            force_set_multilocation: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                location: 'XcmVersionedMultiLocation',
                weight: 'SpWeightsWeightV2Weight'
            }
        }
    },
    /**
     * Lookup469: bifrost_vtoken_minting::pallet::Call<T>
     **/
    BifrostVtokenMintingCall: {
        _enum: {
            mint: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
            },
            redeem: {
                vtokenId: 'NodePrimitivesCurrencyCurrencyId',
                vtokenAmount: 'u128',
            },
            rebond: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                tokenAmount: 'u128',
            },
            rebond_by_unlock_id: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                unlockId: 'u32',
            },
            set_unlock_duration: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                unlockDuration: 'NodePrimitivesTimeUnit',
            },
            set_minimum_mint: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            set_minimum_redeem: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            add_support_rebond_token: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
            },
            remove_support_rebond_token: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
            },
            set_fees: {
                mintFee: 'Permill',
                redeemFee: 'Permill',
            },
            set_hook_iteration_limit: {
                limit: 'u32',
            },
            set_unlocking_total: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'u128',
            },
            set_min_time_unit: {
                tokenId: 'NodePrimitivesCurrencyCurrencyId',
                timeUnit: 'NodePrimitivesTimeUnit'
            }
        }
    },
    /**
     * Lookup470: bifrost_slp::pallet::Call<T>
     **/
    BifrostSlpCall: {
        _enum: {
            initialize_delegator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                delegatorLocation: 'Option<XcmV3MultiLocation>',
            },
            bond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
                validator: 'Option<XcmV3MultiLocation>',
            },
            bond_extra: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                validator: 'Option<XcmV3MultiLocation>',
                amount: 'Compact<u128>',
            },
            unbond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                validator: 'Option<XcmV3MultiLocation>',
                amount: 'Compact<u128>',
            },
            unbond_all: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            rebond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                validator: 'Option<XcmV3MultiLocation>',
                amount: 'Option<u128>',
            },
            delegate: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                targets: 'Vec<XcmV3MultiLocation>',
            },
            undelegate: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                targets: 'Vec<XcmV3MultiLocation>',
            },
            redelegate: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                targets: 'Option<Vec<XcmV3MultiLocation>>',
            },
            payout: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                validator: 'XcmV3MultiLocation',
                when: 'Option<NodePrimitivesTimeUnit>',
            },
            liquidize: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                when: 'Option<NodePrimitivesTimeUnit>',
                validator: 'Option<XcmV3MultiLocation>',
                amount: 'Option<u128>',
            },
            chill: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            transfer_back: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'XcmV3MultiLocation',
                to: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
            },
            transfer_to: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                from: 'XcmV3MultiLocation',
                to: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
            },
            convert_asset: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                amount: 'Compact<u128>',
                ifFromCurrency: 'bool',
            },
            increase_token_pool: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            decrease_token_pool: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            update_ongoing_time_unit: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                timeUnit: 'NodePrimitivesTimeUnit',
            },
            refund_currency_due_unbond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            supplement_fee_reserve: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                dest: 'XcmV3MultiLocation',
            },
            charge_host_fee_and_tune_vtoken_exchange_rate: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                value: 'Compact<u128>',
                who: 'Option<XcmV3MultiLocation>',
            },
            set_xcm_dest_weight_and_fee: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                operation: 'BifrostSlpPrimitivesXcmOperation',
                weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
            },
            set_operate_origin: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'Option<AccountId32>',
            },
            set_fee_source: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                whoAndFee: 'Option<(XcmV3MultiLocation,u128)>',
            },
            add_delegator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                index: 'Compact<u16>',
                who: 'XcmV3MultiLocation',
            },
            remove_delegator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            add_validator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            remove_validator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            set_validators_by_delegator: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                validators: 'Vec<XcmV3MultiLocation>',
            },
            set_delegator_ledger: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
                ledger: 'Option<BifrostSlpPrimitivesLedger>',
            },
            set_minimums_and_maximums: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                constraints: 'Option<BifrostSlpPrimitivesMinimumsMaximums>',
            },
            set_currency_delays: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                maybeDelays: 'Option<BifrostSlpPrimitivesDelays>',
            },
            set_hosting_fees: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                maybeFeeSet: 'Option<(Permill,XcmV3MultiLocation)>',
            },
            set_currency_tune_exchange_rate_limit: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                maybeTuneExchangeRateLimit: 'Option<(u32,Permill)>',
            },
            set_ongoing_time_unit_update_interval: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                maybeInterval: 'Option<u32>',
            },
            add_supplement_fee_account_to_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            remove_supplement_fee_account_from_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            confirm_delegator_ledger_query_response: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                queryId: 'Compact<u64>',
            },
            fail_delegator_ledger_query_response: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                queryId: 'Compact<u64>',
            },
            confirm_validators_by_delegator_query_response: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                queryId: 'Compact<u64>',
            },
            fail_validators_by_delegator_query_response: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                queryId: 'Compact<u64>',
            },
            confirm_delegator_ledger: {
                queryId: 'u64',
                response: 'XcmV3Response',
            },
            confirm_validators_by_delegator: {
                queryId: 'u64',
                response: 'XcmV3Response',
            },
            reset_validators: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorList: 'Vec<XcmV3MultiLocation>',
            },
            set_validator_boost_list: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                validatorList: 'Vec<XcmV3MultiLocation>',
            },
            add_to_validator_boost_list: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation',
            },
            remove_from_validator_boot_list: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'XcmV3MultiLocation'
            }
        }
    },
    /**
     * Lookup472: xcm_interface::pallet::Call<T>
     **/
    XcmInterfaceCall: {
        _enum: {
            update_xcm_dest_weight_and_fee: {
                updates: 'Vec<(XcmInterfaceXcmInterfaceOperation,Option<SpWeightsWeightV2Weight>,Option<u128>)>',
            },
            transfer_statemine_assets: {
                amount: 'u128',
                assetId: 'u32',
                dest: 'Option<AccountId32>'
            }
        }
    },
    /**
     * Lookup475: bifrost_vstoken_conversion::pallet::Call<T>
     **/
    BifrostVstokenConversionCall: {
        _enum: {
            vsbond_convert_to_vstoken: {
                vsBondCurrencyId: 'NodePrimitivesCurrencyCurrencyId',
                vsbondAmount: 'u128',
                minimumVstoken: 'u128',
            },
            vstoken_convert_to_vsbond: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                vstokenAmount: 'u128',
                minimumVsbond: 'u128',
            },
            set_exchange_fee: {
                exchangeFee: 'BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee',
            },
            set_exchange_rate: {
                lease: 'i32',
                exchangeRate: 'BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate',
            },
            set_relaychain_lease: {
                lease: 'u32'
            }
        }
    },
    /**
     * Lookup476: bifrost_farming::pallet::Call<T>
     **/
    BifrostFarmingCall: {
        _enum: {
            create_farming_pool: {
                tokensProportion: 'Vec<(NodePrimitivesCurrencyCurrencyId,Perbill)>',
                basicRewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
                gaugeInit: 'Option<(NodePrimitivesCurrencyCurrencyId,u32,Vec<(NodePrimitivesCurrencyCurrencyId,u128)>)>',
                minDepositToStart: 'u128',
                afterBlockToStart: 'Compact<u32>',
                withdrawLimitTime: 'Compact<u32>',
                claimLimitTime: 'Compact<u32>',
                withdrawLimitCount: 'u8',
            },
            charge: {
                pid: 'u32',
                rewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>',
            },
            deposit: {
                pid: 'u32',
                addValue: 'u128',
                gaugeInfo: 'Option<(u128,u32)>',
            },
            withdraw: {
                pid: 'u32',
                removeValue: 'Option<u128>',
            },
            claim: {
                pid: 'u32',
            },
            withdraw_claim: {
                pid: 'u32',
            },
            force_retire_pool: {
                pid: 'u32',
            },
            set_retire_limit: {
                limit: 'u32',
            },
            close_pool: {
                pid: 'u32',
            },
            reset_pool: {
                pid: 'u32',
                basicRewards: 'Option<Vec<(NodePrimitivesCurrencyCurrencyId,u128)>>',
                minDepositToStart: 'Option<u128>',
                afterBlockToStart: 'Option<u32>',
                withdrawLimitTime: 'Option<u32>',
                claimLimitTime: 'Option<u32>',
                withdrawLimitCount: 'Option<u8>',
                gaugeInit: 'Option<(NodePrimitivesCurrencyCurrencyId,u32,Vec<(NodePrimitivesCurrencyCurrencyId,u128)>)>',
            },
            kill_pool: {
                pid: 'u32',
            },
            edit_pool: {
                pid: 'u32',
                basicRewards: 'Option<Vec<(NodePrimitivesCurrencyCurrencyId,u128)>>',
                withdrawLimitTime: 'Option<u32>',
                claimLimitTime: 'Option<u32>',
                gaugeBasicRewards: 'Option<Vec<(NodePrimitivesCurrencyCurrencyId,u128)>>',
                withdrawLimitCount: 'Option<u8>',
            },
            gauge_withdraw: {
                gid: 'u32',
            },
            force_gauge_claim: {
                gid: 'u32',
            },
            add_boost_pool_whitelist: {
                whitelist: 'Vec<u32>',
            },
            set_next_round_whitelist: {
                whitelist: 'Vec<u32>',
            },
            vote: {
                voteList: 'Vec<(u32,Percent)>',
            },
            start_boost_round: {
                roundLength: 'u32',
            },
            end_boost_round: 'Null',
            charge_boost: {
                rewards: 'Vec<(NodePrimitivesCurrencyCurrencyId,u128)>'
            }
        }
    },
    /**
     * Lookup483: bifrost_system_staking::pallet::Call<T>
     **/
    BifrostSystemStakingCall: {
        _enum: {
            token_config: {
                token: 'NodePrimitivesCurrencyCurrencyId',
                execDelay: 'Option<u32>',
                systemStakableFarmingRate: 'Option<Permill>',
                addOrSub: 'Option<bool>',
                systemStakableBase: 'Option<u128>',
                farmingPoolids: 'Option<Vec<u32>>',
                lptokenRates: 'Option<Vec<Perbill>>',
            },
            delete_token: {
                token: 'NodePrimitivesCurrencyCurrencyId',
            },
            refresh_token_info: {
                token: 'NodePrimitivesCurrencyCurrencyId',
            },
            payout: {
                token: 'NodePrimitivesCurrencyCurrencyId'
            }
        }
    },
    /**
     * Lookup488: bifrost_system_maker::pallet::Call<T>
     **/
    BifrostSystemMakerCall: {
        _enum: {
            set_config: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                info: 'BifrostSystemMakerInfo',
            },
            charge: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                value: 'u128',
            },
            close: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            payout: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                value: 'u128'
            }
        }
    },
    /**
     * Lookup489: bifrost_fee_share::pallet::Call<T>
     **/
    BifrostFeeShareCall: {
        _enum: {
            create_distribution: {
                tokenType: 'Vec<NodePrimitivesCurrencyCurrencyId>',
                tokensProportion: 'Vec<(AccountId32,Perbill)>',
                ifAuto: 'bool',
            },
            edit_distribution: {
                distributionId: 'u32',
                tokenType: 'Option<Vec<NodePrimitivesCurrencyCurrencyId>>',
                tokensProportion: 'Option<Vec<(AccountId32,Perbill)>>',
                ifAuto: 'Option<bool>',
            },
            set_era_length: {
                eraLength: 'u32',
            },
            execute_distribute: {
                distributionId: 'u32',
            },
            delete_distribution: {
                distributionId: 'u32'
            }
        }
    },
    /**
     * Lookup492: bifrost_cross_in_out::pallet::Call<T>
     **/
    BifrostCrossInOutCall: {
        _enum: {
            cross_in: {
                location: 'XcmV2MultiLocation',
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
                remark: 'Option<Bytes>',
            },
            cross_out: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                amount: 'Compact<u128>',
            },
            register_linked_account: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                who: 'AccountId32',
                foreignLocation: 'XcmV2MultiLocation',
            },
            change_outer_linked_account: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                foreignLocation: 'XcmV2MultiLocation',
                account: 'AccountId32',
            },
            register_currency_for_cross_in_out: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            deregister_currency_for_cross_in_out: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
            },
            add_to_issue_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            remove_from_issue_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            add_to_register_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            remove_from_register_whitelist: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                account: 'AccountId32',
            },
            set_crossing_minimum_amount: {
                currencyId: 'NodePrimitivesCurrencyCurrencyId',
                crossInMinimum: 'u128',
                crossOutMinimum: 'u128'
            }
        }
    },
    /**
     * Lookup497: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: 'PalletDemocracyReferendumStatus',
            Finished: {
                approved: 'bool',
                end: 'u32'
            }
        }
    },
    /**
     * Lookup498: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: 'u32',
        proposal: 'FrameSupportPreimagesBounded',
        threshold: 'PalletDemocracyVoteThreshold',
        delay: 'u32',
        tally: 'PalletDemocracyTally'
    },
    /**
     * Lookup499: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: 'u128',
        nays: 'u128',
        turnout: 'u128'
    },
    /**
     * Lookup500: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock',
            },
            Delegating: {
                balance: 'u128',
                target: 'AccountId32',
                conviction: 'PalletDemocracyConviction',
                delegations: 'PalletDemocracyDelegations',
                prior: 'PalletDemocracyVotePriorLock'
            }
        }
    },
    /**
     * Lookup504: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: 'u128',
        capital: 'u128'
    },
    /**
     * Lookup505: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: '(u32,u128)',
    /**
     * Lookup508: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow']
    },
    /**
     * Lookup510: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: 'u32',
        threshold: 'u32',
        ayes: 'Vec<AccountId32>',
        nays: 'Vec<AccountId32>',
        end: 'u32'
    },
    /**
     * Lookup511: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
    },
    /**
     * Lookup515: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: 'AccountId32',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup516: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: 'Vec<AccountId32>',
        stake: 'u128',
        deposit: 'u128'
    },
    /**
     * Lookup517: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
    },
    /**
     * Lookup519: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
    },
    /**
     * Lookup523: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: 'u32',
        state: 'CumulusPalletXcmpQueueInboundState',
        messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
    },
    /**
     * Lookup524: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup527: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
    },
    /**
     * Lookup530: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: 'u32',
        state: 'CumulusPalletXcmpQueueOutboundState',
        signalsExist: 'bool',
        firstIndex: 'u16',
        lastIndex: 'u16'
    },
    /**
     * Lookup531: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: ['Ok', 'Suspended']
    },
    /**
     * Lookup533: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: 'u32',
        dropThreshold: 'u32',
        resumeThreshold: 'u32',
        thresholdWeight: 'SpWeightsWeightV2Weight',
        weightRestrictDecay: 'SpWeightsWeightV2Weight',
        xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup535: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
    },
    /**
     * Lookup536: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: 'XcmVersionedMultiLocation',
                maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
                maybeNotify: 'Option<(u8,u8)>',
                timeout: 'u32',
            },
            VersionNotifier: {
                origin: 'XcmVersionedMultiLocation',
                isActive: 'bool',
            },
            Ready: {
                response: 'XcmVersionedResponse',
                at: 'u32'
            }
        }
    },
    /**
     * Lookup540: xcm::VersionedResponse
     **/
    XcmVersionedResponse: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            V2: 'XcmV2Response',
            V3: 'XcmV3Response'
        }
    },
    /**
     * Lookup546: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: 'Null',
            MigrateVersionNotifiers: 'Null',
            NotifyCurrentTargets: 'Option<Bytes>',
            MigrateAndNotifyOldTargets: 'Null'
        }
    },
    /**
     * Lookup548: xcm::VersionedAssetId
     **/
    XcmVersionedAssetId: {
        _enum: {
            __Unused0: 'Null',
            __Unused1: 'Null',
            __Unused2: 'Null',
            V3: 'XcmV3MultiassetAssetId'
        }
    },
    /**
     * Lookup549: pallet_xcm::pallet::RemoteLockedFungibleRecord
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: 'u128',
        owner: 'XcmVersionedMultiLocation',
        locker: 'XcmVersionedMultiLocation',
        users: 'u32'
    },
    /**
     * Lookup553: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
    },
    /**
     * Lookup554: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: 'Null',
    /**
     * Lookup555: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: 'SpWeightsWeightV2Weight'
    },
    /**
     * Lookup556: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: 'u32',
        endUsed: 'u32',
        overweightCount: 'u64'
    },
    /**
     * Lookup559: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: ['Unknown', 'OverLimit']
    },
    /**
     * Lookup560: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: ['TooManyCalls']
    },
    /**
     * Lookup563: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, BlockNumber, bifrost_kusama_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: 'Option<[u8;32]>',
        priority: 'u8',
        call: 'FrameSupportPreimagesBounded',
        maybePeriodic: 'Option<(u32,u32)>',
        origin: 'BifrostKusamaRuntimeOriginCaller'
    },
    /**
     * Lookup565: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
    },
    /**
     * Lookup568: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, bifrost_kusama_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: 'AccountId32',
        proxyType: 'BifrostKusamaRuntimeProxyType',
        delay: 'u32'
    },
    /**
     * Lookup572: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: 'AccountId32',
        callHash: 'H256',
        height: 'u32'
    },
    /**
     * Lookup574: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
    },
    /**
     * Lookup576: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: 'PalletMultisigTimepoint',
        deposit: 'u128',
        depositor: 'AccountId32',
        approvals: 'Vec<AccountId32>'
    },
    /**
     * Lookup578: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
    },
    /**
     * Lookup579: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: 'Vec<(u32,PalletIdentityJudgement)>',
        deposit: 'u128',
        info: 'PalletIdentityIdentityInfo'
    },
    /**
     * Lookup587: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: 'AccountId32',
        fee: 'u128',
        fields: 'PalletIdentityBitFlags'
    },
    /**
     * Lookup589: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
    },
    /**
     * Lookup590: bifrost_vesting::pallet::Error<T>
     **/
    BifrostVestingError: {
        _enum: ['NotVesting', 'ExistingVestingSchedule', 'AmountLow', 'SamePerBlock', 'VestingStartAtNotSet', 'WrongLockedAmount', 'WrongCliffVesting']
    },
    /**
     * Lookup591: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: 'AccountId32',
        value: 'u128',
        beneficiary: 'AccountId32',
        bond: 'u128'
    },
    /**
     * Lookup593: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
    },
    /**
     * Lookup594: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: 'AccountId32',
        value: 'u128',
        fee: 'u128',
        curatorDeposit: 'u128',
        bond: 'u128',
        status: 'PalletBountiesBountyStatus'
    },
    /**
     * Lookup595: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: 'Null',
            Approved: 'Null',
            Funded: 'Null',
            CuratorProposed: {
                curator: 'AccountId32',
            },
            Active: {
                curator: 'AccountId32',
                updateDue: 'u32',
            },
            PendingPayout: {
                curator: 'AccountId32',
                beneficiary: 'AccountId32',
                unlockAt: 'u32'
            }
        }
    },
    /**
     * Lookup597: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
    },
    /**
     * Lookup598: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: 'H256',
        who: 'AccountId32',
        finder: 'AccountId32',
        deposit: 'u128',
        closes: 'Option<u32>',
        tips: 'Vec<(AccountId32,u128)>',
        findersFee: 'bool'
    },
    /**
     * Lookup599: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
    },
    /**
     * Lookup600: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: '(AccountId32,u128)',
                len: 'u32',
            },
            Requested: {
                deposit: 'Option<(AccountId32,u128)>',
                count: 'u32',
                len: 'Option<u32>'
            }
        }
    },
    /**
     * Lookup604: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
    },
    /**
     * Lookup605: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
    },
    /**
     * Lookup608: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup610: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: 'u128',
        reserved: 'u128',
        frozen: 'u128'
    },
    /**
     * Lookup612: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: '[u8;8]',
        amount: 'u128'
    },
    /**
     * Lookup614: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
    },
    /**
     * Lookup615: orml_currencies::module::Error<T>
     **/
    OrmlCurrenciesModuleError: {
        _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
    },
    /**
     * Lookup618: orml_unknown_tokens::module::Error<T>
     **/
    OrmlUnknownTokensModuleError: {
        _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
    },
    /**
     * Lookup619: orml_xcm::module::Error<T>
     **/
    OrmlXcmModuleError: {
        _enum: ['Unreachable', 'SendFailure', 'BadVersion']
    },
    /**
     * Lookup626: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairStatus: {
        _enum: {
            Trading: 'ZenlinkProtocolPrimitivesPairMetadata',
            Bootstrap: 'ZenlinkProtocolPrimitivesBootstrapParameter',
            Disable: 'Null'
        }
    },
    /**
     * Lookup627: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairMetadata: {
        pairAccount: 'AccountId32',
        totalSupply: 'u128'
    },
    /**
     * Lookup628: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesBootstrapParameter: {
        targetSupply: '(u128,u128)',
        capacitySupply: '(u128,u128)',
        accumulatedSupply: '(u128,u128)',
        endBlockNumber: 'u32',
        pairAccount: 'AccountId32'
    },
    /**
     * Lookup632: zenlink_protocol::pallet::Error<T>
     **/
    ZenlinkProtocolError: {
        _enum: ['RequireProtocolAdmin', 'RequireProtocolAdminCandidate', 'InvalidFeePoint', 'UnsupportedAssetType', 'InsufficientAssetBalance', 'NativeBalanceTooLow', 'DeniedCreatePair', 'PairAlreadyExists', 'PairNotExists', 'AssetNotExists', 'InsufficientLiquidity', 'InsufficientPairReserve', 'InsufficientTargetAmount', 'ExcessiveSoldAmount', 'InvalidPath', 'IncorrectAssetAmountRange', 'Overflow', 'Deadline', 'AccountIdBadLocation', 'ExecutionFailed', 'DeniedTransferToSelf', 'TargetChainNotRegistered', 'InvariantCheckFailed', 'PairCreateForbidden', 'NotInBootstrap', 'InvalidContributionAmount', 'UnqualifiedBootstrap', 'ZeroContribute', 'DenyRefund', 'DisableBootstrap', 'NotQualifiedAccount', 'NoRewardTokens', 'ChargeRewardParamsError', 'ExistRewardsInBootstrap']
    },
    /**
     * Lookup633: merkle_distributor::MerkleMetadata<Balance, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    MerkleDistributorMerkleMetadata: {
        merkleRoot: 'H256',
        description: 'Bytes',
        distributeCurrency: 'NodePrimitivesCurrencyCurrencyId',
        distributeAmount: 'u128',
        distributeHolder: 'AccountId32',
        charged: 'bool'
    },
    /**
     * Lookup636: merkle_distributor::pallet::Error<T>
     **/
    MerkleDistributorError: {
        _enum: ['BadDescription', 'InvalidMerkleDistributorId', 'MerkleVerifyFailed', 'Claimed', 'Charged', 'WithdrawAmountExceed', 'BadChargeAccount', 'AlreadyInWhiteList', 'NotInWhiteList']
    },
    /**
     * Lookup637: zenlink_stable_amm::primitives::Pool<PoolId, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesPool: {
        _enum: {
            Base: 'ZenlinkStableAmmPrimitivesBasePool',
            Meta: 'ZenlinkStableAmmPrimitivesMetaPool'
        }
    },
    /**
     * Lookup638: zenlink_stable_amm::primitives::BasePool<node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesBasePool: {
        currencyIds: 'Vec<NodePrimitivesCurrencyCurrencyId>',
        lpCurrencyId: 'NodePrimitivesCurrencyCurrencyId',
        tokenMultipliers: 'Vec<u128>',
        balances: 'Vec<u128>',
        fee: 'u128',
        adminFee: 'u128',
        initialA: 'u128',
        futureA: 'u128',
        initialATime: 'u128',
        futureATime: 'u128',
        account: 'AccountId32',
        adminFeeReceiver: 'AccountId32',
        lpCurrencySymbol: 'Bytes',
        lpCurrencyDecimal: 'u8'
    },
    /**
     * Lookup639: zenlink_stable_amm::primitives::MetaPool<PoolId, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesMetaPool: {
        basePoolId: 'u32',
        baseVirtualPrice: 'u128',
        baseCacheLastUpdated: 'u64',
        baseCurrencies: 'Vec<NodePrimitivesCurrencyCurrencyId>',
        info: 'ZenlinkStableAmmPrimitivesBasePool'
    },
    /**
     * Lookup640: zenlink_stable_amm::pallet::Error<T>
     **/
    ZenlinkStableAmmError: {
        _enum: ['InvalidPooledCurrency', 'InvalidLpCurrency', 'MismatchParameter', 'InvalidCurrencyDecimal', 'InvalidPoolId', 'InvalidBasePool', 'Arithmetic', 'Deadline', 'InsufficientSupply', 'InsufficientReserve', 'CheckDFailed', 'AmountSlippage', 'SwapSameCurrency', 'CurrencyIndexOutRange', 'InsufficientLpReserve', 'ExceedThreshold', 'RampADelay', 'MinRampTime', 'ExceedMaxAChange', 'AlreadyStoppedRampA', 'ExceedMaxFee', 'ExceedMaxAdminFee', 'ExceedMaxA', 'LpCurrencyAlreadyUsed', 'RequireAllCurrencies', 'BadPoolCurrencySymbol', 'InvalidTransaction', 'InvalidBasePoolLpCurrency', 'TokenIndexOutOfRange']
    },
    /**
     * Lookup641: zenlink_swap_router::pallet::Error<T>
     **/
    ZenlinkSwapRouterError: {
        _enum: ['MismatchPoolAndCurrencyId', 'Deadline', 'InvalidRoutes', 'ConvertCurrencyFailed', 'AmountSlippage', 'InvalidPath']
    },
    /**
     * Lookup642: bifrost_flexible_fee::pallet::Error<T>
     **/
    BifrostFlexibleFeeError: {
        _enum: ['NotEnoughBalance', 'Overflow', 'ConversionError', 'WrongListLength']
    },
    /**
     * Lookup645: bifrost_salp::FundInfo<Balance, LeasePeriod>
     **/
    BifrostSalpFundInfo: {
        raised: 'u128',
        cap: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
        trieIndex: 'u32',
        status: 'BifrostSalpFundStatus'
    },
    /**
     * Lookup647: bifrost_salp::pallet::Error<T>
     **/
    BifrostSalpError: {
        _enum: ['FirstSlotTooFarInFuture', 'LastSlotBeforeFirstSlot', 'LastSlotTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'ZeroContribution', 'InvalidParaId', 'InvalidFundStatus', 'InvalidContributionStatus', 'CapExceeded', 'FundAlreadyCreated', 'XcmFailed', 'NotEnoughReservedAssetsToRefund', 'NotEnoughBalanceInRefundPool', 'NotEnoughBalanceToUnlock', 'VSBondExpired', 'UnRedeemableNow', 'NotEnoughFreeAssetsToRedeem', 'NotEnoughBalanceInRedeemPool', 'NotEnoughBalanceInFund', 'InvalidFundSameSlot', 'InvalidFundNotExist', 'InvalidRefund', 'NotEnoughBalanceToContribute', 'NotSupportTokenType', 'ResponderNotRelayChain', 'NotFindContributionValue']
    },
    /**
     * Lookup649: bifrost_liquidity_mining::PoolInfo<sp_core::crypto::AccountId32, BalanceOf, BlockNumberOf>
     **/
    BifrostLiquidityMiningPoolInfo: {
        _alias: {
            r_type: 'r#type'
        },
        poolId: 'u32',
        keeper: 'AccountId32',
        investor: 'Option<AccountId32>',
        tradingPair: '(NodePrimitivesCurrencyCurrencyId,NodePrimitivesCurrencyCurrencyId)',
        duration: 'u32',
        r_type: 'BifrostLiquidityMiningPoolType',
        minDepositToStart: 'u128',
        afterBlockToStart: 'u32',
        deposit: 'u128',
        rewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, BifrostLiquidityMiningRewardData>',
        updateB: 'u32',
        state: 'BifrostLiquidityMiningPoolState',
        blockStartup: 'Option<u32>',
        blockRetired: 'Option<u32>',
        redeemLimitTime: 'u32',
        unlockLimitNums: 'u32',
        pendingUnlockNums: 'u32'
    },
    /**
     * Lookup651: bifrost_liquidity_mining::RewardData<BalanceOf>
     **/
    BifrostLiquidityMiningRewardData: {
        total: 'u128',
        perBlock: 'u128',
        claimed: 'u128',
        gainAvg: 'u128'
    },
    /**
     * Lookup654: bifrost_liquidity_mining::PoolState
     **/
    BifrostLiquidityMiningPoolState: {
        _enum: ['UnCharged', 'Charged', 'Ongoing', 'Retired', 'Dead']
    },
    /**
     * Lookup655: bifrost_liquidity_mining::DepositData<BalanceOf, BlockNumberOf>
     **/
    BifrostLiquidityMiningDepositData: {
        deposit: 'u128',
        gainAvgs: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>',
        updateB: 'u32',
        pendingUnlocks: 'Vec<(u32,u128)>'
    },
    /**
     * Lookup661: bifrost_liquidity_mining::StorageVersion
     **/
    BifrostLiquidityMiningStorageVersion: {
        _enum: ['V1_0_0', 'V2_0_0']
    },
    /**
     * Lookup662: bifrost_liquidity_mining::pallet::Error<T, I>
     **/
    BifrostLiquidityMiningError: {
        _enum: ['InvalidTradingPair', 'InvalidDuration', 'InvalidRewardPerBlock', 'InvalidDepositLimit', 'InvalidPoolId', 'InvalidPoolState', 'InvalidPoolType', 'DuplicateReward', 'ExceedMaximumDeposit', 'ExceedMaximumCharged', 'NotEnoughToDeposit', 'NotEnoughToRedeem', 'NotEnoughToUnlock', 'NoDepositOfUser', 'TooLowToDeposit', 'TooLowToRedeem', 'TooShortBetweenTwoClaim', 'PoolChargedAlready', 'ExceedMaximumUnlock', 'NoPendingUnlocks', 'WrongIndex', 'Unexpected', 'OnMigration', 'NoMigration']
    },
    /**
     * Lookup664: bifrost_token_issuer::pallet::Error<T>
     **/
    BifrostTokenIssuerError: {
        _enum: ['NotEnoughBalance', 'NotExist', 'NotAllowed']
    },
    /**
     * Lookup665: bifrost_lightening_redeem::pallet::Error<T>
     **/
    BifrostLighteningRedeemError: {
        _enum: ['NotKSM', 'DenominatorZero', 'NotGreaterThanZero', 'ExceedPoolAmount', 'NotEnoughBalance', 'InvalidReleaseInterval', 'Overflow']
    },
    /**
     * Lookup667: bifrost_salp_lite::FundInfo<Balance, LeasePeriod>
     **/
    BifrostSalpLiteFundInfo: {
        raised: 'u128',
        cap: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
        trieIndex: 'u32',
        status: 'BifrostSalpLiteFundStatus'
    },
    /**
     * Lookup668: bifrost_salp_lite::pallet::Error<T>
     **/
    BifrostSalpLiteError: {
        _enum: ['FirstSlotTooFarInFuture', 'LastSlotBeforeFirstSlot', 'LastSlotTooFarInFuture', 'MigrateSlotBeforeFirstSlot', 'Overflow', 'ContributionTooSmall', 'ZeroContribution', 'InvalidParaId', 'InvalidFundStatus', 'InvalidContributionStatus', 'CapExceeded', 'FundAlreadyCreated', 'NotEnoughReservedAssetsToRefund', 'NotEnoughBalanceInRefundPool', 'NotEnoughBalanceToUnlock', 'NotEnoughFreeAssetsToRedeem', 'NotEnoughBalanceInRedeemPool', 'NotEnoughBalanceInFund', 'InvalidFundSameSlot', 'InvalidFundNotExist', 'InvalidRefund']
    },
    /**
     * Lookup669: bifrost_call_switchgear::pallet::Error<T>
     **/
    BifrostCallSwitchgearError: {
        _enum: ['CannotSwitchOff', 'InvalidCharacter']
    },
    /**
     * Lookup673: bifrost_vsbond_auction::OrderInfo<sp_core::crypto::AccountId32, BalanceOf>
     **/
    BifrostVsbondAuctionOrderInfo: {
        owner: 'AccountId32',
        vsbond: 'NodePrimitivesCurrencyCurrencyId',
        amount: 'u128',
        remain: 'u128',
        totalPrice: 'u128',
        remainPrice: 'u128',
        orderId: 'u64',
        orderType: 'BifrostVsbondAuctionOrderType'
    },
    /**
     * Lookup675: bifrost_vsbond_auction::pallet::Error<T, I>
     **/
    BifrostVsbondAuctionError: {
        _enum: ['NotEnoughAmount', 'NotFindOrderInfo', 'NotEnoughBalanceToCreateOrder', 'DontHaveEnoughToPay', 'ForbidRevokeOrderNotInTrade', 'ForbidRevokeOrderWithoutOwnership', 'ForbidClinchOrderNotInTrade', 'ForbidClinchOrderWithinOwnership', 'ExceedMaximumOrderInTrade', 'InvalidVsbond', 'Unexpected', 'InvalidRateInput', 'Overflow']
    },
    /**
     * Lookup676: bifrost_asset_registry::pallet::Error<T>
     **/
    BifrostAssetRegistryError: {
        _enum: ['BadLocation', 'MultiLocationExisted', 'AssetIdNotExists', 'AssetIdExisted', 'CurrencyIdNotExists', 'CurrencyIdExisted']
    },
    /**
     * Lookup684: bifrost_vtoken_minting::pallet::Error<T>
     **/
    BifrostVtokenMintingError: {
        _enum: ['BelowMinimumMint', 'BelowMinimumRedeem', 'InvalidRebondToken', 'NotSupportTokenType', 'NotEnoughBalanceToUnlock', 'TokenToRebondNotZero', 'OngoingTimeUnitNotSet', 'TokenUnlockLedgerNotFound', 'UserUnlockLedgerNotFound', 'TimeUnitUnlockLedgerNotFound', 'UnlockDurationNotFound', 'Unexpected', 'CalculationOverflow', 'ExceedMaximumUnlockId', 'TooManyRedeems', 'CanNotRedeem', 'CanNotRebond']
    },
    /**
     * Lookup693: bifrost_slp::pallet::Error<T>
     **/
    BifrostSlpError: {
        _enum: ['OperateOriginNotSet', 'NotAuthorized', 'NotSupportedCurrencyId', 'FailToAddDelegator', 'OverFlow', 'UnderFlow', 'NotExist', 'LowerThanMinimum', 'GreaterThanMaximum', 'AlreadyBonded', 'AccountNotExist', 'DelegatorNotExist', 'XcmFailure', 'DelegatorNotBonded', 'ExceedActiveMaximum', 'ProblematicLedger', 'NotEnoughToUnbond', 'ExceedUnlockingRecords', 'RebondExceedUnlockingAmount', 'DecodingError', 'EncodingError', 'VectorEmpty', 'ValidatorSetNotExist', 'ValidatorNotExist', 'InvalidTimeUnit', 'AmountZero', 'AmountNotZero', 'AlreadyExist', 'ValidatorStillInUse', 'TimeUnitNotExist', 'FeeSourceNotExist', 'WeightAndFeeNotExists', 'MinimumsAndMaximumsNotExist', 'QueryNotExist', 'DelaysNotExist', 'Unexpected', 'QueryResponseRemoveError', 'InvalidHostingFee', 'InvalidAccount', 'IncreaseTokenPoolError', 'TuneExchangeRateLimitNotSet', 'CurrencyLatestTuneRecordNotExist', 'InvalidTransferSource', 'ValidatorNotProvided', 'Unsupported', 'ValidatorNotBonded', 'AlreadyRequested', 'RequestNotExist', 'AlreadyLeaving', 'DelegatorNotLeaving', 'RequestNotDue', 'LeavingNotDue', 'DelegatorSetNotExist', 'DelegatorLeaving', 'DelegatorAlreadyLeaving', 'ValidatorError', 'AmountNone', 'InvalidDelays', 'OngoingTimeUnitUpdateIntervalNotExist', 'LastTimeUpdatedOngoingTimeUnitNotExist', 'TooFrequent', 'DestAccountNotValid', 'WhiteListNotExist', 'DelegatorAlreadyTuned', 'FeeTooHigh', 'NotEnoughBalance', 'VectorTooLong', 'MultiCurrencyError', 'NotDelegateValidator', 'DividedByZero', 'SharePriceNotValid', 'InvalidAmount', 'ValidatorMultilocationNotvalid', 'AmountNotProvided', 'FailToConvert']
    },
    /**
     * Lookup694: xcm_interface::pallet::Error<T>
     **/
    XcmInterfaceError: {
        _enum: ['FeeConvertFailed', 'XcmExecutionFailed', 'XcmSendFailed']
    },
    /**
     * Lookup695: bifrost_vstoken_conversion::pallet::Error<T>
     **/
    BifrostVstokenConversionError: {
        _enum: ['NotEnoughBalance', 'NotSupportTokenType', 'CalculationOverflow']
    },
    /**
     * Lookup696: bifrost_farming::rewards::PoolInfo<BalanceOf, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
     **/
    BifrostFarmingRewardsPoolInfo: {
        tokensProportion: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, Perbill>',
        basicToken: '(NodePrimitivesCurrencyCurrencyId,Perbill)',
        totalShares: 'u128',
        basicRewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>',
        rewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, (u128,u128)>',
        state: 'BifrostFarmingRewardsPoolState',
        keeper: 'AccountId32',
        rewardIssuer: 'AccountId32',
        gauge: 'Option<u32>',
        blockStartup: 'Option<u32>',
        minDepositToStart: 'u128',
        afterBlockToStart: 'u32',
        withdrawLimitTime: 'u32',
        claimLimitTime: 'u32',
        withdrawLimitCount: 'u8'
    },
    /**
     * Lookup702: bifrost_farming::rewards::PoolState
     **/
    BifrostFarmingRewardsPoolState: {
        _enum: ['UnCharged', 'Charged', 'Ongoing', 'Dead', 'Retired']
    },
    /**
     * Lookup703: bifrost_farming::gauge::GaugePoolInfo<BalanceOf, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
     **/
    BifrostFarmingGaugeGaugePoolInfo: {
        pid: 'u32',
        token: 'NodePrimitivesCurrencyCurrencyId',
        keeper: 'AccountId32',
        rewardIssuer: 'AccountId32',
        rewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, (u128,u128,u128)>',
        gaugeBasicRewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>',
        maxBlock: 'u32',
        gaugeAmount: 'u128',
        totalTimeFactor: 'u128',
        gaugeState: 'BifrostFarmingGaugeGaugeState',
        gaugeLastBlock: 'u32'
    },
    /**
     * Lookup708: bifrost_farming::gauge::GaugeState
     **/
    BifrostFarmingGaugeGaugeState: {
        _enum: ['Unbond', 'Bonded']
    },
    /**
     * Lookup709: bifrost_farming::gauge::GaugeInfo<BalanceOf, BlockNumberFor, sp_core::crypto::AccountId32>
     **/
    BifrostFarmingGaugeGaugeInfo: {
        who: 'AccountId32',
        gaugeAmount: 'u128',
        totalTimeFactor: 'u128',
        latestTimeFactor: 'u128',
        claimedTimeFactor: 'u128',
        gaugeStartBlock: 'u32',
        gaugeStopBlock: 'u32',
        gaugeLastBlock: 'u32',
        lastClaimBlock: 'u32'
    },
    /**
     * Lookup710: bifrost_farming::rewards::ShareInfo<BalanceOf, node_primitives::currency::CurrencyId, BlockNumberFor, sp_core::crypto::AccountId32>
     **/
    BifrostFarmingRewardsShareInfo: {
        who: 'AccountId32',
        share: 'u128',
        withdrawnRewards: 'BTreeMap<NodePrimitivesCurrencyCurrencyId, u128>',
        claimLastBlock: 'u32',
        withdrawList: 'Vec<(u32,u128)>'
    },
    /**
     * Lookup711: bifrost_farming::boost::BoostPoolInfo<Balance, BlockNumber>
     **/
    BifrostFarmingBoostBoostPoolInfo: {
        totalVotes: 'u128',
        startRound: 'u32',
        endRound: 'u32',
        roundLength: 'u32'
    },
    /**
     * Lookup712: bifrost_farming::boost::UserBoostInfo<T>
     **/
    BifrostFarmingBoostUserBoostInfo: {
        voteAmount: 'u128',
        voteList: 'Vec<(u32,Percent)>',
        lastVote: 'u32'
    },
    /**
     * Lookup715: bifrost_farming::pallet::Error<T>
     **/
    BifrostFarmingError: {
        _enum: ['CalculationOverflow', 'PoolDoesNotExist', 'GaugePoolNotExist', 'GaugeInfoNotExist', 'InvalidPoolState', 'LastGaugeNotClaim', 'CanNotClaim', 'GaugeMaxBlockOverflow', 'WithdrawLimitCountExceeded', 'ShareInfoNotExists', 'CanNotDeposit', 'WhitelistEmpty', 'RoundNotOver', 'RoundLengthNotSet', 'WhitelistLimitExceeded', 'NobodyVoting', 'NotInWhitelist', 'PercentOverflow']
    },
    /**
     * Lookup716: bifrost_system_staking::types::RoundInfo<BlockNumber>
     **/
    BifrostSystemStakingRoundInfo: {
        current: 'u32',
        first: 'u32',
        length: 'u32'
    },
    /**
     * Lookup717: bifrost_system_staking::types::TokenInfo<Balance>
     **/
    BifrostSystemStakingTokenInfo: {
        farmingStakingAmount: 'u128',
        systemStakableAmount: 'u128',
        systemShadowAmount: 'u128',
        pendingRedeemAmount: 'u128',
        currentConfig: 'BifrostSystemStakingTokenConfig',
        newConfig: 'BifrostSystemStakingTokenConfig'
    },
    /**
     * Lookup718: bifrost_system_staking::types::TokenConfig<Balance>
     **/
    BifrostSystemStakingTokenConfig: {
        execDelay: 'u32',
        systemStakableFarmingRate: 'Permill',
        lptokenRates: 'Vec<Perbill>',
        addOrSub: 'bool',
        systemStakableBase: 'u128',
        farmingPoolids: 'Vec<u32>'
    },
    /**
     * Lookup720: bifrost_system_staking::pallet::Error<T>
     **/
    BifrostSystemStakingError: {
        _enum: ['InvalidTokenConfig', 'ExceedMaxTokenLen', 'ExceedMaxFarmingPoolidLen', 'TokenInfoNotFound', 'PayoutFailed']
    },
    /**
     * Lookup721: bifrost_system_maker::pallet::Error<T>
     **/
    BifrostSystemMakerError: {
        _enum: ['NotEnoughBalance', 'NotSupportTokenType', 'CalculationOverflow']
    },
    /**
     * Lookup722: bifrost_fee_share::pallet::Error<T>
     **/
    BifrostFeeShareError: {
        _enum: ['NotEnoughBalance', 'NotSupportProportion', 'CalculationOverflow', 'ExistentialDeposit', 'DistributionNotExist']
    },
    /**
     * Lookup725: bifrost_cross_in_out::pallet::Error<T>
     **/
    BifrostCrossInOutError: {
        _enum: ['NotEnoughBalance', 'NotExist', 'NotAllowed', 'CurrencyNotSupportCrossInAndOut', 'NoMultilocationMapping', 'NoAccountIdMapping', 'AlreadyExist', 'NoCrossingMinimumSet', 'AmountLowerThanMinimum']
    },
    /**
     * Lookup727: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: 'SpCoreEd25519Signature',
            Sr25519: 'SpCoreSr25519Signature',
            Ecdsa: 'SpCoreEcdsaSignature'
        }
    },
    /**
     * Lookup728: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: '[u8;64]',
    /**
     * Lookup730: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: '[u8;64]',
    /**
     * Lookup731: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: '[u8;65]',
    /**
     * Lookup734: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: 'Null',
    /**
     * Lookup735: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: 'Null',
    /**
     * Lookup736: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: 'Null',
    /**
     * Lookup737: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: 'Null',
    /**
     * Lookup740: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: 'Compact<u32>',
    /**
     * Lookup741: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: 'Null',
    /**
     * Lookup742: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
    /**
     * Lookup743: bifrost_kusama_runtime::Runtime
     **/
    BifrostKusamaRuntimeRuntime: 'Null'
};
