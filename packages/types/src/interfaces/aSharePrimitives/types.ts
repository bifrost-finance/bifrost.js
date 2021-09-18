// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance, Releases } from '@bifrost-finance/types/interfaces/runtime';
import type { Enum } from '@polkadot/types';
import type { LeasePeriod, ParaId } from '@polkadot/types/interfaces/parachains';
import type { ITuple } from '@polkadot/types/types';

/** @name AmountOf */
export interface AmountOf extends Balance {}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isNative: boolean;
  readonly asNative: TokenSymbol;
  readonly isVToken: boolean;
  readonly asVToken: TokenSymbol;
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isStable: boolean;
  readonly asStable: TokenSymbol;
  readonly isVsToken: boolean;
  readonly asVsToken: TokenSymbol;
  readonly isVsBond: boolean;
  readonly asVsBond: ITuple<[TokenSymbol, ParaId, LeasePeriod, LeasePeriod]>;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name ShareWeight */
export interface ShareWeight extends Balance {}

/** @name StorageVersion */
export interface StorageVersion extends Releases {}

/** @name TAssetBalance */
export interface TAssetBalance extends Balance {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isAsg: boolean;
  readonly isBnc: boolean;
  readonly isKusd: boolean;
  readonly isDot: boolean;
  readonly isKsm: boolean;
  readonly isEth: boolean;
}

/** @name TransferOriginType */
export interface TransferOriginType extends Enum {
  readonly isFromSelf: boolean;
  readonly isFromRelayChain: boolean;
  readonly isFromSiblingParaChain: boolean;
}

export type PHANTOM_ASHAREPRIMITIVES = 'aSharePrimitives';
