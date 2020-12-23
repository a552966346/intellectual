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
                                                        <v-hove></v-hove>
                                                </div>
                                                <div class="cen_right zzdj_cen_right">
                                                       <div class="zzdj_serviceright_top">
                                                              <p v-for="(item,index) in title" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                       </div>
                                                       <div class="zzdj_serviceright_center">
                                                               <div class="center_text" id="text_0">
                                                                       <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">成果信息</span></p>
                                                                       <!-- 业务介绍 -->
                                                                        <div v-html="content"></div>
                                                               </div>
                                                               <!-- 服务详情 -->
                                                               <div class="center_text" id="text_0">
                                                                       <v-comtitle :title="title_all[1]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">成果推荐</span></p>
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
                                                                       <v-comtitle :title="title_all[3]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                        <v-safetyguarantee :safe="safe"></v-safetyguarantee>
                                                               </div>
                                                               <div class="center_text" id="text_3">
                                                                       <v-comtitle :title="title_all[4]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
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
         import hove from '../../components/transfer/hove.vue'
        export default{
                name:'service',
                data(){
                        return{
                                 title:['成果详情','成果推荐','转让流程','安全保障','常见问题'],
                                 title_color:'',
                                 title_all:['成果详情',"成果推荐","科技成果转让流程","安全保障","常见问题"],
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
                                            text:'Sign the transaction contract'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'第三方担保交易',
                                            text:'Tripartite secured transactions'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'提供资料证件',
                                            text:'Provide information and certificates'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'极速退款',
                                            text:'Extreme refund'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'支持线下',
                                            text:'Under the support line'
                                      },
                                      {
                                            src:'../../../static/img/copyright/safe_confirm.png',
                                            title:'确认后放款',
                                            text:'loan after confirmation'
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
                                            {q: '什么是评价？',
                                             a: '按照规定  原则、程序和标准，运用科学、可行的方法，对技术成果的成熟度、先进性市场前景'},
                                            {q: '专利申请权和专利权可以转让吗？',
                                             a: `专利权简称“专利”，是发明创造bai人或其权利受让人对特定的发明创造在一定期限内依法享有的独占实施权，
                                             是知识产权的一种。那么专利权能不能转让呢?答案是可以转让。专利转让是拥有专利申请权和专利权人把专利申
                                             请权和专利权让给他人的一种法律行为。《中华人民共和国专利法》规定：专利申请权和专利权可以转让。国有企业转让专利申请权
                                             或者专利权，必须经上级主管机关批准;中国人(或者单位)向外国人转让专利申请权或专利权，必须经国务院有关主管部门批准。转让专利申
                                             请或专利权的当事人必须订立书面合同，经国家知识产权局登记和公告后生效。专利转让包括出售、折股投资等多种形式。书面形式和登记及
                                             公告是专利申请权转让合同生效的法定条件，未签订书面合同或未经国家知识产权局登记和公告的专利权转让不发生法律上的效力。法律依
                                             据：《中华人民共和国专利法》第十条专利申请权和专利权可以转让。中国单位或者个人向外国人、外国企业或者外国其他组织转让专利申
                                             请权或者专利权的，应当依照有关法律、行政法规的规定办理手续。转让专利申请权或者专利权的，当事人应当订立书面合同，并向国务院专
                                             利行政部门登记，由国务院专利行政部门予以公告。专利申请权或者专利权的转让自登记之日起生效。`},
                                             {q: '什么是专利转让？',
                                             a: '专利转让是专利申请权人和专利权人把专利申请权和专利权让给他人的一种法律行为。《中华人民共和国专利法》规定：专利申请权和专利权可以转让。全民所有制单位转让专利申请权或者专利权，必须经上级主管机关批准;中国人(或单位)向外国人转让专利申请权或专利权，必须经国务院有关主管部门批准。转让专利申请或专利权的当事人必须订立书面合同，经专利局登记后生效。专利转让包括出售、折股投资等多种形式。'},

                                    ]

                                },
                                content:''
                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-safetyguarantee':safetyguarantee,
                      'v-servicesv':servicesv,
                      'v-applicationprocesszero':applicationprocesszero,
                      'v-publicproblems':publicproblems,
                      'v-hove':hove
                },
                mounted() {
                        this.id = this.$route.query.id
                        this.$nextTick(function(){
                                this.$el.scrollIntoView()
                                this.ispost(this.id)

                        })
                },
                methods:{
                        text_click(){
                                console.log(111)
                        },
                        ispost(id){
                                this.$api.gettechnologydetiles(id)
                                .then(res=>{
                                        console.log(res)
                                        this.content = res.data.content
                                       this.top_data = res.data
                                       this.image = res.data.images_text
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
