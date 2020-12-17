import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index' //主页 index @ 代表src 目录
import login from '@/page/login/login'
import copyrightChanges from '@/page/copyrightChanges/copyrightChanges'
import tradingCenter from '@/page/tradingCenter/tradingCenter'
import service from '@/page/service/service'
import service_ptsb from '@/page/service_ptsb/service_ptsb'
import service_zzdj from '@/page/service_zzdj/service_zzdj'
import service_zlsq from '@/page/service_zlsq/service_zlsq'
import service_xlj from '@/page/service_xlj/service_xlj'
import service_xlj_two from '@/page/service_xlj/service_xlj_two'
import service_xlj_three from '@/page/service_xlj/service_xlj_three'
import service_pct from '@/page/service_pct/service_pct'
import copyright from '@/page/paycenter/copyright'
import patent from '@/page/paycenter/patent'
import trademark from '@/page/paycenter/trademark' //商标转让
import knowledgepledge from '@/page/knowledgepledge/knowledgepledge' //知识质押
import knowledgefunds from '@/page/knowledgefunds/knowledgefunds' //知识基金
import servecenter from '@/page/servecenter/servecenter' //服务中心
import usercenter from '@/page/usercenter/usercenter' //个人中心
import userindex from '@/page/usercenter/index' //个人中心主页
import userbuy from '@/page/usercenter/buyperson' //个人我是买家
import usershop from '@/page/usercenter/shopperson' //个人我是卖家
import usermanage from '@/page/usercenter/zjmanage' //个人资金管理
import usertel from '@/page/usercenter/tel' //个人资金管理
import userid from '@/page/usercenter/id' //个人账号设置
import usermessage from '@/page/usercenter/message' //个人全部信息
import usercontract from '@/page/usercenter/contract' //个人我的合同
import test from '@/page/test/test' //测试页面
import activity from '@/page/activity/activity' //测试页面
import about from '@/page/about/about' //关于我们
import navcter from '@/components/navcter/navcter' //关于我们
import transfer from '@/page/transfer/transfer'
import technology from '@/page/technology/technology' //技术转移
import yuan from '@/page/yuan/yuan' //技术转移

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
            path: '/yuan',
            name: 'yuan',
            component: yuan
        },
        { //活动专区
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
            path: '/serve', //其他服务
            name: 'service',
            component: service
        },
        {
            path: '/isserve', //普通商标
            name: 'service_ptsb',
            component: service_ptsb
        },
        {
            path: '/copyrightregister', //著作登记
            name: 'service_zzdj',
            component: service_zzdj
        },
        {
            path: '/patent', //专利申请
            name: 'service_zlsq',
            component: service_zlsq
        },
        {
            path: '/service_xlj', //下料机
            name: 'service_xlj',
            component: service_xlj
        },
        {
            path: '/service_xlj_two', //下料机
            name: 'service_xlj_two',
            component: service_xlj_two
        },
        {
            path: '/service_xlj_three', //下料机
            name: 'service_xlj_three',
            component: service_xlj_three
        },
        {
            path: '/consultant', //涉外
            name: 'service_pct',
            component: service_pct
        },
        {
            path: '/financing', //产权质押
            name: 'knowledgepledge',
            component: knowledgepledge
        },
        {
            path: '/property', //产权基金
            name: 'knowledgefunds',
            component: knowledgefunds
        },
        {
            path: '/usercenter', //个人中心
            name: 'usercenter',
            component: usercenter,
            children: [{
                path: '/',
                component: userindex,
            }, {
                path: '/usercenter/userbuy',
                component: userbuy,
            }, {
                path: '/usercenter/usershop',
                component: usershop,
            }, {
                path: '/usercenter/usermanage',
                component: usermanage,
            }, {
                path: '/usercenter/usertel',
                component: usertel,
            }, {
                path: '/usercenter/userid',
                component: userid,
            }, {
                path: '/usercenter/usermessage',
                component: usermessage,
            }, {
                path: '/usercenter/usercontract',
                component: usercontract,
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
            path: '/aboutus',
            name: 'about',
            component: about,
            children: [{
                path: '/aboutus',
                component: navcter,
            }]
        },
        {
            path: '/technology', //技术转让筛选
            name: 'transfer',
            component: transfer
        },
        {
            path: '/name',
            name: 'technology',
            component: technology
        },
    ]
})