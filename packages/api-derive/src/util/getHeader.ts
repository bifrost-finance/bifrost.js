// Copyright 2020 @bifrost-finance/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { mergeMap, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { memo } from './memo';
import { BlockHash } from '@polkadot/types/interfaces/chain';
import { Header } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import { timestampListAndBlockHeightList } from './types';

/**
 * @name getHeader
 * @description get the header information of current block
 * @param instanceId
 * @param api
 */

export function getHeader(instanceId: string, api: ApiInterfaceRx): () => Observable<Header> {
  return memo(instanceId, (): any => {
    return api.rpc.chain.getHeader();
  }
  );
}

/**
 * @name getDesignatedBlockHash
 * @description get the hash value fo the designated blocks back. If no blocks back number provide, SEVEN_DAY_BLOCK_NUM will be the default value.
 * @param instanceId
 * @param api
 */

export function getDesignatedBlockHash(instanceId: string, api: ApiInterfaceRx): (numBlockBack?: number) => Observable<BlockHash> {
  return memo(instanceId, (numBlockBack?: number): any => {
    const BLOCK_INTERVAL = 6; // 6 seconds to generate a block
    const SEVEN_DAY_BLOCK_NUM = 7 * 24 * 60 * 60 / BLOCK_INTERVAL;

    const getHeaderQuery = getHeader(instanceId, api);
    let numBlockBackCount = 0;

    if (numBlockBack === undefined) {
      numBlockBackCount = SEVEN_DAY_BLOCK_NUM; // if no numBlockBack sent in, the default value for numBlockBack_count is SEVEN_DAY_BLOCK_NUM, which means we are querying the exact block seven days ago.
    } else {
      numBlockBackCount = numBlockBack;
    }

    return getHeaderQuery().pipe(
      map((result) => {
        api.rpc.chain.getBlockHash(result.number.unwrap().subn(numBlockBackCount));
      })
    );
  }
  );
}

/**
 * @name calCurrentDateHourZeroBlockHeight
 * @description Calculate the block height of time 00:00:00 of current date.
 * @param instanceId
 * @param api
 * @param var date = new Date(2016, 6, 27, 13, 30, 0);
 */

export function calCurrentDateHourZeroBlockHeight(instanceId: string, api: ApiInterfaceRx): () => Observable<BN> {
  return memo(instanceId, (): any => {
    const BLOCK_INTERVAL = 6; // 6 seconds to generate a block
    const getHeaderQuery = getHeader(instanceId, api);
    const currentBlockNumber = getHeaderQuery().pipe(
      map((result) => {
        return  result.number.unwrap();
      }));

    const currentTime = new Date();
    const currentTimestamp = currentTime.getTime();

    const currentDateHourZero = currentTime;
    currentDateHourZero.setHours(0,0,0);
    const currentDateHourZeroTimestamp = currentDateHourZero.getTime();

    const blockDifference =  Math.floor((currentTimestamp-currentDateHourZeroTimestamp)/1000/BLOCK_INTERVAL);

    const hourZeroBlockNumber = currentBlockNumber.pipe(
      map((blockNum) => {
        return  blockNum.subn(blockDifference);
      }));

    return hourZeroBlockNumber;
  }
  );
}

/**
 * @name generateBachBlockHeightList
 * @description According to the set rule, generate a list of block heights, ending time is time 00:00:00 of current date.
 * @param instanceId
 * @param api
 */

export function generateBachBlockHeightList(instanceId: string, api: ApiInterfaceRx): (intervalBlocks?: number, totalNumber?: number) => Observable<timestampListAndBlockHeightList> {
  return memo(instanceId, (intervalBlocks?: number, totalNumber?: number): any => {
    const BLOCK_INTERVAL = 6; // 6 seconds to generate a block
    const ONE_DAY_BLOCKS = 60 * 60 * 24 / BLOCK_INTERVAL;
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    let interValBlockNum: number;
    let totalNum: number;

    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const calCurrentDateHourZeroBlockHeightQuery = calCurrentDateHourZeroBlockHeight(instanceId, api);
    let blockNum = calCurrentDateHourZeroBlockHeightQuery();

    if (intervalBlocks == undefined) {
      interValBlockNum = ONE_DAY_BLOCKS;
    } else {
      interValBlockNum = intervalBlocks;
    }

    if(totalNumber == undefined) {
      totalNum = 30;
    } else {
      totalNum = totalNumber;
    }

    let calTimestamp = currentTimestamp;
    let calBlockHeight = blockNum;
    let timestampList = [];
    let blockHeightList = [];

    for(let i = 0; i< totalNum; i++) {
      timestampList.push(calTimestamp);
      blockHeightList.push(calBlockHeight);

      calTimestamp = calTimestamp - MILLISECONDS_PER_DAY;
      calBlockHeight = calBlockHeight.pipe(map((result)=>{
        return result.subn(interValBlockNum);
      })); ;
    }

    return {
      timestampList: timestampList,
      blockHeightList: combineLatest(blockHeightList)
    }
  }
  );
}

/**
 * @name getBatchBlockHash
 * @description get the header information of current block
 * @param instanceId
 * @param api
 */

export function getBatchBlockHash(instanceId: string, api: ApiInterfaceRx): (blockHeightList: Observable<BN[]>) => Observable<BlockHash[]> {
  return memo(instanceId, (blockHeightList: Observable<BN[]>): any => {
    
    const getDesignatedBlockHashQuery = getDesignatedBlockHash(instanceId, api);

    return blockHeightList.pipe(mergeMap((blockHeightArray)=>{
     return combineLatest(blockHeightArray.map((blockHeight)=>{
        return getDesignatedBlockHashQuery(blockHeight.toNumber());

      }));
      }));
  }
  );
}



