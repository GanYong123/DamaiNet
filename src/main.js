// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由
import store from './store/store' // 引入Vuex
import axios from 'axios' // 引入axios
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI的CSS
import VueLazyload from 'vue-lazyload' // 引入Vue的懒加载
/* 安装了better-scroll，需在单独文件下引用，具体使用方法参见官网 */
/* 安装了tween.js，需在单独文件下引用，具体使用方法参见https://blog.csdn.net/w405722907/article/details/78134223 */
Vue.use(ElementUI)
Vue.use(VueLazyload)
Vue.prototype.$http = axios // 挂载到Vue原型上
Vue.prototype.$url = 'https://www.easy-mock.com/mock/5c42c815fa4bae6ac3633357/DamaiNet/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App) // ElementUI注册
})
