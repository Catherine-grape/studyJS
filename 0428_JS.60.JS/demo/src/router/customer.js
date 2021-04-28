import customerList from '../pages/customer/customerList.vue';
import customerAdd from '../pages/customer/customerAdd.vue';

export default [
    {
        path: 'list',
        component: customerList
    },
    {
        path: 'add',
        component: customerAdd
    }
]