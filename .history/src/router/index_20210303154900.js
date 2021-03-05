import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import data from './data.js'

Vue.use(VueRouter)

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
