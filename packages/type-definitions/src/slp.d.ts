declare const _default: {
    rpc: {};
    types: {
        ledger: {
            Substrate: string;
        };
        SubstrateLedger: {
            account: string;
            total: string;
            active: string;
            unlocking: string;
        };
        UnlockChunk: {
            value: string;
            unlock_time: string;
        };
        FilecoinLedger: {
            account: string;
            initial_pledge: string;
        };
        FilecoinOwnerByMinerEntry: {
            currency_id: string;
            miner_id: string;
            owner_id: string;
        };
    };
};
export default _default;
