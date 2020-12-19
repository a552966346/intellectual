<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p>交易中心>版权变更</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :qiye="title" :top_data = 'top_data' :image="image">
                                        </v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                        <v-serviceleft :isid="id" @running="running"></v-serviceleft>
                                                </div>
                                                <div class="cen_right">
                                                      <div class="serviceright">
                                                                <div class="serviceright_top">
                                                                        <p v-for="(item,index,) in toptext" :key='item.id' @click="text_click(index)" :class="{iscolor:index==iscolor}" v-html="item"></p>
                                                                </div>
                                                                <div class="serviceright_center">
                                                                        <div class="center_text" :id="txt+index" v-for="(item,index) in right_data" :key="index">
                                                                                <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span v-html="toptext[index]"></span></p>
                                                                                <img :src="right_data[0]" alt="">
                                                                        </div>
                                                                        <v-identifyconditions :nd_data="nd_data"></v-identifyconditions>
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
        import identifyconditions from '../../components/copyright/identifyconditions.vue'
        
        export default{
                name:'service',
                data(){
                        return{
                                title:'企业知识产贯标',
                                top_data:'',
                                id:'',
                                image:[],
                                right_data:[
                                        '../../../static/img/service/service_qygqrd.png'
                                ],
                                toptext:['高企认定好处','服务流程','认定条件','申请资料','常见问题','典型案例'],
                                question:[],
                                advantage:'',
                                txt:'text_',
                                 iscolor:0,
                                nd_data:[
                                        {src:"../../../static/img/copyright/ser01.png" ,
                                        text: '申请书（伊甸城代准备）'},
                                        {src:"../../../static/img/copyright/ser02.png" ,
                                        text: '委托书（伊甸城代准备）'}
                                ]
                                
                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-identifyconditions':identifyconditions
                },
                beforeMount() {
                        this.id = this.$route.query.id
                        this.$nextTick(function(){
                             this.isgets(this.id)
                        })

                },
                mounted() {
                        this.$api.severproblem()
                        .then(res=>{
                                console.log(res)
                               this.advantage = res.data.advantage
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
                                console.log(231231)
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
        .serviceright{width: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #fff;}
        .serviceright_top{display: flex;padding:20px 15px;}
        .serviceright_top>p{padding: 10px;cursor: pointer;}
        .center_text{padding: 0 25px;}
</style>
