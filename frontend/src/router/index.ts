import { createRouter, createWebHistory } from 'vue-router'
import SignInView from "@/views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/home',
      name:'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path:'/subject',
      name:'subject',
      component: () => import('../views/SessionsView.vue')
    }
  ]
})

export default router
