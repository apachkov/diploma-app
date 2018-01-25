var app = new Vue({
  el: '#app',
  name: 'App',
  template: `<div id="app">
  	<router-view></router-view>
  </div>`,
  router: router
})