// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router"
import App from './App'
import * as filters from "./common/filter"

// Vue.config.productionTip = false
import 'swiper/dist/css/swiper.css';

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
