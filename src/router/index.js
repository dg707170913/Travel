import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/home/Home'
import City from '@/Pages/city/City'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }]
})
