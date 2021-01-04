<template>
  <div class="all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
            <!-- left -->
            <div class="tanchuang_title_l">
                <div class="tanchuang_title_img">
                    <img src="../../../static/img/copyright/tc_z.png" alt="" >
                </div>
                <div class="tanchuang_title_text">上传我的作品</div>
            </div>
            <!-- right -->
            <div class="tanchuang_title_r" @click="close">
                <img src="../../../static/img/copyright/close.png" alt="" >
            </div>

      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit">填写详情</div>
        <el-form ref="form_rul" :model="form1" label-width="100px" :rules="form_rul">
          <el-form-item label="产品名称" prop="name">
            <el-input v-model="form1.name"
              placeholder="请输入产品名称"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="产品分类" prop="kind">
            <select name="shangbiao" v-model="form1.kind" style="width: 100%;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: #555;padding-left: 15px;">
                    <option value="">请选择产品类别</option>
                    <option v-for="item in option" :value="item.id" :key="item.id">{{item.name}}</option>
            </select>
          </el-form-item>
          <el-form-item label="产品图样" prop="dialogImageUrl">
              <el-upload class="avatar-uploader" action="aaaa" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :on-change="fileChange" :auto-upload="false"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form1.dialogImageUrl" :src="form1.dialogImageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
          <el-form-item label="产品描述" prop="textarea">
                <el-input type="textarea" :rows="5" resize="none" v-model="form1.textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
              style="color: #fff; background: #2b3d63; width: 42%"
             @click="fabu('form_rul')" >确认发布</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form1:{
        dialogImageUrl: '',
        dialogVisible: false,
        name:'',
        kind:'',
        textarea:'',
        
      },
      options:[],
      option:[
          {name:'美术作品'},{name:'摄影作品'},{name:'雕塑'},{name:'生活创意作品'},{name:'影视作品'},{name:'建筑作品'},{name:'汉服设计'},{name:'创意作品'},
     ],
      html:'',
      form_rul: {
          name: [{
                  required: true,
                  trigger: 'blur',
                  message: '请输入产品名称'
          }, ],
           dialogImageUrl:[
                   {
                           required: true,
                           trigger: 'change',
                           message: '请选择图片'
                   }
           ],  
           textarea:[{
               required: true,
               trigger: 'blur',
               message: '请输入产品描述'
           }] ,
           kind:[{
                   required: true,
                   trigger: 'change',
                   message: '请选择产品分类'
           }],
      },
    };
  },
  methods:{
    close(){
      this.$emit("close")
    },
      
      handleAvatarSuccess(file, fileList) {
                console.log(file, fileList);
           },
           beforeAvatarUpload(file) {
                this.form1.dialogImageUrl = file.url;
                this.dialogVisible = true;
           },
           fileChange(file, fileList) {
                   this.image2Base64(file.raw).then(res => {
                           console.log(res)
                           this.form1.dialogImageUrl = res
                   })
                   .catch(err =>{
                     console.log(err);
                   });
           },
           image2Base64(file) {
                   return new Promise(function(resolve, reject) {
                           let reader = new FileReader();
                           let imgResult = "";
                           reader.readAsDataURL(file);
                           reader.onload = function() {
                                   imgResult = reader.result;
                           };
                           reader.onerror = function(error) {
                                   reject(error);
                           };
                           reader.onloadend = function() {
                                   resolve(imgResult);
                           };
                   });
           },
    
    // getVerification() {
    //         this.html = Math.random();
    // },
    fabu(fromname) {
            this.$refs[fromname].validate((valid) => {
              if(valid){
                    this.$api.getsellpost(this.select, '', this.form1
                                    .phone, this.form1.name, '', 3,
                                    this.form1.authcode)
                            .then(res => {
                                    console.log(res)
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
                            .catch(err =>{
                              console.log(err);
                            })
              }
                    
            })
    }
  },
};
</script>

<style>
.all {
  padding: 20px;
  width: 40%;
}
.tanchuang_all {
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
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
.avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
                background-color: #f5f5f5;
        }

        .avatar {
                width: 178px;
                height: 178px;
                display: block;
        }

.el-radio-group {
    display: inline-block;
    width: 120%;
    vertical-align: middle;
}
</style>
