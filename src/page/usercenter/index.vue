<template>
    <div class="main">
        <div class="main_l" >
                <!-- 名字 -->
                <div class="r1_top"  v-show="berl">
                    <div class="left">
                            <div class="r1_top_tou">
                                <img :src="user.avatar">
                            </div>
                            <div class="r1_top_name">
                                <h4>{{user.nickname}} <img src="../../../static/img/usercenter/woman.png" alt="" v-if="user.gender==0"><img src="../../../static/img/usercenter/man.png" alt=""v-if="user.gender==1"></h4>
                                <p>{{user.email}}<span v-if="user.is_verify==1" style="padding-left: 5px; color: #008A00;font-size: 12px;">已验证</span><span else style="padding-left: 5px;color: red; font-size: 12px;">未验证</span></p>
                            </div>
                    </div>
                    <div class="right">
                            <div class="r1_top_money money1">
                                <p>账户余额</p>
                                <!-- <p style="display: flex;"> -->
                                        <span>{{user.money}}元</span>
                                        <input class="money1_button" type="button" value="提现">
                                <!-- </p> -->
                                <br> <a href="#">查看详情</a>
                            </div>
                            <div class="r1_top_money money2">
                                <p>冻结资金</p>
                                <p>
                                        <span>{{user.frozen}}元</span>
                                </p>

                                <a href="#">查看详情</a>
                            </div>
                            <div class="r1_top_money money3">
                                <p>押金</p>
                                <p>
                                        <span>{{user.pledge}}元</span>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="r1_top denglu" v-show="!berl">
                              <router-link to="/login">
                                      <p>请<span>登录</span>后操作</p>
                              </router-link>
                </div>
                <!-- 3个图 -->
                <div class="r2_top">
                    <div class="r2_top_item"  @click="security">
                        <img src="../../../static/img/usercenter/safe.png" alt="">
                        <span >账号设置</span>
                    </div>
                    <div class="r2_top_item" @click="capital">
                        <img src="../../../static/img/usercenter/money.png" alt="">
                        <span >资金明细</span>
                    </div>
                    <div class="r2_top_item" @click="contract">
                        <img src="../../../static/img/usercenter/contract.png" alt="">
                        <span >我的合同</span>
                    </div>

                </div>
                <!-- 我的订单 -->
                <div class="order">
                    <div class="order_title">
                        <div class="myorder">
                            我的订单
                            <div class="order_r">
                                <span class="span">待付款<span class="blue">[{{Unpaid}}]</span></span>
                                <span class="span">已支付<span class="blue">[{{Paid}}]</span></span>
                                <span class="span">已完成<span class="blue">[{{Completed}}]</span></span>
                                <span class="span">已取消<span class="blue">[{{cancel}}]</span></span>
                            </div>
                        </div>

                    </div>
                    <div class="order_content">
                        <!-- <div class="order_content_c">
                            <img src="../../../static/img/usercenter/order.png" alt=""><span>您还没有订单，去逛逛吧~</span>
                        </div> -->
                        <el-table
                              :data="tableData"
                               :row-class-name="tableRowClassName"
                               stripe
                              style="width: 100%">
                              <el-table-column
                                property="order_sn"
                                label="订单编号"
                                >
                              </el-table-column>
                              <el-table-column
                                property="creatime_text"
                                label="订单生成时间"
                                >
                              </el-table-column>
                              <el-table-column
                                property="status"
                                label="服务类型"
                                >
                              </el-table-column>
                              <el-table-column
                                property="type"
                                label="订单状态">
                              </el-table-column>
                              <!-- <el-table-column
                                prop="address"
                                label="数量">
                              </el-table-column> -->
                              <el-table-column
                                property="total_fee"
                                label="价格">
                              </el-table-column>
                            </el-table>
                    </div>
                </div>
                <!-- 收益总览 -->
               <!-- <div class="overview">
                    <div class="overview_title">
                        <div class="myoverview">
                            收益总览
                        </div>
                    </div>
                </div> -->
        </div>
        <div class="main_r">
                    <!-- 公告 -->
                    <div class="notice">
                        <div class="notice_title">
                            <div class="mynotice">
                                伊甸公告
                            </div>
                        </div>
                        <ul class="notice_content">
                            <li v-for="item in newnow.news" :key="item.name">

                                <img :src="item.image" alt="">
                                <div class="notice_content_c">
                                    <h4>{{item.title}}</h4>
                                    <div>
                                        <p>
                                           {{item.desc}}
                                        </p>
                                        <router-link :to="'newsint?id=' + item.id">[详情]</router-link>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <!-- 收藏 -->
                    <div class="collection">
                        <div class="collection_title">
                            <div class="mycollection">
                                收藏的服务
                            </div>
                        </div>
                        <div class="collection_content">
                            <div class="collection_content_item" v-for="(item,index) in zsdlist" :key="item.id" v-if="index<=3">
                                <img :src="item.product.images_text[0]" alt="">
                                <p>{{item.product.name}}</p>
                                <div class="collection_content_item_cc">
                                    <span>￥{{item.product.fee}}</span>
                                    <div class="collection_content_item_ccc">
                                        <span>100%</span><span>好评</span> <br>
                                    </div>
                                </div>
                                <el-button type="primary" class="button" size="medium" @click="banli(item.type,item.product.categoryid_text,item.product_id,item.product.category_id)">立即办理</el-button>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userIn:[
                {frozen:0.00},
                {pledge:0.00}
            ],//用户信息,
            user:'',
            berl:false,
            newnow:[],
            zsdlist:[],
            tableData:[{
                    order_sn:'',
                    creatime_text:'',
                    status:'',
                    type:'',
                    total_fee:''
            }],
             Unpaid:0, //未支付
            Paid:0,//已支付
            Completed:0,//已完成
            cancel:0//已取消
        }
    },
    mounted(){
            if(this.$store.state.user){
                     this.userIn =   this.$store.state.user
                     this.berl = true
            }else{
                    this.$router.push({
                            path:"/login"
                    })
            }
            //用户个人信息
            this.$nextTick(function(){
                    this.$api.getuserIndex(this.$store.state.user.id)
                    .then(res=>{
                            
                            this.user= res.data
                    })
                    .catch(res=>{
                            
                    })
                    // 收藏
                    this.$nextTick(function(){
                            this.$api.getallCollection(this.$store.state.user.id)
                             .then(res=>{
                                     
                                     this.zsdlist = res.data.data
                             })
                             .catch(res=>{
                                     
                             })
                            // 订单
                    this.$api.getuseindex(this.$store.state.user.id)
                            .then(res=>{
                                    for(let i=0;i<res.data.data.length;i++){
                                            // this.tableData[i].order_sn=res.data.data[i].order_sn
                                            // this.tableData[i].creatime_text=res.data.data[i].creatime_text
                                            switch(res.data.data[i].status) {
                                                 case 0:
                                                    res.data.data[i].status = "未支付"
                                                    this.Unpaid++
                                                    break;
                                                 case 1:
                                                     res.data.data[i].status = "已支付"
                                                     this.Paid++
                                                    break;
                                                 case 3:
                                                        res.data.data[i].status = "已完成"
                                                        this.Completed++
                                                break;
                                                case 4:
                                                        res.data.data[i].status = "已取消"
                                                        this.cancel++
                                                break;
                                            }
                                            switch(res.data.data[i].type) {
                                                 case 1:
                                                     res.data.data[i].type = "服务中心"
                                                    break;
                                                 case 2:
                                                        res.data.data[i].type = "商标交易"
                                                break;
                                                case 3:
                                                        res.data.data[i].type = "专利交易"
                                                break;
                                                case 4:
                                                        res.data.data[i].type = "版权转让"
                                                break;
                                                case 5:
                                                   res.data.data[i].type = "技术转移"
                                                break;
                                            }
                                            if(res.data.data[i].total_fee>=10000){
                                                 res.data.data[i].total_fee=res.data.data[i].total_fee/10000+"万元"
                                            }
                                            // this.tableData[i].type=res.data.data[i].type
                                            // this.tableData[i].total_fee=res.data.data[i].total_fee
                                            this.tableData.push({
                                                    order_sn:res.data.data[i].order_sn,
                                                    creatime_text:res.data.data[i].creatime_text,
                                                    status:res.data.data[i].status,
                                                    type:res.data.data[i].type,
                                                    total_fee:res.data.data[i].total_fee

                                            })
                                    }

                            })
                            .catch(res=>{
                                    
                            })

                    })
            })

            //伊甸公告
            this.$api.getindexnew().then((res) => {
              this.news = res.data;
              this.newnow = res.data[2]
            });




    },
    methods:{
            banli(type,key,id,ids){
               if(type==1){
                       this.$router.push({
                               path:key.keywords,
                               query:{id:ids}
                       })
               }
               else if(type ==2){
                       this.$router.push({
                               path:'/service_xlj',
                               query:{id:id}
                       })
               }
               else if(type ==3){
                       this.$router.push({
                               path:'/service_xlj_three',
                               query:{id:id}
                       })
               }
               else if(type ==4){
                       this.$router.push({
                               path:'/service_xlj_four',
                               query:{id:id}
                       })
               }
               else if(type ==5){
                       this.$router.push({
                               path:'/service_xlj_two',
                               query:{id:id}
                       })
               }
            },
             tableRowClassName({row, rowIndex}) {
                    if (rowIndex === 1) {
                      return 'warning-row';
                    } else if (rowIndex === 3) {
                      return 'success-row';
                    }
                    return '';
                  },
            //安全设置
            security(){
                    this.$router.push({
                        path:'/usercenter/userid'
                    })
            },
            capital(){
                        this.$router.push({
                                path:"/usercenter/usermanage"
                        })
            },
            contract(){
                        this.$router.push({
                                path:"/usercenter/usercontract"
                        })
            }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.main{
    display: flex;
    margin: 20px 3% 0;
    width: 93%;
}
button{
        outline: none;
}
.main_r{
    flex: 0 0 34%;
    margin-left: 3%;
    max-width: 363px;
    min-width: 350px;
}
.main_l{
    flex: 1;
    width: 47%;

}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

/* .main_r */
.notice{
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.16);
}
.notice_title{
    height: 34px;
    width: 100%;
    background-color: #ecf4ff;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0 ;
}
.mynotice{
    font-size: 12px;
    line-height: 12px;
}
.notice_content{
        width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
}
.notice_content li{
    padding: 10px 0px;
    list-style: none;
    border-bottom: 1px solid #b7b7b7;
    flex: 1;
    display: flex;

}
.notice_content li img{
    width: 50%;
}
.notice_content li:last-of-type{
    border-bottom: none;
}
.notice_content_c{
        width: 50%;
    flex-direction: column;
    display: flex;
    margin-left: 1%;
}
.notice_content h4{
    font-size: 14px;
    line-height: 23px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}
