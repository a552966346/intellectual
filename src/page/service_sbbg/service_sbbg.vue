<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p style="font-size: 13px; color: #666;"><router-link to="/servicecenter" style="color: #666;">服务中心</router-link>>商标变更</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :qiye="title" :top_data = 'top_data' :image="image">
                                               <!-- <template v-slot:topall>
                                                        <p>普通担保31-35个工作日，成功率高可加急，版权顾问全程专业服务</p>
                                                        <div class="slot_bord">11111111</div>
                                                        <div class="money">￥<h2>398</h2>元起</div>
                                                </template> -->
                                        </v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                        <v-serviceleft :isid="id" @running="running"></v-serviceleft>
                                                </div>
                                                <div class="cen_right zzdj_cen_right">
                                                       <div class="zzdj_serviceright_top">
                                                              <p v-for="(item,index) in title" :key="index" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                       </div>
                                                       <div class="zzdj_serviceright_center">
                                                               <!-- 服务详情 -->
                                                               <div class="center_text" id="text_0">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">申请主体</span></p>
                                                                       <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                       <!-- 业务介绍 -->
                                                                       <v-servicerightP :ser="ser"></v-servicerightP>
                                                               </div>
                                                               <!-- 申请流程 -->
                                                               <div class="center_text" id="text_1">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">商标信息变更</span></p>
                                                                       <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                       <!-- 信息变更-->
                                                                        <v-servicesx :changli="changli"></v-servicesx>
                                                               </div>
                                                               <!-- 服务保障 -->
                                                               <div class="center_text" id="text_2">
                                                                       <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                               </div>
                                                               <div class="center_text" id="text_3">
                                                                       <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">业务介绍</span></p>
                                                                       <!-- 业务介绍  -->
                                                                        <v-servicesv :svali='svali'></v-servicesv>
                                                               </div>
                                                                <div class="center_text" id="text_4">
                                                                        <v-comtitle :title="title_all[4]" :inform_title='title_text_all[4]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务优势</span></p>
                                                                        <!-- 服务优势 -->
                                                                        <v-advantage :yst="yst"></v-advantage>
                                                                </div>
                                                               <!-- 常见问题 -->
                                                               <div class="center_text" id="text_5">
                                                                       <v-comtitle :title="title_all[5]" :inform_title='title_text_all[5]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">常见问题</span></p>
                                                                       <v-publicproblems :pub="pub"></v-publicproblems>
                                                               </div>
                                                       </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="consultation_bottom">
                  <img src="../../../static/img/index/cooperation_img.png" alt="">
                </div >
                <v-combotttom></v-combotttom>

        </div>
</template>

