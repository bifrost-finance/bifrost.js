"use strict";
// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0
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
exports.generateDefaultLookup = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const path_1 = __importDefault(require("path"));
const tsDef_1 = require("@polkadot/typegen/generate/tsDef");
const util_1 = require("@polkadot/typegen/util");
const defaultDefinitions = __importStar(require("@polkadot/types/interfaces/definitions"));
// import staticKusama from '@polkadot/types-support/metadata/static-kusama';
// import staticPolkadot from '@polkadot/types-support/metadata/static-polkadot';
// import staticSubstrate from '@polkadot/types-support/metadata/static-substrate';
const util_2 = require("@polkadot/util");
const WITH_TYPEDEF = false;
const generateLookupDefsTmpl = handlebars_1.default.compile((0, util_1.readTemplate)('lookup/defs'));
const generateLookupDefsNamedTmpl = handlebars_1.default.compile((0, util_1.readTemplate)('lookup/defs-named'));
const generateLookupIndexTmpl = handlebars_1.default.compile((0, util_1.readTemplate)('lookup/index'));
const generateLookupTypesTmpl = handlebars_1.default.compile((0, util_1.readTemplate)('lookup/types'));
const generateRegistryTmpl = handlebars_1.default.compile((0, util_1.readTemplate)('interfaceRegistry'));
function generateParamType(registry, { name, type }) {
    if (type.isSome) {
        const link = registry.lookup.types[type.unwrap().toNumber()];
        if (link.type.path.length) {
            return generateTypeDocs(registry, null, link.type.path, link.type.params);
        }
    }
    return name.toString();
}
function generateTypeDocs(registry, id, path, params) {
    return `${id ? `${registry.createLookupType(id)}${path.length ? ': ' : ''}` : ''}${path
        .map((p) => p.toString())
        .join('::')}${params.length ? `<${params.map((p) => generateParamType(registry, p)).join(', ')}>` : ''}`;
}
function formatObject(lines) {
    const max = lines.length - 1;
    return [
        '{',
        ...lines.map((l, index) => l.endsWith(',') ||
            l.endsWith('{') ||
            index === max ||
            lines[index + 1].endsWith('}') ||
            lines[index + 1].endsWith('}')
            ? l
            : `${l},`),
        '}'
    ];
}
function expandSet(parsed) {
    return formatObject(Object.entries(parsed).reduce((all, [k, v]) => {
        all.push(`${k}: ${v}`);
        return all;
    }, []));
}
function expandObject(parsed) {
    if (parsed._set) {
        return expandSet(parsed._set);
    }
    return formatObject(Object.entries(parsed).reduce((all, [k, v]) => {
        const inner = (0, util_2.isString)(v)
            ? expandType(v)
            : Array.isArray(v)
                ? [`[${v.map((e) => `'${e}'`).join(', ')}]`]
                : expandObject(v);
        inner.forEach((l, index) => {
            all.push(`${index === 0 ? `${k}: ${l}` : `${l}`}`);
        });
        return all;
    }, []));
}
function expandType(encoded) {
    if (!encoded.startsWith('{')) {
        return [`'${encoded}'`];
    }
    return expandObject(JSON.parse(encoded));
}
function expandDefToString({ lookupNameRoot, type }, indent) {
    if (lookupNameRoot) {
        return `'${lookupNameRoot}'`;
    }
    const lines = expandType(type);
    let inc = 0;
    return lines
        .map((l, index) => {
        let r;
        if (l.endsWith('{')) {
            r = index === 0 ? l : `${' '.padStart(indent + inc)}${l}`;
            inc += 2;
        }
        else {
            if (l.endsWith('},') || l.endsWith('}')) {
                inc -= 2;
            }
            r = index === 0 ? l : `${' '.padStart(indent + inc)}${l}`;
        }
        return r;
    })
        .join('\n');
}
function getFilteredTypes(lookup, exclude = []) {
    const named = lookup.types.filter(({ id }) => !!lookup.getTypeDef(id).lookupName);
    const names = named.map(({ id }) => lookup.getName(id));
    return named
        .filter((_, index) => !names.some((n, iindex) => index > iindex && n === names[index]))
        .map((p) => [p, lookup.getTypeDef(p.id)])
        .filter(([, typeDef]) => !exclude.includes(typeDef.lookupName || '<invalid>'));
}
function generateLookupDefs(registry, filtered, destDir, subPath) {
    (0, util_1.writeFile)(path_1.default.join(destDir, `${subPath || 'definitions'}.ts`), () => {
        const all = filtered.map(([{ id, type: { params, path } }, typeDef]) => {
            const typeLookup = registry.createLookupType(id);
            const def = expandDefToString(typeDef, subPath ? 2 : 4);
            return {
                docs: [
                    generateTypeDocs(registry, id, path, params),
                    WITH_TYPEDEF ? `@typeDef ${(0, util_2.stringify)(typeDef)}` : null
                ].filter((d) => !!d),
                type: {
                    def,
                    typeLookup,
                    typeName: typeDef.lookupName
                }
            };
        });
        const max = all.length - 1;
        return (subPath ? generateLookupDefsNamedTmpl : generateLookupDefsTmpl)({
            defs: all.map(({ docs, type }, i) => {
                const { def, typeLookup, typeName } = type;
                return {
                    defs: [[typeName || typeLookup, `${def}${i !== max ? ',' : ''}`]].map(([n, t]) => `${n}: ${t}`),
                    docs
                };
            }),
            headerType: 'defs'
        });
    });
}
function generateLookupTypes(registry, filtered, destDir, subPath) {
    const imports = {
        ...(0, util_1.createImports)({ '@polkadot/types/interfaces': defaultDefinitions }, { types: {} }),
        interfaces: []
    };
    const items = filtered
        .map(([, typeDef]) => {
        typeDef.name = typeDef.lookupName;
        return typeDef.lookupNameRoot && typeDef.lookupName
            ? (0, util_1.exportInterface)(typeDef.lookupIndex, typeDef.lookupName, typeDef.lookupNameRoot)
            : tsDef_1.typeEncoders[typeDef.info](registry, imports.definitions, typeDef, imports);
    })
        .filter((t) => !!t)
        .map((t) => t.replace(/\nexport /, '\n'));
    (0, util_1.writeFile)(path_1.default.join(destDir, `types${subPath ? `-${subPath}` : ''}.ts`), () => generateLookupTypesTmpl({
        headerType: 'defs',
        imports,
        items: items.map((l) => l
            .split('\n')
            .map((l) => (l.length ? `  ${l}` : ''))
            .join('\n')),
        types: [
            ...Object.keys(imports.localTypes)
                .sort()
                .map((packagePath) => ({
                file: packagePath,
                types: Object.keys(imports.localTypes[packagePath])
            }))
        ]
    }), true);
    (0, util_1.writeFile)(path_1.default.join(destDir, 'index.ts'), () => generateLookupIndexTmpl({ headerType: 'defs' }), true);
}
function generateRegistry(_registry, filtered, destDir, subPath) {
    (0, util_1.writeFile)(path_1.default.join(destDir, `${subPath}.ts`), () => {
        const items = filtered
            .map(([, { lookupName }]) => lookupName)
            .filter((n) => !!n)
            .sort()
            .reduce((all, n) => (all.includes(n) ? all : all.concat(n)), []);
        const imports = (0, util_1.createImports)({}, { types: {} });
        imports.lookupTypes = items.reduce((all, n) => ({ ...all, [n]: true }), {});
        return generateRegistryTmpl({
            headerType: 'defs',
            imports,
            items,
            types: []
        });
    }, true);
}
function generateLookup(destDir, entries) {
    entries.reduce((exclude, [subPath, staticMeta]) => {
        const { lookup, registry } = (0, util_1.initMeta)(staticMeta).metadata.asLatest;
        const filtered = getFilteredTypes(lookup, exclude);
        generateLookupDefs(registry, filtered, destDir, subPath);
        generateLookupTypes(registry, filtered, destDir, subPath);
        generateRegistry(registry, filtered, destDir, subPath === 'lookup' ? 'registry' : `../registry/${subPath}`);
        return exclude.concat(...filtered.map(([, typeDef]) => typeDef.lookupName).filter((n) => !!n));
    }, []);
}
// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
function generateDefaultLookup(destDir = 'packages/types-augment/src/lookup', staticData) {
    generateLookup(destDir, [['bifrost', staticData]]);
}
exports.generateDefaultLookup = generateDefaultLookup;
