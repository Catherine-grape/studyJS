import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import { CHECK_IS_LOGIN, QUERY_POWER } from './store-types';
import custom from './custom';
import {
	queryPower
} from '../api/login';

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		custom
	},
	//=>设置公共信息
	state: {
		isLogin: false,
		power: ''
	},
	mutations: {
		[CHECK_IS_LOGIN](state, isLogin = true) {
			state.isLogin = isLogin;
		},
		[QUERY_POWER](state, power = '') {
			state.power = power;
		}
	},
	actions: {
		[QUERY_POWER](context) {
			queryPower().then(power => {
				context.commit(QUERY_POWER, power);
			});
		}
	},
	plugins: [logger()]
});