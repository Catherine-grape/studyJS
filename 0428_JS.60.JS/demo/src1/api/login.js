import axios from './index';

export function handleLogin(params={}) {
	return axios.post('/user/login', {
		// account,
		// password
		...params
	});
}

// 校验登录
export function checkLogin() {
	return axios.get('/user/login').then(result => {
		if (parseInt(result.code) === 0) {
			return true;
		}
		return Promise.reject(false);
	});
}

// 获取power权限
export function queryPower() {
	return axios.get('/user/power').then(result => {
		if (parseInt(result.code) === 0) {
			return result.power;
		}
		return Promise.reject(result.codeText);
	});
}

// 获取基本信息
export function queryBaseInfo(userId) {
	let obj = {};
	userId ? obj.userId = userId : null;
	return axios.get('/user/info', {
		params: obj
	}).then(result => {
		if (parseInt(result.code) === 0) {
			return result.data;
		}
		return Promise.reject(result.codeText);
	});
}

// 修改密码
export function resetpassword(option) {
	return axios.post('/user/resetpassword', option).then(result => {
		if (parseInt(result.code) === 0) {
			return true;
		}
		return Promise.reject(result.codeText);
	});
}

// 安全退出
export function signout() {
	return axios.get('/user/signout').then(result => {
		if (parseInt(result.code) === 0) {
			return true;
		}
		return Promise.reject(result.codeText);
	});
}