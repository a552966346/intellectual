<template>
        <div class="all">
                <div class="jszr_all">
                        <div class="csjs_head">
                                <div class="csjs_head_container">
                                        <div class="csjs_head_item">登记商品信息</div>
                                        <div class="csjs_head_item">等待客服审核<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csjs_head_item">成功上架出售<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csjs_head_item">买家出价购买<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csjs_head_item">签署合同交易商品<em>&#9670;</em><span>&#9670;</span></div>
                                        <div class="csjs_head_item">出售成功提现<em>&#9670;</em><span>&#9670;</span></div>
                                </div>
                        </div>
                        <div class="jszr_body">
                                <el-form ref="formrul" :model="jsform" label-width="150px" :rules="formrule">
                                        <el-form-item label="您要出售的商品：">
                                                <div class="cssc_con">
                                                        <div class="top_js">科技成果</div>
                                                </div>
                                        </el-form-item>
                                        <el-form-item label="成果名称：" prop="name">
                                                <el-input v-model="jsform.name" placeholder="请输入成果名称" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        
                                        <el-form-item label="行业分类：">
                                                <select name="fenlei" v-model="jsform.fenlei" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                                        <option value="">请选择行业分类</option>
                                                        <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                                                </select>
                                        </el-form-item>
                                        <el-form-item label="应用领域：" prop="radio1" name="lingyu">
                                                <el-radio v-model="jsform.radio1" label="1">高技术服务</el-radio>
                                                <el-radio v-model="jsform.radio1" label="2">建筑业</el-radio>
                                                <el-radio v-model="jsform.radio1" label="3">新材料</el-radio>
                                                <el-radio v-model="jsform.radio1" label="4">新能源与节能</el-radio>
                                                <el-radio v-model="jsform.radio1" label="5">环境与资源</el-radio>
                                                <el-radio v-model="jsform.radio1" label="6">现代农业</el-radio>
                                                <el-radio v-model="jsform.radio1" label="7">生物与新医药</el-radio>
                                                <el-radio v-model="jsform.radio1" label="8">航天航空</el-radio>
                                                <el-radio v-model="jsform.radio1" label="9">其他</el-radio>
                                        </el-form-item>
                                        <el-form-item label="技术类型：" prop="radio" name="leixing">
                                                <el-radio v-model="jsform.radio" label="1">非专利</el-radio>
                                                <el-radio v-model="jsform.radio" label="2">发明专利</el-radio>
                                                <el-radio v-model="jsform.radio" label="3">实用新型专利</el-radio>
                                                <el-radio v-model="jsform.radio" label="4">外观专利</el-radio>
                                                <el-radio v-model="jsform.radio" label="5">版权</el-radio>
                                        </el-form-item>
                                        <el-form-item label="成熟程度：" prop="radio2" name="chengshu">
                                                <el-radio v-model="jsform.radio2" label="1">正在研发</el-radio>
                                                <el-radio v-model="jsform.radio2" label="2">已有样品</el-radio>
                                                <el-radio v-model="jsform.radio2" label="3">通过小试</el-radio>
                                                <el-radio v-model="jsform.radio2" label="4">通过中试</el-radio>
                                                <el-radio v-model="jsform.radio2" label="5">可以量产</el-radio>
                                        </el-form-item>
                                        <el-form-item label="交易方式：" prop="radio3" name="jyfs">
                                                <el-radio v-model="jsform.radio3" label="1">完全转让</el-radio>
                                                <el-radio v-model="jsform.radio3" label="2">许可转让</el-radio>
                                                <el-radio v-model="jsform.radio3" label="3">技术入股</el-radio>
                                        </el-form-item>
                                        <el-form-item label="是否最新：" prop="radio4" name="zx">
                                                <el-radio v-model="jsform.radio4" label="1">否</el-radio>
                                                <el-radio v-model="jsform.radio4" label="2">是</el-radio>
                                                <el-radio v-model="jsform.radio4" label="3">热门需求</el-radio>
                                                <el-radio v-model="jsform.radio4" label="4">热门推荐</el-radio>
                                        </el-form-item>
                                        <el-form-item label="技术需求：" prop="radio5" name="jsxq">
                                                <el-radio v-model="jsform.radio5" label="1">否</el-radio>
                                                <el-radio v-model="jsform.radio5" label="2">是</el-radio>
                                        </el-form-item>
                                        <el-form-item label="商品主图：">
                                                <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                                                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                                                        :on-remove="handleRemove">
                                                        <i class="el-icon-plus"></i>
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                        <img width="100%" :src="dialogImageUrl" alt="">
                                                </el-dialog>
                                        </el-form-item>
                                        <el-form-item label="出售金额：" prop="price">
                                                <el-input v-model="jsform.price" placeholder="请输入出售金额 单位：元" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="描述：">
                                                <el-input v-model="jsform.textarea" type="textarea" :rows="5"
                                                        placeholder="请输入内容" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="业务简介：" style="height:250px ;">
                                                <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
                                                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                                        @change="onEditorChange($event)">
                                                </quill-editor>
                                        </el-form-item>
                                        <el-form-item label="联系QQ：" prop="qq">
                                                <el-input v-model="jsform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                                        </el-form-item>
                                        <el-form-item label="">
                                                <div class="fabu">
                                                        <el-button type="success" @click="onSubmit(formrul)">立即发布</el-button>
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
                                jsform: {
                                        dialogImageUrl: '',
                                        dialogVisible: false,
                                        name: '', //商标名称
                                        // select: '',
                                        fenlei: '', //分类
                                        csfs: '', //出售方式
                                        price: '', //售价
                                        qq: '',
                                        textarea: '',
                                        radio1:'1',//应用领域
                                        radio:'1',//技术类型：
                                        radio2:'1',//成熟程度：
                                        radio3:'1',//交易方式
                                        radio4:'1',//是否最新
                                        radio5:'1',//技术需求
                                },
                                // 验证规则
                                formrule: {
                                        name: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标名称'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标号'
                                        }, ],
                                        price: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入金额'
                                        }, ],
                                        qq: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入qq号'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标号'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标号'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标号'
                                        }, ],
                                        num: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入商标号'
                                        }, ],
                                        minprice: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入出售低价'
                                        }, ],

                                },


                        }
                },
                props: {
                        isshowjs: false,
                }
        }
</script>
<style scoped>
        .csjs_head_item em,
        .csjs_head_item span {
                font-style: normal;
                font-size: 30px;
                position: absolute;
                left: -10px;
                top: 4px;
                color: #ebdbdb;
        }

        .csjs_head_item span {
                left: -11px;
                color: #fafafa;
        }

        .csjs_head {
                height: 90px;
                padding: 20px;
        }

        .csjs_head_container {
                height: 100%;
                display: flex;
        }

        .csjs_head_item {
                position: relative;
                background-color: #fafafa;
                flex: 1;
                border: 1px solid #e9e9e9;
                display: flex;
                align-items: center;
                justify-content: center;
        }

        .cssc_con {
                display: flex;
        }

        .jszr_top {
                display: flex;
                align-items: center;
                margin: 20px;

        }

        .top_js {
                width: 120px;
                margin: 5px 20px 5px 0;
                display: flex;
                justify-content: center;
                line-height: 27px;
                color: red;
                cursor: pointer;
                background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0;
                background-size: 120px 27px;
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
</style>
