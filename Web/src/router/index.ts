import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/apidoc',
    name: 'ApiDoc',
    component: () => import(/* webpackChunkName: "about" */ '../views/APIDoc.vue')
  }
]

const router: VueRouter = new VueRouter({
  routes
})

export default router
