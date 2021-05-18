import axios from './axios';


// home的初始化接口
function queryInit(){
  return axios.post('/init'); // 返回值是promise实例

}

// 请求首页hot组件的数据接口
function queryHot(id = 'G0001'){
  return axios.post('/main',{id})
  // return axios.get('/main',{params:{}})
}

export default {
  queryInit,
  queryHot
}