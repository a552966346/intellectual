<template>
 <div id="login">
   <div class="login_top">
      <div>
        <el-image
        style="width: 300px;"
        src="../../../static/img/login/logo.png"
        fit="fill"></el-image>
        <div>
          <el-image
            style="width: 20px;"
            src="../../../static/img/login/home_icon.png"
            fit="fill"></el-image>
            <router-link to="/">返回伊甸城首页</router-link>
        </div>
      </div>
   </div>
   <div class="login_center">
     <!-- 登录 -->
     <div class="login_content">
       <p class="welcome_title">HI 欢迎来到<span style="color:#69a0e2">伊甸城</span></p>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="stretch_status" v-show="toggle_page">
          <el-tab-pane label="账户密码登录" name="passworld">
            <!-- 账号登录 -->
            <div>
              <el-form :model="login_ruleForm" status-icon :rules="login_rules" ref="login_ruleForm" class="demo-ruleForm">
                <el-form-item prop="username" class="login_form_item">
                  <el-input type="text" v-model="login_ruleForm.username" autocomplete="off" placeholder='请输入注册手机号/邮箱/用户名'></el-input>
                </el-form-item>
                <el-form-item prop="pass" class="login_form_item">
                  <el-input type="password" v-model="login_ruleForm.pass" autocomplete="off" placeholder='登录密码'></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="register" style="">
                      <div>
                        <input type="checkbox">自动登录
                        <p>| 忘记密码</p>
                      </div>
                      <div>
                        <p style="color:#69a0e2;cursor:pointer;" @click="toggle_page_all">注册账号></p>
                      </div>
                   </div>
                </el-form-item>
                <el-form-item class="login_form_item">
                  <el-button type="primary" @click="submitForm('login_ruleForm')" style="width:100%;height:40px">登录</el-button>
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
          <el-tab-pane label="手机验证码登录" name="verification">
            <!-- 验证码登录 -->
             <div>
              <el-form :model="verification_ruleForm" status-icon :rules="verification_rules" ref="verification_ruleForm" class="demo-ruleForm">
                <el-form-item prop="phone" class="login_form_item">
                  <el-input type="text" v-model="verification_ruleForm.phone" autocomplete="off" placeholder='请输入手机号'></el-input>
                </el-form-item>
                <el-form-item prop="authcode" class="login_form_item inline_st">
                  <el-row>
                    <el-col :span="16">
                      <div class="grid-content">
                          <el-input type="password" v-model="verification_ruleForm.authcode" autocomplete="off" placeholder='输入验证码'></el-input>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content">
                        <el-button type="primary" @click="getVerification" style="width:100%;height:40px;">获取验证码</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                    <div class="register" style="">
                      <div>
                        <input type="checkbox">自动登录
                        <p>| 忘记密码</p>
                      </div>
                      <div>
                        <p style="color:#69a0e2;cursor:pointer;" @click="toggle_page_all">注册账号></p>
                      </div>
                   </div>
                </el-form-item>
                <el-form-item class="login_form_item">
                  <el-button type="primary" @click="submitForm('verification_ruleForm')" style="width:100%;height:40px">登录</el-button>
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
        </el-tabs>
        <!-- 注册 -->
        <div class="register_page" v-show="!toggle_page">
          <el-form :model="register_ruleForm" status-icon :rules="register_rules" ref="register_ruleForm" class="demo-ruleForm">
            <el-form-item prop="phone" class="login_form_item">
              <el-input type="text" v-model="register_ruleForm.phone" autocomplete="off" placeholder='请输入手机号'>
                <i slot="prepend" class="el-icon-mobile"></i>
              </el-input>
            </el-form-item>
             <el-form-item prop="authcode" class="login_form_item inline_st">
                  <el-row>
                    <el-col :span="16">
                      <div class="grid-content">
                          <el-input type="text" v-model="register_ruleForm.authcode" autocomplete="off" placeholder='输入验证码'>
                            <i slot="prepend" class="el-icon-key"></i>
                          </el-input>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content">
                        <el-button type="primary" @click="getVerification" style="width:100%;height:40px;">获取验证码</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </el-form-item>
            <el-form-item prop="pass" class="login_form_item">
              <el-input type="password" v-model="register_ruleForm.pass" autocomplete="off" placeholder='登录密码'>
                <i slot="prepend" class="el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item style="border-bottom: 1px dashed #c5c5c5;">
                <div class="register" style="">
                  <div>
                    <input type="checkbox">我已阅读并同意
                    <p style="text-decoration: underline;">服务协议、</p>
                    <p style="text-decoration: underline;">隐私保护政策</p>
                  </div>
                </div>
            </el-form-item>
            <el-form-item class="login_form_item">
              <el-button type="primary" @click="submitForm('register_ruleForm')" style="width:100%;height:40px">注册</el-button>
            </el-form-item>
          </el-form>
          <div class="goto_login">
            <p @click="toggle_page_all">返回登录></p>
          </div>
        </div>
     </div>
      <div class="register_content"></div>
   </div>
   <div class="login_bottom">
     <p>晋中市华迅网络科技股份有限公司 版权所有</p>
   </div>
 </div>
