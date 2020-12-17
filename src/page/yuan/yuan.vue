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
                    <div class="el-collapse-item__content">
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
          <div class="r">
          
            <div class="s_t_sea">
                <input type="s_text" placeholder="请输入您要查找的商品编号或注册号">
                <div class="s_search">搜索</div>
            </div>
              
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first" class=" el-tabs__item is-top" background-color="#000">
                <div class="s_details"></div>
                  <ul class="s_con_b selltrademark1">
                          <li class="s_con_b_item">1</li>
                          <li class="s_con_b_item">2</li>
                          <li class="s_con_b_item">3</li>
                          <li class="s_con_b_item">4</li>
                          <li class="s_con_b_item">5</li>
                          <li class="s_con_b_item">6</li>
                  </ul> 
                <div class="s_content">
                  <div class="s_content_c">
                    <img src="../../../static/img/usercenter/nomessage.png" alt="">
                    <p>没有看到您的商品信息。</p>
                    <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                  </div>    
                </div>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">
                 <ul class="s_con_b selltrademark1">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">4</li>
                        <li class="s_con_b_item">5</li>
                        <li class="s_con_b_item">6</li>
                  </ul> 
              </el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
              
            </el-tabs>
          </div>
        </div>    
</div>                
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        activeName: 'first'
      }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    mounted() {

            this.$api.getCopyrightcondition()
                  .then(res=>{
                          this.zlTop = res.data
                          let i=res.data.length
                          if(i = 0){
                                  this.iscolor[i] = 0
                          }else{

                          }

                  })
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
.el-tabs--card>.el-tabs__header{
  background: #000 !important;
}

.el-tabs__nav {
  background-color: pink!important;
}
el-tabs>>>.el-tab-pane{
  background-color:  pink;
}
/* 搜素框 */

.s_t_sea{
    width: 280px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
}
.s_t_sea input{
    width: 220px;
    display: flex;
    font-size: 10px;
    border: 1px solid #efefef;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px ;
}
.s_search{
    width: 50px;
    height: 25px;
    font-size: 14px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
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
}
/* 各项内容 */
.s_con_b{
    margin-top: 20px;
    height: 35px;
    /* border-radius: 5px;
    border: 1px solid #efefef; */
    display: flex;
    justify-content: space-around;
    color: #b7b7b7;
}


.s_con_b_item{
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 没有订单 */
.s_content{
    height: 300px;
    display: flex;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
        margin-top: 15px;

}


.s_content_c{
   text-align: center;
   vertical-align:middle;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
   font-size: 16px;
   color: #5f5f5f;
   line-height: 1.5;
   
}
.s_content_c p:nth-of-type(2){
    font-size: 12px;
}
.s_content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}
.s_content_c a{
    color: #1c7fc3;
    text-decoration: none;
}



/* 左侧 */
.img_logo{
    background: url('../../../static/img/usercenter/logo.png') 0 0 no-repeat;
    background-position: center;
    height: 124px;
    /* vertical-align:top; */
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
    right: 4px;
    top: 8px;
    width: 8%;
}



/* .user_left>ul>li{
    /* height: 54px; */
    /* border-bottom: 1px solid rgba(0,0,0,0.16);
    text-align: center;
    line-height: 54px;
    position: relative;
} */ 



</style>