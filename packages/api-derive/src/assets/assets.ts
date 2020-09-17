// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Token, TokenSymbol } from '@bifrost-finance/types/interfaces';
import { Balance } from '@polkadot/types/interfaces/runtime';
import { memo } from '../util';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol) => Observable<Token> {
  return memo(instanceId, (tokenSymbol: TokenSymbol) => {
    return api.query.assets.tokens(tokenSymbol).pipe(
      map((result: Token) => result)
    );
  });
}

/**
 * @name getTokenSupply
 * @description get Token total supply information
 * @param instanceId
 * @param api
 */
export function getTokenSupply (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol) => Observable<Balance> {
  return memo(instanceId, (tokenSymbol: TokenSymbol):any => {
    const getTokenInfoQuery = getTokenInfo(instanceId, api);

    return getTokenInfoQuery(tokenSymbol).pipe(
      map((result) => {
        return result.totalSupply;
      }
      )
    );
  });
}
