import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
