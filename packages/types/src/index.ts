import * as definitions from "./interfaces/definitions";
import { jsonrpcFromDefs, typesFromDefs, typesAliasFromDefs } from "@open-web3/orml-type-definitions/utils";
// import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';

export const bifrostRpc = jsonrpcFromDefs(definitions);
export const bifrostTypes = typesFromDefs(definitions);
export const bifrostTypeAlias = typesAliasFromDefs(definitions);

// export const bifrostTypes = {
//   ...ormlTypes,
//   ...typesFromDefs(definitions),
// };

// // revise the name of the orml-tokens module that orml typeAlias of AccountData type is used. orml calls the module "tokens",
// // But Bifrost calls it "tokens" module. There might be some other modules which also use the AccountData type.
// // All these modules should be declared under the typeAlisa section for the AccountData type.
// if (bifrostTypeAliasRaw["tokens"]) {
//   bifrostTypeAliasRaw["tokens"] = bifrostTypeAliasRaw["tokens"];
//   delete bifrostTypeAliasRaw.tokens;
// }
// export const bifrostTypeAlias = bifrostTypeAliasRaw;
// export const bifrostTypes = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
export { default as spec } from "./spec/index";
