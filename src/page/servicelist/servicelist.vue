<template>
        <!-- 服务中心列表 -->
        <div class="servicelist">
                <!-- 搜索 -->
                <v-topsearch></v-topsearch>
                <!-- 导航 -->
                <v-navigation></v-navigation>
                <!-- 服务中心内容 -->
                <div class="service_list">
                        <img :src="banner" alt="" />
                        <!-- 分类 -->
                        <trademarkscreen :patenscree="patenscree"></trademarkscreen>

                </div>
                <!-- 底部 -->
                <v-combotttom></v-combotttom>
        </div>

</template>

<script>
        // import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
        import trademarkscreen from '@/components/paycenter/trademarkscreen.vue'
        // import trademarkcon from '@/components/paycenter/trademarkcon.vue'
        // import trademarkbo from '@/components/paycenter/trademarkbo.vue'
        export default {
                components: {
                        // copyrightOrdinary,
                        trademarkscreen,
                        // trademarkcon,
                        // trademarkbo
                },
                data() {
                        return {
                                banner: '../../../static/img/paycenter/trademark_bg.png', //banner图
                                //一级分类
                                patenscree: [],
                        }
               },
                mounted() {
                        this.$api.gettrademarkcondition()
                                .then(res => {
                                         console.log(res)
                                        console.log(res.data)
                                          console.log(typeof(res.data.data_one))
                                        this.patenscree=res.data.data_one;


                                 // this.$set(this.iscolor, 0, this.$route.query.id)
                                 //        this.data_two = res.data.data_two
                          })
                }

        }
</script>

<style scoped>

</style>
