import { RegistryTypes } from "@polkadot/types/types";
// import * as bifrostDefinitions from "../interfaces/definitions";

// These are user defined types.
// const bifrostTypes = Object.values(bifrostDefinitions).reduce((res, { types }) => ({ ...res, ...types }), {});

// These are polkadot.js api override types. If not provided, the frontend will not display properly.
const overrideTypes = {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  TAssetBalance: "Balance"
};

const types: RegistryTypes = {
  // ...bifrostTypes,
  ...overrideTypes,
};

export default {
  types,
};
