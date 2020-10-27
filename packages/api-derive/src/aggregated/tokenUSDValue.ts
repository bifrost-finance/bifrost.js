// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable, of, from, combineLatest } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { memo } from '@polkadot/api-derive/util';
import BN from 'bn.js';
import { getSingleAccountAsset, getAccountAssets, accountAsset } from '../assets';
import { getConvertPriceInfo, getAllConvertPriceInfo } from '../convert';
import { allTokens, vToken, symbolUSDValue, bifrostTokenList, bifrostVtokenList, bifrostAllTokenList, nonVtoken, symbolUSDValueFields, bifrostNonVtokenList, PRECISION } from '../type';
import ccxt from 'ccxt';

/**
 * @name getAccountSingleTokenUSDValue
 * @description calculate the value of specific token from an account in the form of USDT
 * @param instanceId
 * @param api
 */
export function getAccountSingleTokenUSDValue (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenSymbol: allTokens) => Observable<symbolUSDValue> {
  return memo(instanceId, (accountName: string, tokenSymbol: allTokens) => {
    const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
    const assetBalanceInfo = getSingleAccountAssetQuery(accountName, tokenSymbol);

    const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
    let tkName: string;
    let convertPrice;
    let tokenUSDPrice;

    return assetBalanceInfo.pipe(mergeMap((balanceInfo) => {
      const tokenName = balanceInfo.tokenName;
      const tokenBalanceObj: {[index: string]: any} = {};

      if (bifrostTokenList.includes(tokenName)) {
        tkName = tokenName;
        convertPrice = of(1);
        tokenUSDPrice = from(getCEXDesignatedTokenPrices([tkName as nonVtoken]));
      } else if (bifrostVtokenList.includes(tokenName)) {
        tkName = tokenName.slice(1); // get the corresponding token
        convertPrice = getConvertPriceInfoQuery(tokenName as vToken);
        tokenUSDPrice = from(getCEXDesignatedTokenPrices([tkName as nonVtoken]));
      } else { // this can only be aUSD
        tkName = 'aUSD';
        convertPrice = of(1);
        tokenUSDPrice = of({ tkName: 1 });
      }

      tokenBalanceObj.symbol = tokenName;

      type balanceItemType = keyof accountAsset; // Get all the subkeys of the interface accountAsset
      const balanceItemArray = Object.keys(balanceInfo.assetInfo);

      return combineLatest([tokenUSDPrice, convertPrice]).pipe(map(([usdPrice, cvtPrice]) => {
        balanceItemArray.map((filed) => {
          const itemBalance = balanceInfo.assetInfo[filed as balanceItemType];

          tokenBalanceObj[filed] = usdPrice[tkName] * itemBalance.div(PRECISION).toNumber() * cvtPrice;
        });

        return tokenBalanceObj as symbolUSDValue;
      }));
    }));
  });
}

/**
 * @name getAccountManyTokenUSDValues
 * @description get the total value of multiple tokens from an account in the form of USDT
 * @param instanceId
 * @param api
 */
