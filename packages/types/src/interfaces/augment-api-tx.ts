// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { BabeEquivocationProof } from '@polkadot/types/interfaces/babe';
import type { Extrinsic, Signature } from '@polkadot/types/interfaces/extrinsics';
import type { GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
import type { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import type { BackedCandidate, HeadData, HrmpChannelId, ParaGenesisArgs, ParaId, SignedAvailabilityBitfields, ValidationCode, VersionedXcm } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, Header, KeyValue, LookupSource, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { Key } from '@polkadot/types/interfaces/system';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    authorship: {
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Header>]>;
    };
    babe: {
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BabeEquivocationProof, KeyOwnerProof]>;
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BabeEquivocationProof, KeyOwnerProof]>;
    };
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has
       * stalled. This will trigger a forced authority set change at the beginning
       * of the next session, to be enacted `delay` blocks after that. The delay
       * should be high enough to safely assume that the block signalling the
       * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
       * will start the new authority set using the given finalized block as base.
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: BlockNumber | AnyNumber | Uint8Array, bestFinalizedBlockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, BlockNumber]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
    };
    hrmp: {
      /**
       * Accept a pending open channel request from the given sender.
       * 
       * The channel will be opened only on the next session boundary.
       **/
      hrmpAcceptOpenChannel: AugmentedSubmittable<(sender: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
      /**
       * Initiate unilateral closing of a channel. The origin must be either the sender or the
       * recipient in the channel being closed.
       * 
       * The closure can only happen on a session change.
       **/
      hrmpCloseChannel: AugmentedSubmittable<(channelId: HrmpChannelId | { sender?: any; receiver?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HrmpChannelId]>;
      /**
       * Initiate opening a channel from a parachain to a given recipient with given channel
       * parameters.
       * 
       * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
       * - `proposed_max_message_size` - specifies the maximum size of any of the messages.
       * 
       * These numbers are a subject to the relay-chain configuration limits.
       * 
       * The channel can be opened only after the recipient confirms it and only on a session
       * change.
       **/
      hrmpInitOpenChannel: AugmentedSubmittable<(recipient: ParaId | AnyNumber | Uint8Array, proposedMaxCapacity: u32 | AnyNumber | Uint8Array, proposedMaxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, u32, u32]>;
    };
    imOnline: {
      /**
       * # <weight>
       * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
       * and E is length of `heartbeat.network_state.external_address`
       * - `O(K)`: decoding of length `K`
       * - `O(E)`: decoding/encoding of length `E`
       * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
       * `ReceivedHeartbeats`
       * - DbWrites: `ReceivedHeartbeats`
       * # </weight>
       **/
      heartbeat: AugmentedSubmittable<(heartbeat: Heartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Heartbeat, Signature]>;
    };
    inclusionInherent: {
      /**
       * Include backed candidates and bitfields.
       **/
      inclusion: AugmentedSubmittable<(signedBitfields: SignedAvailabilityBitfields, backedCandidates: Vec<BackedCandidate> | (BackedCandidate | { candidate?: any; validityVotes?: any; validatorIndices?: any } | string | Uint8Array)[], parentHeader: Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SignedAvailabilityBitfields, Vec<BackedCandidate>, Header]>;
    };
    indices: {
      /**
       * Assign an previously unassigned index.
       * 
       * Payment: `Deposit` is reserved from the sender account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be claimed. This must not be in use.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      claim: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one reserve operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (original owner)
       * - Writes: Indices Accounts, System Account (original owner)
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex, bool]>;
      /**
       * Free up an index owned by the sender.
       * 
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       * 
       * - `index`: the index to be freed. This must be owned by the sender.
       * 
       * Emits `IndexFreed` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One reserve operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      free: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the deposit.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       * 
       * - `index`: the index to be frozen in place.
       * 
       * Emits `IndexFrozen` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - Up to one slash operation.
       * - One event.
       * -------------------
       * - DB Weight: 1 Read/Write (Accounts)
       * # </weight>
       **/
      freeze: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * # <weight>
       * - `O(1)`.
       * - One storage mutation (codec `O(1)`).
       * - One transfer operation.
       * - One event.
       * -------------------
       * - DB Weight:
       * - Reads: Indices Accounts, System Account (recipient)
       * - Writes: Indices Accounts, System Account (recipient)
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex]>;
    };
    parachainsConfiguration: {
      /**
       * Set the acceptance period for an included candidate.
       **/
      setAcceptancePeriod: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Set the availability period for parachains.
       **/
      setChainAvailabilityPeriod: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Set the dispute period, in number of sessions to keep for disputes.
       **/
      setDisputePeriod: AugmentedSubmittable<(updated: SessionIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SessionIndex]>;
      /**
       * Set the parachain validator-group rotation frequency
       **/
      setGroupRotationFrequency: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Sets the maximum number of messages allowed in an HRMP channel at once.
       **/
      setHrmpChannelMaxCapacity: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum size of a message that could ever be put into an HRMP channel.
       **/
      setHrmpChannelMaxMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
       **/
      setHrmpChannelMaxTotalSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
       **/
      setHrmpMaxMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
       **/
      setHrmpMaxParachainInboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
       **/
      setHrmpMaxParachainOutboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
       **/
      setHrmpMaxParathreadInboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
       **/
      setHrmpMaxParathreadOutboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the number of sessions after which an HRMP open channel request expires.
       **/
      setHrmpOpenRequestTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
       * channel.
       **/
      setHrmpRecipientDeposit: AugmentedSubmittable<(updated: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Sets the amount of funds that the sender should provide for opening an HRMP channel.
       **/
      setHrmpSenderDeposit: AugmentedSubmittable<(updated: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Set the max validation code size for incoming upgrades.
       **/
      setMaxCodeSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the critical downward message size.
       **/
      setMaxDownwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the max head data size for paras.
       **/
      setMaxHeadDataSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the max POV block size for incoming upgrades.
       **/
      setMaxPovSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of messages that a candidate can contain.
       **/
      setMaxUpwardMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum size of an upward message that can be sent by a candidate.
       **/
      setMaxUpwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum items that can present in a upward dispatch queue at once.
       **/
      setMaxUpwardQueueCount: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum total size of items that can present in a upward dispatch queue at once.
       **/
      setMaxUpwardQueueSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the maximum number of validators to assign to any core.
       **/
      setMaxValidatorsPerCore: AugmentedSubmittable<(updated: Option<u32> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Set the total number of delay tranches.
       **/
      setNDelayTranches: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of validators needed to approve a block.
       **/
      setNeededApprovals: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the no show slots, in number of number of consensus slots.
       * Must be at least 1.
       **/
      setNoShowSlots: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of parathread execution cores.
       **/
      setParathreadCores: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of retries for a particular parathread.
       **/
      setParathreadRetries: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the soft limit for the phase of dispatching dispatchable upward messages.
       **/
      setPreferredDispatchableUpwardMessagesStepWeight: AugmentedSubmittable<(updated: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Weight]>;
      /**
       * Set the number of samples to do of the RelayVRFModulo approval assignment criterion.
       **/
      setRelayVrfModuloSamples: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the scheduling lookahead, in expected number of blocks at peak throughput.
       **/
      setSchedulingLookahead: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the availability period for parathreads.
       **/
      setThreadAvailabilityPeriod: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Set the validation upgrade delay.
       **/
      setValidationUpgradeDelay: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Set the validation upgrade frequency.
       **/
      setValidationUpgradeFrequency: AugmentedSubmittable<(updated: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Set the zeroth delay tranche width.
       **/
      setZerothDelayTrancheWidth: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
    };
    parasSudoWrapper: {
      /**
       * Forcefully establish a channel from the sender to the recipient.
       * 
       * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
       * `Hrmp::hrmp_accept_open_channel`.
       **/
      sudoEstablishHrmpChannel: AugmentedSubmittable<(sender: ParaId | AnyNumber | Uint8Array, recipient: ParaId | AnyNumber | Uint8Array, maxCapacity: u32 | AnyNumber | Uint8Array, maxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, ParaId, u32, u32]>;
      /**
       * Send a downward XCM to the given para.
       * 
       * The given parachain should exist and the payload should not exceed the preconfigured size
       * `config.max_downward_message_size`.
       **/
      sudoQueueDownwardXcm: AugmentedSubmittable<(id: ParaId | AnyNumber | Uint8Array, xcm: VersionedXcm | { V0: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, VersionedXcm]>;
      /**
       * Schedule a para to be cleaned up at the start of the next session.
       **/
      sudoScheduleParaCleanup: AugmentedSubmittable<(id: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
      /**
       * Schedule a para to be initialized at the start of the next session.
       **/
      sudoScheduleParaInitialize: AugmentedSubmittable<(id: ParaId | AnyNumber | Uint8Array, genesis: ParaGenesisArgs | { genesisHead?: any; validationCode?: any; parachain?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, ParaGenesisArgs]>;
    };
    proposeParachain: {
      /**
       * Approve a parachain proposal.
       **/
      approveProposal: AugmentedSubmittable<(paraId: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
      /**
       * Cancel a parachain proposal.
       * 
       * This also unreserves the deposit.
       **/
      cancelProposal: AugmentedSubmittable<(paraId: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
      /**
       * Deregister a parachain that was already successfully registered in the relay chain.
       **/
      deregisterParachain: AugmentedSubmittable<(paraId: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
      /**
       * Propose a new parachain
       * 
       * This requires:
       * - `para_id`: The id of the parachain.
       * - `name`: The name of the parachain.
       * - `validation_function`: The wasm runtime of the parachain.
       * - `initial_head_state`: The genesis state of the parachain.
       * - `validators`: Validators that will validate for the relay chain, needs to be at least one.
       * - `balance`: The initial balance of the parachain on the relay chain.
       * 
       * It will reserve a deposit from the sender account over the lifetime of the chain.
       **/
      proposeParachain: AugmentedSubmittable<(paraId: ParaId | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, validationCode: ValidationCode | string | Uint8Array, genesisHead: HeadData | string | Uint8Array, validators: Vec<ValidatorId> | (ValidatorId | string | Uint8Array)[], balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, Bytes, ValidationCode, HeadData, Vec<ValidatorId>, BalanceOf]>;
      /**
       * Add new validators to the set.
       **/
      registerValidators: AugmentedSubmittable<(validators: Vec<ValidatorId> | (ValidatorId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<ValidatorId>]>;
    };
    registrar: {
      /**
       * Deregister a parathread and retreive the deposit.
       * 
       * Must be sent from a `Parachain` origin which is currently a parathread.
       * 
       * Ensure that before calling this that any funds you want emptied from the parathread's
       * account is moved out; after this it will be impossible to retreive them (without
       * governance intervention).
       **/
      deregisterParathread: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      disableParathreadRegistration: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      enableParathreadRegistration: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Register a parathread with given code for immediate use.
       * 
       * Must be sent from a Signed origin that is able to have `ParathreadDeposit` reserved.
       * `genesis_head` and `validation_code` are used to initalize the parathread's state.
       **/
      registerParathread: AugmentedSubmittable<(id: ParaId | AnyNumber | Uint8Array, genesisHead: HeadData | string | Uint8Array, validationCode: ValidationCode | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId, HeadData, ValidationCode]>;
      /**
       * Swap a parachain with another parachain or parathread. The origin must be a `Parachain`.
       * The swap will happen only if there is already an opposite swap pending. If there is not,
       * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
       * 
       * The `ParaId`s remain mapped to the same head data and code so external code can rely on
       * `ParaId` to be a long-term identifier of a notional "parachain". However, their
       * scheduling info (i.e. whether they're a parathread or parachain), auction information
       * and the auction deposit are switched.
       **/
      swap: AugmentedSubmittable<(other: ParaId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParaId]>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwnder`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * - Base Weight: 0.665 µs, independent of remark length.
       * - No DB operations.
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
  }
}
