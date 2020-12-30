<template>
        <div class="all">
                <div class="tanchuang_all">
                        <div class="tanchuang_title">
                                <!-- left -->
                                <div class="tanchuang_title_l">
                                        <div class="tanchuang_title_img">
                                                <img src="../../../static/img/copyright/tc_p.png" alt="">
                                        </div>
                                        <div class="tanchuang_title_text">我要求购专利</div>
                                </div>
                                <!-- right -->
                                <div class="tanchuang_title_r" @click="closetc">
                                        <img src="../../../static/img/copyright/close.png" alt="">
                                </div>

                        </div>
                        <div class="tanchuang_body">
                                <div class="tanchuang_bodytit">填写详情</div>
                                <el-form ref="form_rulzl" :model="form" label-width="100px" :rules="form_rules">
                                        <el-form-item label="求购关键字" prop="main">
                                                <el-input v-model="form.main" placeholder="请输入求购关键字（选填）" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="详细需求" prop="need">
                                                <el-input  v-model="form.need" type="textarea" :rows="5" placeholder="请输入详细需求（选填）"  style="width: 300px;" ></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系方式" prop="phone">
                                                <el-input v-model="form.phone" placeholder="请输入您的联系方式（必填）" style="width: 100%"></el-input>
                                        </el-form-item>
                                        
                                        <el-form-item>
                                                <el-button type="primary" style="color: #fff; background: #2b3d63; width: 42%;margin-bottom:20px"
                                                        @click="fabu('form_rulzl')">确认发布</el-button>
                                                <el-button type="primary" style="border: 1px solid #ceaa88;background: #fff;color: #eb9848;width: 42%;" @click="kefux">联系客服</el-button>
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
                                form: {
                                        need: '',
                                        main: '',
                                        phone: '',
                                },
                                html: '',
                                form_rules: {
                                        phone: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入手机号'
                                        }, {
                                                validator: validatePhone,
                                                trigger: 'blur'
                                        }],
                                        
                                }
                        };
                },
                props: {

                },
                mounted() {
                        this.$api.getrankingdata()
                                .then(res => {
                                        this.data = res.data
                                        console.log(this.data, "专利分类")
                                })
                },
                methods: {
                        closetc() {
                                this.$emit("closetc")
                        },

                        kefux(){
                                this.$emit("kefux")
                        },

                        getVerification() {
                                this.html = Math.random();
                        },
                        fabu(fromname) {
                                this.$refs[fromname].validate((valid) => {
                                        this.$api.getsellpost( this.form.main, this.form.phone, 
                                        this.form.need, 1)
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
                                                                        message: '发布失败',
                                                                        type: 'error'
                                                                });
                                                        }
                                                })
                                })
                        }
                },
        };
</script>

<style>
        .all{padding: 20px;width: 40%;}
       .tanchuang_all{/* height: 550px;*/border-radius: 10px;overflow: hidden;background: #fff;}
       .tanchuang_title_text{font-size: 15px;height: 50px;display: flex;align-items: center;}
       .tanchuang_title{background: #29334c;color: white;display: flex;padding-left: 40px;display: flex;justify-content: space-between;align-items: center;}
       .tanchuang_title_img{display: flex;justify-content: center;align-items: center;height: 50px;margin-right: 8px;}
       .tanchuang_title_l{display: flex;}
       .tanchuang_title_r{margin-right: 5px;height: 50px;display: flex;align-items: center;}
       .tanchuang_title_r img{height: 36px;}
       .tanchuang_bodytit{font-size: 16px;text-align: center;padding: 30px;color: #484848;}
       .tanchuang_body{width: 400px;margin: 0 auto;}
</style>
