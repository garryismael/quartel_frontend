import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/auth/Login.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const requiresAuth = (to, _, next) => {
  if (store.getters['auth/authentified']) {
    next();
  } else {
    if (to.path !== '/login') {
      store.commit({
        type: 'auth/setNext',
        next: to.path,
      });
      next({ path: '/login' });
    } else {
      next({ name: 'login' });
    }
  }
};

const requiresAnon = (_, from, next) => {
  if (!store.getters['auth/authentified']) {
    next();
  } else {
    if (from && from.path) next(false);
    else next({ path: '/' });
  }
};

const routes = [
  {
    path: '/',
    component: () => import('@/views/PlateformLayout.vue'),
    beforeEnter: requiresAuth,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: "",
        redirect: "home"
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: requiresAnon,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

