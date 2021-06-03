export default {
    rpc: {},
    types: {
      OrmlAccountData: {
        free: "Balance",
        reserved: "Balance",
        frozen: "Balance"
      },
    },
    typesAlias: {
      Assets: {
        AccountData: "OrmlAccountData"
      }
    }
  };
  