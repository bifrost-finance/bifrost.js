// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable, of } from 'rxjs';
import { memo } from '../util';
import { CEXName, CEXTokenPrice, symbolUSDValue } from '../util/types';
import { AccountId } from '@polkadot/types/interfaces/runtime';
import { Token } from '@bifrost-finance/types/interfaces';
import BN from 'bn.js';

/**
 * @name getBinancePrices
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
export function getBinancePrices (instanceId: string, api: ApiInterfaceRx): () => Observable<CEXTokenPrice[]> {
  return memo(instanceId, (): any => {
    return of([{
      price: 2.584,
      symbol: 'EOSUSDT'
    },
    {
      price: 10730.96,
      symbol: 'BTCUSDT'
    },
    {
      price: 355.89,
      symbol: 'ETHUSDT'
    }
    ]);
  });
}

/**
 * @name getCEXTokenPrices
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getCEXTokenPrices (instanceId: string, api: ApiInterfaceRx): (exchangeName?: CEXName) => Observable<CEXTokenPrice[]> {
    return memo(instanceId, (exchangeName?: CEXName):any => {
      const binanceQuery = () => {
        const getBinancePricesQuery = getBinancePrices(instanceId, api);

        return getBinancePricesQuery();
        }

        switch (exchangeName) {
          case 'binance': binanceQuery;
          default: binanceQuery;
        }
    });
}

/**
 * @name getAccountSingleTokenUSDValue
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getAccountSingleTokenUSDValue (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, tokenSymbol: Token, exchangeName?: CEXName) => Observable<symbolUSDValue> {
    return memo(instanceId, (accountName: AccountId, tokenSymbol: Token, exchangeName?: CEXName) => {

        // const getAccountAssetsQuery = getAccountAssets(instanceId, api);
        // getAccountAssetsQuery();

        return of({
                symbol: <unknown>'vEos' as Token,
                usdValue: 5
        });

    });
}

/**
 * @name getAccountManyTokenUSDValues
 * @description get Token information
 * @param instanceId
 * @param api
 */
export function getAccountManyTokenUSDValues (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId, tokenArray: Token[], exchangeName?: CEXName) => Observable<symbolUSDValue[]> {
    return memo(instanceId, (accountName: AccountId, tokenSymbol: Token, exchangeName?: CEXName) => {

        // const getAccountAssetsQuery = getAccountAssets(instanceId, api);
        // getAccountAssetsQuery();
        const tokenValueArray = [
            {
              symbol: <unknown>'vEos' as Token,
              usdValue: 5
            },
            {
              symbol: <unknown>'Dot' as Token,
              usdValue: 500.5
            },
            {
              symbol: <unknown>'vKSM' as Token,
              usdValue: 259
            }

        ];
        return of(tokenValueArray);

    });
}

/**
 * @name getAccountTotalValue
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
export function getAccountTotalValue (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId) => Observable<BN> {
    return memo(instanceId, (accountName: AccountId) => {
        // const getAccountManyTokenUSDValuesQuery = getAccountManyTokenUSDValues(instanceId, api);
        // const getAccountAssetsQuery = getAccountAssets(instanceId, api);

        return of(new BN(0));
    });
}

/**
 * @name getAccountIncomeValue
 * @description get token prices from Binance exchange
 * @param instanceId
 * @param api
 */
export function getAccountIncomeValue (instanceId: string, api: ApiInterfaceRx): (accountName: AccountId) => Observable<BN> {
    return memo(instanceId, (accountName: AccountId) => {
        // const getAllTokenPoolInfoQuery = getAllTokenPoolInfo(instanceId, api);

        return of(new BN(0));
    });
}
