import axios from './index';
// 登录的接口
export function login(params={}){
    return axios.post('/user/login', { ...params });
}