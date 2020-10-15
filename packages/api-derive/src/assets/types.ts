// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { allTokens } from '../type';
import BN from 'bn.js';

export interface DeriveVtokenAssetsInfo{
  symbol: string,
  totalSupply: BN
}

export interface accountAsset{
  balance: BN,
  locked: BN,
  available: BN,
  cost: BN,
  income: BN
}

export interface assetInfo{
  tokenName: allTokens,
  assetInfo: accountAsset
}

export interface accountsAssetInfo{
  accountName: string,
  assetsInfo: assetInfo[]
}

export interface tokenInformation{
  symbol: string,
  precision: BN,
  totalSupply: BN
}
