// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Token, TokenSymbol } from '@bifrost-finance/types/interfaces';
import { memo } from '../util';
import { vToken } from '../type';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol | 'aUSD'|'DOT'|'vDOT'|'KSM'|'vKSM'|'EOS'|'vEOS' | number | Uint8Array) => Observable<Token> {
  return memo(instanceId, (tokenSymbol: TokenSymbol | 'aUSD'|'DOT'|'vDOT'|'KSM'|'vKSM'|'EOS'|'vEOS' | number | Uint8Array) => {
    return api.query.assets.tokens(tokenSymbol).pipe(
      map((result: Token) => result)
    );
  });
}

/**
 * @name getAllTokenInfo
 * @description get all vToken information
 * @param instanceId
 * @param api
 */
export function getAllTokenInfo (instanceId: string, api: ApiInterfaceRx): (vTokenArray?:vToken[]) => Observable<Token[]> {
  return memo(instanceId, (vTokenArray?:vToken[]):any => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getTokenInfoQuery = getTokenInfo(instanceId, api);

    return combineLatest(vTokenList.map((vtk) => getTokenInfoQuery(vtk)));
  });
}

// /**
//  * @name getTokenSupply
//  * @description get Token total supply information
//  * @param instanceId
//  * @param api
//  */
// export function getTokenSupply (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol) => Observable<Balance> {
//   return memo(instanceId, (tokenSymbol: TokenSymbol):any => {
//     const getTokenInfoQuery = getTokenInfo(instanceId, api);

//     return getTokenInfoQuery(tokenSymbol).pipe(
//       map((result) => {
//         return result.totalSupply;
//       }
//       )
//     );
//   });
// }
