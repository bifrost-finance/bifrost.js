// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { memo } from '@polkadot/api-derive/util';
import BN from 'bn.js';
import { allTokens } from '../type';
import { BalancerPoolGlobalAllInfo, BalancerPoolGlobalTokenInfo, BalancerPoolTokenPairInfo } from './types';

/**
 * @name getBalancerGlobalPoolInfo
 * @description get the global pool info from the Balancer pool
 * @param instanceId
 * @param api
 */

export function getBalancerGlobalPoolInfo (instanceId: string, api: ApiInterfaceRx): () => Observable<BalancerPoolGlobalAllInfo> {
  return memo(instanceId, () => {
    const balancerGlobalPoolInfo = api.query.swap.globalPool();

    return balancerGlobalPoolInfo.pipe(map((globalPoolInfo) => {
      const invariant: BN = new BN(globalPoolInfo[1]);

      const tokenInfoArray: BalancerPoolGlobalTokenInfo[] = globalPoolInfo[0].map((tokenInfo) => {
        return {
          balance: new BN(tokenInfo[1].toString()),
          poolWeight: tokenInfo[2].toNumber(),
          symbol: tokenInfo[0].toString()
        };
      });

      return {
        balancerTokenInfoArray: tokenInfoArray,
        invariantValue: invariant
      };
    }));
  });
}

/**
 * @name getTokenPairBalancerPoolInfo
 * @description get token pair info from the Balancer pool
 * @param instanceId
 * @param api
 */

export function getTokenPairBalancerPoolInfo (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => Observable<BalancerPoolTokenPairInfo> {
  return memo(instanceId, (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => {
    let tkInfo: BalancerPoolGlobalTokenInfo;
    let quoteTkInfo: BalancerPoolGlobalTokenInfo;

    const balancerGlobalPoolInfoQuery = getBalancerGlobalPoolInfo(instanceId, api);
    const globalPoolInfo = balancerGlobalPoolInfoQuery();

    return globalPoolInfo.pipe(map((poolInfo) => {
      const tokenArray = poolInfo.balancerTokenInfoArray;

      tokenArray.forEach((tokenInfo) => {
        if (tokenInfo.symbol === tokenSymbol) {
          tkInfo = tokenInfo;
        } else if (tokenInfo.symbol === quoteTokenSymbol) {
          quoteTkInfo = tokenInfo;
        }
      });

      return {
        baseTokenInfo: tkInfo,
        quoteTokenInfo: quoteTkInfo
      };
    }));
  });
}

/**
 * @name getBalancerPoolTokenPairQuotePrice
 * @description get the quote price from the Balancer pool for a specific token pair
 * @param instanceId
 * @param api
 */

export function getBalancerPoolTokenPairQuotePrice (instanceId: string, api: ApiInterfaceRx): (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => Observable<number> {
  return memo(instanceId, (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => {
    let quotePrice = 0;
    const getTokenPairBalancerPoolInfoQuery = getTokenPairBalancerPoolInfo(instanceId, api);
    const tokenPairInfo = getTokenPairBalancerPoolInfoQuery(tokenSymbol, quoteTokenSymbol);

    return tokenPairInfo.pipe(map((tkPairInfo) => {
      const baseTokenInfo = tkPairInfo.baseTokenInfo;
      const quoteTokenInfo = tkPairInfo.quoteTokenInfo;

      const baseTokenBalance = baseTokenInfo.balance;
      const baseTokenWeight = baseTokenInfo.poolWeight;

      const quoteTokenBalance = quoteTokenInfo.balance;
      const quoteTokenWeight = quoteTokenInfo.poolWeight;

      if (quoteTokenBalance && baseTokenWeight) {
        quotePrice = (baseTokenBalance.div(quoteTokenBalance)).toNumber() * (quoteTokenWeight) / (baseTokenWeight);
      }

      return quotePrice;
    }));
  });
}
