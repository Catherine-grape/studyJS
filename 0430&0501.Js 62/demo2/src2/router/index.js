import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import My from '../pages/My';
import Notice from '../pages/Notice';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/notice',
      component: Notice
    },
    {
      path:'*',
      redirect: '/home'
    }
  ]
})