import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: () => import('@/components/index.vue'),
    children: [{
      path: 'child',
      component: () => import('@/components/Child.vue')
    }]
  }]
})
