"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/restrict-template-expressions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const websocket_1 = require("websocket");
const main = () => {
    const endpoint = 'wss://bifrost-rpc.liebi.com/ws';
    console.log('Connecting to ', endpoint);
    const ws = new websocket_1.w3cwebsocket(endpoint);
    ws.onopen = () => {
        ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
    };
    ws.onmessage = (msg) => {
        const metadata = JSON.parse(msg.data).result;
        fs_1.default.writeFileSync('packages/types/src/metadata/static-latest.ts', `export default '${metadata}'`);
        // fs.writeFileSync('packages/types/src/metadata/static-latest.json', msg.data);
        console.log('Done');
        process.exit(0);
    };
};
main();
