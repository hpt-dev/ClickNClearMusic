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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/APIDoc.vue')
  }
]

const router: VueRouter = new VueRouter({
  routes
})

export default router
