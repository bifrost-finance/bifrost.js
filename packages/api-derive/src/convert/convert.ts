// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest, of, forkJoin } from 'rxjs';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { getDesignatedBlockHash } from '../util';
import { memo } from '@polkadot/api-derive/util';
import BN from 'bn.js';
import { convertPool } from './types';
import { getAllTokenIdList, getTokenInfo } from '../assets';


/**
 * @name getPoolInfo
 * @description get Single Token Pool information. Only token type can have a corresponding pool.
 * @param instanceId
 * @param api
 */

/** Some notes for understanding:
* Memo function takes two parameters, of which the second is a function.
* The return value of memo is the function we've sent to it as a parameter for cache optimization sake.
* The returned function from memo is also the return value of function getPoolInfo which is shown in the latter part of the function signature.
* The returned function's input parameters are tokenSymbol and preBlockHash, and output is a Observable<ConvertPool> type.
*/

export function getPoolInfo (instanceId: string, api: ApiInterfaceRx): (tokenId: number, preBlockHash?: BlockHash) => Observable<convertPool> {
  return memo(instanceId, (tokenId: number, preBlockHash?: BlockHash) => {
    let result;

    const getTokenInfoQuery = getTokenInfo(instanceId, api);
    const tokenInfo = getTokenInfoQuery(tokenId);

    return tokenInfo.pipe(mergeMap((tokenInfo) => {
      if (tokenInfo.tokenType === 2) {  // if it is a token

        if (preBlockHash === undefined) {
          result = api.query.convert.pool(tokenId);
        } else {
          result = api.query.convert.pool.at(preBlockHash, tokenId);
        }

        return result.pipe(map((res) => {
          return {
            current_reward: new BN(res.current_reward),
            pending_reward: new BN(res.pending_reward),
            token_pool: new BN(res.token_pool),
            vtoken_pool: new BN(res.vtoken_pool)
          };
        }));
      } else {
        return of({
          token_pool: new BN(0),
          vtoken_pool: new BN(0),
          current_reward: new BN(0),
          pending_reward: new BN(0),
        });
      }
    }));
  });
}

/**
 * @name getAllVtokenConvertInfo
 * @description get all token convertPool information
 * @param instanceId
 * @param api
 */
export function getAllVtokenConvertInfo (instanceId: string, api: ApiInterfaceRx): (tokenArray?:number[]) => Observable<convertPool[]> {
  return memo(instanceId, (tokenArray?:number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery =  getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList = of(tokenArray);
    }

    const getPoolInfoQuery = getPoolInfo(instanceId, api);
    return tokenList.pipe(mergeMap((tokenList) => {
      return forkJoin(tokenList.map((tk) => {
        return getPoolInfoQuery(tk);
      }));
    }))
  });
}

/**
 * @name getConvertPriceInfo
 * @description get single Token/vToken convert price information
 * @param instanceId
 * @param api
 */
export function getConvertPriceInfo (instanceId: string, api: ApiInterfaceRx): (tokenId: number, preBlockHash?: BlockHash) => Observable<number> {
  return memo(instanceId, (tokenId: number, preBlockHash?: BlockHash):any => {
    const convertPoolQuery = getPoolInfo(instanceId, api);

    return convertPoolQuery(tokenId, preBlockHash).pipe(
      map((result) => {
        let convertPrice;
        const tokenPool = new BN(result.token_pool.toNumber());

        if (result.vtoken_pool.toNumber()) {
          const vtokenPool = new BN(result.vtoken_pool.toNumber());

          convertPrice = tokenPool.div(vtokenPool);
        } else {
          convertPrice = 1;  // 如果没有转换价格，那么默认convertPrice就是1。
        }

        return convertPrice;
      })
    );
  });
}

/**
 * @name getAllConvertPriceInfo
 * @description get all vToken current convert price information
 * @param instanceId
 * @param api
 */
export function getAllConvertPriceInfo (instanceId: string, api: ApiInterfaceRx): (tokenArray?:number[]) => Observable<number[]> {
  return memo(instanceId, (tokenArray?: number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery =  getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList =  of(tokenArray);
    }

    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
    return tokenList.pipe(mergeMap((tokenList) => {
      return forkJoin(tokenList.map((tk) => {
        return getConvertPriceInfoQuery(tk);
      }));
    }));
  });
}

/**
 * @name getAnnualizedRate
 * @description get Single Token Annualized Rate information
 * @param instanceId
 * @param api
 */
export function getAnnualizedRate (instanceId: string, api: ApiInterfaceRx): (tokenId: number) => Observable<number> {
  return memo(instanceId, (tokenId: number) => {
    const convertPriceQuery = getConvertPriceInfo(instanceId, api);

    // Query the convert price of current block
    const currentPrice$ = convertPriceQuery(tokenId);

    // Query the convert price of the designated block
    const preBlockHashQuery = getDesignatedBlockHash(instanceId, api);
    const historicalPrice$ = preBlockHashQuery().pipe(
      mergeMap((preHash) => { // mergeMap operator is used to flatten the two levels of Observables into one.
        return convertPriceQuery(tokenId, preHash);
      }
      )
    );

    // combine two Observables together, destruct the values we need, and do necessary calculations before returning the results.
    return combineLatest([
      currentPrice$,
      historicalPrice$
    ]).pipe(
      map(([currentPrice, historicalPrice]) => {
        let annualizedRate;

        if (historicalPrice !== 0) {
          annualizedRate = (currentPrice - historicalPrice) / (historicalPrice) / 7 * 365;
        } else {
          annualizedRate = 0;
        }

        return annualizedRate;
      }
      )
    );
  }
  );
}

/**
 * @name getAllAnnualizedRate
 * @description get all vToken Annualized Rate information
 * @param instanceId
 * @param api
 */
export function getAllAnnualizedRate (instanceId: string, api: ApiInterfaceRx): (tokenArray?:number[]) => Observable<number[]> {
  return memo(instanceId, (tokenArray?:number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery =  getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList = of(tokenArray);
    }

    const getAnnualizedRateQuery = getAnnualizedRate(instanceId, api);
    return tokenList.pipe(mergeMap((tokenList) => {
      return combineLatest(tokenList.map((vtk) => getAnnualizedRateQuery(vtk)));
    }));
  });
}

/**
 * @name getBatchConvertPrice
 * @description get the header information of current block
 * @param instanceId
 * @param api
 */

export function getBatchConvertPrice (instanceId: string, api: ApiInterfaceRx): (tokenId: number, blockHashArray: Observable<BlockHash[]>) => Observable<number[]> {
  return memo(instanceId, (tokenId: number, blockHashArray: Observable<BlockHash[]>) => {
    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);

    return blockHashArray.pipe(mergeMap((blockHashList) => {
      return combineLatest(blockHashList.map((blockHash) => {
        return getConvertPriceInfoQuery(tokenId, blockHash);
      }));
    }));
  }
  );
}
