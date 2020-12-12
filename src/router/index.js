import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index' //主页 index @ 代表src 目录
import login from '@/page/login/login'
import copyrightChanges from '@/page/copyrightChanges/copyrightChanges'
import tradingCenter from '@/page/tradingCenter/tradingCenter'
import service from '@/page/service/service'
import service_zzdj from '@/page/service_zzdj/service_zzdj'
import service_zlsq from '@/page/service_zlsq/service_zlsq'
import service_xlj from '@/page/service_xlj/service_xlj'
import service_pct from '@/page/service_pct/service_pct'
import copyright from '@/page/paycenter/copyright'
import patent from '@/page/paycenter/patent'
import trademark from '@/page/paycenter/trademark'//商标转让
import knowledgepledge from '@/page/knowledgepledge/knowledgepledge' //知识质押
import knowledgefunds from '@/page/knowledgefunds/knowledgefunds' //知识基金
import servecenter from '@/page/servecenter/servecenter' //服务中心
import usercenter from '@/page/usercenter/usercenter' //个人中心
import userindex from '@/page/usercenter/index' //个人中心主页
import userbuy from '@/page/usercenter/buyperson' //个人我是买家
import test from '@/page/test/test' //测试页面
import activity from '@/page/activity/activity' //测试页面
import about from '@/page/about/about' //关于我们
import navcter from '@/components/navcter/navcter' //关于我们
import navctertw from '@/components/navcter/navctertw' //关于我们
import transfer from '@/page/transfer/transfer'
import technology from '@/page/technology/technology' //技术转移

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
        {  //活动专区
            path: '/activity',
            name: 'activity',
            component: activity
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
            path: '/tradingCenter',
            name: 'tradingcenter',
            component: tradingCenter
        },
        {
            path: '/copyright', //版权转让
            name: 'copyright',
            component: copyright
        },
        {
            path: '/patents', //专利转让
            name: 'patent',
            component: patent
        },
        {
            path: '/trademarks', //商标转让
            name: 'trademark',
            component: trademark
        },
        {
            path: '/serve',//其他服务
            name: 'service',
            component: service
        },
        {
               path: '/copyrightregister',//著作登记
               name: 'service_zzdj',
               component: service_zzdj
        },
        {
               path: '/trademark',//专利申请
               name: 'service_zlsq',
               component: service_zlsq
        },
        {
               path: '/patent',         //下料机
               name: 'service_xlj',
               component: service_xlj
        },
        {
               path: '/consultant ',    //涉外
               name: 'service_pct',
               component: service_pct
        },
        {
            path: '/financing',//产权质押
            name: 'knowledgepledge',
            component: knowledgepledge
        },
        {
            path: '/property', //产权基金
            name: 'knowledgefunds',
            component: knowledgefunds
        },
        {
            path: '/usercenter',
            name: 'usercenter',
            component: usercenter,
            children: [{
                path: '/',
                component: userindex,
            }, {
                path: '/usercenter/userbuy',
                component: userbuy,
            }]
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
                path: '/servicecenter', //服务中心
                name: 'servecenter',
                component: servecenter
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            children: [{
                path: '/',
                component: navcter,
            }, {
                path: '/about/navctertw',
                component: navctertw,
            }]
        },
        {
            path: '/transfer',
            name: 'transfer',
            component: transfer
        },
        {
            path: '/technology',
            name: 'technology',
            component: technology
        },
    ]
})
