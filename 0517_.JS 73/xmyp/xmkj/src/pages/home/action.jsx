import { HOME_INIT } from './action-types';
import * as servers from '../../api/home';
export function actionInit(value) {
    // 请求数据，把请求成功的数据直接放到payload上
    /* servers.init(value).then((result) => {
     dispatch()这里面拿不到dispatch
         return {
        type: HOME_INIT,
        payload: result
    }
    }) 
    return {}
    */
//    使用中间件以后，那当前的actions函数就可以return 一个新的函数了，而且这块也可以使用异步了
    return async (dispatch) => {//这个函数由中间件处理了一下 是中间件去执行的
        let res = await servers.init(value);
        dispatch({
            type: HOME_INIT,
            payload: res
        })
    };
}