<script>
       import servicetop from '../../components/servicetop/servicetop.vue'
       import serviceleft from '../../components/serviceleft/serviceleft.vue'
       import serviceright_proc_t from '../../components/serviceright/serviceright_proc_t.vue' //左图右字
       import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
       import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
       import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
       import servicesx from '../../components/serviceon/servicesx.vue'//信息变更
       import servicesv from '../../components/serviceon/servicesv.vue'//业务介绍
       import advantage from '../../components/serviceon/advantage.vue'//服务优势
        export default{
                name:'service',
                data(){
                        return{
                                title:['申请主体','信息变更','流程周期','业务介绍','服务优势','常见问题'],
                                                top_data:'',
                                                id:'',
                                                image:[],
                                                right_data:[],
                                                toptext:[],
                                                question:[],
                                                title_color:'',
                                                title_all:["申请主体","商标信息变更","商标变更流程周期","业务介绍","服务优势",'常见问题'],
                                                title_text_all:["","","",""],
                                                txt:'text_',
                                                iscolor:0,
                                                app:{//申请流程 2个图   //申请流程 0个图
                                                        src:"../../../static/img/copyright/process.png" ,
                                                        top_text:"商标注册申请所需资料",
                                                        top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                                        arrl:[
                                                                {text: '申请书（伊甸城代准备）'},
                                                                {text: '委托书（伊甸城代准备）'},
                                                                {text: '身份证复印件'},
                                                                {text: '商标注册复印件'}
                                                        ],
                                                        arrr:[
                                                                {text: '申请书（伊甸城代准备）'},
                                                                {text: '委托书（伊甸城代准备）'},
                                                                {text: '营业执照复印件'},
                                                                {text: '商标注册复印件'}
                                                        ],
                                                },
                                                ser:{//服务保障  123样式
                                                    arr:[
                                                      {
                                                            src:'../../../static/img/copyright/ser01.png',
                                                            title:'信息安全',
                                                            text:'请您放心，您提供的资料我们都会对外保密，并且在您提供材料前，我们的专利顾问会与您签订一份保密协议，作为伊甸城的一种负责任的书面承诺，让您安心！当然，不管您是否与我们签有保密协议，我们都会对您提供过来的材料进行严格的保密处理，绝不例外！'
                                                      },
                                                      {
                                                            src:'../../../static/img/copyright/ser02.png',
                                                            title:'专属顾问',
                                                            text:'在案件服务过程中，有任何疑问，可发送邮箱：info@edencity.cn，我们将安排专业人员在24小时之内及时处理，对于担保服务，可依据合同条款进行退款。'
                                                      },
                                                      {
                                                            src:'../../../static/img/copyright/ser03.png',
                                                            title:'投诉渠道',
                                                            text:'邮件投诉：发送邮件至info@edencity.cn'
                                                      },
                                                    ]
                                                } ,
                                                pub:{//公共问题
                                                    arrq:[
                                                            {q: '申请商标变更需要注意的事项有哪些？',
                                                             a: '变更商标注册人名义或者地址的，商标注册人应当将其全部注册商标一并变更（包括已上初审公告尚在公告期的商标），没有一并变更的视为放弃变更申请。'},
                                                            {q: '哪种情况下需办理商标变更？',
                                                             a: '变更商标注册人名义、地址或者其他注册事项的，应提交商标变更申请书。'},
                                                             {q: '商标变更成功后，会重新下发商标证书吗？',
                                                             a: '商标局会下发《商标变更核准证明》，此文件须同原商标证书一并使用，不再下发新的证书（但申请人可申请补发商标证书，此时，商标证书的信息为最新版）。'},
                                                             {q: '我有好几个商标，这次只变一个，其他的不变可以吗？',
                                                             a: '不可以。按照商标局的规定，商标变更必须是一并变更。也就是说，有几个商标就需要变更几个商标，否则的话商标局会将变更材料不予受理。'}

                                                    ]

                                                },
                                                //服务优势
                                                yst:[{
                                                        ystid:1,
                                                        ystimg:'../../../static/img/service/advantage_one.png',
                                                        ysttit:'高通过率',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },{
                                                        ystid:2,
                                                        ystimg:'../../../static/img/service/advantage_two.png',
                                                        ysttit:'加速申报无滞后',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },{
                                                        ystid:3,
                                                        ystimg:'../../../static/img/service/advantage_tre.png',
                                                        ysttit:'一站式办理',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },{
                                                        ystid:4,
                                                        ystimg:'../../../static/img/service/advantage_fhh.png',
                                                        ysttit:'自费透明、价格品优',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },{
                                                        ystid:5,
                                                        ystimg:'../../../static/img/service/advantage_fvv.png',
                                                        ysttit:'全程托管，进度可查',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },{
                                                        ystid:6,
                                                        ystimg:'../../../static/img/service/advantage_sxx.png',
                                                        ysttit:'同等重视',
                                                        ystcet:'系统智能查询+专业顾问人工近似查询，帮您提高商标注册成功率'
                                                },] ,
                                                //信息变更
                                                changli:{
                                                contimg:'../../../static/img/service/sever_sbbgimh.png',
                                                list:[{
                                                cboimg:'../../../static/img/service/service_chaone.png',
                                                cbstit:'商标转让',
                                                cbot:'商标权属发生改变，依照商...'
                                                },{
                                                cboimg:'../../../static/img/service/service_chatwo.png',
                                                cbstit:'商标变更',
                                                cbot:'如需变更注册人名义、登记地...'
                                                },{
                                                cboimg:'../../../static/img/service/service_chatre.png',
                                                cbstit:'商标续展',
                                                cbot:'希望继续保有原商标，在商...'
                                                },{
                                                cboimg:'../../../static/img/service/service_chatfh.png',
                                                cbstit:'商标补证',
                                                cbot:'商标注册证遗失或者破损，即...'
                                                }]
                                                },
                                                //业务介绍
                                                svali:{
                                                svat:'商标在注册有效期限内，当其注册人变更其名义、地址、代理人，或者删减指定的商品的，应及时向商标局办理变更手续。企业、事业单位和个人工商业者的地址改变后，若不进行商标变更备案，后续若商标被异议、撤三、无效，都无法及时收到商标局下发的通知，最终可能导致权利的丧失。',
                                                mlist:[{text:' 变更申请人/注册人名义'},{text:' 变更地址'},{text:' 变更集体/证明商标管理规则/集体成员名单'},{text:'变更商标代理人/文件接收人申请'},{text:'删减商品/服务项目'}]
                                                }
                                        }
                                },
                                components:{
                                      'v-servicet':servicetop,
                                      'v-serviceleft':serviceleft,
                                      'v-applyprocess':applicationprocess,//申请流程 2个图
                                        'v-publicproblems':publicproblems,//公共问题
                                        'v-serviceassurance':serviceassurance,//服务保障  123样式
                                        'v-servicerightP':serviceright_proc_t,
                                        'v-servicesx':servicesx,//商标变更
                                        'v-servicesv':servicesv,//业务介绍
                                        'v-advantage':advantage // 服务优势

                                },
                beforeMount() {
                        this.id = this.$route.query.id
                        this.$nextTick(function(){
                             this.isgets(this.id)
                             this.$el.scrollIntoView()
                        })

                },
                methods:{
                        running(){
                               this.id = this.$route.query.id
                                this.isgets(this.id)
                        },
                        isgets(id){
                                this.$api.severdetiles(id)
                                .then(res=>{
                                        if(res.code){
                                                // console.log(res)
                                                this.top_data = res.data.data
                                                this.image = res.data.data.images_text
                                        }else{
                                                alert("暂无数据")
                                        }
                                })
                                .catch(res=>{
                                        console.log(res)
                                })
                        },
                        text_click(porp){
                                        this.iscolor = porp
                                       this.$el.querySelector('#text_'+porp).scrollIntoView()
                        },

                }
        }
