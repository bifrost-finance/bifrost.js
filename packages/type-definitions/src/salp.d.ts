declare const _default: {
    rpc: {
        getContribution: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
        getLiteContribution: {
            description: string;
            params: {
                name: string;
                type: string;
            }[];
            type: string;
        };
    };
    types: {
        TrieIndex: string;
        FundInfo: {
            raised: string;
            cap: string;
            first_slot: string;
            last_slot: string;
            trie_index: string;
            status: string;
        };
        RedeemStatus: string;
        FundStatus: {
            _enum: {
                Ongoing: number;
                Retired: number;
                Success: number;
                Failed: number;
                RefundWithdrew: number;
                RedeemWithdrew: number;
                End: number;
            };
        };
        ContributionStatus: {
            _enum: string[];
        };
        CrowdloanContributeCall: {
            _enum: {
                CrowdloanContribute: string;
            };
        };
        ContributeCall: {
            _enum: {
                Contribute: string;
            };
        };
        Contribution: {
            index: string;
            value: string;
            signature: string;
        };
        Withdraw: {
            who: string;
            index: string;
        };
        WithdrawCall: {
            _enum: {
                Withdraw: string;
            };
        };
        ParachainTransactProxyType: {
            _enum: {
                Primary: number;
                Derived: number;
            };
        };
        ParachainDerivedProxyAccountType: {
            _enum: {
                Salp: number;
                Staking: number;
            };
        };
        Keys: string;
        ParachainTransactType: {
            _enum: {
                Xcm: number;
                Proxy: number;
            };
        };
        RpcContributionStatus: {
            _enum: {
                Idle: number;
                Contributing: number;
                Refunded: number;
                Unlocked: number;
                Redeemed: number;
            };
        };
    };
};
export default _default;
