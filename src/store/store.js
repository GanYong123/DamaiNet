import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    name: '12234' //   使用Vuex时删除name即可
  }
})
export default store
