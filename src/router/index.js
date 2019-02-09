import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/shenyintao/Home'
import Screen from '@/components/Ganyong/Screen'
import Detail from '@/components/Ganyong/Detail'
import Opera from '@/components/shenyintao/Opera'
import Sports from '@/components/shenyintao/Sports'
import Classicaldance from '@/components/shenyintao/Classicaldance'
import Parenting from '@/components/shenyintao/Parenting'
import Rock from '@/components/shenyintao/Rock'
import Login from '@/components/wangchuang/Login'
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
      path: '/screen', // 筛选页
      name: 'Screen',
      component: Screen
    },
    {
      path: '/detail', // 详情页
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
    }
  ]
})
