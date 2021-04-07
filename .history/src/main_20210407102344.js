import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);
require('es6-promise').polyfill();

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')