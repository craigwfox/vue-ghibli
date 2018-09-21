import Vue from 'vue';
import Router from 'vue-router';
import Films from '../components/Films.vue';
import Characters from '../components/Characters.vue';
import Character from '../components/Character.vue';

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
    },
    {
      path: '/character/:name',
      name: 'character',
      component: Character,
      props: true
    }
  ]
});
