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
                                        <v-servicet  :top_data="top_data" :image="image">
                                               <!-- <template v-slot:topall>
                                                        <p>普通担保31-35个工作日，成功率高可加急，版权顾问全程专业服务</p>
                                                        <div class="slot_bord">11111111</div>
                                                        <div class="money">￥<h2>398</h2>元起</div>
                                                </template> -->
                                        </v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                        <v-serviceleft  ></v-serviceleft>
                                                </div>
                                                <div class="cen_right zzdj_cen_right">
                                                       <div class="zzdj_serviceright_top">
                                                              <p v-for="(item,index) in title" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                       </div>
                                                       <div class="zzdj_serviceright_center">
                                                               <!-- 服务详情 -->
                                                               <div class="center_text" id="text_0">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">成果信息</span></p>
                                                                       <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                       <!-- 业务介绍 -->
                                                                        <v-servicesv :svali='svali'></v-servicesv>
                                                               </div>
                                                               <!-- 申请流程 -->
                                                               <div class="center_text" id="text_1">
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">商标信息变更</span></p> -->
                                                                       <!-- <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle> -->
                                                                       <!-- 信息变更-->
                                                                          <v-applicationprocesszero :app="app" :title_all="title_all[1]" :title_text_all="title_text_all[1]"></v-applicationprocesszero>
                                                               </div>
                                                               <!-- 服务保障 -->
                                                               <div class="center_text" id="text_2">
                                                                       <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                        <v-safetyguarantee :safe="safe"></v-safetyguarantee>
                                                               </div>
                                                               <div class="center_text" id="text_3">
                                                                       <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">常见问题</span></p>
                                                                       <!-- 业务介绍  -->
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
        import servicetop from '../../components/servicetop/servicetop_five.vue'
        import serviceleft from '../../components/transfer/transfer_right.vue'
        // import serviceright from '../../components/transfer/transfer_right.vue'
        import safetyguarantee from '../../components/copyright/safetyguarantee.vue'//安全保障
        import servicesv from '../../components/serviceon/servicesv.vue'//成果推荐
        import applicationprocesszero from '../../components/copyright/applicationprocesszero.vue'//申请流程 0个图
         import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        export default{
                name:'service',
                data(){
                        return{
                                 title:['成果推荐','转让流程','安全保障','常见问题'],
                                 title_color:'',
                                 title_all:["成果信息","科技成果转让流程","安全保障","常见问题"],
                                 title_text_all:["","科技是第一生产力，给大家分享最新的科学研究成果","",""],
                                iscolor:0,
                                image:[],
                                id:'',
                                top_data:[],
                                right_data:[],
                                toptext:[],
                                safe:{//安全保障
                                  arr:[
                                      {
                                            src:'../../../static/img/copyright/safe_contract.png',
                                            title:'签署交易合同',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'第三方担保交易',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'提供资料证件',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'极速退款',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'支持线下',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'确认后放款',
                                            text:'请您放心，您提供的资料我们都会对外保'
                                      }

                                  ]

                                },
                                svali:{
                                svat:'商标在注册有效期限内，当其注册人变更其名义、地址、代理人，或者删减指定的商品的，应及时向商标局办理变更手续。企业、事业单位和个人工商业者的地址改变后，若不进行商标变更备案，后续若商标被异议、撤三、无效，都无法及时收到商标局下发的通知，最终可能导致权利的丧失。',
                                // mlist:[{text:' 变更申请人/注册人名义'},{text:' 变更地址'},{text:' 变更集体/证明商标管理规则/集体成员名单'},{text:'变更商标代理人/文件接收人申请'},{text:'删减商品/服务项目'}]
                                },
                                app:{//申请流程 2个图   //申请流程 0个图
                                    src:"../../../static/img/copyright/process.png" ,
                                    top_text:"著作权变更所需资料",
                                    top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                },
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
                      'v-safetyguarantee':safetyguarantee,
                      'v-servicesv':servicesv,
                      'v-applicationprocesszero':applicationprocesszero,
                      'v-publicproblems':publicproblems
                },
                mounted() {
                        this.id = this.$route.query.id
                        this.ispost(this.id)
                },
                methods:{
                        text_click(){
                                console.log(111)
                        },
                        ispost(id){
                                this.$api.gettechnologydetiles(id)
                                .then(res=>{
                                        console.log(res)
                                       this.top_data = res.data
                                       this.image = res.data.images_text
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
