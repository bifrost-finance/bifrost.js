// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { NodePrimitivesCurrencyCurrencyId } from '@bifrost-finance/types/interfaces/primitives';
import type { AccountId32 } from '@bifrost-finance/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';
import type { i128, u128 } from '@polkadot/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    currencies: {
      /**
       * Update balance success. \[currency_id, who, amount\]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, i128]>;
      /**
       * Deposit success. \[currency_id, who, amount\]
       **/
      Deposited: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Currency transfer success. \[currency_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Withdraw success. \[currency_id, who, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128, u128]>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[currency_id,
       * account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[currency_id,
       * account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       * \[currency_id, who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Transfer succeeded. \[currency_id, from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       * \[currency_id, who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [NodePrimitivesCurrencyCurrencyId, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
