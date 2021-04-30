import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'
import customer from '../pages/customer';
import customerList from '../pages/customer/customerList.vue';
import customerAdd from '../pages/customer/customerAdd.vue';
import customerModel from './customer'
// '@/pages/customer/customerAdd.vue'   @代表src，使用@没有提示

import organize from '../pages/organize';
import noFound from '../pages/notFound';
Vue.use(VueRouter);


    const router=new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/customer',
        },
        {
            path: '/customer',
            component: customer,
            children: /* [
                {
                    path: 'list',
                    component:customerList
                },
                {
                    path: 'add',
                    component:customerAdd
                }
            ] */ customerModel,
            
        },
        {
            path: '/organize',
            component: organize,
            children: [],
/*             beforeEnter: (to, from, next) => {
                console.log('即将进入组织解构页面');
                // 假设当前用户的power里有userhandle字段的时候才可以进入组织结构的组件
                console.log(store.state.power);
                let power = store.state.power
                if (power.includes('userhandle')) {
                    next();
                } else {
                    Vue.prototype.$message.error('不好意思您当前无权操作');
                }
                
            }
 */
            meta: {
                isCheck: true,
                flag:'userhandle'
            }
            },
        {
            path: '*',
            component: noFound
        }
    ]
    });
router.beforeEach((to, from, next) => {
    // 此函数叫做全局的前置导航守卫
    // 它会监听所有的路由，在路由跳转成功之前会执行此函数
    // to是即将到达的路由信息
    // from是你从哪里来的路由信息
    // 如果不执行next函数的话，那路由跳转将会被终止.适宜权限校验，没有next执行都不展示
    // console.log(123);
    // next()//什么都不传就正常跳转
    let power = store.state.power;
    console.log(to);
    let meta=to.meta
    if (meta.isCheck) {
        if (power.includes(meta.flag)) {
            next();
        } else {
            Vue.prototype.$message.error('不好意思您当前无权操作');
        }
    } else {
        next()
    }
})
export default router