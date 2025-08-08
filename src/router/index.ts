import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/Registration.vue'),
    },
    {
      path: '/course-info',
      name: 'course-info',
      component: () => import('@/views/CourseInfo.vue'),
    },
  ],
})

export default router
