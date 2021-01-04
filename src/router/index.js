import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index' //主页 index @ 代表src 目录
import login from '@/page/login/login'
import works from '@/page/works/works'//作品列表
import copyrightChanges from '@/page/copyrightChanges/copyrightChanges'
import tradingCenter from '@/page/tradingCenter/tradingCenter'
import service from '@/page/service/service'
import servicelist from '@/page/servicelist/servicelist'//商标列表
import service_ptsb from '@/page/service_ptsb/service_ptsb' //普通商标注册
import service_sbbg from '@/page/service_sbbg/service_sbbg' //商标变更
import service_sbxz from '@/page/service_sbxz/service_sbxz' //商标续展
import service_sbkz from '@/page/service_sbkz/service_sbkz' //商标宽展
import service_gbzr from '@/page/service_gbzr/service_gbzr' //国标转让
import service_sbxk from '@/page/service_sbxk/service_sbxk' //商标许可备案
import service_sbgz from '@/page/service_sbgz/service_sbgz' //商标更正

import service_zzdj from '@/page/service_zzdj/service_zzdj' //软件著作登记
import service_msdj from '@/page/service_msdj/service_msdj' //美术作品登记
import service_wxdj from '@/page/service_wxdj/service_wxdj' //文学作品登记
import service_bqbg from '@/page/service_bqbg/service_bqbg' //版权变更
import service_bqzr from '@/page/service_bqzr/service_bqzr' //版权转让

import service_fmzl from '@/page/service_fmzl/service_fmzl' //发明专利
import service_syxx from '@/page/service_syxx/service_syxx' //实用新型
import service_wgsj from '@/page/service_wgsj/service_wgsj' //外观设计

import service_zlsq from '@/page/service_zlsq/service_zlsq' //专利申请
import service_gjsq from '@/page/service_gjsq/service_gjsq' //国家申请

import service_qyzs from '@/page/service_qyzs/service_qyzs' //企业知识
import service_gqrd from '@/page/service_gqrd/service_gqrd' //高企认定


import service_xlj from '@/page/service_xlj/service_xlj'
import service_xlj_two from '@/page/service_xlj/service_xlj_two'
import service_xlj_three from '@/page/service_xlj/service_xlj_three'
import service_xlj_four from '@/page/service_xlj/service_xlj_four'
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
import usermoilephone from '@/page/usercenter/mobilephone' //修改手机号
import password from '@/page/usercenter/password' //修改手机号
import usermessage from '@/page/usercenter/message' //个人全部信息
import userpersonal from '@/page/usercenter/personal' //个人信息
import userreceadd from '@/page/usercenter/receadd' //收货地址
import usermail from '@/page/usercenter/myemail' //个人邮箱
import usercontract from '@/page/usercenter/contract' //个人我的合同
import test from '@/page/test/test' //测试页面
import activity from '@/page/activity/activity' //跳蚤市场页面
import about from '@/page/about/about' //关于我们
import navcter from '@/components/navcter/navcter' //关于我们
import transfer from '@/page/transfer/transfer'
import technology from '@/page/technology/technology' //技术转移
import detils from '@/page/detils/detils' //跳蚤市场详情页面
import trys from '@/page/trys/trys' 
import paydetial from '@/page/paycenter/paydetial'//购买详情页
import shopcart from '@/page/shopcart/shopcart' //购物车
import newsint from '@/page/news/newsint' //新闻联系


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
            path: '/detils',
            name: 'detils',
            component: detils
        },
        { //跳蚤专区
            path: '/flea',
            name: 'activity',
            component: activity
        },
        
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/works',
            name: 'works',
            component: works
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
            path: '/servicelist', //服务中心列表
            name: 'servicelist',
            component: servicelist
        },
        {
            path: '/service_fmzl', //发明专利
            name: 'service_fmzl',
            component: service_fmzl
        },
        {
            path: '/service_syxx', //实用新型
            name: 'service_syxx',
            component: service_syxx
        },
        {
            path: '/service_wgsj', //外观设计
            name: 'service_wgsj',
            component: service_wgsj
        },

        {
            path: '/service_ptsb', //普通商标注册
            name: 'service_ptsb',
            component: service_ptsb
        },
        {
            path: '/service_sbbg', //商标变更
            name: 'service_sbbg',
            component: service_sbbg
        },
        {
            path: '/service_sbxz', //商标续展
            name: 'service_sbxz',
            component: service_sbxz
        },
        {
            path: '/service_sbkz', //商标宽展
            name: 'service_sbkz',
            component: service_sbkz
        },
        {
            path: '/service_gbzr', //国标转让
            name: 'service_gbzr',
            component: service_gbzr
        },
        {
            path: '/service_sbxk', //商标许可备案
            name: 'service_sbxk',
            component: service_sbxk
        },

        {
            path: '/service_sbgz', //商标更正
            name: 'service_sbgz',
            component: service_sbgz
        },
        {
            path: '/service_zzdj', //著作登记
            name: 'service_zzdj',
            component: service_zzdj
        },
        {
            path: '/service_msdj', //美术登记
            name: 'service_msdj',
            component: service_msdj
        },
        {
            path: '/service_wxdj', //文学登记
            name: 'service_wxdj',
            component: service_wxdj
        },
        {
            path: '/service_bqbg', //版权变更
            name: 'service_bqbg',
            component: service_bqbg
        },
        {
            path: '/service_bqzr', //版权转让
            name: 'service_bqzr',
            component: service_bqzr
        },
        {
            path: '/service_zlsq', //专利申请
            name: 'service_zlsq',
            component: service_zlsq
        },

        {
            path: '/service_gjsq', //国家申请
            name: 'service_gjsq',
            component: service_gjsq
        },
        {
            path: '/service_qyzs', //企业知识
            name: 'service_qyzs',
            component: service_qyzs
        },
        {
            path: '/service_gqrd', //高企认定
            name: 'service_gqrd',
            component: service_gqrd
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
            path: '/service_xlj_four', //下料机
            name: 'service_xlj_four',
            component: service_xlj_four
        },
        {
            path: '/service_pct', //涉外
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
            },{
                path: '/usercenter/usermoilephone',
                component: usermoilephone,
            },{
                path: '/usercenter/usermessage',
                component: usermessage,
            },{
                path: '/usercenter/userpersonal',
                component: userpersonal,
            },{
                path: '/usercenter/userreceadd',
                component: userreceadd,
            },{
                path: '/usercenter/usermail',
                component: usermail,
            },{
                path: '/usercenter/usercontract',
                component: usercontract,
            },
            {
                path: '/usercenter/password',
                component: password,
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
            path: '/transfer', //技术转让筛选
            name: 'transfer',
            component: transfer
        },
        {
            path: '/technology',
            name: 'technology',
            component: technology
        },
        {
            path: '/trys',
            name: 'trys',
            component: trys
        },
        {
            path: '/paydetial',
            name: 'paydetial',
            component: paydetial
        },
        {
            path:'/shopcart',
            name:'shopcart',
            component:shopcart
        },
        {
            path:'/newsint',
            name:'newsint',
            component:newsint
        }
    ]
})