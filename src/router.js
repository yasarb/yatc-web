import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store/index';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('signin');
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue'),
      meta: { hideNavigation: true },
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue'),
      meta: { hideNavigation: true },
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('./views/Notifications.vue'),
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('./views/Messages.vue'),
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
  ],
});

export default router;
