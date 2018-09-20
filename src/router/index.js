import Vue from 'vue';
import Router from 'vue-router';
import Films from '../components/Films.vue';
import Characters from '../components/Characters.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Films',
      component: Films
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    }
  ]
});
