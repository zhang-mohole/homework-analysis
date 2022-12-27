import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/HomeWork',
      name: 'home',
      component: () => import('@/views/HomeWork')
    }
  ]
})

export default router