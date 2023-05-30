declare const _default: {
    rpc: {
        getAllAssets: {
            description: string;
            params: {
                name: string;
                type: string;
                isOptional: boolean;
            }[];
            type: string;
        };
        getBalance: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        getSovereignsInfo: {
            description: string;
            params: ({
                name: string;
                type: string;
                isHistoric?: undefined;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isHistoric: boolean;
                isOptional: boolean;
            })[];
            type: string;
        };
        getPairByAssetId: {
            description: string;
            params: ({
                name: string;
                type: string;
                isHistoric?: undefined;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isHistoric: boolean;
                isOptional: boolean;
            })[];
            type: string;
        };
        getAmountInPrice: {
            description: string;
            params: ({
                name: string;
                type: string;
                isHistoric?: undefined;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isHistoric: boolean;
                isOptional: boolean;
            })[];
            type: string;
        };
        getAmountOutPrice: {
            description: string;
            params: ({
                name: string;
                type: string;
                isHistoric?: undefined;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isHistoric: boolean;
                isOptional: boolean;
            })[];
            type: string;
        };
        getEstimateLptoken: {
            description: string;
            params: ({
                name: string;
                type: string;
                isHistoric?: undefined;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isHistoric: boolean;
                isOptional: boolean;
            })[];
            type: string;
        };
    };
    types: {
        ZenlinkAssetId: {
            chain_id: string;
            asset_type: string;
            asset_index: string;
        };
        ZenlinkAssetBalance: string;
        PairInfo: {
            asset0: string;
            asset1: string;
            account: string;
            totalLiquidity: string;
            holdingLiquidity: string;
            reserve0: string;
            reserve1: string;
            lpAssetId: string;
        };
        PairMetadata: {
            pair_account: string;
            target_supply: string;
        };
        BootstrapParamter: {
            min_contribution: string;
            target_supply: string;
            accumulated_supply: string;
            end_block_number: string;
            pair_account: string;
        };
        PairStatus: {
            _enum: {
                Trading: string;
                Bootstrap: string;
                Disable: any;
            };
        };
    };
};
export default _default;
