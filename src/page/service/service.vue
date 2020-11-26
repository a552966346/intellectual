<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div>交易中心>版权变更</div>
                        <!-- 中间内容 -->
                        <div class="consultation_center">
                                <v-service></v-service>
                        </div>
                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import servicetop from '../../components/servicetop/servicetop.vue'
        export default{
                name:'service',
                data(){
                        return{

                        }
                },
                components:{
                      'v-service':servicetop
                }

        }
</script>

<style scoped>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        .consultation_all {
                width: 100%;
                margin: 0 auto;
                /* background-color: #187FC4; */
                display: flex;
                flex-direction: column;
                align-items: center;
        }

</style>
