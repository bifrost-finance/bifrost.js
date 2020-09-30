// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenPoolInfo } from '../type/index';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { memo } from '../util';
import { vToken, timestampAndConvertPrice } from '../type';
import { getAllTokenInfo } from '../assets';
import { getAllVtokenConvertInfo, getAllConvertPriceInfo, getAllAnnualizedRate, getBatchConvertPrice } from '../convert';
import { generateBachBlockHeightList, getBatchBlockHash } from '../assets';
import BN from 'bn.js';

/**
 * @name getAllTokenPoolInfo
 * @description get all vToken aggregated pool information
 * @param instanceId
 * @param api
 */
export function getAllTokenPoolInfo(instanceId: string, api: ApiInterfaceRx): (vTokenArray?: vToken[]) => Observable<DeriveVtokenPoolInfo[]> {
  return memo(instanceId, (vTokenArray?: vToken[]): any => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getTokenInfoQuery = getAllTokenInfo(instanceId, api);
    const getAllVtokenConvertInfoQuery = getAllVtokenConvertInfo(instanceId, api);
    const getAllConvertPriceInfoQuery = getAllConvertPriceInfo(instanceId, api);
    const getAllAnnualizedRateQuery = getAllAnnualizedRate(instanceId, api);

    return combineLatest(
      [getTokenInfoQuery(vTokenList),
      getAllVtokenConvertInfoQuery(vTokenList),
      getAllConvertPriceInfoQuery(vTokenList),
      getAllAnnualizedRateQuery(vTokenList)
      ]
    ).pipe(
      map(([assetsInfo, convertInfo, convertPriceInfo, annualizedRateInfo]) => {
        return assetsInfo.map((vtk, i) => {
          return {
            annualizedRate: annualizedRateInfo[i],
            convertPrice: convertPriceInfo[i],
            symbol: vTokenList[i],
            tokenPool: convertInfo[i].token_pool,
            totalSupply: vtk.totalSupply
          };
        });
      })
    );
  });
}

/**
 * @name getVtokneConvertPriceHistory
 * @description get the header information of current block
 * @param instanceId
 * @param api
 */

export function getVtokenConvertPriceHistory(instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken, intervalBlocks?: number, totalHistoryBlockNumber?: number) => Observable<timestampAndConvertPrice> {
  return memo(instanceId, (tokenSymbol: vToken, intervalBlocks?: number, totalHistoryBlockNumber?: number): any => {

    const generateBachBlockHeightListQuery = generateBachBlockHeightList(instanceId, api);
    const getBatchConvertPriceQuery = getBatchConvertPrice(instanceId, api);
    const getBatchBlockHashQuery = getBatchBlockHash(instanceId, api);

    let result = generateBachBlockHeightListQuery(intervalBlocks, totalHistoryBlockNumber);

    return result.pipe(mergeMap((resultSet) => {

      const timestampList = resultSet.timestampList;
      const blockHeightList = resultSet.blockHeightList;

      const blockHashArray = getBatchBlockHashQuery(blockHeightList)

      const convertPriceArray = getBatchConvertPriceQuery(tokenSymbol, blockHashArray);

      return convertPriceArray.pipe((map((convertPriceList) => {
        return {
          timestampList: timestampList,
          convertPriceList: convertPriceList
        }
      })));

    }));

  }
  );
}

/**
 * @name getVtokenMarketPriceValue
 * @description get vToken market Price
 * @param instanceId
 * @param api
 */
export function getVtokenMarketPriceValue(instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken) => Observable<BN> {
  return memo(instanceId, ():any => {
    return new BN(0);
      
  });
}


/**
 * @name getVtokenConvertPriceValue
 * @description get vToken market Price
 * @param instanceId
 * @param api
 */
export function getVtokenConvertPriceValue(instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken) => Observable<BN> {
  return memo(instanceId, ():any => {
    return new BN(0);
      
  });
}

/**
 * @name getVtokenPriceDiff
 * @description get the difference between current convert price and market price of vtoken.
 * @param instanceId
 * @param api
 */
export function getVtokenPriceDiff(instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken) => Observable<BN> {
  return memo(instanceId, (tokenSymbol: vToken):any => {
    // const getVtokenMarketPriceQuery = getVtokenMarketPrice(instanceId, api);
    // const currentMarketPrice = getVtokenMarketPriceQuery(tokenSymbol);

    // const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
    // const currentConvertPrice = getConvertPriceInfoQuery(tokenSymbol);

    // return combineLatest([currentMarketPrice, currentConvertPrice]).pipe((map(([marketPrice, convertPrice])=>{
    //   return convertPrice.sub(marketPrice);
    // })))

    return new BN(0);
      
  });
}