</template>

<script>
import {validatePhone,validatePassword} from '@/util/rules.js'
export default {
  name:'login',
  data(){
    return{
      // 规则校验(账户密码登录)
      login_rules: {
        username: [
          { required: true, trigger: 'blur',message:'请输入用户名' },{ min:6,max:18,trigger:'blur',message:'账号为6-18位'}
        ],
        pass: [
          { required: true, trigger: 'blur',message:'请输入密码'},{ min:8,max:16 ,trigger:'blur',message:'密码为8-16位'}
        ],
      },
      // 规则校验(手机号登录)
      verification_rules: {
        phone: [
          { required: true, trigger: 'blur',message:'请输入手机号'},{ validator: validatePhone, trigger: 'blur' }
        ],
        authcode: [
          { required: true, trigger: 'blur',message:'请输入验证码'},{ min:4,max:6 ,trigger:'blur',message:'验证码错误'}
        ],
      },
      // 规则校验(注册)
      register_rules: {
        phone: [
          { required: true, trigger: 'blur',message:'请输入手机号'},{ validator: validatePhone, trigger: 'blur' }
        ],
        authcode: [
          { required: true, trigger: 'blur',message:'请输入验证码'},{ min:4,max:6 ,trigger:'blur',message:'验证码错误'}
        ],
        pass:[
          { required: true, trigger: 'blur',message:'请输入密码' },{ validator: validatePassword, trigger: 'blur' }
        ]
      },
      // 是否自动撑开 （tabs）
      stretch_status:true,
      // page_toggle 变量
      toggle_page:true,
      // 密码登录
      login_ruleForm: {
        username: '',
        pass: ''
      },
      // 验证码登录
      verification_ruleForm:{
        phone:'',
        authcode:''
      },
      // 注册
      register_ruleForm:{
        phone:'',
        authcode:'',
        pass:''
      },
      activeName:'passworld'
      
    }
  },
  beforeMount(){
    console.log(validatePhone)
  },
  methods: {
    // 手机号登录和验证码登录切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 获取验证码
    getVerification(){

    },
    // 注册切换页面
    toggle_page_all(){
      this.toggle_page = !this.toggle_page
    },
    // 提交按钮表单验证
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
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
    display: flex;
    flex-direction:column;
    
    
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
    padding-bottom:20px;
  }
  .login_top>div>div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_top>div>div>a{
    padding-left: 15px;
    text-decoration: none;
    color:#333
  }
  /* 中部 */
  .login_center{
    /* height: 65%; */
    flex: 1;
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
  /* 注册 */
  .register_page{
    border-top: 3px solid #338bec;
    height: 300px;
    
  }
  /* 返回登录 */
  .goto_login{
    font-size: 14px;
    color: #338bec;
  }
  .goto_login>p{
    text-align: right;
    cursor:pointer;
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