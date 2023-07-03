import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
    },
    {
      path: '/city',
      name: 'CityPage',
      component: City,
    },
  ],
})
