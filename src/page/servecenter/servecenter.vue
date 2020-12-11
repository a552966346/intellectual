<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div id="servecneter">
                        <!-- 服务中心头部导航 -->
                        <div class="servecenter_top" style="background-image: url(../../../static/img/service/servecenter_banner.png);">
                                <div class="servecenter_top_cen">

                                        <div class="top_cen_left">
                                                <div class="top_cen_left_lei" v-for="(item, index) in top_lei" :key="index"@mouseover="activeover(index)" @mouseleave = "activeleave" :class="{left_lei_bj:isactive==index}">
                                                        <img :src="item.img" alt="" v-show="isactive != index">
                                                        <img :src="item.imgs" alt="" v-show="isactive == index">
                                                        <p>{{item.name}}</p>
                                                </div>
                                        </div>
                                        <div class="top_cen_right_box">
                                                <div v-for="(item, index) in top_lei" v-show="isactive == index&&item.arr!=''">
                                                        <div v-for="(isitem,index) in item.arr">
                                                                <p><img src="" alt=""><span>{{isitem.name}}</span></p>
                                                                <span v-for="toitem in isitem.xiaomu">{{toitem}}</span>
                                                        </div>
                                                </div>

                                        </div>
                                        <div class="top_cen_cen">
                                                <div class="top_cen_cen_text">
                                                        <h1>专利服务,保护创新</h1>
                                                        <p>激发创造力，保护知识产权权益</p>
                                                        <button>了解详情</button>
                                                </div>
                                                <div class="top_cen_cen_btm">
                                                        <div class="btm_xiang" v-for="(item,index) in btm_xiang" :style="{'background-image':'url('+item.img+')'}"
                                                                :key="index" @mouseover="btnover(index)" @mouseleave = "btnleave" :class="{btm_xiang_two:isbtn==index}">
                                                                <p v-show="!(isbtn==index)">{{item.name}}</p>
                                                                <p v-show="!(isbtn==index)">{{item.nub}}类</p>
                                                                <span  v-show="isbtn==index">30类</span>
                                                                <div  v-show="isbtn==index">
                                                                        <p>优质品牌，祝您前行</p>
                                                                        <img src="../../../static/img/common/Learn_about_Eden.png"
                                                                                alt="">
                                                                        <div>立即抢购 <i class="el-icon-caret-right"></i>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </div>
                                        </div>
                                        <div class="top_cen_right">
                                                <div class="top_cen_right_ban">
                                                        <img src="../../../static/img/service/servecneter_rig_banner.png"
                                                                alt="">
                                                </div>
                                                <div class="top_cen_right_cen">
                                                        <div class="inp"><img src="../../../static/img/service/servecenter_hy.png" alt=""><input type="text"
                                                                        placeholder="请填写您的行业"></div>
                                                        <div class="inp"><img src="../../../static/img/service/servecenter_ys.png" alt=""><input type="text"
                                                                        placeholder="请选择您的预算区间"></div>
                                                        <div class="inp"><img src="../../../static/img/service/servecenter_sj.png" alt=""><input type="text"
                                                                        placeholder="请输入您的手机号"></div>
                                                        <button>马上获取商标信息</button>
                                                </div>
                                                <div class="top_cen_right_cen_up">
                                                        <div>
                                                                <h3>13512059</h3>
                                                                <p>今日交易指数</p>
                                                        </div>
                                                </div>
                                                <div class="top_cen_right_cen_bottom">
                                                        <img src="" alt="">
                                                        <div>
                                                                <p>你好欢迎来到一点网</p>
                                                                <p>151****3585</p>
                                                                <button>退出登录</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <!-- 热门服务 -->
                        <div class="servecenter_center_o">
                                <div class="servecenter_center_o_top">
                                        <p><img src="../../../static/img/service/servecenter_center_o.png" alt=""><span>热门服务</span></p>
                                </div>
                                <div class="servecenter_center_o_cen">
                                        <div class="o_cen_lie" v-for="(item,index) in o_cen_lie" :key="index">
                                                <div class="o_cen_lie_bg" :style="{'background-image':'url('+item.bgimg+')'}" style="background-repeat: no-repeat;">
                                                        <p>{{item.name}}</p>
                                                        <p>专业一对一服务</p>
                                                </div>
                                                <div class="o_cen_lie_img">
                                                        <p>{{item.money}}元起</p>
                                                        <img :src="item.img" alt="">
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <!-- 商标服务 -->
                        <div class="fuwu">
                                <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :background_img_url='title_bg_url[0]'></v-comtitle>
                        </div>
                        <div class="servecenter_center_sb">
                                <div class="servecenter_center_sb_left">
                                        <p>普通商标服务</p>
                                        <p>注册商标让您跟放心!</p>
                                        <p>3500.00&nbsp;&nbsp;元起</p>
                                        <p><button>立即办理</button><button>查看详情</button></p>
                                </div>
                                <div class="servecenter_center_sb_right">
                                        <div class="sb_right_lie" v-for="(item,index) in sb_right_lie" :key="index">
                                                <p>{{item.name}}</p>
                                                <p>(<span>{{item.text}}</span>)</p>
                                                <p><span>{{item.money}}元起</span><img :src="item.img" alt=""></p>
                                        </div>
                                </div>
                        </div>
                        <!-- 广告 -->
                        <div class="guanggao">
                                <img src="../../../static/img/service/servecenter_center_guanggao.png" alt="">
                        </div>
                        <!-- 专利服务 -->
                        <div class="fuwu">
                                <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :background_img_url='title_bg_url[1]'></v-comtitle>
                        </div>
                        <div class="servecenter_center_zl">
                                <div class="servecenter_center_zli_left">
                                        <p>pct国际专利申请</p>
                                        <p>美术、音乐、文字、摄影</p>
                                        <p>548.00&nbsp;&nbsp;元起</p>
                                        <p><button>联系客服</button><button>查看详情</button></p>
                                </div>
                                <div class="servecenter_center_zl_right">
                                        <div class="zl_right_lie" v-for="(item,index) in zl_right_lie" :key="index">
                                                <img :src="item.img" alt="">
                                                <div>
                                                <span>{{item.name}}</span>
                                                <span>({{item.text}})</span>
                                                </div>
                                                <p><span>{{item.money}}元起</span></p>
                                                <button>查看详情</button>
                                        </div>
                                </div>
                        </div>
                        <!-- 版权服务 -->
                        <div class="servecenter_center_fu">
                                <div class="fuwu">
                                        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :background_img_url='title_bg_url[2]'
                                                :color='title_color'></v-comtitle>
                                </div>
                                <div class="servecenter_center_fu_cen">
                                        <div class="fu_cen_left">
                                                <div>
                                                        <p>版权变更</p>
                                                        <p>美术、音乐、文字、摄影</p>
                                                        <p>548.00&nbsp;&nbsp;元起</p>
                                                </div>
                                                <p><button>联系客服</button><button>查看详情</button></p>
                                        </div>
                                        <div class="fu_cen_right_lie" v-for='(item,index) in fu_cen_right_lie' :key="index"  @mouseover="mouseOver(index)"
      @mouseleave="mouseLeave">
                                                <img :src="item.img" alt="" :class="{active_o:active==index}">
                                                <div class="right_lie_cent"  :class="{active_t:active==index}">
                                                        <p><img :src="item.imgage" alt="" v-show="!(index == active)"><img :src="item.imgage2" v-show="index == active"><span>{{item.name}}</span></p>
                                                        <p>{{item.text}}</p>
                                                        <p>{{item.money}}元</p>
                                                        <p v-show="active==index"><button>立即办理</button></p>
                                                </div>

                                        </div>
                                </div>
                        </div>
                        <!-- 企业服务 -->
                        <div class="fuwu">
                                <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :background_img_url='title_bg_url[3]'></v-comtitle>
                        </div>
                        <div class="servecenter_center_qy">
                                <div class="servecenter_center_qy_left">
                                        <div>
                                                <button>立即咨询&nbsp;&nbsp;></button>
                                        </div>
                                </div>
                                <div class="servecenter_center_qy_right">
                                        <div class="qy_right_lie" v-for="(item,index) in qy_right_lie" :key="index">
                                                <img :src="item.img" alt="">
                                                <div>
                                                        <img :src="item.image" alt="">
                                                        <p>{{item.name}}</p>
                                                        <p>{{item.text}}</p>
                                                        <button>查看详情</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                              active:'false',
                              isactive:'',
                              isbtn:'',
                                title_color: '#fff',
                                title_all: ["商标服务", '专利服务', '版权服务', '企业服务'],
                                title_text_all: ['交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                ],
                                title_bg_url: ['../../../static/img/common/Trading_Center.png',
                                        '../../../static/img/common/bg_text.png',
                                        '../../../static/img/common/flea_market.png',
                                        '../../../static/img/common/News_Center.png',
                                ],
                                top_lei: [{
                                        name: '商标服务',
                                        img: '../../../static/img/service/servecenter_m1.png',
                                        imgs:'../../../static/img/service/servecenter_m1_h.png',
                                        arr:[{
                                                img:'../../../static/img/service/servecenter_m1.png',
                                                name:'03类-日化用品',
                                                xiaomu:['化妆品','香水','洗面奶']
                                        },
                                        {
                                                img:'../../../static/img/service/servecenter_m1.png',
                                                name:'05类-日化用品',
                                                xiaomu:['化妆品','香水','洗面奶']
                                        },
                                        {
                                                img:'../../../static/img/service/servecenter_m1.png',
                                                name:'07类-日化用品',
                                                xiaomu:['化妆品','香水','洗面奶']
                                        }]
                                }, {
                                        name: '专利服务',
                                        img: '../../../static/img/service/servecenter_m3.png',
                                        imgs:'../../../static/img/service/servecenter_m3_h.png',
                                       arr:[{
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'03类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'05类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       }, {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },

                                       ],

                                }, {
                                        name: '版权服务',
                                        img: '../../../static/img/service/servecenter_m4.png',
                                        imgs:'../../../static/img/service/servecenter_m4_h.png',
                                       arr:[{
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'03类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'05类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       }]
                                }, {
                                        name: '企业服务',
                                        img: '../../../static/img/service/servecenter_m5.png',
                                        imgs:'../../../static/img/service/servecenter_m5_h.png',
                                       arr:[{
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'03类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'05类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       },
                                       {
                                               img:'../../../static/img/service/servecenter_m1.png',
                                               name:'07类-日化用品',
                                               xiaomu:['化妆品','香水','洗面奶']
                                       }]
                                }, {
                                        name: '联系客服',
                                        img: '../../../static/img/service/servecenter_m6.png',
                                        imgs:'../../../static/img/service/servecenter_m6_h.png',
                                        arr:''
                                }, ],
                                btm_xiang: [{
                                        name: '服装鞋帽',
                                        nub: '20',
                                        img: '../../../static/img/service/servecenter_s1.png'
                                }, {
                                        name: '服装鞋帽',
                                        nub: '20',
                                        img: '../../../static/img/service/servecenter_s2.png'
                                }, {
                                        name: '服装鞋帽',
                                        nub: '20',
                                       img: '../../../static/img/service/servecenter_s3.png'
                                }, {
                                        name: '服装鞋帽',
                                        nub: '20',
                                       img: '../../../static/img/service/servecenter_s4.png'
                                },
                                {
                                        name: '服装鞋帽',
                                        nub: '20',
                                      img: '../../../static/img/service/servecenter_s5.png',
                                }],
                                o_cen_lie: [{
                                                name: "商标注册",
                                                money: '390',
                                                bgimg: '',
                                                img: '../../../static/img/service/servecenter_center_o_zhuce.png'
                                        },
                                        {
                                                name: "商标申请",
                                                money: '390',
                                                bgimg: '',
                                                img: '../../../static/img/service/servecenter_center_o_shenqin.png'
                                        },
                                        {
                                                name: "软件著作登记",
                                                money: '390',
                                                bgimg: '',
                                                img: '../../../static/img/service/servecenter_center_o_denji.png'
                                        },
                                        {
                                                name: "美术作品",
                                                money: '390',
                                                bgimg: '',
                                                img: '../../../static/img/service/servecenter_center_o_meishu.png'
                                        },
                                        {
                                                name: "国际商标注册",
                                                money: '390',
                                                bgimg: '',
                                                img: '../../../static/img/service/servecenter_center_o_guoqi.png'
                                        },
                                ],
                                sb_right_lie: [{
                                                name: '商标转让',
                                                text: '商标权属发生改变，依据商标法应该怎么怎么样字',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_zr.png'
                                        },
                                        {
                                                name: '商标许可备案',
                                                text: '授权他人使用商标，双方放心无忧',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_xk.png'
                                        },
                                        {
                                                name: '商标变更',
                                                text: '及时变更，避免麻烦，办理进度随时查询',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_bg.png'
                                        },
                                        {
                                                name: '商标续展',
                                                text: '延长商标专用权10年，十年无忧',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_xz.png'
                                        },
                                        {
                                                name: '商标宽展',
                                                text: '6个月宽展期限内申请给予商标挽回机会',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_kz.png'
                                        },
                                        {
                                                name: '商标更正',
                                                text: '注册商标，无需东奔西跑',
                                                money: '998',
                                                img: '../../../static/img/service/servecenter_center_sb_right_gz.png'
                                        }
                                ],
                                zl_right_lie:[
                                        {
                                                name: '发明专利',
                                                text: '美术、音乐、文字、摄影',
                                                money: '548.00',
                                                img: '../../../static/img/service/zl_right_lie_o.png'
                                        },
                                        {
                                                name: '商标更正',
                                                text: '美术、音乐、文字、摄影',
                                                money: '548.00',
                                                img: '../../../static/img/service/zl_right_lie_t.png'
                                        },
                                        {
                                                name: '商标更正',
                                                text: '美术、音乐、文字、摄影',
                                                money: '548.00',
                                                img: '../../../static/img/service/zl_right_lie_th.png'
                                        }

                                ],
                                fu_cen_right_lie:[
                                        {
                                                 img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1693269874,3310255267&fm=26&gp=0.jpg',
                                                name:'版权转让',
                                                imgage:'../../../static/img/service/fu_cen_right_lie_zr.png',
                                                 imgage2:'../../../static/img/service/fu_cen_right_lie_zr2.png',
                                                text:'美术、音乐、文字、摄影',
                                                money:'500'
                                        },
                                        {
                                                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1203655481,1399486825&fm=11&gp=0.jpg',
                                                name:'美术作品登记',
                                                text:'美术、音乐、文字、摄影',
                                                 imgage:'../../../static/img/service/fu_cen_right_lie_ms.png',
                                                 imgage2:'../../../static/img/service/fu_cen_right_lie_ms2.png',
                                                money:'800'
                                        },
                                        {
                                                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2683462839,3451524961&fm=11&gp=0.jpg',
                                                name:'软件著作权登记',
                                                 imgage:'../../../static/img/service/fu_cen_right_lie_zz.png',
                                                 imgage2:'../../../static/img/service/fu_cen_right_lie_zz2.png',
                                                text:'美术、音乐、文字、摄影',
                                                money:'1300'
                                        },
                                        {
                                                img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4110745703,2224864443&fm=11&gp=0.jpg',
                                                name:'文学作品登记',
                                                 imgage:'../../../static/img/service/fu_cen_right_lie_wx.png',
                                                  imgage2:'../../../static/img/service/fu_cen_right_lie_wx2.png',
                                                text:'美术、音乐、文字、摄影',
                                                money:'450'
                                        }
                                ],
                                qy_right_lie:[{
                                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2524823912,704115595&fm=11&gp=0.jpg',
                                        image:'',
                                        name:'知识产权贯标',
                                        text:'享受政府资助最高30万'
                                },
                                {
                                        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700528122,3882719102&fm=11&gp=0.jpg',
                                        image:'',
                                        name:'国家高新企业认定',
                                        text:'奖励最高200万          减免40%所得税'
                                },
                                {
                                        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2645957631,679772170&fm=26&gp=0.jpg',
                                        image:'',
                                        name:'高新技术产品认定套餐',
                                        text:'享受政府资助最高30万'
                                }
                                ]
                        }
                },
                methods:{
                        activeover(index){
                                this.isactive = index
                        },
                        activeleave(e){
                        },
                        btnover(e){
                                this.isbtn = e
                        },
                        btnleave(e){
                                this.isbtn
                        },
                        mouseOver(e){
                                console.log(1111)
                                this.active= e

                        },
                        mouseLeave(e){
                            this.active = 'false'

                        }

                }
        }
