<template>
        <div class="all">
                <div class="tanchuang_all">
                        <div class="tanchuang_title">
                                <!-- left -->
                                <div class="tanchuang_title_l">
                                        <div class="tanchuang_title_img">
                                                <img src="../../../static/img/copyright/tc_p.png" alt="">
                                        </div>
                                        <div class="tanchuang_title_text">我要出售专利</div>
                                </div>
                                <!-- right -->
                                <div class="tanchuang_title_r" @click="close">
                                        <img src="../../../static/img/copyright/close.png" alt="">
                                </div>

                        </div>
                        <div class="tanchuang_body">
                                <div class="tanchuang_bodytit">填写详情</div>
                                <el-form ref="formrul" :model="form2" label-width="100px" :rules="formrule">
                                        <el-form-item label="专利名称" prop="name">
                                                <el-input v-model="form2.name" placeholder="请输入专利名称" style="width: 100%"></el-input>
                                        </el-form-item>

                                        <el-form-item label="专利类型">
                                                <select name="shangbiao" v-model="select" style="width: 100%;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: #555;padding-left: 15px;">
                                                        <option value="">请选择专利类型（必填)</option>
                                                        <option v-for="item in data" :value="item.id">{{item.name}}</option>
                                                </select>
                                        </el-form-item>
                                        <el-form-item label="专利号" prop="num">
                                                <el-input v-model="form2.num" placeholder="请输入专利号（必填）" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="出售底价" prop="minprice">
                                                <el-input v-model="form2.minprice" placeholder="请输入出售底价（必填）" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系方式" prop="tel">
                                                <el-input v-model="form2.tel" placeholder="请输入您的联系方式（必填）" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证号码" prop="authcode">
                                                <el-row>
                                                        <el-col :span="12">
                                                                <div class="grid-content">
                                                                        <el-input type="text" v-model="form2.authcode"
                                                                                autocomplete="off" placeholder='请输入验证码'>
                                                                        </el-input>
                                                                </div>
                                                        </el-col>
                                                        <el-col :span="12">
                                                                <div class="grid-content" style="text-align: center;">
                                                                        <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                                                        alt="" @click="getVerification"></div>
                                                                </div>
                                                        </el-col>
                                                </el-row>
                                        </el-form-item>
                                        <el-form-item>
                                                <el-button type="primary" style="color: #fff; background: #2b3d63; width: 42%;margin-bottom:20px"
                                                        @click="fabu('formrul')">确认发布</el-button>
                                                <el-button  type="primary" style="border: 1px solid #ceaa88;background: #fff;color: #eb9848;width: 42%;" @click="kefu">联系客服</el-button>
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
                                form2: {
                                        name: '', //名称
                                        // select: '',
                                        num: '', //专利号
                                        minprice: '', //售价
                                        tel: '', //电话
                                        authcode: '' //验证码
                                },
                                html: '', //验证码
                                data: [], //分类数据
                                select: '',
                                signoutShow:'',//获取session值
                                // 验证规则
                                formrule: {
                                        name: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入专利名称'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入专利号'
                                        }, ],
                                        minprice: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入出售低价'
                                        }, ],
                                        tel: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入您的联系方式'
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
                                },
                        };
                },
                methods: {
                        close() {
                                console.log(123)
                                this.$emit("close")
                        },
                        kefu(){
                                this.$emit("kefu")
                        },
                        // 获取验证码
                        getVerification() {
                                this.html = Math.random();
                        },
                        // 确认创建
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
                                                this.$api.getrankingpost(this.form2.name, this.select, this.form2
                                                              .num, this.form2.minprice, this.form2.tel, this
                                                              .form2.authcode, 2)
                                                      .then(res => {
                                                              console.log(res)
                                                              if (res.code == 1) {
                                                                      this.$message({
                                                                              message: '添加成功',
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
                                        }
                                              
                                      })
                                }
                        },

                },
                mounted() {
                        this.$api.getrankingdata()
                                .then(res => {

                                        console.log(res, "专利分类")
                                        this.data = res.data
                                })
                                this.signoutShow = sessionStorage.getItem('user');
                                console.log(this.signoutShow,'存储的用户信息');
                },
                components:{
                }
        };
</script>

<style>
        .all {
                padding: 20px;
                width: 40%;
        }

        .tanchuang_all {
                /* height: 600px; */
                border-radius: 10px;
                overflow: hidden;
                background: #fff;
        }

        .el-form-item__label {
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

        .tanchuang_title_img {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                margin-right: 8px;
        }

        .tanchuang_title_l {
                display: flex;
        }

        .tanchuang_title_r {
                margin-right: 5px;
                height: 50px;
                display: flex;
                align-items: center;
        }

        .tanchuang_title_r img {
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
