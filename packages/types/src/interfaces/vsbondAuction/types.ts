// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u128, u64 } from '@polkadot/types';
import type { CurrencyId } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { AccountIdOf } from '@polkadot/types/interfaces/runtime';

/** @name OrderId */
export interface OrderId extends u64 {}

/** @name OrderInfo */
export interface OrderInfo extends Struct {
  readonly owner: AccountIdOf;
  readonly vsbond: CurrencyId;
  readonly supply: u128;
  readonly remain: u128;
  readonly unit_price: u128;
  readonly order_id: OrderId;
  readonly order_state: OrderState;
}

/** @name OrderState */
export interface OrderState extends Enum {
  readonly isInTrade: boolean;
  readonly isRevoked: boolean;
  readonly isClinchd: boolean;
}

export type PHANTOM_VSBONDAUCTION = 'vsbondAuction';
