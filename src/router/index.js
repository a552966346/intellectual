import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index' //主页 index @ 代表src 目录
import login from '@/page/login/login'
import copyrightChanges from '@/page/copyrightChanges/copyrightChanges'
import service from '@/page/service/service'
Vue.use(Router)

export default new Router({
  mode: 'history', //去掉地址栏中的#
  routes: [
    // 配置路由
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/copyrightChanges',
      name:'copyrightChanges',
      component:copyrightChanges
    },
    {
            path:'/service',
            name:'service',
            component:service
    }
  ]
})
