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
                        <div class="service_site">
                              <!-- 筛选 -->
                              <div class="service_choose">
                                        <trademarkscreen :type='false' :servicelist="servicelist" :iscolor="iscolor"  @choosecon="choosecon"></trademarkscreen>
                              </div>
                                <!-- 条目 -->
                                <div  class="service_all">
                                        <servicetoplist></servicetoplist>
                                </div>
                         </div>

                </div>
                <!-- 底部 -->
                <v-combotttom></v-combotttom>
        </div>

</template>

<script>
        // import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
        import trademarkscreen from '@/components/paycenter/trademarkscreen.vue'
        import servicetoplist from '@/components/servicetoplist/servicetoplist.vue'
        // import trademarkcon from '@/components/paycenter/trademarkcon.vue'
        // import trademarkbo from '@/components/paycenter/trademarkbo.vue'
        export default {
                components: {
                        // copyrightOrdinary,
                        trademarkscreen,
                        servicetoplist,
                        // trademarkcon,
                        // trademarkbo
                },
                data() {
                        return {
                                banner: '../../../static/img/paycenter/trademark_bg.png', //banner图
                                //一级分类
                                // patenscree:[],
                                iscolor:[],
                                // 筛选
                                servicelist:[]

                        }
               },
                mounted(){
                        this.$api.severlist()
                       .then(res => {
                                console.log(res)
                                console.log(res.data)
                               this.servicelist=res.data;
                               // this.$set(this.iscolor, 0, this.$route.query.id)
                               // this.data_two = res.data.data_two
                       })
                },
                methods:{
                        // 分类筛选
                        choosecon(id) {
                                this.id = id
                                this.ispost(this.id)
                        },
                        //清空筛选
                        choosenull() {
                                this.iscolor = []
                                this.screetext = []
                                this.id = {}
                                this.ispost()
                        },
                        //删除条件
                        delet(id){
                                this.ispost(id)
                        },
                }

        }
</script>

<style scoped>
         *{padding: 0;margin: 0;text-decoration: none;box-sizing: border-box;}
         body,html{width: 100%;background-color: #f0f2f5;}
         .servicelist{background-color: #f0f2f5!important;}
         .service_list{/* position: relative; */width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;}
         /* .service_site{position: absolute;top:0;} */
         /* 筛选 */
        .service_choose{width: 1200px;background-color: #fff;margin: 0 auto;}
        .sortactive {color: #1580c4;}
        /* 排序 */
        .patent_sort{height: 50px;color: #666;font-size: 14px;display: flex;align-items: center;border: 1px solid #eceff6;margin-bottom: 20px;}
        .patent_sort>span{ width: 135px;text-align: center;cursor: pointer;height: 50px;line-height: 50px;border-right: 1px solid #f1f1f1;}
        /* 数据 */
        .service_all{width: 1200px;margin: 0 auto;}
</style>
