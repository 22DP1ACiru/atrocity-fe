import { createRouter, createWebHistory } from 'vue-router'
import PageLandingView from '@/views/PageLandingView.vue'
import PageHomeView from '@/views/mainViews/PageHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: PageLandingView
    },
    {
      path: '/home',
      name: 'home',
      component: PageHomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/PageAuthView.vue')
    },
    {
      path: '/user/:username',
      name: 'user',
      component: () => import('../views/userViews/PageUserView.vue'),
      children: [
        { path: '', name: 'featuredView', component: () => import('../views/userViews/PageUserFeaturedView.vue') },
        { path: '/discography', component: () => import('../views/userViews/PageUserDiscographyView.vue') },
      ],
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/userViews/PageChatView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/userViews/PageDashboardView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
