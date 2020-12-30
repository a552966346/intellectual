<template>
    <div class="mobilephone_all">
        <div class="mobilephone_tpw">
            账号设置/修改密码
        </div>
        <div class="mobile_top">
            <span class="mobile_tos">修改密码</span>
            <img class="mobile_toimg" src="../../../static/img/usercenter/exclamationpoint.png" alt="">
            <span class="mobile_toft">请修改</span>
            <span class="mobile_toft">可以通过验证手机号进行相关安全操作</span>
        </div>
        <div class="mobile_cent">
            <el-steps :space="200" :active="active" finish-status="success" :align-center="true">
              <el-step title="身份验证"></el-step>
              <el-step title="输入密码"></el-step>
              <el-step title="修改成功"></el-step>
            </el-steps>
            <div class="mobil_tctton">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="绑定手机" prop="phone">
                                   <el-input v-model="ruleForm.phone" class="_input" @change="phones"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                            <el-col :span="11">
                            <el-input v-model="ruleForm.code"></el-input>
                            </el-col>
                            <el-col :span="3">
                                    <div class="grid-content">
                                            <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                            alt="" @click="getVerification"></div>
                                    </div>
                            </el-col>
                    </el-form-item>
                    <el-form-item >
                            <el-col :span="5">
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            </el-col>
                            <el-col :span="15">
                            <div class="sub_text" style="float: right;">
                                    <img src="../../../static/img/usercenter/exclamationpoint.png"
                                            alt="">
                                    <span>请在30分钟内进行验证！</span>
                            </div>
                            </el-col>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
        import {
                validatePhone,
        } from '@/util/rules.js'
    export default {
        data(){
            return{
                ruleForm: {
                    phone: '',
                    code: ''
                },
                rules: {
                    phone: [{
                            required: true,
                            message: '请填写手机号',
                            trigger: 'blur'},
                            {
                                    validator: validatePhone,
                                    trigger: 'blur'
                            }
                            ],
                    code:[{
                            required: true,
                            message: '请输入验证码',
                            trigger: 'blur'
                    }],
                },
                html:0,
                active:0
            }
        },
        mounted() {
                if(this.$store.state.user.id){
                        this.active=1
                }
        },
        methods: {
            getVerification() {
                    this.html = Math.random();
            },
            phones(){
                    if(this.ruleForm.phone !=""){
                            this.active=2
                    }else{
                            this.active=1
                    }
            },
            submitForm(fromName){
                    this.$refs[fromName].validate((valid) => {
                            if(valid){
                                    this.$api.changemobile(this.ruleForm.phone,this.ruleForm.code,this.$store.state.user.id)
                                    .then(res=>{
                                            this.active = 3
                                           this.$message({
                                                     message:res.msg,
                                                     type: 'success'
                                                   });
                                    })
                            }
                    })
            }
        }
    }
</script>

<style scoped>
    .mobilephone_all{
        height: 100%;
        width: 100%;
        background-color: #f0f0f0;
        padding: 15px 0 0 10px;
        display: flex;
        flex-direction: column;
    }
    .mobilephone_tpw{
        width: 100%;
        height: 52px;
        background-color: #fff;
        display: flex;justify-content: flex-start;align-items: center;
        padding-left: 15px;
        font-size: 14px;
    }
    .mobile_cent{
        width: 100%;
        flex: 1;
        background-color: #fff;
        padding-left: 15px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    .mobile_top{
        margin-top: 15px;
        width: 100%;
        background-color: #fff;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: row;
    }
    .mobile_tos{
        color: red;
        font-size: 18px;
        font-weight: bold;
    }
    .mobile_toft{
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
    }
    .el-steps{
            justify-content: center;
            padding: 20px 0;
    }
    .mobile_toimg{
        height: 15px;
        margin: 5px 0px 0px 15px;
    }
    ._input{width: 150px;}
    .mobil_top{width: 420px; margin: 0 auto; display: flex;justify-content: space-between;align-content: center; margin-bottom: 20px;flex-direction: column;}
    .mobil_tctton{display: flex;justify-content: center;align-items: center;}
    .mobil_tie{width: 100%;display: flex;justify-content: space-around;align-content: center;}
</style>
