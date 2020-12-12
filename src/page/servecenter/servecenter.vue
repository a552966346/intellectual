<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div id="servecneter">
                        <!-- 服务中心头部导航 -->
                        <div class="servecenter_top" style="background-image: url(../../../static/img/service/servecenter_banner.png);">
                                <div class="servecenter_top_cen">

                                        <div class="top_cen_left">
                                                <div class="top_cen_left_lei" v-for="(item, index) in top_lei" :key="item.id"

                                                        @mouseover="activeover(index)" @mouseleave="activeleave" :class="{left_lei_bj:isactive==index}">
                                                        <img :src="'http://intellectual.jzhxwl.com'+item.img[0]" alt="" v-show="isactive != index">
                                                        <img :src="'http://intellectual.jzhxwl.com'+item.img[1]" alt="" v-show="isactive == index">
                                                        <p>{{item.name}}</p>
                                                </div>
                                        </div>
                                        <!-- v-show="isactive_two==''" -->
                                        <div class="top_cen" >
                                                <div class="top_cen_right_box">
                                                        <div v-show="isactive_two == index &&item.children.length != 0" v-for="(item, index) in top_lei" :key="item.id">
                                                                <div v-for="(isitem,index) in item.children">
                                                                        <!-- <p><img src="" alt=""><span>{{isitem.name}}</span></p> -->
                                                                        <p @click="running(item.keywords,isitem.id)">{{isitem.name}}</p>
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
                                                                <div class="btm_xiang" v-for="(item,index) in btm_xiang"
                                                                        :style="{'background-image':'url('+item.img+')'}"
                                                                        :key="index" @mouseover="btnover(index)"
                                                                        @mouseleave="btnleave" :class="{btm_xiang_two:isbtn==index}">
                                                                        <p v-show="!(isbtn==index)">{{item.name}}</p>
                                                                        <p v-show="!(isbtn==index)">{{item.nub}}类</p>
                                                                        <span v-show="isbtn==index">30类</span>
                                                                        <div v-show="isbtn==index">
                                                                                <p>优质品牌，祝您前行</p>
                                                                                <p>High quality brand</p>
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
                                                                <div class="inp"><img src="../../../static/img/service/servecenter_hy.png"
                                                                                alt=""><input type="text" placeholder="请填写您的行业"></div>
                                                                <div class="inp"><img src="../../../static/img/service/servecenter_ys.png"
                                                                                alt=""><input type="text" placeholder="请选择您的预算区间"></div>
                                                                <div class="inp"><img src="../../../static/img/service/servecenter_sj.png"
                                                                                alt=""><input type="text" placeholder="请输入您的手机号"></div>
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
                                        <!-- <div class="top_cen" v-show="isactive_two==index" v-for="">
                                                <div class="top_cen_two_left">

                                                </div>
                                                <div class="top_cen_two_right">

                                                </div>
                                        </div> -->
                                </div>
                        </div>

                        <!-- 热门服务 -->
                        <div class="servecenter_center_o">
                                <div class="servecenter_center_o_top">
                                        <p><img src="../../../static/img/service/servecenter_center_o.png" alt=""><span>热门服务</span></p>
                                </div>
                                <div class="servecenter_center_o_cen">
                                        <div class="o_cen_lie" v-for="(item,index) in o_cen_lie" :key="index">
                                                <div class="o_cen_lie_bg" :style="{'background-image':'url('+item.bgimg+')'}"
                                                        style="background-repeat: no-repeat;">
                                                        <p>{{item.name}}</p>
                                                        <p>专业一对一服务</p>
                                                </div>
                                                <div class="o_cen_lie_img">
                                                        <p>{{item.fee}}元起</p>
                                                        <img :src="'http://intellectual.jzhxwl.com'+item.breviary_image" alt="">
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
                                       <p>{{sb_right_lie_o.name}}</p>
                                        <p v-html="sb_right_lie_o.content"></p>
                                        <p>{{sb_right_lie_o.fee}}&nbsp;&nbsp;元起</p>
                                        <p><button>立即办理</button><button>查看详情</button></p>
                                </div>
                                <div class="servecenter_center_sb_right">
                                        <div class="sb_right_lie" v-for="(item,index) in sb_right_lie" :key="item.id" v-if="index != 0">
                                                <p>{{item.name}}</p>
                                               <p v-html="item.content"></p>
                                                <p><span>{{item.fee}}元起</span><img :src="'http://intellectual.jzhxwl.com'+item.breviary_image" alt=""></p>
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
                                        <p>{{ zl_right_lie_o.name}}</p>
                                        <p v-html="zl_right_lie_o.content"></p>
                                        <p>{{zl_right_lie_o.fee}}&nbsp;&nbsp;元起</p>
                                        <p><button>联系客服</button><button>查看详情</button></p>
                                </div>
                                <div class="servecenter_center_zl_right">
                                        <div class="zl_right_lie" v-for="(item,index) in zl_right_lie" :key="item.id" v-if="index != 0">
                                                <img :src="'http://intellectual.jzhxwl.com'+item.breviary_image" alt="">
                                                <div>
                                                        <span>{{item.name}}</span>
                                                        <span v-html="item.content"></span>
                                                </div>
                                                <p><span>{{item.fee}}元起</span></p>
                                                <button>查看详情</button>
                                        </div>
                                </div>
                        </div>
                        <!-- 版权服务 -->
                       <div class="servecenter_center_fu">
                               <div class="fuwu">
                                        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]'
                                                :background_img_url='title_bg_url[2]' :color='title_color'></v-comtitle>
                                </div>
                                <div class="servecenter_center_fu_cen">
                                        <div class="fu_cen_left">
                                                <div >
                                                        <p>{{fu_cen_right_lie_o.name}}</p>
                                                        <p v-html="fu_cen_right_lie_o.content"></p>
                                                        <p>{{fu_cen_right_lie_o.fee}}&nbsp;&nbsp;元起</p>
                                                </div>
                                                <p><button>联系客服</button><button>查看详情</button></p>
                                        </div>
                                        <div class="fu_cen_right_lie" v-for='(item,index) in fu_cen_right_lie' :key="item.id"   v-if="index != 0"
                                                @mouseover="mouseOver(index)" @mouseleave="mouseLeave">
                                                <img :src="'http://intellectual.jzhxwl.com'+item.images_text[0]" alt="" :class="{active_o:active==index}">
                                                <div class="right_lie_cent" :class="{active_t:active==index}">
                                                        <p><img :src="'http://intellectual.jzhxwl.com'+item.breviary_image" alt="" ><!-- v-show="!(index == active)" -->
                                                        <!-- <img :src="'http://intellectual.jzhxwl.com'+item.images_text[1]" v-show="index == active"> -->
                                                        <span>{{item.name}}</span></p>
                                                        <p v-html="item.content"></p>
                                                        <p >{{item.fee}}元</p>
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
                                                <p>{{qy_right_lie_o.name}}</p>
                                                <p v-html="qy_right_lie_o.content"></p>
                                                <p>{{qy_right_lie_o.fee}}&nbsp;&nbsp;元起</p>
                                                <button>立即咨询&nbsp;&nbsp;></button>
                                        </div>
                                </div>
                                <div class="servecenter_center_qy_right">
                                        <div class="qy_right_lie" v-for="(item,index) in qy_right_lie" :key="item.id" v-if="index != 0">
                                                <img :src="'http://intellectual.jzhxwl.com'+item.images_text[0]" alt="">
                                                <div>
                                                        <img :src="'http://intellectual.jzhxwl.com'+item.breviary_image" alt="">
                                                        <p>{{item.name}}</p>
                                                        <p v-html="item.content"></p>
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
                                active: 'false',
                                isactive_two: '',
                                isactive: 0,
                                isbtn: '',
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
                                top_lei: [],
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
                                        }
                                ],
                                o_cen_lie:[],
                                sb_right_lie: [],
                                zl_right_lie: [],
                                fu_cen_right_lie:[],
                                qy_right_lie: [],
                                img:[],
                                sb_right_lie_o:[],      //商标注册 左侧
                                zl_right_lie_o:[],      //专利申请
                                fu_cen_right_lie_o:[],  //涉外专利
                                qy_right_lie_o:[],      //版权登记
                        }
                },
                beforeMount() {
                        this.$api.severindex()  //服务中心
                        .then(res=>{
                                console.log(res)
                                this.$nextTick(function(){
                                        this.o_cen_lie = res.data.hot_server    //热门服务
                                        this.sb_right_lie = res.data.server_data39      //商标服务
                                        this.sb_right_lie_o = res.data.server_data39[0]
                                        this.zl_right_lie = res.data.server_data40
                                        this.zl_right_lie_o = res.data.server_data40[0]
                                        this.fu_cen_right_lie =res.data.server_data45
                                        this.fu_cen_right_lie_o = res.data.server_data45[0]
                                        this.qy_right_lie = res.data.server_data46
                                        this.qy_right_lie_o = res.data.server_data46[0]
                                })

                        })
                        this.$api.severcategory()
                        .then(res=>{
                                console.log(res)
                                this.$nextTick(function(){
                                        this.top_lei = res.data
                                        this.each(res.data)

                                })

                        })
                },
                methods: {
                        activeover(index) {
                                this.isactive = index
                                 this.isactive_two = index

                        },
                        activeleave(e) {
                                this.isactive
                                this.isactive_two
                        },
                        btnover(e) {
                                this.isbtn = e
                        },
                        btnleave(e) {
                                this.isbtn
                        },
                        mouseOver(e) {
                                console.log(1111)
                                this.active = e

                        },
                        mouseLeave(e) {
                                this.active = 'false'

                        },
                        each(data){
                                for( let i=0; i<data.length;i++){
                                      this.img[i] = data[i].image.split(',')
                                        this.top_lei[i].img = this.img[i]
                                        this.title_all[i] = data[i].name
                                }
                        },
                        running(key,id){
                                console.log(key,id)
                               this.$router.push({
                                        path:key,
                                        query:{
                                                id:id
                                        }
                                })
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
                height: 510px;
                width: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                justify-content: center;
        }

        .top_cen_left {
                display: flex;
                flex-direction: column;
        }

        .servecenter_top_cen {
                width: 1200px;
                display: flex;
                justify-content: space-between;
        }


        .top_cen_left_lei {
                flex: 1;
                padding:0  5px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                background-color: #1C202C;
                color: #fff;
                text-align: center;
                border-bottom: 1px solid #777;
                font-size: 15px;
                font-weight: bold;
        }

        .left_lei_bj {
                background-color: #fff;
                color: #409EFF;
        }

        .top_cen_left_lei>img {
                width: 25px;
        }

        .top_cen_right_box {
                flex: 2;
        }

        .top_cen_right_box>div {
                list-style: none;
                background-color: #fff;
                padding: 5px;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                /* display: none; */
        }

        .top_cen_right_box>div>div:last-child {
                border: none;
        }

        .top_cen_right_box>div>div {
                text-align: center;
                /* height: 12.5%; */
                padding: 10px;
                border-bottom: 1px solid #ccc;
        }

        .top_cen_right_box>div>div>p {
                color: #666;
                padding-bottom: 5px;
                display: flex;
                align-items: center;
        }

        .top_cen_right_box>div>div>p:hover {
                color: #409EFF !important;

        }

        .top_cen {
                flex: 1;
                display: flex;
        }

        .top_cen_cen {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: column;
                flex: 9;
        }

        .top_cen_cen_text {
                height: 77%;
                width: 100%;
                display: flex;
                padding: 40px 20px 0 20px;
                /* align-items: center; */
                justify-content: center;
                flex-direction: column;
                align-items: flex-start;
                color: #fff;
        }

        .top_cen_cen_text>h1 {
                font-weight: 500;
        }

        .top_cen_cen_text>p {
                padding: 10px 0;
        }

        .top_cen_cen_text>button {
                margin-top: 20px;
                border: 1px solid #fff;
                background-color: rgb(0, 0, 0, 0);
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

        .btm_xiang_two>span {
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

        .btm_xiang_two>div>p:nth-child(2) {
                font-family: arial;
                font-size: 10px;
                color: #aaa;
                text-transform: uppercase;
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
                padding: 20px;
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

        .top_cen_right_cen_up {
                height: 20%;
                padding: 20px;
                background-color: #fff;
        }

        .top_cen_right_cen_up>div {
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }

        .top_cen_right_cen_up>div {}

        .top_cen_right_cen_bottom {
                height: 18%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #D6ECFA;
                border-radius: 0 0 5px 5px;
        }

        .top_cen_right_cen_bottom>img {
                width: 25px;
                border-radius: 50%;
        }

        .top_cen_right_cen_bottom>div {
                padding-left: 10px;
                line-height: 2;
        }

        .top_cen_right_cen_bottom>div>p:nth-child(1) {
                font-size: 13px;
                color: #555;
        }

        .top_cen_right_cen_bottom>div>p:nth-child(2) {
                font-size: 11px;
                color: #ccc;
        }

        .top_cen_right_cen_bottom>div>button {
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
                /* flex: 1; */
                width: 19.5%;
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
        .o_cen_lie_img img{
                height: 100px;
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
                /* justify-content: space-between; */
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

        .servecenter_center_zl {
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

        .servecenter_center_zl_right {
                display: flex;
                justify-content: space-between;
        }

        .zl_right_lie {
                background: url(../../../static/img/service/zl_right_lie.png)no-repeat 0, 0;
                background-size: 100% 100%;
                width: 33%;

                padding: 40px;

        }

        .zl_right_lie>div {
                display: flex;
                flex-direction: column;
                padding: 30px 0;
        }

        .zl_right_lie>div:nth-child(2)>span:first-child {
                font-size: 15px;
                font-weight: bold;
        }

        .zl_right_lie>div:nth-child(2)>span:last-child {
                font-size: 13px;
                color: #ccc;
        }

        .zl_right_lie>p {
                line-height: 4;
                color: #FF9900;
                font-weight: bold;
                font-size: 17px;
        }

        .zl_right_lie>button {
                background-color: #fff;
                border: 1px solid #2081C2;
                color: #2081C2;
                padding: 5px 15px;
                font-weight: 600;
                border-radius: 5px;
        }

        .servecenter_center_fu {
                background-color: #6D7896;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0 50px 0;
        }

        .servecenter_center_fu_cen {
                width: 1200px;
                display: flex;
        }

        .fu_cen_left {
                background: url(../../../static/img/service/fu_cen_left.png)no-repeat 0, 0;
                /* flex: 7; */
                width: 25%;
                padding: 50px 25px 50px 25px;
                background-size: 100% 100%;
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: #fff;
        }

        .fu_cen_left>div {
                line-height: 3;
        }

        .fu_cen_left>div>p:nth-child(1) {
                font-weight: bold;
        }

        .fu_cen_left>div>p:nth-child(2) {
                font-size: 14px;
        }

        .fu_cen_left>div>p:nth-child(3) {
                font-weight: bold;
        }

        .fu_cen_left>p:last-child>button {
                padding: 8px 30px;
                border-radius: 5px;
                outline: none;
                color: #fff;
                font-weight: bold;

        }

        .fu_cen_left>p:last-child>button:nth-child(1) {
                background-color: #FF9900;
                border: none;
                margin-right: 20px;
        }

        .fu_cen_left>p:last-child>button:nth-child(2) {
                background-color: rgba(0, 0, 0, 0);
                border: 1px solid #fff;
        }

        .fu_cen_right_lie {
                /* flex: 6; */
                width: 18.2%;
                background-color: #fff;
                margin-right: 5px;
                height: 325px;
        }

        .fu_cen_right_lie>img {
                width: 100%;
                height: 60%;
        }

        .right_lie_cent {
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 40%;
                line-height: 2;
                font-size: 14px;
        }

        .right_lie_cent>p:nth-child(1) {
                font-size: 14px;
                font-weight: bold;
                display: flex;
                align-items: center;
        }

        .right_lie_cent>p:nth-child(1)>img {
                width: 20px;
                height: 20px;
                margin-right: 10px;
        }

        .right_lie_cent>p:nth-child(2) {
                color: #bbb;
        }

        .right_lie_cent>p:nth-child(3) {
                color: #1366CE;
                font-weight: bold;
        }

        .right_lie_cent>p:nth-child(4) {
                text-align: center;
        }

        .right_lie_cent>p:nth-child(4)>button {
                width: 80%;
                padding: 5px 0;
                border: none;
                background-color: #fff;
                color: #F38E48;
                border-radius: 5px;
                outline: none;
        }

        button {
                outline: none;
        }

        .active_t {
                float: bottom;
                position: relative;
                top: -37px;
                height: 50%;
                background-color: #F38E48;
                font-weight: bold;
                color: #fff !important;
        }

        .active_t p {
                color: #fff !important;
        }

        .servecenter_center_qy {
                width: 1200px;
                display: flex;
                height: 380px;
                /* background-color: #fff; */
                padding: 20px 0;
        }

        .servecenter_center_qy_left {
                flex: 5;
                padding: 20px;
                background-color: #fff;
                border-right: 10px solid #f5f5f5;
                /* height: 100%; */
        }

        .servecenter_center_qy_left>div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                /* line-height: 3; */
                padding-left: 35px;
                /* line-height: 2; */
                background: url(../../../static/img/service/fu_cen_left.png)no-repeat 0, 0;
                background-size: 100% 100%;
                height: 100%;
        }
        .servecenter_center_qy_left>div>p{
                color: #fff;
                font-size: 15px;
                padding-bottom: 15px;
        }
        .servecenter_center_qy_left>div>p:nth-child(1){
                font-size: 25px !important;
                font-weight: bold;
        }

        .servecenter_center_qy_left>div>button {
                padding: 10px 30px;
                border: 1px solid #fff;
                color: #fff;
                border-radius: 5px;
                background: rgba(0, 0, 0, 0);
                outline: none;

                /* left: 35px; */
        }

        .servecenter_center_qy_right {
                flex: 15;
                background-color: #fff;
                display: flex;
        }

        .qy_right_lie {
                /* flex: 1; */
                width: 33.333333%;
                padding: 20px;
                border-right: 1px solid #f5f5f5;
        }

        .qy_right_lie>img {
                width: 100%;
                height: 35%;
        }

        .qy_right_lie>div {
                background-color: #f5f5f5;
                height: 65%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                padding: 15px;
                /* line-height: 2; */
        }

        .qy_right_lie>div>img {
                height: 30px;
        }

        .qy_right_lie>div>p:nth-child(2) {
                font-weight: bold;
                font-size: 18px;
                /* padding-bottom: 10px; */
        }

        .qy_right_lie>div>p:nth-child(3) {
                font-size: 14px;
                color: #aaa;
                /* padding-bottom: 15px; */
        }

        .qy_right_lie>div>button {
                padding: 10px 30px;
                border: 1px solid #1366CE;
                color: #1366CE;
                border-radius: 5px;
                outline: none;
        }
</style>
