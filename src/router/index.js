import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Layout from '@/layout'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      }
    ],
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutMe',
        component: () => import('@/views/bio/index.vue'),
      }
    ],
  },
  {
    path: '/professions',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Professions',
        component: () => import('@/views/professions/index.vue'),
      }
    ],
  },
  {
    path: '/contacts',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Contacts',
        component: () => import('@/views/contacts/index.vue'),
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
