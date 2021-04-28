iview与element一样都是让你快速搭建项目的ui组件库



data:{
    ss:1,
    obj:{//递归式  判断是否是对象 是的话再for in然后再增加响应
        a:2,
        b:3
    }
}


let obj={
    msg:'100'
}
给obj中的msg增加响应，
Object.definedProperty(obj,'msg',{//数据劫持
    get(){//return 什么 msg就是什么
        return 200
    },
    set(){}
} )修饰对象中的属性的



$forceUpdate( ) 让视图强制更新
this.$forceUpdate()


npm install babel-plugin-component -D
-D 是--save生产依赖 和--dev 的缩写

如果项目中没有.babelrc 可以新建，如果有babel.config.js粘在其中

其他是组件
弹框和部分需要给原型增加方法才能使用
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
以后也可以把公共的方法放在vue的原型上，组件也可以通过__proto__找到