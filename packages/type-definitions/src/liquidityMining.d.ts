declare const _default: {
    rpc: {
        getRewards: {
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
    };
    types: {
        PoolId: string;
        PoolInfo: {
            pool_id: string;
            keeper: string;
            investor: string;
            trading_pair: string;
            duration: string;
            type: string;
            min_deposit_to_start: string;
            after_block_to_start: string;
            deposit: string;
            rewards: string;
            update_b: string;
            state: string;
            block_startup: string;
            redeem_limit_time: string;
            unlock_limit_nums: string;
            pending_unlock_nums: string;
        };
        PoolType: {
            _enum: {
                Mining: number;
                Farming: number;
                EBFarming: number;
            };
        };
        PoolState: {
            _enum: {
                UnCharged: number;
                Charged: number;
                Ongoing: number;
                Retired: number;
                Dead: number;
            };
        };
        DepositData: {
            deposit: string;
            gain_avgs: string;
            update_b: string;
            pending_unlocks: string;
        };
        RewardData: {
            total: string;
            per_block: string;
            claimed: string;
            gain_avg: string;
        };
    };
};
export default _default;
