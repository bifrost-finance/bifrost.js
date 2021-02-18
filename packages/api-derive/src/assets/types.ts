// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

export interface DeriveVtokenAssetsInfo{
  tokenId: number,
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
  tokenId: number,
  assetInfo: accountAsset
}

export interface accountsAssetInfo{
  accountName: string,
  assetsInfo: assetInfo[]
}

export interface tokenInformation{
  symbol: string,
  precision: BN,
  tokenType: number,
  totalSupply: BN,
  pair: number
}