.notice_content_c div{
    font-size: 4px;
    color: #b7b7b7;
    line-height: 17px;
    letter-spacing: 3px;

}
.notice_content_c div p{
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: normal !important;
    word-wrap: break-word;

}

.notice_content_c div a{
    color: #87a5f5;
}


.collection{
    margin-top: 16px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.16);
}
.collection_title{
    height: 34px;
    width: 100%;
    background-color: #ecf4ff;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0 ;
}
.mycollection{
    font-size: 12px;
    line-height: 12px;
}
.collection_content{
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.collection_content_item{
    padding: 10px;
    margin: 6px 0;
    border: 1px solid rgba(0,0,0,0.16);
    width: 48%;

}
.collection_content_item_cc {
    display: flex;
    justify-content: space-between;
}
.collection_content_item img{
    display: block;
    margin: 0 auto 5px;
    width: 100%;
    height: 135px;
}
.collection_content_item .span_r{
    justify-content: space-between;
}
.collection_content_item p{
    font-size: 10px;
    line-height: 19px;
    text-align: left;
    color: #a3a3a3;
}
.collection_content_item_cc{
    font-size: 12px;
    color: #4b7ef1;
    line-height: 19px;
}
.collection_content_item_ccc span:last-of-type{
    color: #a3a3a3;
}
.collection_content_item .button{
    font-size: 12px;
    width: 100%;
}

a{
        color: #007AFF;
}
/* .main_l */
.r1_top{
    padding: 25px 15px;
    border: 1px solid rgba(0,0,0,0.16);
    border-radius: 8px;
    display: flex;
}
.left{
        width: 50%;
        display: flex;
        align-items: center;
}
.right{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
}
.denglu{
        display: flex;
        align-items: center;
        padding: 10px 50px;
}
.denglu p{
         color: #111;
}
.denglu span{
        color: #0163D2;
        font-size: 17px;
}
.r1_top_tou {
        width: 100px;
        height: 100px;
        overflow: hidden;
}
.r1_top_tou img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
}
.r1_top_name{
        padding: 0 10px;
}
.r1_top_name p{
    color: #aaa;
    font-size: 13px;
    line-height: 20px;
}
.r1_top_money{
        font-size: 15px;
}
.money1_button{
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        color: #555;
        padding: 3px 5px;
        border-radius: 5px;
        outline: none;
        margin-left: 5px;
}
.r1_top_money span{
        padding: 5px 0;
}
.r2_top{
    margin-top: 20px;
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    width: 100%;
}
.r2_top_item{
    width: 190px;
    height: 64px;
    border: 1px solid rgba(0,0,0,0.16);
    text-align: center;
    line-height: 23px;
    border-radius: 8px;
    margin-right: 20px;
}
.r2_top_item:last-of-type{
    margin-right: 0px;
}
.r2_top_item img{
    margin: 14px 0;
    vertical-align: middle;
}
.r2_top_item span{
    padding-left: 5px;
    text-align: center;
}
.order{
    margin-top: 20px;
    min-height: 136px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.16);
}
.order_title{
    border-radius: 8px 8px 0 0 ;
    height: 34px;
    width: 100%;
    background-color: #ecf4ff;
    padding: 10px 20px;
}
.myorder{
    border-left: 4px solid #5081f1;
    padding-left: 16px;
    font-size: 16px;
    line-height: 16px;
}
.order_r{
    float: right;
    font-size: 14px;
    line-height: 14px;
}
.order_r .span{
    margin-left: 4px;
}
.order_r .blue{
    color: #41a3fe;
}
.order_content{
    display: flex;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}
.order_content_c{
   text-align: center;
   vertical-align:middle;

}
.order_content_c  img{
    vertical-align:middle;

}
.order_content_c span{
    font-size: 14px;
}
.overview{
    height: 400px;
    margin-top: 20px;
}
.overview_title{
    height: 34px;
    width: 100%;
    padding: 10px 20px;
    margin-top: 10px;
}
.myoverview{
    border-left: 4px solid #5081f1;
    padding-left: 16px;
    font-size: 16px;
    line-height: 16px;
}
</style>
