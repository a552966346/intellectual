import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index' //主页 index @ 代表src 目录
import login from '@/page/login/login'
import copyrightChanges from '@/page/copyrightChanges/copyrightChanges'
import service from '@/page/service/service'
import copyright from '@/page/paycenter/copyright'
import knowledgepledge from '@/page/knowledgepledge/knowledgepledge'
import servecenter from '@/page/servecenter/servecenter' //服务中心
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
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/copyrightChanges',
            name: 'copyrightChanges',
            component: copyrightChanges
        },
        {
            path: '/paycenter/copyright',
            name: 'copyright',
            component: copyright
        },
        {
            path: '/service',
            name: 'service',
            component: service
        },
        {
            path: '/knowledgepledge',
            name: 'knowledgepledge',
            component: knowledgepledge
        },
        {
            path: '/servecenter',
            name: 'servecenter',
            component: servecenter
        }
    ]
})