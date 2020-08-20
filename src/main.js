// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import '../static/css/reset.css'
import '../static/boot/css/bootstrap.css'
import '../static/boot/js/bootstrap.js'
// 引入animate
import animate from 'animate.css'

//引入swiper
import vueSwiper from 'vue-awesome-swiper'
import '../static/js/swiper.min.js'
Vue.use(vueSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
