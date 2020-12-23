<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div class="patent_pay">
                        <img :src="banner" alt="" @click="tanchuang">
                        <!-- 分类 -->
                        <patentscreen :zlTop = "zlTop" :iscolor="iscolor" @choosecon="choosecon" @choosenull="choosenull" @delet="delet"></patentscreen>
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
                        <patentcon :iscent="iscent"></patentcon>
                        <div class="copyright_page">
                           <el-pagination
                             @size-change="handleSizeChange"
                             @current-change="handleCurrentChange"
                             :page-size="10"
                             layout="prev, pager, next, jumper"
                             :total="istotal">
                           </el-pagination>
                        </div>

                        <!-- 猜你喜欢 -->
                        <patentbottom :listdata="listdata"></patentbottom>
                </div>
                <v-combotttom></v-combotttom>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                         <v-tanchuangsb @close="close"></v-tanchuangsb>
                </div>
        </div>
</template>

<script>
import tanchuangsb from '@/components/copyright/tanchauangzl.vue';//专利弹窗
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
                                istotal:0,              //默认页数
                                listdata:[]             ,//总条数
                                iscent:[],
                                listdata:[],
                                id:{},
                                banner:'../../../static/img/paycenter/patent_bg.png',
                                category_id:'',
                                isshow:false
                        }
                },
                beforeMount() {
                       this.category_id = this.$route.query.id
                        this.$set(this.id,"category_id",this.category_id)
                        this.$api.getPatentsconditions()   //专利筛选
                        .then(res=>{
                                console.log(res)
                                this.zlTop = res.data
                                 this.$set(this.iscolor,0,this.$route.query.id)
                                this.ispost(this.id)
                                // console.log(this.iscent)
                        })
                        //广告
                        this.$api.getPatentsadvertisement()
                        .then(res=>{
                                console.log(res)
                                this.banner = res.data.images
                        })
                },
                methods: {
                        
                        comsort(index){
                                this.sortnumber=index
                                if(index == 2){
                                        this.$set(this.id,"creatime","desc")
                                        this.$set(this.id,"feeorder","")
                                        this.ispost(this.id)
                                }else if(index == 3){
                                        this.$set(this.id,"feeorder","desc")
                                        this.$set(this.id,"creatime","")
                                        this.ispost(this.id)
                                }else{
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
                        //隐藏弹框
                        shows(){
                                this.isshow = false
                        },
                        listsort(index){
                                this.listsortnum=index
                        },
                        //筛选
                        choosecon(id){
                                console.log(id)
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
                                        console.log(res)
                                        // 列表
                                        this.iscent = res.data.lists.data
                                        // 猜你喜欢
                                        this.listdata = res.data.youlike
                                        this.istotal = res.data.lists.data.length
                                })
                        },
                        delet(id){
                                this.ispost(id)
                        },
                        handleSizeChange(){

                        },
                        handleCurrentChange(){

                        }
                },
                components: {
                        'v-tanchuangsb':tanchuangsb,//专利弹窗
                        copyrightOrdinary,
                        patentbottom,
                        patentscreen,
                        patentcon
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

        .patent_pay {
                background: #f6f6f6;
                padding-bottom: 20px;
        }
        .patent_sort{
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
        .patent_sort>span{
                width: 135px;
                text-align: center;
                cursor: pointer;
                height: 50px;
                line-height: 50px;
                border-right: 1px solid #f1f1f1;
        }
        .patent_sorticon{
                font-weight: bold;
        }
        .sortactive{
                color: #1580c4;
        }
        .patent_sortright{
                position: absolute;
                right: 0;
                height: 50px;
                display: flex;
        }
        .patent_sortitem{
                width: 100px;
                border-left: 1px solid #f1f1f1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 19px;
        }
        .patent_sortpage{
               width: 100px;
                border-left: 1px solid #f1f1f1;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        .patent_sortpage div{
                width: 20px;
                height: 20px;
                border: 1px solid #eeeeee;
                text-align: center;
                cursor: pointer;
        }
        .patent_sortpage div:nth-child(1){
                margin-right: 5px;
        }

        /* 页数 */
        .copyright_page{
            background: #fff;
            padding: 20px 30px;
            text-align: left;
            max-width: 1200px;
            margin:10px auto 30px;
            line-height: 29px;
            font-size: 14px;
            color: #999;
        }
        .copyright_page span{
            color: #666;
            font-size: 14px;
            padding-right: 8px;
            height: 31px;
            line-height: 31px;
        }
        .copyright_page button{
            color: #666;
            font-size: 14px;
            padding: 5px 10px;
            margin-right: 8px;
            background: #fff;
            border: 1px solid #f0f0f0;
            outline: none;
        }
        .copyright_page input{
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
        .copyright_page button:hover{
            background-color:#3b5791 ;
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
