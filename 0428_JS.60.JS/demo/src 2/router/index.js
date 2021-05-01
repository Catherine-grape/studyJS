import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Customer from '../pages/customer/index.vue';
//  '@/pages/customer/customerAdd.vue' // @就代表src路径

import Orgaine from '../pages/orgaine/index.vue';

// import NoFound from '../pages/notFound';
const NoFound = () => import('../pages/notFound'); // 路由懒加路由匹配成功之后，渲染对应的组件的时候，此处的函数执行，才会去导入你的组件


import customerModel from './customer';


Vue.use(VueRouter);



const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      redirect:'/customer'
    },
    {
      path:'/customer',
      component:Customer,
      children:customerModel,
      // meta:{
      //   isCheck:true,
      //   flag:'departmenthandle'
      // }
    },
    {
      path:'/orgaine',
      component:Orgaine,
      meta:{
        isCheck:true,
        flag:'userhandle'
      }
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   console.log('即将进入组织结构页面');
      //   console.log(store.state.power,34);
      //   let power = store.state.power;
      //   // 假设当前用户的power里有userhandle字段的时候才可以进入组织结构组件
      //   if(power.includes('userhandle')){
      //     next()
      //   }
      //   else {
      //     Vue.prototype.$message.error('不好意思您没有权限')
         
      //   }
        
      // }
    },
    {
      path:'*',
      component:NoFound,
    }
  ]
});
router.beforeEach((to, from, next) => {
  // 此函数叫做全局的前置导航守卫
  // 他会监听所有的路由，在路由跳转成功之前会执行此函数
  // to是即将要到达的路由信息
  // from 是你从哪来的路由信息
  // 如果不执行next()的话，那路由跳转将会被终止
  // console.log(123);
  // next()
  let power = store.state.power;

  let meta = to.meta;
  console.log(meta,71);
  if(meta.isCheck){
    if(power.includes(meta.flag)){
      next()
    }
    else {
      Vue.prototype.$message.error('不好意思您没有权限')
    }
  }
  else {
    next()
  }
})
export default router;