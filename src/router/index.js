import { createRouter, createWebHistory } from 'vue-router';
import PageLandingView from '@/views/PageLandingView.vue';
import PageHomeView from '@/views/mainViews/PageHomeView.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: PageLandingView
  },
  {
    path: '/home',
    name: 'home',
    component: PageHomeView,
    meta: { requiresAuth: true } // Add meta field to require auth
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
    meta: { requiresAuth: true }, // Add meta field to require auth
    children: [
      { path: '', name: 'featuredView', component: () => import('../views/userViews/PageUserFeaturedView.vue') },
      { path: '/discography', component: () => import('../views/userViews/PageUserDiscographyView.vue') },
    ],
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/userViews/PageChatView.vue'),
    meta: { requiresAuth: true } // Add meta field to require auth
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/userViews/PageDashboardView.vue'),
    meta: { requiresAuth: true } // Add meta field to require auth
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

function isAuthenticated() {
  return !!localStorage.getItem('token');
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'auth' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
