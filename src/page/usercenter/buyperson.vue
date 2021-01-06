<template>
        <div class="buyperson">
                <div class="buy_top"  v-if="style !=5">
                        我是买家/我的购买订单
                </div>
                <div class="buy_top"  v-else>
                        我是买家/我的收藏
                </div>
                <div class="buy_con" >
                        <ul class="con_t" v-if="style !=5">
                                <li class="con_t_item" v-for="(item, i) in nav" :key="i"  v-bind:class="{ active: item.id == num }"
                                                 @click="tab(i,item.id)"  >{{ item.name }}</li>
                                <li class="con_t_search">
                                        <!-- <div class="t_sea">
                                                <input type="text" placeholder="请输入您要查找的订单号">
                                                <div class="search">搜索</div>
                                        </div> -->

                                </li>
                        </ul>
                       <!-- <ul class="con_b">
                                <li class="con_b_item">订单详情</li>
                                <li class="con_b_item">数量</li>
                                <li class="con_b_item">价格</li>
                                <li class="con_b_item">订单状态</li>
                                <li class="con_b_item">订单操作</li>
                                <li class="con_b_item">客服信息</li>
                        </ul> -->
                        <serviceClass v-if="style ==5" :uqdata="zsdlist"></serviceClass>
                        <div class="b_content" id="buy_con">
                                <div class="b_content_c"  v-if="zsdlist.length != 0">
                                        <paytime :uqdata="zsdlist"></paytime>
                                </div>
                                <div class="b_content_c" v-else>
                                        <img src="../../../static/img/usercenter/order.png" alt=""><span>您还没有订单，去逛逛吧~</span>
                                </div>
                        </div>
                </div>

        </div>
</template>
<script>
        import paytime from '@/components/paycenter/paytime.vue'
        import serviceClass  from'@/components/paycenter/serviceClass.vue'
        import { Loading } from 'element-ui';
        export default {
                data() {
                        return {
                                nav: [
                                        {name:"全部订单"},
                                        {name:'未付款订单',id:'0'},
                                        {name:'已完成',id:'1'},
                                        {name:'已取消',id:'2'}
                                        ],
                                num: '',
                                data:{},
                                zsdlist:[],
                                style:0,
                                fullscreenLoading:false
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
                         this.style = this.$route.query.style
                          this.data = this.$cookies.get("user"); //获取cookies
                        this.ispost(this.style,this.num)
                },
                components:{
                        paytime,
                        serviceClass
                },
                methods: {
                        tab(index,id) {
                                this.num = id;
                                this.ispost(this.style,id)
                        },
                        ispost(style,index){
                                //我的商标
                                let loadingInstance = Loading.service(document.querySelector("#buy_con"));
                                this.zsdlist=[]
                                if(style==0){
                                    this.$api.getuserTrademarkOrder(this.data.id,index)
                                    .then(res=>{
                                            this.zsdlist = res.data.data
                                    })
				    .catch(res=>{
				    })
                                    //我的专利
                                }else if(style==1){
                                        this.$api.getuserPatentsOrder(this.data.id,index)
                                        .then(res=>{
                                                this.zsdlist = res.data.data
                                        })
                                        .catch(res=>{
                                        })
                                        // 我的版权
                                }else if(style==2){
                                        this.$api.getuserCopyrightOrder(this.data.id,index)
                                        .then(res=>{
                                                this.zsdlist = res.data.data
                                        })
                                        .catch(res=>{
                                        })
                                        //技术转移
                                }else if(style==3){
                                        this.$api.getusertechnology(this.data.id,index)
                                        .then(res=>{
                                                this.zsdlist = res.data.data
                                        })
                                        .catch(res=>{
                                        })
                                        //服务中心
                                }else if(style==4){
                                        this.$api.getuserservicecenter(this.data.id,index)
                                        .then(res=>{
                                                this.zsdlist = res.data.data
                                        })
                                        .catch(res=>{
                                        })
                                }else{
                                        this.$api.getallCollection(this.data.id)
                                        .then(res=>{
                                                this.zsdlist = res.data.data
                                        })
                                        .catch(res=>{
                                        })
                                }
                                this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                                  loadingInstance.close();
                                });
                        }
                }
        }
</script>
<style >
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
                height: 100%;
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
                width: 100%;
                margin-top: 15px;
                display: flex;
                align-items: center;
                text-align: center;
                vertical-align: middle;
                justify-content: center;
        }
        .time_content>dl{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
        }
        .b_content_c {
                width: 100%;
                text-align: center;
                vertical-align: middle;
        }

        .b_content_c img {
                vertical-align: middle;

        }

        .b_content_c span {
                font-size: 14px;
        }
</style>
