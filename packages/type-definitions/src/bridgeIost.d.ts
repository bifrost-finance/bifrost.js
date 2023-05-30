declare const _default: {
    rpc: {};
    types: {
        IostAction: {
            contract: string;
            action_name: string;
            data: string;
        };
        IostMultiSigTx: {
            chain_id: string;
            raw_tx: string;
            multi_sig: string;
            action: string;
            from: string;
            asset_id: string;
        };
        Processing: {
            tx_id: string;
            multi_sig_tx: string;
        };
        IostTxOut: {
            _enum: {
                Initial: string;
                Generated: string;
                Signed: string;
                Processing: string;
                Success: string;
                Fail: string;
            };
        };
    };
};
export default _default;
