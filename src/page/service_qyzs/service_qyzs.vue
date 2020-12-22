<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>服务中心>企业知识产权贯标</p></div>
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
                                                               <!-- 业务介绍 -->
                                                               <div class="center_text" id="text_0">
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">业务介绍</span></p>
                                                                       <!-- <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle> -->
                                                                          <v-businessintroduction :bus="bus"></v-businessintroduction>
                                                               </div>

                                                               <div class="center_text" id="text_1">
                                                                       <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                       <!-- <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务保障</span></p> -->
                                                                       <!-- 商标变更流程周期  -->
                                                                            <v-applyprocesszero :app="app"></v-applyprocesszero>

                                                               </div>
                                                               <div class="center_text" id="text_2">
                                                                       <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">认定条件</span></p>
                                                                       <!-- 认定条件  -->
                                                                       <v-servicefh></v-servicefh>
                                                               </div>

                                                               <!-- 伊甸优势 -->
                                                               <div class="center_text" id="text_3">
                                                                       <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                       <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">伊甸优势</span></p>
                                                                        <v-servicetw :list="list"></v-servicetw>
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
        import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
        import applicationprocesszero from '../../components/copyright/applicationprocesszero.vue'//申请流程 0个图
        import businessintroduction from '../../components/copyright/businessintroduction.vue'//业务流程
        import condition from '../../components/copyright/condition.vue'//业务流程    
        import servicefh from '../../components/serviceon/servicefh.vue'//服务标准
        import servicetw from '../../components/serviceon/servicetw.vue'//伊甸优势

        export default{
                name:'service',
                data(){
                        return{
                               title:['业务介绍','服务流程','伊甸好处'],
                                                top_data:'',
                                                id:'',
                                                image:[],
                                                right_data:[],
                                                toptext:[],
                                                question:[],
                                                title_color:'',
                                                title_all:["申请主体","企业知识产权贯标服务流程","工作步骤及服务标准","伊甸优势"],
                                                title_text_all:["","流程合理完善、实时跟进 ，注册商标让您更放心！","",""],
                                                txt:'text_',
                                                iscolor:0,
                                                app:{//申请流程 2个图   //申请流程 0个图
                                                        src:"../../../static/img/copyright/process.png" ,

                                                },
                                                list:{//伊甸优势
                                                        arr:[
                                                            {src:'../../../static/img/service/service_ys.png',title:'官方自营',text:'伊甸自营专利申请服务'},
                                                            {src:'../../../static/img/service/service_zy.png',title:'快速专业',text:'同比行业快50%，1对1服务'},
                                                            {src:'../../../static/img/service/service_bz.png',title:'服务保障',text:'品牌保障，全程陪同护航'},
                                                            {src:'../../../static/img/service/service_jy.png',title:'自营平台可交易',text:'无需东奔西跑，伊甸快速帮你完成'},
                                                        ],
                                                },
                                                bus:{//业务流程
                                                    arr:[
                                                            {top:'01',
                                                            text: '提升企业无形资产价值在企业融资上市、投资并购及企业出售等资产运作上获取更大的收益。'},
                                                            {top:'02',
                                                            text: '巩固企业市场竞争地位使企业开发的具有知识产权保护的产品在销售市场上的地位明显增强。'},
                                                            {top:'03',
                                                            text: '提高企业风险应对能力避免或减少企业在产品全生命周期管理过程中出现知识产权或法律风险。'},
                                                            {top:'04',
                                                            text: '增强企业核心竞争力通过提升企业技术创新能力，支撑企业持续良性发展，保持企业活力与动力。'},
                                                            {top:'05',
                                                            text: '企业知识产权管理规范认证情况是科技项目立项、高新技术企业认定、知识产权示范企业和优势企业认定的重要参考条件。'},

                                                    ]
                                                },


                                        }
                                },
                                components:{
                                      'v-servicet':servicetop,
                                      'v-serviceleft':serviceleft,
                                      'v-applyprocesszero':applicationprocesszero,//申请流程 0个图
                                        'v-businessintroduction':businessintroduction,//业务流程
                                        'v-servicerightP':serviceright_proc_t,
                                        'v-servicefh':servicefh,
                                        
                                        'v-servicetw':servicetw
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
        .zzdj_serviceright_top>p{padding: 10px;cursor: pointer;font-size: 15px;}
        .zzdj_serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .zzdj_center_text{padding:10px 20px ;flex: 1;}
        .center_text{padding:10px 20px ;flex: 1;}
        .center_text>p,.center_text>div{padding-bottom: 10px;}
        .center_text>p>span{padding-left: 16px;font-size: 14px;}
         .iscolor{color: #0184FE;}
</style>
