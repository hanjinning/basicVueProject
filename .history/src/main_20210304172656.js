import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(VueAxios, axios)
Vue.prototype.$qs = qs;
Vue.config.productionTip = false

// Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
