## crm管理系统
脚手架默认是 http://localhost/  前后端交流localhost不能携带cookies

api/login.js
return promise实例有什么好处，使用的时候更方便
return axios.get('/user/power').then(result => { //正常逻辑不要在这里面写，这里面单纯保存你接口的数据
		if (parseInt(result.code) === 0) {
			return result.power;
		}
		return Promise.reject(result.codeText);
	});

import {checkLogin} from 'xxx'
checkLogin().then(()=>{

}).catch(()=>{})

路由具有生命周期钩子函数并且分为全局生命钩子「生命钩子===导航守卫」和局部生命钩子        to到那个路由去  from从那个路由来   next()的时候路由才能往下走
vuex没有

app是根组件，放到main.js中去渲染 打包的入口  main.js打包的根入口


多页面
vue.config.js
module.exports = {
    //=>基于PAGES配置多页面效果
    pages: {
        login: {
            entry: 'src/login.js',//编译打包入口
            template: 'public/login.html'//模版
        },
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        }
    }
};


this.$alert 是element的支持回调函数
执行顺序，最先执行main.js 渲染app



store 的插件
import logger from 'vuex/dist/logger'

plugins: [logger()]//可以给vuex配插件直接在控制台看见，如果还有插件可以,放在它的后面


store直接写在组件上面直接写 this.store使用，如果挂载在vue根上使用this.$store.state使用


工程化路由中的路径有快捷方式
'../pages/customer/customerAdd.vue'
'@/pages/customer/customerAdd.vue'   @代表src，使用@没有提示


limit分页 page分页 limit=10&page=1 每一页10条第一页   limit=10&page=2 每一页10条第二页   limit一般是固定的 page一般是动态的

## router的导航守卫

 此函数叫做全局的前置导航守卫
 它会监听所有的路由，在路由跳转成功之前会执行此函数
     to是即将到达的路由信息
    from是你从哪里来的路由信息
    如果不执行next函数的话，那路由跳转将会被终止
适宜权限校验，没有next执行都不展示
 router.beforeEach((to, from, next) => {
})

路由守卫从外向内执行
beforeEnter 守卫
局部导航守卫
        {
            path: '/organize',
            component: organize,
            children: [],
            beforeEnter: (to, from, next) => {
                console.log('即将进入组织解构页面');
                next();
            }
        }

## 自定义指令
注册一个全局自定义指令 `v-focus` 但是有一个缺陷，如果自己手动更改后面的hash也会跳转，最好是自己写一个自定义指令，并且设置导航守卫，这样比较严谨
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
     //el放在谁身上 el就是谁  v-focus=“flag” el就是写了这行的元素
    el.focus()
  }
})
## 0430 keep-alive

keep-alive 内置组件
Props

activated 生命周期 在缓存的时候激活组件被调用
deactivated

:include="['add']" 写在keep-alive 只有add可以缓存
:exclude="['add]"  除了add都可以缓存

## 路由懒加载
比如有些404 一时半会用不上

const Foo = () => import('./Foo.vue')
等价，当函数执行的时候才加载，
const noFound = () => {
    return import('../pages/notFound')
}


组件内的路由
beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }


  全局--》A路由独享「局部」--》A组件内部的before route enter--》A beforeRoueleave--》全局--》B路由独享--》B组件内部的before route enter



  官方
  完整的导航解析流程
导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。


## HTML5 History 模式
修改url不刷新页面
上线之后一般就不用# 那么就变成history模式

const router = new VueRouter({
  mode: 'history',
  routes: [...]
})


## vue中的动画
<transition></transition>