<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>服务中心>软件著作权登记</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :qiye="title" :top_data = 'top_data' :question="question" :image="image" :isShow="true">
                                               <template v-slot:topall>
                                                       <!-- <p>普通担保31-35个工作日，成功率高可加急，版权顾问全程专业服务</p>
                                                        <div class="slot_bord" v-if="question">
                                                                <p v-for="(item,index) in question" :key="index" @click="xuanze(index)" >
                                                                        <span >{{item.feetitle}}</span><span :class="{color:color==index}">￥{{item.fee_cost}}/件</span>
                                                                </p>
                                                        </div>
                                                        <div class="money">￥<h2>{{ nub(top_data.fee,question[color])}}</h2>元起</div> -->
                                                </template>
                                        </v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                        <v-serviceleft :isid="id" @running="running"></v-serviceleft>
                                                </div>
                                                <div class="cen_right zzdj_cen_right">
                                                        <!-- <v-servicer :toptext ='toptext' :right_data ='right_data' :question ="question"></v-servicer> -->
                                                        <div class="zzdj_serviceright_top">
                                                                <p v-for="(item,index) in title"  :key="index" @click="text_click(index)" :class="{iscolor:iscolor==index}">{{item}}</p>
                                                        </div>
                                                        <div class="zzdj_serviceright_center">
                                                                <!-- 软著必要性 -->
                                                                <div class="center_text" id="text_0">
                                                                        <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span style="text-indent: 2em;">软著必要性</span></p>
                                                                        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color'></v-comtitle>
                                                                        <v-servicechange :lists="lists"></v-servicechange>
                                                                </div>
                                                                <!-- 服务流程 -->
                                                                <div class="center_text" id="text_1">
                                                                        <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color'></v-comtitle>
                                                                        <!-- 申请流程 2个图 -->
                                                                        <v-applyprocess :app="app"></v-applyprocess>
                                                                </div>

                                                                <!-- 常见问题 -->
                                                                <div class="center_text" id="text_2">
                                                                        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color'></v-comtitle>
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
        import servicetop from '../../components/servicetop/servicetopt.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import serviceright from '../../components/serviceright/serviceright.vue'
        import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
        import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        import servicechange from '../../components/serviceon/servicechange.vue'//必要性



        export default{
                name:'service',
                data(){
                        return{

                                title:['软著必要性','服务流程','申请材料','常见问题'],
                                top_data:'',
                                id:'',
                                image:[],
                                right_data:[],
                                toptext:[],
                                question:[],
                                title_color:'',
                                title_all:["软件著作权登记的必要性","软件著作权登记流程","常见问题"],
                                title_text_all:["","流程合理完善，让您的著作权登记更为流畅简单",""],
                                txt:'text_',
                                iscolor:0,
                                top_work:[
                                                {name:'3个工作日',fee:'4200'},
                                                {name:'4个工作日',fee:'3500'},
                                                {name:'5个工作日',fee:'2600'},
                                                {name:'6-10个工作日',fee:'2000'},
                                                {name:'11-15个工作日',fee:'1600'},
                                                {name:'16-20个工作日',fee:'1300'},
                                                {name:'21-25个工作日',fee:'1100'},
                                                {name:'26-30个工作日',fee:'900'},
                                                {name:'31-35个工作日',fee:'700'}
                                        ],

                                lists:[
                                        {src:'../../../static/img/service/service_chaone.png',text:'APP上架：应用宝、360等主流，应用市场上架必备'},
                                        {src:'../../../static/img/service/service_chatwo.png',text:'项目投标：政府/商业项目，竞标资质条件'},
                                        {src:'../../../static/img/service/service_chatre.png',text:'国家补贴：高企/双软申报，享受百万政府补贴'},
                                        {src:'../../../static/img/service/service_chatfh.png',text:'无形资产：帮助企业增资，递延纳税优惠'},

                                ],
                                app:{//申请流程 2个图   //申请流程 0个图
                                        src:"../../../static/img/copyright/process.png" ,
                                        top_text:"著作权变更所需资料",
                                        top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
                                        arrl:[
                                                {text: '申请书（伊甸城代准备）'},
                                                {text: '委托书（伊甸城代准备）'},
                                                {text: '作品创造说明 法人作品声明'},
                                                {text: '申请人身份证正反面复印件'}
                                        ],
                                        arrr:[
                                                {text: '申请书（伊甸城代准备）'},
                                                {text: '委托书（伊甸城代准备）'},
                                                {text: '作品创造说明 法人作品声明'},
                                                {text: '公司营业执照副本复印件'}
                                        ],
                                },
                                pub:{//公共问题
                                    arrq:[
                                            {q: '哪些人可以申请软件著作权？',
                                             a: '软件开发委托方、软件公司、开发者个人、拥有独立电商网站经营者以及运营程序控制生产的企业等都可以申请软件著作权。'},
                                            {q: '办理著作权登记有保障吗？',
                                             a: '登记不成功退还代理费用。'},
                                            {q: '软件著作权保护期限是多长？',
                                             a: '自然人的软件著作权，保护期为自然人终生及其死亡后50年；软件是合作开发的，截止于最后死亡的自然人死亡后第50年的12月31日。法人或者其他组织的软件著作权，保护期为软件发表后50年，但软件自开发完成之日起50年内未发表的，不再保护。'},
                                            {q: '软件升级后的版本还要再登记吗？',
                                             a:'软件功能和性能发生重大变化的升级软件，申请人如有需要，还应再登记。'},
                                            {q: '商标和版权注册一样吗？',
                                             a: '不一样，商标是区别同一商品（服务）的不同经营者，并表明商品（服务）质量的商标标识本身，而版权（著作权）是针对文字、音乐、艺术、科学创作等原创的保护，版权其实就是我们常说的著作权，这两者之间的客体完全不同，甚至没有直接的关联性。'}
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
                                                this.question = res.data.data.basic_text
                                                console.log(this.question)
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
        .slot_bord{display: flex;padding: 10px 0;flex-wrap: wrap;}
        .slot_bord>p{margin-right: 5px;margin-bottom: 10px;}
        .slot_bord>p>span{background-color: #f5f5f5;color: #0184FE;font-size: 14px;padding: 5px;border: 1px solid #0184FE;font-size: 12px;}
         .slot_bord>p>span:nth-child(1){border-right: none;background-color: #0184FE;color: #fff;}
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
