<template>
<div class="all">
    <div class="cszl_all">
       <div class="cszl_head">
           <div class="cszl_head_container">
               <div class="cszl_head_item">登记商品信息</div>
               <div class="cszl_head_item">等待客服审核<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cszl_head_item">成功上架出售<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cszl_head_item">买家出价购买<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cszl_head_item">签署合同交易商品<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cszl_head_item">出售成功提现<em>&#9670;</em><span>&#9670;</span></div>
           </div>
       </div>
        <div class="cszl_body">
            <el-form ref="formrul" :model="zlform" label-width="150px" :rules="formrule">
                    <el-form-item label="您要出售的商品：" >
                            <div class="top_zl">专利交易</div>
                    </el-form-item>
                    <el-form-item label="专利名称：" prop="name">
                            <el-input v-model="zlform.name" placeholder="请填写专利名称" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="专利行业：">
                            <select name="zhuanli" v-model="select" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择专利行业</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="专利分类：" prop="radio2" name="zlfl">
                        <el-radio v-model="zlform.radio2" label="1">其他</el-radio>
                        <el-radio v-model="zlform.radio2" label="2">发明专利</el-radio>
                        <el-radio v-model="zlform.radio2" label="3">实用新型</el-radio>
                        <el-radio v-model="zlform.radio2" label="4">外观设计</el-radio>
                    </el-form-item>
                    <el-form-item label="专利注册号：" prop="register">
                            <el-input v-model="zlform.register" placeholder="请填写专利注册号（共13位）" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="申请时间：" prop="time">
                        <el-date-picker v-model="zlform.time" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="注册时间：" prop="date">
                        <el-date-picker v-model="zlform.date" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="申请状态：" prop="radio1" name="sqzt">
                        <el-radio v-model="zlform.radio1" label="1">授权未下证</el-radio>
                        <el-radio v-model="zlform.radio1" label="2">已下证</el-radio>
                    </el-form-item>
                    <el-form-item label="出售or授权：" prop="radio" name="cs">
                        <el-radio v-model="zlform.radio" label="3">出售专利</el-radio>
                        <el-radio v-model="zlform.radio" label="4">授权专利</el-radio>
                    </el-form-item>
                    <el-form-item label="专利图片上传：" >
                            <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                    </el-form-item>
                    <el-form-item label="专利描述：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="zlform.textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="专利简介：" style="height:250px ;">
                            <quill-editor
                                        v-model="content"
                                    ref="myQuillEditor"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                    </quill-editor>
                    </el-form-item>
                    <el-form-item label="出售金额：" prop="sellprice">
                            <el-input v-model="zlform.sellprice" placeholder="请输入出售金额 单位：元" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="zlform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="" >
                        <div class="fabu">
                            <el-button type="success">立即发布</el-button>
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
            zlform: {
                    dialogImageUrl: '',
                    dialogVisible: false,
                    name: '', //名称
                    // select: '',
                    register:'',//注册号
                    time:'',//申请时间
                    date:'',//注册时间
                    sellprice: '', //售价
                    textarea:'',
                    qq:'',
                    radio2:'1',//专利分类
                    radio1: '1',//申请状态
                    radio: '3',//出售or授权：
            },
            select: '',
            // 验证规则
            formrule: {
                    name: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入专利名称'
                    }, ],
                    register: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入专利号'
                    }, ],
                    sellprice: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入出售低价'
                    }, ],
                    qq: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入qq'
                    }, ],
                    time: [{
                            required: true,
                            trigger: 'blur',
                            message: '请选择时间'
                    }, ],
                    date: [{
                            required: true,
                            trigger: 'blur',
                            message: '请选择时间'
                    }, ],

            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },

                time: '',
                date:''
            },



        }
    },
    props:{
        isshowzl:false,
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
}
</script>
<style scoped>
.all{
        width: 100%;
}
.cszl_head_item em,.cszl_head_item span{font-style:normal;font-size:30px;position:absolute;left: -10px;top: 4px;color:  #ebdbdb;}
.cszl_head_item span{left: -11px;color: #fafafa;}
.cszl_head{
    height: 90px;
    padding: 20px;
}
.cszl_head_container{
    height: 100%;
    display: flex;
}
.cszl_head_item{
    background-color: #fafafa;
    flex: 1;
    border: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.cszl_top{
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.top_zl{
    width: 120px;
    background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0 ;
    background-size: 120px 27px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    line-height: 27px;
    color:red;
}
.cszl_body .el-input__inner {
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
