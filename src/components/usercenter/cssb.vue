<template>
<div class="all">
    <div class="cssb_all">
       <div class="cssb_head">
           <div class="cssb_head_container">
               <div class="cssb_head_item">登记商品信息</div>
               <div class="cssb_head_item">等待客服审核<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cssb_head_item">成功上架出售<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cssb_head_item">买家出价购买<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cssb_head_item">签署合同交易商品<em>&#9670;</em><span>&#9670;</span></div>
               <div class="cssb_head_item">出售成功提现<em>&#9670;</em><span>&#9670;</span></div>
           </div>
       </div>
        <div class="cssb_body">
            <el-form ref="formrul" :model="sbform" label-width="150px" :rules="formrule">
                    <el-form-item label="您要出售的商品：" >
                        <div class="cssc_con">
                            <div class="top_sb">单个发布商标</div>
                            <div class="top_sb">批量发布商标</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="商标大类：" prop="select">
                            <select name="shangbiao" v-model="sbform.select" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择您的商标大类</option>
                                    <option v-for="item in sbclass" :value="item.id">{{item.name}}</option>
                            </select>

                    </el-form-item>
                    <el-form-item label="商标注册号：" prop="nuber">
                            <el-input v-model="sbform.nuber" placeholder="请输入商标注册号：" style="width: 300px;"></el-input>
                            <el-button type="danger">开始查询</el-button>
                    </el-form-item>
                    <el-form-item label="商标名称：" prop="sbname">
                            <el-input v-model="sbform.sbname" placeholder="请输入商标名称：" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商标价格：" prop="minprice">
                            <el-input v-model="sbform.minprice" placeholder="请输入您的商标出售价格" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="国籍：" prop="nationality">
                            <el-input v-model="sbform.nationality" placeholder="请输入您的商标国籍" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商标长度：" prop="length">
                            <el-input v-model="sbform.length" placeholder="请输入您的商标长度" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="注册年限：" prop="time">
                        <el-date-picker v-model="sbform.time" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="申请时间：" prop="applytime">
                        <el-date-picker v-model="sbform.applytime" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="商品主图："  prop="dialogImageUrl">
                                <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                                <el-upload class="avatar-uploader" action="aaaa" :show-file-list="false"
                                        :on-success="handleAvatarSuccess" :on-change="fileChange" :auto-upload="false"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="sbform.dialogImageUrl" :src="sbform.dialogImageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                    </el-form-item>
                    <el-form-item label="授权方式：" prop="radio2" name="sqfs">
                        <el-radio v-model="sbform.radio2" label="1">独家</el-radio>
                        <el-radio v-model="sbform.radio2" label="2">非独家</el-radio>
                    </el-form-item>
                    <el-form-item label="组合方式：" prop="radio1" name="zhfs">
                        <el-radio v-model="sbform.radio1" label="1">中文</el-radio>
                        <el-radio v-model="sbform.radio1" label="2">英文</el-radio>
                        <el-radio v-model="sbform.radio1" label="3">中文+英文</el-radio>
                        <el-radio v-model="sbform.radio1" label="4">图像</el-radio>
                        <el-radio v-model="sbform.radio1" label="5">图像+中文</el-radio>
                        <el-radio v-model="sbform.radio1" label="6">组合</el-radio>
                        <el-radio v-model="sbform.radio1" label="7">数字</el-radio>
                        <el-radio v-model="sbform.radio1" label="8">拼音</el-radio>
                        <el-radio v-model="sbform.radio1" label="9">英文+图像</el-radio>
                        <el-radio v-model="sbform.radio1" label="10">英文+拼音</el-radio>
                        <el-radio v-model="sbform.radio1" label="11">中文+英文+图像</el-radio>
                    </el-form-item>
                    <el-form-item label="创意说明：" >
                            <el-input type="textarea" resize="none"  :rows="5" placeholder="请输入内容" style="width: 300px;"  v-model="sbform.textarea"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="商标简介：" style="height:280px ;">
                            <quill-editor
                                        v-model="content"
                                    ref="myQuillEditor"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)">
                                    </quill-editor>
                    </el-form-item> -->
                    <!-- <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="sbform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                    </el-form-item> -->
                    <el-form-item label="" >
                        <div class="fabu">
                            <el-button type="success" @click="submit('formrul')">立即发布</el-button>
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
            sbform: {
                    dialogImageUrl: '',
                    dialogVisible: false,
                    sbname:'',//商标名称
                    select: '',
                    minprice: '', //售价
                    qq:'',
                    nuber:'',
                    nationality:'',
                    textarea:'',
                    radio1:'1',
                    radio2:'1',
                    time:'',
                    applytime:'',
                    length:''
            },
            // 验证规则
            textarea:'',
            formrule: {
                    sbname: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入商标名称'
                    }, ],
                    dialogImageUrl:[
                            {
                                    required: true,
                                    trigger: 'change',
                                    message: '请选择图片'
                            }
                    ],
                    radio1:[{
                            required: true,
                            trigger: 'change',
                            message: '请选择授权方式'
                    }],
                    radio2:[{
                            required: true,
                            trigger: 'change',
                            message: '请选择授权方式'
                    }],
                    nationality: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入商标国籍'
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
                   nuber:[{
                        required: true,
                        trigger: 'blur',
                        message: '请输入商标注册号'
                   }],
                   length:[{
                           required: true,
                           trigger: 'blur',
                           message: '请输入商标长度'
                   }],
                   select:[{
                           required: true,
                           trigger: 'change',
                           message: '请选择商标大类'
                   }],
                   qq:[{
                           required: true,
                           trigger: 'blur',
                           message: '请输入qq号码'
                   }],
                   time: [{
                            required: true,
                            trigger: 'blur',
                            message: '请选择时间'
                    }, ],
                    applytime: [{
                            required: true,
                            trigger: 'blur',
                            message: '请选择时间'
                    }, ],
            },
            sbclass:[]
        }
    },
    mounted() {
            this.$api.shopsbclass()
            .then(res=>{
                    this.sbclass = res.data
            })
            .catch(err =>{
            })

    },
    methods:{
           handleAvatarSuccess(file, fileList) {
           },
           beforeAvatarUpload(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
           },
           fileChange(file, fileList) {
                   this.image2Base64(file.raw)
                   .then(res => {
                           this.sbform.dialogImageUrl = res
                   })
                   .catch(err =>{
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
            submit(formname){
                    this.$confirm('是否确认发布?', '提示', {
                              confirmButtonText: '确定',
                              cancelButtonText: '取消',
                              type: 'warning'
                            }).then(() => {
                            this.sbform.time = new Date(this.sbform.time).getTime();
                            this.sbform.applytime = new Date(this.sbform.applytime).getTime();
                                    this.$refs[formname].validate((valid) => {
                                            if(valid){
                                                this.$api.shiosbadd(this.$store.state.user.id,this.sbform.select,this.sbform.nuber,this.sbform.sbname,this.sbform.minprice,this.sbform.textarea,
                                                this.sbform.dialogImageUrl,this.sbform.time,this.sbform.radio1,this.sbform.radio2,this.sbform.length,this.sbform.nationality,this.sbform.applytime)
                                                .then(res=>{
                                                      this.$message({
                                                        type: 'success',
                                                        message: res.msg
                                                      });
                                                })
                                                .catch(err =>{
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
             onEditorReady(editor) { // 准备编辑器

                    },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件

    },
     computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        }
}
</script>
<style scoped>
.all{
        width: 100%;
}
.el-scrollbar__wrap {
   overflow-y: hidden;
}
.cssb_head_item em,.cssb_head_item span{font-style:normal;font-size:30px;position:absolute;left: -10px;top: 4px;color:  #ebdbdb;}
.cssb_head_item span{left: -11px;color: #fafafa;}
.cssb_head{
    height: 90px;
    padding: 20px;
}
.cssb_head_container{
    height: 100%;
    display: flex;
}
.el-form-item__content>span{
    color: #d2d2d2;
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

.cssb_head_item{
    position: relative;
    background-color: #fafafa;
    flex: 1;
    border: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cssc_con{
    display: flex;
}
.cssb_top{
    display: flex;
    align-items: center;
    margin: 20px ;

}
.top_sb{
    width: 120px;
    margin: 5px 20px 5px 0;
    display: flex;
    justify-content: center;
    line-height: 27px;
    cursor: pointer;
    border: 1px solid rgb(208 196 196 / 75%);
    border-radius: 5px;
}
.top_sb:first-of-type{
    background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0 ;
    background-size: 120px 27px;
    color:red;
    border:none;
}
 .edit_container {
    margin: 10px 0;
  }
  .quill-editor {
    height: 180px;
    width: 80%;
  }

</style>
