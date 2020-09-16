// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, u128, u16, u32, u64, u8 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name AccountAsset */
export interface AccountAsset extends Struct {
  readonly balance: Balance;
  readonly locked: Balance;
  readonly available: Balance;
  readonly cost: Cost;
  readonly income: Income;
}

/** @name AccountName */
export interface AccountName extends u64 {}

/** @name Action */
export interface Action extends Struct {
  readonly account: AccountName;
  readonly name: ActionName;
  readonly authorization: Vec<PermissionLevel>;
  readonly data: Bytes;
}

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

/** @name AssetConfig */
export interface AssetConfig extends Struct {
  readonly redeem_duration: BlockNumber;
  readonly min_reward_per_block: Balance;
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

/** @name BlockNumber */
export interface BlockNumber extends u32 {}

/** @name BlockSigningAuthority */
export interface BlockSigningAuthority extends ITuple<[UnsignedInt, BlockSigningAuthorityV0]> {}

/** @name BlockSigningAuthorityV0 */
// @ts-ignore
export interface BlockSigningAuthorityV0 extends Struct {
  readonly threshold: u32;
  readonly keys: Vec<KeyWeight>;
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

/** @name ConvertPool */
export interface ConvertPool extends Struct {
  readonly token_pool: Balance;
  readonly vtoken_pool: Balance;
  readonly current_reward: Balance;
  readonly pending_reward: Balance;
}

/** @name ConvertPrice */
export interface ConvertPrice extends u128 {}

/** @name Cost */
export interface Cost extends u128 {}

/** @name DataVersion */
export interface DataVersion extends u64 {}

/** @name Extension */
export interface Extension extends ITuple<[u16, Bytes]> {}

/** @name Fail */
export interface Fail extends Struct {
  readonly tx_id: Bytes;
  readonly reason: Bytes;
  readonly tx: MultiSigTx;
}

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

/** @name InvariantValue */
export interface InvariantValue extends Balance {}

/** @name KeyWeight */
export interface KeyWeight extends Struct {
  readonly key: PublicKey;
  readonly weight: u16;
}

/** @name MultiSig */
export interface MultiSig extends Struct {
  readonly signatures: Vec<TxSig>;
  readonly threshold: u8;
}

/** @name MultiSigTx */
export interface MultiSigTx extends Struct {
  readonly chain_id: Bytes;
  readonly raw_tx: Bytes;
  readonly multi_sig: MultiSig;
  readonly action: Action;
  readonly from: AccountId;
  readonly token_symbol: TokenSymbol;
}

/** @name PermissionLevel */
export interface PermissionLevel extends Struct {
  readonly actor: AccountName;
  readonly permission: PermissionName;
}

/** @name PermissionName */
export interface PermissionName extends u64 {}

/** @name PoolWeight */
export interface PoolWeight extends Balance {}

/** @name Precision */
export interface Precision extends u32 {}

/** @name Price */
export interface Price extends u64 {}

/** @name Processing */
export interface Processing extends Struct {
  readonly tx_id: Bytes;
  readonly multi_sig_tx: MultiSigTx;
}

/** @name ProducerAuthority */
export interface ProducerAuthority extends Struct {
  readonly producer_name: ActionName;
  readonly authority: BlockSigningAuthority;
}

/** @name ProducerAuthoritySchedule */
export interface ProducerAuthoritySchedule extends Struct {
  readonly version: u32;
  readonly producers: Vec<ProducerAuthority>;
}

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

/** @name ProxyValidatorRegister */
export interface ProxyValidatorRegister extends Struct {
  readonly last_block: BlockNumber;
  readonly deposit: Balance;
  readonly need: Balance;
  readonly staking: Balance;
  readonly reward_per_block: Balance;
  readonly validator_address: Bytes;
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

/** @name Signature */
export interface Signature extends Struct {
  readonly type_: UnsignedInt;
  readonly data: U8aFixed;
}

/** @name SignedBlockHeader */
export interface SignedBlockHeader extends Struct {
  readonly block_header: BlockHeader;
  readonly producer_signature: Signature;
}

/** @name SpecIndex */
export interface SpecIndex extends u32 {}

/** @name Token */
export interface Token extends Struct {
  readonly symbol: Bytes;
  readonly precision: u16;
  readonly totalSupply: Balance;
}

/** @name TokenPool */
export interface TokenPool extends Balance {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isAUsd: boolean;
  readonly isDot: boolean;
  readonly isVDot: boolean;
  readonly isKsm: boolean;
  readonly isVKsm: boolean;
  readonly isEos: boolean;
  readonly isVEos: boolean;
}

/** @name TxOut */
export interface TxOut extends Enum {
  readonly isInitial: boolean;
  readonly asInitial: MultiSigTx;
  readonly isGenerated: boolean;
  readonly asGenerated: MultiSigTx;
  readonly isSigned: boolean;
  readonly asSigned: MultiSigTx;
  readonly isProcessing: boolean;
  readonly asProcessing: Processing;
  readonly isSuccess: boolean;
  readonly asSuccess: Bytes;
  readonly isFail: boolean;
  readonly asFail: Fail;
}

/** @name TxSig */
export interface TxSig extends Struct {
  readonly signature: Bytes;
  readonly author: AccountId;
}

/** @name UnsignedInt */
export interface UnsignedInt extends u32 {}

/** @name VersionId */
export interface VersionId extends u32 {}

/** @name VTokenPool */
export interface VTokenPool extends Balance {}

export type PHANTOM_PRIMITIVES = 'primitives';
