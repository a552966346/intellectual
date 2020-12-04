<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div class="patent_pay">
                        <img src="../../../static/img/paycenter/patent_bg.png" alt="">
                        <!-- 分类 -->
                        <patentscreen></patentscreen>
                        <!-- 排序-->
                        <div class="patent_sort">
                                <span :class="{sortactive:this.sortnumber==1}" @click="comsort(1)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{sortactive:this.sortnumber==2}" @click="comsort(2)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
                                <span :class="{sortactive:this.sortnumber==3}" @click="comsort(3)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>
                                <div class="patent_sortright">
                                        <div :class="{patent_sortitem:true,sortactive:this.listsortnum==1}" @click="listsort(1)"><i class="el-icon-s-grid"></i></div>
                                        <div :class="{patent_sortitem:true,sortactive:this.listsortnum==2}" @click="listsort(2)"><i class="el-icon-s-unfold"></i></div>
                                        <div class="patent_sortpage">
                                            <div><i class="el-icon-arrow-left"></i></div>
                                            <div><i class="el-icon-arrow-right"></i></div>
                                        </div>
                                </div>
                        </div>
                        <copyrightOrdinary :arr='arr' ></copyrightOrdinary>
                        <div class="copyright_page">
                            <span>共十四页</span>
                            <button class="copyright_prev">首页</button>
                            <button class="copyright_prev">上一页</button>
                            <button class="copyright_btn">1</button>
                            <button class="copyright_btn">2</button>
                            <button class="copyright_btn">3</button>
                            <button class="copyright_btn">4</button>
                            <button class="copyright_btn">5</button>
                            <span>....</span>
                            <button class="copyright_btn">14</button>
                            <button class="next">下一页</button>
                            <button class="last">尾页</button>
                            <span>
                                到第
                                <input type="text">
                                页
                            </span>
                            <button>确定</button>
                        </div>

                        <!-- 猜你喜欢 -->
                        <div>
                                <!-- <copyrightBottom :arr='arr'></copyrightBottom> -->
                        </div>

                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import patentscreen from '@/components/paycenter/patentscreen.vue'; //专利筛选组件
        import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
        import copyrightBottom from '@/components/paycenter/copyrightBottom.vue'
        export default {
                data() {
                        return {
                                sortnumber:1,           //左侧边排序切换
                                listsortnum:1,             //右侧 列表形式排序
                                arr: [{
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年5',
                                                ban: '版权分类：美术作品5',
                                                price: '6000123.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年4',
                                                ban: '版权分类：美术作品4',
                                                price: '6000222.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年3',
                                                ban: '版权分类：美术作品3',
                                                price: '6000333.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年2',
                                                ban: '版权分类：美术作品2',
                                                price: '600033.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年1',
                                                ban: '版权分类：美术作品1',
                                                price: '600033.00',
                                        }
                                ]
                        }
                },
                methods: {
                        comsort(index){
                                this.sortnumber=index
                        },
                        listsort(index){
                                this.listsortnum=index
                        }
                },
                components: {
                        copyrightOrdinary,
                        copyrightBottom,
                        patentscreen
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
            width: 1200px;
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
</style>
