import Vue from 'vue';
import Router from 'vue-router';
import Films from '../components/Films.vue';
import Characters from '../components/Characters.vue';
import Character from '../components/Character.vue';
import Locations from '../components/Locations.vue';
import Location from '../components/Location.vue';

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
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations
    },
    {
      path: '/location/:name',
      name: 'location',
      component: Location,
      props: true
    }
  ]
});
