import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/pages/welcome/Welcome'
import Dashboard from '@/pages/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
    	path: '/dashboard',
    	name: 'dashboard',
    	component: Dashboard
    }
  ]
})
