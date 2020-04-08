
// const Vue= require('vue')
// const VueRouter= require('https://system-unsafe-production.jspm.io/vue-router@3')
Promise.all([
  System.import('https://system-unsafe-production.jspm.io/vue@2.6.8')
  ,System.import('https://system-unsafe-production.jspm.io/muse-ui@3').then(museUI=> museUI.default)
  // ,System.import('./store.js')
])
.then(([
  VueDefault
  ,MuseUI
  // ,stores
])=>{
  console.info({MuseUI})
  const Vue= VueDefault.default
  Vue.use(MuseUI)
  return Promise.all([
    System.import('./src/js/routes.js')
    ,System.import('https://system-unsafe-production.jspm.io/vue-router@3')
  ])
  .then(([
    routesConfig
    ,VueRouterDefault
  ])=> {
    console.info({VueRouterDefault})
    const VueRouter= VueRouterDefault.default
    Vue.use(VueRouter)
    const routes= new VueRouter(routesConfig)
    return routes
  })
  .then((
    routes
  )=>{
    window.vm= new Vue({
      routes
      ,el: 'main'
      // ,stores
      ,components: {
        // App: resolve=> System.import('pages/app.vue').then(resolve)
      }
    }).$mount('#app')
  })
})
