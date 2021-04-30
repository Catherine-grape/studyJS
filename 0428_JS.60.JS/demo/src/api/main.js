import axios from '.';
// 校验是否登录的接口
export function checkLogin() {
    return axios.get('/user/login');
}

// 请求权限的接口
export function getPower() {
    return axios.get('/user/power');
}

// 请求个人信息的接口
export function getInfo() {
    return axios.get('/user/info');
}

// 安全退出的接口
export function signOut() {
    return axios.get('/user/signout')
}

// 修改密码的接口
export function updataPassword(params = {}) {
    return axios.post('/user/resetpassword', params)
}

// 新增客户的接口
export function addCustomer(params = {}) {
    return axios.post('/customer/add', params)
}

// 请求客户详细信息
export function queryCustomerInfo(params={}) {
    return axios.get('/customer/info',params)
}

// 修改客户信息的接口

export function updateCustomer(params = {}) {
    return axios.post('/customer/update', params)
}