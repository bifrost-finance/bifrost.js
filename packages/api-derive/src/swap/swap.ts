// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from "@polkadot/api/types";
import { map } from "rxjs/operators";
import { Observable, combineLatest } from "rxjs";
import { memo } from "@polkadot/api-derive/util";
import { allTokens } from "../type";

/**
 * @name getBalancerPoolTokenPairQuotePrice
 * @description get the quote price from the Balancer pool for a specific token pair
 * @param instanceId
 * @param api
 */

export function getBalancerPoolTokenPairQuotePrice(
  instanceId: string,
  api: ApiInterfaceRx
): (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => Observable<number> {
  return memo(instanceId, (tokenSymbol: allTokens, quoteTokenSymbol: allTokens) => {
    const globalPoolId = 0;

    const tokenSymbolWeight = api.query.swap.tokenWeightsInPool(globalPoolId, tokenSymbol);
    const quoteTokenSymbolWeight = api.query.swap.tokenWeightsInPool(globalPoolId, quoteTokenSymbol);

    const tokenSymbolBalance = api.query.swap.tokenBalancesInPool(globalPoolId, tokenSymbol);
    const quoteTokenSymbolBalance = api.query.swap.tokenBalancesInPool(globalPoolId, quoteTokenSymbol);

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
