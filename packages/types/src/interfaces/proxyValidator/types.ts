// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types';
import type { Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name AssetConfig */
export interface AssetConfig extends Struct {
  readonly redeem_duration: BlockNumber;
  readonly min_reward_per_block: Balance;
}

/** @name ProxyValidatorRegister */
export interface ProxyValidatorRegister extends Struct {
  readonly last_block: BlockNumber;
  readonly deposit: Balance;
  readonly need: Balance;
  readonly staking: Balance;
  readonly reward_per_block: Balance;
  readonly validator_address: Bytes;
}

export type PHANTOM_PROXYVALIDATOR = 'proxyValidator';
