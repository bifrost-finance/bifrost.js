// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenAssetsInfo } from '../assets/types';
import { DeriveVtokenConvertInfo } from '../convert/types';
import BN from 'bn.js';

// interface that aggregates DeriveVtokenPoolInfo from asset types and DeriveVtokenConvertInfo from convert types
export interface DeriveVtokenPoolInfo extends DeriveVtokenAssetsInfo, DeriveVtokenConvertInfo {
// symbol: string,
// totalSupply: BN;
// tokenPool: BN;
// convertPrice: BN;
// annualizedRate: BN;
}

export type vToken = 'vDOT' | 'vKSM' | 'vEOS';
export type allTokens = 'vDOT' | 'vKSM' | 'vEOS'| 'DOT' | 'KSM' | 'EOS' | 'aUSD';
export type nonVtoken = 'DOT' | 'KSM' | 'EOS' | 'aUSD';

export interface timestampAndConvertPrice {
  timestampList: number[],
  convertPriceList: BN[]
}

export const bifrostAllTokenList = ['vDOT', 'vKSM', 'vEOS', 'DOT', 'KSM', 'EOS', 'aUSD'];

export const bifrostTokenList = ['DOT', 'KSM', 'EOS'];

export const bifrostVtokenList = ['vDOT', 'vKSM', 'vEOS'];

export const bifrostNonTokenList = ['DOT', 'KSM', 'EOS', 'aUSD'];

export interface symbolUSDValue {
  symbol: allTokens,
  balance: BN,
  locked: BN,
  available: BN,
  cost: BN,
  income: BN
}

export const symbolUSDValueFields = ['symbol', 'balance', 'locked', 'available', 'cost', 'income'];