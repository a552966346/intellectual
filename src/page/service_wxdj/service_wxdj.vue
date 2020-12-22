<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>服务中心>文学作品登记</p></div>
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
                                                        <!-- <v-servicer :toptext ='toptext' :right_data ='right_data' :question ="question"></v-servicer> -->

                                                        <div class="zzdj_serviceright_top">
                                                                 <p v-for="(item,index) in title"  :key=index @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                        </div>
                                                        <div class="zzdj_serviceright_center">
                                                                <!-- 服务详情 -->
                                                                <div class="center_text" id="text_0">
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">服务详情</span></p>
                                                                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                        <v-servicechange :lists="lists"></v-servicechange>
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
                                                                        <!-- 服务保障  表格样式 -->
                                                                        <v-serviceassurancetable :sert="sert"></v-serviceassurancetable>
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
                <div class="zhiding" @click="menu">
                        <img src="../../../static/img/service/zhiding.png" alt="">
                </div>
        </div>
</template>

<script>
        import servicetop from '../../components/servicetop/servicetop.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import serviceright from '../../components/serviceright/serviceright.vue'
        import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
        import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        import serviceassurancetable from '../../components/copyright/serviceassurancetable.vue'//服务保障  表格样式
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
                                title_all:["文学作品登记的必要性？","文学作品登记流程","服务保障","常见问题"],
                                title_text_all:["","流程合理完善，让您的著作权登记更为流畅简单","",""],
                                txt:'text_',
                                iscolor:0,
                                lists:[
                                        {src:'../../../static/img/service/service_chaone.png',text:'APP上架：应用宝、360等主流，应用市场上架必备'},
                                        {src:'../../../static/img/service/service_chatwo.png',text:'项目投标：政府/商业项目，竞标资质条件'},
                                        {src:'../../../static/img/service/service_chatre.png',text:'国家补贴：高企/双软申报，享受百万政府补贴'},
                                        {src:'../../../static/img/service/service_chatfh.png',text:'无形资产：帮助企业增资，递延纳税优惠'},

                                ],
                                app:{//申请流程 2个图   //申请流程 0个图
                                        src:"../../../static/img/copyright/process.png" ,
                                        top_text:"文学作品登记所需资料",
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
                                sert:{//服务保障  表格样式
                                    ltitle: '伊甸（推荐）',
                                    rtitle:'传统（不推荐）',
                                    arrl:[
                                            {text:'办理流程简单，只需要填写个人相关信息，就可坐等拿证'},
                                            {text:'专业客服人员，为你解答所有疑问，全程服务'},
                                            {text:'统一的收费标准，行业低价'},
                                            {text:'办理加急，最快10个工作日拿证'}
                                    ],
                                    arrr:[
                                            {text:'办理流程复杂，身份认证和材料提交都需要自己一手操办'},
                                            {text:'一旦填写的信息或提交的材料不准确会延长办理周期'},
                                            {text:'一般代理机构的平均费用高达1300元以上，且存在隐藏收费'},
                                            {text:'正确提交相关材料后到颁布证书通常需要3-4个月'}
                                    ]
                                },
                                pub:{//公共问题
                                    arrq:[
                                            {q: '哪些作品属于文字作品？',
                                             a: '指散文或诗歌或小说或戏剧等形式的作品，还包括报告文学，传记等。'},
                                            {q: '版权登记之后得到哪些证书？',
                                             a: '版权登记之后，重庆市版权局盖章认证的《作品登记证书》和盖章的作品样本。'},
                                             {q: '作品登记后在哪里可以查看？',
                                             a: '作品登记后可以在重庆市版权局或者重庆市版权保护中心网站进行查看。'},
                                            {q: '办理的作品登记全国通用吗？',
                                             a: '版权登记不限制地区，全国范围内均具有同等效力。'}

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
                        'v-serviceassurancetable':serviceassurancetable,//服务保障  表格样式
                         'v-servicechange':servicechange//必要性


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
                                                this.image = res.data.data.images_text
                                        }else{
                                                alert("暂无数据")
                                        }
                                })
                        },
                        text_click(porp){
                                        this.iscolor = porp
                                       this.$el.querySelector('#text_'+porp).scrollIntoView()
                        },
                        menu(){
                                this.$el.scrollIntoView()
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
         .zhiding{position: absolute;bottom: 100px;right: 100px;}
         .zhiding>img{width: 50px;}
</style>
