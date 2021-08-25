import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('@/views/Index.vue')
  },
  {
    path: '/:letra',
    name: 'Principal',
    component: ()=> import('@/views/Principal.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
