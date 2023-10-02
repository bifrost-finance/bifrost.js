declare const _default: {
    rpc: {
        getSwapOutputAmount: {
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
    types: {};
};
export default _default;
