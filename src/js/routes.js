import Vue from 'vue'
import VueRouter from 'vue-router'

const routes= function() {
  Vue.use(VueRouter)
  const config= {
    mode: 'hash'
    ,base: location.pathname
    ,routes: [
      {
        path: '/home'
        ,component: (resolve)=> import('../pages/home.vue')
          .then(resolve)
        ,children: []
      }
      ,{
        path: '/login'
        ,component: (resolve)=> import('../pages/login.vue')
          .then(resolve)
        ,children: []
      }
      ,{
        path: '*'
        ,redirect: '/home'
      }
    ]
  }
  return new VueRouter(config)
}()

export default routes
