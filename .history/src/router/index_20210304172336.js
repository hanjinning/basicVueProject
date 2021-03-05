import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import data from './data.js'
import axios from 'axios'

Vue.use(VueRouter)
axios.defaults.baseURL = 'http://localhost:8360' // 'http://localhost:8360'
Vue.prototype.$ajax = axios;

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

export default router
