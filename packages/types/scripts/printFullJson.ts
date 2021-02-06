import fs from "fs";
import { inspect } from "util";
// newest version type file. Needs to be updated if want to get the newest types.
import v0 from "../src/spec/v0";

// // Read data file.
// function readDataFile(filePath: string) {
//   if (fs.existsSync(filePath)) {
//     try {
//       return JSON.parse(fs.readFileSync(filePath, "utf-8"));
//     } catch (err) {
//       console.log(err);
//     }
//   } else {
//     return undefined;
//   }
// }

// Write data into file.
function writeDataFile(filePath: string, data: any) {
  fs.writeFileSync(filePath, data);
}

function main() {
  const data = v0.types;
  const savePath = "./packages/types/fullDefinitions.ts";

  let dataString = inspect(data);
  const headerContent = `// Copyright 2021 @bifrost-finance/types authors & contributors\n// This software may be modified and distributed under the terms\n// of the Apache-2.0 license. See the LICENSE file for details.\n\n/* eslint-disable sort-keys */\n\n`;

  const headInfo = "export default {\n types:";
  const tailInfo = "\n};\n";

  dataString = headerContent + headInfo + dataString + tailInfo;

  console.log(dataString);
  writeDataFile(savePath, dataString);
}

main();
