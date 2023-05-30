"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_definitions_1 = require("@bifrost-finance/type-definitions");
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('packages/type-definitions/src/json/types.json', JSON.stringify(type_definitions_1.types, null, 4));
fs_1.default.writeFileSync('packages/type-definitions/src/json/typesBundle.json', JSON.stringify(type_definitions_1.typesBundleForPolkadot, null, 4));
fs_1.default.writeFileSync('packages/type-definitions/src/json/rpc.json', JSON.stringify(type_definitions_1.rpc, null, 4));
