"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {
        getVtokenMintRate: {
            description: 'Get current vtoken mint rate.',
            params: [
                {
                    name: 'asset_id',
                    type: 'CurrencyId'
                },
                {
                    name: 'at',
                    type: 'BlockHash',
                    isHistoric: true,
                    isOptional: true
                }
            ],
            type: 'String'
        }
    },
    types: {}
};
