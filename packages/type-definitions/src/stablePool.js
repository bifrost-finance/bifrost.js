"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {
        getSwapOutputAmount: {
            description: 'stablePool getSwapOutputAmount',
            params: [
                {
                    name: 'pool_id',
                    type: 'U32'
                },
                {
                    name: 'currency_id_in',
                    type: 'U32'
                },
                {
                    name: 'currency_id_out',
                    type: 'U32'
                },
                {
                    name: 'amount',
                    type: 'Balance'
                },
                {
                    name: 'at',
                    type: 'BlockHash',
                    isHistoric: true,
                    isOptional: true
                }
            ],
            type: 'String'
        },
    },
    types: {}
};
