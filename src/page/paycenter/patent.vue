<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div class="patent_pay" id="transfer">
                        <img :src="banner" alt="" @click="tanchuang">
                        <!-- 分类 -->
                        <patentscreen :zlTop = "zlTop" :iscolor="iscolor" @choosecon="choosecon" @choosenull="choosenull" @delet="delet" @search="search"></patentscreen>
                        <!-- 排序-->
                        <div class="patent_sort">
                                <span :class="{sortactive:this.sortnumber==1}" @click="comsort(1)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{sortactive:this.sortnumber==2}" @click="comsort(2)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{sortactive:this.sortnumber==3}" @click="comsort(3)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                <!-- <div class="patent_sortright">
                                        <div :class="{patent_sortitem:true,sortactive:this.listsortnum==1}" @click="listsort(1)"><i class="el-icon-s-grid"></i></div>
                                        <div :class="{patent_sortitem:true,sortactive:this.listsortnum==2}" @click="listsort(2)"><i class="el-icon-s-unfold"></i></div>
                                        <div class="patent_sortpage">
                                            <div><i class="el-icon-arrow-left"></i></div>
                                            <div><i class="el-icon-arrow-right"></i></div>
                                        </div>
                                </div> -->
                        </div>
                        <patentcon :iscent="iscent" @kefu="kefu"></patentcon>
                        <div class="copyright_page">
                          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page.sync="currentPage"
                                  :page-size="pagesize" layout="prev, pager, next, jumper" :total="total">
                          </el-pagination>
                        </div>

                        <!-- 猜你喜欢 -->
                        <patentbottom :listdata="listdata" @kefu="kefu" @qiugou="qiugou"></patentbottom>
                </div>
                <v-combotttom></v-combotttom>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                         <v-tanchuangzl @close="close"  @fabu="fabu" @kefu="kefu"></v-tanchuangzl>
                </div>
                <!-- 客服弹窗 -->
                <div class="tanchuang" v-show="isshowtwo" @click.self="showstwo">
                        <v-customer @shows="showstwo"></v-customer>
                </div>
                <!-- 我要求购 -->
                <div class="tanchuang" v-show="isshowthree" @click.self="showsthree">
                        <v-purchasezl @closetc="closetc" @fabu="fabu" @kefux="kefux"></v-purchasezl>
                </div>
        </div>
</template>

