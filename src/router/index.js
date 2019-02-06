import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/shenyintao/Home'
import Login from '@/components/wangchaung/Login'
import Detail from '@/components/Ganyong/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
    }
  ]
})
