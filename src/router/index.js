import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: () => import('@/views/Component.vue')
    },
    {
      path: '/page98',
      component: () => import('@/views/Page98.vue')
    },
    {
      path: '/page103',
      component: () => import('@/views/Page103.vue')
    },
  ],
})

export default router
