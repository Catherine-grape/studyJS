import axios from './axios';

// 获取客户列表的
export function getCustomerList(params={}){
  return axios.get('/customer/list',{
    params
  })
};

// 新增客户接口
export function addCustomer(params={}){
  return axios.post('/customer/add',params)
};

// 请求客户详细信息
export function queryCustomerInfo(params={}){
  return axios.get('/customer/info',{
    params
  })
};

// 修改客户信息的接口
export function updateCustomer(params={}){
  return axios.post('/customer/update',params)
}