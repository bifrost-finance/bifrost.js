// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { memo } from '../util';
import { allTokens } from '../type';
import { accountsAssetInfo, assetInfo } from './types';
import { AccountId } from '@polkadot/types/interfaces/runtime';

import { Token } from '@bifrost-finance/types/interfaces';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: allTokens) => Observable<Token> {
  return memo(instanceId, (tokenSymbol: allTokens) => {
    return api.query.assets.tokens(tokenSymbol).pipe(
      map((result: Token) => result)
    );
  });
}

/**
 * @name getAllTokenInfo
 * @description get all vToken information
 * @param instanceId
 * @param api
 */
export function getAllTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenArray?: allTokens[]) => Observable<Token[]> {
  return memo(instanceId, (tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = ['vDOT', 'vKSM', 'vEOS', 'DOT', 'KSM', 'EOS', 'aUSD'];
    } else {
      tokenList = tokenArray;
    }

    const getTokenInfoQuery = getTokenInfo(instanceId, api);

    return combineLatest(tokenList.map((tk) => getTokenInfoQuery(tk)));
  });
}

/**
 * @name getSingleAccountAsset
 * @description get one account one asset Info
 * @param instanceId
 * @param api
 */
export function getSingleAccountAsset (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, tokenSymbol: allTokens) => Observable<assetInfo> {
  return memo(instanceId, (accountName: AccountId, tokenSymbol: allTokens) => {
    const result = api.query.assets.accountAssets([tokenSymbol, accountName]);

    return result.pipe(map((result) => {
      return {
        assetInfo: result,
        tokenName: tokenSymbol
      };
    }));
  });
}

/**
 * @name getAccountAssets
 * @description get one account all token Assets Info
 * @param instanceId
 * @param api
 */
export function getAccountAssets (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, tokenArray?: allTokens[]) => Observable<accountsAssetInfo> {
  return memo(instanceId, (accountName: AccountId, tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = ['vDOT', 'vKSM', 'vEOS', 'DOT', 'KSM', 'EOS', 'aUSD'];
    } else {
      tokenList = tokenArray;
    }

    const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
    const result = combineLatest(tokenList.map((tk) => getSingleAccountAssetQuery(accountName, tk)));

    return result.pipe(map((result) => {
      return {
        accountName: accountName,
        assetsInfo: result
      };
    }));
  });
}

/**
 * @name getManyAccountsAssets
 * @description get many account all token Assets Info
 * @param instanceId
 * @param api
 */
export function getManyAccountsAssets (instanceId: string, api: ApiInterfaceRx): (accountNameArray: AccountId[], tokenArray?: allTokens[]) => Observable<accountsAssetInfo[]> {
  return memo(instanceId, (accountNameArray: AccountId[], tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = ['vDOT', 'vKSM', 'vEOS', 'DOT', 'KSM', 'EOS', 'aUSD'];
    } else {
      tokenList = tokenArray;
    }

    const getAccountAssetsQuery = getAccountAssets(instanceId, api);

    return combineLatest(accountNameArray.map((accountName) => getAccountAssetsQuery(accountName, tokenList)));
  });
}
