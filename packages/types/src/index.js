"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedExtensions = exports.typesBundle = exports.typesAlias = exports.rpc = exports.types = exports.lookupTypes = void 0;
require("@polkadot/types/lookup");
require("./augment/api");
require("./lookup/bifrost");
const type_definitions_1 = require("@bifrost-finance/type-definitions");
exports.lookupTypes = __importStar(require("./lookup/bifrost"));
exports.types = type_definitions_1.types;
exports.rpc = type_definitions_1.rpc;
exports.typesAlias = type_definitions_1.typesAlias;
exports.typesBundle = type_definitions_1.typesBundle;
exports.signedExtensions = type_definitions_1.signedExtensions;
