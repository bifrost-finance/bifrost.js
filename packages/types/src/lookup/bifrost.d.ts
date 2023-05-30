declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        miscFrozen: string;
        feeFrozen: string;
    };
    /**
     * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup8: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: string;
        proofSize: string;
    };
    /**
     * Lookup13: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup15: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup18: frame_system::EventRecord<bifrost_kusama_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup20: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup21: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup22: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup23: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup24: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
            Exhausted: string;
            Corruption: string;
            Unavailable: string;
        };
    };
    /**
     * Lookup25: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup26: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup27: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup28: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup29: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: string;
                index: string;
            };
            IndexFreed: {
                index: string;
            };
            IndexFrozen: {
                index: string;
                who: string;
            };
        };
    };
    /**
     * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: string;
            ValidationFunctionApplied: {
                relayChainBlockNum: string;
            };
            ValidationFunctionDiscarded: string;
            UpgradeAuthorized: {
                codeHash: string;
            };
            DownwardMessagesReceived: {
                count: string;
            };
            DownwardMessagesProcessed: {
                weightUsed: string;
                dmqHead: string;
            };
            UpwardMessageSent: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup32: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
                reserved: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup34: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup35: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    /**
     * Lookup36: parachain_staking::pallet::Event<T>
     **/
    ParachainStakingEvent: {
        _enum: {
            NewRound: {
                startingBlock: string;
                round: string;
                selectedCollatorsNumber: string;
                totalBalance: string;
            };
            JoinedCollatorCandidates: {
                account: string;
                amountLocked: string;
                newTotalAmtLocked: string;
            };
            CollatorChosen: {
                round: string;
                collatorAccount: string;
                totalExposedAmount: string;
            };
            CandidateBondLessRequested: {
                candidate: string;
                amountToDecrease: string;
                executeRound: string;
            };
            CandidateBondedMore: {
                candidate: string;
                amount: string;
                newTotalBond: string;
            };
            CandidateBondedLess: {
                candidate: string;
                amount: string;
                newBond: string;
            };
            CandidateWentOffline: {
                candidate: string;
            };
            CandidateBackOnline: {
                candidate: string;
            };
            CandidateScheduledExit: {
                exitAllowedRound: string;
                candidate: string;
                scheduledExit: string;
            };
            CancelledCandidateExit: {
                candidate: string;
            };
            CancelledCandidateBondLess: {
                candidate: string;
                amount: string;
                executeRound: string;
            };
            CandidateLeft: {
                exCandidate: string;
                unlockedAmount: string;
                newTotalAmtLocked: string;
            };
            DelegationDecreaseScheduled: {
                delegator: string;
                candidate: string;
                amountToDecrease: string;
                executeRound: string;
            };
            DelegationIncreased: {
                delegator: string;
                candidate: string;
                amount: string;
                inTop: string;
            };
            DelegationDecreased: {
                delegator: string;
                candidate: string;
                amount: string;
                inTop: string;
            };
            DelegatorExitScheduled: {
                round: string;
                delegator: string;
                scheduledExit: string;
            };
            DelegationRevocationScheduled: {
                round: string;
                delegator: string;
                candidate: string;
                scheduledExit: string;
            };
            DelegatorLeft: {
                delegator: string;
                unstakedAmount: string;
            };
            DelegationRevoked: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
            };
            DelegationKicked: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
            };
            DelegatorExitCancelled: {
                delegator: string;
            };
            CancelledDelegationRequest: {
                delegator: string;
                cancelledRequest: string;
                collator: string;
            };
            Delegation: {
                delegator: string;
                lockedAmount: string;
                candidate: string;
                delegatorPosition: string;
            };
            DelegatorLeftCandidate: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
                totalCandidateStaked: string;
            };
            Rewarded: {
                account: string;
                rewards: string;
            };
            ReservedForParachainBond: {
                account: string;
                value: string;
            };
            ParachainBondAccountSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            ParachainBondReservePercentSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            InflationSet: {
                annualMin: string;
                annualIdeal: string;
                annualMax: string;
                roundMin: string;
                roundIdeal: string;
                roundMax: string;
            };
            StakeExpectationsSet: {
                expectMin: string;
                expectIdeal: string;
                expectMax: string;
            };
            TotalSelectedSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            CollatorCommissionSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            BlocksPerRoundSet: {
                _alias: {
                    new_: string;
                };
                currentRound: string;
                firstBlock: string;
                old: string;
                new_: string;
                newPerRoundInflationMin: string;
                newPerRoundInflationIdeal: string;
                newPerRoundInflationMax: string;
            };
        };
    };
    /**
     * Lookup38: parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
     **/
    ParachainStakingDelegationRequestsCancelledScheduledRequest: {
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup39: parachain_staking::delegation_requests::DelegationAction<Balance>
     **/
    ParachainStakingDelegationRequestsDelegationAction: {
        _enum: {
            Revoke: string;
            Decrease: string;
        };
    };
    /**
     * Lookup40: parachain_staking::types::DelegatorAdded<B>
     **/
    ParachainStakingDelegatorAdded: {
        _enum: {
            AddedToTop: {
                newTotal: string;
            };
            AddedToBottom: string;
        };
    };
    /**
     * Lookup43: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
                deposit: string;
            };
            Tabled: {
                proposalIndex: string;
                deposit: string;
            };
            ExternalTabled: string;
            Started: {
                refIndex: string;
                threshold: string;
            };
            Passed: {
                refIndex: string;
            };
            NotPassed: {
                refIndex: string;
            };
            Cancelled: {
                refIndex: string;
            };
            Delegated: {
                who: string;
                target: string;
            };
            Undelegated: {
                account: string;
            };
            Vetoed: {
                who: string;
                proposalHash: string;
                until: string;
            };
            Blacklisted: {
                proposalHash: string;
            };
            Voted: {
                voter: string;
                refIndex: string;
                vote: string;
            };
            Seconded: {
                seconder: string;
                propIndex: string;
            };
            ProposalCanceled: {
                propIndex: string;
            };
        };
    };
    /**
     * Lookup44: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: string[];
    };
    /**
     * Lookup45: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
        };
    };
    /**
     * Lookup47: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: string;
                proposalIndex: string;
                proposalHash: string;
                threshold: string;
            };
            Voted: {
                account: string;
                proposalHash: string;
                voted: string;
                yes: string;
                no: string;
            };
            Approved: {
                proposalHash: string;
            };
            Disapproved: {
                proposalHash: string;
            };
            Executed: {
                proposalHash: string;
                result: string;
            };
            MemberExecuted: {
                proposalHash: string;
                result: string;
            };
            Closed: {
                proposalHash: string;
                yes: string;
                no: string;
            };
        };
    };
    /**
     * Lookup51: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: string;
            };
            EmptyTerm: string;
            ElectionError: string;
            MemberKicked: {
                member: string;
            };
            Renounced: {
                candidate: string;
            };
            CandidateSlashed: {
                candidate: string;
                amount: string;
            };
            SeatHolderSlashed: {
                seatHolder: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup54: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: string[];
    };
    /**
     * Lookup56: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
                error: string;
                weight: string;
            };
            BadVersion: {
                messageHash: string;
            };
            BadFormat: {
                messageHash: string;
            };
            XcmpMessageSent: {
                messageHash: string;
            };
            OverweightEnqueued: {
                sender: string;
                sentAt: string;
                index: string;
                required: string;
            };
            OverweightServiced: {
                index: string;
                used: string;
            };
        };
    };
    /**
     * Lookup57: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            LocationFull: string;
            LocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            ExpectationFalse: string;
            PalletNotFound: string;
            NameMismatch: string;
            VersionIncompatible: string;
            HoldingWouldOverflow: string;
            ExportError: string;
            ReanchorFailed: string;
            NoDeal: string;
            FeesNotMet: string;
            LockError: string;
            NoPermission: string;
            Unanchored: string;
            NotDepositable: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
            ExceedsStackLimit: string;
        };
    };
    /**
     * Lookup59: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: string;
            Sent: string;
            UnexpectedResponse: string;
            ResponseReady: string;
            Notified: string;
            NotifyOverweight: string;
            NotifyDispatchError: string;
            NotifyDecodeFailed: string;
            InvalidResponder: string;
            InvalidResponderVersion: string;
            ResponseTaken: string;
            AssetsTrapped: string;
            VersionChangeNotified: string;
            SupportedVersionChanged: string;
            NotifyTargetSendFail: string;
            NotifyTargetMigrationFail: string;
            InvalidQuerierVersion: string;
            InvalidQuerier: string;
            VersionNotifyStarted: string;
            VersionNotifyRequested: string;
            VersionNotifyUnrequested: string;
            FeesPaid: string;
            AssetsClaimed: string;
        };
    };
    /**
     * Lookup60: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup61: xcm::v3::multilocation::MultiLocation
     **/
    XcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup62: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup63: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: {
                length: string;
                data: string;
            };
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
            GlobalConsensus: string;
        };
    };
    /**
     * Lookup66: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: string;
            ByFork: {
                blockNumber: string;
                blockHash: string;
            };
            Polkadot: string;
            Kusama: string;
            Westend: string;
            Rococo: string;
            Wococo: string;
            Ethereum: {
                chainId: string;
            };
            BitcoinCore: string;
            BitcoinCash: string;
        };
    };
    /**
     * Lookup69: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: string;
            Moniker: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup70: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup71: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: string;
    /**
     * Lookup73: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
                querier: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originKind: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: string;
            DepositAsset: {
                assets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                want: string;
                maximal: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ReportHolding: {
                responseInfo: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
            BurnAsset: string;
            ExpectAsset: string;
            ExpectOrigin: string;
            ExpectError: string;
            ExpectTransactStatus: string;
            QueryPallet: {
                moduleName: string;
                responseInfo: string;
            };
            ExpectPallet: {
                index: string;
                name: string;
                moduleName: string;
                crateMajor: string;
                minCrateMinor: string;
            };
            ReportTransactStatus: string;
            ClearTransactStatus: string;
            UniversalOrigin: string;
            ExportMessage: {
                network: string;
                destination: string;
                xcm: string;
            };
            LockAsset: {
                asset: string;
                unlocker: string;
            };
            UnlockAsset: {
                asset: string;
                target: string;
            };
            NoteUnlockable: {
                asset: string;
                owner: string;
            };
            RequestUnlock: {
                asset: string;
                locker: string;
            };
            SetFeesMode: {
                jitWithdraw: string;
            };
            SetTopic: string;
            ClearTopic: string;
            AliasOrigin: string;
            UnpaidExecution: {
                weightLimit: string;
                checkOrigin: string;
            };
        };
    };
    /**
     * Lookup74: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: string;
    /**
     * Lookup76: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup77: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup78: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup79: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
        };
    };
    /**
     * Lookup82: xcm::v3::Response
     **/
    XcmV3Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
            PalletsInfo: string;
            DispatchResult: string;
        };
    };
    /**
     * Lookup85: xcm::v3::VecPalletInfo
     **/
    XcmV3VecPalletInfo: string;
    /**
     * Lookup87: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup88: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup90: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup91: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup92: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup93: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup94: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
            AllCounted: string;
            AllOfCounted: {
                id: string;
                fun: string;
                count: string;
            };
        };
    };
    /**
     * Lookup95: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup96: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup97: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup98: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: string;
    /**
     * Lookup100: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup101: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup102: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup103: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup104: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    /**
     * Lookup105: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup107: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup108: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup109: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup110: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    /**
     * Lookup111: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup112: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup113: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageId: string;
            };
            UnsupportedVersion: {
                messageId: string;
            };
            ExecutedDownward: {
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageId: string;
            };
        };
    };
    /**
     * Lookup114: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            BatchCompletedWithErrors: string;
            ItemCompleted: string;
            ItemFailed: {
                error: string;
            };
            DispatchedAs: {
                result: string;
            };
        };
    };
    /**
     * Lookup115: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: string;
                index: string;
            };
            Canceled: {
                when: string;
                index: string;
            };
            Dispatched: {
                task: string;
                id: string;
                result: string;
            };
            CallUnavailable: {
                task: string;
                id: string;
            };
            PeriodicFailed: {
                task: string;
                id: string;
            };
            PermanentlyOverweight: {
                task: string;
                id: string;
            };
        };
    };
    /**
     * Lookup117: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            PureCreated: {
                pure: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
            ProxyRemoved: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup118: bifrost_kusama_runtime::ProxyType
     **/
    BifrostKusamaRuntimeProxyType: {
        _enum: string[];
    };
    /**
     * Lookup120: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup121: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup122: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: string;
            };
            IdentityCleared: {
                who: string;
                deposit: string;
            };
            IdentityKilled: {
                who: string;
                deposit: string;
            };
            JudgementRequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementUnrequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementGiven: {
                target: string;
                registrarIndex: string;
            };
            RegistrarAdded: {
                registrarIndex: string;
            };
            SubIdentityAdded: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRemoved: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRevoked: {
                sub: string;
                main: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup123: bifrost_vesting::pallet::Event<T>
     **/
    BifrostVestingEvent: {
        _enum: {
            VestingUpdated: string;
            VestingCompleted: string;
        };
    };
    /**
     * Lookup124: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
            };
            Spending: {
                budgetRemaining: string;
            };
            Awarded: {
                proposalIndex: string;
                award: string;
                account: string;
            };
            Rejected: {
                proposalIndex: string;
                slashed: string;
            };
            Burnt: {
                burntFunds: string;
            };
            Rollover: {
                rolloverBalance: string;
            };
            Deposit: {
                value: string;
            };
            SpendApproved: {
                proposalIndex: string;
                amount: string;
                beneficiary: string;
            };
            UpdatedInactive: {
                reactivated: string;
                deactivated: string;
            };
        };
    };
    /**
     * Lookup125: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: string;
            };
            BountyRejected: {
                index: string;
                bond: string;
            };
            BountyBecameActive: {
                index: string;
            };
            BountyAwarded: {
                index: string;
                beneficiary: string;
            };
            BountyClaimed: {
                index: string;
                payout: string;
                beneficiary: string;
            };
            BountyCanceled: {
                index: string;
            };
            BountyExtended: {
                index: string;
            };
        };
    };
    /**
     * Lookup126: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: string;
            };
            TipClosing: {
                tipHash: string;
            };
            TipClosed: {
                tipHash: string;
                who: string;
                payout: string;
            };
            TipRetracted: {
                tipHash: string;
            };
            TipSlashed: {
                tipHash: string;
                finder: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup127: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Requested: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Cleared: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup128: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: string;
                assets: string;
                fee: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup129: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DustLost: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Transfer: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            Reserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unreserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
                status: string;
            };
            BalanceSet: {
                currencyId: string;
                who: string;
                free: string;
                reserved: string;
            };
            TotalIssuanceSet: {
                currencyId: string;
                amount: string;
            };
            Withdrawn: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Slashed: {
                currencyId: string;
                who: string;
                freeAmount: string;
                reservedAmount: string;
            };
            Deposited: {
                currencyId: string;
                who: string;
                amount: string;
            };
            LockSet: {
                lockId: string;
                currencyId: string;
                who: string;
                amount: string;
            };
            LockRemoved: {
                lockId: string;
                currencyId: string;
                who: string;
            };
            Locked: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unlocked: {
                currencyId: string;
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup130: node_primitives::currency::CurrencyId
     **/
    NodePrimitivesCurrencyCurrencyId: {
        _enum: {
            Native: string;
            VToken: string;
            Token: string;
            Stable: string;
            VSToken: string;
            VSBond: string;
            LPToken: string;
            ForeignAsset: string;
            Token2: string;
            VToken2: string;
            VSToken2: string;
            VSBond2: string;
            StableLpToken: string;
        };
    };
    /**
     * Lookup131: node_primitives::currency::TokenSymbol
     **/
    NodePrimitivesCurrencyTokenSymbol: {
        _enum: string[];
    };
    /**
     * Lookup132: orml_unknown_tokens::module::Event
     **/
    OrmlUnknownTokensModuleEvent: {
        _enum: {
            Deposited: {
                asset: string;
                who: string;
            };
            Withdrawn: {
                asset: string;
                who: string;
            };
        };
    };
    /**
     * Lookup133: orml_xcm::module::Event<T>
     **/
    OrmlXcmModuleEvent: {
        _enum: {
            Sent: {
                to: string;
                message: string;
            };
        };
    };
    /**
     * Lookup134: zenlink_protocol::pallet::Event<T>
     **/
    ZenlinkProtocolEvent: {
        _enum: {
            Transferred: string;
            Burned: string;
            Minted: string;
            PairCreated: string;
            LiquidityAdded: string;
            LiquidityRemoved: string;
            AssetSwap: string;
            TransferredToParachain: string;
            BootstrapContribute: string;
            BootstrapEnd: string;
            BootstrapCreated: string;
            BootstrapClaim: string;
            BootstrapUpdate: string;
            BootstrapRefund: string;
            DistributeReward: string;
            ChargeReward: string;
            WithdrawReward: string;
        };
    };
    /**
     * Lookup135: zenlink_protocol::primitives::AssetId
     **/
    ZenlinkProtocolPrimitivesAssetId: {
        chainId: string;
        assetType: string;
        assetIndex: string;
    };
    /**
     * Lookup140: merkle_distributor::pallet::Event<T>
     **/
    MerkleDistributorEvent: {
        _enum: {
            Create: string;
            Claim: string;
            Withdraw: string;
            AddToWhiteList: string;
            RemoveFromWhiteList: string;
        };
    };
    /**
     * Lookup141: zenlink_stable_amm::pallet::Event<T>
     **/
    ZenlinkStableAmmEvent: {
        _enum: {
            CreatePool: {
                poolId: string;
                currencyIds: string;
                lpCurrencyId: string;
                a: string;
                account: string;
                adminFeeReceiver: string;
            };
            UpdateAdminFeeReceiver: {
                poolId: string;
                adminFeeReceiver: string;
            };
            AddLiquidity: {
                poolId: string;
                who: string;
                to: string;
                supplyAmounts: string;
                fees: string;
                newD: string;
                mintAmount: string;
            };
            CurrencyExchange: {
                poolId: string;
                who: string;
                to: string;
                inIndex: string;
                inAmount: string;
                outIndex: string;
                outAmount: string;
            };
            RemoveLiquidity: {
                poolId: string;
                who: string;
                to: string;
                amounts: string;
                fees: string;
                newTotalSupply: string;
            };
            RemoveLiquidityOneCurrency: {
                poolId: string;
                who: string;
                to: string;
                outIndex: string;
                burnAmount: string;
                outAmount: string;
            };
            RemoveLiquidityImbalance: {
                poolId: string;
                who: string;
                to: string;
                amounts: string;
                fees: string;
                newD: string;
                newTotalSupply: string;
            };
            NewSwapFee: {
                poolId: string;
                newSwapFee: string;
            };
            NewAdminFee: {
                poolId: string;
                newAdminFee: string;
            };
            RampA: {
                poolId: string;
                initialAPrecise: string;
                futureAPrecise: string;
                now: string;
                futureATime: string;
            };
            StopRampA: {
                poolId: string;
                currentA: string;
                now: string;
            };
            CollectProtocolFee: {
                poolId: string;
                currencyId: string;
                feeAmount: string;
            };
            CurrencyExchangeUnderlying: {
                poolId: string;
                account: string;
                inAmount: string;
                outAmount: string;
                currencyIndexFrom: string;
                currencyIndexTo: string;
                to: string;
            };
        };
    };
    /**
     * Lookup143: zenlink_swap_router::pallet::Event<T>
     **/
    ZenlinkSwapRouterEvent: string;
    /**
     * Lookup144: bifrost_flexible_fee::pallet::Event<T>
     **/
    BifrostFlexibleFeeEvent: {
        _enum: {
            FlexibleFeeExchanged: string;
            FixedRateFeeExchanged: string;
            ExtraFeeDeducted: string;
        };
    };
    /**
     * Lookup145: node_primitives::ExtraFeeName
     **/
    NodePrimitivesExtraFeeName: {
        _enum: string[];
    };
    /**
     * Lookup146: bifrost_salp::pallet::Event<T>
     **/
    BifrostSalpEvent: {
        _enum: {
            Created: string;
            Contributing: string;
            Contributed: string;
            ContributeFailed: string;
            Withdrew: string;
            Refunded: string;
            AllRefunded: string;
            Redeemed: string;
            Edited: string;
            Dissolved: string;
            Unlocked: string;
            AllUnlocked: string;
            Failed: string;
            Success: string;
            Retired: string;
            End: string;
            Continued: string;
            RefundedDissolved: string;
            Buyback: string;
            VstokenUnlocked: string;
        };
    };
    /**
     * Lookup147: bifrost_liquidity_mining::pallet::Event<T, I>
     **/
    BifrostLiquidityMiningEvent: {
        _enum: {
            PoolCreated: string;
            PoolCharged: string;
            PoolStarted: string;
            PoolKilled: string;
            PoolRetiredForcefully: string;
            PoolEdited: string;
            UserDeposited: string;
            UserRedeemed: string;
            UserClaimed: string;
            UserUnlocked: string;
            UserCancelUnlock: string;
            LazyMigration: string;
        };
    };
    /**
     * Lookup148: bifrost_liquidity_mining::PoolType
     **/
    BifrostLiquidityMiningPoolType: {
        _enum: string[];
    };
    /**
     * Lookup153: bifrost_token_issuer::pallet::Event<T>
     **/
    BifrostTokenIssuerEvent: {
        _enum: {
            AddedToIssueList: string;
            RemovedFromIssueList: string;
            AddedToTransferList: string;
            RemovedFromTransferList: string;
            Issued: string;
            Transferred: string;
        };
    };
    /**
     * Lookup154: bifrost_lightening_redeem::pallet::Event<T>
     **/
    BifrostLighteningRedeemEvent: {
        _enum: {
            KSMExchanged: string;
            KSMAdded: string;
            PriceEdited: string;
            BlockIntervalEdited: string;
            ReleasedPerDayEdited: string;
        };
    };
    /**
     * Lookup155: bifrost_salp_lite::pallet::Event<T>
     **/
    BifrostSalpLiteEvent: {
        _enum: {
            Created: string;
            Issued: string;
            Withdrew: string;
            Refunded: string;
            Redeemed: string;
            Edited: string;
            Dissolved: string;
            Unlocked: string;
            AllUnlocked: string;
            Failed: string;
            Success: string;
            Retired: string;
            Continued: string;
            RefundedDissolved: string;
        };
    };
    /**
     * Lookup156: bifrost_call_switchgear::pallet::Event<T>
     **/
    BifrostCallSwitchgearEvent: {
        _enum: {
            TransactionSwitchedoff: string;
            TransactionSwitchedOn: string;
            TransferAccountDisabled: string;
            TransferAccountEnabled: string;
        };
    };
    /**
     * Lookup157: bifrost_vsbond_auction::pallet::Event<T, I>
     **/
    BifrostVsbondAuctionEvent: {
        _enum: {
            OrderCreated: string;
            OrderRevoked: string;
            OrderClinchd: string;
            TransactionFeeRateSet: string;
        };
    };
    /**
     * Lookup158: bifrost_vsbond_auction::OrderType
     **/
    BifrostVsbondAuctionOrderType: {
        _enum: string[];
    };
    /**
     * Lookup160: bifrost_asset_registry::pallet::Event<T>
     **/
    BifrostAssetRegistryEvent: {
        _enum: {
            AssetRegistered: {
                assetId: string;
                metadata: string;
            };
            AssetUpdated: {
                assetId: string;
                metadata: string;
            };
            CurrencyIdRegistered: {
                currencyId: string;
                metadata: string;
            };
            MultiLocationSet: {
                currencyId: string;
                location: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup161: node_primitives::currency::AssetIds
     **/
    NodePrimitivesCurrencyAssetIds: {
        _enum: {
            ForeignAssetId: string;
            NativeAssetId: string;
        };
    };
    /**
     * Lookup162: bifrost_asset_registry::pallet::AssetMetadata<Balance>
     **/
    BifrostAssetRegistryAssetMetadata: {
        name: string;
        symbol: string;
        decimals: string;
        minimalBalance: string;
    };
    /**
     * Lookup163: bifrost_vtoken_minting::pallet::Event<T>
     **/
    BifrostVtokenMintingEvent: {
        _enum: {
            Minted: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                vtokenAmount: string;
                fee: string;
            };
            Redeemed: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                vtokenAmount: string;
                fee: string;
            };
            RedeemSuccess: {
                unlockId: string;
                tokenId: string;
                to: string;
                tokenAmount: string;
            };
            Rebonded: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                vtokenAmount: string;
                fee: string;
            };
            RebondedByUnlockId: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                vtokenAmount: string;
                fee: string;
            };
            UnlockDurationSet: {
                tokenId: string;
                unlockDuration: string;
            };
            MinimumMintSet: {
                tokenId: string;
                amount: string;
            };
            MinimumRedeemSet: {
                tokenId: string;
                amount: string;
            };
            SupportRebondTokenAdded: {
                tokenId: string;
            };
            SupportRebondTokenRemoved: {
                tokenId: string;
            };
            FeeSet: {
                mintFee: string;
                redeemFee: string;
            };
            HookIterationLimitSet: {
                limit: string;
            };
            UnlockingTotalSet: {
                tokenId: string;
                amount: string;
            };
            MinTimeUnitSet: {
                tokenId: string;
                timeUnit: string;
            };
            FastRedeemFailed: {
                err: string;
            };
        };
    };
    /**
     * Lookup164: node_primitives::TimeUnit
     **/
    NodePrimitivesTimeUnit: {
        _enum: {
            Era: string;
            SlashingSpan: string;
            Round: string;
            Kblock: string;
            Hour: string;
        };
    };
    /**
     * Lookup165: bifrost_slp::pallet::Event<T>
     **/
    BifrostSlpEvent: {
        _enum: {
            DelegatorInitialized: {
                currencyId: string;
                delegatorId: string;
            };
            DelegatorBonded: {
                currencyId: string;
                delegatorId: string;
                bondedAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorBondExtra: {
                currencyId: string;
                delegatorId: string;
                extraBondedAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorUnbond: {
                currencyId: string;
                delegatorId: string;
                unbondAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorUnbondAll: {
                currencyId: string;
                delegatorId: string;
                queryId: string;
                queryIdHash: string;
            };
            DelegatorRebond: {
                currencyId: string;
                delegatorId: string;
                rebondAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            Delegated: {
                currencyId: string;
                delegatorId: string;
                targets: string;
                queryId: string;
                queryIdHash: string;
            };
            Undelegated: {
                currencyId: string;
                delegatorId: string;
                targets: string;
                queryId: string;
                queryIdHash: string;
            };
            Payout: {
                currencyId: string;
                validator: string;
                timeUnit: string;
            };
            Liquidize: {
                currencyId: string;
                delegatorId: string;
                timeUnit: string;
                queryId: string;
                queryIdHash: string;
                amount: string;
            };
            Chill: {
                currencyId: string;
                delegatorId: string;
                queryId: string;
                queryIdHash: string;
            };
            TransferBack: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            TransferTo: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            ConvertAsset: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DelegatorAdded: {
                currencyId: string;
                index: string;
                delegatorId: string;
            };
            DelegatorRemoved: {
                currencyId: string;
                delegatorId: string;
            };
            ValidatorsAdded: {
                currencyId: string;
                validatorId: string;
            };
            ValidatorsRemoved: {
                currencyId: string;
                validatorId: string;
            };
            Refund: {
                currencyId: string;
                timeUnit: string;
                index: string;
                amount: string;
            };
            FundMoveFromExitToEntrance: {
                currencyId: string;
                amount: string;
            };
            TimeUnitUpdated: {
                _alias: {
                    new_: string;
                };
                currencyId: string;
                old: string;
                new_: string;
            };
            PoolTokenIncreased: {
                currencyId: string;
                amount: string;
            };
            HostingFeeCharged: {
                currencyId: string;
                amount: string;
            };
            PoolTokenDecreased: {
                currencyId: string;
                amount: string;
            };
            FeeSupplemented: {
                currencyId: string;
                amount: string;
                from: string;
                to: string;
            };
            ValidatorsByDelegatorSet: {
                currencyId: string;
                validatorsList: string;
                delegatorId: string;
            };
            XcmDestWeightAndFeeSet: {
                currencyId: string;
                operation: string;
                weightAndFee: string;
            };
            OperateOriginSet: {
                currencyId: string;
                operator: string;
            };
            FeeSourceSet: {
                currencyId: string;
                whoAndFee: string;
            };
            DelegatorLedgerSet: {
                currencyId: string;
                delegator: string;
                ledger: string;
            };
            DelegatorLedgerQueryResponseConfirmed: {
                queryId: string;
                entry: string;
            };
            DelegatorLedgerQueryResponseFailed: {
                queryId: string;
            };
            ValidatorsByDelegatorQueryResponseConfirmed: {
                queryId: string;
                entry: string;
            };
            ValidatorsByDelegatorQueryResponseFailed: {
                queryId: string;
            };
            MinimumsMaximumsSet: {
                currencyId: string;
                minimumsAndMaximums: string;
            };
            CurrencyDelaysSet: {
                currencyId: string;
                delays: string;
            };
            HostingFeesSet: {
                currencyId: string;
                fees: string;
            };
            CurrencyTuneExchangeRateLimitSet: {
                currencyId: string;
                tuneExchangeRateLimit: string;
            };
            OngoingTimeUnitUpdateIntervalSet: {
                currencyId: string;
                interval: string;
            };
            SupplementFeeAccountWhitelistAdded: {
                currencyId: string;
                who: string;
            };
            SupplementFeeAccountWhitelistRemoved: {
                currencyId: string;
                who: string;
            };
            ValidatorsReset: {
                currencyId: string;
                validatorList: string;
            };
            ValidatorBoostListSet: {
                currencyId: string;
                validatorBoostList: string;
            };
            ValidatorBoostListAdded: {
                currencyId: string;
                who: string;
                dueBlockNumber: string;
            };
            RemovedFromBoostList: {
                currencyId: string;
                who: string;
            };
        };
    };
    /**
     * Lookup171: bifrost_slp::primitives::XcmOperation
     **/
    BifrostSlpPrimitivesXcmOperation: {
        _enum: string[];
    };
    /**
     * Lookup178: bifrost_slp::primitives::Ledger<Balance>
     **/
    BifrostSlpPrimitivesLedger: {
        _enum: {
            Substrate: string;
            Moonbeam: string;
            ParachainStaking: string;
            Filecoin: string;
            Phala: string;
        };
    };
    /**
     * Lookup179: bifrost_slp::primitives::polkadot_primitives::SubstrateLedger<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger: {
        account: string;
        total: string;
        active: string;
        unlocking: string;
    };
    /**
     * Lookup181: bifrost_slp::primitives::polkadot_primitives::UnlockChunk<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk: {
        value: string;
        unlockTime: string;
    };
    /**
     * Lookup182: bifrost_slp::primitives::moonbeam_primitives::OneToManyLedger<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger: {
        account: string;
        delegations: string;
        total: string;
        lessTotal: string;
        requests: string;
        requestBriefs: string;
        status: string;
    };
    /**
     * Lookup186: bifrost_slp::primitives::moonbeam_primitives::OneToManyScheduledRequest<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest: {
        validator: string;
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup187: bifrost_slp::primitives::moonbeam_primitives::OneToManyDelegationAction<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction: {
        _enum: {
            Revoke: string;
            Decrease: string;
        };
    };
    /**
     * Lookup192: bifrost_slp::primitives::moonbeam_primitives::OneToManyDelegatorStatus
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup193: bifrost_slp::primitives::filecoin_primitives::FilecoinLedger<Balance>
     **/
    BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger: {
        account: string;
        initialPledge: string;
    };
    /**
     * Lookup194: bifrost_slp::primitives::phala_primitives::PhalaLedger<Balance>
     **/
    BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger: {
        account: string;
        activeShares: string;
        unlockingShares: string;
        unlockingTimeUnit: string;
        bondedPoolId: string;
        bondedPoolCollectionId: string;
    };
    /**
     * Lookup197: bifrost_slp::primitives::LedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesLedgerUpdateEntry: {
        _enum: {
            Substrate: string;
            Moonbeam: string;
            ParachainStaking: string;
        };
    };
    /**
     * Lookup198: bifrost_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        updateOperation: string;
        amount: string;
        unlockTime: string;
    };
    /**
     * Lookup199: bifrost_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateOperation
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation: {
        _enum: string[];
    };
    /**
     * Lookup200: bifrost_slp::primitives::moonbeam_primitives::MoonbeamLedgerUpdateEntry<Balance>
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        validatorId: string;
        updateOperation: string;
        amount: string;
        unlockTime: string;
    };
    /**
     * Lookup201: bifrost_slp::primitives::moonbeam_primitives::MoonbeamLedgerUpdateOperation
     **/
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation: {
        _enum: string[];
    };
    /**
     * Lookup202: bifrost_slp::primitives::ValidatorsByDelegatorUpdateEntry
     **/
    BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry: {
        _enum: {
            Substrate: string;
        };
    };
    /**
     * Lookup203: bifrost_slp::primitives::polkadot_primitives::SubstrateValidatorsByDelegatorUpdateEntry
     **/
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        validators: string;
    };
    /**
     * Lookup205: bifrost_slp::primitives::MinimumsMaximums<Balance>
     **/
    BifrostSlpPrimitivesMinimumsMaximums: {
        delegatorBondedMinimum: string;
        bondExtraMinimum: string;
        unbondMinimum: string;
        rebondMinimum: string;
        unbondRecordMaximum: string;
        validatorsBackMaximum: string;
        delegatorActiveStakingMaximum: string;
        validatorsRewardMaximum: string;
        delegationAmountMinimum: string;
        delegatorsMaximum: string;
        validatorsMaximum: string;
    };
    /**
     * Lookup207: bifrost_slp::primitives::Delays
     **/
    BifrostSlpPrimitivesDelays: {
        unlockDelay: string;
        leaveDelegatorsDelay: string;
    };
    /**
     * Lookup214: xcm_interface::pallet::Event<T>
     **/
    XcmInterfaceEvent: {
        _enum: {
            XcmDestWeightUpdated: string;
            XcmFeeUpdated: string;
            TransferredStatemineMultiAsset: string;
        };
    };
    /**
     * Lookup215: xcm_interface::pallet::XcmInterfaceOperation
     **/
    XcmInterfaceXcmInterfaceOperation: {
        _enum: string[];
    };
    /**
     * Lookup216: bifrost_vstoken_conversion::pallet::Event<T>
     **/
    BifrostVstokenConversionEvent: {
        _enum: {
            VsbondConvertToVsksm: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vsksmAmount: string;
            };
            VsksmConvertToVsbond: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vsksmAmount: string;
            };
            VsbondConvertToVsdot: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vsdotAmount: string;
            };
            VsdotConvertToVsbond: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vsdotAmount: string;
            };
            VsbondConvertToVstoken: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vstokenAmount: string;
            };
            VstokenConvertToVsbond: {
                address: string;
                currencyId: string;
                vsbondAmount: string;
                vstokenAmount: string;
            };
            ExchangeFeeSet: {
                exchangeFee: string;
            };
            ExchangeRateSet: {
                lease: string;
                exchangeRate: string;
            };
            RelaychainLeaseSet: {
                lease: string;
            };
        };
    };
    /**
     * Lookup217: bifrost_vstoken_conversion::primitives::VstokenConversionExchangeFee<Balance>
     **/
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee: {
        vstokenExchangeFee: string;
        vsbondExchangeFeeOfVstoken: string;
    };
    /**
     * Lookup219: bifrost_vstoken_conversion::primitives::VstokenConversionExchangeRate
     **/
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate: {
        vsbondConvertToVstoken: string;
        vstokenConvertToVsbond: string;
    };
    /**
     * Lookup220: bifrost_farming::pallet::Event<T>
     **/
    BifrostFarmingEvent: {
        _enum: {
            FarmingPoolCreated: {
                pid: string;
            };
            FarmingPoolReset: {
                pid: string;
            };
            FarmingPoolClosed: {
                pid: string;
            };
            FarmingPoolKilled: {
                pid: string;
            };
            FarmingPoolEdited: {
                pid: string;
            };
            Charged: {
                who: string;
                pid: string;
                rewards: string;
            };
            Deposited: {
                who: string;
                pid: string;
                addValue: string;
                gaugeInfo: string;
            };
            Withdrawn: {
                who: string;
                pid: string;
                removeValue: string;
            };
            Claimed: {
                who: string;
                pid: string;
            };
            WithdrawClaimed: {
                who: string;
                pid: string;
            };
            GaugeWithdrawn: {
                who: string;
                gid: string;
            };
            AllForceGaugeClaimed: {
                gid: string;
            };
            PartiallyForceGaugeClaimed: {
                gid: string;
            };
            AllRetired: {
                pid: string;
            };
            PartiallyRetired: {
                pid: string;
            };
            RetireLimitSet: {
                limit: string;
            };
            RoundEnd: {
                totalVotes: string;
                startRound: string;
                endRound: string;
            };
            RoundStartError: {
                info: string;
            };
            RoundStart: {
                roundLength: string;
            };
            Voted: {
                who: string;
                voteList: string;
            };
            BoostCharged: {
                who: string;
                rewards: string;
            };
        };
    };
    /**
     * Lookup225: bifrost_system_staking::pallet::Event<T>
     **/
    BifrostSystemStakingEvent: {
        _enum: {
            NewRound: {
                current: string;
                first: string;
                length: string;
            };
            TokenConfigChanged: {
                token: string;
                execDelay: string;
                systemStakableFarmingRate: string;
                addOrSub: string;
                systemStakableBase: string;
                farmingPoolids: string;
                lptokenRates: string;
            };
            DepositFailed: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            MintSuccess: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            MintFailed: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            WithdrawSuccess: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            WithdrawFailed: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            Redeemed: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            RedeemFailed: {
                token: string;
                amount: string;
                farmingStakingAmount: string;
                systemStakableAmount: string;
                systemShadowAmount: string;
                pendingRedeemAmount: string;
            };
            VtokenNotFound: {
                token: string;
            };
            TokenInfoRefreshed: {
                token: string;
            };
            Payout: {
                token: string;
                vtoken: string;
                from: string;
                to: string;
                amount: string;
                free: string;
                vfree: string;
                shadow: string;
            };
        };
    };
    /**
     * Lookup228: bifrost_system_maker::pallet::Event<T>
     **/
    BifrostSystemMakerEvent: {
        _enum: {
            Charged: {
                who: string;
                currencyId: string;
                value: string;
            };
            ConfigSet: {
                currencyId: string;
                info: string;
            };
            Closed: {
                currencyId: string;
            };
            Paid: {
                currencyId: string;
                value: string;
            };
            RedeemFailed: {
                vcurrencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup229: bifrost_system_maker::pallet::Info<BalanceOf>
     **/
    BifrostSystemMakerInfo: {
        vcurrencyId: string;
        annualization: string;
        granularity: string;
        minimumRedeem: string;
    };
    /**
     * Lookup230: bifrost_fee_share::pallet::Event<T>
     **/
    BifrostFeeShareEvent: {
        _enum: {
            Created: {
                info: string;
            };
            Edited: {
                info: string;
            };
            EraLengthSet: {
                eraLength: string;
                nextEra: string;
            };
            Executed: {
                distributionId: string;
            };
            Deleted: {
                distributionId: string;
            };
            ExecuteFailed: {
                distributionId: string;
                info: string;
                nextEra: string;
            };
        };
    };
    /**
     * Lookup231: bifrost_fee_share::pallet::Info<sp_core::crypto::AccountId32>
     **/
    BifrostFeeShareInfo: {
        receivingAddress: string;
        tokenType: string;
        tokensProportion: string;
        ifAuto: string;
    };
    /**
     * Lookup235: bifrost_cross_in_out::pallet::Event<T>
     **/
    BifrostCrossInOutEvent: {
        _enum: {
            CrossedOut: {
                currencyId: string;
                crosser: string;
                location: string;
                amount: string;
            };
            CrossedIn: {
                currencyId: string;
                dest: string;
                location: string;
                amount: string;
                remark: string;
            };
            CurrencyRegistered: {
                currencyId: string;
            };
            CurrencyDeregistered: {
                currencyId: string;
            };
            AddedToIssueList: {
                account: string;
                currencyId: string;
            };
            RemovedFromIssueList: {
                account: string;
                currencyId: string;
            };
            LinkedAccountRegistered: {
                currencyId: string;
                who: string;
                foreignLocation: string;
            };
            AddedToRegisterList: {
                account: string;
                currencyId: string;
            };
            RemovedFromRegisterList: {
                account: string;
                currencyId: string;
            };
            CrossingMinimumAmountSet: {
                currencyId: string;
                crossInMinimum: string;
                crossOutMinimum: string;
            };
        };
    };
    /**
     * Lookup237: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup240: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup242: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup246: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup247: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup248: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup250: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup251: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup252: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup253: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup257: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup258: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup260: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: string;
            };
            transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
            };
            free: {
                index: string;
            };
            force_transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
                freeze: string;
            };
            freeze: {
                index: string;
            };
        };
    };
    /**
     * Lookup262: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: string[];
    };
    /**
     * Lookup263: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV2PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup266: polkadot_primitives::v2::UpgradeRestriction
     **/
    PolkadotPrimitivesV2UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup267: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup269: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueSize: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup272: polkadot_primitives::v2::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV2AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup274: polkadot_primitives::v2::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV2AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
    };
    /**
     * Lookup280: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup281: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: string;
            };
            sudo_send_upward_message: {
                message: string;
            };
            authorize_upgrade: {
                codeHash: string;
            };
            enact_authorized_upgrade: {
                code: string;
            };
        };
    };
    /**
     * Lookup282: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup284: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup287: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup290: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup292: pallet_balances::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup293: pallet_balances::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup296: pallet_balances::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup298: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer: {
                dest: string;
                value: string;
            };
            set_balance: {
                who: string;
                newFree: string;
                newReserved: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup299: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup301: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup305: bifrost_kusama_runtime::SessionKeys
     **/
    BifrostKusamaRuntimeSessionKeys: {
        aura: string;
    };
    /**
     * Lookup306: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup307: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup309: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup310: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    /**
     * Lookup311: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup315: parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32, BalanceOf>
     **/
    ParachainStakingParachainBondConfig: {
        account: string;
        percent: string;
        paymentInRound: string;
    };
    /**
     * Lookup316: parachain_staking::types::RoundInfo<BlockNumber>
     **/
    ParachainStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup317: parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegator: {
        id: string;
        delegations: string;
        total: string;
        lessTotal: string;
        status: string;
    };
    /**
     * Lookup318: parachain_staking::set::OrderedSet<parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
     **/
    ParachainStakingSetOrderedSet: string;
    /**
     * Lookup319: parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingBond: {
        owner: string;
        amount: string;
    };
    /**
     * Lookup321: parachain_staking::types::DelegatorStatus
     **/
    ParachainStakingDelegatorStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup322: parachain_staking::types::CandidateMetadata<Balance>
     **/
    ParachainStakingCandidateMetadata: {
        bond: string;
        delegationCount: string;
        totalCounted: string;
        lowestTopDelegationAmount: string;
        highestBottomDelegationAmount: string;
        lowestBottomDelegationAmount: string;
        topCapacity: string;
        bottomCapacity: string;
        request: string;
        status: string;
    };
    /**
     * Lookup323: parachain_staking::types::CapacityStatus
     **/
    ParachainStakingCapacityStatus: {
        _enum: string[];
    };
    /**
     * Lookup325: parachain_staking::types::CandidateBondLessRequest<Balance>
     **/
    ParachainStakingCandidateBondLessRequest: {
        amount: string;
        whenExecutable: string;
    };
    /**
     * Lookup326: parachain_staking::types::CollatorStatus
     **/
    ParachainStakingCollatorStatus: {
        _enum: {
            Active: string;
            Idle: string;
            Leaving: string;
        };
    };
    /**
     * Lookup328: parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegationRequestsScheduledRequest: {
        delegator: string;
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup329: parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingDelegations: {
        delegations: string;
        total: string;
    };
    /**
     * Lookup331: parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
     **/
    ParachainStakingCollatorSnapshot: {
        bond: string;
        delegations: string;
        total: string;
    };
    /**
     * Lookup332: parachain_staking::types::DelayedPayout<Balance>
     **/
    ParachainStakingDelayedPayout: {
        roundIssuance: string;
        totalStakingReward: string;
        collatorCommission: string;
    };
    /**
     * Lookup333: parachain_staking::inflation::InflationInfo<Balance>
     **/
    ParachainStakingInflationInflationInfo: {
        expect: {
            min: string;
            ideal: string;
            max: string;
        };
        annual: {
            min: string;
            ideal: string;
            max: string;
        };
        round: {
            min: string;
            ideal: string;
            max: string;
        };
    };
    /**
     * Lookup336: parachain_staking::pallet::Call<T>
     **/
    ParachainStakingCall: {
        _enum: {
            set_staking_expectations: {
                expectations: {
                    min: string;
                    ideal: string;
                    max: string;
                };
            };
            set_inflation: {
                schedule: {
                    min: string;
                    ideal: string;
                    max: string;
                };
            };
            set_parachain_bond_account: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_parachain_bond_reserve_percent: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_total_selected: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_collator_commission: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_blocks_per_round: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            join_candidates: {
                bond: string;
                candidateCount: string;
            };
            schedule_leave_candidates: {
                candidateCount: string;
            };
            execute_leave_candidates: {
                candidate: string;
                candidateDelegationCount: string;
            };
            cancel_leave_candidates: {
                candidateCount: string;
            };
            go_offline: string;
            go_online: string;
            candidate_bond_more: {
                more: string;
            };
            schedule_candidate_bond_less: {
                less: string;
            };
            execute_candidate_bond_less: {
                candidate: string;
            };
            cancel_candidate_bond_less: string;
            delegate: {
                candidate: string;
                amount: string;
                candidateDelegationCount: string;
                delegationCount: string;
            };
            schedule_leave_delegators: string;
            execute_leave_delegators: {
                delegator: string;
                delegationCount: string;
            };
            cancel_leave_delegators: string;
            schedule_revoke_delegation: {
                collator: string;
            };
            delegator_bond_more: {
                candidate: string;
                more: string;
            };
            schedule_delegator_bond_less: {
                candidate: string;
                less: string;
            };
            execute_delegation_request: {
                delegator: string;
                candidate: string;
            };
            cancel_delegation_request: {
                candidate: string;
            };
            hotfix_remove_delegation_requests_exited_candidates: {
                candidates: string;
            };
            hotfix_migrate_delegators_from_reserve_to_locks: {
                delegators: string;
            };
            hotfix_migrate_collators_from_reserve_to_locks: {
                collators: string;
            };
        };
    };
    /**
     * Lookup337: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup338: parachain_staking::pallet::Error<T>
     **/
    ParachainStakingError: {
        _enum: string[];
    };
    /**
     * Lookup341: frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Inline: string;
            Lookup: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                len: string;
            };
        };
    };
    /**
     * Lookup343: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: string;
                value: string;
            };
            second: {
                proposal: string;
            };
            vote: {
                refIndex: string;
                vote: string;
            };
            emergency_cancel: {
                refIndex: string;
            };
            external_propose: {
                proposal: string;
            };
            external_propose_majority: {
                proposal: string;
            };
            external_propose_default: {
                proposal: string;
            };
            fast_track: {
                proposalHash: string;
                votingPeriod: string;
                delay: string;
            };
            veto_external: {
                proposalHash: string;
            };
            cancel_referendum: {
                refIndex: string;
            };
            delegate: {
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: string;
            clear_public_proposals: string;
            unlock: {
                target: string;
            };
            remove_vote: {
                index: string;
            };
            remove_other_vote: {
                target: string;
                index: string;
            };
            blacklist: {
                proposalHash: string;
                maybeRefIndex: string;
            };
            cancel_proposal: {
                propIndex: string;
            };
        };
    };
    /**
     * Lookup344: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: string[];
    };
    /**
     * Lookup345: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: string;
                prime: string;
                oldCount: string;
            };
            execute: {
                proposal: string;
                lengthBound: string;
            };
            propose: {
                threshold: string;
                proposal: string;
                lengthBound: string;
            };
            vote: {
                proposal: string;
                index: string;
                approve: string;
            };
            close_old_weight: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
            disapprove_proposal: {
                proposalHash: string;
            };
            close: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
        };
    };
    /**
     * Lookup349: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: string;
                value: string;
            };
            remove_voter: string;
            submit_candidacy: {
                candidateCount: string;
            };
            renounce_candidacy: {
                renouncing: string;
            };
            remove_member: {
                who: string;
                slashBond: string;
                rerunElection: string;
            };
            clean_defunct_voters: {
                numVoters: string;
                numDefunct: string;
            };
        };
    };
    /**
     * Lookup350: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: string;
            RunnerUp: string;
            Candidate: string;
        };
    };
    /**
     * Lookup351: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: string;
            };
            remove_member: {
                who: string;
            };
            swap_member: {
                remove: string;
                add: string;
            };
            reset_members: {
                members: string;
            };
            change_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_prime: {
                who: string;
            };
            clear_prime: string;
        };
    };
    /**
     * Lookup353: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
            suspend_xcm_execution: string;
            resume_xcm_execution: string;
            update_suspend_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_drop_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_resume_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_threshold_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_weight_restrict_decay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    /**
     * Lookup354: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                xcmVersion: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup355: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup356: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: string;
    /**
     * Lookup358: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    /**
     * Lookup359: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup362: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    /**
     * Lookup363: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup364: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup365: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup366: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup375: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup376: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
            force_batch: {
                calls: string;
            };
            with_weight: {
                call: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup378: bifrost_kusama_runtime::OriginCaller
     **/
    BifrostKusamaRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            Void: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            Council: string;
            TechnicalCommittee: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            PolkadotXcm: string;
            CumulusXcm: string;
        };
    };
    /**
     * Lookup379: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup380: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: string;
            Member: string;
            _Phantom: string;
        };
    };
    /**
     * Lookup382: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup383: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup384: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup385: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel: {
                when: string;
                index: string;
            };
            schedule_named: {
                id: string;
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel_named: {
                id: string;
            };
            schedule_after: {
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            schedule_named_after: {
                id: string;
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
        };
    };
    /**
     * Lookup387: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            create_pure: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_pure: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    /**
     * Lookup389: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup391: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: string;
            };
            set_identity: {
                info: string;
            };
            set_subs: {
                subs: string;
            };
            clear_identity: string;
            request_judgement: {
                regIndex: string;
                maxFee: string;
            };
            cancel_request: {
                regIndex: string;
            };
            set_fee: {
                index: string;
                fee: string;
            };
            set_account_id: {
                _alias: {
                    new_: string;
                };
                index: string;
                new_: string;
            };
            set_fields: {
                index: string;
                fields: string;
            };
            provide_judgement: {
                regIndex: string;
                target: string;
                judgement: string;
                identity: string;
            };
            kill_identity: {
                target: string;
            };
            add_sub: {
                sub: string;
                data: string;
            };
            rename_sub: {
                sub: string;
                data: string;
            };
            remove_sub: {
                sub: string;
            };
            quit_sub: string;
        };
    };
    /**
     * Lookup392: pallet_identity::types::IdentityInfo<FieldLimit>
     **/
    PalletIdentityIdentityInfo: {
        additional: string;
        display: string;
        legal: string;
        web: string;
        riot: string;
        email: string;
        pgpFingerprint: string;
        image: string;
        twitter: string;
    };
    /**
     * Lookup428: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: number;
        Display: number;
        Legal: number;
        Web: number;
        Riot: number;
        Email: number;
        PgpFingerprint: number;
        Image: number;
        Twitter: number;
    };
    /**
     * Lookup429: pallet_identity::types::IdentityField
     **/
    PalletIdentityIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup430: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: string;
            FeePaid: string;
            Reasonable: string;
            KnownGood: string;
            OutOfDate: string;
            LowQuality: string;
            Erroneous: string;
        };
    };
    /**
     * Lookup431: bifrost_vesting::pallet::Call<T>
     **/
    BifrostVestingCall: {
        _enum: {
            vest: string;
            vest_other: {
                target: string;
            };
            vested_transfer: {
                target: string;
                schedule: string;
            };
            force_vested_transfer: {
                source: string;
                target: string;
                schedule: string;
            };
            force_set_vested: {
                source: string;
                target: string;
                schedule: string;
            };
            init_vesting_start_at: {
                vestingStartAt: string;
            };
            set_vesting_per_block: {
                target: string;
                perBlock: string;
            };
            force_set_cliff: {
                target: string;
                cliffBlock: string;
            };
        };
    };
    /**
     * Lookup432: bifrost_vesting::VestingInfo<Balance, BlockNumber>
     **/
    BifrostVestingVestingInfo: {
        locked: string;
        perBlock: string;
        startingBlock: string;
    };
    /**
     * Lookup433: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: string;
                beneficiary: string;
            };
            reject_proposal: {
                proposalId: string;
            };
            approve_proposal: {
                proposalId: string;
            };
            spend: {
                amount: string;
                beneficiary: string;
            };
            remove_approval: {
                proposalId: string;
            };
        };
    };
    /**
     * Lookup434: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: string;
                description: string;
            };
            approve_bounty: {
                bountyId: string;
            };
            propose_curator: {
                bountyId: string;
                curator: string;
                fee: string;
            };
            unassign_curator: {
                bountyId: string;
            };
            accept_curator: {
                bountyId: string;
            };
            award_bounty: {
                bountyId: string;
                beneficiary: string;
            };
            claim_bounty: {
                bountyId: string;
            };
            close_bounty: {
                bountyId: string;
            };
            extend_bounty_expiry: {
                bountyId: string;
                remark: string;
            };
        };
    };
    /**
     * Lookup435: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: string;
                who: string;
            };
            retract_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            tip_new: {
                reason: string;
                who: string;
                tipValue: string;
            };
            tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                tipValue: string;
            };
            close_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            slash_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup436: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: string;
            };
            unnote_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            request_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            unrequest_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup437: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: string;
                amount: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset: {
                asset: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_with_fee: {
                currencyId: string;
                amount: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset_with_fee: {
                asset: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multicurrencies: {
                currencies: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiassets: {
                assets: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
        };
    };
    /**
     * Lookup438: xcm::VersionedMultiAsset
     **/
    XcmVersionedMultiAsset: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup439: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_all: {
                dest: string;
                currencyId: string;
                keepAlive: string;
            };
            transfer_keep_alive: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                currencyId: string;
                amount: string;
            };
            set_balance: {
                who: string;
                currencyId: string;
                newFree: string;
                newReserved: string;
            };
        };
    };
    /**
     * Lookup440: orml_currencies::module::Call<T>
     **/
    OrmlCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_native_currency: {
                dest: string;
                amount: string;
            };
            update_balance: {
                who: string;
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup442: orml_xcm::module::Call<T>
     **/
    OrmlXcmModuleCall: {
        _enum: {
            send_as_sovereign: {
                dest: string;
                message: string;
            };
        };
    };
    /**
     * Lookup443: zenlink_protocol::pallet::Call<T>
     **/
    ZenlinkProtocolCall: {
        _enum: {
            set_fee_receiver: {
                sendTo: string;
            };
            set_fee_point: {
                feePoint: string;
            };
            transfer: {
                assetId: string;
                recipient: string;
                amount: string;
            };
            create_pair: {
                asset0: string;
                asset1: string;
            };
            add_liquidity: {
                asset0: string;
                asset1: string;
                amount0Desired: string;
                amount1Desired: string;
                amount0Min: string;
                amount1Min: string;
                deadline: string;
            };
            remove_liquidity: {
                asset0: string;
                asset1: string;
                liquidity: string;
                amount0Min: string;
                amount1Min: string;
                recipient: string;
                deadline: string;
            };
            swap_exact_assets_for_assets: {
                amountIn: string;
                amountOutMin: string;
                path: string;
                recipient: string;
                deadline: string;
            };
            swap_assets_for_exact_assets: {
                amountOut: string;
                amountInMax: string;
                path: string;
                recipient: string;
                deadline: string;
            };
            bootstrap_create: {
                asset0: string;
                asset1: string;
                targetSupply0: string;
                targetSupply1: string;
                capacitySupply0: string;
                capacitySupply1: string;
                end: string;
                rewards: string;
                limits: string;
            };
            bootstrap_contribute: {
                asset0: string;
                asset1: string;
                amount0Contribute: string;
                amount1Contribute: string;
                deadline: string;
            };
            bootstrap_claim: {
                recipient: string;
                asset0: string;
                asset1: string;
                deadline: string;
            };
            bootstrap_end: {
                asset0: string;
                asset1: string;
            };
            bootstrap_update: {
                asset0: string;
                asset1: string;
                targetSupply0: string;
                targetSupply1: string;
                capacitySupply0: string;
                capacitySupply1: string;
                end: string;
                rewards: string;
                limits: string;
            };
            bootstrap_refund: {
                asset0: string;
                asset1: string;
            };
            bootstrap_charge_reward: {
                asset0: string;
                asset1: string;
                chargeRewards: string;
            };
            bootstrap_withdraw_reward: {
                asset0: string;
                asset1: string;
                recipient: string;
            };
        };
    };
    /**
     * Lookup445: merkle_distributor::pallet::Call<T>
     **/
    MerkleDistributorCall: {
        _enum: {
            add_to_create_whitelist: {
                account: string;
            };
            remove_from_create_whitelist: {
                account: string;
            };
            create_merkle_distributor: {
                merkleRoot: string;
                description: string;
                distributeCurrency: string;
                distributeAmount: string;
            };
            claim: {
                merkleDistributorId: string;
                index: string;
                account: string;
                amount: string;
                merkleProof: string;
            };
            charge: {
                merkleDistributorId: string;
            };
            emergency_withdraw: {
                merkleDistributorId: string;
                recipient: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup446: zenlink_stable_amm::pallet::Call<T>
     **/
    ZenlinkStableAmmCall: {
        _enum: {
            create_base_pool: {
                currencyIds: string;
                currencyDecimals: string;
                a: string;
                fee: string;
                adminFee: string;
                adminFeeReceiver: string;
                lpCurrencySymbol: string;
            };
            create_meta_pool: {
                currencyIds: string;
                currencyDecimals: string;
                a: string;
                fee: string;
                adminFee: string;
                adminFeeReceiver: string;
                lpCurrencySymbol: string;
            };
            add_liquidity: {
                poolId: string;
                amounts: string;
                minMintAmount: string;
                to: string;
                deadline: string;
            };
            swap: {
                pooId: string;
                fromIndex: string;
                toIndex: string;
                inAmount: string;
                minOutAmount: string;
                to: string;
                deadline: string;
            };
            remove_liquidity: {
                pooId: string;
                lpAmount: string;
                minAmounts: string;
                to: string;
                deadline: string;
            };
            remove_liquidity_one_currency: {
                pooId: string;
                lpAmount: string;
                index: string;
                minAmount: string;
                to: string;
                deadline: string;
            };
            remove_liquidity_imbalance: {
                poolId: string;
                amounts: string;
                maxBurnAmount: string;
                to: string;
                deadline: string;
            };
            add_pool_and_base_pool_liquidity: {
                poolId: string;
                basePoolId: string;
                metaAmounts: string;
                baseAmounts: string;
                minToMint: string;
                to: string;
                deadline: string;
            };
            remove_pool_and_base_pool_liquidity: {
                poolId: string;
                basePoolId: string;
                amount: string;
                minAmountsMeta: string;
                minAmountsBase: string;
                to: string;
                deadline: string;
            };
            remove_pool_and_base_pool_liquidity_one_currency: {
                poolId: string;
                basePoolId: string;
                amount: string;
                i: string;
                minAmount: string;
                to: string;
                deadline: string;
            };
            swap_pool_from_base: {
                poolId: string;
                basePoolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            swap_pool_to_base: {
                poolId: string;
                basePoolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            swap_meta_pool_underlying: {
                poolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            update_fee_receiver: {
                poolId: string;
                feeReceiver: string;
            };
            set_swap_fee: {
                poolId: string;
                newSwapFee: string;
            };
            set_admin_fee: {
                poolId: string;
                newAdminFee: string;
            };
            ramp_a: {
                poolId: string;
                futureA: string;
                futureATime: string;
            };
            stop_ramp_a: {
                poolId: string;
            };
            withdraw_admin_fee: {
                poolId: string;
            };
        };
    };
    /**
     * Lookup447: zenlink_swap_router::pallet::Call<T>
     **/
    ZenlinkSwapRouterCall: {
        _enum: {
            swap_exact_token_for_tokens_through_stable_pool: {
                amountIn: string;
                amountOutMin: string;
                routes: string;
                to: string;
                deadline: string;
            };
        };
    };
    /**
     * Lookup449: zenlink_swap_router::Route<PoolId, node_primitives::currency::CurrencyId, zenlink_protocol::primitives::AssetId>
     **/
    ZenlinkSwapRouterRoute: {
        _enum: {
            Stable: string;
            Normal: string;
        };
    };
    /**
     * Lookup450: zenlink_swap_router::StablePath<PoolId, node_primitives::currency::CurrencyId>
     **/
    ZenlinkSwapRouterStablePath: {
        poolId: string;
        basePoolId: string;
        mode: string;
        fromCurrency: string;
        toCurrency: string;
    };
    /**
     * Lookup451: zenlink_swap_router::StableSwapMode
     **/
    ZenlinkSwapRouterStableSwapMode: {
        _enum: string[];
    };
    /**
     * Lookup452: bifrost_flexible_fee::pallet::Call<T>
     **/
    BifrostFlexibleFeeCall: {
        _enum: {
            set_user_default_fee_currency: {
                maybeFeeCurrency: string;
            };
            set_universal_fee_currency_order_list: {
                defaultList: string;
            };
            remove_from_user_fee_charge_order_list: string;
        };
    };
    /**
     * Lookup455: bifrost_salp::pallet::Call<T>
     **/
    BifrostSalpCall: {
        _enum: {
            set_multisig_confirm_account: {
                account: string;
            };
            fund_success: {
                index: string;
            };
            fund_fail: {
                index: string;
            };
            continue_fund: {
                index: string;
                firstSlot: string;
                lastSlot: string;
            };
            fund_retire: {
                index: string;
            };
            fund_end: {
                index: string;
            };
            create: {
                index: string;
                cap: string;
                firstSlot: string;
                lastSlot: string;
            };
            edit: {
                index: string;
                cap: string;
                raised: string;
                firstSlot: string;
                lastSlot: string;
                fundStatus: string;
            };
            contribute: {
                index: string;
                value: string;
            };
            confirm_contribute: {
                who: string;
                index: string;
                isSuccess: string;
                messageId: string;
            };
            unlock: {
                who: string;
                index: string;
            };
            unlock_by_vsbond: {
                who: string;
                vsbond: string;
            };
            unlock_vstoken: {
                who: string;
            };
            batch_unlock: {
                index: string;
            };
            withdraw: {
                index: string;
            };
            refund: {
                index: string;
                firstSlot: string;
                lastSlot: string;
                value: string;
            };
            redeem: {
                index: string;
                value: string;
            };
            dissolve_refunded: {
                index: string;
                firstSlot: string;
                lastSlot: string;
            };
            dissolve: {
                index: string;
            };
            buyback: {
                value: string;
            };
            confirm_contribution: {
                queryId: string;
                response: string;
            };
        };
    };
    /**
     * Lookup457: bifrost_salp::FundStatus
     **/
    BifrostSalpFundStatus: {
        _enum: string[];
    };
    /**
     * Lookup458: bifrost_liquidity_mining::pallet::Call<T, I>
     **/
    BifrostLiquidityMiningCall: {
        _enum: {
            create_single_token_pool: {
                token: string;
                mainReward: string;
                optionRewards: string;
                duration: string;
                minDepositToStart: string;
                afterBlockToStart: string;
                redeemLimitTime: string;
                unlockLimitNums: string;
            };
            create_mining_pool: {
                tradingPair: string;
                mainReward: string;
                optionRewards: string;
                duration: string;
                minDepositToStart: string;
                afterBlockToStart: string;
                redeemLimitTime: string;
                unlockLimitNums: string;
            };
            create_farming_pool: {
                index: string;
                firstSlot: string;
                lastSlot: string;
                mainReward: string;
                optionRewards: string;
                duration: string;
                minDepositToStart: string;
                afterBlockToStart: string;
                redeemLimitTime: string;
                unlockLimitNums: string;
            };
            create_eb_farming_pool: {
                index: string;
                firstSlot: string;
                lastSlot: string;
                mainReward: string;
                optionRewards: string;
                duration: string;
                minDepositToStart: string;
                afterBlockToStart: string;
            };
            charge: {
                pid: string;
            };
            kill_pool: {
                pid: string;
            };
            force_retire_pool: {
                pid: string;
            };
            edit_pool: {
                pid: string;
                redeemLimitTime: string;
                unlockLimitNums: string;
            };
            deposit: {
                pid: string;
                value: string;
            };
            redeem: {
                pid: string;
                value: string;
            };
            redeem_all: {
                pid: string;
            };
            volunteer_to_redeem: {
                pid: string;
                account: string;
            };
            claim: {
                pid: string;
            };
            unlock: {
                pid: string;
            };
            cancel_unlock: {
                pid: string;
                index: string;
            };
            lazy_migration_v2_0_0: {
                maxNums: string;
            };
        };
    };
    /**
     * Lookup461: bifrost_token_issuer::pallet::Call<T>
     **/
    BifrostTokenIssuerCall: {
        _enum: {
            add_to_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            add_to_transfer_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_transfer_whitelist: {
                currencyId: string;
                account: string;
            };
            issue: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup462: bifrost_lightening_redeem::pallet::Call<T>
     **/
    BifrostLighteningRedeemCall: {
        _enum: {
            add_ksm_to_pool: {
                tokenAmount: string;
            };
            exchange_for_ksm: {
                tokenAmount: string;
            };
            edit_exchange_price: {
                price: string;
            };
            edit_release_per_day: {
                amountPerDay: string;
            };
            edit_release_start_and_end_block: {
                start: string;
                end: string;
            };
        };
    };
    /**
     * Lookup463: bifrost_salp_lite::pallet::Call<T>
     **/
    BifrostSalpLiteCall: {
        _enum: {
            set_multisig_confirm_account: {
                account: string;
            };
            fund_success: {
                index: string;
            };
            fund_fail: {
                index: string;
            };
            fund_retire: {
                index: string;
            };
            create: {
                index: string;
                cap: string;
                firstSlot: string;
                lastSlot: string;
            };
            issue: {
                who: string;
                index: string;
                value: string;
                messageId: string;
            };
            withdraw: {
                index: string;
            };
            redeem: {
                index: string;
                value: string;
            };
            dissolve: {
                index: string;
            };
            continue_fund: {
                index: string;
                firstSlot: string;
                lastSlot: string;
            };
            refund: {
                index: string;
                firstSlot: string;
                lastSlot: string;
                value: string;
            };
            dissolve_refunded: {
                index: string;
                firstSlot: string;
                lastSlot: string;
            };
            edit: {
                index: string;
                cap: string;
                raised: string;
                firstSlot: string;
                lastSlot: string;
                fundStatus: string;
            };
        };
    };
    /**
     * Lookup465: bifrost_salp_lite::FundStatus
     **/
    BifrostSalpLiteFundStatus: {
        _enum: string[];
    };
    /**
     * Lookup466: bifrost_call_switchgear::pallet::Call<T>
     **/
    BifrostCallSwitchgearCall: {
        _enum: {
            switchoff_transaction: {
                palletName: string;
                functionName: string;
            };
            switchon_transaction: {
                palletName: string;
                functionName: string;
            };
            disable_transfers: {
                currencyId: string;
            };
            enable_transfers: {
                currencyId: string;
            };
        };
    };
    /**
     * Lookup467: bifrost_vsbond_auction::pallet::Call<T, I>
     **/
    BifrostVsbondAuctionCall: {
        _enum: {
            create_order: {
                index: string;
                tokenSymbol: string;
                firstSlot: string;
                lastSlot: string;
                amount: string;
                totalPrice: string;
                orderType: string;
            };
            revoke_order: {
                orderId: string;
            };
            force_revoke: {
                orderId: string;
            };
            clinch_order: {
                orderId: string;
            };
            partial_clinch_order: {
                orderId: string;
                quantity: string;
            };
            set_buy_and_sell_transaction_fee_rate: {
                buyRate: string;
                sellRate: string;
            };
        };
    };
    /**
     * Lookup468: bifrost_asset_registry::pallet::Call<T>
     **/
    BifrostAssetRegistryCall: {
        _enum: {
            register_native_asset: {
                currencyId: string;
                location: string;
                metadata: string;
            };
            update_native_asset: {
                currencyId: string;
                location: string;
                metadata: string;
            };
            register_token_metadata: {
                metadata: string;
            };
            register_vtoken_metadata: {
                tokenId: string;
            };
            register_vstoken_metadata: {
                tokenId: string;
            };
            register_vsbond_metadata: {
                tokenId: string;
                paraId: string;
                firstSlot: string;
                lastSlot: string;
            };
            register_multilocation: {
                currencyId: string;
                location: string;
                weight: string;
            };
            force_set_multilocation: {
                currencyId: string;
                location: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup469: bifrost_vtoken_minting::pallet::Call<T>
     **/
    BifrostVtokenMintingCall: {
        _enum: {
            mint: {
                tokenId: string;
                tokenAmount: string;
            };
            redeem: {
                vtokenId: string;
                vtokenAmount: string;
            };
            rebond: {
                tokenId: string;
                tokenAmount: string;
            };
            rebond_by_unlock_id: {
                tokenId: string;
                unlockId: string;
            };
            set_unlock_duration: {
                tokenId: string;
                unlockDuration: string;
            };
            set_minimum_mint: {
                tokenId: string;
                amount: string;
            };
            set_minimum_redeem: {
                tokenId: string;
                amount: string;
            };
            add_support_rebond_token: {
                tokenId: string;
            };
            remove_support_rebond_token: {
                tokenId: string;
            };
            set_fees: {
                mintFee: string;
                redeemFee: string;
            };
            set_hook_iteration_limit: {
                limit: string;
            };
            set_unlocking_total: {
                tokenId: string;
                amount: string;
            };
            set_min_time_unit: {
                tokenId: string;
                timeUnit: string;
            };
        };
    };
    /**
     * Lookup470: bifrost_slp::pallet::Call<T>
     **/
    BifrostSlpCall: {
        _enum: {
            initialize_delegator: {
                currencyId: string;
                delegatorLocation: string;
            };
            bond: {
                currencyId: string;
                who: string;
                amount: string;
                validator: string;
            };
            bond_extra: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
            };
            unbond: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
            };
            unbond_all: {
                currencyId: string;
                who: string;
            };
            rebond: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
            };
            delegate: {
                currencyId: string;
                who: string;
                targets: string;
            };
            undelegate: {
                currencyId: string;
                who: string;
                targets: string;
            };
            redelegate: {
                currencyId: string;
                who: string;
                targets: string;
            };
            payout: {
                currencyId: string;
                who: string;
                validator: string;
                when: string;
            };
            liquidize: {
                currencyId: string;
                who: string;
                when: string;
                validator: string;
                amount: string;
            };
            chill: {
                currencyId: string;
                who: string;
            };
            transfer_back: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            transfer_to: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            convert_asset: {
                currencyId: string;
                who: string;
                amount: string;
                ifFromCurrency: string;
            };
            increase_token_pool: {
                currencyId: string;
                amount: string;
            };
            decrease_token_pool: {
                currencyId: string;
                amount: string;
            };
            update_ongoing_time_unit: {
                currencyId: string;
                timeUnit: string;
            };
            refund_currency_due_unbond: {
                currencyId: string;
            };
            supplement_fee_reserve: {
                currencyId: string;
                dest: string;
            };
            charge_host_fee_and_tune_vtoken_exchange_rate: {
                currencyId: string;
                value: string;
                who: string;
            };
            set_xcm_dest_weight_and_fee: {
                currencyId: string;
                operation: string;
                weightAndFee: string;
            };
            set_operate_origin: {
                currencyId: string;
                who: string;
            };
            set_fee_source: {
                currencyId: string;
                whoAndFee: string;
            };
            add_delegator: {
                currencyId: string;
                index: string;
                who: string;
            };
            remove_delegator: {
                currencyId: string;
                who: string;
            };
            add_validator: {
                currencyId: string;
                who: string;
            };
            remove_validator: {
                currencyId: string;
                who: string;
            };
            set_validators_by_delegator: {
                currencyId: string;
                who: string;
                validators: string;
            };
            set_delegator_ledger: {
                currencyId: string;
                who: string;
                ledger: string;
            };
            set_minimums_and_maximums: {
                currencyId: string;
                constraints: string;
            };
            set_currency_delays: {
                currencyId: string;
                maybeDelays: string;
            };
            set_hosting_fees: {
                currencyId: string;
                maybeFeeSet: string;
            };
            set_currency_tune_exchange_rate_limit: {
                currencyId: string;
                maybeTuneExchangeRateLimit: string;
            };
            set_ongoing_time_unit_update_interval: {
                currencyId: string;
                maybeInterval: string;
            };
            add_supplement_fee_account_to_whitelist: {
                currencyId: string;
                who: string;
            };
            remove_supplement_fee_account_from_whitelist: {
                currencyId: string;
                who: string;
            };
            confirm_delegator_ledger_query_response: {
                currencyId: string;
                queryId: string;
            };
            fail_delegator_ledger_query_response: {
                currencyId: string;
                queryId: string;
            };
            confirm_validators_by_delegator_query_response: {
                currencyId: string;
                queryId: string;
            };
            fail_validators_by_delegator_query_response: {
                currencyId: string;
                queryId: string;
            };
            confirm_delegator_ledger: {
                queryId: string;
                response: string;
            };
            confirm_validators_by_delegator: {
                queryId: string;
                response: string;
            };
            reset_validators: {
                currencyId: string;
                validatorList: string;
            };
            set_validator_boost_list: {
                currencyId: string;
                validatorList: string;
            };
            add_to_validator_boost_list: {
                currencyId: string;
                who: string;
            };
            remove_from_validator_boot_list: {
                currencyId: string;
                who: string;
            };
        };
    };
    /**
     * Lookup472: xcm_interface::pallet::Call<T>
     **/
    XcmInterfaceCall: {
        _enum: {
            update_xcm_dest_weight_and_fee: {
                updates: string;
            };
            transfer_statemine_assets: {
                amount: string;
                assetId: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup475: bifrost_vstoken_conversion::pallet::Call<T>
     **/
    BifrostVstokenConversionCall: {
        _enum: {
            vsbond_convert_to_vstoken: {
                vsBondCurrencyId: string;
                vsbondAmount: string;
                minimumVstoken: string;
            };
            vstoken_convert_to_vsbond: {
                currencyId: string;
                vstokenAmount: string;
                minimumVsbond: string;
            };
            set_exchange_fee: {
                exchangeFee: string;
            };
            set_exchange_rate: {
                lease: string;
                exchangeRate: string;
            };
            set_relaychain_lease: {
                lease: string;
            };
        };
    };
    /**
     * Lookup476: bifrost_farming::pallet::Call<T>
     **/
    BifrostFarmingCall: {
        _enum: {
            create_farming_pool: {
                tokensProportion: string;
                basicRewards: string;
                gaugeInit: string;
                minDepositToStart: string;
                afterBlockToStart: string;
                withdrawLimitTime: string;
                claimLimitTime: string;
                withdrawLimitCount: string;
            };
            charge: {
                pid: string;
                rewards: string;
            };
            deposit: {
                pid: string;
                addValue: string;
                gaugeInfo: string;
            };
            withdraw: {
                pid: string;
                removeValue: string;
            };
            claim: {
                pid: string;
            };
            withdraw_claim: {
                pid: string;
            };
            force_retire_pool: {
                pid: string;
            };
            set_retire_limit: {
                limit: string;
            };
            close_pool: {
                pid: string;
            };
            reset_pool: {
                pid: string;
                basicRewards: string;
                minDepositToStart: string;
                afterBlockToStart: string;
                withdrawLimitTime: string;
                claimLimitTime: string;
                withdrawLimitCount: string;
                gaugeInit: string;
            };
            kill_pool: {
                pid: string;
            };
            edit_pool: {
                pid: string;
                basicRewards: string;
                withdrawLimitTime: string;
                claimLimitTime: string;
                gaugeBasicRewards: string;
                withdrawLimitCount: string;
            };
            gauge_withdraw: {
                gid: string;
            };
            force_gauge_claim: {
                gid: string;
            };
            add_boost_pool_whitelist: {
                whitelist: string;
            };
            set_next_round_whitelist: {
                whitelist: string;
            };
            vote: {
                voteList: string;
            };
            start_boost_round: {
                roundLength: string;
            };
            end_boost_round: string;
            charge_boost: {
                rewards: string;
            };
        };
    };
    /**
     * Lookup483: bifrost_system_staking::pallet::Call<T>
     **/
    BifrostSystemStakingCall: {
        _enum: {
            token_config: {
                token: string;
                execDelay: string;
                systemStakableFarmingRate: string;
                addOrSub: string;
                systemStakableBase: string;
                farmingPoolids: string;
                lptokenRates: string;
            };
            delete_token: {
                token: string;
            };
            refresh_token_info: {
                token: string;
            };
            payout: {
                token: string;
            };
        };
    };
    /**
     * Lookup488: bifrost_system_maker::pallet::Call<T>
     **/
    BifrostSystemMakerCall: {
        _enum: {
            set_config: {
                currencyId: string;
                info: string;
            };
            charge: {
                currencyId: string;
                value: string;
            };
            close: {
                currencyId: string;
            };
            payout: {
                currencyId: string;
                value: string;
            };
        };
    };
    /**
     * Lookup489: bifrost_fee_share::pallet::Call<T>
     **/
    BifrostFeeShareCall: {
        _enum: {
            create_distribution: {
                tokenType: string;
                tokensProportion: string;
                ifAuto: string;
            };
            edit_distribution: {
                distributionId: string;
                tokenType: string;
                tokensProportion: string;
                ifAuto: string;
            };
            set_era_length: {
                eraLength: string;
            };
            execute_distribute: {
                distributionId: string;
            };
            delete_distribution: {
                distributionId: string;
            };
        };
    };
    /**
     * Lookup492: bifrost_cross_in_out::pallet::Call<T>
     **/
    BifrostCrossInOutCall: {
        _enum: {
            cross_in: {
                location: string;
                currencyId: string;
                amount: string;
                remark: string;
            };
            cross_out: {
                currencyId: string;
                amount: string;
            };
            register_linked_account: {
                currencyId: string;
                who: string;
                foreignLocation: string;
            };
            change_outer_linked_account: {
                currencyId: string;
                foreignLocation: string;
                account: string;
            };
            register_currency_for_cross_in_out: {
                currencyId: string;
            };
            deregister_currency_for_cross_in_out: {
                currencyId: string;
            };
            add_to_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            add_to_register_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_register_whitelist: {
                currencyId: string;
                account: string;
            };
            set_crossing_minimum_amount: {
                currencyId: string;
                crossInMinimum: string;
                crossOutMinimum: string;
            };
        };
    };
    /**
     * Lookup497: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: string;
            Finished: {
                approved: string;
                end: string;
            };
        };
    };
    /**
     * Lookup498: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: string;
        proposal: string;
        threshold: string;
        delay: string;
        tally: string;
    };
    /**
     * Lookup499: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: string;
        nays: string;
        turnout: string;
    };
    /**
     * Lookup500: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: string;
                delegations: string;
                prior: string;
            };
            Delegating: {
                balance: string;
                target: string;
                conviction: string;
                delegations: string;
                prior: string;
            };
        };
    };
    /**
     * Lookup504: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup505: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: string;
    /**
     * Lookup508: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: string[];
    };
    /**
     * Lookup510: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    /**
     * Lookup511: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup515: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup516: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup517: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: string[];
    };
    /**
     * Lookup519: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: string[];
    };
    /**
     * Lookup523: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup524: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup527: polkadot_parachain::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup530: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup531: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup533: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: string;
        dropThreshold: string;
        resumeThreshold: string;
        thresholdWeight: string;
        weightRestrictDecay: string;
        xcmpMaxIndividualWeight: string;
    };
    /**
     * Lookup535: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup536: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeMatchQuerier: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    /**
     * Lookup540: xcm::VersionedResponse
     **/
    XcmVersionedResponse: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup546: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    /**
     * Lookup548: xcm::VersionedAssetId
     **/
    XcmVersionedAssetId: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup549: pallet_xcm::pallet::RemoteLockedFungibleRecord
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: string;
        owner: string;
        locker: string;
        users: string;
    };
    /**
     * Lookup553: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup554: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup555: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup556: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup559: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup560: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup563: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<bifrost_kusama_runtime::RuntimeCall>, BlockNumber, bifrost_kusama_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup565: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup568: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, bifrost_kusama_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup572: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup574: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup576: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup578: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup579: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup587: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup589: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup590: bifrost_vesting::pallet::Error<T>
     **/
    BifrostVestingError: {
        _enum: string[];
    };
    /**
     * Lookup591: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup593: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup594: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: string;
        value: string;
        fee: string;
        curatorDeposit: string;
        bond: string;
        status: string;
    };
    /**
     * Lookup595: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: string;
            Approved: string;
            Funded: string;
            CuratorProposed: {
                curator: string;
            };
            Active: {
                curator: string;
                updateDue: string;
            };
            PendingPayout: {
                curator: string;
                beneficiary: string;
                unlockAt: string;
            };
        };
    };
    /**
     * Lookup597: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: string[];
    };
    /**
     * Lookup598: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: string;
        who: string;
        finder: string;
        deposit: string;
        closes: string;
        tips: string;
        findersFee: string;
    };
    /**
     * Lookup599: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: string[];
    };
    /**
     * Lookup600: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: string;
                len: string;
            };
            Requested: {
                deposit: string;
                count: string;
                len: string;
            };
        };
    };
    /**
     * Lookup604: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup605: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup608: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: string;
        amount: string;
    };
    /**
     * Lookup610: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: string;
        reserved: string;
        frozen: string;
    };
    /**
     * Lookup612: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup614: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup615: orml_currencies::module::Error<T>
     **/
    OrmlCurrenciesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup618: orml_unknown_tokens::module::Error<T>
     **/
    OrmlUnknownTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup619: orml_xcm::module::Error<T>
     **/
    OrmlXcmModuleError: {
        _enum: string[];
    };
    /**
     * Lookup626: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairStatus: {
        _enum: {
            Trading: string;
            Bootstrap: string;
            Disable: string;
        };
    };
    /**
     * Lookup627: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairMetadata: {
        pairAccount: string;
        totalSupply: string;
    };
    /**
     * Lookup628: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesBootstrapParameter: {
        targetSupply: string;
        capacitySupply: string;
        accumulatedSupply: string;
        endBlockNumber: string;
        pairAccount: string;
    };
    /**
     * Lookup632: zenlink_protocol::pallet::Error<T>
     **/
    ZenlinkProtocolError: {
        _enum: string[];
    };
    /**
     * Lookup633: merkle_distributor::MerkleMetadata<Balance, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    MerkleDistributorMerkleMetadata: {
        merkleRoot: string;
        description: string;
        distributeCurrency: string;
        distributeAmount: string;
        distributeHolder: string;
        charged: string;
    };
    /**
     * Lookup636: merkle_distributor::pallet::Error<T>
     **/
    MerkleDistributorError: {
        _enum: string[];
    };
    /**
     * Lookup637: zenlink_stable_amm::primitives::Pool<PoolId, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesPool: {
        _enum: {
            Base: string;
            Meta: string;
        };
    };
    /**
     * Lookup638: zenlink_stable_amm::primitives::BasePool<node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesBasePool: {
        currencyIds: string;
        lpCurrencyId: string;
        tokenMultipliers: string;
        balances: string;
        fee: string;
        adminFee: string;
        initialA: string;
        futureA: string;
        initialATime: string;
        futureATime: string;
        account: string;
        adminFeeReceiver: string;
        lpCurrencySymbol: string;
        lpCurrencyDecimal: string;
    };
    /**
     * Lookup639: zenlink_stable_amm::primitives::MetaPool<PoolId, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesMetaPool: {
        basePoolId: string;
        baseVirtualPrice: string;
        baseCacheLastUpdated: string;
        baseCurrencies: string;
        info: string;
    };
    /**
     * Lookup640: zenlink_stable_amm::pallet::Error<T>
     **/
    ZenlinkStableAmmError: {
        _enum: string[];
    };
    /**
     * Lookup641: zenlink_swap_router::pallet::Error<T>
     **/
    ZenlinkSwapRouterError: {
        _enum: string[];
    };
    /**
     * Lookup642: bifrost_flexible_fee::pallet::Error<T>
     **/
    BifrostFlexibleFeeError: {
        _enum: string[];
    };
    /**
     * Lookup645: bifrost_salp::FundInfo<Balance, LeasePeriod>
     **/
    BifrostSalpFundInfo: {
        raised: string;
        cap: string;
        firstSlot: string;
        lastSlot: string;
        trieIndex: string;
        status: string;
    };
    /**
     * Lookup647: bifrost_salp::pallet::Error<T>
     **/
    BifrostSalpError: {
        _enum: string[];
    };
    /**
     * Lookup649: bifrost_liquidity_mining::PoolInfo<sp_core::crypto::AccountId32, BalanceOf, BlockNumberOf>
     **/
    BifrostLiquidityMiningPoolInfo: {
        _alias: {
            r_type: string;
        };
        poolId: string;
        keeper: string;
        investor: string;
        tradingPair: string;
        duration: string;
        r_type: string;
        minDepositToStart: string;
        afterBlockToStart: string;
        deposit: string;
        rewards: string;
        updateB: string;
        state: string;
        blockStartup: string;
        blockRetired: string;
        redeemLimitTime: string;
        unlockLimitNums: string;
        pendingUnlockNums: string;
    };
    /**
     * Lookup651: bifrost_liquidity_mining::RewardData<BalanceOf>
     **/
    BifrostLiquidityMiningRewardData: {
        total: string;
        perBlock: string;
        claimed: string;
        gainAvg: string;
    };
    /**
     * Lookup654: bifrost_liquidity_mining::PoolState
     **/
    BifrostLiquidityMiningPoolState: {
        _enum: string[];
    };
    /**
     * Lookup655: bifrost_liquidity_mining::DepositData<BalanceOf, BlockNumberOf>
     **/
    BifrostLiquidityMiningDepositData: {
        deposit: string;
        gainAvgs: string;
        updateB: string;
        pendingUnlocks: string;
    };
    /**
     * Lookup661: bifrost_liquidity_mining::StorageVersion
     **/
    BifrostLiquidityMiningStorageVersion: {
        _enum: string[];
    };
    /**
     * Lookup662: bifrost_liquidity_mining::pallet::Error<T, I>
     **/
    BifrostLiquidityMiningError: {
        _enum: string[];
    };
    /**
     * Lookup664: bifrost_token_issuer::pallet::Error<T>
     **/
    BifrostTokenIssuerError: {
        _enum: string[];
    };
    /**
     * Lookup665: bifrost_lightening_redeem::pallet::Error<T>
     **/
    BifrostLighteningRedeemError: {
        _enum: string[];
    };
    /**
     * Lookup667: bifrost_salp_lite::FundInfo<Balance, LeasePeriod>
     **/
    BifrostSalpLiteFundInfo: {
        raised: string;
        cap: string;
        firstSlot: string;
        lastSlot: string;
        trieIndex: string;
        status: string;
    };
    /**
     * Lookup668: bifrost_salp_lite::pallet::Error<T>
     **/
    BifrostSalpLiteError: {
        _enum: string[];
    };
    /**
     * Lookup669: bifrost_call_switchgear::pallet::Error<T>
     **/
    BifrostCallSwitchgearError: {
        _enum: string[];
    };
    /**
     * Lookup673: bifrost_vsbond_auction::OrderInfo<sp_core::crypto::AccountId32, BalanceOf>
     **/
    BifrostVsbondAuctionOrderInfo: {
        owner: string;
        vsbond: string;
        amount: string;
        remain: string;
        totalPrice: string;
        remainPrice: string;
        orderId: string;
        orderType: string;
    };
    /**
     * Lookup675: bifrost_vsbond_auction::pallet::Error<T, I>
     **/
    BifrostVsbondAuctionError: {
        _enum: string[];
    };
    /**
     * Lookup676: bifrost_asset_registry::pallet::Error<T>
     **/
    BifrostAssetRegistryError: {
        _enum: string[];
    };
    /**
     * Lookup684: bifrost_vtoken_minting::pallet::Error<T>
     **/
    BifrostVtokenMintingError: {
        _enum: string[];
    };
    /**
     * Lookup693: bifrost_slp::pallet::Error<T>
     **/
    BifrostSlpError: {
        _enum: string[];
    };
    /**
     * Lookup694: xcm_interface::pallet::Error<T>
     **/
    XcmInterfaceError: {
        _enum: string[];
    };
    /**
     * Lookup695: bifrost_vstoken_conversion::pallet::Error<T>
     **/
    BifrostVstokenConversionError: {
        _enum: string[];
    };
    /**
     * Lookup696: bifrost_farming::rewards::PoolInfo<BalanceOf, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
     **/
    BifrostFarmingRewardsPoolInfo: {
        tokensProportion: string;
        basicToken: string;
        totalShares: string;
        basicRewards: string;
        rewards: string;
        state: string;
        keeper: string;
        rewardIssuer: string;
        gauge: string;
        blockStartup: string;
        minDepositToStart: string;
        afterBlockToStart: string;
        withdrawLimitTime: string;
        claimLimitTime: string;
        withdrawLimitCount: string;
    };
    /**
     * Lookup702: bifrost_farming::rewards::PoolState
     **/
    BifrostFarmingRewardsPoolState: {
        _enum: string[];
    };
    /**
     * Lookup703: bifrost_farming::gauge::GaugePoolInfo<BalanceOf, node_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
     **/
    BifrostFarmingGaugeGaugePoolInfo: {
        pid: string;
        token: string;
        keeper: string;
        rewardIssuer: string;
        rewards: string;
        gaugeBasicRewards: string;
        maxBlock: string;
        gaugeAmount: string;
        totalTimeFactor: string;
        gaugeState: string;
        gaugeLastBlock: string;
    };
    /**
     * Lookup708: bifrost_farming::gauge::GaugeState
     **/
    BifrostFarmingGaugeGaugeState: {
        _enum: string[];
    };
    /**
     * Lookup709: bifrost_farming::gauge::GaugeInfo<BalanceOf, BlockNumberFor, sp_core::crypto::AccountId32>
     **/
    BifrostFarmingGaugeGaugeInfo: {
        who: string;
        gaugeAmount: string;
        totalTimeFactor: string;
        latestTimeFactor: string;
        claimedTimeFactor: string;
        gaugeStartBlock: string;
        gaugeStopBlock: string;
        gaugeLastBlock: string;
        lastClaimBlock: string;
    };
    /**
     * Lookup710: bifrost_farming::rewards::ShareInfo<BalanceOf, node_primitives::currency::CurrencyId, BlockNumberFor, sp_core::crypto::AccountId32>
     **/
    BifrostFarmingRewardsShareInfo: {
        who: string;
        share: string;
        withdrawnRewards: string;
        claimLastBlock: string;
        withdrawList: string;
    };
    /**
     * Lookup711: bifrost_farming::boost::BoostPoolInfo<Balance, BlockNumber>
     **/
    BifrostFarmingBoostBoostPoolInfo: {
        totalVotes: string;
        startRound: string;
        endRound: string;
        roundLength: string;
    };
    /**
     * Lookup712: bifrost_farming::boost::UserBoostInfo<T>
     **/
    BifrostFarmingBoostUserBoostInfo: {
        voteAmount: string;
        voteList: string;
        lastVote: string;
    };
    /**
     * Lookup715: bifrost_farming::pallet::Error<T>
     **/
    BifrostFarmingError: {
        _enum: string[];
    };
    /**
     * Lookup716: bifrost_system_staking::types::RoundInfo<BlockNumber>
     **/
    BifrostSystemStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup717: bifrost_system_staking::types::TokenInfo<Balance>
     **/
    BifrostSystemStakingTokenInfo: {
        farmingStakingAmount: string;
        systemStakableAmount: string;
        systemShadowAmount: string;
        pendingRedeemAmount: string;
        currentConfig: string;
        newConfig: string;
    };
    /**
     * Lookup718: bifrost_system_staking::types::TokenConfig<Balance>
     **/
    BifrostSystemStakingTokenConfig: {
        execDelay: string;
        systemStakableFarmingRate: string;
        lptokenRates: string;
        addOrSub: string;
        systemStakableBase: string;
        farmingPoolids: string;
    };
    /**
     * Lookup720: bifrost_system_staking::pallet::Error<T>
     **/
    BifrostSystemStakingError: {
        _enum: string[];
    };
    /**
     * Lookup721: bifrost_system_maker::pallet::Error<T>
     **/
    BifrostSystemMakerError: {
        _enum: string[];
    };
    /**
     * Lookup722: bifrost_fee_share::pallet::Error<T>
     **/
    BifrostFeeShareError: {
        _enum: string[];
    };
    /**
     * Lookup725: bifrost_cross_in_out::pallet::Error<T>
     **/
    BifrostCrossInOutError: {
        _enum: string[];
    };
    /**
     * Lookup727: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup728: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup730: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup731: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup734: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup735: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup736: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup737: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup740: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup741: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup742: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup743: bifrost_kusama_runtime::Runtime
     **/
    BifrostKusamaRuntimeRuntime: string;
};
export default _default;
