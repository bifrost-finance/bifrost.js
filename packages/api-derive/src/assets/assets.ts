// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Token, TokenSymbol } from '@bifrost-finance/types/interfaces';
import { memo } from '../util/memo';

/**
 * @name assets
 * @description get assets information
 * @param instanceId
 * @param api
 */
export function assets (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: TokenSymbol) => Observable<Token> {
  return memo(instanceId, (tokenSymbol: TokenSymbol) => {
    return api.query.assets.tokens(tokenSymbol).pipe(
      map((result: Token) => result)
    );
  });
}
