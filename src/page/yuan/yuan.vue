<template>
<div class="user">
        
        <div class="user_left">
            <div class="img_logo">
            </div>
            <div class="left_center">
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item  title="个人中心" name="1"></el-collapse-item>
                  <el-collapse-item title="我是买家" name="2">
                    <div>
                      <ul class="items">
                        <li>我的商标<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>全部订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未付款订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已预订订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>交接中订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已完成订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="我是卖家" name="3">
                    <div>
                        <ul class="items">
                            <li>出售知识产权<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                            <li>出售商标<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                            <li>出售专利<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                            <li>出售版权<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                            <li>技术转让<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="资金管理" name="4">
                    <div>
                      <ul class="items">
                        <li>我的账号<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我要提现<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>资金明细<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我的押金<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>发票索取<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>绑定银行卡<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="投诉与咨询" name="5">
                    <div>
                      <ul class="items">
                        <li>我要投诉建议<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>真假客户验证<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>举报假客服<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="账号设置" name="6">
                    <div>
                      <ul class="items">
                        <li>实名认证<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>修改手机号<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>修改登录密码<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>个人信息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>收货地址<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我的邮箱<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="全部消息" name="7">
                    <div>
                      <ul class="items">
                        <li>全部消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未读消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已读消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="我的合同" name="8">
                    <div>
                      <ul class="items">
                        <li>全部订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未付款订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已预订订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>交接中订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已完成订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                      </ul>
                    </div>
                  </el-collapse-item>
                </el-collapse>    
            </div>
        </div>  
        <div class="user_right">
            <router-view></router-view>
        </div>    
</div>                
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
<style scoped>
a {
    text-decoration: none;
}
.user{
    display: flex;
    height: 96%;
}
/* .user_left */
.user{
    height: 100%;    
}
 .user_left{
    width:200px;
    height: 100%;    
    position: fixed;
    top: 35px;
    left: 0;
    box-shadow: 2px 1px 1px rgba(0,0,0,0.16);
}
.user_right{
    flex: 1; 
    position: fixed;
    top: 54px;
    right: 0;
    bottom: 0;
    left: 201px;
    overflow-y: auto;
    /* overflow: hidden; */
}
.img_logo{
    background: url('../../../static/img/usercenter/logo.png') 0 0 no-repeat;
    background-position: center;
    height: 124px;
    /* vertical-align:top; */
}
.el-collapse-item__header {
    height: 54px;
    line-height: 54px;
    padding-left: 20px;
    color: #666;  
    border-bottom: 1px solid #EBEEF5;
    font-size: 16px;
}
.el-collapse-item__content {
    padding-bottom: 0;
    height: 54px;
    
}

/* .user_left>ul>li{
    /* height: 54px; */
    /* border-bottom: 1px solid rgba(0,0,0,0.16);
    text-align: center;
    line-height: 54px;
    position: relative;
} */ 

.icon{
    position: absolute;
    right: 2px;
    top: 13px;
    width: 13%;
}
.icon_b{
    position: absolute;
    right: -37px;
    top: -2px;
    width: 26%;
}

.user_left li:last-of-type{
    border-bottom: none;
}
.left_b{
    margin-right: 10px;
    margin-bottom: -2px;
    display: inline-block;
    visibility: visible;
}

.user_left .item:focus{
    color: #1a7fc5;
}
.imgs{
    position: relative;
    left:8px;
}

.items>li:nth-of-type(1){
    border-top: 1px solid rgba(0,0,0,0.16);
}

.items>li{
    display: block;
    padding-left: 73px;
    height: 34px;
    color: #666; 
    line-height: 34px;
    text-align: left;
    position: relative;
}

.items>li img{
    position: absolute;
    right: 2px;
    top: 5px;
    width: 13%;
}


</style>