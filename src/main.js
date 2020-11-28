// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

//全局组件
import topsearch from './components/topsearch/topsearch.vue';
import combotttom from './components/commonbottom/commonbottom.vue';
import comtitle from './components/commontitle/commontitle.vue';
import navigation from './components/navigation/navigation.vue'
Vue.component('v-topsearch', topsearch)
Vue.component('v-combotttom', combotttom)
Vue.component('v-comtitle', comtitle)
Vue.component('v-navigation', navigation)

// vuex
import store from "./store/store"

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios 请求封装
import api from './util/api'
Vue.prototype.$api = api


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
