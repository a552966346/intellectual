<template>
    <div class="main">
        <div class="main_l" >
                <!-- 名字 -->
                <div class="r1_top"  v-show="berl">
                    <div class="r1_top_tou">
                        <img :src="userIn.avatar">
                    </div>
                    <div class="r1_top_name">
                        <h4>{{userIn.username}} <img src="../../../static/img/usercenter/woman.png" alt=""></h4>
                        <p>晋中市华迅网络科技股份有限公司</p>
                    </div>
                    <div class="r1_top_money money1">
                        <p>账户余额</p>
                        <span>{{userIn.money}}元</span>
                        <input class="money1_button" type="button" value="提现">
                        <br> <a href="#">查看详情</a>
                    </div>
                    <div class="r1_top_money money2">
                        <p>冻结资金</p>
                        <span>{{userIn.frozen}}元</span> <br/>
                        <a href="#">查看详情</a>
                    </div>
                    <div class="r1_top_money money3">
                        <p>押金</p>
                        <span>{{userIn.pledge}}元</span>
                    </div>
                </div>
                <div class="r1_top denglu" v-show="!berl">
                              <router-link to="/login">
                                      <p>请<span>登录</span>后操作</p>
                              </router-link>
                </div>
                <!-- 3个图 -->
                <div class="r2_top">
                    <div class="r2_top_item">
                        <img src="../../../static/img/usercenter/safe.png" alt="">
                        <span>安全设置</span>
                    </div>
                    <div class="r2_top_item">
                        <img src="../../../static/img/usercenter/money.png" alt="">
                        <span>资金明细</span>
                    </div>
                    <div class="r2_top_item">
                        <img src="../../../static/img/usercenter/contract.png" alt="">
                        <span>我的合同</span>
                    </div>

                </div>
                <!-- 我的订单 -->
                <div class="order">
                    <div class="order_title">
                        <div class="myorder">
                            我的订单
                            <div class="order_r">
                                <span class="span">待付款<span class="blue">[0]</span></span>
                                <span class="span">已预订<span class="blue">[0]</span></span>
                                <span class="span">交接中<span class="blue">[0]</span></span>
                                <span class="span">已完成<span class="blue">[0]</span></span>
                            </div>
                        </div>

                    </div>
                    <div class="order_content">
                        <div class="order_content_c">
                            <img src="../../../static/img/usercenter/order.png" alt=""><span>您还没有订单，去逛逛吧~</span>
                        </div>

                    </div>
                </div>
                <!-- 收益总览 -->
                <div class="overview">
                    <div class="overview_title">
                        <div class="myoverview">
                            收益总览
                        </div>
                    </div>
                </div>
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
                            <li>

                                <img src="../../../static/img/usercenter/gg.png" alt="">
                                <div class="notice_content_c">
                                    <h4>山西省知识产权战略纲要</h4>
                                    <div>
                                        <p>
                                            为全面贯彻落实国家知识产权战略，推进我省国家资源型经济转型综合配置改革试验区建设，大力提升知识产权创造推进我省国家资源型经济转型综合
                                        </p>
                                        <a href="#">[详情]</a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <img src="../../../static/img/usercenter/gg.png" alt="">
                                <div class="notice_content_c">
                                    <h4>山西省知识产权战略纲要</h4>
                                    <div>
                                        <p>
                                            为全面贯彻落实国家知识产权战略，推进我省国家资源型经济转型综合配置改革试验区建设，大力提升知识产权创造推进我省国家资源型经济转型综合
                                        </p>
                                        <a href="#">[详情]</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="../../../static/img/usercenter/gg.png" alt="">
                                <div class="notice_content_c">
                                    <h4>山西省知识产权战略纲要</h4>
                                    <div>
                                        <p>
                                            为全面贯彻落实国家知识产权战略，推进我省国家资源型经济转型综合配置改革试验区建设，大力提升知识产权创造推进我省国家资源型经济转型综合
                                        </p>
                                        <a href="#">[详情]</a>
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
                            <div class="collection_content_item">
                                <img src="../../../static/img/usercenter/collection.png" alt="">
                                <p>画册设计</p>
                                <div class="collection_content_item_cc">
                                    <span>￥300</span>
                                    <div class="collection_content_item_ccc">
                                        <span>100%</span><span>好评</span> <br>
                                    </div>

                                </div>
                                <el-button type="primary" class="button" size="medium">立即办理</el-button>
                            </div>
                            <div class="collection_content_item">
                                <img src="../../../static/img/usercenter/collection.png" alt="">
                                <p>画册设计</p>
                                <div class="collection_content_item_cc">
                                    <span>￥300</span>
                                    <div class="collection_content_item_ccc">
                                        <span>100%</span><span>好评</span> <br>
                                    </div>

                                </div>
                                <el-button type="primary" class="button" size="medium">立即办理</el-button>
                            </div>
                            <div class="collection_content_item">
                                <img src="../../../static/img/usercenter/collection.png" alt="">
                                <p>画册设计</p>
                                <div class="collection_content_item_cc">
                                    <span>￥300</span>
                                    <div class="collection_content_item_ccc">
                                        <span>100%</span><span>好评</span> <br>
                                    </div>

                                </div>
                                <el-button type="primary" class="button" size="medium">立即办理</el-button>
                            </div>
                            <div class="collection_content_item">
                                <img src="../../../static/img/usercenter/collection.png" alt="">
                                <p>画册设计</p>
                                <div class="collection_content_item_cc">
                                    <span>￥300</span>
                                    <div class="collection_content_item_ccc">
                                        <span>100%</span><span>好评</span> <br>
                                    </div>

                                </div>
                                <el-button type="primary" class="button" size="medium">立即办理</el-button>
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
            userIn:'',
            berl:false
        }
    },
    mounted(){
            if(this.$store.state.user){
                     this.userIn =   this.$store.state.user
                     this.berl = true
            }

    },
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.main{
    display: flex;
    /* justify-content: space-between; */
    margin: 20px 3% 0;
    width: 93%;
}
.main_r{
    /* width: 355px; */
    flex: 0 0 34%;
    margin-left: 3%;
    max-width: 363px;
    min-width: 350px;

}
.main_l{
    flex: 1;
    width: 47%;

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
    flex-direction: column;
    display: flex;
    margin-left: 1%;
}
.notice_content h4{
    font-size: 14px;
    line-height: 23px;
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


/* .main_l */
.r1_top{
    height: 138px;
    padding: 12px;
    position: relative;
    border: 1px solid rgba(0,0,0,0.16);
    border-radius: 8px;
    /* width: 806px; */
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
    position: absolute;
    top: 26px;
    left: 15px;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    overflow: hidden;
}
.r1_top_tou img{
    width: 100%;
}

.r1_top_name{
    position: absolute;
    left: 100px;
    top: 48px;
}
.r1_top_name h4{
    font-size: 20px;
}
.r1_top_name p{
    color: #989898;
    font-size: 14px;
    line-height: 20px;
}
.r1_top_money{
    position: absolute;
    top: 40px;
    margin-left: 20px;
}
.r1_top_money p{
    color: #989898;
    font-size: 16px;
    line-height: 23px;
}
.r1_top_money span {
    font-size: 14px;
}
.r1_top_money a{
    color: #2878d8;
    font-size: 12px;
}
.money1{
    right: 170px;
}
.money1_button{
    background-color: #fff;
    padding: 2px 5px;
    border: 1px solid rgba(0,0,0,0.16);
}
.money2{
    right: 94px;
}
.money3{
    right: 26px;
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
    padding-l: 5px;
    text-align: center;
}
.order{
    margin-top: 20px;
    min-height: 136px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.16);
    /* width: 100%; */
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
    height: 104px;
    display: flex;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}
.order_content_c{
   text-align: center;
   vertical-align:middle;

   /* padding: 26px; */
}
.order_content_c  img{
    vertical-align:middle;

}
.order_content_c span{
    font-size: 14px;
}
.overview{
    height: 400px;
    /* width: 100%; */
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
