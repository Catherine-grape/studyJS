import {CUSTOM_QUERY_LIST} from './store-types';
import {
	queryCustomList
} from '../api/customer';

export default {
	namespaced: true,
	state: {
		myList: null,
		allList: null
	},
	mutations: {
		[CUSTOM_QUERY_LIST](state, payload) {
			//=>payload={result:{},lx:my|all}
			let {
				lx = 'my',
				result = {}
			} = payload;
			lx === 'my' ? state.myList = result : state.allList = result;
		}
	},
	actions: {
		[CUSTOM_QUERY_LIST]({commit}, lx = 'my') {
			queryCustomList({
				lx
			}).then(result => {
				commit(CUSTOM_QUERY_LIST, {
					result,
					lx
				});
			}).catch(() => {});
		}
	}
};