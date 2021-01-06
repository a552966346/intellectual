<template>
        <div id="all">
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p style="font-size: 13px; color: #666;"><router-link to="/servicecenter" style="color: #666;">服务中心</router-link>>发明专利</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :qiye="title" :top_data = 'top_data' @tip="tip"  :image="image" :nub="nub">
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
                                                              <p v-for="(item,index) in title" @click="text_click(index)" :class="{iscolor:iscolor==index}" :key="index">{{item}}</p>
                                                       </div>
                                                        <div class="zzdj_serviceright_center">
                                                                <!-- 服务详情 -->
                                                                <div class="center_text" id="text_0">
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务详情</span></p>
                                                                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                        <v-servicezl :idenimg="idenimg"></v-servicezl>
                                                                        <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                        <v-apply :nawqli="nawqli"></v-apply>
                                                                        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                        <v-benefit :mrt="mrt"></v-benefit>
                                                                        <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                        <v-whychoose :why="why"></v-whychoose>
                                                                </div>
                                                                <!-- 申请流程 -->
                                                                <div class="center_text"  id="text_1">
                                                                        <v-comtitle :title="title_all[4]" :inform_title='title_text_all[4]' :color='title_color'></v-comtitle>
                                                                        <!-- 申请流程 2个图 -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                                </div>
                                                                <!-- 服务保障 -->
                                                                <div class="center_text" id="text_2">
                                                                        <v-comtitle :title="title_all[5]" :inform_title='title_text_all[5]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p>
                                                                        <!-- 服务保障  123样式 -->
                                                                        <v-serviceassurance :ser="ser"></v-serviceassurance>
                                                                </div>

                                                                <!-- 常见问题 -->
                                                                <div class="center_text" id="text_3">
                                                                        <v-comtitle :title="title_all[6]" :inform_title='title_text_all[6]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">常见问题</span></p>
                                                                        <v-serviceon :met="met"></v-serviceon>
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
                <div class="tanchuang" v-show="isshowtwo" @click.self="showstwo">
                        <v-tip @showstwo="showstwo" @close="close"></v-tip>
                </div>
                <v-combotttom></v-combotttom>

        </div>
</template>

