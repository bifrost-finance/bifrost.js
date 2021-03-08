// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Vec, bool } from '@polkadot/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { CandidateReceipt, CoreIndex, GroupIndex, HeadData, ParaId } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, Balance, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    inclusion: {
      /**
       * A candidate was backed. [candidate, head_data]
       **/
      CandidateBacked: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
      /**
       * A candidate was included. [candidate, head_data]
       **/
      CandidateIncluded: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
      /**
       * A candidate timed out. [candidate, head_data]
       **/
      CandidateTimedOut: AugmentedEvent<ApiType, [CandidateReceipt, HeadData, CoreIndex]>;
    };
    indices: {
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proposeParachain: {
      /**
       * A parachain was approved and is scheduled for being activated.
       **/
      ParachainApproved: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * A parachain was proposed for registration.
       **/
      ParachainProposed: AugmentedEvent<ApiType, [Bytes, ParaId]>;
      /**
       * A parachain was registered and is now running.
       **/
      ParachainRegistered: AugmentedEvent<ApiType, [ParaId]>;
      /**
       * New validators were added to the set.
       **/
      ValidatorsRegistered: AugmentedEvent<ApiType, [Vec<ValidatorId>]>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
