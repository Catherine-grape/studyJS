let Vue;
class Store {
	constructor(options) {
		// 把state更改为响应式数据
		this.vm = new Vue({
			data: {
				state = options.state
			}
		});
		this.state = this.vm.state;
		// getters
		this.getters = {};
		const getters = options.getters;
		if (getters) {
			Object.keys(getters).forEach(item => {
				Object.defineProperty(this.getters, item, {
					get: () => {
						return getters[item](this.state);
					}
				});
			});
		}
		// mutations
		this.mutations = {};
		const mutations = options.mutations;
		if (mutations) {
			Object.keys(mutations).forEach(item => {
				this.mutations[item] = () => {
					mutations[item].call(this, this.state);
				};
			});
		}
		// actions
		this.actions = {};
		const actions = options.actions;
		if (actions) {
			Object.keys(actions).forEach(item => {
				this.actions[item] = () => {
					actions[item].call(this, this);
				};
			});
		}
		// 重构commit/dispatch（保证this是Store实例）
		let {
			commit,
			dispatch
		} = this;
		this.commit = type => {
			commit.call(this, type);
		};
		this.dispatch = type => {
			dispatch.call(this, type);
		};
	}
	commit(type) {
		this.mutations[type]();
	}
	dispatch(type) {
		this.actions[type]();
	}
}
const install = (_Vue) => {
	// _Vue===Vue
	Vue = _Vue;
	_Vue.mixin({
		// 把公共的方法分发给每一个组件（混入）
		beforeCreate() {
			// this-->每一次创建vue/vue组件的实例
			if (this.$options && this.$options.store) {
				// 针对new Vue
				this.$store = this.$options.store;
			} else {
				// 针对于Vue组件
				this.$store = this.$parent && this.$parent.store;
			}
		}
	});
};
const mapState = state => {
	let obj = {};
	state.forEach(item => {
		obj[item] = function () {
			return this.$store.state[item];
		}
	});
	return obj;
};
const mapGetters = getters => {
	let obj = {};
	getters.forEach(item => {
		obj[item] = function () {
			return this.$store.getters[item](this.$store.state);
		}
	});
	return obj;
};
const mapMutations = mutations => {
	let obj = {};
	mutations.forEach(item => {
		obj[item] = function (payload) {
			return this.$store.commit(item, payload);
		}
	});
	return obj;
};
const mapActions = actions => {
	let obj = {};
	actions.forEach(item => {
		obj[item] = function (payload) {
			return this.$store.dispatch(item, payload);
		}
	});
	return obj;
};
export default {
	Store,
	install,
	mapState,
	mapGetters,
	mapMutations,
	mapActions
};