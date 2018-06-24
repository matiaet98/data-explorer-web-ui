import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Explorador from '@/views/Explorador.vue';
import Hipotesis from '@/views/Hipotesis.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/explorador',
      name: 'explorador',
      component: Explorador,
    },
    {
      path: '/hipotesis',
      name: 'hipotesis',
      component: Hipotesis,
    },
  ],
})