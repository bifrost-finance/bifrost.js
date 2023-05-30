// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BifrostAssetRegistryAssetMetadata, BifrostAssetRegistryCall, BifrostAssetRegistryError, BifrostAssetRegistryEvent, BifrostCallSwitchgearCall, BifrostCallSwitchgearError, BifrostCallSwitchgearEvent, BifrostCrossInOutCall, BifrostCrossInOutError, BifrostCrossInOutEvent, BifrostFarmingBoostBoostPoolInfo, BifrostFarmingBoostUserBoostInfo, BifrostFarmingCall, BifrostFarmingError, BifrostFarmingEvent, BifrostFarmingGaugeGaugeInfo, BifrostFarmingGaugeGaugePoolInfo, BifrostFarmingGaugeGaugeState, BifrostFarmingRewardsPoolInfo, BifrostFarmingRewardsPoolState, BifrostFarmingRewardsShareInfo, BifrostFeeShareCall, BifrostFeeShareError, BifrostFeeShareEvent, BifrostFeeShareInfo, BifrostFlexibleFeeCall, BifrostFlexibleFeeError, BifrostFlexibleFeeEvent, BifrostKusamaRuntimeOriginCaller, BifrostKusamaRuntimeProxyType, BifrostKusamaRuntimeRuntime, BifrostKusamaRuntimeSessionKeys, BifrostLighteningRedeemCall, BifrostLighteningRedeemError, BifrostLighteningRedeemEvent, BifrostLiquidityMiningCall, BifrostLiquidityMiningDepositData, BifrostLiquidityMiningError, BifrostLiquidityMiningEvent, BifrostLiquidityMiningPoolInfo, BifrostLiquidityMiningPoolState, BifrostLiquidityMiningPoolType, BifrostLiquidityMiningRewardData, BifrostLiquidityMiningStorageVersion, BifrostSalpCall, BifrostSalpError, BifrostSalpEvent, BifrostSalpFundInfo, BifrostSalpFundStatus, BifrostSalpLiteCall, BifrostSalpLiteError, BifrostSalpLiteEvent, BifrostSalpLiteFundInfo, BifrostSalpLiteFundStatus, BifrostSlpCall, BifrostSlpError, BifrostSlpEvent, BifrostSlpPrimitivesDelays, BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger, BifrostSlpPrimitivesLedger, BifrostSlpPrimitivesLedgerUpdateEntry, BifrostSlpPrimitivesMinimumsMaximums, BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry, BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation, BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction, BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus, BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger, BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest, BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger, BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger, BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry, BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation, BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry, BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk, BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry, BifrostSlpPrimitivesXcmOperation, BifrostSystemMakerCall, BifrostSystemMakerError, BifrostSystemMakerEvent, BifrostSystemMakerInfo, BifrostSystemStakingCall, BifrostSystemStakingError, BifrostSystemStakingEvent, BifrostSystemStakingRoundInfo, BifrostSystemStakingTokenConfig, BifrostSystemStakingTokenInfo, BifrostTokenIssuerCall, BifrostTokenIssuerError, BifrostTokenIssuerEvent, BifrostVestingCall, BifrostVestingError, BifrostVestingEvent, BifrostVestingVestingInfo, BifrostVsbondAuctionCall, BifrostVsbondAuctionError, BifrostVsbondAuctionEvent, BifrostVsbondAuctionOrderInfo, BifrostVsbondAuctionOrderType, BifrostVstokenConversionCall, BifrostVstokenConversionError, BifrostVstokenConversionEvent, BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee, BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate, BifrostVtokenMintingCall, BifrostVtokenMintingError, BifrostVtokenMintingEvent, CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, MerkleDistributorCall, MerkleDistributorError, MerkleDistributorEvent, MerkleDistributorMerkleMetadata, NodePrimitivesCurrencyAssetIds, NodePrimitivesCurrencyCurrencyId, NodePrimitivesCurrencyTokenSymbol, NodePrimitivesExtraFeeName, NodePrimitivesTimeUnit, OrmlCurrenciesModuleCall, OrmlCurrenciesModuleError, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlUnknownTokensModuleError, OrmlUnknownTokensModuleEvent, OrmlXcmModuleCall, OrmlXcmModuleError, OrmlXcmModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, ParachainStakingBond, ParachainStakingCall, ParachainStakingCandidateBondLessRequest, ParachainStakingCandidateMetadata, ParachainStakingCapacityStatus, ParachainStakingCollatorSnapshot, ParachainStakingCollatorStatus, ParachainStakingDelayedPayout, ParachainStakingDelegationRequestsCancelledScheduledRequest, ParachainStakingDelegationRequestsDelegationAction, ParachainStakingDelegationRequestsScheduledRequest, ParachainStakingDelegations, ParachainStakingDelegator, ParachainStakingDelegatorAdded, ParachainStakingDelegatorStatus, ParachainStakingError, ParachainStakingEvent, ParachainStakingInflationInflationInfo, ParachainStakingParachainBondConfig, ParachainStakingRoundInfo, ParachainStakingSetOrderedSet, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmDoubleEncoded, XcmInterfaceCall, XcmInterfaceError, XcmInterfaceEvent, XcmInterfaceXcmInterfaceOperation, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3VecPalletInfo, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm, ZenlinkProtocolCall, ZenlinkProtocolError, ZenlinkProtocolEvent, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesBootstrapParameter, ZenlinkProtocolPrimitivesPairMetadata, ZenlinkProtocolPrimitivesPairStatus, ZenlinkStableAmmCall, ZenlinkStableAmmError, ZenlinkStableAmmEvent, ZenlinkStableAmmPrimitivesBasePool, ZenlinkStableAmmPrimitivesMetaPool, ZenlinkStableAmmPrimitivesPool, ZenlinkSwapRouterCall, ZenlinkSwapRouterError, ZenlinkSwapRouterEvent, ZenlinkSwapRouterRoute, ZenlinkSwapRouterStablePath, ZenlinkSwapRouterStableSwapMode } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BifrostAssetRegistryAssetMetadata: BifrostAssetRegistryAssetMetadata;
    BifrostAssetRegistryCall: BifrostAssetRegistryCall;
    BifrostAssetRegistryError: BifrostAssetRegistryError;
    BifrostAssetRegistryEvent: BifrostAssetRegistryEvent;
    BifrostCallSwitchgearCall: BifrostCallSwitchgearCall;
    BifrostCallSwitchgearError: BifrostCallSwitchgearError;
    BifrostCallSwitchgearEvent: BifrostCallSwitchgearEvent;
    BifrostCrossInOutCall: BifrostCrossInOutCall;
    BifrostCrossInOutError: BifrostCrossInOutError;
    BifrostCrossInOutEvent: BifrostCrossInOutEvent;
    BifrostFarmingBoostBoostPoolInfo: BifrostFarmingBoostBoostPoolInfo;
    BifrostFarmingBoostUserBoostInfo: BifrostFarmingBoostUserBoostInfo;
    BifrostFarmingCall: BifrostFarmingCall;
    BifrostFarmingError: BifrostFarmingError;
    BifrostFarmingEvent: BifrostFarmingEvent;
    BifrostFarmingGaugeGaugeInfo: BifrostFarmingGaugeGaugeInfo;
    BifrostFarmingGaugeGaugePoolInfo: BifrostFarmingGaugeGaugePoolInfo;
    BifrostFarmingGaugeGaugeState: BifrostFarmingGaugeGaugeState;
    BifrostFarmingRewardsPoolInfo: BifrostFarmingRewardsPoolInfo;
    BifrostFarmingRewardsPoolState: BifrostFarmingRewardsPoolState;
    BifrostFarmingRewardsShareInfo: BifrostFarmingRewardsShareInfo;
    BifrostFeeShareCall: BifrostFeeShareCall;
    BifrostFeeShareError: BifrostFeeShareError;
    BifrostFeeShareEvent: BifrostFeeShareEvent;
    BifrostFeeShareInfo: BifrostFeeShareInfo;
    BifrostFlexibleFeeCall: BifrostFlexibleFeeCall;
    BifrostFlexibleFeeError: BifrostFlexibleFeeError;
    BifrostFlexibleFeeEvent: BifrostFlexibleFeeEvent;
    BifrostKusamaRuntimeOriginCaller: BifrostKusamaRuntimeOriginCaller;
    BifrostKusamaRuntimeProxyType: BifrostKusamaRuntimeProxyType;
    BifrostKusamaRuntimeRuntime: BifrostKusamaRuntimeRuntime;
    BifrostKusamaRuntimeSessionKeys: BifrostKusamaRuntimeSessionKeys;
    BifrostLighteningRedeemCall: BifrostLighteningRedeemCall;
    BifrostLighteningRedeemError: BifrostLighteningRedeemError;
    BifrostLighteningRedeemEvent: BifrostLighteningRedeemEvent;
    BifrostLiquidityMiningCall: BifrostLiquidityMiningCall;
    BifrostLiquidityMiningDepositData: BifrostLiquidityMiningDepositData;
    BifrostLiquidityMiningError: BifrostLiquidityMiningError;
    BifrostLiquidityMiningEvent: BifrostLiquidityMiningEvent;
    BifrostLiquidityMiningPoolInfo: BifrostLiquidityMiningPoolInfo;
    BifrostLiquidityMiningPoolState: BifrostLiquidityMiningPoolState;
    BifrostLiquidityMiningPoolType: BifrostLiquidityMiningPoolType;
    BifrostLiquidityMiningRewardData: BifrostLiquidityMiningRewardData;
    BifrostLiquidityMiningStorageVersion: BifrostLiquidityMiningStorageVersion;
    BifrostSalpCall: BifrostSalpCall;
    BifrostSalpError: BifrostSalpError;
    BifrostSalpEvent: BifrostSalpEvent;
    BifrostSalpFundInfo: BifrostSalpFundInfo;
    BifrostSalpFundStatus: BifrostSalpFundStatus;
    BifrostSalpLiteCall: BifrostSalpLiteCall;
    BifrostSalpLiteError: BifrostSalpLiteError;
    BifrostSalpLiteEvent: BifrostSalpLiteEvent;
    BifrostSalpLiteFundInfo: BifrostSalpLiteFundInfo;
    BifrostSalpLiteFundStatus: BifrostSalpLiteFundStatus;
    BifrostSlpCall: BifrostSlpCall;
    BifrostSlpError: BifrostSlpError;
    BifrostSlpEvent: BifrostSlpEvent;
    BifrostSlpPrimitivesDelays: BifrostSlpPrimitivesDelays;
    BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger: BifrostSlpPrimitivesFilecoinPrimitivesFilecoinLedger;
    BifrostSlpPrimitivesLedger: BifrostSlpPrimitivesLedger;
    BifrostSlpPrimitivesLedgerUpdateEntry: BifrostSlpPrimitivesLedgerUpdateEntry;
    BifrostSlpPrimitivesMinimumsMaximums: BifrostSlpPrimitivesMinimumsMaximums;
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry: BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateEntry;
    BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation: BifrostSlpPrimitivesMoonbeamPrimitivesMoonbeamLedgerUpdateOperation;
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegationAction;
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyDelegatorStatus;
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyLedger;
    BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest: BifrostSlpPrimitivesMoonbeamPrimitivesOneToManyScheduledRequest;
    BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger: BifrostSlpPrimitivesPhalaPrimitivesPhalaLedger;
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedger;
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry;
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation;
    BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry: BifrostSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry;
    BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk: BifrostSlpPrimitivesPolkadotPrimitivesUnlockChunk;
    BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry: BifrostSlpPrimitivesValidatorsByDelegatorUpdateEntry;
    BifrostSlpPrimitivesXcmOperation: BifrostSlpPrimitivesXcmOperation;
    BifrostSystemMakerCall: BifrostSystemMakerCall;
    BifrostSystemMakerError: BifrostSystemMakerError;
    BifrostSystemMakerEvent: BifrostSystemMakerEvent;
    BifrostSystemMakerInfo: BifrostSystemMakerInfo;
    BifrostSystemStakingCall: BifrostSystemStakingCall;
    BifrostSystemStakingError: BifrostSystemStakingError;
    BifrostSystemStakingEvent: BifrostSystemStakingEvent;
    BifrostSystemStakingRoundInfo: BifrostSystemStakingRoundInfo;
    BifrostSystemStakingTokenConfig: BifrostSystemStakingTokenConfig;
    BifrostSystemStakingTokenInfo: BifrostSystemStakingTokenInfo;
    BifrostTokenIssuerCall: BifrostTokenIssuerCall;
    BifrostTokenIssuerError: BifrostTokenIssuerError;
    BifrostTokenIssuerEvent: BifrostTokenIssuerEvent;
    BifrostVestingCall: BifrostVestingCall;
    BifrostVestingError: BifrostVestingError;
    BifrostVestingEvent: BifrostVestingEvent;
    BifrostVestingVestingInfo: BifrostVestingVestingInfo;
    BifrostVsbondAuctionCall: BifrostVsbondAuctionCall;
    BifrostVsbondAuctionError: BifrostVsbondAuctionError;
    BifrostVsbondAuctionEvent: BifrostVsbondAuctionEvent;
    BifrostVsbondAuctionOrderInfo: BifrostVsbondAuctionOrderInfo;
    BifrostVsbondAuctionOrderType: BifrostVsbondAuctionOrderType;
    BifrostVstokenConversionCall: BifrostVstokenConversionCall;
    BifrostVstokenConversionError: BifrostVstokenConversionError;
    BifrostVstokenConversionEvent: BifrostVstokenConversionEvent;
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee: BifrostVstokenConversionPrimitivesVstokenConversionExchangeFee;
    BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate: BifrostVstokenConversionPrimitivesVstokenConversionExchangeRate;
    BifrostVtokenMintingCall: BifrostVtokenMintingCall;
    BifrostVtokenMintingError: BifrostVtokenMintingError;
    BifrostVtokenMintingEvent: BifrostVtokenMintingEvent;
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    MerkleDistributorCall: MerkleDistributorCall;
    MerkleDistributorError: MerkleDistributorError;
    MerkleDistributorEvent: MerkleDistributorEvent;
    MerkleDistributorMerkleMetadata: MerkleDistributorMerkleMetadata;
    NodePrimitivesCurrencyAssetIds: NodePrimitivesCurrencyAssetIds;
    NodePrimitivesCurrencyCurrencyId: NodePrimitivesCurrencyCurrencyId;
    NodePrimitivesCurrencyTokenSymbol: NodePrimitivesCurrencyTokenSymbol;
    NodePrimitivesExtraFeeName: NodePrimitivesExtraFeeName;
    NodePrimitivesTimeUnit: NodePrimitivesTimeUnit;
    OrmlCurrenciesModuleCall: OrmlCurrenciesModuleCall;
    OrmlCurrenciesModuleError: OrmlCurrenciesModuleError;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletIndicesCall: PalletIndicesCall;
    PalletIndicesError: PalletIndicesError;
    PalletIndicesEvent: PalletIndicesEvent;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    ParachainStakingBond: ParachainStakingBond;
    ParachainStakingCall: ParachainStakingCall;
    ParachainStakingCandidateBondLessRequest: ParachainStakingCandidateBondLessRequest;
    ParachainStakingCandidateMetadata: ParachainStakingCandidateMetadata;
    ParachainStakingCapacityStatus: ParachainStakingCapacityStatus;
    ParachainStakingCollatorSnapshot: ParachainStakingCollatorSnapshot;
    ParachainStakingCollatorStatus: ParachainStakingCollatorStatus;
    ParachainStakingDelayedPayout: ParachainStakingDelayedPayout;
    ParachainStakingDelegationRequestsCancelledScheduledRequest: ParachainStakingDelegationRequestsCancelledScheduledRequest;
    ParachainStakingDelegationRequestsDelegationAction: ParachainStakingDelegationRequestsDelegationAction;
    ParachainStakingDelegationRequestsScheduledRequest: ParachainStakingDelegationRequestsScheduledRequest;
    ParachainStakingDelegations: ParachainStakingDelegations;
    ParachainStakingDelegator: ParachainStakingDelegator;
    ParachainStakingDelegatorAdded: ParachainStakingDelegatorAdded;
    ParachainStakingDelegatorStatus: ParachainStakingDelegatorStatus;
    ParachainStakingError: ParachainStakingError;
    ParachainStakingEvent: ParachainStakingEvent;
    ParachainStakingInflationInflationInfo: ParachainStakingInflationInflationInfo;
    ParachainStakingParachainBondConfig: ParachainStakingParachainBondConfig;
    ParachainStakingRoundInfo: ParachainStakingRoundInfo;
    ParachainStakingSetOrderedSet: ParachainStakingSetOrderedSet;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmInterfaceCall: XcmInterfaceCall;
    XcmInterfaceError: XcmInterfaceError;
    XcmInterfaceEvent: XcmInterfaceEvent;
    XcmInterfaceXcmInterfaceOperation: XcmInterfaceXcmInterfaceOperation;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3VecPalletInfo: XcmV3VecPalletInfo;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
    ZenlinkProtocolCall: ZenlinkProtocolCall;
    ZenlinkProtocolError: ZenlinkProtocolError;
    ZenlinkProtocolEvent: ZenlinkProtocolEvent;
    ZenlinkProtocolPrimitivesAssetId: ZenlinkProtocolPrimitivesAssetId;
    ZenlinkProtocolPrimitivesBootstrapParameter: ZenlinkProtocolPrimitivesBootstrapParameter;
    ZenlinkProtocolPrimitivesPairMetadata: ZenlinkProtocolPrimitivesPairMetadata;
    ZenlinkProtocolPrimitivesPairStatus: ZenlinkProtocolPrimitivesPairStatus;
    ZenlinkStableAmmCall: ZenlinkStableAmmCall;
    ZenlinkStableAmmError: ZenlinkStableAmmError;
    ZenlinkStableAmmEvent: ZenlinkStableAmmEvent;
    ZenlinkStableAmmPrimitivesBasePool: ZenlinkStableAmmPrimitivesBasePool;
    ZenlinkStableAmmPrimitivesMetaPool: ZenlinkStableAmmPrimitivesMetaPool;
    ZenlinkStableAmmPrimitivesPool: ZenlinkStableAmmPrimitivesPool;
    ZenlinkSwapRouterCall: ZenlinkSwapRouterCall;
    ZenlinkSwapRouterError: ZenlinkSwapRouterError;
    ZenlinkSwapRouterEvent: ZenlinkSwapRouterEvent;
    ZenlinkSwapRouterRoute: ZenlinkSwapRouterRoute;
    ZenlinkSwapRouterStablePath: ZenlinkSwapRouterStablePath;
    ZenlinkSwapRouterStableSwapMode: ZenlinkSwapRouterStableSwapMode;
  } // InterfaceTypes
} // declare module
