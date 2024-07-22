import { createRouter, createWebHistory } from 'vue-router'
import PendingPOs from '../components/PendingPOs.vue'
import MainContent from '../components/Content.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/pendingpo',
    name: 'PendingPOs',
    component: PendingPOs
  },
  {
    path : '/login',
    name : 'Login',
    component : Login

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
