<template>
    <div class="user">

        <div class="user_left">
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
                        <li>我的商标<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>全部订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未付款订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已预订订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>交接中订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已完成订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li  v-on:click.self="isshow_two">
                    <router-link to="/usercenter/usershop" class="item" >
                        <img class="left_b" src="../../../static/img/usercenter/shopperson.png" alt="">
                        <span v-on:click.self="isshow_two">我是卖家</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_two">
                        <li>出售商标<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>出售专利<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>出售版权<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>技术转让<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_three">
                    <router-link to="/usercenter/usermanage" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/zjmanage.png" alt="">
                        <span v-on:click.self="isshow_three">资金管理</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_three">
                        <li>我的账号<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我要提现<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>资金明细<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我的押金<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>发票索取<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>绑定银行卡<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_four">
                    <router-link to="/usercenter/usertel" class="imgs item">
                        <img class="left_b" src="../../../static/img/usercenter/tel.png" alt="">
                        <span v-on:click.self="isshow_four">投诉与咨询</span>
                        <img class="icon icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_four">
                        <li>我要投诉建议<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>真假客户验证<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>举报假客服<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_five">
                    <router-link to="/usercenter/userid" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/id.png" alt="">
                        <span v-on:click.self="isshow_five">账号设置</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_five">
                        <li>实名认证<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>修改手机号<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>修改登录密码<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>个人信息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>收货地址<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>我的邮箱<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_six">
                    <router-link to="/usercenter/usermessage" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/user_message.png" alt="">
                        <span v-on:click.self="isshow_six"></span>全部消息
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_six">
                        <li>全部消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未读消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已读消息<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
                <li v-on:click.self="isshow_seve">
                    <router-link to="/usercenter/usercontract" class="item">
                        <img class="left_b" src="../../../static/img/usercenter/mycontract_active.png" alt="">
                        <span v-on:click.self="isshow_seve">我的合同</span>
                        <img class="icon" src="../../../static/img/usercenter/icon-arrow.png" alt="">
                    </router-link>
                    <ul class="items" v-show="showis_seve">
                        <li>全部订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>未付款订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已预订订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>交接中订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                        <li>已完成订单<img class="icon_b" src="../../../static/img/usercenter/icon-arrow.png" alt=""></li>
                    </ul>
                </li>
            </ul>
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
            showis:false,
            showis_two:false,
            showis_three:false,
            showis_four:false,
            showis_five:false,
            showis_six:false,
            showis_seve:false,
              }
   },
   methods:{
       isshow(){
           this.showis = !this.showis
           this.showis_two = false
           this.showis_three = false
            this.showis_four = false
            this.showis_five = false
            this.showis_six = false
            this.showis_seve = false
       },
       isshow_two(){
           this.showis = false
            this.showis_two = !this.showis_two
            this.showis_three = false
            this.showis_four = false
            this.showis_five = false
            this.showis_six = false
            this.showis_seve = false
       },
       isshow_three(){
           this.showis = false
           this.showis_two = false
           this.showis_three = !this.showis_three
            this.showis_four = false
            this.showis_five = false
            this.showis_six = false
            this.showis_seve = false

       },
       isshow_four(){
           this.showis = false
           this.showis_two = false
           this.showis_three = false
            this.showis_four = !this.showis_four
            this.showis_five = false
            this.showis_six = false
            this.showis_seve = false
       },
       isshow_five(){
           this.showis = false
           this.showis_two = false
           this.showis_three = false
            this.showis_four = false
            this.showis_five = !this.showis_five
            this.showis_six = false
            this.showis_seve = false
       },
       isshow_six(){
           this.showis = false
           this.showis_two = false
           this.showis_three = false
            this.showis_four = false
            this.showis_five = false
            this.showis_six = !this.showis_six
            this.showis_seve = false
       },
       isshow_seve(){
           this.showis = false
           this.showis_two = false
           this.showis_three = false
            this.showis_four = false
            this.showis_five = false
            this.showis_six = false
            this.showis_seve = !this.showis_seven
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
