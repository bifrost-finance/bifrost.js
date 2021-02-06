// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { u128 } from '@polkadot/types';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name MintPrice */
export interface MintPrice extends VtokenMintPrice {}

/** @name VtokenMintPrice */
export interface VtokenMintPrice extends u128 {}

/** @name VtokenPool */
export interface VtokenPool extends Balance {}

export type PHANTOM_VTOKENMINT = 'vtokenMint';
