import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger'; // 该插件是在控制台可以快速输出修改状态的日志的
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    power:''
  },
  mutations:{
    changePower(state,payload){
      state.power = payload
      // state.power = '';

    }
  },
  actions:{
    changePower({commit},payload){
      commit('changePower',payload)
    }
  },
  plugins: [logger()]
})