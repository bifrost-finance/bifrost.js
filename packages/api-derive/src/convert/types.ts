// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance } from '@polkadot/types/interfaces/runtime';
import BN from 'bn.js';

export interface DeriveVtokenConvertInfo{
  symbol: string,
  tokenPool: Balance;
  convertPrice: BN;
  annualizedRate: BN;
}
