import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import {checkLogin, getPower}from './api/main'

/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';

/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);//初始化Element，用use放在来Vue的全局上
Vue.config.productionTip = false;

// 当前的接口的请求是一个串行的过程，等到登录校验成功之后，再去发送请求权限的接口
checkLogin().then((result) => {
  let { code } = result;
  if (code == 0) {
    // 如果当前的登录校验成功，就再继续请求权限的接口
    // 登录成功之后再渲染页面，因为验证是一个异步的，登录失败也会导致先行渲染，所以在这里面先验证成功再进行渲染页面
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
    return getPower();
  } else {//如果校验失败，就返回一个失败的promise实例，让下面的catch执行
    // Vue.prototype.$alert('当前非法登录，请返回登录页', {
    //   callback: () => {
    //     location.href = '/login.html'
    //   }
    // })
    return Promise.reject()
  }
}).then((result) => {
 //return getPower()//.then(() => {}) 避免嵌套使用return 在下面写
  let { code, power } = result;
  if (code == 0) {
    // 应该把power存储到store中
    store.commit('changePower',power)
  }
}).catch(() => {
  Vue.prototype.$alert('当前非法登录，请返回登录页', {
      callback: () => {
        location.href = '/login.html'
      }
    })
})


/* new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
 */