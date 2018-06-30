
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import api from '@/assets/api/apiPort'
import http from './http'

Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$axios = http;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
