// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Token } from '@bifrost-finance/types/interfaces';
import { memo, getHeader } from '../util';
import { vToken } from '../type';
import { accountsAssetInfo, assetInfo } from './types';
import { AccountId } from '@polkadot/types/interfaces/runtime';
import { BlockHash } from '@polkadot/types/interfaces/chain';

/**
 * @name getTokenInfo
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getTokenInfo(instanceId: string, api: ApiInterfaceRx): (tokenSymbol: vToken) => Observable<Token> {
  return memo(instanceId, (tokenSymbol: vToken) => {
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
export function getAllTokenInfo(instanceId: string, api: ApiInterfaceRx): (vTokenArray?: vToken[]) => Observable<Token[]> {
  return memo(instanceId, (vTokenArray?: vToken[]): any => {
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

/**
 * @name getSingleAccountAsset
 * @description get one account one asset Info
 * @param instanceId
 * @param api
 */
export function getSingleAccountAsset(instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, tokenSymbol: vToken) => Observable<assetInfo> {
  return memo(instanceId, (accountName: AccountId, tokenSymbol: vToken) => {
    const result = api.query.assets.accountAssets([tokenSymbol, accountName]);
    return result.pipe(map((result)=>{
      return {
        vtokenName: tokenSymbol,
        assetInfo: result
      };
    }));
  });
}

/**
 * @name getAccountAssets
 * @description get one account all vtoken Assets Info
 * @param instanceId
 * @param api
 */
export function getAccountAssets(instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, vTokenArray?: vToken[]) => Observable<accountsAssetInfo> {
  return memo(instanceId, (accountName: AccountId, vTokenArray?: vToken[]) => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getSingleAccountAssetQuery = getSingleAccountAsset(instanceId, api);
    const result = combineLatest(vTokenList.map((vtk) => getSingleAccountAssetQuery(accountName, vtk)));

    return result.pipe(map((result) => {
      return {
        accountName: accountName,
        vAssetsInfo: result
      };
    }));
  });
}

/**
 * @name getManyAccountsAssets
 * @description get many account all vtoken Assets Info
 * @param instanceId
 * @param api
 */
export function getManyAccountsAssets(instanceId: string, api: ApiInterfaceRx): (accountNameArray: AccountId[], vTokenArray?: vToken[]) => Observable<accountsAssetInfo[]> {
  return memo(instanceId, (accountNameArray: AccountId[], vTokenArray?: vToken[]) => {
    let vTokenList: vToken[];

    if (vTokenArray === undefined) {
      vTokenList = ['vDOT', 'vKSM', 'vEOS'];
    } else {
      vTokenList = vTokenArray;
    }

    const getAccountAssetsQuery = getAccountAssets(instanceId, api);

    return combineLatest(accountNameArray.map((accountName) => getAccountAssetsQuery(accountName, vTokenList)));

  });
}


/**
 * @name getDesignatedBlockHash
 * @description get the hash value fo the designated blocks back. If no blocks back number provide, SEVEN_DAY_BLOCK_NUM will be the default value.
 * @param instanceId
 * @param api
 */

export function getDesignatedBlockHash(instanceId: string, api: ApiInterfaceRx): (numBlockBack?: number) => Observable<BlockHash> {
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
