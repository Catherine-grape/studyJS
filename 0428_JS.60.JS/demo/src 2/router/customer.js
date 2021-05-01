import CustomerList from '../pages/customer/customerList.vue';
import CustomerAdd from '../pages/customer/customerAdd.vue';
export default [
  {
    path:'/customer',
    redirect:'/customer/list'
  },
  {
    path:"list",
    component:CustomerList
  },
  {
    path:'add',
    component:CustomerAdd
  }
]