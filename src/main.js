// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

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

//quill

import QuillEditor from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
Vue.use(QuillEditor)
// vuex
import store from "./store/store"

//VueCookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入swiper
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
// import 'swiper/dist/js/swiper.js';

// axios 请求封装
import api from './util/api'
Vue.prototype.$api = api
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
