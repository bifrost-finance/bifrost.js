// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from "@polkadot/api/types";
import { Observable, of, combineLatest } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { memo } from "@polkadot/api-derive/util";
import {
  getSingleAccountAsset,
  getAccountAssets,
  accountAsset,
  getTokenInfo,
  getTokenSymbolList,
  getAllTokenIdList,
  getAllTokenInfo,
  getAccountAssetIds,
} from "../assets";
import { getConvertPriceInfo, getAllConvertPriceInfo } from "../convert";
import { symbolUSDValue, PRECISION } from "../type";
import ccxt from "ccxt";

/**
 * @name getAccountSingleTokenUSDValue
 * @description calculate the value of specific token from an account in the form of USDT
 * @param instanceId
 * @param api
 */
export function getAccountSingleTokenUSDValue(
  instanceId: string,
  api: ApiInterfaceRx
): (accountName: string, tokenId: number) => Observable<symbolUSDValue> {
  return memo(instanceId, (accountName: string, tokenId: number) => {
    const getTokenInfoQuery = getTokenInfo(instanceId, api);
    const tokenDetail = getTokenInfoQuery(tokenId);

    const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
    const assetBalanceInfo = getSingleAccountAssetQuery(accountName, tokenId);

    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
    let convertPrice: Observable<number>;
    let tokenUSDPrice: Observable<{ [index: string]: number }>;

    return combineLatest([tokenDetail, assetBalanceInfo]).pipe(
      mergeMap(([tkDetail, balanceInfo]) => {
        const tokenBalanceObj: { [index: string]: any } = {};
        tokenBalanceObj.tokenId = tokenId;

        const getCEXDesignatedTokenPricesQuery = getCEXDesignatedTokenPrices(instanceId, api);
        tokenUSDPrice = getCEXDesignatedTokenPricesQuery([tokenId]);

        const tokenType = tkDetail.tokenType; // 0是Native(BNC), 1是Stable， 2是Token, 3是 VToken
        if (tokenType === 3) {
          // 如果是vtoken，查询下转换价格
          convertPrice = getConvertPriceInfoQuery(tokenId);
        } else {
          // 如果是token, stable coin， 或者是BNC。现在BNC未上交易所，价格获取过来为0。
          convertPrice = of(1);
        }

        type balanceItemType = keyof accountAsset; // Get all the subkeys of the interface accountAsset
        const balanceItemArray = Object.keys(balanceInfo.assetInfo);

        return combineLatest([tokenUSDPrice, convertPrice]).pipe(
          map(([usdPrice, cvtPrice]) => {
            balanceItemArray.map((filed) => {
              const itemBalance = balanceInfo.assetInfo[filed as balanceItemType];

              tokenBalanceObj[filed] = usdPrice[tokenId.toString()] * itemBalance.div(PRECISION).toNumber() * cvtPrice;
            });

            return tokenBalanceObj as symbolUSDValue;
          })
        );
      })
    );
  });
}

/**
 * @name getAccountManyTokenUSDValues
 * @description get the total value of multiple tokens from an account in the form of USDT
 * @param instanceId
 * @param api
 */
export function getAccountManyTokenUSDValues(
  instanceId: string,
  api: ApiInterfaceRx
): (accountName: string, tokenArray?: number[]) => Observable<symbolUSDValue[]> {
  return memo(instanceId, (accountName: string, tokenArray?: number[]) => {
    let tokenList: Observable<number[]>;

    if (!tokenArray || tokenArray.length === 0) {
      // if not provided with token array, then get the user's asset ids.
      const getAccountAssetIdsQuery = getAccountAssetIds(instanceId, api);
      tokenList = getAccountAssetIdsQuery(accountName);
      // 如果账户没有资产咋办，则默认只查BNC一个资产
      tokenList = tokenList.pipe(
        map((tkList) => {
          if (tkList.length === 0) {
            return [0];
          } else {
            return tkList;
          }
        })
      );
    } else {
      tokenList = of(tokenArray);
    }

    return tokenList.pipe(
      mergeMap((tokenList) => {
        const getAllConvertPriceInfoQuery = getAllConvertPriceInfo(instanceId, api);
        const tokenConvertPrices = getAllConvertPriceInfoQuery(tokenList); // all vToken convert prices

        const getAccountAssetsQuery = getAccountAssets(instanceId, api);
        const assetsBalanceInfo = getAccountAssetsQuery(accountName, tokenList); // all assets of an account

        const getCEXDesignatedTokenPricesQuery = getCEXDesignatedTokenPrices(instanceId, api);
        const tokensUSDPrices = getCEXDesignatedTokenPricesQuery(tokenList); // all token USD prices

        type balanceItemType = keyof accountAsset; // Get all the subkeys of the interface accountAsset

        return combineLatest([assetsBalanceInfo, tokensUSDPrices, tokenConvertPrices]).pipe(
          map(([balanceInfo, usdPriceObj, cvtPriceArray]) => {
            const tokenBalancesArray = balanceInfo.assetsInfo;
            const balanceItemArray = Object.keys(tokenBalancesArray[0].assetInfo); // get the keys of accountAsset type.

            return tokenList.map((tk, idx) => {
              let tokenBalanceObj: { [index: string]: any } = {};
              tokenBalanceObj["tokenId"] = tk;

              balanceItemArray.forEach((filed) => {
                const itemBalance = tokenBalancesArray[tk].assetInfo[filed as balanceItemType];

                tokenBalanceObj[filed] =
                  usdPriceObj[tk.toString()] * itemBalance.div(PRECISION).toNumber() * cvtPriceArray[idx];
              });

              return tokenBalanceObj as symbolUSDValue;
            });
          })
        );
      })
    );
  });
}

