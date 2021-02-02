// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from "@polkadot/api/types";
import { map } from "rxjs/operators";
import { Observable, combineLatest } from "rxjs";
import { memo } from "@polkadot/api-derive/util";

/**
 * @name getBalancerPoolTokenPairQuotePrice
 * @description get the quote price from the Balancer pool for a specific token pair
 * @param instanceId
 * @param api
 */

export function getBalancerPoolTokenPairQuotePrice(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenId: number, quoteTokenId: number) => Observable<number> {
  return memo(instanceId, (tokenId: number, quoteTokenId: number) => {
    const globalPoolId = 0;

    const tokenSymbolWeight = api.query.swap.tokenWeightsInPool(globalPoolId, tokenId);
    const quoteTokenSymbolWeight = api.query.swap.tokenWeightsInPool(globalPoolId, quoteTokenId);

    const tokenSymbolBalance = api.query.swap.tokenBalancesInPool(globalPoolId, tokenId);
    const quoteTokenSymbolBalance = api.query.swap.tokenBalancesInPool(globalPoolId, quoteTokenId);

    return combineLatest([tokenSymbolWeight, quoteTokenSymbolWeight, tokenSymbolBalance, quoteTokenSymbolBalance]).pipe(
      map(([baseTokenWeight, quoteTokenWeight, baseTokenBalance, quoteTokenBalance]) => {
        let quotePrice = 0;

        if (quoteTokenBalance && baseTokenWeight) {
          quotePrice =
            (baseTokenBalance.div(quoteTokenBalance).toNumber() * quoteTokenWeight.toNumber()) /
            baseTokenWeight.toNumber();
        }

        return quotePrice;
      })
    );
  });
}
