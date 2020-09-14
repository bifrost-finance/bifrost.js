// Copyright 2020 @bifrost-finance/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { types as bifrostTypes } from '@bifrost-finance/types';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: bifrostTypes
};

export const options = ({ types = {}, ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...bifrostTypes,
    ...types
  },
  ...otherOptions
});
