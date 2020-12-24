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
                                        <trademarkscreen :type='false' :servicelist="severcondition" :iscolor="iscolor"  @choosecon="choosecon" @choosenull="choosenull" @search="search"></trademarkscreen>
                                        <div class="patent_sort">
                                                                <span :class="{ sortactive: this.sortnumber == 0 }" @click="comsort(0)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                                                <span :class="{ sortactive: this.sortnumber == 1 }" @click="comsort(1)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
                                                                <span :class="{ sortactive: this.sortnumber == 2 }" @click="comsort(2)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>

                                        </div>
                              </div>
                                <!-- 条目 -->
                                <div  class="service_all">
                                        <!-- 数据 -->
                                        <servicetoplist :listdata="listdata"></servicetoplist>
                                        <!-- 分页 -->
                                        <div class="copyright_page">
                                                <!-- <el-pagination
                                                      @size-change="handleSizeChange"
                                                      @current-change="handleCurrentChange"
                                                      :current-page.sync="currentPage3"
                                                      :page-size="100"
                                                      layout="prev, pager, next, jumper"
                                                      :total="1000">
                                                    </el-pagination> -->

                                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page.sync="currentPage"
                                                        :page-size="pagesize" layout="prev, pager, next, jumper" :total="total">
                                                </el-pagination>
                                                <!-- :current-page.sync="currentPage3" -->
                                                <!-- 当前业数 -->
                                        </div>
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
                                sortnumber: 0, //左侧边排序切换
                                banner: '../../../static/img/paycenter/trademark_bg.png', //banner图
                                //一级分类
                                // patenscree:[],
                                iscolor:[],
                                // // 分页
                                // istotal: 0,
                                // 筛选
                                severcondition:[],
                                id: {}, //筛选条件
                                category_one: '',//id
                                listdata:[],//列表数据
                                // 分页
                                currentPage: 1,
                                pagesize: 0,
                                total:0
                        }
               },
                mounted(){
                        this.category_one = this.$route.query.id
                        this.$set(this.id, "category_one", this.category_one)
                        // 筛选条件
                        this.$api.severcondition()
                       .then(res => {
                                console.log(res)
                                console.log(res.data)
                               this.severcondition=res.data;


                       })
                       this.ispost(this.id)
                },
                methods:{
                        // 排序
                        comsort(index) {
                                this.sortnumber = index
                                if (index == 1) {
                                        this.$set(this.id, 4, "desc")
                                        this.$set(this.id, 5, "")
                                        this.ispost(this.id)
                                } else if (index == 2) {
                                        this.$set(this.id, 5, "desc")
                                        this.$set(this.id, 4, "")
                                        this.ispost(this.id)
                                } else {
                                        this.ispost()
                                }

                        },
                        // 请求列表id
                        ispost(id) {
                                // 列表数据
                                this.$api.severlist(id)
                                .then(res => {

                                        console.log(res)
                                        // this.iscent = res.data.lists.data
                                        this.listdata = res.data.data;
                                        this.total=res.data.total;
                                        this.currentPage=res.data.current_page;
                                        this.pagesize=res.data.per_page;
                                        // 分页
                                        // this.istotal = res.data.lists.data.length
                                        // for (let i = 0; i < this.istotal; i++) {
                                        //         this.iscent[i].bgcolor = this.bgcolor
                                        // }
                                        // for (let i = 0; i < res.data.youlike.length; i++) {
                                        //         this.listdata[i].bgcolor = this.bgcolor
                                        // }
                                        // console.log(this.iscent)
                                })
                        },
                        // 分类筛选
                        choosecon(id) {
                                this.id = id
                                this.ispost(this.id)
                        },
                        //搜索
                        search(id) {
                                this.id = id
                                console.log(this.id)
                                this.ispost(id)
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
                        // 分页
                         handleSizeChange(val) {
                            console.log(`每页 ${val} 条`);

                         },
                         handleCurrentChange(val) {
                             // 输入页数
                             console.log(`当前页: ${val}`);
                             this.id[6] = val
                             this.ispost(this.id)
                         }
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
        /* 分页 */
        .copyright_page{background-color: #fff;display: flex;justify-content: center;padding: 10px 0px;margin-bottom: 20px;}
</style>
