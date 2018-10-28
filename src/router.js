/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import index from '@/pages/index'
import saveinfo from '@/pages/saveinfo'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/result',
      name: 'saveinfo',
      component: saveinfo
    }
  ]
})
