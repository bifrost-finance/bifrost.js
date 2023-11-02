/* eslint-disable */

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import path from 'path';
import fs from 'fs';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry'
import { assertDir, writeFile, HEADER } from '@polkadot/typegen/util';
import { generateDefaultRuntime, generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from '@polkadot/typegen/generate';

import * as substractDefinations from '@polkadot/types/interfaces/definitions';
import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as bifrostDefinations from '../src/interfaces/definitions';
import metadata from '../src/metadata/static-latest';
import { generateDefaultLookup } from './generate/lookup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;


// delete ormlModulesDefinations.__esModule

export function main () {
  // generate
  console.log('------ start -------');

  const registryPath = assertDir(path.join(process.cwd(), 'packages/types/src/registry'));
  const augmentPath = assertDir(path.join(process.cwd(), 'packages/types/src/augment'));
  const lookupPath = assertDir(path.join(process.cwd(), 'packages/types/src/lookup'));
  const inputPath = assertDir(path.join(process.cwd(), 'packages/types/src/interfaces'));
  const pkg = '@bifrost-finance/types/interfaces';

  // @ts-ignore
  delete ormlModulesDefinations.__esModule;

  const userDefs: Record<string, any> = {
    ...bifrostDefinations
  };

  const userKeys = Object.keys(userDefs);
  const filteredBase = Object
    .entries(substractDefinations as Record<string, unknown>)
    .filter(([key]) => {
      if (userKeys.includes(key)) {
        console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);

        return false;
      }

      return true;
    })
    .reduce((defs: Record<string, any>, [key, value]) => {
      defs[key] = value;

      return defs;
    }, {});

  const allDefs: Record<string, any> = {
    '@polkadot/types/interfaces': filteredBase,
    // The order of the keys will affect the generated file.
    [pkg]: userDefs,
    '@open-web3/orml-types/interfaces': ormlModulesDefinations,
  }

  const customLookupDefinitions = {
    rpc: {},
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    types: require('../src/lookup/bifrost.ts').default
  };

  generateTsDef(allDefs, inputPath, pkg);
  generateInterfaceTypes(allDefs, path.join(registryPath, 'interfaces.ts'));
  generateDefaultLookup(lookupPath, metadata);
  generateDefaultConsts(path.join(augmentPath, 'api-consts.ts'), metadata, allDefs, false, customLookupDefinitions);
  generateDefaultErrors(path.join(augmentPath, 'api-errors.ts'), metadata, allDefs, false);
  generateDefaultEvents(path.join(augmentPath, 'api-events.ts'), metadata, allDefs, false, customLookupDefinitions);
  generateDefaultQuery(path.join(augmentPath, 'api-query.ts'), metadata, allDefs, false, customLookupDefinitions);

  // TODO: should check why import an unused type
  writeFile(path.join(augmentPath, 'api-query.ts'), () => {
    const content = fs.readFileSync(path.join(augmentPath, 'api-query.ts'), { encoding: 'utf-8' });
    return content.replace('OrmlUtilitiesOrderedSet,', '')
  });

  generateDefaultRpc(path.join(augmentPath, 'api-rpc.ts'), {[pkg]: userDefs});
  // generateDefaultTx(path.join(augmentPath, 'api-tx.ts'), metadata, allDefs, false, customLookupDefinitions);

  generateDefaultRuntime(path.join(augmentPath, 'api-runtime.ts'), metadata, allDefs, false, customLookupDefinitions);
  writeFile(path.join(augmentPath, 'api.ts'), (): string =>
    [
      HEADER('chain'),
      ...[
        ...['consts', 'errors', 'events', 'query', 'tx', 'rpc', 'runtime']
          .filter((key) => !!key)
          .map((key) => `./api-${key}`)
      ].map((path) => `import '${path}';\n`)
    ].join('')
  );
  console.log('------ end -------');
}

main();
