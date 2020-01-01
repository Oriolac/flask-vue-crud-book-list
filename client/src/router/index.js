import Vue from 'vue';
import Router from 'vue-router';
import Ping from '../components/Ping.vue';
import Books from '../components/Books.vue';

Vue.use(Router);

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
  {
    path: '/',
    name: 'Books',
    component: Books,
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
