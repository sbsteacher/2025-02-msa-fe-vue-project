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
    {
      path: '/page108',
      component: () => import('@/views/Page108.vue')
    },
    {
      path: '/page110',
      component: () => import('@/views/Page110.vue')
    },
    {
      path: '/page114',
      component: () => import('@/views/Page114.vue')
    },
    {
      path: '/page118',
      component: () => import('@/views/Page118.vue')
    },
    {
      path: '/mission01',
      component: () => import('@/views/mission/Mission01.vue')
    }
  ],
})

export default router
