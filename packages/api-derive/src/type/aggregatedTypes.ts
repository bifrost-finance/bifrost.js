// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenAssetsInfo } from '../assets/types';
import { DeriveVtokenConvertInfo } from '../convert/types';
import BN from 'bn.js';

// interface that aggregates DeriveVtokenPoolInfo from asset types and DeriveVtokenConvertInfo from convert types
export interface DeriveVtokenPoolInfo extends DeriveVtokenAssetsInfo, DeriveVtokenConvertInfo {
// symbol: string,
// totalSupply: Balance;
// tokenPool: Balance;
// convertPrice: BN;
// annualizedRate: BN;
}

export type vToken = 'vDOT' | 'vKSM' | 'vEOS';


export interface timestampAndConvertPrice {
    timestampList: number[],
    convertPriceList: BN[]
    }
    
