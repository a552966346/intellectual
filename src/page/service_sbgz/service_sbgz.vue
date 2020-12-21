<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>交易中心>版权变更</p></div>
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
                                                              <p v-for="(item,index) in title" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                       </div>
                                                       <div class="zzdj_serviceright_center">
                                                               <!-- 服务详情 -->
                                                               <div class="center_text" id="text_0">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">申请主体</span></p>
                                                                       <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                       <!-- 业务介绍 -->
                                                                       <v-servicerightP :ser="ser"></v-servicerightP>
                                                               </div>

                                                               <div class="center_text" id="text_1">
                                                                       <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                               </div>
                                                               <div class="center_text" id="text_2">
                                                                       <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">业务介绍</span></p>
                                                                       <!-- 业务介绍  -->
                                                                        <v-servicefv></v-servicefv>
                                                               </div>
                                                                <div class="center_text" id="text_3">
                                                                        <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务优势</span></p>
                                                                        <!-- 服务优势 -->
                                                                        <v-advantage></v-advantage>
                                                                </div>
                                                               <!-- 常见问题 -->
                                                               <div class="center_text" id="text_4">
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
        import servicefv from '../../components/serviceon/servicefv.vue' //业务介绍
        import advantage from '../../components/serviceon/advantage.vue' //服务优势
        export default{
                name:'service',
                data(){
                        return{
                                title:['申请主体','流程周期','业务介绍','服务优势','常见问题'],
                                                top_data:'',
                                                id:'',
                                                image:[],
                                                right_data:[],
                                                toptext:[],
                                                question:[],
                                                title_color:'',
                                                title_all:["申请主体","商标更正申请流程","业务介绍","服务优势",'常见问题'],
                                                title_text_all:["","流程合理完善、实时跟进 ，注册商标让您更放心！","",""],
                                                txt:'text_',
                                                iscolor:0,
                                                app:{//申请流程 2个图   //申请流程 0个图
                                                        src:"../../../static/img/copyright/process.png" ,
                                                        top_text:"商标更正所需资料",
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
                                                            {q: '商标更正有哪几种情况？',
                                                             a: '商标更正有两种，一种是注册人或代理人的笔误，另一种是商标局在受理商标注册申请文件时，在录入或者扫描过程中将个别内容弄错的。'},
                                                            {q: '办理商标更正的方法？',
                                                             a: '商标更正可以由申请人到商标总局办事大厅（北京市西城区茶马南街1号）办理，也可以委托具有代理资质的商标代理机构代为办理。'},
                                                             {q: '商标更正和商标变更有什么区别？',
                                                             a: '商标更正：是指在商标过程中，由于申请文件文字错误，不涉及商标、申请名称、地址等内容的更改。商标变更：商标核准注册后，商标注册人的名义、地址或其他注册事项发生变更的，应当向商标局申请办理相应变更手续。'},
                                                             {q: '变更成功后，会重新下发新的商标注册证吗？',
                                                             a: '商标局会下发《商标更正核准证明》，此文件须同原商标证书一并使用，不再下发新的证书。'}

                                                    ]

                                                },
                                        }
                                },
                                components:{
                                      'v-servicet':servicetop,
                                      'v-serviceleft':serviceleft,
                                      'v-applyprocess':applicationprocess,//申请流程 2个图
                                        'v-publicproblems':publicproblems,//公共问题
                                        'v-serviceassurance':serviceassurance,//服务保障  123样式
                                        'v-servicerightP':serviceright_proc_t,
                                        'v-servicefv':servicefv,//业务介绍
                                        'v-advantage':advantage,//服务优势
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
