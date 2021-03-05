import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.use(VueAxios, axios)
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;
axios.defaults.baseURL = 'http://localhost:8360/'
Vue.config.productionTip = false

// Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
