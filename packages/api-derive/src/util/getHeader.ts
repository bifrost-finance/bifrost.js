// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { memo } from '../util';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { Header } from '@polkadot/types/interfaces';

/**
 * @name getHeader
 * @description get the header information of current block
 * @param instanceId
 * @param api
 */

export function getHeader (instanceId: string, api: ApiInterfaceRx): () => Observable<Header> {
  return memo(instanceId, (): any => {
    return api.rpc.chain.getHeader();
  }
  );
}

/**
 * @name getDesignatedBlockHash
 * @description get the hash value fo the designated blocks back. If no blocks back number provide, SEVEN_DAY_BLOCK_NUM will be the default value.
 * @param instanceId
 * @param api
 */

export function getDesignatedBlockHash (instanceId: string, api: ApiInterfaceRx): (numBlockBack?: number) => Observable<BlockHash> {
  return memo(instanceId, (numBlockBack?: number): any => {
    const BLOCK_INTERVAL = 6; // 6 seconds to generate a block
    const SEVEN_DAY_BLOCK_NUM = 7 * 24 * 60 * 60 / BLOCK_INTERVAL;

    const getHeaderQuery = getHeader(instanceId, api);
    let numBlockBackCount = 0;

    if (numBlockBack === undefined) {
      numBlockBackCount = SEVEN_DAY_BLOCK_NUM; // if no numBlockBack sent in, the default value for numBlockBack_count is SEVEN_DAY_BLOCK_NUM, which means we are querying the exact block seven days ago.
    } else {
      numBlockBackCount = numBlockBack;
    }

    return getHeaderQuery().pipe(
      map((result) => {
        api.rpc.chain.getBlockHash(result.number.unwrap().subn(numBlockBackCount));
      })
    );
  }
  );
}
