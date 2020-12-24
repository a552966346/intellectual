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
                        <v-comtitle :title="title_all[0]"  :background_img_url='title_bg_url[0]' :inform_title="title_text_all[0]"></v-comtitle>
                        <!-- 专利交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[0]'  :hot='hot' :transaction='transaction' :num='num1+""'></v-indexpayitem>
                        <!-- 商标交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[1]'  :trade='trade' :num='num2+""'></v-indexpayitem>
                        <!-- 软著交易 -->
                        <v-indexpayitem :payleft_img_url='pay_img_list[2]'  :istrades='soft' :num='num3+""'></v-indexpayitem>
                </div>

                <!-- 企业服务 -->
                <div class="index_enterprise">
                        <v-comtitle :title="title_all[1]"  :color='title_color' :inform_title="title_text_all[1]"
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
                        <!-- <div style="padding: 20px 0px;">
                                <v-comtitle :title="title_all[2]"  :background_img_url='title_bg_url[2]' :inform_title="title_text_all[2]"></v-comtitle>
                                <div class="index_online">
                                        <div :class="index.index == 12?'index_blokk':'index_block'" v-for="(index,item) in list"
                                                :key="item" @mouseenter="enter(item)" @mouseleave="leave(item)">
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
                                                文本框
                                                <div class="index_qza" v-if="seen==item">
                                                        <div class="index_mwt">{{index.btntit}}</div>
                                                        <div class="index_qwz">{{index.btntitw}}</div>
                                                </div>
                                        </div>
                                </div>
                        </div> -->
                        <!-- 新闻中心 -->
                        <div>
                                <v-comtitle :title="title_all[3]"  :background_img_url='title_bg_url[3]' :inform_title="title_text_all[3]"></v-comtitle>
                                <div id="index_box">
                                        <ul class="index_ulon">
                                                <li v-for="(item,index) in news" :class="{active:index == num}"
                                                        @click="tab(index)" :key="item.id">
                                                        {{item.name}}
                                                </li>
                                        </ul>
                                        <ul class="index_ultw">
                                                <div v-for="(item,index) in news" v-if="index == num">
                                                    <li>
                                                            <div class="index_ulxwon" v-for="(item1,index) in item.news" v-if="index==0">
                                                                    <router-link to="">
                                                                            <div class="index_url"></div>
                                                                            <div class="index_urlw">
                                                                                    <router-link to="">
                                                                                            <div class="index_urlq">
                                                                                                   {{item1.title}}
                                                                                            </div>
                                                                                            <div class="index_urlz">
                                                                                                    <p>{{item1.desc}}</p>
                                                                                                    <p v-html="item1.content">{{item1.content}}</p>
                                                                                            </div>
                                                                                    </router-link>
                                                                            </div>
                                                                    </router-link>
                                                            </div>
                                                            <div class="index_ulxwtw" >
                                                                    <div class="index_ulxwtwbk" v-for="(item1,index) in item.news" v-if="(index>0)&&(index<5)" :key="item1.id">
                                                                        <router-link to="" class="newa">
                                                                                <div class="index_ulxwtwbkrt">
                                                                                        <div class="idnex_ulxwtas">
                                                                                                {{index.seltr}}
                                                                                                2020.08
                                                                                        </div>
                                                                                        <div class="idnex_ulxwtasq">
                                                                                                {{index.selfv}}
                                                                                                25
                                                                                        </div>
                                                                                </div>
                                                                                <div class="index_ulxwtwbklt">
                                                                                        <div class="index_ulxwas">
                                                                                                 {{item1.title}}
                                                                                        </div>

                                                                                </div>

                                                                        </router-link>
                                                                    </div>
                                                            </div>
                                                            <div class="index_ulxwtr">
                                                                    <div class="index_ulxwsq"  v-for="(item1,index) in item.news" v-if="index==5" :key="item1.id">
                                                                            <router-link to="" class="newa">
                                                                                   <div class="index_ulxwsqlt"></div>
                                                                                   <div class="index_ulxwsqrt">
                                                                                           <div>产权转让全程监督</div>
                                                                                           <div>国家知识产权局公告-第二八六号根据《中华人民共和国专利法》...</div>
                                                                                           <div>发布时间：2020.08.26</div>
                                                                                   </div>
                                                                            </router-link>
                                                                    </div>
                                                                    <div class="index_ulxwsqk">
                                                                            <div class="index_ulxwsqkz"  v-for="(item1,index) in item.news" v-if="(index>5)&&(index<8)" :key="item1.id">
                                                                                <router-link to="" class="newa">
                                                                                        <div class="index_ulwsaq">
                                                                                                {{must.title}}
                                                                                        </div>
                                                                                        <div class="index_ulwsapq">
                                                                                                {{must.center}}
                                                                                        </div>
                                                                                </router-link>
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
                                <v-comtitle :title="title_all[4]"  :background_img_url='title_bg_url[4]' :inform_title="title_text_all[4]"></v-comtitle>
                                <div class="index_partner">
                                        <div :class="index.index == 1?'index_partblok':'index_partblak'" v-for="(index,item) in parlist"
                                                :key="item" @click="open(item)">
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
                                <v-comtitle :title="title_all[5]"  :background_img_url='title_bg_url[5]' :inform_title="title_text_all[5]"></v-comtitle>
                                <div class="index_about1">
                                        <div class="index_about_content">
                                                <div class="index_left_content">
                                                        <router-link to="/aboutus">
                                                             <h3>伊甸城介绍</h3>
                                                             <div v-html="brief" class="index_left_content_intro">{{brief}}</div>
                                                        </router-link>
                                                        <div class="swiper-container">
                                                                 <div class="swiper-wrapper">
                                                                        <div class="swiper-slide" v-for="(item,index) in introimage">
                                                                                <img :src="item" alt="">
                                                                        </div>
                                                                  </div>
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
                <div class="layui" v-show="isshow" @click.self="close">
                     <div class="layui_left">
                             <div class="layui_title" style="display:flex;">
                                     <div>
                                             <h2>申请成为合伙人</h2>
                                             <span style="color: #ccc;font-size: 15px;padding-left: 5px;"><img src="" alt="">最高100%返佣</span>
                                     </div>
                                     <div @click="close">
                                             <img src="../../../static/img/index/index_close.png" alt="">
                                     </div>
                             </div>
                             <div class="layui_left_left">
                                     <div class="layui_cent">
                                            <el-form :model="login_ruleForm" status-icon :rules="verification_rules" ref="login_ruleForm"
                                                    class="layui_cent_from">
                                                    <el-form-item label="手机号" prop="phone" class="login_form_item">
                                                            <el-input  type="text" v-model="login_ruleForm.phone" size="large" style="width: 100%;"
                                                                    autocomplete="off" placeholder='请输入手机号'></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="联系人" prop="name" class="login_form_item">
                                                            <el-input  type="text" v-model="login_ruleForm.name" size="large"
                                                            style="width: 100%;"
                                                                    autocomplete="off" placeholder='如王女士/张女士'></el-input>
                                                    </el-form-item>
                                                    <el-form-item class="login_form_item">
                                                            <el-button type="primary" :plain="true" @click="submitForm('login_ruleForm')"
                                                                    style="width:200px;height:40px">立即申请</el-button>
                                                    </el-form-item>
                                            </el-form>
                                     </div>
                                     <div class="layui_left_rig">
                                                <p style="font-size: 15px !important;font-weight: bold !important; color: #000000;">追高100%返佣</p>
                                                <p><i class="el-icon-circle-checke"></i>品牌赋能</p>
                                                 <p><i class="el-icon-circle-checke"></i>运营营赋能</p>
                                                  <p><i class="el-icon-circle-checke"></i>培训支持</p>
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
        import indexpayitem from '@/components/indexpayitem/indexpayitem.vue'
        import navigation from '@/components/navigation/navigation.vue'
        import banner from '@/components/banner/banner.vue'
        import {validatePhone} from '@/util/rules.js'
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
                                title_text_all: [
                                        '',
                                        '致力于小微企业提供数字金融服务',
                                        '',
                                        '',
                                        '',
                                        '链接高校与企业，打造智创新高地，建设山西梦工厂',
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
                                seen:'',
                                // listshow: true,
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
                                                listimg: '../../../static/img/index/index_ictw.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 3,
                                                title: '作品3',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_ictr.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 4,
                                                title: '作品4',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_icfh.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 5,
                                                title: '作品5',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '798.00元',
                                                listimg: '../../../static/img/index/index_iceg.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 6,
                                                title: '作品6',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '3000.00元',
                                                listimg: '../../../static/img/index/index_icsv.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 7,
                                                title: '作品7',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '898.00元',
                                                listimg: '../../../static/img/index/index_icsx.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 8,
                                                title: '作品8',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '698.00元',
                                                listimg: '../../../static/img/index/index_icfv.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 9,
                                                title: '作品9',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '1500.00元',
                                                listimg: '../../../static/img/index/index_icni.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 10,
                                                title: '作品10',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '3000.00元',
                                                listimg: '../../../static/img/index/index_ictn.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 11,
                                                title: '作品11',
                                                titcet: '普通担保35-45个工作日，成功率高...',
                                                miney: '1000.00元',
                                                listimg: '../../../static/img/index/index_icttn.png',
                                                btntit: '联系客服',
                                                btntitw: '查看详情'
                                        },
                                        {
                                                index: 12,
                                                title: '专业版权服务顾问',
                                                titcet: 'COPYRIGHTSERVICES',
                                                miney: '立即咨询',

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
                                introimage:[],
                                login_ruleForm:{
                                        phone:'',
                                        name:''
                                },
                                //校验规则
                              verification_rules: {
                                      phone: [{
                                              required: true,
                                              trigger: 'blur',
                                              message: '请输入手机号'
                                      }, {
                                              validator: validatePhone,
                                              trigger: 'blur'
                                      }
                                      ],
                              },
                              isshow:false
                        }
                },
                mounted() {
                        new Swiper ('.swiper-container', {
                                loop: true,
                                slidesPerView: 3,
                                observer:true,
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
                                // console.log(res,'商标交易')
                                this.trade=res.data.transaction;
                                this.num2=res.data.count;
                        })
                        this.$api.getidnexsoft()
                        .then(res=>{
                                // console.log(res,'软著交易')
                                this.soft=res.data.transaction;
                                this.num3=res.data.count;
                        })
                        this.$api.getindexnew()
                        .then(res=>{
                                // console.log(res,'新闻中心')
                                this.news=res.data;
                                // this.num3=res.data.count;
                        })
                        this.$api.getydbrief()
                        .then(res=>{
                                // console.log(res,'伊甸网')
                                this.brief=res.data.brief;
                                console.log(res)
                                this.introimage=res.data.images;
                                // this.num3=res.data.count;
                        })
                },
                methods: {
                        tab(index) {
                                this.num = index;
                        },
                        enter(index){
                                if(index<11){
                                     console.log(index)
                                     this.seen=index;
                                }
                        },
                        leave(index){
                                if(index<11){
                                      this.seen='';
                                }
                        },
                        open(index){
                                console.log(index)
                                this.isshow = true
                        },
                        close(){
                                 this.isshow = false
                        },
                        submitForm(fromName){
                                this.$refs[fromName].validate((valid) => {
                                        this.$api.getindexpart(this.login_ruleForm.name,this.login_ruleForm.phone)
                                        .then(res=>{
                                                console.log(res,"合伙人")
                                                if(res.code==1){
                                                       this.isshow = false
                                                        this.$notify({
                                                                 title: '申请成功',
                                                                 message: '申请成功,请等待客服人员与您联系',
                                                                 type: 'success'
                                                               });
                                                }
                                        })
                                })
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
      .index_about{width: 100%;padding-top: 20px;}
      .index_about1{width: 100%;background-image: url(../../../static/img/index/index_intro_bg.png);padding: 30px 0px;padding-top: 0px;}
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
      .index_enterprise{background-image: url(../../../static/img/index/index_enterprise_bgt.jpg);padding: 20px 0px;}
      .index_enterpriseasd{width: 1240px;height: 420px;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
      .index_enterpriseasdwron{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbaon.png);background-size: cover;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 3%;color: #fff;}
      .index_enterpriseasdwron:hover{position: relative;top: -5px;box-shadow: 1px 1px 6px #ccc;}
      .index_enterpriseasdwrtw{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatw.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
      .index_enterpriseasdwrtw:hover{position: relative;top: -5px;box-shadow: 1px 1px 6px #ccc;}
      .index_enterpriseasdwrtr{border: 20px solid #fff;width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatr.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
      .index_enterpriseasdwrtr:hover{position: relative;top: -5px;box-shadow: 1px 1px 6px #ccc; }
      .index_entesdwr{font-size: 30px;font-weight: bold;}
      .index_entesdwrqwas{border: 1px solid #fff;padding: 3%;border-radius: 8px;}
      .index_entwkjk{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_banrtwstw.png);background-size: cover;}
      .index_entwkjkr{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_benarwst.png);background-size: cover;}
      .index_entwkjkas{width: 100%;flex: 1;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 2%;color: #fff;padding: 0 30px;}
      .index_cmetk{font-size: 24px;font-weight: bold;}
      .index_cmetkaqw{border: 1px solid #fff;padding: 10px;font-size: 14px;}

      /* 跳蚤市场 */
      .index_content{display: flex;flex-direction: column;align-items: center;background: #f6f6f6;}
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
      .index_partner{width: 1200px;background-color: #f6f6f6f6;display: flex;justify-content: space-between;align-items: center;flex-direction: row;padding-top: 20px;}
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
      .index_urlw{flex: 1;display: flex;align-content: center;flex-direction: column;}
      .index_urlq{font-size: 16px;padding-top: 20px;padding-bottom: 10px;color: #333;}
      .index_urlz p{line-height: 25px;color: #333;font-size: 12px;}
      .index_urlz p:nth-child(2){word-break: break-all;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow: hidden;;}

      .index_ulxwtwbk{width: 100%;height: 100px;background-color: #fff;display: flex;justify-content: center;align-content: center;flex-direction: row;}
      .index_ulxwtwbklt{width: 50%;height: 100%;display: flex;justify-content: center;align-content: center;flex-direction: column;padding-right: 8px;}
      .newa{display: flex;width: 100%;}
      .newa>div:nth-child(1){width: 30%;}
      .newa>div:nth-child(2){flex: 1;}
      .index_ulxwtwbkrt{height: 100%;display: flex;justify-content: center;align-content: center;flex-direction: column;padding: 15px;}
      .index_ulxwas{width: 100%;height: 70%;display: flex;align-content: center;border-left: 1px solid #ccc;overflow: hidden;font-size: 12px;color: #187fc4;padding-left: 20px;padding-right: 15px;}
      /* .index_ulxwasq{width: 100%;height: 30px;display: flex;justify-content: center;align-content: center;border-left: 1px solid #ccc;overflow: hidden;font-size: 12px;} */
      .idnex_ulxwtas{width: 100%;height: 60%;display: flex;justify-content: center;align-content: center;color: #187fc4;font-size: 18px;}
      .idnex_ulxwtasq{width: 100%;flex: 1;display: flex;justify-content: center;align-content: center;color: #187fc4;font-size: 24px;}
      .index_ulxwsq{width: 100%;height: 150px;display: flex;justify-content: center;align-items: center;}
      .index_ulxwsqlt{width: 40%;height: 70%;margin-left: 5%;background-image: url(../../../static/img/index/index_mset.png);background-size: cover;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;}
      .index_ulxwsqrt{flex: 1;height: 100%;display: flex;justify-content: space-evenly;align-items: flex-start;flex-direction: column;padding: 15px;}
      .index_ulxwsqk{flex: 1;display: flex;justify-content: space-evenly;align-items: flex-start;flex-direction: column;padding: 20px;}
      .index_ulxwsqkz{width: 100%;height: 90px;background-color: #f8f8f8;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
      .index_ulwsaq{width: 100%;height: 45px;display: flex;justify-content: flex-start;align-items: center;}
      .index_ulwsapq{width: 100%;flex: 1;display: flex;justify-content: flex-start;align-items: center;}
      .index_ulxwsqk .index_ulxwsqkz:nth-child(2){margin: 10px 0;}


      .layui_title{display: flex;align-items: center; justify-content: space-between;}
       .layui_title>div{display: flex; align-items: center;}
      .layui_title>div:nth-child(2){width: 30px;height: 30px; }
      .layui_title>div>img{width: 100%;}
      .layui{position: fixed;z-index: 9999;background: rgba(0,0,0,0.2); width: 100%;height: 100%;top:0;
            right:0;
            left:0;
            bottom:0;
            display: flex;
            justify-content: center;
            align-items: center;
            }
      .layui_left{width: 30%;height: 30%;background-color: #fff; padding: 15px ;}
       .layui_cent{text-align: center;width:70%;border-right: 1px solid #ccc;}
       .login_form_item{display: flex; padding: 15px 0;width: 100%;justify-content: center;}
       .el-form-item__label{
                   text-align: center;
                   width: 85px;
       }
       .layui_left_left{
               display: flex;
       }
       .layui_left_rig{
               width: 30%;
       }
       .layui_left_rig{
               display: flex;
               justify-content: center;
               align-items: center;
                flex-direction: column;

       }
       .layui_left_rig>p{
               font-size: 12px;
               color: #ccc;
               padding: 5px 0;
       }
</style>
