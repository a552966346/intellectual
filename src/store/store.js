//引入vue以及vuex 并使用vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 公共变量
  // this.$store.state.xxx
  state: {
    count: 0
  },
  // 公共方法
  // this.$store.commint('方法名','参数')
  mutations: {
    increment (state,n) {
      console.log(state.count)// 0 
      console.log(n) // 6
      state.count+=n
      // return state.count
    },
  }
})

export default store;