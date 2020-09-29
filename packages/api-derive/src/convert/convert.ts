// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { ConvertPool } from '@bifrost-finance/types/interfaces';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { memo, getDesignatedBlockHash } from '../util';
import BN from 'bn.js';
import { vToken } from '../type';

/**
 * @name getPoolInfo
 * @description get Single Token Pool information
 * @param instanceId
 * @param api
 */

/** Some notes for understanding:
* Memo function takes two parameters, of which the second is a function.
* The return value of memo is the function we've sent to it as a parameter for cache optimization sake.
* The returned function from memo is also the return value of function getPoolInfo which is shown in the latter part of the function signature.
* The returned function's input parameters are tokenSymbol and preBlockHash, and output is a Observable<ConvertPool> type.
*/

export function getPoolInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken, preBlockHash?: BlockHash) => Observable<ConvertPool> {
  return memo(instanceId, (tokenSymbol: vToken, preBlockHash?: BlockHash) => {
    if (preBlockHash === undefined) {
      return api.query.convert.pool(tokenSymbol);
    } else {
      return api.query.convert.pool.at(preBlockHash, tokenSymbol);
    }
  });
}

/**
 * @name getAllVtokenConvertInfo
 * @description get all vToken convertPool information
 * @param instanceId
 * @param api
 */
export function getAllVtokenConvertInfo (instanceId: string, api: ApiInterfaceRx): (vTokenArray?:vToken[]) => Observable<ConvertPool[]> {
  return memo(instanceId, (vTokenArray?:vToken[]):any => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getPoolInfoQuery = getPoolInfo(instanceId, api);

    return combineLatest(vTokenList.map((vtk) => getPoolInfoQuery(vtk)));
  });
}

/**
 * @name getConvertPriceInfo
 * @description get single Token/vToken convert price information
 * @param instanceId
 * @param api
 */
export function getConvertPriceInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken, preBlockHash?: BlockHash) => Observable<BN> {
  return memo(instanceId, (tokenSymbol: vToken, preBlockHash?: BlockHash) => {
    const convertPoolQuery = getPoolInfo(instanceId, api);

    return convertPoolQuery(tokenSymbol, preBlockHash).pipe(
      map((result) => {
        let convertPrice;
        const tokenPool = new BN(result.token_pool.toNumber());

        if (result.vtoken_pool.toNumber()) {
          const vtokenPool = new BN(result.vtoken_pool.toNumber());

          convertPrice = tokenPool.div(vtokenPool);
        } else {
          convertPrice = new BN(0);
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
export function getAllConvertPriceInfo (instanceId: string, api: ApiInterfaceRx): (vTokenArray?:vToken[]) => Observable<BN[]> {
  return memo(instanceId, (vTokenArray?:vToken[]):any => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);

    return combineLatest(vTokenList.map((vtk) => getConvertPriceInfoQuery(vtk)));
  });
}

/**
 * @name getAnnualizedRate
 * @description get Single Token Annualized Rate information
 * @param instanceId
 * @param api
 */
export function getAnnualizedRate (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken) => Observable<BN> {
  return memo(instanceId, (tokenSymbol: vToken) => {
    const convertPriceQuery = getConvertPriceInfo(instanceId, api);

    // Query the convert price of current block
    const currentPrice$ = convertPriceQuery(tokenSymbol);

    // Query the convert price of the designated block
    const preBlockHashQuery = getDesignatedBlockHash(instanceId, api);
    const historicalPrice$ = preBlockHashQuery().pipe(
      mergeMap((result) => { // mergeMap operator is used to flatten the two levels of Observables into one.
        if (result === undefined) {
          return of(new BN(0));
        } else {
          return convertPriceQuery(tokenSymbol, result);
        }
      }
      )
    );

    // combine two Observables together, destruct the values we need, and do necessary calculations before returning the results.
    return combineLatest([
      currentPrice$,
      historicalPrice$
    ]).pipe(
      map(([currentPrice, historicalPrice]): BN => {
        let annualizedRate: BN;

        if (historicalPrice.toNumber() !== 0) {
          annualizedRate = currentPrice.sub(historicalPrice).div(historicalPrice).div(new BN(7)).mul(new BN(365));
        } else {
          annualizedRate = new BN(0);
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
export function getAllAnnualizedRate (instanceId: string, api: ApiInterfaceRx): (vTokenArray?:vToken[]) => Observable<BN[]> {
  return memo(instanceId, (vTokenArray?:vToken[]):any => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getAnnualizedRateQuery = getAnnualizedRate(instanceId, api);

    return combineLatest(vTokenList.map((vtk) => getAnnualizedRateQuery(vtk)));
  });
}

