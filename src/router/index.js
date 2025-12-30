import { createRouter, createWebHistory } from 'vue-router'
import { globalState } from '@/globalState'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map(item => {
      const firstChar = item.charAt(0).toUpperCase();
      const otherChars = item.slice(1);
      const filePath = `../views${item.startsWith('mission') ? '/mission' : ''}/${firstChar + otherChars}.vue`;
      console.log(filePath);
      return {
        path: `/${item}`,
        component: () => import(filePath)
      }
    })

    // [ {
    //   path: '/component',
    //   component: () => import('../views/Component.vue')
    // },
    // {
    //   path: '/page98',
    //   component: () => import('@/views/Page98.vue')
    // },
    // {
    //   path: '/page103',
    //   component: () => import('@/views/Page103.vue')
    // },
    // {
    //   path: '/page108',
    //   component: () => import('@/views/Page108.vue')
    // },
    // {
    //   path: '/page110',
    //   component: () => import('@/views/Page110.vue')
    // },
    // {
    //   path: '/page114',
    //   component: () => import('@/views/Page114.vue')
    // },
    // {
    //   path: '/page118',
    //   component: () => import('@/views/Page118.vue')
    // },
    // {
    //   path: '/page123',
    //   component: () => import('@/views/Page123.vue')
    // },
    // {
    //   path: '/page125',
    //   component: () => import('@/views/Page125.vue')
    // },
    // {
    //   path: '/page126',
    //   component: () => import('@/views/Page126.vue')
    // },
    // {
    //   path: '/mission01',
    //   component: () => import('../views/mission/Mission01.vue')
    // }
  //]
  
});



export default router
