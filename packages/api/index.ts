import { types as bifrostTypes } from '@bifrost-network/types';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: bifrostTypes,
};

export const options = ({ types = {}, ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...bifrostTypes,
    ...types
  },
  ...otherOptions
});
