declare const _default: {
    rpc: {};
    types: {
        VersionId: string;
        PermissionName: string;
        PermissionLevel: {
            actor: string;
            permission: string;
        };
        Action: {
            account: string;
            name: string;
            authorization: string;
            data: string;
        };
        AccountName: string;
        Checksum256: string;
        ActionName: string;
        FlatMap: {
            map: string;
        };
        UnsignedInt: string;
        ActionReceipt: {
            receiver: string;
            act_digest: string;
            global_sequence: string;
            recv_sequence: string;
            auth_sequence: string;
            code_sequence: string;
            abi_sequence: string;
        };
        BlockchainType: {
            _enum: string[];
        };
        Precision: string;
        BridgeAssetSymbol: {
            blockchain: string;
            symbol: string;
            precision: string;
        };
        PublicKey: {
            type_: string;
            data: string;
        };
        ProducerKey: {
            producer_name: string;
            block_signing_key: string;
        };
        ProducerSchedule: {
            version: string;
            producers: string;
        };
        bridgeEosSignature: {
            type_: string;
            data: string;
        };
        BlockTimestamp: string;
        Extension: string;
        BlockHeader: {
            timestamp: string;
            producer: string;
            confirmed: string;
            previous: string;
            transaction_mroot: string;
            action_mroot: string;
            schedule_version: string;
            new_producers: string;
            header_extensions: string;
        };
        SignedBlockHeader: {
            block_header: string;
            producer_signature: string;
        };
        Checksum256Array: string;
        IncrementalMerkle: {
            _node_count: string;
            _active_nodes: string;
        };
        TxSig: {
            signature: string;
            author: string;
        };
        MultiSig: {
            signatures: string;
            threshold: string;
        };
        MultiSigTx: {
            chain_id: string;
            raw_tx: string;
            multi_sig: string;
            action: string;
            from: string;
            asset_id: string;
        };
        Sent: {
            tx_id: string;
            from: string;
            asset_id: string;
        };
        Succeeded: {
            tx_id: string;
        };
        Failed: {
            tx_id: string;
            reason: string;
        };
        TxOut: {
            _enum: {
                Initialized: string;
                Created: string;
                SignComplete: string;
                Sent: string;
                Succeeded: string;
                Failed: string;
            };
        };
        TransactionStatus: {
            _enum: string[];
        };
        ProducerAuthoritySchedule: {
            version: string;
            producers: string;
        };
        ProducerAuthority: {
            producer_name: string;
            authority: string;
        };
        BlockSigningAuthority: string;
        BlockSigningAuthorityV0: {
            threshold: string;
            keyWeights: string;
        };
        KeyWeight: {
            key: string;
            weight: string;
        };
    };
};
export default _default;
