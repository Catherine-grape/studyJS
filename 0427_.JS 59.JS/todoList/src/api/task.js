// 存放task的接口
import axios from './axios';
import  {GET_LIST}   from '../store/url'
// 请求列表的api
/* 
get系列请求和post系列请求传参方式是不一样的
请求的快捷方式 post就不能写data 不管用
axios.get('路径',{params:{name:1,age:2}});
axios.post('路径',{name:1,age:2})
*/
export function queryList(params={}) {
    return axios.get(GET_LIST, {
        params: params
        // 属性名 get请求是固定的params
    })
}
// 新增列表
export function addTask(params={}) {
    return axios.post('/addTask', {...params})
}
// 删除列表
export function removeTask(params={}) {
    return axios.get('/removeTask', {
        params:params
    })
}
// 完成任务
export function updateTask(params={}) {
    return axios.get('/completeTask', {
        params:params
    })
}


// ------
/* 
其他页面去使用的时候
import {queryList} from 'xxx/api/task.js';
queryList({state}).then((res)=>{
    if(res.code==0){
    commit('changeList',res.data)
    }
})
*/