"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {},
    types: {
        MaxLocksOf: 'u32',
        BifrostVestingInfo: {
            locked: 'Balance',
            per_block: 'Balance',
            starting_block: 'BlockNumber'
        }
    }
};
