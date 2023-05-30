import '@polkadot/types/lookup';
import './augment/api';
import './lookup/bifrost';

import {
  typesBundle as bifrostTypesBundle,
  types as bifrostTypes,
  typesAlias as bifrostTypeAlias,
  rpc as bifrostRpc,
  signedExtensions as bifrostSignedExtensions
} from '@bifrost-finance/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

export * as lookupTypes from './lookup/bifrost';

export const types: RegistryTypes = bifrostTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = bifrostRpc;

export const typesAlias: Record<string, OverrideModuleType> = bifrostTypeAlias;

export const typesBundle = bifrostTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = bifrostSignedExtensions;
