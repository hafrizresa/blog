import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        // {path: 'show-detail/', component: () => import('./components/showDetail.vue')}
      ],
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
    },
    {
      path: '/console',
      name: 'console',
      component: () => import('./views/console.vue'),
      children: [
        {path: '', component: () => import('./components/dashboardBody.vue')},
        {path: 'add-article', component: () => import('./components/addArticle.vue')},
        {path: 'edit-article/:value', component: () => import('./components/editArticle.vue')},
      ]
    },
    {
      path: '/show-detail/:id',
      name: 'showDetail',
      component: () => import('./views/showDetail.vue')
    }
  ],
});
