// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenPoolInfo } from "../type/index";
import { ApiInterfaceRx } from "@polkadot/api/types";
import { map, mergeMap } from "rxjs/operators";
import { Observable, combineLatest, of } from "rxjs";
import { timestampAndConvertPrice } from "../type";
import {
  getAllVtokenConvertInfo,
  getAllConvertPriceInfo,
  getAllAnnualizedRate,
  getBatchConvertPrice,
  getConvertPriceInfo,
} from "../vtokenMint";
import { getAllTokenInfo, getAllTokenIdList, getTokenInfo } from "../assets";
import { generateBachBlockHeightList, getBatchBlockHash } from "../util";
import { memo } from "@polkadot/api-derive/util";
import BN from "bn.js";
import { getBalancerPoolTokenPairQuotePrice } from "../swap";

/**
 * @name getAllTokenPoolInfo
 * @description get all vToken aggregated pool information
 * @param instanceId
 * @param api
 */
export function getAllTokenPoolInfo(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenArray?: number[]) => Observable<DeriveVtokenPoolInfo[]> {
  return memo(instanceId, (tokenArray?: number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      const getAllTokenIdLisQuery = getAllTokenIdList(instanceId, api);
      tokenList = getAllTokenIdLisQuery();
    } else {
      tokenList = of(tokenArray);
    }

    const getTokenInfoQuery = getAllTokenInfo(instanceId, api);
    const getAllVtokenConvertInfoQuery = getAllVtokenConvertInfo(instanceId, api);
    const getAllConvertPriceInfoQuery = getAllConvertPriceInfo(instanceId, api);
    const getAllAnnualizedRateQuery = getAllAnnualizedRate(instanceId, api);

    return tokenList.pipe(
      mergeMap((tokenList) => {
        return combineLatest([
          getTokenInfoQuery(tokenList),
          getAllVtokenConvertInfoQuery(tokenList),
          getAllConvertPriceInfoQuery(tokenList),
          getAllAnnualizedRateQuery(tokenList),
        ]).pipe(
          map(([assetsInfo, convertInfo, convertPriceInfo, annualizedRateInfo]) => {
            return assetsInfo.map((vtk, i) => {
              return {
                annualizedRate: annualizedRateInfo[i],
                convertPrice: convertPriceInfo[i],
                tokenId: tokenList[i],
                tokenPool: new BN(convertInfo[i].token_pool),
                totalSupply: new BN(vtk.totalSupply),
              };
            });
          })
        );
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

export function getVtokenConvertPriceHistory(
  instanceId: string,
  api: ApiInterfaceRx
): (
  tokenId: number,
  intervalBlocks?: number,
  totalHistoryBlockNumber?: number
) => Observable<timestampAndConvertPrice> {
  return memo(instanceId, (tokenId: number, intervalBlocks?: number, totalHistoryBlockNumber?: number) => {
    const generateBachBlockHeightListQuery = generateBachBlockHeightList(instanceId, api);
    const getBatchConvertPriceQuery = getBatchConvertPrice(instanceId, api);
    const getBatchBlockHashQuery = getBatchBlockHash(instanceId, api);

    const result = generateBachBlockHeightListQuery(intervalBlocks, totalHistoryBlockNumber);

    return result.pipe(
      mergeMap((resultSet) => {
        const timestampList = resultSet.timestampList;
        const blockHeightList = resultSet.blockHeightList;
        const blockHashArray = getBatchBlockHashQuery(blockHeightList);
        const convertPriceArray = getBatchConvertPriceQuery(tokenId, blockHashArray);

        return convertPriceArray.pipe(
          map((convertPriceList) => {
            return {
              convertPriceList: convertPriceList,
              timestampList: timestampList,
            };
          })
        );
      })
    );
  });
}

/**
 * @name getVtokenMarketPriceValue
 * @description get vToken market Price
 * @param instanceId
 * @param api
 */
export function getVtokenMarketPriceValue(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenId: number) => Observable<number> {
  return memo(instanceId, (tokenId: number) => {
    let baseTokenId: number;

    // 判断一下是不是vtoken，是的话就去获取，不是的话，就返回 1.
    const getTokenInfoQuery = getTokenInfo(instanceId, api);
    const tokenInfo = getTokenInfoQuery(tokenId);

    return tokenInfo.pipe(
      mergeMap((tokenInfo) => {
        if (tokenInfo.tokenType === 3) {
          // 如果是个vtoken
          baseTokenId = tokenInfo.pair;
          const getBalancerPoolTokenPairQuotePriceQuery = getBalancerPoolTokenPairQuotePrice(instanceId, api);

          return getBalancerPoolTokenPairQuotePriceQuery(baseTokenId, tokenId);
        } else {
          return of(1);
        }
      })
    );
  });
}

/**
 * @name getVtokenConvertPriceValue
 * @description get vToken convert Price
 * @param instanceId
 * @param api
 */
export function getVtokenConvertPriceValue(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenId: number) => Observable<number> {
  return memo(instanceId, (tokenId: number) => {
    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);

    return getConvertPriceInfoQuery(tokenId);
  });
}

/**
 * @name getVtokenPriceDiff
 * @description get the difference between current convert price and market price of vtoken.
 * @param instanceId
 * @param api
 */
export function getVtokenPriceDiff(instanceId: string, api: ApiInterfaceRx): (tokenId: number) => Observable<number> {
  return memo(instanceId, (tokenId: number) => {
    const getVtokenMarketPriceQuery = getVtokenMarketPriceValue(instanceId, api);
    const currentMarketPrice = getVtokenMarketPriceQuery(tokenId);

    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
    const currentConvertPrice = getConvertPriceInfoQuery(tokenId);

    return combineLatest([currentMarketPrice, currentConvertPrice]).pipe(
      map(([marketPrice, convertPrice]) => {
        return convertPrice - marketPrice;
      })
    );
  });
}