<script>
import purchasezl from '@/components/copyright/purchasezl.vue'//求购弹窗
import tanchuangzl from '@/components/copyright/tanchauangzl.vue';//专利弹窗
import customer from '@/components/customers/customer_services.vue'//客服弹窗
import patentscreen from '@/components/paycenter/patentscreen.vue'; //专利筛选组件
import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
import patentbottom from '@/components/paycenter/patentbottom.vue'
import patentcon from '@/components/paycenter/patentcon.vue';
        export default {
                data() {
                        return {
                                sortnumber:1,           //左侧边排序切换
                                listsortnum:1,             //右侧 列表形式排序
                                zlTop:[],
                                iscolor:[],
                                listdata:[]             ,//总条数
                                iscent:[],
                                listdata:[],
                                id:{},
                                banner:require('../../../static/img/paycenter/patent_bg.jpg'),
                                category_id:'',
                                isshow:false,
                                isshowtwo:false,
                                name:'',
                                // 分页
                                currentPage: 1,
                                pagesize: 0,
                                total:0,
                                isshowthree:false,
                        }
                },
                beforeMount() {
                       this.category_id = this.$route.query.id
                       this.name = this.$route.query.name
                        this.$set(this.id,0,this.category_id)
                        this.$set(this.id,11,this.name)
                        this.$api.getPatentsconditions()   //专利筛选
                        .then(res=>{
                                this.zlTop = res.data
                                 this.$set(this.iscolor,0,this.$route.query.id)
                                this.ispost(this.id)
                        })
                        .catch(res=>{
                        })
                        //banner图
                        this.$api.getPatentsadvertisement()
                        .then(res=>{
                                this.banner = res.data.images
                        })
                        .catch(res=>{
                        })
                },
                methods: {

                        comsort(index){
                                this.sortnumber=index
                                if(index == 2){
                                        this.$set(this.id,6,"desc")
                                        this.$set(this.id,7,"")
                                        this.ispost(this.id)
                                }else if(index == 3){
                                        this.$set(this.id,7,"desc")
                                        this.$set(this.id,6,"")
                                        this.ispost(this.id)
                                }else{
                                         this.ispost()
                                }
                        },
                        //求购
                        qiugou(){
                                this.isshowthree = true
                        },
                        showsthree(){
                                this.isshowthree = false
                        },
                        closetc(){
                                this.isshowthree = false
                        },
                        kefux(){
                                this.isshowthree = false
                                this.isshowtwo = true
                        },
                        //商标弹框隐藏
                        kefu(){
                                 this.isshow = false
                                this.isshowtwo = true
                        },
                        //客服弹框隐藏
                        showstwo(){
                                this.isshowtwo =false
                        },
                        //搜索
                        search(id){
                                this.id = id
                                this.ispost(id)
                        },

                        listsort(index){
                                this.listsortnum=index
                        },
                        //筛选
                        choosecon(id){
                                this.id = id
                                this.ispost(id)
                        },
                        //清空
                        choosenull(){
                                this.iscolor = []
                                this.ispost()
                        },
                        //列表请求
                        ispost(id){
                                this.$api.getPatentslist(id)
                                .then(res=>{
                                        // 列表
                                        this.iscent = res.data.lists.data
                                        // 猜你喜欢
                                        this.listdata = res.data.youlike
                                        this.istotal = res.data.lists.data.length;
                                        // 分页
                                        this.total=res.data.lists.total;
                                        this.currentPage=res.data.lists.current_page;
                                        this.pagesize=res.data.lists.per_page;
                                })
                                .catch(res=>{
                                })
                        },
                        delet(id){
                                this.id = id
                                this.ispost(id)
                        },
                       // 分页
                        handleSizeChange(val) {
                        },
                        handleCurrentChange(val) {
                            // 输入页数
                            this.id[6] = val
                            this.ispost(this.id)
                            document.getElementById("transfer").scrollIntoView()
                        },
                        // 确认按钮
                        fabu(){
                                 this.isshow = false
                        },
                        //隐藏弹框
                        close(){
                                this.isshow = false
                        },
                        //显示弹框
                        tanchuang(){
                          this.isshow = true
                        },
                        //隐藏弹框
                        shows(){
                                this.isshow = false
                        },
                },
                components: {
                        'v-tanchuangzl':tanchuangzl,//专利弹窗
                        'v-purchasezl':purchasezl,//购买弹窗
                        copyrightOrdinary,
                        patentbottom,
                        patentscreen,
                        patentcon,
                        'v-customer':customer
                }
        }
</script>

<style scoped>
        *{text-decoration: none;}
       .patent_pay{background: #f6f6f6;padding-bottom: 20px;}
       .patent_pay>img{cursor: pointer;}
       .patent_sort{width: 1200px;margin: 0 auto;height: 50px;background-color: #fff;color: #666;font-size: 14px;display: flex;align-items: center;border: 1px solid #eceff6;margin-bottom: 20px;position: relative;}
       .patent_sort>span{width: 135px;text-align: center;cursor: pointer;height: 50px;line-height: 50px;border-right: 1px solid #f1f1f1;}
       .patent_sorticon{font-weight: bold;}
       .sortactive{color: #1580c4;}
       .patent_sortright{position: absolute;right: 0;height: 50px;display: flex;}
       .patent_sortitem{width: 100px;border-left: 1px solid #f1f1f1;display: flex;justify-content: center;align-items: center;cursor: pointer;font-size: 19px;}
       .patent_sortpage{width: 100px;border-left: 1px solid #f1f1f1;display: flex;justify-content: center;align-items: center;}
       .patent_sortpage div{width: 20px;height: 20px;border: 1px solid #eeeeee;text-align: center;cursor: pointer;}
       .patent_sortpage div:nth-child(1){margin-right: 5px;}
       /* 页数*/.copyright_page{background: #fff;padding: 20px 30px;text-align: left;max-width: 1200px;width: 100%;margin:10px auto 30px;line-height: 29px;font-size: 14px;color: #999;text-align: center;}
       .copyright_page span{color: #666;font-size: 14px;padding-right: 8px;height: 31px;line-height: 31px;}
       .copyright_page button{color: #666;font-size: 14px;padding: 5px 10px;margin-right: 8px;background: #fff;border: 1px solid #f0f0f0;outline: none;}
       .copyright_page input{color: #666;font-size: 14px;width: 40px;height: 31px;line-height: 31px;border: 1px solid #f0f0f0;outline: none;padding: 0 5px;outline: none;}
       .copyright_page button:hover{background-color:#3b5791 ;color: #fff;outline: none;}
       .tanchuang{position: fixed;z-index: 9999;background: rgba(0,0,0,0.2);width: 100%;height: 100%;top:0;right:0;left:0;bottom:0;display: flex;justify-content: center;align-items: center;}
</style>
