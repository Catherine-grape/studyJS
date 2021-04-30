import customerList from '../pages/customer/customerList.vue';
import customerAdd from '../pages/customer/customerAdd.vue';

export default [
    {
        path: '/customer',
        redirect:'/customer/list'
    },
    {
        path: 'list',
        component: customerList
    },
    {
        path: 'add',
        component: customerAdd
    }

]