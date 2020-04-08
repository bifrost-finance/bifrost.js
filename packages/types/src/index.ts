import { RegistryTypes } from '@polkadot/types/types';

import * as bifrostDefinations from './interfaces/definitions';

import * as InterfaceRegistry from './interfaceRegistry';
export { InterfaceRegistry };

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = {
  types: {
    Keys: 'SessionKeys2'
  }
};

export const allDefinitions = {
  ...bifrostDefinations,
  additionalOverride
};

export const types: RegistryTypes = Object.values(allDefinitions).map(({ types }) => types).reduce((all, types) => Object.assign(all, types), {});
