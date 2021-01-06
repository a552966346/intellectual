<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p style="font-size: 15px; color: #666;"><router-link to="/trademarks" style="color: #666;">商标转让</router-link>>{{top_data.name}}</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :title="title" :top_data="top_data" :image="image">
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
                                                        <!-- <v-servicer :toptext ='toptext' :right_data ='right_data' :question ="question"></v-servicer> -->

                                                        <div class="zzdj_serviceright_top">
                                                               <p v-for="(item,index) in title" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                        </div>
                                                        <div class="zzdj_serviceright_center">
                                                                <!-- 服务详情 -->
                                                                <div class="center_text" id="text_0">
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务详情</span></p>
                                                                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                        <v-servicechange></v-servicechange>
                                                                </div>
                                                                <!-- 申请流程 -->
                                                                <div class="center_text" id="text_1">
                                                                        <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                        <!-- 申请流程 2个图 -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                                </div>
                                                                <!-- 服务保障 -->
                                                                <div class="center_text" id="text_2">
                                                                        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p>
                                                                        <!-- 服务保障  123样式 -->
                                                                        <v-serviceassurance :ser="ser"></v-serviceassurance>
                                                                </div>

                                                                <!-- 常见问题 -->
                                                                <div class="center_text" id="text_3">
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
        import servicetop from '../../components/servicetop/servicetop_three.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
    import serviceright from '../../components/serviceright/serviceright.vue'
    import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
    import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
    import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
    import servicechange from '../../components/serviceon/servicechange.vue'//必要性
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
                                         title_all:["著作权变更的必要性？","著作权变更流程","服务保障","常见问题"],
                                         title_text_all:["","流程合理完善，让您的著作权登记更为流畅简单","",""],
                                         txt:'text_',
                                         iscolor:0,
                                         app:{//申请流程 2个图   //申请流程 0个图
                                                 src:require("../../../static/img/copyright/process.png") ,
                                                 top_text:"著作权变更所需资料",
                                                 top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                                 arrl:[
                                                         {text: '申请书（伊甸城代准备）'},
                                                         {text: '委托书（伊甸城代准备）'},
                                                         {text: '作品创造说明 法人作品声明'},
                                                         {text: '作品图样'},
                                                         {text: '申请人身份证正反面复印件'}
                                                 ],
                                                 arrr:[
                                                         {text: '申请书（伊甸城代准备）'},
                                                         {text: '委托书（伊甸城代准备）'},
                                                         {text: '作品创造说明 法人作品声明'},
                                                         {text: '作品图样'},
                                                         {text: '公司营业执照副本复印件'}
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
                                         pub:{//公共问题
                                             arrq:[
                                                     {q: '变更成功后，会下发新的版权证书吗？',
                                                      a: '商标局会下发《版权变更核准证明》，此文件须同原商标证书一并使用，不再下发新的证书。'},
                                                     {q: '办理变更是否会影响版权的有效期？',
                                                      a: '不会。'},
                                                      {q: '版权变更后，仍全国通用吗？',
                                                      a: '是的，版权变更对原使用地域和渠道无影响。'},
                                                     {q: '办理版权变更需要提供哪些材料？',
                                                      a: '如用户的营业执照和组织机构代码证等信息发生变更情况，除了基本的身份信息材料外，还需提供已变更的营业执照和组织机构代码证的复印件给八戒知识产权，并标注需要更改的信息内容。'}

                                             ]

                                         },
                                 }
                         },
                         components:{
                               'v-servicet':servicetop,
                               'v-serviceleft':serviceleft,
                               'v-servicer':serviceright,
                               'v-applyprocess':applicationprocess,//申请流程 2个图
                               'v-publicproblems':publicproblems,//公共问题
                               'v-serviceassurance':serviceassurance,//服务保障  123样式
                               'v-servicechange':servicechange//必要性
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
                        },
                        ispost(id){
                                this.$api.gettrademarkdetiles(id)
                                .then(res=>{
                                      this.top_data = res.data.data
                                      this.right_data = res.data.data.content.split(',')
                                      this.toptext = res.data.data.contenttitle.split(',')
                                      this.question = res.data.question
                                      this.toptext.push("常见问题","典型案例")
                                      this.image = res.data.data.images_text
                                })
                                .catch(res=>{
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
