import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/shenyintao/Home'
<<<<<<< HEAD
import Login from '@/components/wangchaung/Login'
=======
>>>>>>> db0f00d14c272cef9fc4898ecad3a1487e741f79
import Detail from '@/components/Ganyong/Detail'
import Opera from '@/components/shenyintao/Opera'
import Sports from '@/components/shenyintao/Sports'
import Classicaldance from '@/components/shenyintao/Classicaldance'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Parenting from '@/components/shenyintao/Parenting'
import Rock from '@/components/shenyintao/Rock'
=======
import Login from '@/components/wangchuang/Login'
>>>>>>> b557b8e274bbca1dc9ca8fa21cc3496e238285df
>>>>>>> db0f00d14c272cef9fc4898ecad3a1487e741f79
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
<<<<<<< HEAD
=======
    },
    {
      path: '/parenting',
      name: 'parenting',
      component: Parenting
    },
    {
      path: '/rock',
      name: 'rock',
      component: Rock
>>>>>>> db0f00d14c272cef9fc4898ecad3a1487e741f79
    }
  ]
})