</script>

<style scoped>
        * {margin:0;padding:0;box-sizing:border-box;}
        .consultation_all_text {width:100%;padding:10px 0;font-size: 15px;}
        .consultation_all {width:100%;margin:0 auto;display:flex;flex-direction:column;align-items:center;background-color:#f5f5f5;}
        .consultation_all_Center {width:1200px;background-color:#f5f5f5;}
        .consultation_center_cen {display:flex;width:100%;padding:20px 0;}
        .cen_left {flex:1;padding-right:20px;}
        .cen_right { flex:3;box-shadow:1px 1px 10px 2px #ccc;}
        .consultation_bottom{width: 100%;}
        .consultation_bottom>img{width: 100%;}
        .money{display: flex;align-items: center;color: #D30102;}
        .zzdj_cen_right{display: flex;flex-direction: column;overflow: hidden;background-color: #fff;}
        .zzdj_serviceright_top{display: flex;padding:20px 15px;}
        .zzdj_serviceright_top>p{padding: 10px;cursor: pointer;font-size: 15px;}
        .zzdj_serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .zzdj_center_text{padding:10px 20px ;flex: 1;}
        .center_text{padding:10px 20px ;flex: 1;}
        .center_text>p,.center_text>div{padding-bottom: 10px;}
        .center_text>p>span{padding-left: 16px;font-size: 14px;}
         .iscolor{color: #0184FE;}

</style>
