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
                                                <div class="cen_right">
                                                        <v-servicer v-on:click_text="text_click" :iscolor='iscolor' :toptext ='toptext' :right_data="right_data"></v-servicer>
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
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import serviceright from '../../components/serviceright/serviceright.vue'
        export default{
                name:'service',
                data(){
                        return{
                                title:'一种下料机',
                                iscolor:0,
                                image:[],
                                id:'',
                                top_data:[],
                                right_data:[],
                                toptext:[],
                                question:[]

                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-servicer':serviceright
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
                                       this.top_data = res.data.data
                                       this.right_data = res.data.data.content.split(',')
                                       this.toptext = res.data.data.contenttitle.split(',')
                                       this.question = res.data.question
                                       this.toptext.push("常见问题","典型案例")
                                       this.image = res.data.data.images_text
                                })
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
</style>
