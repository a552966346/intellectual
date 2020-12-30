<template>
    <div class="personal_all">
        <div class="personal_tpw">
            账号设置/个人信息
        </div>
        <div class="personal_top">
            <span class="personal_tos">修改手机号</span>
            <img class="personal_toimg" src="../../../static/img/usercenter/exclamationpoint.png" alt="">
            <span class="personal_toft">完善信息有助于伊甸城进行一步了解您，给您更多推荐。</span>
        </div>
        <div class="personal_cent">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-form-item label="用户名/昵称:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="出生日期:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="QQ:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="微信号:" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">编辑</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ruleForm: {
                    imageUrl: '',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        region: [
                            { required: true, message: '请选择活动区域', trigger: 'change' }
                        ],
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                        date2: [
                            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                        ],
                        type: [
                            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                        ],
                        resource: [
                            { required: true, message: '请选择活动资源', trigger: 'change' }
                        ],
                        desc: [
                            { required: true, message: '请填写活动形式', trigger: 'blur' }
                        ]
                }
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
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
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .personal_all{
        height: 100%;
        width: 100%;
        background-color: #f0f0f0;
        padding: 15px 0 0 10px;
        display: flex;
        flex-direction: column;
    }
    .personal_tpw{
        width: 100%;
        height: 52px;
        background-color: #fff;
        display: flex;justify-content: flex-start;align-items: center;
        padding-left: 15px;
        font-size: 14px;
    }
    .personal_cent{
        width: 100%;
        flex: 1;
        background-color: #fff;
        padding-left: 15px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    .personal_top{
        margin-top: 15px;
        width: 100%;
        background-color: #fff;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: row;
        border-bottom: 2px solid #f0f0f0;
    }
    .personal_tos{
        color: red;
        font-size: 18px;
        font-weight: bold;
    }
    .personal_toft{
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
    }
    .personal_toimg{
        height: 15px;
        margin: 5px 0px 0px 15px;
    }

    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .demo-ruleForm{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
</style>