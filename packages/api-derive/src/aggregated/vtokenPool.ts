// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenPoolInfo } from '../type/index';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { memo } from '../util';
import { vToken } from '../type';
import { getAllTokenInfo } from '../assets';
import { getAllVtokenConvertInfo, getAllConvertPriceInfo, getAllAnnualizedRate } from '../convert';

/**
 * @name getAllTokenPoolInfo
 * @description get all vToken aggregated pool information
 * @param instanceId
 * @param api
 */
export function getAllTokenPoolInfo (instanceId: string, api: ApiInterfaceRx): (vTokenArray?:vToken[]) => Observable<DeriveVtokenPoolInfo[]> {
  return memo(instanceId, (vTokenArray?:vToken[]):any => {
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
        assetsInfo.forEach((vtk, i) => {
          return {
            annualizedRate: annualizedRateInfo[i],
            convertPrice: convertPriceInfo[i],
            symbol: vtk.symbol.toString(),
            tokenPool: convertInfo[i].token_pool,
            totalSupply: assetsInfo[i].totalSupply
          };
        });
      })
    );
  });
}
