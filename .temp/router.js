import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import index from '@/pages/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
