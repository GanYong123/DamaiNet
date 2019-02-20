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
import Register from '@/components/wangchuang/Register'
import Person from '@/components/wangchuang/Person'
import Inform from '@/components/wangchuang/Inform'
import Psona from '@/components/wangchuang/Psona'
import DetailsOrderSure from '../components/shikangkang/DetailsOrderSure'
import OrderPayQRpay from '../components/shikangkang/OrderPayQRpay'
import OrderSureOrderPay from '../components/shikangkang/OrderSureOrderPay'
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
      // 注册页
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      // 订单页
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      // 购票页
      path: '/inform',
      name: 'Inform',
      component: Inform
    },
    {
      // 个人详情
      path: '/psona',
      name: 'Psona',
      component: Psona
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
    },
    {
      path: '/choose-seat',
      component: DetailsOrderSure
    },
    {
      path: '/payment',
      component: OrderSureOrderPay
    },
    {
      path: '/wechat',
      component: OrderPayQRpay
    }
  ]
})
