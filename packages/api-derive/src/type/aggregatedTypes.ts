// Copyright 2021 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveVtokenAssetsInfo } from "../assets/types";
import { DeriveVtokenConvertInfo } from "../vtokenMint/types";
import BN from "bn.js";

// interface that aggregates DeriveVtokenPoolInfo from asset types and DeriveVtokenConvertInfo from convert types
export interface DeriveVtokenPoolInfo extends DeriveVtokenAssetsInfo, DeriveVtokenConvertInfo {
  // tokenId: string,
  // totalSupply: BN;
  // tokenPool: BN;
  // convertPrice: number;
  // annualizedRate: number;
}

// convert price at different timestamp
export interface timestampAndConvertPrice {
  timestampList: number[];
  convertPriceList: number[];
}

// Balances value in the form of USDT
export interface symbolUSDValue {
  tokenId: number;
  balance: number;
  locked: number;
  available: number;
  cost: number;
  income: number;
}

// Balance precision. need to cut down by 10^^12 zeros.
export const PRECISION = new BN(1000000000000);
