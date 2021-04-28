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