import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

// import * as ormlDefinations from '@orml/types/interfaces/definitions';

import * as bifrostDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;

const definations = {
  '@polkadot/types/interfaces': substrateDefinations,
  // '@orml/types/interfaces': ormlModulesDefinations,
  '@bifrost-network/types/interfaces': bifrostDefinations
};

generateTsDef(definations, 'packages/types/src/interfaces', '@bifrost-network/types/interfaces');
generateInterfaceTypes(definations, 'packages/types/src/interfaceRegistry.ts');