<script>
        import servicetop from '../../components/servicetop/servicetop_two.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
        import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
        import serviceon from '../../components/serviceon/serviceon.vue'//常见问题
        import servicezl from '../../components/serviceon/servicezl.vue'//专利
        import apply from '../../components/serviceon/apply.vue'//申请
        import benefit from '../../components/serviceon/benefit.vue'//好处
        import whychoose from '../../components/copyright/whychoose.vue'//选择伊甸城
        import tip from '../../components/serviceon/tip.vue'//提示

        export default{
                name:'service',
                data(){
                        return{
                                title:['服务详情','申请流程','服务保障','常见问题'],
                                top_data:'',
                                id:'',
                                image:[],
                                right_data:[],
                                toptext:[],
                                question:[],
                                title_color:'',
                                title_all:["什么是发明专利？","哪些发明创造可以申请发明专利？","发明专利能给带来什么好处?","为什么选择伊甸城？","发明专利申请流程","服务保障","常见问题"],
                                title_text_all:["","","","","流程合理完善，让您的著作权登记更为流畅简单","",""],
                                txt:'text_',
                                nub:'',
                                iscolor:0,
                                isshowtwo:false,
                                //选择伊甸城 表格
                                why:{
                                        ltitle:'服务清单',
                                        rtitle:'服务内容',
                                        arrl:[
                                                {text:'授权保险'},
                                                {text:'技术交底指导'},
                                                {text:'专利检索'},
                                                {text:'费减指导'},
                                                {text:'专利文件撰写'},
                                                {text:'平面画图（修图）'},
                                                {text:'专利质量审查'},
                                                {text:'客户一票否决权'},
                                                {text:'电子递交国知局'},
                                                {text:'审查意见答复'},
                                                {text:'专利证书寄送'},
                                                {text:'专利年费监控'},
                                        ],
                                        arrr:[
                                                {text:'在伊甸城申请专利并选择“授权保险”保障服务，伊甸城即赠送您一份专利保险，专利未获得授权可按比例赔付专利服务费。'},
                                                {text:'专利顾问会与客户详细沟通交底材料的填写，不用担心方案描述不清楚'},
                                                {text:'专利顾问将对您的方案进行技术检索，有效降低申请风险'},
                                                {text:'节约专利费用，最高可省3315元'},
                                                {text:'本领域专利老师撰稿，提升授权率'},
                                                {text:'全面展示产品图形，满足附图要求'},
                                                {text:'专业审查人员把关，不符合审查标准的专利文件一律退回重写'},
                                                {text:'客户对我们的工作成果进行确认，不满意，我们重头再来'},
                                                {text:'极速提交，1-2个工作日拿到受理通知书'},
                                                {text:'解答审查员的疑问，大大提高专利的申请成功率'},
                                                {text:'EMS安全速递，1-3天送证上门'},
                                                {text:'防止未缴纳年费导致专利失效'},
                                        ]

                                },
                                app:{//申请流程 2个图   //申请流程 0个图
                                        src:require("../../../static/img/copyright/process.png") ,
                                        top_text:"发明专利申请所需资料",
                                        top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                        arrl:[
                                                {text: '专利申请书（伊甸城代准备）'},
                                                {text: '专利委托书（伊甸城代准备）'},
                                                {text: '身份证正反面复印件'},
                                                {text: '发明人信息'},
                                                {text: '技术交底书'}
                                        ],
                                        arrr:[
                                                {text: '专利申请书（伊甸城代准备）'},
                                                {text: '专利委托书（伊甸城代准备）'},
                                                {text: '营业执照副本复印件'},
                                                {text: '发明人信息'},
                                                {text: '技术交底书'}
                                        ],
                                },
                                ser:{//服务保障  123样式
                                    arr:[
                                      {
                                            src:require('../../../static/img/copyright/ser01.png'),
                                            title:'信息安全',
                                            text:'请您放心，您提供的资料我们都会对外保密，并且在您提供材料前，我们的专利顾问会与您签订一份保密协议，作为伊甸城的一种负责任的书面承诺，让您安心！当然，不管您是否与我们签有保密协议，我们都会对您提供过来的材料进行严格的保密处理，绝不例外！'
                                      },
                                      {
                                            src:require('../../../static/img/copyright/ser02.png'),
                                            title:'专属顾问',
                                            text:'在案件服务过程中，有任何疑问，可发送邮箱：info@edencity.cn，我们将安排专业人员在24小时之内及时处理，对于担保服务，可依据合同条款进行退款。'
                                      },
                                      {
                                            src:require('../../../static/img/copyright/ser03.png'),
                                            title:'投诉渠道',
                                            text:'邮件投诉：发送邮件至info@edencity.cn'
                                      },
                                    ]
                                } ,
                                //常见问题
                                met:{
                                mess:[require('../../../static/img/service/serviceright_jiantou.png'),'常见问题'],
                                feli:[
                                        {id:1,ming:require('../../../static/img/service/service_icon.png'),mitt:'实用新型和发明专利的区别在哪里？',mitim:require('../../../static/img/service/service_ictw.png'),felida:[
                                        {text:'第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；'},
                                        {text:'第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'}
                                        ]},
                                        {id:2,ming:require('../../../static/img/service/service_icon.png'),mitt:'实用新型的授权条件',mitim:require('../../../static/img/service/service_ictw.png'),felida:[
                                        {text:'第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；'},
                                        {text:'第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'},
                                        {text:'第三，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'}
                                        ]}
                                ],
                                },
                                //发明专利 图片
                                idenimg:{src:require("../../../static/img/service/severic_zlon.png")},
                                //申请发明
                                nawqli:[{
                                nawqtit:' 主要分为产品发明（如机器、仪器、设备和用具等）和方法发明（制造方法、工艺流程等）两大类。',
                                nawqlist:[{cttimg:require('../../../static/img/service/service_ys.png'),ttle:'产品名称',cbct:'专利法上的产品，可以是一个独立、完整的产品，也可以是一个设备或仪器中的零部件。',cbctft:'举例：机器、设备以及各种用品材料，如化学物质、组合等具有新用途的产品'},
                                                {cttimg:require('../../../static/img/service/service_ys.png'),ttle:'方法发明',cbct:'指人们为制造产品或解决某个技术课题而研究开发出来的操作方法，制造方法以及工艺流程等技术方案。方法可以是由一系列步骤构成的一个完整过程，也可以是一个步骤。',cbctft:'举例：制造方法，即制造特定产品的方法；以及其他方法，如测量方法、分析方法、通信方法、药品配方等;产品的新用途。'}
                                ]
                                }],
                                //好处
                                mrt:[{
                                imga:require('../../../static/img/service/benefit_ismg.png'),
                                txt:'个人'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg2.jpg'),
                                txt:'保护智慧结晶'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg3.jpg'),
                                txt:'维权证明'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg4.jpg'),
                                txt:'技术入股'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg5.jpg'),
                                txt:'评职评优'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg6.jpg'),
                                txt:'升学晋升'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg7.jpg'),
                                txt:'落户加分'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg8.jpg'),
                                txt:'企业'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg9.jpg'),
                                txt:'保护核心技术'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg10.jpg'),
                                txt:'抢占市场'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg11.jpg'),
                                txt:'评定高企'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg12.jpg'),
                                txt:'授权信贷'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg13.jpg'),
                                txt:'税收减免'
                                },{
                                imga:require('../../../static/img/service/benefit_ismg14.jpg'),
                                txt:'政策扶持'
                                }],


                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-applyprocess':applicationprocess,//申请流程 2个图
                        'v-serviceassurance':serviceassurance,//服务保障  123样式
                        'v-serviceon':serviceon,//常见问题
                        'v-servicezl':servicezl,//专利
                        'v-apply':apply,//申请
                        'v-benefit':benefit,//好处
                        'v-whychoose':whychoose,//选择伊甸城
                        'v-tip':tip,
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
                                                this.top_data = res.data.data
                                                this.nub =Number(res.data.data.fee) +Number(res.data.data.know_fee) + Number(res.data.data.serve_fee)
                                                this.image = res.data.data.images_text
                                        }else{
                                                alert("暂无数据")
                                        }
                                })
                                .catch(res=>{
                                })
                        },
                        text_click(porp){
                                this.iscolor = porp;
                                this.$el.querySelector('#text_'+porp).scrollIntoView()
                        },
                        tip(){
                                this.isshowtwo = true
                        },
                        showstwo(){
                                this.isshowtwo = false
                        },
                        close(){
                                this.isshowtwo = false
                        }

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
        .zzdj_serviceright_top{display: flex;padding:20px 15px;font-size: 15px;}
        .zzdj_serviceright_top>p{padding: 10px;cursor: pointer;}
        .zzdj_serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .zzdj_center_text{padding:10px 20px ;flex: 1;}
        .center_text{padding:10px 20px ;flex: 1;}
        .center_text>p,.center_text>div{padding-bottom: 10px;}
        .center_text>p>span{padding-left: 16px;font-size: 14px;}
        .iscolor{color: #0184FE;}

</style>
