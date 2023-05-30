"use strict";
/* eslint-disable */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const tsDef_1 = require("@polkadot/typegen/generate/tsDef");
const interfaceRegistry_1 = require("@polkadot/typegen/generate/interfaceRegistry");
const util_1 = require("@polkadot/typegen/util");
const generate_1 = require("@polkadot/typegen/generate");
const substractDefinations = __importStar(require("@polkadot/types/interfaces/definitions"));
const ormlDefinations = __importStar(require("@open-web3/orml-types/interfaces/definitions"));
const bifrostDefinations = __importStar(require("../src/interfaces/definitions"));
const static_latest_1 = __importDefault(require("../src/metadata/static-latest"));
const lookup_1 = require("./generate/lookup");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const { runtime, ...substrateDefinations } = defaultDefinations;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;
// delete ormlModulesDefinations.__esModule
function main() {
    // generate
    console.log('------ start -------');
    const registryPath = (0, util_1.assertDir)(path_1.default.join(process.cwd(), 'packages/types/src/registry'));
    const augmentPath = (0, util_1.assertDir)(path_1.default.join(process.cwd(), 'packages/types/src/augment'));
    const lookupPath = (0, util_1.assertDir)(path_1.default.join(process.cwd(), 'packages/types/src/lookup'));
    const inputPath = (0, util_1.assertDir)(path_1.default.join(process.cwd(), 'packages/types/src/interfaces'));
    const pkg = '@bifrost-finance/types/interfaces';
    // @ts-ignore
    delete ormlModulesDefinations.__esModule;
    const userDefs = {
        ...bifrostDefinations
    };
    const userKeys = Object.keys(userDefs);
    const filteredBase = Object
        .entries(substractDefinations)
        .filter(([key]) => {
        if (userKeys.includes(key)) {
            console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);
            return false;
        }
        return true;
    })
        .reduce((defs, [key, value]) => {
        defs[key] = value;
        return defs;
    }, {});
    const allDefs = {
        '@polkadot/types/interfaces': filteredBase,
        // The order of the keys will affect the generated file.
        [pkg]: userDefs,
        '@open-web3/orml-types/interfaces': ormlModulesDefinations,
    };
    const customLookupDefinitions = {
        rpc: {},
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
        types: require('../src/lookup/bifrost.ts').default
    };
    (0, tsDef_1.generateTsDef)(allDefs, inputPath, pkg);
    (0, interfaceRegistry_1.generateInterfaceTypes)(allDefs, path_1.default.join(registryPath, 'interfaces.ts'));
    (0, lookup_1.generateDefaultLookup)(lookupPath, static_latest_1.default);
    (0, generate_1.generateDefaultConsts)(path_1.default.join(augmentPath, 'api-consts.ts'), static_latest_1.default, allDefs, false, customLookupDefinitions);
    (0, generate_1.generateDefaultErrors)(path_1.default.join(augmentPath, 'api-errors.ts'), static_latest_1.default, allDefs, false);
    (0, generate_1.generateDefaultEvents)(path_1.default.join(augmentPath, 'api-events.ts'), static_latest_1.default, allDefs, false, customLookupDefinitions);
    (0, generate_1.generateDefaultQuery)(path_1.default.join(augmentPath, 'api-query.ts'), static_latest_1.default, allDefs, false, customLookupDefinitions);
    // TODO: should check why import an unused type
    (0, util_1.writeFile)(path_1.default.join(augmentPath, 'api-query.ts'), () => {
        const content = fs_1.default.readFileSync(path_1.default.join(augmentPath, 'api-query.ts'), { encoding: 'utf-8' });
        return content.replace('OrmlUtilitiesOrderedSet,', '');
    });
    (0, generate_1.generateDefaultRpc)(path_1.default.join(augmentPath, 'api-rpc.ts'), { [pkg]: userDefs });
    (0, generate_1.generateDefaultTx)(path_1.default.join(augmentPath, 'api-tx.ts'), static_latest_1.default, allDefs, false, customLookupDefinitions);
    (0, generate_1.generateDefaultRuntime)(path_1.default.join(augmentPath, 'api-runtime.ts'), static_latest_1.default, allDefs, false, customLookupDefinitions);
    (0, util_1.writeFile)(path_1.default.join(augmentPath, 'api.ts'), () => [
        (0, util_1.HEADER)('chain'),
        ...[
            ...['consts', 'errors', 'events', 'query', 'tx', 'rpc', 'runtime']
                .filter((key) => !!key)
                .map((key) => `./api-${key}`)
        ].map((path) => `import '${path}';\n`)
    ].join(''));
    console.log('------ end -------');
}
exports.main = main;
main();
