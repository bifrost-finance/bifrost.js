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
// convertPrice: number;
// annualizedRate: number;
}

// convert price at different timestamp
export interface timestampAndConvertPrice {
  timestampList: number[],
  convertPriceList: number[]
}

export type vToken = 'vDOT' | 'vKSM' | 'vEOS';
export type allTokens = 'vDOT' | 'vKSM' | 'vEOS'| 'DOT' | 'KSM' | 'EOS' | 'aUSD';
export type nonVtoken = 'DOT' | 'KSM' | 'EOS' | 'aUSD';

// All the tokens that are supported by Bifrost. Need to be maintained regularly.
export const bifrostAllTokenList = ['vDOT', 'vKSM', 'vEOS', 'DOT', 'KSM', 'EOS', 'aUSD'];

// All the non vTokens excluding 'aUSD' that are supported by Bifrost. Need to be maintained regularly.
export const bifrostTokenList = ['DOT', 'KSM', 'EOS'];

// All the vTokens that are supported by Bifrost. Need to be maintained regularly.
export const bifrostVtokenList = ['vDOT', 'vKSM', 'vEOS'];

// All the non vTokens that are supported by Bifrost. Need to be maintained regularly.
export const bifrostNonVtokenList = ['DOT', 'KSM', 'EOS', 'aUSD'];

// Balances value in the form of USDT
export interface symbolUSDValue {
  symbol: allTokens,
  balance: number,
  locked: number,
  available: number,
  cost: number,
  income: number
}

// The fields from a user's asset account that need to calculate USDT value.
export const symbolUSDValueFields = ['balance', 'locked', 'available', 'cost', 'income'];

// Balance precision. need to cut down by 10^^12 zeros.
export const PRECISION = new BN(1000000000000);
