declare const _default: {
    rpc: {
        getFeeTokenAndAmount: {
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
        PalletBalanceOf: string;
        ExtraFeeName: {
            _enum: string[];
        };
    };
};
export default _default;