</script>
<style>
        * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }

        #servecneter {
                width: 100%;
                display: flex;
                flex-direction: column;
                background-color: #EEF2F3;
                align-items: center;
        }

        .servecenter_top {
                width: 100%;
                flex: 3;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                justify-content: center;
        }

        .servecenter_top_cen {
                width: 1200px;
                display: flex;
                justify-content: space-between;
        }

        .top_cen_left {
                flex: 1.5;
        }

        .top_cen_left_lei {
                padding: 25px 15px;
                background-color: #1C202C;
                color: #fff;
                text-align: center;
                border-bottom: 1px solid #777;
                font-size: 15px;
                font-weight: bold;
        }
        .left_lei_bj{
                background-color:#fff;
                color:#409EFF;
        }
        .top_cen_left_lei>img {
                /* height: 30px; */
                width: 25px;
        }
        .top_cen_right_box{
                flex: 2.2;
        }
        .top_cen_right_box>div{
                list-style: none;
                background-color: #fff;
                padding: 5px ;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                /* display: none; */
        }
         .top_cen_right_box>div>div:last-child{
                 border: none;
         }
        .top_cen_right_box>div>div{
                text-align: center;
                /* height: 12.5%; */
                padding: 10px;
                border-bottom: 1px solid #ccc;
        }
        .top_cen_right_box>div>div>p{
                color: #666;
                padding-bottom: 5px;
                display: flex;
                align-items: center;
        }
        .top_cen_right_box>div>div>p>img{
                width: 10px;
                margin-right: 5px;
        }
        .top_cen_right_box>div>div>span{
                color: #ccc;
                padding-right: 5px ;
        }
        .top_cen_right_box>div>div>span:hover{
                color: #409EFF !important;

        }
        .top_cen_cen {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: column;
                flex: 9;
        }
        .top_cen_cen_text{
                height: 77%;
                width: 100%;
                display: flex;
                padding: 40px  20px 0  20px;
                /* align-items: center; */
                justify-content: center;
                flex-direction: column;
                align-items: flex-start;
                color: #fff;
        }
        .top_cen_cen_text>h1{
                font-weight: 500;
        }
        .top_cen_cen_text>p{
                padding: 10px 0;
        }
         .top_cen_cen_text>button{
                 margin-top: 20px;
                 border: 1px solid #fff;
                 background-color: rgb(0,0,0,0);
                 color: #fff;
                 padding: 5px 15px;
         }
        .top_cen_cen_btm {
                display: flex;
                width: 96%;
                height: 23%;
                cursor: pointer;
                background-color: #fff;
        }

        .btm_xiang {
                flex: 3;
                  background-size: auto;
                background-repeat: no-repeat;
                background-position: right bottom;
        }

        .btm_xiang>p:nth-child(1) {
                color: #A17FEF;
                padding: 5px 10px;
        }

        .btm_xiang>p:nth-child(2) {
                color: #ccc;
                padding: 0 10px;
                font-size: 14px;
        }

        .btm_xiang img {
                width: 110px;
        }

        .top_cen_cen_btm p,
        span {
                font-size: 14px;
        }



        .btm_xiang_two {
                flex: 4;
                display: flex;
                flex-direction: column;
                align-items: baseline;
        }

        .btm_xiang_two>span{
                background-color: #A17FEF;
                padding: 2px 20px 1px 5px;
                color: #fff;
                /* border-bottom-right-radius: 70%; */
                border-radius: 0 0 30px 0;
        }

        .btm_xiang_two>div {
                padding: 20px 5px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
        }

        .btm_xiang_two>div>p:nth-child(1) {
                color: #666;
                font-size: 15px;
        }

        .btm_xiang_two>div>div:nth-child(3) {
                color: #666;
                font-size: 13px;
                display: flex;
                align-items: center;
        }

        .top_cen_right {
                flex: 3;
        }

        .top_cen_right_cen {
                background-color: #fff;
                display: flex;
                flex-direction: column;
        }

        .top_cen_right_ban {
                height: 17%;
        }

        .top_cen_right_ban>img {
                width: 100%;
                height: 100%;
        }

        .top_cen_right_cen {
                height: 43%;
                flex: 1;
                padding: 20px ;
                display: flex;
                flex-direction: column;
                align-items: center;
        }

        .inp {
                background-color: #D0E6F4;
                padding: 8px;
                display: flex;
                border-radius: 5px;
                margin-bottom: 15px;
                align-items: center;
        }

        .inp>img {
                height: 15px;
                /* width: 10px; */
        }

        .inp>input {
                border: none;
                outline: none;
                background-color: #D0E6F4;
                color: #409EFF;
                margin-left: 5px;
        }

        input::-webkit-input-placeholder {
                color: #409EFF;
        }

        /* 火狐 Mozilla Firefox 4 to 18 */
        input:-moz-placeholder {
                color: #409EFF;
        }

        /* 火狐 Mozilla Firefox 19+ */
        input::-moz-placeholder {
                color: #409EFF;
        }

        /* Internet Explorer 10+ */
        input:-ms-input-placeholder {
                color: #409EFF;
        }

        .top_cen_right_cen>button {
                background-image: linear-gradient(#1B82CF, #409EFF);
                border: none;
                width: 100%;
                padding: 5px;
                color: #fff;
                border-radius: 30px;
        }
        .top_cen_right_cen_up{
                height: 20%;
                padding: 20px;
                background-color: #fff;
        }
        .top_cen_right_cen_up>div{
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        .top_cen_right_cen_up>div{

        }
        .top_cen_right_cen_bottom{
                height: 18%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #D6ECFA;
                border-radius: 0  0 5px 5px;
        }
        .top_cen_right_cen_bottom>img{
                width: 25px;
                border-radius: 50%;
        }
        .top_cen_right_cen_bottom>div{
                padding-left: 10px;
                line-height: 2;
        }
        .top_cen_right_cen_bottom>div>p:nth-child(1){
                font-size: 13px;
                color: #555;
        }
        .top_cen_right_cen_bottom>div>p:nth-child(2){
                font-size: 11px;
                color: #ccc;
        }
        .top_cen_right_cen_bottom>div>button{
                border: 1px solid #72BDE8;
                color: #72BDE8;
                font-size: 15px;
                border-radius: 15px;
                padding: 2px 10px;
                background-color: #fff;
        }
        .servecenter_center_o {
                flex: 1;
                width: 1200px;
                display: flex;
                flex-direction: column;
                background-color: #fff;
        }

        .servecenter_center_o_top {
                padding: 0 10px;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: stretch;
        }

        .servecenter_center_o_top span {
                margin-left: 5px;
        }

        .servecenter_center_o_top img {
                height: 15px;
                width: 15px;
        }

        .servecenter_center_o_top p {
                padding: 10px;
                border-bottom: 2px solid #1B82CF;
                color: #1B82CF;
                font-weight: bold;
        }

        .servecenter_center_o_cen {
                display: flex;
                padding: 20px 0px;
        }

        .o_cen_lie:last-child {
                border: none;
        }

        .o_cen_lie {
                flex: 1;
                padding: 10px 15px;
                border-right: 1px solid #ccc;
                display: flex;
                flex-direction: column;
                justify-content: baseline;
        }

        .o_cen_lie_img {
                display: flex;
                justify-content: space-between;
                flex: 1;
                align-items: center;
        }

        .o_cen_lie_bg {
                line-height: 2;
                background-size: cover;
                background-repeat: no-repeat;
        }

        .o_cen_lie_bg p:nth-child(1) {
                font-size: 18px;
                font-weight: bold;
        }

        .o_cen_lie_bg p:nth-child(2) {
                color: #ccc;
        }

        .o_cen_lie_img p {
                font-size: 18px;
                color: #FE9E3E;
                font-weight: bold;
        }

        .fuwu {
                padding: 30px 0 20px 0;
                width: 100%;
        }

        .servecenter_center_sb {
                width: 1200px;
                display: flex;
        }

        .servecenter_center_sb_left {
                background: url(../../../static/img/service/servecenter_center_sb_left.png)no-repeat 0, 0;
                flex: 1;
                padding: 150px 20px 50px 20px;
                background-size: cover;
                margin-right: 10px;

        }

        .servecenter_center_sb_right {
                flex: 3;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
        }

        .servecenter_center_sb_left>p {
                color: #fff;
                line-height: 3.5;
                letter-spacing: 2px;
        }

        .servecenter_center_sb_left>p:nth-child(1) {
                font-weight: bold;
                font-size: 18px;
        }

        .servecenter_center_sb_left>p:last-child {
                text-align: center;
        }

        .servecenter_center_sb_left>p>button {
                border: 1px solid #fff;
                padding: 10px 30px;
                border-radius: 5px;
                font-size: 15px;
        }

        .servecenter_center_sb_left>p>button:nth-child(1) {
                border: none;
                background-color: #fff;
                margin-right: 20px;
                color: #F5B83B;
        }

        .servecenter_center_sb_left>p>button:nth-child(2) {
                background-color: #F5B83B;
                color: #fff;
        }

        .sb_right_lie {
                box-shadow: 5px 5px 5px #DFE9F2;
                margin: 0 10px 10px 0;
                width: 32.1%;
                height: 48.5%;
                padding: 10px;
                background-color: #fff;
        }

        .sb_right_lie>p:nth-child(1) {
                font-size: 15px;
                font-weight: bold;
        }

        .sb_right_lie>p:nth-child(2) {
                font-size: 13px;
                color: #ccc;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
        }

        .sb_right_lie>p:nth-child(3) {
                display: flex;
                justify-content: space-between;
                color: #FD9F0F;
                font-weight: bold;
                font-size: 15px;
        }

        .sb_right_lie>p:nth-child(3)>img {
                height: 45px;
                width: 45px;
        }

        .sb_right_lie>p {
                line-height: 3;
        }

        .guanggao {
                width: 1200px;
                padding: 20px 0;
        }

        .guanggao>img {
                width: 100%;
        }
        .servecenter_center_zl{
                width: 1200px;
                display: flex;
                 padding: 20px 0;
        }
        .servecenter_center_zli_left {
                background: url(../../../static/img/service/servecenter_center_zl_left.png)no-repeat 0, 0;
                flex: 1;
                padding: 50px 25px 50px 25px;
                background-size: cover;
                margin-right: 10px;

        }

        .servecenter_center_zl_right {
                flex: 3;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

        }

        .servecenter_center_zli_left>p {
                color: #fff;
                line-height: 3.5;
                letter-spacing: 2px;
        }
        .servecenter_center_zli_left>p:nth-child(1) {
                font-weight: bold;
                font-size: 18px;
        }

        .servecenter_center_zl_left>p:last-child {
                text-align: center;
        }

        .servecenter_center_zli_left>p>button {
                border: 1px solid #fff;
                padding: 10px 30px;
                border-radius: 5px;
                font-size: 15px;
        }

        .servecenter_center_zli_left>p>button:nth-child(1) {
                border: none;
                background-color: #FF9900;
                margin-right: 20px;
                color: #fff;
        }

        .servecenter_center_zli_left>p>button:nth-child(2) {
                background-color: #4B67F6;
                color: #fff;
        }
        .servecenter_center_zl_right{
                display: flex;
                justify-content: space-between;
        }
        .zl_right_lie{
                background: url(../../../static/img/service/zl_right_lie.png)no-repeat 0,0;
                background-size: 100% 100%;
                width: 33%;

                padding: 40px;

        }
        .zl_right_lie>div{
                display: flex;
                flex-direction: column;
                padding: 30px 0;
        }
        .zl_right_lie>div:nth-child(2)>span:first-child{
                font-size: 15px;
                font-weight: bold;
        }
         .zl_right_lie>div:nth-child(2)>span:last-child{
                 font-size: 13px;
                 color: #ccc;
         }
         .zl_right_lie>p{
                  line-height: 4;
                  color:#FF9900 ;
                  font-weight: bold;
                  font-size: 17px;
         }
         .zl_right_lie>button{
                 background-color: #fff;
                 border: 1px solid #2081C2;
                 color: #2081C2;
                 padding: 5px 15px;
                 font-weight: 600;
                 border-radius: 5px;
         }
         .servecenter_center_fu{
                 background-color:#6D7896 ;
                 width: 100%;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 padding: 20px 0 50px 0;
         }
         .servecenter_center_fu_cen{
                 width: 1200px;
                 display: flex;
         }
         .fu_cen_left{
                 background: url(../../../static/img/service/fu_cen_left.png)no-repeat 0, 0;
                 flex: 7;
                 padding: 50px 25px 50px 25px;
                 background-size: 100% 100%;
                 margin-right: 10px;
                 display: flex;
                 flex-direction: column;
                 justify-content: space-between;
                 color: #fff;
         }
          .fu_cen_left>div{
                  line-height: 3;
          }
         .fu_cen_left>div>p:nth-child(1){
                 font-weight: bold;
         }
         .fu_cen_left>div>p:nth-child(2){
                 font-size: 14px;
         }
         .fu_cen_left>div>p:nth-child(3){
                 font-weight: bold;
         }
         .fu_cen_left>p:last-child>button{
                padding: 8px 30px;
                border-radius: 5px;
                outline: none;
                color: #fff;
                font-weight: bold;

         }
         .fu_cen_left>p:last-child>button:nth-child(1){
                 background-color: #FF9900;
                 border: none;
                margin-right: 20px;
         }
          .fu_cen_left>p:last-child>button:nth-child(2){
                  background-color: rgba(0,0,0,0);
                  border: 1px solid #fff;
          }
         .fu_cen_right_lie{
                 flex: 6;
                 background-color: #fff;
                 margin-right: 5px;
                 height: 325px;
         }
         .fu_cen_right_lie>img{
                 width: 100%;
                 height: 60%;
         }
        .right_lie_cent{
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 40%;
                line-height: 2;
                font-size: 14px;
        }
        .right_lie_cent>p:nth-child(1){
                font-size: 14px;
                font-weight: bold;
                display: flex;
                align-items: center;
        }
         .right_lie_cent>p:nth-child(1)>img{
                 width: 20px;
                 height: 20px;
                 margin-right: 10px;
         }
         .right_lie_cent>p:nth-child(2){
                 color: #bbb;
         }
         .right_lie_cent>p:nth-child(3){
                 color: #1366CE;
                 font-weight: bold;
         }
         .right_lie_cent>p:nth-child(4){
                 text-align: center;
         }
         .right_lie_cent>p:nth-child(4)>button{
                 width: 80%;
                 padding: 5px 0;
                border: none;
                background-color: #fff;
                color:#F38E48 ;
                border-radius: 5px;
                outline: none;
         }
        button{
                outline: none;
        }
         .active_t {
                float: bottom;
                position: relative;
                top: -37px;
                height: 50%;
                 background-color:#F38E48 ;
                 font-weight: bold;
                 color: #fff !important;
         }
         .active_t  p{
                  color: #fff !important;
         }
         .servecenter_center_qy{
                 width: 1200px;
                 display: flex;
                 height: 380px;
                 /* background-color: #fff; */
                 padding: 20px 0;
         }
         .servecenter_center_qy_left{
                 flex: 5;
                padding: 20px;
                background-color: #fff;
                 border-right: 10px solid #f5f5f5;
                 /* height: 100%; */
         }
         .servecenter_center_qy_left>div{
                 background: url(../../../static/img/service/servecenter_center_qy_left.png)no-repeat 0,0;
                 background-size: 100% 100%;
                 height: 100%;
         }
         .servecenter_center_qy_left>div>button{
                 padding: 10px 30px;
                 border: 1px solid #fff;
                 color: #fff;
                 border-radius: 5px;
                 background: rgba(0,0,0,0);
                 outline: none;
                 position: relative;
                 top: 180px;
                 left: 30px;
         }
         .servecenter_center_qy_right{
                 flex: 15;
                 background-color: #fff;
                 display: flex;
         }
         .qy_right_lie{
                 flex: 1;
                 padding: 20px;
                 border-right: 1px solid #f5f5f5;
         }
         .qy_right_lie>img{
                 width: 100%;
                 height: 35%;
         }
         .qy_right_lie>div{
                 background-color: #f5f5f5;
                 height: 65%;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 justify-content: space-around;
                 padding: 15px;
                 /* line-height: 2; */
         }
         .qy_right_lie>div>img{
                 width: 70%;
         }
         .qy_right_lie>div>p:nth-child(2){
                 font-weight: bold;
                 font-size: 18px;
                 /* padding-bottom: 10px; */
         }
          .qy_right_lie>div>p:nth-child(3){
                  font-size: 14px;
                  color: #aaa;
                /* padding-bottom: 15px; */
          }
          .qy_right_lie>div>button{
                  padding: 10px 30px;
                  border: 1px solid #1366CE;
                  color: #1366CE;
                  border-radius: 5px;
                  outline: none;
          }
</style>
