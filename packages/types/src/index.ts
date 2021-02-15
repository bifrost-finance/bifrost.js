import * as definitions from "./interfaces/definitions";

export const bifrostTypes = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});
export { default as spec } from "./spec/index";
