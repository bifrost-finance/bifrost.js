"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {},
    types: {
        OrmlAccountData: {
            free: 'Balance',
            reserved: 'Balance',
            frozen: 'Balance'
        }
    },
    typesAlias: {
        tokens: {
            AccountData: 'OrmlAccountData'
        }
    }
};
