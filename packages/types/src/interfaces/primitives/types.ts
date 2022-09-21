// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance, Releases } from '@bifrost-finance/types/interfaces/runtime';
import type { OrmlAccountData } from '@open-web3/orml-types/interfaces/tokens';
import type { Enum, u128, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { BalanceLock } from '@polkadot/types/interfaces/balances';
import type { LeasePeriod, ParaId } from '@polkadot/types/interfaces/parachains';

/** @name Amount */
export interface Amount extends AmountOf {}

/** @name AmountOf */
export interface AmountOf extends Balance {}

/** @name Currency */
export interface Currency extends CurrencyIdOf {}

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
  readonly isLpToken: boolean;
  readonly asLpToken: ITuple<[TokenSymbol, u8, TokenSymbol, u8]>;
  readonly isToken2: boolean;
  readonly asToken2: u8;
  readonly isVToken2: boolean;
  readonly asVToken2: u8;
  readonly isVsToken2: boolean;
  readonly asVsToken2: u8;
  readonly isVsBond2: boolean;
  readonly asVsBond2: u8;
  readonly type: 'Native' | 'VToken' | 'Token' | 'Stable' | 'VsToken' | 'VsBond' | 'LpToken' | 'Token2' | 'VToken2' | 'VsToken2' | 'VsBond2';
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name NodePrimitivesCurrencyCurrencyId */
export interface NodePrimitivesCurrencyCurrencyId extends CurrencyId {}

/** @name OrmlTokensAccountData */
export interface OrmlTokensAccountData extends OrmlAccountData {}

/** @name OrmlTokensBalanceLock */
export interface OrmlTokensBalanceLock extends BalanceLock {}

/** @name OrmlTokensReserveData */
export interface OrmlTokensReserveData extends ITuple<[Currency, u8, Amount, u128]> {}

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
  readonly isKar: boolean;
  readonly isZlk: boolean;
  readonly isPha: boolean;
  readonly isRmrk: boolean;
  readonly isMovr: boolean;
  readonly isGlmr: boolean;
  readonly type: 'Asg' | 'Bnc' | 'Kusd' | 'Dot' | 'Ksm' | 'Eth' | 'Kar' | 'Zlk' | 'Pha' | 'Rmrk' | 'Movr' | 'Glmr';
}

/** @name TransferOriginType */
export interface TransferOriginType extends Enum {
  readonly isFromSelf: boolean;
  readonly isFromRelayChain: boolean;
  readonly isFromSiblingParaChain: boolean;
  readonly type: 'FromSelf' | 'FromRelayChain' | 'FromSiblingParaChain';
}

export type PHANTOM_PRIMITIVES = 'primitives';
