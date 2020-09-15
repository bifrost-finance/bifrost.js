import { ApiOptions } from '@polkadot/api/types';
import { TokenSymbol } from '@bifrost-finance/types/interfaces';
import { ApiPromise } from '@polkadot/api';


export function getVTokenSupply(api: ApiPromise, symbol: TokenSymbol){
    //先用传进来的symbol判断一下属于哪一种类型
    //确定了之后，就调用asset pallet的storage的查询，查询得到这个token的supply数值



    //然后返回该数值

}
