// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import { AccountAsset } from '@bifrost-finance/types/interfaces';
import { allTokens } from '../type';

export interface DeriveVtokenAssetsInfo{
  symbol: string,
  totalSupply: Balance
}

export interface assetInfo{
  tokenName: allTokens,
  assetInfo: AccountAsset
}

export interface accountsAssetInfo{
  accountName: AccountId,
  assetsInfo: assetInfo[]
}
