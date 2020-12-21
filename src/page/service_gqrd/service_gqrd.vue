<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>服务中心>企业高企认定</p></div>
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
                                                               <!-- 高企认定 -->
                                                               <div class="center_text" id="text_0">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">高企认定好处</span></p>
                                                                       <!-- <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle> -->
                                                                       <!-- 高企认定好处 -->
                                                                        <v-servicezl :idenimg="idenimg"></v-servicezl>
                                                               </div>

                                                               <div class="center_text" id="text_1">
                                                                       <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                         <v-applyprocessthree :appthree="appthree"></v-applyprocessthree>

                                                               </div>
                                                               <div class="center_text" id="text_2">
                                                                       <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">认定条件</span></p>
                                                                       <!-- 认定条件  -->
                                                                         <v-identifyconditions :iden="iden"></v-identifyconditions>
                                                               </div>

                                                               <!-- 常见问题 -->
                                                               <div class="center_text" id="text_4">
                                                                       <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
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
        import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        import applicationprocessthree from '../../components/copyright/applicationprocessthree.vue'//申请流程 3个图
        import identifyconditions from '../../components/copyright/identifyconditions.vue'//认定条件
        import servicezl from '../../components/serviceon/servicezl.vue'//认定图片
        export default{
                name:'service',
                data(){
                        return{
                                title:['高企认定好处','服务流程','认定条件','常见问题'],
                                                top_data:'',
                                                id:'',
                                                image:[],
                                                right_data:[],
                                                toptext:[],
                                                question:[],
                                                title_color:'',
                                                title_all:["","高企认定流程","认定条件",'常见问题'],
                                                title_text_all:["","流程合理完善、实时跟进 ，注册商标让您更放心！","",""],
                                                txt:'text_',
                                                iscolor:0,
                                                idenimg:{//认定图片
                                                        src:'../../../static/img/service/iden_hc.png'
                                                },
                                                appthree:{//申请流程 3个图
                                                    src:"../../../static/img/copyright/process.png" ,
                                                    top_text:"高企认定所需资料",
                                                    top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                                    arr:[
                                                            {src:"../../../static/img/copyright/company_financial.png" ,
                                                            title:'企业基本资料',
                                                            children:[
                                                                {text: '1、营业执照'},
                                                                {text: '2、组织机构代码和税务登记证'},
                                                                {text: '3、企业职工总体情况说明和科技人员名单'}
                                                            ]},
                                                            {src:"../../../static/img/copyright/company_basic.png" ,
                                                            title:'企业财务资料',
                                                            children:[
                                                                {text: '1、近三个年度的财务会计报告和年度纳税申请表'},
                                                                {text: '2、企业近三个会计年度的财务会计报告'},
                                                            ]},
                                                            {src:"../../../static/img/copyright/company_manage.png" ,
                                                            title:'知识产权及研发管理资料',
                                                            children:[
                                                                {text: '1、高新技术企业认定申请书'},
                                                                {text: '2、企业研发管理文件'},
                                                                {text: '3、企业知识产权证书、科研项目立项证明'}
                                                            ]},

                                                    ]
                                                },
                                                iden:{//认定条件
                                                    arr:[
                                                            {src:"../../../static/img/copyright/ser01.png" ,
                                                            text: '企业申请认定时须注册成立一年以上；'},
                                                            {src:"../../../static/img/copyright/ser02.png" ,
                                                            text: '企业提供自主研发、受让、受赠、并购等方式，获得对其主要产品（服务）在技术上发挥核心支持作用的知识产权的所有权；'},
                                                            {src:"../../../static/img/copyright/ser03.png" ,
                                                            text: '对企业主要产品（服务）发挥核心支持作用的技术属于《国家重点支持的高新技术领域》规定的范围；'},
                                                            {src:"../../../static/img/copyright/ser04.png" ,
                                                            text: '企业从事研发和相关技术创新活动的科技人员占企业当年职工总数的比例不低于10%；'},
                                                            {src:"../../../static/img/copyright/ser05.png" ,
                                                            text: '企业近三个会计年度（实际经营期不满三年的按实际经营时间计算，下同）的研究开发费用总额占同期销售收入总额的比例符合如下要求：<br/>a.最近一年销售收入小于5,000万元（含）的企业，比例不低于5%；<br/>b.最近一年销售收入在5,000万元至2亿元（含）的企业，比例不低于4%；<br/>c.最近一年销售收入在2亿元以上的企业，比例不低于3%；<br/>其中，企业在中国境内发生的研究开发费用总额占全部研究开发费用总额的比例不低于60%；'},
                                                            {src:"../../../static/img/copyright/ser06.png" ,
                                                            text: '近一年高新技术产品（服务）收入占企业同期总收入的比例不低于60%；'},
                                                            {src:"../../../static/img/copyright/ser07.png" ,
                                                            text: '企业创新能力评价应达到相应要求；'},
                                                            {src:"../../../static/img/copyright/ser08.png" ,
                                                            text: '企业申请认定前一年内未发生重大安全、重大质量事故或严重环境违法行为。'},

                                                    ],
                                                },
                                                pub:{//公共问题
                                                    arrq:[
                                                            {q: '高企技术企业的有效期是多久?有效期到了需要复审吗?',
                                                             a: '自颁发高新技术企业认定证书之日起生效，有效期为3年，逾期自动失效，需重新申请认定。'},
                                                            {q: '高企通过后如何办理税收优惠?',
                                                             a: '持省科技部门颁发的高新技术企业证书及复印件，向主管税务机关申请办理免税手续，即可按15％税率进行所得税预缴申报。'},
                                                             {q: '餐饮类企业、贸易型企业可以申报高新技术企业吗?',
                                                             a: '企业是否符合申报条件要严格按照国家相关管理办法，须进行相关技术研发活动，且自主研发的产品为主营收入并拥有知识产权的企业方可申请。'}

                                                    ]

                                                },
                                        }
                                },
                                components:{
                                        'v-servicet':servicetop,
                                        'v-serviceleft':serviceleft,
                                        'v-applyprocessthree':applicationprocessthree,//申请流程 3个图
                                        'v-publicproblems':publicproblems,//公共问题
                                        'v-servicerightP':serviceright_proc_t,
                                        'v-identifyconditions':identifyconditions,
                                        'v-servicezl':servicezl //认定图片
                },
                beforeMount() {
                        this.id = this.$route.query.id
                        this.$nextTick(function(){
                             this.isgets(this.id)
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
                                                console.log(res)
                                                this.top_data = res.data.data
                                                this.right_data = res.data.data.content.split(',')
                                                this.toptext = res.data.data.contenttitle.split(',')
                                                this.question = res.data.question
                                                this.toptext.push("常见问题","典型案例")
                                                this.image = res.data.data.images_text
                                        }else{
                                                alert("暂无数据")
                                        }
                                })
                        },
                        text_click(porp){
                                        this.iscolor = porp
                                       this.$el.querySelector('#text_'+porp).scrollIntoView()
                        }
                }
        }
</script>

<style scoped>
        * {margin:0;padding:0;box-sizing:border-box;}
        .consultation_all_text {width:100%;padding:10px 0;}
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
        .zzdj_serviceright_top>p{padding: 10px;cursor: pointer;}
        .zzdj_serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .zzdj_center_text{padding:10px 20px ;flex: 1;}
        .center_text{padding:10px 20px ;flex: 1;}
        .center_text>p,.center_text>div{padding-bottom: 10px;}
        .center_text>p>span{padding-left: 16px;}
         .iscolor{color: #0184FE;}
</style>
