import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/Home/components/HomePage.vue'
import SitesPageVue from '@/features/Sites/components/SitesPage.vue'
import MembersPage from '@/features/Members/components/MembersPage.vue'

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
    },
    {
      path: '/members',
      component: MembersPage,
      meta: {
        title: '实验室成员',
        subTitle: 'Members of the Laboratory'
      }
    }
  ]
})

export default router
