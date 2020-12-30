<template>
        <div class="personal_all">
                <div class="personal_tpw">
                        账号设置/个人信息
                </div>
                <div class="personal_top">
                        <span class="personal_tos">修改个人信息</span>
                        <img class="personal_toimg" src="../../../static/img/usercenter/exclamationpoint.png" alt="">
                        <span class="personal_toft">完善信息有助于伊甸城进行一步了解您，给您更多推荐。</span>
                </div>
                <div class="personal_cent">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                                <el-form-item label="头像:" prop="imageUrl">
                                        <el-upload class="avatar-uploader" action="aaaa" :show-file-list="false"
                                                :on-success="handleAvatarSuccess" :on-change="fileChange" :auto-upload="false"
                                                :before-upload="beforeAvatarUpload">
                                                <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                </el-form-item>

                                <el-form-item label="用户名/昵称:" prop="nickname">
                                        <el-input v-model="ruleForm.nickname"></el-input>
                                </el-form-item>
                                <el-form-item label="真实姓名:" prop="name">
                                        <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="性别:" prop="gender">
                                        <el-input v-model="ruleForm.gender"></el-input>
                                </el-form-item>
                                <el-form-item label="出生日期:" prop="birthday">
                                        <el-date-picker type="date" placeholder="选择出生日期" v-model="ruleForm.birthday"></el-date-picker>
                                </el-form-item>
                                <el-form-item label="邮箱:" prop="name">
                                        <el-input v-model="ruleForm.emile"></el-input>
                                </el-form-item>
                                <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                        </el-form>
                </div>
        </div>
</template>

<script>
        import {
                validateEMail
        } from '@/util/rules.js'
        export default {
                data() {
                        return {
                                ruleForm: {
                                        imageUrl: '',
                                        nickname: '',
                                        name: '',
                                        gender: '',
                                        birthday: '',
                                        emile: '',
                                },
                                rules: {
                                        nickname: [{
                                                        required: true,
                                                        message: '请输入昵称',
                                                        trigger: 'blur'
                                                },
                                                {
                                                        min: 1,
                                                        max: 5,
                                                        message: '长度在 1 到 5 个字符',
                                                        trigger: 'blur'
                                                }
                                        ],
                                        name: [{
                                                        required: true,
                                                        message: '请输入您的真实姓名',
                                                        trigger: 'blur'
                                                },
                                                {
                                                        min: 2,
                                                        max: 5,
                                                        message: '长度在 2 到 5 个字符',
                                                        trigger: 'blur'
                                                }
                                        ],
                                        gender: [{
                                                required: true,
                                                message: '请输入性别',
                                                trigger: 'blur'
                                        }],
                                        birthday: [{
                                                type: 'date',
                                                required: true,
                                                message: '请选择选择出生日期',
                                                trigger: 'change'
                                        }],
                                        emile: [{
                                                required: true,
                                                message: '请输入您的邮箱',
                                                trigger: 'blur'
                                        }, {
                                                validator: validateEMail,
                                                trigger: 'blur'
                                        }],
                                        imageUrl: [{
                                                required: true,
                                                message: '请选择您的头像',
                                                trigger: 'change'
                                        }]
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
                        fileChange(file, fileList) {
                                this.image2Base64(file.raw).then(res => {
                                        console.log(res)
                                        this.ruleForm.imageUrl = res
                                });
                        },
                        submitForm(formName) {
                                this.$confirm('是否确认修改个人信息?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                }).then(() => {
                                        this.$refs[formName].validate((valid) => {
                                                if (valid) {
                                                        this.$api.uersname(this.$store.state
                                                                        .user.id, this.ruleForm
                                                                        .imageUrl, this
                                                                        .ruleForm.nickname,
                                                                        this.ruleForm.name,
                                                                        this.ruleForm.gender,
                                                                        this.ruleForm.birthday,
                                                                        this.ruleForm.emile
                                                                )
                                                                .then(res => {
                                                                        console.log(res)
                                                                        this.$message({
                                                                                type: 'success',
                                                                                message:res.msg
                                                                        });
                                                                })
                                                } else {
                                                        console.log('error submit!!');
                                                        return false;
                                                }
                                        });

                                }).catch(() => {
                                        this.$message({
                                                type: 'info',
                                                message: '已取消修改'
                                        });
                                });

                        },
                        resetForm(formName) {
                                this.$refs[formName].resetFields();
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
                }
        }
</script>

<style scoped>
        .personal_all {
                height: 100%;
                width: 100%;
                background-color: #f0f0f0;
                padding: 15px 0 0 10px;
                display: flex;
                flex-direction: column;
        }

        .personal_tpw {
                width: 100%;
                height: 52px;
                background-color: #fff;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 15px;
                font-size: 14px;
        }

        .personal_cent {
                width: 100%;
                flex: 1;
                background-color: #fff;
                padding-left: 15px;
                display: flex;
                justify-content: center;
                align-content: center;
                flex-direction: column;
        }

        .personal_top {
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

        .personal_tos {
                color: red;
                font-size: 18px;
                font-weight: bold;
        }

        .personal_toft {
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 15px;
        }

        .personal_toimg {
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
                background-color: #f5f5f5;
        }

        .avatar {
                width: 178px;
                height: 178px;
                display: block;
        }

        .demo-ruleForm {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
        }
</style>
