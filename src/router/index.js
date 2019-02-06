import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/shenyintao/Home'
import Login from '@/components/wangchaung/Login'
import Detail from '@/components/Ganyong/Detail'
import Opera from '@/components/shenyintao/Opera'
import Sports from '@/components/shenyintao/Sports'
import Classicaldance from '@/components/shenyintao/Classicaldance'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias: 'index',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/opera',
      name: 'Opera',
      component: Opera
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/classicalDance',
      name: 'Classicaldance',
      component: Classicaldance
    }
  ]
})
