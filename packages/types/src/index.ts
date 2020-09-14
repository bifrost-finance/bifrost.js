// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-tx';
import './interfaces/augment-api';
import './interfaces/augment-types';

import * as definations from './interfaces/definitions';

export const types = Object.values(definations).reduce((res, { types }) => ({ ...res, ...types }), {});
