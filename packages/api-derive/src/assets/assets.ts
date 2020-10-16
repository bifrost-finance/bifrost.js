// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { memo } from '@polkadot/api-derive/util';
import { allTokens, bifrostAllTokenList } from '../type';
import { accountsAssetInfo, assetInfo, tokenInformation } from './types';
import BN from 'bn.js';
import { u8aToString } from '@polkadot/util';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: allTokens) => Observable<tokenInformation> {
  return memo(instanceId, (tokenSymbol: allTokens) => {
    return api.query.assets.tokens(tokenSymbol).pipe(
      map((result) => {
        return {
          symbol: u8aToString(result['symbol']),
          precision: new BN(result['precision']),
          totalSupply: new BN(result['totalSupply'])
        };
      })
    );
  });
}

/**
 * @name getAllTokenInfo
 * @description get all vToken information
 * @param instanceId
 * @param api
 */
export function getAllTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenArray?: allTokens[]) => Observable<tokenInformation[]> {
  return memo(instanceId, (tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = bifrostAllTokenList as allTokens[];
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
export function getSingleAccountAsset (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenSymbol: allTokens) => Observable<assetInfo> {
  return memo(instanceId, (accountName: string, tokenSymbol: allTokens) => {
    const result = api.query.assets.accountAssets([tokenSymbol, accountName]);

    return result.pipe(map((result) => {
      const asstInfo = {
        balance: new BN(result['balance']),
        locked: new BN(result['locked']),
        available: new BN(result['available']),
        cost: new BN(result['cost']),
        income: new BN(result['income'])
      }

      return {
        assetInfo: asstInfo,
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
export function getAccountAssets (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenArray?: allTokens[]) => Observable<accountsAssetInfo> {
  return memo(instanceId, (accountName: string, tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = bifrostAllTokenList as allTokens[];
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
export function getManyAccountsAssets (instanceId: string, api: ApiInterfaceRx): (accountNameArray: string[], tokenArray?: allTokens[]) => Observable<accountsAssetInfo[]> {
  return memo(instanceId, (accountNameArray: string[], tokenArray?: allTokens[]) => {
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = bifrostAllTokenList as allTokens[];
    } else {
      tokenList = tokenArray;
    }

    const getAccountAssetsQuery = getAccountAssets(instanceId, api);

    return combineLatest(accountNameArray.map((accountName) => getAccountAssetsQuery(accountName, tokenList)));
  });
}
