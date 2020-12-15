<template>
    <div class="user">
        
        <div class="user_left">
            <div class="img_logo">

            </div>
            <ul>
                <li>
                    <router-link to="/usercenter">
                        <img class="left_b" src="../../../static/img/usercenter/home.png" alt="">
                        个人中心
                    </router-link>
                </li>
                <li><router-link to="/usercenter/userbuy"><img class="left_b" src="../../../static/img/usercenter/buyperson.png" alt="">我是买家</router-link></li>
                <li><router-link to="/usercenter/usershop"><img class="left_b" src="../../../static/img/usercenter/shopperson.png" alt="">我是卖家</router-link></li>
                <li><router-link to="/usercenter/usermanage"><img class="left_b" src="../../../static/img/usercenter/zjmanage.png" alt="">资金管理</router-link></li>
                <li><router-link to="/usercenter/usertel" class="imgs"><img class="left_b" src="../../../static/img/usercenter/tel.png" alt="">投诉与咨询</router-link></li>
                <li><router-link to="/usercenter/userid"><img class="left_b" src="../../../static/img/usercenter/id.png" alt="">账号设置</router-link></li>
                <li><router-link to="/usercenter/usermessage"><img class="left_b" src="../../../static/img/usercenter/user_message.png" alt="">全部消息</router-link></li>
                <li><router-link to="/usercenter/usercontract"><img class="left_b" src="../../../static/img/usercenter/mycontract_active.png" alt="">我的合同</router-link></li>
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
            tabPosition: 'left'
              }
   },
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
.user_left ul {
    padding: auto;
}
.user_left li{
    height: 54px;
    border-bottom: 1px solid rgba(0,0,0,0.16);
    text-align: center;
    line-height: 54px;
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
.user_left li a {
    color: #666;

}
.user_left li a:hover,
.user_left li a:focus{
    color: #0184fe;
   
}
.imgs{
    position: relative;
    left:8px;
}





</style>