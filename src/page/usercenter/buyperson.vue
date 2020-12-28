<template>
        <div class="buyperson">
                <div class="buy_top">
                        我是买家/我的购买订单
                </div>
                <div class="buy_con">
                        <ul class="con_t">
                                <li class="con_t_item" v-for="(item, i) in nav" :key="i"  v-bind:class="{ active: i == num }"
                                                 @click="tab(i)">{{ item }}</li>
                                <!-- <li class="con_t_item">未付款订单</li>
                <li class="con_t_item">已预约的订单</li>
                <li class="con_t_item">交接中的订单</li>
                <li class="con_t_item">已完成的订单</li> -->
                                <li class="con_t_search">
                                        <div class="t_sea">
                                                <input type="text" placeholder="请输入您要查找的订单号">
                                                <div class="search">搜索</div>
                                        </div>

                                </li>
                        </ul>
                        <ul class="con_b">
                                <li class="con_b_item">订单详情</li>
                                <li class="con_b_item">数量</li>
                                <li class="con_b_item">价格</li>
                                <li class="con_b_item">订单状态</li>
                                <li class="con_b_item">订单操作</li>
                                <li class="con_b_item">客服信息</li>
                        </ul>
                        <div class="b_content">
                                <div class="b_content_c">
                                        <img src="../../../static/img/usercenter/order.png" alt=""><span>您还没有订单，去逛逛吧~</span>
                                </div>
                                <!-- <div class="b_content_c">
                                        <div class="shopcart_zsdcet" v-for="(item,index) in zsdlist" :key="index">
                                            <div class="shopcart_zsdcetret">
                                                <div class="shopcart_zsdcetrettop">
                                                    {{item.product.name}}
                                                </div>
                                                <div class="shopcart_zsdcetretcet">
                                                    {{item.product.sketch}}
                                                </div>
                                            </div>
                                            <div class="shopcart_zsdceterrn">
                                                <div>￥{{item.product.fee}}</div>
                                            </div>
                                            <div class="shopcart_zsdcefhtea">
                                                <el-input-number class="shopcart_zsdcefhin" size="mini" v-model="item.num" @change="handleChange(item.product.fee,item.num,index,item.checkModel)"  :min="1" :max="10" label="描述文字"></el-input-number>
                                            </div>
                                            <div class="shopcart_zsdcefviet">
                                                 <div >￥{{zong(item.product.fee,item.num,index)}}</div>
                                            </div>
                                        </div>
                                </div> -->
                        </div>

                </div>

        </div>
</template>
<script>
        export default {
                data() {
                        return {
                                nav: ["全部订单", "未付款订单", "已预约的订单", "交接中的订单", "已完成的订单"],
                                num: 0,
                                data:{},
                                zsdlist:[],
                                style:''
                        }
                },
                watch: {
                	$route(to, from){
                		this.num=this.$route.query.type
                                this.style = this.$route.query.style
                                 this.ispost(this.style,this.num)
                	}
                },
                mounted() {
                        this.data = JSON.parse(sessionStorage['user']);
                },
                methods: {
                        tab(index) {
                                this.num = index;
                                this.ispost(index)
                        },
                        ispost(style,index){
                                console.log(this.data)
                                //我的商标
                                if(style==0){
                                    this.$api.getuserTrademarkOrder(this.data.id,index)
                                    .then(res=>{
                                            console.log(res)
                                            this.zsdlist = res.data.data
                                    })
                                    //我的专利
                                }else if(style==1){
                                        this.$api.getuserPatentsOrder(this.data.id,index)
                                        .then(res=>{
                                                console.log(res)
                                                this.zsdlist = res.data.data
                                        })
                                        // 我的版权
                                }else if(style==2){
                                        this.$api.getuserCopyrightOrder(this.data.id,index)
                                        .then(res=>{
                                                console.log(res)
                                                this.zsdlist = res.data.data
                                        })
                                        //技术转移
                                }else if(style==3){
                                        this.$api.getuserTrademarkOrder(this.data.id,index)
                                        .then(res=>{
                                                console.log(res)
                                                this.zsdlist = res.data.data
                                        })
                                        //服务中心
                                }else if(style==4){
                                        this.$api.getuserTrademarkOrder(this.data.id,index)
                                        .then(res=>{
                                                console.log(res)
                                                this.zsdlist = res.data.data
                                        })
                                }

                        }
                }
        }
</script>
<style>
        .buyperson {
                width: 100%;
                height: 100%;
                padding: 10px 30px;
        }

        .buy_top {
                color: #919191;
                background-color: #fff;
                font-size: 14px;
                padding: 15px;
                border: 1px solid #efefef;
                border-radius: 5px;
        }

        .buy_con {
                background-color: #fff;
                font-size: 14px;
                padding: 10px;
                margin-top: 20px;
                border: 1px solid #efefef;
                border-radius: 5px;
        }

        .con_t {
                display: flex;
                border-bottom: 1px solid #efefef;
        }

        .con_t_item {
                background-color: #f9f9f9;
                width: 115px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #efefef;
                color: #949494;
        }

        .active {
                background-color: #fff;
                color: #696969;
                border-top: 2px solid #1b7fc3;
        }

        .con_t_search {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
        }

        .t_sea {
                display: flex;
                align-items: center;
                width: 230px;

        }

        .t_sea input {
                font-size: 10px;
                border: 1px solid #efefef;
                border-radius: 5px 0 0 5px;
                padding: 5px 10px;
        }

        .search {
                width: 50px;
                height: 25px;
                font-size: 14px;
                background-color: #eee;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0 5px 5px 0;
        }

        .con_b {
                margin-top: 20px;
                height: 35px;
                display: flex;
                justify-content: space-around;
                color: #b7b7b7;
        }

        .con_b_item {
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .b_content {
                height: 300px;
                margin-top: 15px;
                display: flex;
                align-items: center;
                text-align: center;
                vertical-align: middle;
                justify-content: center;
        }

        .b_content_c {
                text-align: center;
                vertical-align: middle;

                /* padding: 26px; */
        }

        .b_content_c img {
                vertical-align: middle;

        }

        .b_content_c span {
                font-size: 14px;
        }
</style>
