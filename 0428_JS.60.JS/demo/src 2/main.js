import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { checkLogin, getPower } from './api/main'
/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';

/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI); // 初始化ElementUI，
Vue.config.productionTip = false;

// 注册一个全局自定义指令 `v-focus`
Vue.directive('power', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,obj) {
    // 聚焦元素
    // el是当前v-power操作的元素
    // obj是一个对象，里边的value就是给v-power传递的值(value的值就是当前元素对应的权限)
    // 咱们要判断一下当前的value的值在power里边有没有，如果有的话，人家就是有权限，那就正常显示，如果没有的话，那就是没有权限，就把当前的dom元素删除
    let power = store.state.power;
    let flag = obj.value;
    console.log(power,26)
    if(!power.includes(flag)){
      el.parentNode.removeChild(el)
    }


  }
})

// 当前的接口的请求时一个串行的过程，等到登录校验成功之后在去发送请求权限的接口，
checkLogin().then((result) => {
  let { code } = result;
  if (code == 0) {
    // 如果当前的登录校验成功，就在继续请求权限的接口
    // new Vue({
    //   store,
    //   router,
    //   render: h => h(App)
    // }).$mount('#app');
    return getPower()
   }
  else {
    // 如果校验失败，就返回一个失败的promise实例，让下边的catch执行
    return Promise.reject() 
  }
}).then((result) => {
  let {code,power} = result;
  if(code == 0){
    // 应该把power存储到store中
    store.commit('changePower',power);
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
  }
}).then(()=>{

}).catch(() => {
  Vue.prototype.$alert('您当是非法登录，请返回登录页', {
    callback: () => {
      location.href = '/login.html'
    }
  })
})


// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app');
