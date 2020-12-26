<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="consultation_all_Center">
                                <div class="consultation_all_text"><p style="font-size: 13px; color: #666;"><router-link to="/servicecenter" style="color: #666;">服务中心</router-link>>版权变更</p></div>
                                <!-- 中间内容 -->
                                <div class="consultation_center">
                                        <v-servicet :title="title" :top_data="top_data">
                                               <!-- <template v-slot:topall>
                                                        <p>普通担保31-35个工作日，成功率高可加急，版权顾问全程专业服务</p>
                                                        <div class="slot_bord">11111111</div>
                                                        <div class="money">￥<h2>398</h2>元起</div>
                                                </template> -->
                                        </v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                        <v-serviceleft></v-serviceleft>
                                                </div>
                                                <div class="cen_right">
                                                        <v-servicer v-on:click_text="text_click" :iscolor='iscolor' :toptext ='toptext'></v-servicer>
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
        import serviceright from '../../components/serviceright/serviceright.vue'
        export default{
                name:'service',
                data(){
                        return{
                                title:'PCT申请',
                                top_data:'',
                                iscolor:0,
                                toptext:[{text:'高企认定好处',id:1,nub:0},{text:'服务流程',id:2,nub:1},{text:'认定条件',id:3,nub:0},{text:'申请资料',id:4,nub:0},{text:'常见问题',id:5,nub:0},{text:'典型案列',id:6,nub:0}],
                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-servicer':serviceright
                },
                beforeMount() {
                        let id = this.$route.query.id
                        this.$nextTick(function(){
                                this.$api.severcategory()
                                this.$api.severdetiles(id)
                                .then(res=>{
                                        console.log(res.data)
                                        this.top_data = res.data
                                })
                        })
                },
                methods:{
                        text_click(){
                                console.log(111)
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
