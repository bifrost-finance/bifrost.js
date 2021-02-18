// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { memo } from '@polkadot/api-derive/util';
import { accountsAssetInfo, assetInfo, tokenInformation, accountAsset } from './types';
import BN from 'bn.js';
import { u8aToString } from '@polkadot/util';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenId: number) => Observable<tokenInformation> {
  return memo(instanceId, (tokenId: number) => {
    return api.query.assets.tokens(tokenId).pipe(
      map((result) => {
        return {
          precision: new BN(result.precision),
          symbol: u8aToString(result.symbol),
          tokenType: result.token_type.toNumber(),
          totalSupply: new BN(result.total_supply),
          pair: result.pair.unwrap().toNumber()
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
export function getAllTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenArray?: number[]) => Observable<tokenInformation[]> {
  return memo(instanceId, (tokenArray?: number[]) => {

    if (!tokenArray || tokenArray.length === 0) {
      return api.query.assets.tokens.entries().pipe(
        map((resultSet) => {
          return resultSet.map((rawResult) => {
            let result = rawResult[1];
            
            return {
              precision: new BN(result.precision),
              symbol: u8aToString(result.symbol),
              tokenType: result.token_type.toNumber(),
              totalSupply: new BN(result.total_supply),
              pair: result.pair.unwrap().toNumber()
            };
          });
        })
      );
    } else {
      const getTokenInfoQuery = getTokenInfo(instanceId, api);
      return combineLatest(tokenArray.map((tk) => getTokenInfoQuery(tk)));
    }
  });
}

/**
 * @name getAllTokenIdList
 * @description get all token Id list
 * @param instanceId
 * @param api
 */
export function getAllTokenIdList (instanceId: string, api: ApiInterfaceRx): () => Observable<number[]> {
  return memo(instanceId, () => {
    return api.query.assets.tokens.entries().pipe(
      map((resultSet) => {
        return resultSet.map((rawResult) => (rawResult[0] as unknown) as number);
      })
    );
  });
}

/**
 * @name getAllTokenSymbolList
 * @description get token symbol/name list.
 * @param instanceId
 * @param api
 */
export function getTokenSymbolList (instanceId: string, api: ApiInterfaceRx): (tokenArray?: number[]) => Observable<{[index: string]:number}> {
  return memo(instanceId, (tokenArray?: number[]) => {

    let symbolIdObj : {[index: string]:any} = {};

    if (!tokenArray || tokenArray.length === 0) {
      api.query.assets.tokens.entries().pipe(
        map((resultSet) => {
          resultSet.forEach((rawResult) => {
            let tokenSymbol = u8aToString(rawResult[1].symbol);
            let tkId = (rawResult[0] as unknown) as number;
            symbolIdObj[tokenSymbol] = tkId;
          });
        })
      );
    } else {
      const getTokenInfoQuery = getTokenInfo(instanceId, api);

      for(let idx = 0; idx < tokenArray.length; idx ++) {
        let tkId = tokenArray[idx];
        let result = getTokenInfoQuery(tkId);
        result.pipe(map((rs) => {
          let tokenSymbol = rs.symbol;
          symbolIdObj[tokenSymbol] = tkId;
        }));
      }
    }

    return of(symbolIdObj);
  });
}

/**
 * @name getSingleAccountAsset
 * @description get one account one asset Info
 * @param instanceId
 * @param api
 */
export function getSingleAccountAsset (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenId: number) => Observable<assetInfo> {
  return memo(instanceId, (accountName: string, tokenId: number) => {
    const result = api.query.assets.accountAssets([tokenId, accountName]);

    return result.pipe(map((result) => {
      let astInfo: accountAsset;
      if (result) {
        astInfo = {
          available: new BN(result.available),
          balance: new BN(result.balance),
          cost: new BN(result.cost),
          income: new BN(result.income),
          locked: new BN(result.locked)
        };
      } else {
        astInfo = {
          available: new BN(0),
          balance: new BN(0),
          cost: new BN(0),
          income: new BN(0),
          locked: new BN(0)
        };
      }

      return {
        assetInfo: astInfo,
        tokenId: tokenId
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
export function getAccountAssets (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenArray?: number[]) => Observable<accountsAssetInfo> {
  return memo(instanceId, (accountName: string, tokenArray?: number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery =  getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList = of(tokenArray);
    }

    const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
    const result =  tokenList.pipe(mergeMap((tkList) => {
      return combineLatest(tkList.map((tk) => getSingleAccountAssetQuery(accountName, tk)));
    }));

    return result.pipe(map(rs => {
      return {
        accountName: accountName,
        assetsInfo: rs
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
export function getManyAccountsAssets (instanceId: string, api: ApiInterfaceRx): (accountNameArray: string[], tokenArray?: number[]) => Observable<accountsAssetInfo[]> {
  return memo(instanceId, (accountNameArray: string[], tokenArray?: number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery =  getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList = of(tokenArray);
    }

    const getAccountAssetsQuery = getAccountAssets(instanceId, api);
    return tokenList.pipe(mergeMap(tkList => {
      return combineLatest(accountNameArray.map((accountName) => getAccountAssetsQuery(accountName, tkList)));
    }));
  });
}

/**
 * @name getAccountAssetIds
 * @description get all the asset Ids that account owns.
 * @param instanceId
 * @param api
 */
export function getAccountAssetIds (instanceId: string, api: ApiInterfaceRx): (accountName: string) => Observable<number[]> {
  return memo(instanceId, (accountName: string) => {
    const resultVec = api.query.assets.accountAssetIds(accountName);

    return resultVec.pipe(map((resultVec) => {
      return resultVec.map(result => result.toNumber())
    }));
  });
}



