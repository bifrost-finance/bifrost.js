"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const primitives_1 = __importDefault(require("@bifrost-finance/type-definitions/primitives"));
exports.default = {
    rpc: {},
    types: {
        ...primitives_1.default.types
    }
};
