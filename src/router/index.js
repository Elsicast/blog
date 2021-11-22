import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login.vue'
import index from '../components/index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: index,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
