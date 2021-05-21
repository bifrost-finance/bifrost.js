// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, i128, u128 } from '@polkadot/types';
import type { ParaId } from '@polkadot/types/interfaces/parachains';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name AccountData */
export interface AccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly frozen: Balance;
}

/** @name AmountOf */
export interface AmountOf extends i128 {}

/** @name ChainId */
export interface ChainId extends Enum {
  readonly isRelayChain: boolean;
  readonly isParaChain: boolean;
  readonly asParaChain: ParaId;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
}

/** @name TAssetBalance */
export interface TAssetBalance extends u128 {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isAsg: boolean;
  readonly isAUsd: boolean;
  readonly isDot: boolean;
  readonly isVDot: boolean;
  readonly isKsm: boolean;
  readonly isVKsm: boolean;
  readonly isEth: boolean;
  readonly isVEth: boolean;
  readonly isEos: boolean;
  readonly isVEos: boolean;
  readonly isIost: boolean;
  readonly isVIost: boolean;
}

/** @name XCurrencyId */
export interface XCurrencyId extends Struct {
  readonly chainId: ChainId;
  readonly currencyId: Bytes;
}

export type PHANTOM_ASSETS = 'assets';
