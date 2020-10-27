// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

export interface DeriveVtokenConvertInfo{
  symbol: string,
  tokenPool: BN;
  convertPrice: number;
  annualizedRate: number;
}

export interface convertPool {
  token_pool: BN;
  vtoken_pool: BN;
  current_reward: BN;
  pending_reward: BN;
}
