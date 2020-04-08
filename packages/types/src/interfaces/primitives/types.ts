// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, u128, u16, u32, u64 } from '@polkadot/types/primitive';
import { Balance } from '@bifrost-network/types/interfaces/runtime';

/** @name AccountAsset */
export interface AccountAsset extends Struct {
  readonly balance: Balance;
  readonly cost: Cost;
  readonly income: Income;
}

/** @name AccountName */
export interface AccountName extends u64 {}

/** @name ActionName */
export interface ActionName extends u64 {}

/** @name ActionReceipt */
export interface ActionReceipt extends Struct {
  readonly receiver: AccountName;
  readonly act_digest: Checksum256;
  readonly global_sequence: u64;
  readonly recv_sequence: u64;
  readonly auth_sequence: FlatMap;
  readonly code_sequence: UnsignedInt;
  readonly abi_sequence: UnsignedInt;
}

/** @name BlockchainType */
export interface BlockchainType extends Enum {
  readonly isBifrost: boolean;
  readonly isEos: boolean;
}

/** @name BlockHeader */
export interface BlockHeader extends Struct {
  readonly timestamp: BlockTimestamp;
  readonly producer: AccountName;
  readonly confirmed: u16;
  readonly previous: Checksum256;
  readonly transaction_mroot: Checksum256;
  readonly action_mroot: Checksum256;
  readonly schedule_version: u32;
  readonly new_producers: Option<ProducerSchedule>;
  readonly header_extensions: Vec<Extension>;
}

/** @name BlockTimestamp */
export interface BlockTimestamp extends u32 {}

/** @name BridgeAssetSymbol */
export interface BridgeAssetSymbol extends Struct {
  readonly blockchain: BlockchainType;
  readonly symbol: Bytes;
  readonly precision: Precision;
}

/** @name Checksum256 */
export interface Checksum256 extends U8aFixed {}

/** @name Cost */
export interface Cost extends u128 {}

/** @name DataVersion */
export interface DataVersion extends u64 {}

/** @name ExchangeRate */
export interface ExchangeRate extends u64 {}

/** @name Extension */
export interface Extension extends ITuple<[u16, Bytes]> {}

/** @name Fee */
export interface Fee extends u64 {}

/** @name FlatMap */
export interface FlatMap extends Struct {
  readonly map: Vec<ITuple<[ActionName, u64]>>;
}

/** @name Income */
export interface Income extends u128 {}

/** @name IncrementalMerkle */
export interface IncrementalMerkle extends Struct {
  readonly _node_count: u64;
  readonly _active_nodes: Vec<Checksum256>;
}

/** @name InVariantPool */
export interface InVariantPool extends Balance {}

/** @name Precision */
export interface Precision extends u32 {}

/** @name Price */
export interface Price extends u64 {}

/** @name ProducerKey */
export interface ProducerKey extends Struct {
  readonly producer_name: AccountName;
  readonly block_signing_key: PublicKey;
}

/** @name ProducerSchedule */
export interface ProducerSchedule extends Struct {
  readonly version: u32;
  readonly producers: Vec<ProducerKey>;
}

/** @name PublicKey */
export interface PublicKey extends Struct {
  readonly type_: UnsignedInt;
  readonly data: U8aFixed;
}

/** @name RatePerBlock */
export interface RatePerBlock extends u64 {}

/** @name RequestIdentifier */
export interface RequestIdentifier extends u64 {}

/** @name SignedBlockHeader */
export interface SignedBlockHeader extends Struct {
  readonly block_header: BlockHeader;
}

/** @name SpecIndex */
export interface SpecIndex extends u32 {}

/** @name Token */
export interface Token extends Struct {
  readonly symbol: Bytes;
  readonly precision: u16;
  readonly totalSupply: Balance;
}

/** @name TokenPair */
export interface TokenPair extends Struct {
  readonly token: Token;
  readonly vtoken: Token;
}

/** @name TokenPool */
export interface TokenPool extends Balance {}

/** @name TokenType */
export interface TokenType extends Enum {
  readonly isToken: boolean;
  readonly isVToken: boolean;
}

/** @name TxOut */
export interface TxOut extends Struct {}

/** @name UnsignedInt */
export interface UnsignedInt extends u32 {}

/** @name VersionId */
export interface VersionId extends u32 {}

/** @name VTokenPool */
export interface VTokenPool extends Balance {}

export type PHANTOM_PRIMITIVES = 'primitives';
