<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>服务中心>PCT国际专利申请</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :qiye="title" :top_data = 'top_data' :image="image" :nub ="nub">

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
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">PCT申请</span></p>
                                                                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                        <v-servicezl :idenimg='idenimg'></v-servicezl>
                                                                        <v-pctapply :arrlist='arrlist'></v-pctapply>
                                                                        <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                        <v-advantages></v-advantages>
                                                                        <v-comtitle id="text_1" :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
                                                                        <v-servicetr :mulist="mulist"></v-servicetr>
                                                                </div>
                                                                <!-- 申请流程 -->
                                                                <div class="center_text" id="text_2">
                                                                        <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color'></v-comtitle>
                                                                        <!-- 申请流程 2个图 -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                                </div>
                                                                <!-- 伊甸优势 -->
                                                                <div class="center_text" id="text_3">
                                                                        <v-comtitle :title="title_all[4]" :inform_title='title_text_all[4]' :color='title_color'></v-comtitle>
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">伊甸优势</span></p>
                                                                        <v-servicetw :list="list"></v-servicetw>
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
        import servicetop from '../../components/servicetop/servicetop_four.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
        import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        import servicetw from '../../components/serviceon/servicetw.vue' //伊甸优势
        import servicetr from '../../components/serviceon/servicetr.vue' //pc优势
        import servicezl from '../../components/serviceon/servicezl.vue' //申请
         import pctapply from '../../components/serviceon/pctapply.vue' //pct申请
        import advantages from '../../components/serviceon/advantages.vue' //合作条约利弊




        export default{
                name:'service',
                data(){
                        return{
                                title:['PCT申请','PCT优势','申请材料','伊甸优势','常见问题'],
                                top_data:'',
                                id:'',
                                image:[],
                                right_data:[],
                                toptext:[],
                                question:[],
                                title_color:'',
                                title_all:["PCT申请","通过专利合作条约（PCT），向指定国家递交专利申请","PCT优势","国际专利申请流程","伊甸优势","常见问题"],
                                title_text_all:["","","","流程合理完善，让您的著作权登记更为流畅简单","",""],
                                txt:'text_',
                                iscolor:0,
                                idenimg:{
                                        src:require('../../../static/img/service/severic_zlon.png')
                                },
                                list:{//伊甸优势
                                        arr:[
                                                            {src:require('../../../static/img/service/service_ys.png'),title:'官方自营',text:'伊甸自营专利申请服务'},
                                                            {src:require('../../../static/img/service/service_zy.png'),title:'快速专业',text:'同比行业快50%，1对1服务'},
                                                            {src:require('../../../static/img/service/service_bz.png'),title:'服务保障',text:'品牌保障，全程陪同护航'},
                                                            {src:require('../../../static/img/service/service_jy.png'),title:'自营平台可交易',text:'无需东奔西跑，伊甸快速帮你完成'},
                                        ],
                                },
                                pub:{//公共问题
                                        arrq:[
                                                {q: 'PCT和单独国家申请有哪些区别？',
                                                a: '<img src="../../../static/img/copyright/problem.png" alt="">'},
                                                {q: 'PCT和单独 国家申请如何选择？',
                                                a: '如果申请的国家比较少，3个国家以内，单独国家申请比较适合，费用也会少一些，但是时间也比较短，而PCT时间比较宽松，申请人可以利用检索和初步审查程序对该专利申请获得专利侵权可能性进行初步评估，并结合技术发展情况和市场前景等因素确定是否要等到具体国家去申请，一直到30个月的时候再做决定都可以，在申请的流程中可以充分做市场分析，看要进入哪个国家，而且翻译的时候比较宽松，准确度会高一些。'},
                                                {q: '申请美国专利需要准备哪些文件？',
                                                a: `（1）巴黎公约途径：在中国申请后，在第一在先专利申请日（即优先权日）起12个月届满前,
                                                向美国知识产权局提出美国专利申请，可以享受优先权的待遇，需要提交优先权证明文件。申请所需文件及
                                                信息：申请文件：包括说明书、权利要求书、说明书附图、摘要、摘要附图；申请信息：申请人及发明人中英文名称
                                                姓名、地址及邮编，申请国家，联系人等；优先权信息；委托书；（2）PCT途径：根据PCT的规定，申请人可以通过PCT途
                                                径递交国际申请，指定向全球几乎所有国家申请专利，即在中国在先申请的申请日（优先权日）起12个月内向中国国家知识产
                                                权局提出PCT国际申请，在自优先权日起30个月内向美国知识产权局提出进入申请。申请所需文件：PCT公开文件；国际检索报告
                                                ；PCT阶段的修改文件（如有）；委托书。`},
                                        ]

                                },
                                app:{//申请流程 2个图   //申请流程 0个图
                                        src:require("../../../static/img/copyright/process.png") ,
                                        top_text:"国际专利申请所需资料",
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
                                //pc优势
                                mulist:[{
                                        src:require('../../../static/img/service/service_sqon01.png'),
                                        text:'享受政府支持：个地方政府均大力出台相应政策，对专利申请者进行奖励、补助或者其他支持，最高可享数十万。'
                                        },{
                                        src:require('../../../static/img/service/service_sqon02.png'),
                                        text:'强效保护研发成果:防止侵权，保护核心技术，构筑核心竞争力。专利权保护具有严格的地域性。'
                                        },{
                                        src:require('../../../static/img/service/service_sqon03.png'),
                                        text:'抢占海外市场:需出口产品应尽早进行海外专利布局，确保拥有自主知识产权，比竞争对手领先海外市场，保障国际参展。'
                                        },{
                                        src:require('../../../static/img/service/service_sqon04.png'),
                                        text:'授信贷款贏取收益:无形资产，可通过授权许可等多种方式变现，最高可获得银行授信贷款500万。'
                                        }],
                                 //PCT申请
                                arrlist:[{title:'什么是PCT途径？',con:'专利合作条约（PTC）是专利领域的额一项国际合作条约，允许申请人根据该条约提交一份专利申请，即可同时在该条约148个成员国中要求对其发明进行保护。'},
                                        {title:'什么是PCT体系？',con:'1.PCT体系是专利“申请”体系而非专利“授予”体系。不存在“国际专利”，只有国际申请。'}
                                ],   
                                nub:''

                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-applyprocess':applicationprocess,//申请流程 2个图
                      'v-publicproblems':publicproblems,//公共问题
                      'v-servicetw':servicetw,//伊甸优势
                      'v-servicetr':servicetr,//pc优势
                      'v-servicezl':servicezl,//申请
                      'v-advantages':advantages,
                      'v-pctapply':pctapply, //pct申请


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
                                                this.nub =Number(res.data.data.fee) +Number(res.data.data.know_fee) + Number(res.data.data.know_fee_remark)
                                                this.image = res.data.data.images_text
                                        }else{
                                                alert("暂无数据")
                                        }
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
        .zhiding{position: absolute;bottom: 100px;right: 100px;}
        .zhiding>img{width: 50px;}
</style>