export function getAccountManyTokenUSDValues (instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenArray?: allTokens[]) => Observable<symbolUSDValue[]> {
  return memo(instanceId, (accountName: string, tokenArray?: allTokens[]) => {
    const getAllConvertPriceInfoQuery = getAllConvertPriceInfo(instanceId, api);
    const vTokenList = bifrostVtokenList as vToken[];
    const vTokenConvertPrices = getAllConvertPriceInfoQuery(vTokenList); // all vToken convert prices

    const getAccountAssetsQuery = getAccountAssets(instanceId, api);
    let tokenList: allTokens[];

    if (tokenArray === undefined) {
      tokenList = bifrostAllTokenList as allTokens[];
    } else {
      tokenList = tokenArray;
    }

    const assetsBalanceInfo = getAccountAssetsQuery(accountName, tokenList); // all assets of an account
    const tokensUSDPrices = from(getCEXDesignatedTokenPrices()); // all token USD prices

    return combineLatest([assetsBalanceInfo, tokensUSDPrices, vTokenConvertPrices]).pipe(map(([balanceInfo, usdPriceObj, cvtPriceArray]) => {
      let tokenBalance = new BN(0);
      let convertPrice;
      let tokenUSDPrice;
      const tokenBalancesArray = balanceInfo.assetsInfo;

      return tokenList.map((tokenName) => {
        const tkAssentInfoObj: {[index: string]:any} = tokenBalancesArray.find((assetInfoObj) => assetInfoObj.tokenName === tokenName) || {};
        const fieldNames: string[] = symbolUSDValueFields; // get the object keys of type accountAsset.
        const obj: {[index: string]:any} = { symbol: tokenName }; // initialize the object with the property name of 'symbol'.

        fieldNames.forEach((field) => {
          tokenBalance = tkAssentInfoObj?.assetInfo?.[field] || new BN(0);
          const idx = vTokenList.findIndex((vtk) => vtk === tokenName);

          if (bifrostTokenList.includes(tokenName)) {
            convertPrice = 1; // convertPrice is an instance of Observable<number>
            tokenUSDPrice = usdPriceObj[tokenName];
          } else if (bifrostVtokenList.includes(tokenName)) {
            const tkName = tokenName.slice(1); // get the corresponding token

            convertPrice = cvtPriceArray[idx];
            tokenUSDPrice = usdPriceObj[tkName];
          } else { // this can only be aUSD
            convertPrice = 1;
            tokenUSDPrice = 1;
          }

          obj[field] = tokenUSDPrice * tokenBalance.div(PRECISION).toNumber() * convertPrice;
        });

        return obj as symbolUSDValue;
      });
    }));
  });
}

/**
 * @name getAccountTotalValue
 * @description get value of current balance of an account in the from of USDT
 * @param instanceId
 * @param api
 */
export function getAccountTotalValue (instanceId: string, api: ApiInterfaceRx): (accountName: string) => Observable<number> {
  return memo(instanceId, (accountName: string) => {
    const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
    const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

    return accountTokenUSDValuesArray.pipe(map((accountTokenUSDValuesList) => {
      let sumValue = 0;

      accountTokenUSDValuesList.forEach((accountTokenUSDValue) => {
        sumValue = sumValue + accountTokenUSDValue.balance;
      });

      return sumValue;
    }));
  });
}

/**
 * @name getAccountIncomeValue
 * @description get value of total income of an account in the from of USDT
 * @param instanceId
 * @param api
 */
export function getAccountIncomeValue (instanceId: string, api: ApiInterfaceRx): (accountName: string) => Observable<number> {
  return memo(instanceId, (accountName: string) => {
    const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
    const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

    return accountTokenUSDValuesArray.pipe(map((accountTokenUSDValuesList) => {
      let sumValue = 0;

      accountTokenUSDValuesList.forEach((accountTokenUSDValue) => {
        sumValue = sumValue + accountTokenUSDValue.income;
      });

      return sumValue;
    }));
  });
}

/**
 * @name getBinancePrices
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
async function getBinancePrices () {
  const pricesObj : {[index: string]:any} = {};

  const tokenPairList = bifrostTokenList.map((token) => { // not include aUSD price
    return token + '/USDT';
  });
  const exchange = new ccxt.binance();
  const allTickers = await exchange.fetchTickers();

  tokenPairList.forEach((tokenPair, idx) => {
    const price = allTickers[tokenPair].open || 0;

    pricesObj[bifrostTokenList[idx]] = price;
  });

  pricesObj.aUSD = 1; // add aUSD price

  return pricesObj;
}

/**
 * @name getCEXDesignatedTokenPrices
 * @description get current prices of specific tokens from Binance exchange
 */
async function getCEXDesignatedTokenPrices (tokenNames?: nonVtoken[]) {
  let tkNames;

  if (tokenNames === undefined) {
    tkNames = bifrostNonVtokenList;
  } else {
    tkNames = tokenNames;
  }

  const allPrices = await getBinancePrices();
  const pricesObj : {[index: string]:number} = {};

  tkNames.forEach((tk) => {
    pricesObj[tk] = allPrices[tk] || 0;
  });

  return pricesObj;
}
