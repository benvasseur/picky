import Vue from 'vue';
import VueRouter from 'vue-router';
import Discussion from '../views/Discussion.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Discussion',
    component: Discussion,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
