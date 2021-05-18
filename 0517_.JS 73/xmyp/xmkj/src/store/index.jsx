import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';//用来在dispatch派发的时候在控制台输出日志
import thunk from 'redux-thunk';//用来解决actions中异步问题的
// 他俩都叫做中间键「单独去下载」 在调用dispatch 结束之前使用
import rootReducer from './reducers/index';

export default createStore(rootReducer,applyMiddleware(logger,thunk));//使用中间件