import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import data from './data.js'
// import axios from 'axios'
import store from '../store'
import VueAxios from 'vue-axios'
import qs from 'qs'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.use(VueRouter,VueAxios,axios)
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

axios.defaults.baseURL = '/aa' // 'http://localhost:8360'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: data
    }
  ]
})

// export default {router, store,axios}
export default router
