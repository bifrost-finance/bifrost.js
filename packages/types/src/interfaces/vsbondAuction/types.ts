// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { AccountIdOf } from '@bifrost-finance/types/interfaces/runtime';
import type { Enum, Struct, u128, u64 } from '@polkadot/types';

/** @name OrderId */
export interface OrderId extends u64 {}

/** @name OrderInfo */
export interface OrderInfo extends Struct {
  readonly owner: AccountIdOf;
  readonly vsbond: CurrencyId;
  readonly supply: u128;
  readonly remain: u128;
  readonly unit_price: U64F64;
  readonly order_id: OrderId;
  readonly order_state: OrderState;
}

/** @name OrderState */
export interface OrderState extends Enum {
  readonly isInTrade: boolean;
  readonly isRevoked: boolean;
  readonly isClinchd: boolean;
}

/** @name U64F64 */
export interface U64F64 extends u128 {}

export type PHANTOM_VSBONDAUCTION = 'vsbondAuction';
