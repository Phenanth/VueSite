import Vue from 'vue'
import Router from 'vue-router'
import Dairy from '@/components/Dairy'
import Note from '@/components/Note'
import Essay from '@/components/Essay'
import Report from '@/components/Report'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Dairy',
      name: 'Dairy',
      component: Dairy
    }, {
      path: '/Note',
      name: 'Note',
      component: Note
    }, {
      path: '/Essay',
      name: 'Essay',
      component: Essay
    }, {
      path: '/Report',
      name: 'Report',
      component: Report
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }, {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
