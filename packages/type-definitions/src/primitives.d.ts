declare const _default: {
    rpc: {};
    types: {
        TokenSymbol: {
            _enum: {
                ASG: number;
                BNC: number;
                KUSD: number;
                DOT: number;
                KSM: number;
                ETH: number;
                KAR: number;
                ZLK: number;
                PHA: number;
                RMRK: number;
                MOVR: number;
                GLMR: number;
            };
        };
        CurrencyId: {
            _enum: {
                Native: string;
                VToken: string;
                Token: string;
                Stable: string;
                VSToken: string;
                VSBond: string;
                LPToken: string;
                ForeignAsset: string;
                Token2: string;
                VToken2: string;
                VSToken2: string;
                VSBond2: string;
                StableLpToken: string;
            };
        };
        CurrencyIdOf: string;
        TAssetBalance: string;
        AmountOf: string;
        StorageVersion: string;
        ShareWeight: string;
        Currency: string;
        Amount: string;
        TransferOriginType: {
            _enum: {
                FromSelf: number;
                FromRelayChain: number;
                FromSiblingParaChain: number;
            };
        };
        TimeUnit: {
            Era: string;
            SlashingSpan: string;
            Round: string;
            Kblock: string;
        };
        MinimumsMaximums: {
            delegator_bonded_minimum: string;
            bond_extra_minimum: string;
            unbond_minimum: string;
            rebond_minimum: string;
            unbond_record_maximum: string;
            validators_back_maximum: string;
            delegator_active_staking_maximum: string;
            validators_reward_maximum: string;
            delegation_amount_minimum: string;
            delegators_maximum: string;
            validators_maximum: string;
        };
    };
};
export default _default;
