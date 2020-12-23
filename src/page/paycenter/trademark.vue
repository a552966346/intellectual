<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div class="copyright_pay">
                        <img :src="banner" alt="" @click="tanchuang" />
                        <!-- 分类 -->
                        <trademarkscreen :type='true' @choosecon="choosecon" @ischange="ischange" @search="search" @choosenull="choosenull"
                                :patenscree="patenscree" :data_two="data_two" :iscolor="iscolor" @delet="delet"></trademarkscreen>
                        <!-- 排序-->
                        <div class="patent_sort">
                                <span :class="{ sortactive: this.sortnumber == 0 }" @click="comsort(0)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{ sortactive: this.sortnumber == 1 }" @click="comsort(1)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{ sortactive: this.sortnumber == 2 }" @click="comsort(2)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>

                        </div>
                        <trademarkcon :iscent="iscent" ></trademarkcon>
                        <div class="copyright_page">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                        :page-size="10" layout="prev, pager, next, jumper" :total="istotal">
                                </el-pagination>
                                <!-- :current-page.sync="currentPage3" -->
                                <!-- 当前业数 -->
                        </div>
                        <trademarkbo :listdata="listdata"></trademarkbo>
                </div>
                <v-combotttom></v-combotttom>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                         <v-tanchuangsb ></v-tanchuangsb>
                </div>
        </div>
</template>

<script>
        import tanchuangsb from '../../components/copyright/tanchuangsb.vue'//商标弹窗
        import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
        import trademarkscreen from '@/components/paycenter/trademarkscreen.vue'
        import trademarkcon from '@/components/paycenter/trademarkcon.vue'
        import trademarkbo from '@/components/paycenter/trademarkbo.vue'
        export default {

                data() {
                        return {
                                sortnumber: 0, //左侧边排序切换
                                listsortnum: 1, //右侧 列表形式排序
                                id: {}, //筛选条件
                                iscent: [],
                                patenscree: [],
                                iscolor: [],
                                data_two: [],
                                bgcolor: 'rgb(230, 92, 92)',
                                istotal: 0,
                                listdata: [],
                                banner: '../../../static/img/paycenter/trademark_bg.png',
                                category_one: '',
                                isshow:false
                        }

                },
                mounted() {
                        this.category_one = this.$route.query.id
                        this.name = this.$route.query.name
                        this.$set(this.id,7,this.name)
                        this.$set(this.id, 0, this.category_one)

                        this.$api.gettrademarkcondition()
                                .then(res => {
                                        this.patenscree=res.data.data_one;
                                        this.$set(this.iscolor, 0, this.$route.query.id)
                                        this.data_two = res.data.data_two
                                })
                        this.$api.gettrademarkadvertisement()
                                .then(res => {
                                        this.banner = res.data.images
                                })
                        this.ispost(this.id)
                },
                methods: {
                        // 排序
                        comsort(index) {
                                this.sortnumber = index
                                if (index == 1) {
                                        this.$set(this.id, "creatime", "desc")
                                        this.$set(this.id, "feeorder", "")
                                        this.ispost(this.id)
                                } else if (index == 2) {
                                        this.$set(this.id, "feeorder", "desc")
                                        this.$set(this.id, "creatime", "")
                                        this.ispost(this.id)
                                } else {
                                        this.ispost()
                                }

                        },
                        //显示弹框
                        tanchuang(){
                          this.isshow = true
                        },
                        //隐藏弹框
                        shows(){
                                this.isshow = false
                        },
                        // listsort(index) {
                        //         this.listsortnum = index
                        // },
                        // 分类筛选
                        choosecon(id) {
                                this.id = id
                                this.ispost(this.id)
                        },
                        // 下拉筛选
                        ischange(id) {
                                this.id = id
                                this.ispost(this.id)
                        },
                        //搜索
                        search(id) {
                                this.id = id
                                this.ispost(id)
                        },
                        // 请求列表id
                        ispost(id) {
                                this.$api.gettrademarklist(id)
                                        .then(res => {
                                                console.log(res)
                                                this.iscent = res.data.lists.data
                                                this.listdata = res.data.youlike
                                                this.istotal = res.data.lists.data.length
                                                for (let i = 0; i < this.istotal; i++) {
                                                        this.iscent[i].bgcolor = this.bgcolor
                                                }
                                                for (let i = 0; i < res.data.youlike.length; i++) {
                                                        this.listdata[i].bgcolor = this.bgcolor
                                                }
                                        })
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
                        // 选择颜色
                        // colorbtn(color, index) {

                        // },
                        handleSizeChange() {

                        },
                        handleCurrentChange() {

                        }

                },
                components: {
                        'v-tanchuangsb':tanchuangsb,//商标弹窗
                        copyrightOrdinary,
                        trademarkscreen,
                        trademarkcon,
                        trademarkbo
                }
        }
</script>

<style scoped>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                text-decoration: none;
        }

        .copyright_pay {
                background: #f6f6f6;
        }

        .patent_sort {
                max-width: 1200px;
                margin: 0 auto;
                height: 50px;
                background-color: #fff;
                color: #666;
                font-size: 14px;
                display: flex;
                align-items: center;
                border: 1px solid #eceff6;
                margin-bottom: 20px;
                position: relative;
        }

        .patent_sort>span {
                width: 135px;
                text-align: center;
                cursor: pointer;
                height: 50px;
                line-height: 50px;
                border-right: 1px solid #f1f1f1;
        }

        .patent_sorticon {
                font-weight: bold;
        }

        .sortactive {
                color: #1580c4;
        }

        .patent_sortright {
                position: absolute;
                right: 0;
                height: 50px;
                display: flex;
        }

        .patent_sortitem {
                width: 100px;
                border-left: 1px solid #f1f1f1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 19px;
        }

        .patent_sortpage {
                width: 100px;
                border-left: 1px solid #f1f1f1;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .patent_sortpage div {
                width: 20px;
                height: 20px;
                border: 1px solid #eeeeee;
                text-align: center;
                cursor: pointer;
        }

        .patent_sortpage div:nth-child(1) {
                margin-right: 5px;
        }

        /* 页数 */
        .copyright_page {
                background: #fff;
                padding: 20px 30px;
                text-align: left;
                max-width: 1200px;
                margin: 10px auto 30px;
                line-height: 29px;
                font-size: 14px;
                color: #999;
        }

        .copyright_page span {
                color: #666;
                font-size: 14px;
                padding-right: 8px;
                height: 31px;
                line-height: 31px;
        }

        .copyright_page button {
                color: #666;
                font-size: 14px;
                padding: 5px 10px;
                margin-right: 8px;
                background: #fff;
                border: 1px solid #f0f0f0;
                outline: none;
        }

        .copyright_page input {
                color: #666;
                font-size: 14px;
                width: 40px;
                height: 31px;
                line-height: 31px;
                border: 1px solid #f0f0f0;
                outline: none;
                padding: 0 5px;
                outline: none;
        }

        .copyright_page button:hover {
                background-color: #3b5791;
                color: #fff;
                outline: none;
        }
        .tanchuang{
              position: fixed;z-index: 9999;background: rgba(0,0,0,0.2); width: 100%;height: 100%;top:0;
            right:0;
            left:0;
            bottom:0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
</style>
