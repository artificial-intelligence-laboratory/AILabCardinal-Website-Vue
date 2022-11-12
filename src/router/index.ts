import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/Home/components/HomePage.vue'
import SitesPageVue from '@/features/Sites/components/SitesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/sites',
      component: SitesPageVue,
      meta: {
        title: '导航',
        subTitle: 'site navigation'
      }
    }
  ]
})

export default router
