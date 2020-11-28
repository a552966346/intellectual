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
                                        <v-servicet></v-servicet>
                                        <div class="consultation_center_cen">
                                                <div class="cen_left">
                                                       <v-serviceleft></v-serviceleft>
                                                </div>
                                                <div class="cen_right">
                                                        <v-servicer v-on:click_text="text_click"></v-servicer>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import servicetop from '../../components/servicetop/servicetop.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import serviceright from '../../components/serviceright/serviceright.vue'
        export default{
                name:'service',
                data(){
                        return{

                        }
                },
                components:{
                      'v-servicet':servicetop,
                      'v-serviceleft':serviceleft,
                      'v-servicer':serviceright
                },
                methods:{
                        text_click(porp){
                                console.log(porp)
                        }
                }
        }
</script>

<style scoped>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }
        .consultation_all_text{width: 100%;padding: 10px 0;}
        .consultation_all {
                width: 100%;
                margin: 0 auto;
                /* background-color: #187FC4; */
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #f5f5f5;
        }
        .consultation_all_Center{
                width: 1200px;
                background-color: #f5f5f5;
        }
        .consultation_center_cen{
                display: flex;
                width: 100%;
                padding: 20px 0;
        }
        .cen_left{
                /* width: 30%; */
                flex: 1;
                padding-right: 20px;
        }
        .cen_right{
                /* width:70%; */
                flex: 3;
                box-shadow: 1px 1px 10px 2px #ccc;
        }
</style>
