import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'virtual:uno.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
