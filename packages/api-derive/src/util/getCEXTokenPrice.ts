// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import ccxt from 'ccxt';
import { bifrostTokenList, nonVtoken, bifrostNonTokenList } from '../type';

/**
 * @name getBinancePrices
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
export async function getBinancePrices(){

  let pricesObj : {[index: string]:any} = {}

  const tokenPairList = bifrostTokenList.map((token) => {  // not include aUSD price
    return token + '/USDT';
  });
  const exchange =  await new ccxt.binance();
  const allTickers = await exchange.fetchTickers();

  tokenPairList.forEach((tokenPair, idx) => {
    let price = allTickers[tokenPair]['open'] || 0;
    pricesObj[bifrostTokenList[idx]] = new BN(price);
  } );

  pricesObj['aUSD'] = new BN(1);  // add aUSD price

  return pricesObj;
}

/**
 * @name getCEXDesignatedTokenPrices
 * @description get Token information
 */
export async function getCEXDesignatedTokenPrices (tokenNames?: nonVtoken[]) {
  let tkNames;

  if (tokenNames === undefined) {
    tkNames = bifrostNonTokenList;
  } else {
    tkNames = tokenNames;
  }

  const allPrices =  await getBinancePrices();
  let pricesObj : {[index: string]:any} = {};

  tkNames.forEach((tk) => {
    pricesObj = allPrices[tk] || new BN(0);
  });

  return pricesObj;
}
