import Vue from 'vue';
import VueRouter from 'vue-router';

import tipCalculator from '../pages/tipCalculator.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tipCalculator',
    component: tipCalculator,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
