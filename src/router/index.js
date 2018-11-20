import Vue from 'vue'
import Router from 'vue-router'

import TestWrapper from '@/components/TestWrapper'
import Home from '@/components/Home'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.use(Router);
Vue.use(SuiVue);

export default new Router({
  routes: [
    {
      path: '/test/:word',
      name: 'TestWrapper',
      component: TestWrapper
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
