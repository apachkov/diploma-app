var routes = [
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

var router = new VueRouter({
  routes: routes
})