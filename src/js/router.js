import Vue from 'vue';
import Router from 'vue-router';

import Films from './components/Films/Films.vue'
// import Film from './components/Films/Films-film.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", component: Films},
    { path: "/home",  name: 'Home', component: Films},
    { 
        path: "/film",  
        name: 'film', 
        component:  () => import('./components/Films/Films-film.vue') 
    }
  ]
});