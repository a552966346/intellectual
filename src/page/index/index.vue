<template>
        <div>
                <!-- 公共搜索头部 -->
                <v-topsearch></v-topsearch>
                <!-- 顶部导航 -->
                <v-navigation></v-navigation>
                <!-- 顶部选项卡 -->
                <v-banner></v-banner>
                <!-- 交易中心 -->
                <div class="index_pay">
                        <!--交易中心标题-->
                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :background_img_url='title_bg_url[0]'></v-comtitle>
                        <!-- 专利交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[0]' :type='false' :hot='hot' :transaction='transaction' :num='num1+""'></v-indexpayitem>
                        <!-- 商标交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[1]' :type='true' :trade='trade' :num='num2+""'></v-indexpayitem>
                        <!-- 软著交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[2]' :type='true' :trade='soft' :num='num3+""'></v-indexpayitem>
                </div>

                <!-- 企业服务 -->
                <div class="index_enterprise">
                        <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'
                                :background_img_url='title_bg_url[1]'></v-comtitle>
                        <div class="index_enterpriseasd">
                                <div class="index_enterpriseasdwron">
                                        <div class="index_entesdwr">
                                                {{sever[0]}}
                                        </div>
                                        <div class="index_entesdwrqw">
                                                {{severtw[0]}}
                                        </div>
                                        <div class="index_entesdwrqwas">
                                                {{severtr[0]}}
                                        </div>
                                </div>
                                <div class="index_enterpriseasdwrtw">
                                        <div class="index_entwkjk">
                                        </div>
                                        <div class="index_entwkjkas">
                                                <div class="index_cmetk">
                                                        {{sever[1]}}
                                                </div>
                                                <div class="index_cmetkaw">
                                                        {{severtw[1]}}
                                                </div>
                                                <div class="index_cmetkaqw">
                                                        {{severtr[1]}}
                                                </div>
                                        </div>
                                </div>
                                <div class="index_enterpriseasdwrtr">
                                        <div class="index_entwkjkr">
                                        </div>
                                        <div class="index_entwkjkas">
                                                <div class="index_cmetk">
                                                        {{sever[2]}}
                                                </div>
                                                <div class="index_cmetkaw">
                                                        {{severtw[2]}}
                                                </div>
                                                <div class="index_cmetkaqw">
                                                        {{severtr[2]}}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>

                <!-- 跳蚤市场、合伙人、新闻、伊甸网 -->
                <div class="index_content">
                        <!-- 跳蚤市场 -->
                        <div>
                                <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :background_img_url='title_bg_url[2]'></v-comtitle>
                                <div class="index_online">
                                        <div :class="index.index == 12?'index_blokk':'index_block'" v-for="(index,item) in list"
                                                :key="item">
                                                <div :class="index.index == 12?'index_bvlax':'index_bvlx'">
                                                        {{index.title}}
                                                </div>
                                                <div :class="index.index == 12?'index_bvxxa':'index_bvlxa'">
                                                        {{index.titcet}}
                                                </div>
                                                <div class="index_bale">
                                                        <div :class="index.index == 12?'index_aeq':'index_asq'">
                                                                {{index.miney}}
                                                        </div>
                                                        <div class="idnex_aqx">
                                                                <img :src='index.listimg' alt="">
                                                        </div>
                                                </div>
                                                <div class="index_qza" v-show="index.index == 1?'listshow':''">
                                                        <div class="index_mwt">{{index.btntit}}</div>
                                                        <div class="index_qwz">{{index.btntitw}}</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <!-- 新闻中心 -->
                        <div>
                                <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :background_img_url='title_bg_url[3]'></v-comtitle>
                                <div id="index_box">
                                        <!-- <el-tabs v-model="activeName" @tab-click="">
                                            <el-tab-pane label="用户管理" name="first">
                                                    用户管理
                                            </el-tab-pane>
                                            <el-tab-pane label="配置管理" name="second">
                                                    配置管理
                                            </el-tab-pane>
                                            <el-tab-pane label="角色管理" name="third">
                                                    角色管理
                                            </el-tab-pane>
                                        </el-tabs> -->
                                        <ul class="index_ulon">
                                                <li v-for="(item,index) in news" :class="{active:index == num}"
                                                        @click="tab(index)" :key="index">
                                                        {{item.name}}
                                                </li>
                                        </ul>
                                        <ul class="index_ultw">
                                                <div v-for="(item,index) in news">
                                                    <li v-for="(item1,index) in item.news" v-show="index == num" :key="index">
                                                            <div class="index_ulxwon">
                                                                    <div class="index_url">
                                                                    </div>
                                                                    <div class="index_urlw">
                                                                            <div class="index_urlq">
                                                                                   {{item1.title}}
                                                                            </div>
                                                                            <div class="index_urlz">
                                                                                    <p>{{item1.desc}}</p>
                                                                                    <p v-html="item1.content">{{item1.content}}</p>
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                            <div class="index_ulxwtw">
                                                                    <div class="index_ulxwtwbk" v-for="(index,item) in selist"
                                                                            :key="item">
                                                                            <div class="index_ulxwtwbklt">
                                                                                    <div class="index_ulxwas">
                                                                                            {{index.selon}}
                                                                                    </div>
                                                                                    <div class="index_ulxwasq">
                                                                                            {{index.seltw}}
                                                                                    </div>
                                                                            </div>
                                                                            <div class="index_ulxwtwbkrt">
                                                                                    <div class="idnex_ulxwtas">
                                                                                            {{index.seltr}}
                                                                                    </div>
                                                                                    <div class="idnex_ulxwtasq">
                                                                                            {{index.selfv}}
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                            <div class="index_ulxwtr">
                                                                    <div class="index_ulxwsq">
                                                                            <div class="index_ulxwsqlt"></div>
                                                                            <div class="index_ulxwsqrt">
                                                                                    <div>产权转让全程监督</div>
                                                                                    <div>国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...</div>
                                                                                    <div>发布时间：2020.08.26</div>
                                                                            </div>
                                                                    </div>
                                                                    <div class="index_ulxwsqk">
                                                                            <div class="index_ulxwsqkz" v-for="(must,item) in nulist"
                                                                                    :key="item">
                                                                                    <div class="index_ulwsaq">
                                                                                            {{must.title}}
                                                                                    </div>
                                                                                    <div class="index_ulwsapq">
                                                                                            {{must.center}}
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                    </li>
                                                </div>

                                        </ul>
                                </div>
                        </div>
                        <!-- 合伙人 -->
                        <div>
                                <v-comtitle :title="title_all[4]" :inform_title='title_text_all[4]' :background_img_url='title_bg_url[4]'></v-comtitle>
                                <div class="index_partner">
                                        <div :class="index.index == 1?'index_partblok':'index_partblak'" v-for="(index,item) in parlist"
                                                :key="item">
                                                <div :class="index.index == 1?'index_parsnimg':'index_parsimg'">
                                                        <img :src="index.parimg" alt="">
                                                </div>
                                                <div class="index_parscet">
                                                        <div :class=" index.index == 1?'index_parszeq':'index_parsze' ">{{index.paron}}</div>
                                                        <div class="index_parszet">{{index.partw}}</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <!-- 伊甸网  -->

                        <div class="index_about">
                                <v-comtitle :title="title_all[5]" :inform_title='title_text_all[5]' :background_img_url='title_bg_url[5]'></v-comtitle>
                                <div class="index_about1">
                                        <div class="index_about_content">
                                                <div class="index_left_content">
                                                        <router-link to="">
                                                             <h3>伊甸城介绍</h3>
                                                             <div v-html="brief" class="index_left_content_intro">{{brief}}</div>
                                                        </router-link>
                                                        <div class="swiper-container">
                                                                  <div class="swiper-wrapper">
                                                                     <!-- <div class="swiper-slide" v-for="(item,index) in introimage">
                                                                           <img :src="item" alt="">
                                                                      </div> -->

                                                                        <div class="swiper-slide">
                                                                              <img src="../../../static/img/index/index_intro_swiper.png" alt="">
                                                                         </div>
                                                                         <div class="swiper-slide">
                                                                              <img src="../../../static/img/index/index_intro_swiper.png" alt="">
                                                                         </div>
                                                                         <div class="swiper-slide" >
                                                                              <img src="../../../static/img/index/index_intro_swiper.png" alt="">
                                                                         </div>
                                                                  </div>
                                                                  <!-- <div class="swiper-pagination"></div> -->
                                                                  <div class="swiper-button-prev"></div>
                                                                  <div class="swiper-button-next"></div>
                                                        </div>

                                                </div>
                                                <div class="index_right_content">
                                                        <img src="../../../static/img/index/about_right_one.png" alt="">
                                                        <img src="../../../static/img/index/about_right_two.png" alt="">
                                                        <img src="../../../static/img/index/about_right_three.png" alt="">
                                                </div>
                                        </div>

                                </div>


                        </div>
                </div>
                <!-- 合作平台 -->
                <div>
                      <img src="../../../static/img/index/cooperation_img.png" alt="">
                </div>
                <!-- 公共底部 -->
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import Swiper from 'swiper';
        import indexpayitem from '@/components/indexpayitem/indexpayitem.vue'
        import navigation from '@/components/navigation/navigation.vue'
        import banner from '@/components/banner/banner.vue'
        export default {
                name: 'index',
                data() {
                        return {
                                // 交易中心
                                num1:'',//交易中心数量
                                num2:'',//商标交易数量
                                num3:'',//软著交易数量
                                hot:[],//交易中心的热门推荐
                                transaction:[],//交易中心的块内容
                                trade:[],//商标交易的块内容
                                soft:[],//软著交易的块内容
                                title_color: '#fff', // commtitle组件传值所需
                                title_all: ["交易中心", '企业服务', '跳蚤市场', '新闻中心', '合伙人计划', '了解伊甸网'], // 所有标题
                                // 标题下的介绍
                                title_text_all: ['交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                        '交易快报: 186****123,25分钟前购买了****专利',
                                ],
                                // 标题的背景图片
                                title_bg_url: ['../../../static/img/common/Trading_Center.png',
                                        '../../../static/img/common/bg_text.png',
                                        '../../../static/img/common/flea_market.png',
                                        '../../../static/img/common/News_Center.png',
                                        '../../../static/img/common/Partnership_plan.png',
                                        '../../../static/img/common/Learn_about_Eden.png',
                                ],
                                //交易中心组件所需侧边图片
                                pay_img_list: ['../../../static/img/index/zhuanli_pay.png',
                                        '../../../static/img/index/shangbiao_pay.png',
                                        '../../../static/img/index/ruanzhu_pay.png'
                                ],
                                // 企业服务
                                sever: ["企业服务", "知识产权贯标", "知识产权贯标"],
                                severtw: ["致力于小微企业提供数字金融服务", "享受政府资助最高30万", "享受政府资助最高30万"],
                                severtr: ["立即咨询", "查看详情", "查看详情"],
                                // 跳蚤市场
                                listshow: true,
                                list: [{
                                                index: 1,
                                                title: '作品1',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '398.00元',
                                                listimg: '../../../static/img/index/index_icon.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 2,
                                                title: '作品2',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_ictw.png'
                                        },
                                        {
                                                index: 3,
                                                title: '作品3',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_ictr.png'
                                        },
                                        {
                                                index: 4,
                                                title: '作品4',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_icfh.png'
                                        },
                                        {
                                                index: 5,
                                                title: '作品5',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_iceg.png'
                                        },
                                        {
                                                index: 6,
                                                title: '作品6',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '3000.00元',
                                                listimg: '../../../static/img/index/index_icsv.png'
                                        },
                                        {
                                                index: 7,
                                                title: '作品7',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '898.00元',
                                                listimg: '../../../static/img/index/index_icsx.png'
                                        },
                                        {
                                                index: 8,
                                                title: '作品8',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '698.00元',
                                                listimg: '../../../static/img/index/index_icfv.png'
                                        },
                                        {
                                                index: 9,
                                                title: '作品9',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '1500.00元',
                                                listimg: '../../../static/img/index/index_icni.png'
                                        },
                                        {
                                                index: 10,
                                                title: '作品10',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '3000.00元',
                                                listimg: '../../../static/img/index/index_ictn.png'
                                        },
                                        {
                                                index: 11,
                                                title: '作品11',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '1000.00元',
                                                listimg: '../../../static/img/index/index_icttn.png'
                                        },
                                        {
                                                index: 12,
                                                title: '专业版权服务顾问',
                                                titcet: 'COPYRIGHTSERVICES',
                                                miney: '立即咨询'
                                        }
                                ],
                                //合伙人计划
                                parlist: [{
                                                index: 1,
                                                parimg: '',
                                                paron: '免费为您定制方案',
                                                partw: '了解更多>'
                                        },
                                        {
                                                index: 2,
                                                parimg: '../../../static/img/index/index_partnertw.png',
                                                paron: '01',
                                                partw: '成为代理商'
                                        },
                                        {
                                                index: 3,
                                                parimg: '../../../static/img/index/index_partnertr.png',
                                                paron: '02',
                                                partw: '提交客户商机'
                                        },
                                        {
                                                index: 4,
                                                parimg: '../../../static/img/index/index_partnerfh.png',
                                                paron: '03',
                                                partw: '伊甸城知产服务'
                                        },
                                        {
                                                index: 5,
                                                parimg: '../../../static/img/index/index_partnerfv.png',
                                                paron: '04',
                                                partw: '获得利润分成'
                                        },
                                ],
                                // 新闻中心
                                news:[],
                                // tabtit: ["公司新闻", "行业新闻", "政策新闻"],
                                tabmain: ["内容一", "内容二", "内容三"],
                                num: 0,
                                selist: [{
                                                index: 1,
                                                selon: '2020.08',
                                                seltw: '25',
                                                seltr: '产权转让全程监护',
                                                selfv: '国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...'
                                        },
                                        {
                                                index: 2,
                                                selon: '2020.08',
                                                seltw: '25',
                                                seltr: '产权转让全程监护',
                                                selfv: '国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...'
                                        },
                                        {
                                                index: 3,
                                                selon: '2020.08',
                                                seltw: '25',
                                                seltr: '产权转让全程监护',
                                                selfv: '国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...'
                                        },
                                        {
                                                index: 4,
                                                selon: '2020.08',
                                                seltw: '25',
                                                seltr: '产权转让全程监护',
                                                selfv: '国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...'
                                        }
                                ],
                                nulist: [{
                                                index: 1,
                                                title: '山西省知识产权战略纲要',
                                                center: '为全面贯彻落实国家知识产权战略，推进我省国家资源型经济转型综合配套改革试验区...'
                                        },
                                        {
                                                index: 2,
                                                title: '山西省人民政府关于新形势下推进知识产...',
                                                center: '各市、县人民政府，省人民政府各委、办、厅、局：为深入贯彻落实《国务院关于新形势下加快知...》'
                                        },
                                        {
                                                index: 3,
                                                title: '山西省专利实施和保护条例',
                                                center: '（2001年11月25日山西省第九届人民代表大会常务委员会第二十六次会议通过 2014年...）'
                                        }
                                ],
                                // 伊甸网
                                brief:'',
                                introimage:[]
                        }
                },
                mounted() {
                         new Swiper ('.swiper-container', {
                                loop: true,
                                slidesPerView: 3,
                                spaceBetween: 30,
                                // 如果需要分页器
                                // pagination: '.swiper-pagination',
                                // 如果需要前进后退按钮
                                nextButton: '.swiper-button-next',
                                prevButton: '.swiper-button-prev',

                            })
                        this.$api.getidnexdeal()
                        .then(res=>{
                                console.log(res,'专利交易')
                                this.hot=res.data.hot;
                                this.transaction=res.data.transaction;
                                this.num1=res.data.count;
                        })
                        this.$api.getindexbrand()
                        .then(res=>{
                                console.log(res,'商标交易')
                                this.trade=res.data.transaction;
                                this.num2=res.data.count;
                        })
                        this.$api.getidnexsoft()
                        .then(res=>{
                                console.log(res,'软著交易')
                                this.soft=res.data.transaction;
                                this.num3=res.data.count;
                        })
                        this.$api.getindexnew()
                        .then(res=>{
                                console.log(res,'新闻中心')
                                this.news=res.data;
                                // this.num3=res.data.count;
                        })
                        this.$api.getydbrief()
                        .then(res=>{
                                console.log(res,'伊甸网')
                                this.brief=res.data.brief;
                                this.introimage=res.data.images;
                                // this.num3=res.data.count;
                        })
                },
                methods: {
                        tab(index) {
                                this.num = index;
                        }
                },
                components: {
                        'v-indexpayitem': indexpayitem,
                        'v-navigation': navigation,
                        'v-banner': banner
                }


        }
