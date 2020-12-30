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
            <el-form ref="formrul" :model="bqform" label-width="150px" :rules="formrule">
                    <el-form-item label="您要出售的商品：" >
                            <div class="top_bq">版权交易</div>
                    </el-form-item>
                    <el-form-item label="版权类别：" prop="select">
                            <select name="banquan" v-model="select" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px;color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择版权分类</option>
                                    <option v-for="item in option" :value="item.id">{{item.name}}</option>
                            </select>
                    </el-form-item>
                    <el-form-item label="题材：" prop="theme">
                            <el-input v-model="bqform.theme" placeholder="请填写题材" style="width: 300px;"></el-input>
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
                    <el-form-item label="商品主图：" >
                            <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                    </el-form-item>
                    <el-form-item label="登记状态：" prop="radio1" name="djzt">
                        <el-radio v-model="bqform.radio1" label="1">已下证</el-radio>
                        <el-radio v-model="bqform.radio1" label="2">登记中</el-radio>
                    </el-form-item>
                    <el-form-item label="交易方式：" v-model="bqform.checkList" prop="checkList" name="cs">
                        <el-checkbox label="转让"></el-checkbox>
                        <el-checkbox label="授权"></el-checkbox>
                        <el-checkbox label="分账"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="授权方式：" prop="radio2" name="sqfs">
                        <el-radio v-model="bqform.radio2" label="1">独家</el-radio>
                        <el-radio v-model="bqform.radio2" label="2">非独家</el-radio>
                    </el-form-item>
                    <el-form-item label="授权地区：" v-model="bqform.checkList1" prop="checkList1" >
                        <el-checkbox label="中国大陆"></el-checkbox>
                        <el-checkbox label="港澳台"></el-checkbox>
                        <el-checkbox label="全球"></el-checkbox>
                        <el-checkbox label="其他"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="所属地区：" prop="radio3" name="ssdq">
                        <el-radio v-model="bqform.radio3" label="1">大陆</el-radio>
                        <el-radio v-model="bqform.radio3" label="2">港澳台</el-radio>
                        <el-radio v-model="bqform.radio3" label="3">欧美</el-radio>
                        <el-radio v-model="bqform.radio3" label="4">日韩</el-radio>
                        <el-radio v-model="bqform.radio3" label="5">东南亚</el-radio>
                        <el-radio v-model="bqform.radio3" label="6">其他</el-radio>
                    </el-form-item>
                    <el-form-item label="授权期限：" prop="period">
                            <el-input v-model="bqform.period" placeholder="请输入授权期限 单位：年" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="授权范围：" v-model="bqform.checkList2" prop="checkList2" name="sqzt">
                        <el-checkbox label="全部版权"></el-checkbox>
                        <el-checkbox label="复制权"></el-checkbox>
                        <el-checkbox label="发行权"></el-checkbox>
                        <el-checkbox label="出租权"></el-checkbox>
                        <el-checkbox label="展览权"></el-checkbox>
                        <el-checkbox label="表演权"></el-checkbox>
                        <el-checkbox label="放映权"></el-checkbox>
                        <el-checkbox label="广播权"></el-checkbox>
                        <el-checkbox label="信息网络传播权"></el-checkbox>
                        <el-checkbox label="改编权"></el-checkbox>
                        <el-checkbox label="翻译权"></el-checkbox>
                        <el-checkbox label="汇编权"></el-checkbox>
                        <el-checkbox label="其他权利"></el-checkbox>

                    </el-form-item>
                    <el-form-item label="所属年代：">
                            <select name="niandai" v-model="bqform.niandai" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px;color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择年代</option>
                                    <!-- <option v-for="item in option" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="作者介绍/作品简介：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="bqform.textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="作品介绍/剧情简介：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="bqform.textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="业务简介：" style="height:250px ;">
                            <quill-editor
                                        v-model="content"
                                    ref="myQuillEditor"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                    </quill-editor>
                    </el-form-item>
                    <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="bqform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="" >
                        <div class="fabu">
                            <el-button type="success" @click="onSubmit(formrul)">立即发布</el-button>
                            <div class="submit_text">
                                <div class="submit_text_top">
                                    <div class="submit_text_top_img"><img src="../../../static/img/usercenter/greendg.png" alt=""></div>
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
    data(){
        return{
                content: ``,
                editorOption: {},
            bqform: {
                    dialogImageUrl: '',
                    dialogVisible: false,
                    name: '', //名称
                    theme:'',//题材
                    author:'',//作者
                    owner:'',//著作权人
                    niandai:'',//年代
                    select: '',//版权分类
                    num: '', //专利号
                    register:'',//注册号
                    num1:'',
                    sellprice: '', //售价
                    period:'',//授权期限
                    qq:'',
                    radio1:'1',
                    radio2:'1',
                    radio3:'1',
                    checkList:[],
                    checkList1:[],
                    checkList2:[],
            },
            textarea:'',
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
                    } ],
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
                    qq: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入qq号'
                    }, ],
                    sellprice: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入出售低价'
                    }, ],
            },
            option:[]
        }
    },
    mounted() {
            this.$api.bqclass()
            .then(res=>{
                    console.log(res)
                    this.option = res.data
            })
    },
    props:{
        isshowbq:false,
    },
    methods:{
        onSubmit(formrul){
            console.log(bqform.radio3)

            // this.$refs[formrul].validate((valid) => {
            //     console.log(valid)
            // })
        }
    }
}
</script>
<style scoped>
.all{
	width: 100%;
}
.csbq_head_item em,.csbq_head_item span{font-style:normal;font-size:30px;position:absolute;left: -10px;top: 4px;color:  #ebdbdb;}
.csbq_head_item span{left: -11px;color: #fafafa;}
.csbq_head{
    height: 90px;
    padding: 20px;
}
.csbq_head_container{
    height: 100%;
    display: flex;
}
.csbq_head_item{
    background-color: #fafafa;
    flex: 1;
    border: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.csbq_top{
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.top_bq{
    width: 120px;
    background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0 ;
    background-size: 120px 27px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    line-height: 27px;
    color:red;
}
.csbq_body .el-input__inner {
    width: 300px;
}
.el-form-item__content>span{
    color: #d2d2d2;
}

.fabu{
    display: flex;
}
.fabu p{
    line-height: 1;
    color: #bcbcbc;

}
.submit_text{
      margin-left: 10px;
}
.submit_text_top{
    display: flex;
    height: 14px;
    margin-bottom: 8px;
}
.submit_text_top_img{
    width: 15px;
    height: 2px;
    margin: -9px 5px 0;
}
.submit_text_top_img>img{
    width: 100%;
}
.submit_text_top>p>span{
    color: #61c500;
}
.submit_text>p>span{
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
