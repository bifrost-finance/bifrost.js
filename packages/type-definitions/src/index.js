"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedExtensions = exports.typesBundleForPolkadot = exports.typesBundle = exports.typesAlias = exports.rpc = exports.types = void 0;
const orml_type_definitions_1 = require("@open-web3/orml-type-definitions");
const utils_1 = require("@open-web3/orml-type-definitions/utils");
const signedExtensions_1 = require("./signedExtensions");
const primitives_1 = __importDefault(require("./primitives"));
const bid_1 = __importDefault(require("./bid"));
const bridgeEos_1 = __importDefault(require("./bridgeEos"));
const bancor_1 = __importDefault(require("./bancor"));
const bridgeIost_1 = __importDefault(require("./bridgeIost"));
const flexibleFee_1 = __importDefault(require("./flexibleFee"));
const minterReward_1 = __importDefault(require("./minterReward"));
const slp_1 = __importDefault(require("./slp"));
const salp_1 = __importDefault(require("./salp"));
const stakingReward_1 = __importDefault(require("./stakingReward"));
const swap_1 = __importDefault(require("./swap"));
const tokens_1 = __importDefault(require("./tokens"));
const vesting_1 = __importDefault(require("./vesting"));
const vsbondAuction_1 = __importDefault(require("./vsbondAuction"));
const vtokenMint_1 = __importDefault(require("./vtokenMint"));
const vtokenMinting_1 = __importDefault(require("./vtokenMinting"));
const zenlinkProtocol_1 = __importDefault(require("./zenlinkProtocol"));
const runtime_1 = __importDefault(require("./runtime"));
const liquidityMining_1 = __importDefault(require("./liquidityMining"));
const farming_1 = __importDefault(require("./farming"));
const bifrost_1 = __importDefault(require("./spec/bifrost"));
const asgard_1 = __importDefault(require("./spec/asgard"));
const additionalOverride = {
    Keys: 'SessionKeys1'
};
const bifrostDefs = {
    bid: bid_1.default,
    bridgeEos: bridgeEos_1.default,
    bancor: bancor_1.default,
    bridgeIost: bridgeIost_1.default,
    farming: farming_1.default,
    flexibleFee: flexibleFee_1.default,
    minterReward: minterReward_1.default,
    slp: slp_1.default,
    salp: salp_1.default,
    stakingReward: stakingReward_1.default,
    swap: swap_1.default,
    tokens: tokens_1.default,
    vesting: vesting_1.default,
    runtime: runtime_1.default,
    vsbondAuction: vsbondAuction_1.default,
    vtokenMint: vtokenMint_1.default,
    vtokenMinting: vtokenMinting_1.default,
    zenlinkProtocol: zenlinkProtocol_1.default,
    primitives: primitives_1.default,
    liquidityMining: liquidityMining_1.default
};
exports.types = {
    ...orml_type_definitions_1.types,
    ...(0, utils_1.typesFromDefs)(bifrostDefs),
    ...additionalOverride
};
exports.rpc = (0, utils_1.jsonrpcFromDefs)(bifrostDefs, { ...orml_type_definitions_1.rpc });
exports.typesAlias = (0, utils_1.typesAliasFromDefs)(bifrostDefs, { ...orml_type_definitions_1.typesAlias });
function getBundle(versioned) {
    return {
        rpc: exports.rpc,
        types: [...versioned].map((version) => {
            return {
                minmax: version.minmax,
                types: {
                    ...exports.types,
                    ...version.types
                }
            };
        }),
        alias: exports.typesAlias
    };
}
exports.typesBundle = {
    spec: {
        bifrost: getBundle(bifrost_1.default),
        asgard: getBundle(asgard_1.default)
    }
};
// Type overrides have priority issues
exports.typesBundleForPolkadot = {
    spec: {
        bifrost: getBundle(bifrost_1.default),
        asgard: getBundle(asgard_1.default)
    }
};
exports.signedExtensions = signedExtensions_1.signedExtensions;
