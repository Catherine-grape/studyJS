import axios from './index';


// 获取客户列表
export function queryCustomList(options) {
	return axios.get('/customer/list', {
		params:{
			lx: 'all',
			type: '',
			search: '',
			page: 1,
			limit: 10,
			...options
		}
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result;
		}
		return Promise.reject(result.codeText);
	});
}

// 新增客户
export function addCustom(options) {
	
	return axios.post('/customer/add', options).then(result => {
		if (parseInt(result.code) === 0) {
			return result;
		}
		return Promise.reject(result.codeText);
	});
}

// 修改客户
export function updateCustom(options) {
	
	return axios.post('/customer/update', options).then(result => {
		if (parseInt(result.code) === 0) {
			return result;
		}
		return Promise.reject(result.codeText);
	});
}

// 获取客户详情
export function queryCustomInfo(options) {
	
	return axios.get('/customer/info', {
		params:options
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result;
		}
		return Promise.reject(result.codeText);
	});
}