import { OverrideBundleType } from "@polkadot/types/types";
import v0 from "./v0";

// Support archival
const typesBundle: OverrideBundleType = {
  spec: {
    bifrost: {
      types: [
        {
          // v0 - v20(current)
          minmax: [0, undefined], // runtime spec version
          types: v0.types,
        },
      ],
    },
  },
};

export default typesBundle;
