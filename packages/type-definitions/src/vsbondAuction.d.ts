declare const _default: {
    rpc: {};
    types: {
        OrderInfo: {
            owner: string;
            vsbond: string;
            amount: string;
            remain: string;
            total_price: string;
            order_id: string;
            order_type: string;
            remain_price: string;
        };
        OrderId: string;
        OrderType: {
            _enum: {
                Sell: number;
                Buy: number;
            };
        };
    };
};
export default _default;
