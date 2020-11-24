<template>
 <div id="login">
   <div class="login_top">
      <div>
        <el-image
        style="width: 300px; "
        src="../../../static/img/login/logo.png"
        fit="fill"></el-image>
        <div>
          <el-image
            style="width: 20px; "
            src="../../../static/img/login/home_icon.png"
            fit="fill"></el-image>
            <p>返回伊甸城首页</p>
        </div>
      </div>
   </div>
   <div class="login_center">
     <!-- 登录 -->
     <div class="login_content">
       <p class="welcome_title">HI 欢迎来到<span style="color:#69a0e2">伊甸城</span></p>
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch='true'>
          <el-tab-pane label="账户密码登录" name="first">
            <!-- 账号登录 -->
            <div>
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="pass" class="login_form_item">
                  <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder='请输入注册手机号/邮箱/用户名'></el-input>
                </el-form-item>
                <el-form-item prop="checkPass" class="login_form_item">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder='登录密码'></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="register" style="">
                      <div>
                        <input type="checkbox">自动登录
                        <p>| 忘记密码</p>
                      </div>
                      <div>
                        <p style="color:#69a0e2">注册账号></p>
                      </div>
                   </div>
                </el-form-item>
                <el-form-item class="login_form_item">
                  <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:40px">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="party">
              <p>第三方登录:</p>
              <div>
                <img src="../../../static/img/login/wx_icon.png" alt="">
                <img src="../../../static/img/login/zfy_icon.png" alt="">
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手机验证码登录" name="second">
            <!-- 验证码登录 -->

          </el-tab-pane>
        </el-tabs>
     </div>
      <div class="register_content"></div>
   </div>
   <div class="login_bottom">
     <p>晋中市华迅网络科技股份有限公司 版权所有</p>
   </div>
 </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
       ruleForm: {
          username: '',
          pass: '',
          type: [],
        },
      
    }
  }
}

</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #login{
    height: 100%;
  }
  /* 顶部 */
  .login_top{
    height:15%;
    display: flex;
    justify-content: center;
    /* padding: 40px 15% 20px; */
  }
  .login_top>div{
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom:20px ;
  }
  .login_top>div>div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_top>div>div>p{
    padding-left: 15px;
  }
  /* 中部 */
  .login_center{
    height: 65%;
    background-image:url('../../../static/img/login/login_bg.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 25%;
  }
  .welcome_title{
    padding: 0px 0 10px;
    text-align: center;
  }
  .register{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color:#666
  }
  .register>div{
    display: flex;
    align-items: center;
  }
  .register>div>p{
    padding-left: 5px;
  }
  .login_content{
    background: #fff;
    border-radius: 5px;
    padding: 30px;
    width: 360px;
  }
  .login_form_item{
    padding: 10px 0;
  }
  .party{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 15px 0 0;
  }
  .party>div{
    padding: 10px 0;
  }
  
  
/* 底部 */
.login_bottom{
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color:#999
}
</style>