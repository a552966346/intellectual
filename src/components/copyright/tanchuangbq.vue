<template>
  <div class="tc_all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
            <!-- left -->
            <div class="tanchuang_title_l">
                <div class="tanchuang_title_img">
                    <img src="../../../static/img/copyright/tc_z.png" alt="" >
                </div>
                <div class="tanchuang_title_text">我要出售版权</div>
            </div>
            <!-- right -->
            <div class="tanchuang_title_r" @click="close">
                <img src="../../../static/img/copyright/close.png" alt="" >
            </div>

      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit">填写详情</div>
        <el-form ref="form_rul" :model="form1" label-width="100px" :rules="form_rul">
          <el-form-item label="版权名称" prop="name">
            <el-input v-model="form1.name"
              placeholder="请输入版权名称（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="版权分类">
            <select name="shangbiao" v-model="select" style="width: 100%;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: #555;padding-left: 15px;">
                    <option value="">请选择商标类别</option>
                    <option v-for="item in option" :value="item.id">{{item.name}}</option>
            </select>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="form1.phone"
              placeholder="请输入您的联系方式（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证号码" prop="authcode">
                  <el-row>
                          <el-col :span="12">
                                  <div class="grid-content">
                                          <el-input type="text" v-model="form1.authcode"
                                                  autocomplete="off" placeholder='输入验证码'>
                                                  <!-- <i slot="prepend" class="el-icon-key"></i> -->
                                          </el-input>
                                  </div>
                          </el-col>
                          <el-col :span="12">
                                  <div class="grid-content" style="text-align: center;">
                                          <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                          alt="" @click="getVerification()"></div>
                                  </div>
                          </el-col>
                  </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="color: #fff; background: #2b3d63; width: 42%"
             @click="fabu('form_rul')" >确认发布</el-button
            >
            <el-button
            @click="kefu"
              type="primary"
              style="
                border: 1px solid #ceaa88;
                background: #fff;
                color: #eb9848;
                width: 42%;
                margin-bottom:20px
              "
              >联系客服</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
        import {
                validatePhone
        } from '@/util/rules.js'
export default {
  data() {
    return {
      form1:{
        name:'',
        phone:'',
        authcode:''
      },
      isshow:false,
      select:'',
      html:'',
      form_rul: {
              phone: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入手机号'
              }, {
                      validator: validatePhone,
                      trigger: 'blur'
              }],
              authcode: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入验证码'
              }, {
                      min: 4,
                      max: 6,
                      trigger: 'blur',
                      message: '验证码错误'
              }],
              name: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入版权名称'
              }, ],
      },
      option:''
    };
  },
  mounted() {
          this.$api.getbanquan()
          .then(res=>{
                  this.option = res.data
          })
          .catch(err =>{
          })
          this.signoutShow = sessionStorage.getItem('user');
  },
  methods:{
    close(){
      this.$emit("close")
    },
    kefu(){
            this.$emit("kefu")
    },
    getVerification() {
            this.html = Math.random();
    },
    fabu(fromname) {
            if(this.signoutShow=='null'||this.signoutShow==null){
                    this.$message({
                            message: '您还没有登录，请先登录',
                            center: true,
                            type: 'error'
                    });
                    this.$router.push({ path: '/login' })
            }else{
                 this.$refs[fromname].validate((valid) => {
                    if(valid){
                          this.$api.getsellpost(this.select, '', this.form1
                                         .phone, this.form1.name, '', 3,
                                         this.form1.authcode)
                                 .then(res => {
                                         if (res.code == 1) {
                                                 this.$message({
                                                         message: '发布成功',
                                                         type: 'success'
                                                 });
                                                 this.$emit("fabu")
                                         } else {
                                                 this.$message.error({
                                                         message: '添加失败',
                                                         type: 'error'
                                                 });
                                         }
                                 })
                                 .catch(err => {
                                 })
                    }

                 })

            }

    }
  },
};
</script>

<style scoped>
.tc_all {
  padding: 20px;
  width: 40%;
}
.tanchuang_all {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.el-form-item__label{
        text-align: center !important;
}
.tanchuang_title_text {
  font-size: 15px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title {
  background: #29334c;
  color: white;
  display: flex;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tanchuang_title_img{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-right: 8px;
}
.tanchuang_title_l{
  display: flex;
}
.tanchuang_title_r{
  margin-right: 5px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title_r img{
  height: 36px;
}
.tanchuang_bodytit {
  font-size: 16px;
  text-align: center;
  padding: 30px;
  color: #484848;
}
.tanchuang_body {
  width: 400px;
  margin: 0 auto;

}
</style>
