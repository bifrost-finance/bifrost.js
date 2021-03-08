# 如何更新并上传@bifrost-finance 包到 npm.js 网站上供下载

## 准备工作

如果 bifrost 项目里定义的类型有更新，则需要分别更新前端的类型定义文件和后端的 metadata 文件。

### 前端的类型定义文件，包括 definitions（当下类型）和 spec（历史类型）两块。

- #### 更新 bifrost.js 的 spec 文件。这个文件是用于记录主网上线之后，类型的历史变更情况（typesBundle），以便可以正确解析历史区块的数据。

  1. 在主网上线之前，可以基本上不需要改动,唯一可能需要改动的内容是在 pakcages/types/src/spec/v0.ts 文件。如今文件只记录了需要覆盖（override） polkadot api 里的三个类型，后面如果 substrate 有改动，需要修改覆盖（override） polkadot api 的其它内容，这里应该跟进修改。
  2. 在主网上线后，每进行一次类型修改，都应该反映在这个文件夹里。类型更新后的 runtime 版本，应用于文件名，如 runtime 版本 0-3 都没有调整过类型，从第 4 版本开始，类型用所调整，则应该创建一个名为 v4.ts 的文件。并同时把更新过的旧类型记录到 v0.ts 里边。还需要更新 spec 文件夹下面的 index.ts 文件，把上一阶段的结束 runtime 版本更新上去，添加新的阶段的版本信息。（具体参考示例文件）

- #### 更新 bifrost.js 的 definitions 文件。这里的一系列 definitions.ts 的文件，分模块记录了当前版本的所有类型。
  1. 如果仅是修改原有模块的类型，则在 pakcages/types/src/interfaces 文件夹下面，找到与 bifrost 项目 brml 文件夹下对应的 module 文件夹，如 swap 对应 swap，bridge-eos 对应 bridgeEos。在该文件夹下面的 defintions.ts 文件里，按格式把类型更新进行增删改。
  2. 如果是新增模块，新建文件夹后，只需创建 definitions.ts 文件，另外同文件夹下的 index.ts 和 types.ts 文件都是脚本自动生成的，无需手动创建。同时，还需在 interfaces 文件夹下面的汇总 definitions.ts 文件当中，按格式添加上新增的模块。

### 更新后端的 metadata 文件。

##### 方法一：无正在运行的节点时：

1. 在本地跑起来一条链。
2. 在 bifrost.js 工程根目录下，输入命令行：yarn update-metadata 。 则 packages/bypes/bifrost.json 文件会根据本地跑的链，进行相应的更新。

##### 方法二：有正在运行的节点时：

用下面的代码直接获取新的 metadata 文件：
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://bifrost-rpc.testnet.liebi.com:9933 > bifrost.json

### 必要时，需升级 polkadot.js 版本，与后端版本同步。

## 包的上传操作

1. 做好上面提到的准备工作
2. 在项目根目录下，输入命令行： lerna version --skip-git ，创建新的版本编码。
3. 在项目根目录下，输入命令行：yarn generate 。这个命令，会把 definitions 和 metadata 进行匹配，自动生成 packages/types 文件夹下面的一些 api 文件。
4. 把 bifrost.js/node_modules/.bin/polkadot-dev-build-ts 这个文件下面一段话的 return 注释掉，不然就会把所有 build 文件集中在一起另外生成目录。注释掉以后，几个目录的 build 文件夹，就会分别生成在各自的目录下面。
   if (!name.startsWith('@polkadot/')) {
   // return;
   }
5. 在项目根目录下，输入命令行：yarn build 。这个命令，把整个工程的 ts 文件生成可执行的 js 文件，放在各个包的 build 文件夹下。
6. 分别进入到 api、api-derive、types 文件夹下的 build 文件夹内，输入命令 yarn publish，输入前面 lerna 生成的版本号，并填入 npmjs 的密码，即可把新版本发布上去，供他人下载和使用。如：用 cd bifrost.js/packages/types/build，进入 types 下面的 build 文件夹，然后 yarn publish 进行发布。

## 额外命令

#### 整合所有模块的类型的命令

在 bifrost.js 工程的根目录下，输入命令行： yarn generate-full-definitions, 则会自动生成 bifrost.js/packages/types/fullDefinitions.json 文件。这里边集合了所有模块的类型，供浏览器类型解析使用。
