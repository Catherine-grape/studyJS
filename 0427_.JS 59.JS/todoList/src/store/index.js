import Vue from 'vue';
import Vuex from 'vuex';
import { queryList } from '../api/task'
// import {CHANGE_LIST} from './types'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list:[],
    },
    getters: {},
    mutations: {
        changeList(state, payload) {
            console.log(payload,13);
            state.list = payload;
        }
    },
    actions: {
        // 使用变量时需要使用[变量] 因为mutations和actions里面的是属性名 默认为字符串类型
        changeList({commit}) {
          return  queryList().then(result => {
                let { code, list } = result;
                if (code == 0) {
                 commit('changeList',list)                  
                } else {
                    commit('changeList',[])
                }
            })
        }
    }
});