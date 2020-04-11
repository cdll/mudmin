import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const config= {
  mode: 'hash'
  ,base: location.pathname
  ,routes: [
    {
      path: '/home'
      ,title: 'Mudmin'
      ,icon: 'home'
      ,component: (resolve)=> import('../pages/home.vue')
        .then(resolve)
      ,children: []
    }
    ,{
      path: '/login'
      ,title: '登录'
      ,icon: 'forward'
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
const routes= new VueRouter(config)

export default routes