</script>

<style scoped>
      /* scoped 样式隔离*/
      *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
       a{text-decoration: none;}
       a:hover{text-decoration: none;}
      /* 交易*/
      .index_pay{background: #f6f6f6;padding: 20px 0px;}



      /* 伊甸网简介*/
      .index_about{width: 100%;}
      .index_about1{width: 100%;background-image: url(../../../static/img/index/index_intro_bg.png);padding: 30px 0px;}
      .index_about_content{width: 1200px;margin: 0 auto;display: flex;overflow: hidden;}
      .index_left_content{padding: 30px;background: #fff;margin-right: 20px;flex: 1;width: 0;display: flex;flex-direction: column;}
      .index_left_content h3{padding: 10px 0;color: #333;}
      .index_left_content_intro{font-size: 14px;line-height: 25px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow: hidden;}
       .index_left_content .index_left_content_intro p{margin-top: 0px!important;}
      .index_right_content{display: flex;flex-direction: column;align-items: center;}
      .index_right_content>img{margin-bottom: 20px;}
      .index_right_content>img:last-of-type{margin-bottom: 0;}
       /* 伊甸网简介轮播图 */
       .swiper-container{flex:1;height: 0;padding: 20px 0px;}
       .swiper-wrapper{width: 100%;height: 100%;}
      /* .swiper-slide{width: 31.3333%;height: 100%;margin: 0% 1%;} */
       /* .swiper-slide img{width: 100%;height: 100%;} */
       /* .swiper-slide:nth-child(3n+3){margin-right: 0%!important;} */


      /* 企业服务*/
      .index_enterprise{background-image: url(../../../static/img/index/index_enterprise_bg.jpg);padding: 30px;padding-top: 10px;}
      .index_enterpriseasd{width: 1240px;height: 420px;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
      .index_enterpriseasdwron{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbaon.png);background-size: cover;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 3%;color: #fff;}
      .index_enterpriseasdwrtw{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatw.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
      .index_enterpriseasdwrtr{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatr.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
      .index_entesdwr{font-size: 30px;font-weight: bold;}
      .index_entesdwrqwas{border: 1px solid #fff;padding: 3%;border-radius: 8px;}
      .index_entwkjk{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_banrtwstw.png);background-size: cover;}
      .index_entwkjkr{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_benarwst.png);background-size: cover;}
      .index_entwkjkas{width: 100%;flex: 1;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 2%;color: #fff;padding: 0 30px;}
      .index_cmetk{font-size: 24px;font-weight: bold;}
      .index_cmetkaqw{border: 1px solid #fff;padding: 10px;font-size: 14px;}

      /* 跳蚤市场 */
      .index_content{display: flex;flex-direction: column;align-items: center;background: #f6f6f6;padding: 25px 0;}
      .index_online{width: 1200px;height: 570px;display: flex;align-items: baseline;flex-wrap: wrap;padding-top: 4px;}
      .index_block{width: 295px;height: 185px;background-color: #fff;display: flex;justify-content: baseline;align-items: center;flex-direction: column;margin: 0 2.5px 0 2.5px;box-shadow: 1px 1px 7px #ccc;}
      .index_blokk{width: 295px;height: 185px;background-image: url(../../../static/img/index/index_icws.png);background-size: cover;display: flex;justify-content: baseline;align-items: center;flex-direction: column;margin: 0 2.5px 0 2.5px;box-shadow: 1px 1px 7px #ccc;}
      .index_bvlx{width: 100%;height: 50px;padding: 20px 16px 0;font-weight: bold;}
      .index_bvlax{width: 100%;height: 50px;padding: 20px 16px 0;font-weight: bold;color: #fff;}
      .index_bvlxa{font-size: 16px;color: #989495;}
      .index_bale{width: 100%;height: 50px;display: flex;justify-content: space-between;align-items: center;flex-direction: row;margin-top: 20px;padding: 0 20px;}
      .index_asq{color: red;font-weight: bold;}
      .index_aeq{color: #fff;font-weight: bold;padding: 5px 15px;border: 2px solid #fff;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
      .index_qza{width: 100%;flex: 1;display: flex;justify-content: center;align-items: center;flex-direction: row;}
      .index_mwt{display: flex;justify-content: center;align-items: center;background-color: #ff8800;width: 50%;height: 100%;color: #fff;}
      .index_qwz{display: flex;justify-content: center;align-items: center;border: 2px solid #ff8800;width: 50%;height: 100%;color: #ff8800;}
      .index_bvxxa{font-size: 16px;width: 100%;padding-left: 18px;color: rgb(88, 80, 80);}
      .index_partner{width: 1200px;height: 425px;background-color: #f6f6f6f6;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
      .index_partblok{width: 265px;height: 395px;display: flex;flex-direction: column;background-image: url(../../../static/img/index/index_partneron.png);background-size: cover;}
      .index_partblak{width: 215px;height: 395px;background-color: #fff;display: flex;flex-direction: column;}
      .index_parsimg{width: 100%;height: 60%;}
      .index_parsnimg{width: 100%;height: 60%;visibility: hidden;}
      .index_parsimg img{width: 100%;height: 100%;}
      .index_parscet{flex: 1;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;color: #147fc5;}
      .index_parsze{font-size: 40px;border-bottom: 2px solid #147fc5;}
      .index_parszeq{font-size: 16px;background-image: linear-gradient(#fb963a, #f25630);padding: 10px 15px;color: #fff;font-weight: bold;border-bottom-left-radius: 25px;border-bottom-right-radius: 25px;border-top-left-radius: 25px;border-top-right-radius: 25px;}
      #index_box{width: 1200px;height: 505px;}

      /* 新闻中心 */
      .index_ulonimo{width: 10px;text-align: right;}
      .index_ulon{overflow: hidden;display: flex;justify-content: center;align-content: center;padding-bottom: 10px;}
      .index_ulonim{text-align: right;}
      .index_ulon li{float: left;margin: 0 10px;cursor: pointer;width: 115px;height: 35px;border-top-left-radius: 25px;border-top-right-radius: 25px;border-bottom-left-radius: 25px;border-bottom-right-radius: 25px;display: flex;justify-content: center;align-items: center;}
      .index_ultw li{height: 470px;display: flex;justify-content: space-between;}
      .active{background-color: #187fc4;color: #fff;}
      .index_ulxwon{width: 350px;height: 100%;background-color: #fff;display: flex;flex-direction: column;padding: 15px;}
      .index_ulxwtw{width: 350px;height: 100%;display: flex;justify-content: space-between;align-content: center;flex-direction: column;}
      .index_ulxwtr{width: 430px;height: 100%;display: flex;justify-content: space-between;align-content: center;flex-direction: column;background-color: #fff;}
      .index_url{width: 100%;height: 235px;background-image: url(../../../static/img/index/index_nesinon.png);background-size: cover;}
      .index_urlw{flex: 1;display: flex;justify-content: space-evenly;align-content: center;flex-direction: column;}
      .index_urlq{font-size: 24px;}
      .index_urlz p:nth-child(2){word-break: break-all;}
      .index_ulxwtwbk{width: 100%;height: 100px;background-color: #fff;display: flex;justify-content: center;align-content: center;flex-direction: row;}
      .index_ulxwtwbklt{width: 77px;height: 100%;display: flex;justify-content: center;align-content: center;flex-direction: column;}
      .index_ulxwtwbkrt{flex: 1;height: 100%;display: flex;justify-content: center;align-content: center;flex-direction: column;padding: 15px;}
      .index_ulxwas{width: 100%;height: 30px;display: flex;justify-content: center;align-content: center;border-right: 1px solid #ccc;}
      .index_ulxwasq{width: 100%;height: 30px;display: flex;justify-content: center;align-content: center;border-right: 1px solid #ccc;}
      .idnex_ulxwtas{width: 100%;height: 30px;display: flex;justify-content: flex-start;align-content: center;}
      .idnex_ulxwtasq{width: 100%;display: flex;justify-content: center;align-content: center;}
      .index_ulxwsq{width: 100%;height: 150px;display: flex;justify-content: center;align-items: center;}
      .index_ulxwsqlt{width: 40%;height: 70%;margin-left: 5%;background-image: url(../../../static/img/index/index_mset.png);background-size: cover;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;}
      .index_ulxwsqrt{flex: 1;height: 100%;display: flex;justify-content: space-evenly;align-items: flex-start;flex-direction: column;padding: 15px;}
      .index_ulxwsqk{flex: 1;display: flex;justify-content: space-evenly;align-items: flex-start;flex-direction: column;padding: 20px;}
      .index_ulxwsqkz{width: 100%;height: 90px;background-color: #f8f8f8;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
      .index_ulwsaq{width: 100%;height: 45px;display: flex;justify-content: flex-start;align-items: center;}
      .index_ulwsapq{width: 100%;flex: 1;display: flex;justify-content: flex-start;align-items: center;}
      .index_ulxwsqk .index_ulxwsqkz:nth-child(2){margin: 10px 0;}
</style>
