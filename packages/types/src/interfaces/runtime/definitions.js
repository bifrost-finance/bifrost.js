"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_1 = __importDefault(require("@polkadot/types/interfaces/runtime/definitions"));
const runtime_1 = __importDefault(require("@bifrost-finance/type-definitions/runtime"));
exports.default = {
    rpc: {},
    types: {
        ...definitions_1.default.types,
        ...runtime_1.default.types
    }
};
