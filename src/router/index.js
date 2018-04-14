import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: () => import('@/components/pages/Contacts.vue')},
    {path: '/about', component: () => import('@/components/pages/About.vue')},
    {path: '/skills', component: () => import('@/components/pages/Skills.vue')},
  ]
})
