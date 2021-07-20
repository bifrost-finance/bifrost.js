import * as definitions from "./interfaces/definitions";
import { jsonrpcFromDefs, typesFromDefs, typesAliasFromDefs } from "@open-web3/orml-type-definitions/utils";

export const bifrostRpc = jsonrpcFromDefs(definitions);
export const bifrostTypes = typesFromDefs(definitions);
export const bifrostTypeAlias = typesAliasFromDefs(definitions);


export { default as spec } from "./spec/index";