/**
 * @name getAccountTotalValue
 * @description get value of current balance of an account in the from of USDT
 * @param instanceId
 * @param api
 */
export function getAccountTotalValue(
  instanceId: string,
  api: ApiInterfaceRx
): (accountName: string) => Observable<number> {
  return memo(instanceId, (accountName: string) => {
    const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
    const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

    return accountTokenUSDValuesArray.pipe(
      map((accountTokenUSDValuesList) => {
        let sumValue = 0;

        accountTokenUSDValuesList.forEach((accountTokenUSDValue) => {
          sumValue = sumValue + accountTokenUSDValue.balance;
        });

        return sumValue;
      })
    );
  });
}

/**
 * @name getAccountIncomeValue
 * @description get value of total income of an account in the from of USDT
 * @param instanceId
 * @param api
 */
export function getAccountIncomeValue(
  instanceId: string,
  api: ApiInterfaceRx
): (accountName: string) => Observable<number> {
  return memo(instanceId, (accountName: string) => {
    const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
    const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

    return accountTokenUSDValuesArray.pipe(
      map((accountTokenUSDValuesList) => {
        let sumValue = 0;

        accountTokenUSDValuesList.forEach((accountTokenUSDValue) => {
          sumValue = sumValue + accountTokenUSDValue.income;
        });

        return sumValue;
      })
    );
  });
}

/**
 * @name getBinancePrices
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
async function getBinancePrices(tokenNameList: string[]) {
  const pricesObj: { [index: string]: any } = {};

  const tokenPairList = tokenNameList.map((token) => {
    // not include aUSD price
    return token + "/USDT";
  });
  const exchange = new ccxt.binance();
  const allTickers = await exchange.fetchTickers();

  tokenPairList.forEach((tokenPair, idx) => {
    const price = allTickers[tokenPair]?.open || 0;

    pricesObj[tokenNameList[idx]] = price;
  });

  pricesObj.aUSD = 1; // add aUSD price, ????

  return pricesObj;
}

/**
 * @name getCEXDesignatedTokenPrices
 * @description get current prices of specific tokens from Binance exchange. Can accept any kind of tokens.
 */
export function getCEXDesignatedTokenPrices(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenIdArray?: number[]) => Observable<{ [index: string]: number }> {
  return memo(instanceId, (tokenIdArray?: number[]) => {
    let tokenIdList: Observable<number[]>;
    let tokenQuerySet: Set<number> = new Set();
    let pricesObj: { [index: string]: number } = {};
    let pricesObjTemp: { [index: string]: number } = {};

    if (!tokenIdArray || tokenIdArray.length === 0) {
      const getAllTokenIdListQuery = getAllTokenIdList(instanceId, api);
      tokenIdList = getAllTokenIdListQuery();
    } else {
      tokenIdList = of(tokenIdArray);
    }

    tokenIdList.pipe(
      map((tokenIdList) => {
        const getAllTokenInfoQuery = getAllTokenInfo(instanceId, api);
        const tokensInfo = getAllTokenInfoQuery(tokenIdList);

        tokensInfo.pipe(
          map((tokensInfo) => {
            tokensInfo.forEach((tokenInfo, idx) => {
              if (tokenInfo.tokenType === 2 || tokenInfo.tokenType === 0) {
                // token或BNC
                tokenQuerySet.add(tokenIdList[idx]);
              } else if (tokenInfo.tokenType === 3) {
                // vtoken
                tokenQuerySet.add(tokenInfo.pair);
              }
            });
          })
        );

        const tokenQueryList = Array.from(tokenQuerySet);
        const getTokenSymbolListQuery = getTokenSymbolList(instanceId, api);
        const nameIdObject = getTokenSymbolListQuery(tokenQueryList);

        nameIdObject.pipe(
          map(async (nameIdObj) => {
            const nameArray = Object.keys(nameIdObj);
            const idArray = Object.values(nameIdObj);

            const allPrices = await getBinancePrices(nameArray);
            nameArray.forEach((tkName, idx) => {
              pricesObjTemp[idArray[idx].toString()] = allPrices[tkName] || 0;
            });
          })
        );

        // 查完回来，我需要做一一对应的工作
        tokensInfo.pipe(
          map((tokensInfo) => {
            tokensInfo.forEach((tokenInfo, idx) => {
              let tokenIdString = tokenIdList[idx].toString();

              if (tokenInfo.tokenType === 2 || tokenInfo.tokenType === 0) {
                // token或BNC
                pricesObj[tokenIdString] = pricesObjTemp[tokenIdString];
              } else if (tokenInfo.tokenType === 3) {
                // vtoken, 则返回它pair的美元价值
                pricesObj[tokenIdString] = pricesObjTemp[tokenInfo.pair.toString()];
              } else {
                // stable coin，返回1
                pricesObj[tokenIdList[idx].toString()] = 1;
              }
            });
          })
        );
      })
    );

    return of(pricesObj);
  });
}
