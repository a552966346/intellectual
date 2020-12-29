<template>
    <div class="user">

        <!-- <div class="user_left">
                <router-link to="/">
                        <div class="img_logo">
                        </div>
                </router-link>
            <ul class="con">
                <li class="con_c">
                    <router-link to="/usercenter" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/home.png" alt="">
                        个人中心
                    </router-link>
                </li>
                <li class="con_c"  v-on:click.self="isshow">
                    <router-link to="/usercenter/userbuy" class="item"  >
                        <img class="left_b" src="../../../static/img/usercenter/buyperson.png" alt="" >
                        <span  v-on:click.self="isshow">我是买家</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis">
                        <li>我的商标</li>

                    </ul>
                </li>
                <li  v-on:click.self="isshow_two">
                    <router-link to="/usercenter/usershop" class="item" >
                        <img class="left_b" src="../../../static/img/usercenter/shopperson.png" alt="">
                        <span v-on:click.self="isshow_two">我是卖家</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_two">
                        <li @click="isshow == true">出售商标</li>
                        <li>出售专利</li>
                        <li>出售版权</li>
                        <li>技术转让</li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_three">
                    <router-link to="/usercenter/usermanage" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/zjmanage.png" alt="">
                        <span v-on:click.self="isshow_three">资金管理</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_three">
                        <li>我的账号</li>
                        <li>我要提现</li>
                        <li>资金明细</li>
                        <li>我的押金</li>
                        <li>发票索取</li>
                        <li>绑定银行卡</li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_four">
                    <router-link to="/usercenter/usertel" class="imgs item">
                        <img class="left_b" src="../../../static/img/usercenter/tel.png" alt="">
                        <span v-on:click.self="isshow_four">投诉与咨询</span>
                        <img class="icon icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_four">
                        <li>我要投诉建议</li>
                        <li>真假客户验证</li>
                        <li>举报假客服</li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_five">
                    <router-link to="/usercenter/userid" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/id.png" alt="">
                        <span v-on:click.self="isshow_five">账号设置</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_five">
                        <li>实名认证</li>
                        <li>修改手机号</li>
                        <li>修改登录密码</li>
                        <li>个人信息</li>
                        <li>收货地址</li>
                        <li>我的邮箱</li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_six">
                    <router-link to="/usercenter/usermessage" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/user_message.png" alt="">
                        <span v-on:click.self="isshow_six"></span>全部消息
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_six">
                        <li>全部消息</li>
                        <li>未读消息</li>
                        <li>已读消息</li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_seve">
                    <router-link to="/usercenter/usercontract" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/mycontract_active.png" alt="">
                        <span v-on:click.self="isshow_seve">我的合同</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_seve">
                        <li>全部订单</li>
                        <li>未付款订单</li>
                        <li>已预订订单</li>
                        <li>交接中订单</li>
                        <li>已完成订单</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="user_right">
            <router-view></router-view>
        </div>
 -->
        <div class="user_left">
                <el-row class="tac">
                  <el-col >
                    <router-link to="/">
                            <div class="img_logo">
                            </div>
                    </router-link>
                    <el-menu
                      default-active="2"
                      router
                      unique-opened
                      class="el-menu-vertical-demo"
                      @select="select"
                      @open="handleOpen"
                      @close="handleClose">
                      <el-menu-item index="/usercenter">
                        <img class="left_b" src="../../../static/img/usercenter/home.png" alt="">
                        个人中心
                      </el-menu-item>
                      <el-submenu index="1">
                        <template slot="title">
                          <img class="left_b" src="../../../static/img/usercenter/buyperson.png" alt="" >
                          我是买家
                        </template>
                        <el-submenu index="/usercenter/userbuy?style=0">
                          <template slot="title">我的商标</template>
                          <el-menu-item index="/usercenter/userbuy?style=0">全部订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=0&&type=0">未付款订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=0&&type=1">已完成订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=0&&type=2">已取消订单</el-menu-item>
                        </el-submenu>
                        <el-submenu index="/usercenter/userbuy?style=1">
                          <template slot="title">我的专利</template>
                          <el-menu-item index="/usercenter/userbuy?style=1">全部订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=1&&type=0">未付款订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=1&&type=1">已完成订单</el-menu-item>
                          <el-menu-item index="/usercenter/userbuy?style=1&&type=2">已取消订单</el-menu-item>
                        </el-submenu>
                          <el-submenu index="/usercenter/userbuy?style=2">
                            <template slot="title">我的版权</template>
                            <el-menu-item index="/usercenter/userbuy?style=2">全部订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=2&&type=0">未付款订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=2&&type=1">已完成订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=2&&type=2">已取消订单</el-menu-item>
                          </el-submenu>
                          <el-submenu index="/usercenter/userbuy?style=3">
                            <template slot="title">技术转移</template>
                            <el-menu-item index="/usercenter/userbuy?style=3">全部订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=3&&type=0">未付款订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=3&&type=1">已完成订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=3&&type=2">已取消订单</el-menu-item>
                          </el-submenu>
                          <el-submenu index="/usercenter/userbuy?style=4">
                            <template slot="title">服务中心</template>
                            <el-menu-item index="/usercenter/userbuy?style=4">全部订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=4&&type=0">未付款订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=4&&type=1">已完成订单</el-menu-item>
                            <el-menu-item index="/usercenter/userbuy?style=4&&type=2">已取消订单</el-menu-item>
                          </el-submenu>
                          <el-menu-item index="/usercenter/userbuy?style=5">我的收藏</el-menu-item>
                      </el-submenu>
                     <el-submenu index="/usercenter/usershop">
                       <template slot="title">
                         <img class="left_b" src="../../../static/img/usercenter/shopperson.png" alt="">
                         我是卖家
                       </template>
                       <el-submenu index="/usercenter/usershop">
                         <template slot="title">出售知识产权</template>
                         <el-menu-item index="/usercenter/usershop?type=1">出售商标</el-menu-item>
                         <el-menu-item index="/usercenter/usershop?type=2">出售专利</el-menu-item>
                         <el-menu-item index="/usercenter/usershop?type=3">出售版权</el-menu-item>
                         <el-menu-item index="/usercenter/usershop?type=4">技术转让</el-menu-item>
                       </el-submenu>
                     </el-submenu>
                     <el-submenu index="/usercenter/usermanage">
                       <template slot="title">
                         <img class="left_b" src="../../../static/img/usercenter/zjmanage.png" alt="">
                         资金管理
                       </template>
                        <el-menu-item index="/usercenter/usermanage">我的账号</el-menu-item>
                         <el-menu-item index="/usercenter/usermanage?type=0">我要提现</el-menu-item>
                         <el-menu-item index="/usercenter/usermanage?type=1">资金明细</el-menu-item>
                         <el-menu-item index="/usercenter/usermanage?type=2">我的押金</el-menu-item>
                         <el-menu-item index="/usercenter/usermanage?type=3">发票索取</el-menu-item>
                         <el-menu-item index="/usercenter/usermanage?type=4">绑定银行卡</el-menu-item>
                     </el-submenu>
                     <el-submenu index="/usercenter/usertel">
                       <template slot="title">
                         <img class="left_b" src="../../../static/img/usercenter/tel.png" alt="">
                         投诉与咨询
                       </template>
                        <el-menu-item index="/usercenter/usertel?type=0">我要投诉建议</el-menu-item>
                        <!-- <el-menu-item index="/usercenter/usertel?type=1">真假客服验证</el-menu-item>
                         <el-menu-item index="/usercenter/usertel?type=2">举报客服</el-menu-item> -->
                     </el-submenu>
                     <el-submenu index="/usercenter/userid">
                       <template slot="title">
                         <img class="left_b" src="../../../static/img/usercenter/id.png" alt="">
                         账号设置
                       </template>
                        <el-menu-item index="/usercenter/userid?type=0">实名认证</el-menu-item>
                         <el-menu-item index="/usercenter/userid?type=1">修改手机号</el-menu-item>
                         <el-menu-item index="/usercenter/userid?type=2">修改登录密码</el-menu-item>
                         <el-menu-item index="/usercenter/userid?type=3">个人信息</el-menu-item>
                         <el-menu-item index="/usercenter/userid?type=4">收货地址</el-menu-item>
                         <el-menu-item index="/usercenter/userid?type=5">我的邮箱</el-menu-item>
                     </el-submenu>
                      <el-submenu index="/usercenter/usermessage">
                        <template slot="title">
                          <img class="left_b" src="../../../static/img/usercenter/user_message.png" alt="">
                          我的消息
                        </template>
                         <el-menu-item index="/usercenter/usermessage?type=0">全部消息</el-menu-item>
                          <el-menu-item index="/usercenter/usermessage?type=1">未读消息</el-menu-item>
                          <el-menu-item index="/usercenter/usermessage?type=2">已读消息</el-menu-item>
                      </el-submenu>
                      <el-menu-item index="/usercenter/usercontract">
                        <img class="left_b" src="../../../static/img/usercenter/mycontract_active.png" alt="">
                        <span slot="title">我的合同</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                </el-row>
        </div>
        <div class="user_right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            msg:'这是测试内容',
            tabPosition: 'left',

              }
   },
   methods:{
                handleOpen(key, keyPath) {
                   console.log(key, keyPath);
                 },
                 handleClose(key, keyPath) {
                   console.log(key, keyPath);
                 },
                 select(index,path){
                 }
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
    overflow: auto;
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
    font-size: 15px;
    /* overflow: auto; */
}
.tac{
        width: 100%;
        border: none;
}
.el-col {
        width: 100%;
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
.user_left>ul {
    padding: auto;
}
.user_left>ul>li{
    /* height: 54px; */
    border-bottom: 1px solid rgba(0,0,0,0.16);
    text-align: center;
    line-height: 54px;
    position: relative;
}
.user_left .item{
    height: 54px;
    color: #666;

}
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
.item:focus  .icon{
    translate: 0.2s;
    transform: rotate(90deg);
    right: 10px;
}
.item:focus  .icon_b{
    translate: 0.2s;
    transform: rotate(90deg);
    right: -30px;
}
/* .items>li{
    max-height: 0;
    opacity: 0;
}
.item:target {
    max-height: auto;
    opacity: 1;
} */
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
