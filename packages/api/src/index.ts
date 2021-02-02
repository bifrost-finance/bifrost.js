// Copyright 2021 @bifrost-finance/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { spec } from '@bifrost-finance/types/index';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  ...spec
};

export const option: ApiOptions = {
  ...spec,
};
