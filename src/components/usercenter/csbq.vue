<template>
        <div class="all">
                <div class="csbq_all">

                        <div class="csbq_head">
                                <div class="csbq_head_container">
                                        <div class="csbq_head_item">登记商品信息</div>
                                        <div class="csbq_head_item">等待客服审核<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csbq_head_item">成功上架出售<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csbq_head_item">买家出价购买<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csbq_head_item">签署合同交易商品<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csbq_head_item">出售成功提现<em>&#9670;</em><span>&#9670;</span></div>
                                </div>
                        </div>
                        <div class="csbq_body">
                                <el-form ref="formrule" :model="bqform" label-width="150px" :rules="formrule">
                                        <el-form-item label="您要出售的商品：">
                                                <div class="top_bq">版权交易</div>
                                        </el-form-item>
                                        <el-form-item label="版权类别：" prop="select">
                                                <select name="banquan" v-model="bqform.select" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px;color: rgb(191 183 183);padding-left: 15px;"
                                                        @change="isselect">
                                                        <option>请选择版权分类</option>
                                                        <option v-for="item in option" :value="item.id">{{item.name}}</option>
                                                </select>
                                        </el-form-item>
                                        <el-form-item label="题材：" prop="theme">
                                                <select name="banquan" v-model="bqform.theme" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px;color: rgb(191 183 183);padding-left: 15px;">
                                                        <option>请选择题材</option>
                                                        <option v-for="item in option2" :value="item.id">{{item.name}}</option>
                                                </select>
                                        </el-form-item>
                                        <el-form-item label="商品名称：" prop="name">
                                                <el-input v-model="bqform.name" placeholder="请填写商品名称" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="登记号：" prop="register">
                                                <el-input v-model="bqform.register" placeholder="请填写登记号" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="作者：" prop="author">
                                                <el-input v-model="bqform.author" placeholder="请填写作者" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="著作权人：" prop="owner">
                                                <el-input v-model="bqform.owner" placeholder="请填写著作权人" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="出售金额：" prop="sellprice">
                                                <el-input v-model="bqform.sellprice" placeholder="请输入出售金额 单位：元" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="商品主图：" prop="dialogImageUrl">
                                                <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                                                <el-upload class="avatar-uploader" action="aaaa" :show-file-list="false"
                                                        :on-success="handleAvatarSuccess" :on-change="fileChange"
                                                        :auto-upload="false" :before-upload="beforeAvatarUpload">
                                                        <img v-if="bqform.dialogImageUrl" :src="bqform.dialogImageUrl"
                                                                class="avatar">
                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                        </el-form-item>
                                        <el-form-item label="登记状态：" prop="radio1" name="djzt">
                                                <el-radio v-model="bqform.radio1" label="1">授权未下证</el-radio>
                                                <el-radio v-model="bqform.radio1" label="2">已下证</el-radio>
                                        </el-form-item>
                                        <el-form-item label="交易方式：" v-model="bqform.checkList" prop="checkList" name="cs">
                                                <el-checkbox v-for="(item,index) in checksone" :label="item" @change="ischecksone(index+1)"></el-checkbox>
                                        </el-form-item>
                                        <el-form-item label="授权方式：" prop="radio2" name="sqfs">
                                                <el-radio v-model="bqform.radio2" label="1">独家</el-radio>
                                                <el-radio v-model="bqform.radio2" label="2">非独家</el-radio>
                                        </el-form-item>
                                        <el-form-item label="授权地区：" v-model="bqform.checkList1" prop="checkList1">
                                                <el-checkbox v-for="(item,index) in checkstwo" :label="item" @change="ischeckstwo(index+1)"></el-checkbox>
                                        </el-form-item>
                                        <el-form-item label="所属地区：" v-model="bqform.radio3" prop="radio3" name="ssdq">
                                                <el-checkbox v-for="(item,index) in checkstwo" :label="item" @change="ischecksthree(index+1)"></el-checkbox>
                                        </el-form-item>
                                        <!--                    <el-form-item label="授权期限：" prop="period">
                            <el-input v-model="bqform.period" placeholder="请输入授权期限 单位：年" style="width: 300px;"></el-input>
                    </el-form-item> -->
                                        <el-form-item label="授权范围：" v-model="bqform.checkList2" prop="checkList2" name="sqzt">
                                                <el-checkbox v-for="(item,index) in checks" :label="item" @change="ischeckList2(index+1)"></el-checkbox>
                                        </el-form-item>
                                        <el-form-item label="所属年代：" prop="niandai">
                                                <select name="niandai" v-model="bqform.niandai" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px;color: rgb(191 183 183);padding-left: 15px;">
                                                        <option value="">请选择年代</option>
                                                        <option value="1">80年代</option>
                                                        <option value="2">90年代</option>
                                                        <option value="3">2000-2005</option>
                                                        <option value="4">2005-2010</option>
                                                        <option value="5">2010-至今</option>
                                                </select>
                                        </el-form-item>
                                        <el-form-item label="作者介绍/作品简介：">
                                                <el-input type="textarea" :rows="5" placeholder="请输入内容" style="width: 300px;"
                                                        v-model="bqform.textarea"></el-input>
                                        </el-form-item>
                                        <!-- <el-form-item label="作品介绍/剧情简介：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="bqform.textarea"></el-input>
                    </el-form-item> -->
                                        <!-- <el-form-item label="业务简介：" style="height:250px ;">
                            <quill-editor
                                        v-model="content"
                                    ref="myQuillEditor"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                    </quill-editor>
                    </el-form-item> -->
                                        <!-- <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="bqform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                    </el-form-item> -->
                                        <el-form-item label="">
                                                <div class="fabu">
                                                        <el-button type="success" @click="onSubmit('formrule')">立即发布</el-button>
                                                        <div class="submit_text">
                                                                <div class="submit_text_top">
                                                                        <div class="submit_text_top_img"><img src="../../../static/img/usercenter/greendg.png"
                                                                                        alt=""></div>
                                                                        <p>我已阅读并同意<span>《伊甸网用户出售协议》</span> </p>
                                                                </div>
                                                                <p>温馨提示：出售专利，成功交易后，伊甸网将收取专利成交价格的<span>10%</span>作为手续费！</p>
                                                        </div>
                                                </div>
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
                                content: ``,
                                editorOption: {},
                                bqform: {
                                        dialogImageUrl: '',
                                        dialogVisible: false,
                                        name: '', //名称
                                        theme: '', //题材
                                        author: '', //作者
                                        owner: '', //著作权人
                                        niandai: '', //年代
                                        select: '', //版权分类
                                        num: '', //专利号
                                        register: '', //注册号
                                        num1: '',
                                        sellprice: '', //售价
                                        period: '', //授权期限
                                        qq: '',
                                        radio1: '1',
                                        radio2: '1',
                                        radio3: [],
                                        checkList: [],
                                        checkList1: [],
                                        checkList2: [],
                                },
                                textarea: '',
                                checks: ["全部版权", '复制权', '发行权', '出租权', '展览权', '表演权', '放映权', '广播权', '信息网络传播权', '摄制权',
                                        '改编权', '翻译权', '汇编权', '其他'
                                ],
                                checksone: ['转让', '授权', '分账'],
                                checkstwo: ['中国大陆', '港澳台', '全球'],
                                checksthree: ['中国大陆', '港澳台', '全球'],
                                // select: '',
                                // 验证规则
                                formrule: {
                                        name: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入专利名称'
                                        }, ],
                                        theme: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入题材'
                                        }, ],
                                        select: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择版权类别'
                                        }],
                                        radio1: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择登记状态'
                                        }],
                                        radio2: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择是否独家'
                                        }],
                                        niandai: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择所属年代'
                                        }],
                                        dialogImageUrl: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择图片'
                                        }],
                                        checkList2: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择授权范围'
                                        }],
                                        checkList1: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择授权地区'
                                        }],
                                        checkList: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择交易方式'
                                        }],
                                        radio3: [{
                                                required: true,
                                                trigger: 'change',
                                                message: '请选择所属地区'
                                        }],
                                        author: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入作者'
                                        }, ],
                                        owner: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入著作权人'
                                        }, ],
                                        register: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入登记号'
                                        }, ],
                                        period: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入授权年限'
                                        }, ],
                                        name: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入专利名称'
                                        }, ],
                                        sellprice: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入出售低价'
                                        }, ],
                                },
                                option: [],
                                option2: []
                        }
                },
                mounted() {
                        this.$api.bqclass()
                                .then(res => {
                                        console.log(res)
                                        this.option = res.data
                                })
                },
                props: {
                        isshowbq: false,
                },
                methods: {
                        //授权范围
                        ischeckList2(index) {
                                this.bqform.checkList2 += index + ','
                                console.log(this.bqform.checkList2)
                        },
                        //交易方式
                        ischecksone(index) {
                                this.bqform.checkList += index + ','
                        },
                        //授权范围
                        ischeckstwo(index) {
                                this.bqform.checkList1 += index + ','
                        },
                        //所属地区
                        ischecksthree(index) {
                                this.bqform.radio3 += index + ','
                        },
                        //题材
                        isselect() {
                                this.$api.categorydata(this.bqform.select)
                                        .then(res => {
                                                this.option2 = res.data
                                        })
                        },
                        beforeAvatarUpload(file, fileList) {
                                console.log(file, fileList);
                        },
                        handleAvatarSuccess(file) {
                                this.bqform.dialogImageUrl = file.url;
                                this.dialogVisible = true;
                        },
                        fileChange(file, fileList) {
                                this.image2Base64(file.raw).then(res => {
                                        console.log(res)
                                        this.bqform.dialogImageUrl = res
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
                        onSubmit(formname) {
                                this.$confirm('是否确认发布?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                }).then(() => {
                                        this.$refs[formname].validate((valid) => {
                                                if (valid) {
                                                        this.$api.shopbq(this.$store.state
                                                                        .user.id, this.bqform
                                                                        .name, this.bqform
                                                                        .register, this
                                                                        .bqform.textarea,
                                                                        this.bqform.select,
                                                                        this.bqform.theme,
                                                                        this.bqform.dialogImageUrl,
                                                                        this.bqform.sellprice,
                                                                        this.bqform.author,
                                                                        this.bqform.owner,
                                                                        this.bqform.radio2,
                                                                        this.bqform.checkList,
                                                                        this.bqform.checkList1,
                                                                        this.bqform.radio3,
                                                                        this.bqform.niandai,
                                                                        this.bqform.checkList2
                                                                )
                                                                .then(res => {
                                                                        this.$message({
                                                                                type: 'success',
                                                                                message: res
                                                                                        .msg
                                                                        });
                                                                })
                                                }
                                        })
                                }).catch(() => {
                                        this.$message({
                                                type: 'info',
                                                message: '已取消发布'
                                        });
                                });

                        },
                }
        }
</script>
<style scoped>
        .all {
                width: 100%;
        }

        .csbq_head_item em,
        .csbq_head_item span {
                font-style: normal;
                font-size: 30px;
                position: absolute;
                left: -10px;
                top: 4px;
                color: #ebdbdb;
        }

        .csbq_head_item span {
                left: -11px;
                color: #fafafa;
        }

        .csbq_head {
                height: 90px;
                padding: 20px;
        }

        .csbq_head_container {
                height: 100%;
                display: flex;
        }

        .csbq_head_item {
                background-color: #fafafa;
                flex: 1;
                border: 1px solid #e9e9e9;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
        }

        .csbq_top {
                display: flex;
                align-items: center;
                margin: 20px 0;
        }

        .top_bq {
                width: 120px;
                background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0;
                background-size: 120px 27px;
                margin: 5px 0;
                display: flex;
                justify-content: center;
                line-height: 27px;
                color: red;
        }

        .csbq_body .el-input__inner {
                width: 300px;
        }

        .el-form-item__content>span {
                color: #d2d2d2;
        }

        .fabu {
                display: flex;
        }

        .fabu p {
                line-height: 1;
                color: #bcbcbc;

        }

        .submit_text {
                margin-left: 10px;
        }

        .submit_text_top {
                display: flex;
                height: 14px;
                margin-bottom: 8px;
        }

        .submit_text_top_img {
                width: 15px;
                height: 2px;
                margin: -9px 5px 0;
        }

        .submit_text_top_img>img {
                width: 100%;
        }

        .submit_text_top>p>span {
                color: #61c500;
        }

        .submit_text>p>span {
                color: red;
        }

        .edit_container {
                margin: 10px 0;
        }

        .quill-editor {
                height: 180px;
                width: 80%;
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
</style>
