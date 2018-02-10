import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/pages/Welcome'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import AddTask from '@/pages/AddTask'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },    
    { 
      path: '/addTask/:taskId?',
      name: 'AddTask',
      component: AddTask
    },    
    { 
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]  
});

router.beforeEach((to, from, next) => {
  const credentials = JSON.parse(localStorage.getItem('credentials'));

  if (to.path === '/') {
    if (credentials && credentials.token) {
      next({name: 'Dashboard'});
    } else {
      next({name: 'welcome'});
    }
    
    return;
  }

  if (to.name !== 'welcome') {
    if (!credentials || !credentials.token) {
      next({name: 'welcome'});
      return;
    }
  }

  next();
});

export default router;
