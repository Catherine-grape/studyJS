import axios from './index';

// 获取客户列表
export function getCustomerList(params = {}) {
    return axios.get('/customer/list', {
       params
    })
}