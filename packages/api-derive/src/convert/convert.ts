// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { ConvertPool, TokenSymbol } from '@bifrost-finance/types/interfaces';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { memo, getDesignatedBlockHash } from '../util';
import BN from 'bn.js';

/**
 * @name getPoolInfo
 * @description get Single Token Pool information
 * @param instanceId
 * @param api
 */

/** Some notes for understanding:
* memo function takes two parameters, of which the second is a function.
* The return value of memo is the function we've sent to it as a parameter for cache optimization sake.
* The returned function from memo is also the return value of function getPoolInfo which is shown in the latter part of the function signature.
* The returned function's input parameters are tokenSymbol and preBlockHash, and output is a Observable<ConvertPool> type.
*/

export function getPoolInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol, preBlockHash?: BlockHash) => Observable<ConvertPool> {
  return memo(instanceId, (tokenSymbol: TokenSymbol, preBlockHash?: BlockHash) => {
    if (preBlockHash === undefined) {
      return api.query.convert.pool(tokenSymbol);
    } else {
      return api.query.convert.pool.at(preBlockHash, tokenSymbol);
    }
  });
}

/**
 * @name getConvertPriceInfo
 * @description get single Token/vToken convert price information
 * @param instanceId
 * @param api
 */
export function getConvertPriceInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol, preBlockHash?: BlockHash) => Observable<BN> {
  return memo(instanceId, (tokenSymbol: TokenSymbol, preBlockHash?: BlockHash) => {
    const convertPoolQuery = getPoolInfo(instanceId, api);

    return convertPoolQuery(tokenSymbol, preBlockHash).pipe(
      map((result) => {
        const tokenPool = new BN(result.token_pool.toNumber());
        const vtokenPool = new BN(result.vtoken_pool.toNumber());
        const convertPrice = tokenPool.div(vtokenPool);

        return convertPrice;
      })
    );
  });
}

/**
 * @name getAnnualizedRate
 * @description get Single Token Annualized Rate information
 * @param instanceId
 * @param api
 */
export function getAnnualizedRate (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol) => Observable<BN> {
  return memo(instanceId, (tokenSymbol: TokenSymbol) => {
    const convertPriceQuery = getConvertPriceInfo(instanceId, api);

    // Query the convert price of current block
    const currentPrice$ = convertPriceQuery(tokenSymbol);

    // Query the convert price of the designated block
    const preBlockHashQuery = getDesignatedBlockHash(instanceId, api);
    const historicalPrice$ = preBlockHashQuery().pipe(
      mergeMap((result) => { // mergeMap operator is used to flattern the two levels of Oberverbles into one.
        return convertPriceQuery(tokenSymbol, result);
      }
      )
    );

    // combine two Observables togeter, destruct the values we need, and do necessary calculations before retrunning the results.
    return combineLatest([
      currentPrice$,
      historicalPrice$
    ]).pipe(
      map(([currentPrice, historicalPrice]): BN => {
        const annualizedRate = currentPrice.sub(historicalPrice).div(historicalPrice).div(new BN(7)).mul(new BN(365));

        return annualizedRate;
      }
      )
    );
  }
  );
}
