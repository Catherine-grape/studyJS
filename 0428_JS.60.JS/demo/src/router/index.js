import Vue from 'vue';
import VueRouter from 'vue-router';
import customer from '../pages/customer';
import customerList from '../pages/customer/customerList.vue';
import customerAdd from '../pages/customer/customerAdd.vue';
import customerModel from './customer'
// '@/pages/customer/customerAdd.vue'   @代表src，使用@没有提示

import organize from '../pages/organize';
import noFound from '../pages/notFound';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/customer'
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
            ] */ customerModel
        },
        {
            path: '/organize',
            component: organize,
            children: []
        },
        {
            path: '*',
            component: noFound
        }
    ]
});