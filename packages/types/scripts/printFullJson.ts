import fs from "fs";
import { spec, bifrostTypes, bifrostRpc } from "../../types/src/index";

function writeDataFile(filePath: string, data: any) {
  fs.writeFileSync(filePath, data);
}

function main() {
  const data = {
    types: {
      ...bifrostTypes,
    },
    typesBundle: {
      ...spec,
    },
    rpc: {
      ...bifrostRpc,
    },
  };

  const savePath = "./packages/types/fullDefinitions.json";

  const dataString = JSON.stringify(data, null, 2);
  writeDataFile(savePath, dataString);
}

main();
