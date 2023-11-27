import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/posts',
      name: 'post.index',
      component: () => import('../views/post/Index.vue')
    },
    {
      path: '/categories',
      name: 'category.index',
      component: () => import('../views/category/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/auth/Me.vue')
    }
  ]
})

export default router
