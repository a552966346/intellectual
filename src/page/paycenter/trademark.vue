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
                                <!-- <div class="patent_sortright">
          <div :class="{patent_sortitem: true,sortactive: this.listsortnum == 1,}" @click="listsort(1)">
            <i class="el-icon-s-grid"></i>
          </div>
          <div :class="{patent_sortitem: true,sortactive: this.listsortnum == 2,}" @click="listsort(2)">
            <i class="el-icon-s-unfold"></i>
          </div>
          <div class="patent_sortpage">
            <div><i class="el-icon-arrow-left"></i></div>
            <div><i class="el-icon-arrow-right"></i></div>
          </div>
        </div> -->
                        </div>
                        <trademarkcon :iscent="iscent" @colorbtn="colorbtn"></trademarkcon>
                        <div class="copyright_page">
                               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page.sync="currentPage"
                                       :page-size="pagesize" layout="prev, pager, next, jumper" :total="total">
                               </el-pagination>
                                <!-- :current-page.sync="currentPage3" -->
                                <!-- 当前业数 -->
                        </div>
                        <trademarkbo :listdata="listdata"></trademarkbo>
                </div>
                <v-combotttom></v-combotttom>
                <div class="tanchuang" v-show="isshow" @click.self="shows" >
                         <v-tanchuangsb @close="close" @fabu="fabu"></v-tanchuangsb>
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
                                listdata: [],
                                banner: '../../../static/img/paycenter/trademark_bg.png',
                                category_one: '',
                                isshow:false,
                                name:'',
                                // 分页
                                currentPage: 1,
                                pagesize: 0,
                                total:0,
                                data:[]
                        }

                },
                mounted() {
                        this.category_one = this.$route.query.id
                        this.name = this.$route.query.name
                        this.$set(this.id, 7, this.name)
                        this.$set(this.id, 0, this.category_one)
                        this.$api.gettrademarkcondition()
                                .then(res => {
                                        console.log(res,'商标转让筛选')
                                        this.patenscree=res.data.data_one;
                                        this.$set(this.iscolor, 0, this.$route.query.id)
                                        this.data_two = res.data.data_two
                                })
                        this.$api.gettrademarkadvertisement()
                                .then(res => {
                                        console.log(res,'banner图')
                                        this.banner = res.data.images
                                })
                        this.ispost(this.id)


                },
                methods: {
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
                                console.log(111)
                          this.isshow = true
                        },
                        close(){//隐藏弹框
                                this.isshow = false
                        },
                        fabu(){
                                 this.isshow = false
                        },
                        //隐藏弹框
                        shows(){
                                this.isshow = false
                        },
                        listsort(index) {
                                this.listsortnum = index
                        },
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
                                                console.log(res,'商标转让列表')
                                                this.iscent = res.data.lists.data
                                                this.listdata = res.data.youlike
                                                // 分页
                                                this.total=res.data.lists.total;
                                                this.currentPage=res.data.lists.current_page;
                                                this.pagesize=res.data.lists.per_page;
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
                        colorbtn(color, index) {

                        },
                       // 分页
                        handleSizeChange(val) {
                           console.log(`每页 ${val} 条`);

                        },
                        handleCurrentChange(val) {
                            // 输入页数
                            console.log(`当前页: ${val}`);
                            this.id[12] = val
                            this.ispost(this.id)
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
       *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
      .copyright_pay{background: #f6f6f6;}
      .patent_sort{max-width: 1200px;margin: 0 auto;height: 50px;background-color: #fff;color: #666;font-size: 14px;display: flex;align-items: center;border: 1px solid #eceff6;margin-bottom: 20px;position: relative;}
      .patent_sort>span{width: 135px;text-align: center;cursor: pointer;height: 50px;line-height: 50px;border-right: 1px solid #f1f1f1;}
      .patent_sorticon{font-weight: bold;}
      .sortactive{color: #1580c4;}
      .patent_sortright{position: absolute;right: 0;height: 50px;display: flex;}
      .patent_sortitem{width: 100px;border-left: 1px solid #f1f1f1;display: flex;justify-content: center;align-items: center;cursor: pointer;font-size: 19px;}
      .patent_sortpage{width: 100px;border-left: 1px solid #f1f1f1;display: flex;justify-content: center;align-items: center;}
      .patent_sortpage div{width: 20px;height: 20px;border: 1px solid #eeeeee;text-align: center;cursor: pointer;}
      .patent_sortpage div:nth-child(1){margin-right: 5px;}
      /* 页数*/
      .copyright_page{text-align: center;background: #fff;padding: 20px 30px;max-width: 1200px;margin: 10px auto 30px;line-height: 29px;font-size: 14px;color: #999;}
      .copyright_page span{color: #666;font-size: 14px;padding-right: 8px;height: 31px;line-height: 31px;}
      .copyright_page button{color: #666;font-size: 14px;padding: 5px 10px;margin-right: 8px;background: #fff;border: 1px solid #f0f0f0;outline: none;}
      .copyright_page input{color: #666;font-size: 14px;width: 40px;height: 31px;line-height: 31px;border: 1px solid #f0f0f0;outline: none;padding: 0 5px;outline: none;}
      .copyright_page button:hover{background-color: #3b5791;color: #fff;outline: none;}
      .tanchuang{position: fixed;z-index: 9999;background: rgba(0,0,0,0.2);width: 100%;height: 100%;top:0;right:0;left:0;bottom:0;display: flex;justify-content: center;align-items: center;}
</style>
