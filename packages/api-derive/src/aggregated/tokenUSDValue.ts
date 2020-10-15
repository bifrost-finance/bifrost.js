// // Copyright 2020 @bifrost-finance/api-derive authors & contributors
// // This software may be modified and distributed under the terms
// // of the Apache-2.0 license. See the LICENSE file for details.

// import { ApiInterfaceRx } from '@polkadot/api/types';
// import { Observable, of, from, combineLatest } from 'rxjs';
// import { map, mergeMap } from 'rxjs/operators';
// import { memo, getCEXDesignatedTokenPrices } from '../util';
// import BN from 'bn.js';
// import { getSingleAccountAsset, getAccountAssets } from '../assets';
// import { getConvertPriceInfo, getAllConvertPriceInfo } from '../convert';
// import { allTokens, vToken, symbolUSDValue, bifrostTokenList, bifrostVtokenList, bifrostAllTokenList, nonVtoken, symbolUSDValueFields } from '../type';

// /**
//  * @name getAccountSingleTokenUSDValue
//  * @description get Token information
//  * @param instanceId
//  * @param api
//  */
// export function getAccountSingleTokenUSDValue(instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenSymbol: allTokens) => Observable<symbolUSDValue> {
//     return memo(instanceId, (accountName: string, tokenSymbol: allTokens):any => {
//         const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
//         const assetBalanceInfo = getSingleAccountAssetQuery(accountName, tokenSymbol);

//         const getConvertPriceInfoQuery = getConvertPriceInfo(instanceId, api);
//         let tkName: string;
//         let convertPrice;
//         let tokenUSDPrice;

//         return assetBalanceInfo.pipe(mergeMap((balanceInfo) => {
//             const tokenName = balanceInfo['tokenName'];
//             const tokenBalance = balanceInfo['assetInfo']['balance'];
//             if (bifrostTokenList.includes(tokenName)) {
//                 tkName = tokenName;
//                 convertPrice = of(new BN(1));
//                 tokenUSDPrice = from(getCEXDesignatedTokenPrices([tkName as nonVtoken]));
//             } else if (bifrostVtokenList.includes(tokenName)) {
//                 tkName = tokenName.slice(1); // get the corresponding token 
//                 convertPrice = getConvertPriceInfoQuery(tokenName as vToken);
//                 tokenUSDPrice = from(getCEXDesignatedTokenPrices([tkName as nonVtoken]));
//             } else {  // this can only be aUSD
//                 convertPrice = of(new BN(1));
//                 tokenUSDPrice = of(new BN(1));
//             }

//             return combineLatest([tokenUSDPrice, convertPrice]).pipe(map(([usdPriceObj, cvtPrice]) => {
//                 const usdPrice: BN = usdPriceObj[tokenName];
//                 return {
//                     symbol: tokenName,
//                     usdValue: usdPrice.mul(tokenBalance).mul(cvtPrice)
//                 };
//             }))
//         }));
//     });
// }

// /**
//  * @name getAccountManyTokenUSDValues
//  * @description get Token information
//  * @param instanceId
//  * @param api
//  */
// export function getAccountManyTokenUSDValues(instanceId: string, api: ApiInterfaceRx): (accountName: string, tokenArray?: allTokens[]) => Observable<symbolUSDValue[]> {
//     return memo(instanceId, (accountName: string, tokenArray?: allTokens[]) => {
//         const getAllConvertPriceInfoQuery = getAllConvertPriceInfo(instanceId, api);
//         const vTokenList = bifrostVtokenList as vToken[];
//         const vTokenConvertPrices = getAllConvertPriceInfoQuery(vTokenList);  // all vToken convert prices

//         const getAccountAssetsQuery = getAccountAssets(instanceId, api);
//         let tokenList: allTokens[];

//         if (tokenArray === undefined) {
//             tokenList = bifrostAllTokenList as allTokens[];
//         } else {
//             tokenList = tokenArray;
//         }

//         const assetsBalanceInfo = getAccountAssetsQuery(accountName, tokenList);   // all assets of an account
//         const tokensUSDPrices = from(getCEXDesignatedTokenPrices());  // all token USD prices

//         return combineLatest([assetsBalanceInfo, tokensUSDPrices, vTokenConvertPrices]).pipe(map(([balanceInfo, usdPriceObj, cvtPriceArray]) => {
//             let tokenBalance = new BN(0);
//             let convertPrice;
//             let tokenUSDPrice;
//             const tokenBalancesArray = balanceInfo['assetsInfo'];

//             return tokenList.map((tokenName) => {
//                 let tkAssentInfoObj: {[index: string]:any} = tokenBalancesArray.find(assetInfoObj => assetInfoObj['tokenName'] === tokenName) || {};
//                 let fieldNames: string[] = symbolUSDValueFields;  // get the object keys of type accountAsset.
//                 let obj: {[index: string]:any} = { symbol: tokenName };

//                 fieldNames.forEach((field) => {
//                     tokenBalance = tkAssentInfoObj?tkAssentInfoObj['assetInfo'][field]: new BN(0);
//                     let idx = vTokenList.findIndex(vtk => vtk === tokenName);

//                     if (bifrostTokenList.includes(tokenName)) {
//                         convertPrice = of(new BN(1));
//                         tokenUSDPrice = usdPriceObj[tokenName];
//                     } else if (bifrostVtokenList.includes(tokenName)) {
//                         let tkName = tokenName.slice(1); // get the corresponding token 
//                         convertPrice = cvtPriceArray[idx];
//                         tokenUSDPrice = usdPriceObj[tkName];
//                     } else {  // this can only be aUSD
//                         convertPrice = of(new BN(1));
//                         tokenUSDPrice = of(new BN(1));
//                     }

//                     obj[field] = tokenUSDPrice.mul(tokenBalance).mul(convertPrice);
//                 }
//                 );
//                 return obj as symbolUSDValue;
//             })
//             }
//             ))
//         });
//         }

// /**
//  * @name getAccountTotalValue
//  * @description get token prices from Binance exchange
//  * @param instanceId
//  * @param api
//  */
// export function getAccountTotalValue(instanceId: string, api: ApiInterfaceRx): (accountName: string) => Observable<BN> {
//     return memo(instanceId, (accountName: string) => {
//         const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
//         const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

//         return accountTokenUSDValuesArray.pipe(map((accountTokenUSDValuesList)=>{
//             let sumValue = new BN(0);
//             accountTokenUSDValuesList.forEach((accountTokenUSDValue)=>{
//                 sumValue.add(accountTokenUSDValue['balance']);
//             });
//             return sumValue;
//         }));
//     });
// }

// /**
//  * @name getAccountIncomeValue
//  * @description get token prices from Binance exchange
//  * @param instanceId
//  * @param api
//  */
// export function getAccountIncomeValue(instanceId: string, api: ApiInterfaceRx): (accountName: string) => Observable<BN> {
//     return memo(instanceId, (accountName: string) => {
//         const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
//         const accountTokenUSDValuesArray = getAccountManyTokenUSDValuesQuery(accountName);

//         return accountTokenUSDValuesArray.pipe(map((accountTokenUSDValuesList)=>{
//             let sumValue = new BN(0);
//             accountTokenUSDValuesList.forEach((accountTokenUSDValue)=>{
//                 sumValue.add(accountTokenUSDValue['income']);
//             });
//             return sumValue;
//         }));
//     });
// }
