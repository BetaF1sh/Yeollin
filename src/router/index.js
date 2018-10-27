import Vue from 'vue'
import Router from 'vue-router'
import TestWrapper from '@/components/TestWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestWrapper',
      component: TestWrapper
    }
  ]
})
