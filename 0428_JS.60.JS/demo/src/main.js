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

// 注册一个全局自定义指令`v-power`
Vue.directive('power', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,obj) {
    // 聚焦元素
    // el是当前v-power操作的元素，obj是一个对象，里面的value就是给v-power传递的值(value的值就是当前元素对应的权限)。咱们需要判断一下当前的value的值在power里面没有没，如果有的话，人家就是有权限，那就正常显示，如果没有的话，那就是没有权限，就把当前的dom元素删除
    // console.log(el, power);
    let power = store.state.power;
    let flag = obj.value;
    if (!power.includes(flag)) {
      el.parentNode.removeChild(el)
    }
    
  }
})

// 当前的接口的请求是一个串行的过程，等到登录校验成功之后，再去发送请求权限的接口
checkLogin().then((result) => {
  let { code } = result;
  if (code == 0) {
    // 如果当前的登录校验成功，就再继续请求权限的接口
    // 登录成功之后再渲染页面，因为验证是一个异步的，登录失败也会导致先行渲染，所以在这里面先验证成功再进行渲染页面
    
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
    store.commit('changePower', power)
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
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