import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import sign from '@/router/routesSign'
import posts from '@/router/routesPosts'
// import articles from '@/router/routesArticles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  sign,
  posts,
  // articles,
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
