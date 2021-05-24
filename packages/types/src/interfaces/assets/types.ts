// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, i128 } from '@polkadot/types';
import type { ParaId } from '@polkadot/types/interfaces/parachains';
import type { Balance } from '@polkadot/types/interfaces/runtime';

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

/** @name OrmlAccountData */
export interface OrmlAccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly frozen: Balance;
}

/** @name TAssetBalance */
export interface TAssetBalance extends Balance {}

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
