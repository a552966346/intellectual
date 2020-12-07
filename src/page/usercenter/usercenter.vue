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
                <li> <router-link to="/usercenter/userbuy"><img class="left_b" src="../../../static/img/usercenter/buyperson.png" alt="">我是买家</router-link></li>
                <li><a href="#"><img class="left_b" src="../../../static/img/usercenter/shopperson.png" alt="">我是卖家</a></li>
                <li><a href="#"><img class="left_b" src="../../../static/img/usercenter/zjmanage.png" alt="">资金管理</a></li>
                <li><a href="#" class="imgs"><img class="left_b" src="../../../static/img/usercenter/tel.png" alt="">投诉与咨询</a></li>
                <li><a href="#"><img class="left_b" src="../../../static/img/usercenter/id.png" alt="">账号设置</a></li>
                <li><a href="#"><img class="left_b" src="../../../static/img/usercenter/user_message.png" alt="">全部消息</a></li>
                <li><a href="#"><img class="left_b" src="../../../static/img/usercenter/mycontract_active.png" alt="">我的合同</a></li>
            </ul>
        </div>
        <router-view></router-view>
        
       
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
    height: 100%;
}
/* .user_left */
.user .user_left{
    flex: 0 0 200px;
    height: 100%;    
    box-shadow: 2px 1px 1px rgba(0,0,0,0.16);
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
    display: inline-block;
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