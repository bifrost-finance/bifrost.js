"use strict";
// Copyright 2021 @bifrost-finance/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.defaultOptions = void 0;
const types_1 = require("@bifrost-finance/types");
exports.defaultOptions = {
    types: types_1.types,
    rpc: types_1.rpc
};
const options = ({ rpc = {}, types = {}, typesBundle = {}, typesAlias = {}, signedExtensions, ...otherOptions } = {}) => ({
    rpc: {
        ...types_1.rpc,
        ...rpc
    },
    types: {
        ...types_1.types,
        ...types
    },
    typesAlias: {
        ...types_1.typesAlias,
        ...typesAlias
    },
    typesBundle: {
        ...typesBundle,
        spec: {
            ...types_1.typesBundle
        }
    },
    signedExtensions: {
        ...types_1.signedExtensions,
        ...signedExtensions
    },
    ...otherOptions
});
exports.options = options;
