<template>
    <div class="tel">
        <div class="tel_top">
            <div class="top_text">投诉与咨询/我的专属客服</div>

            <div class="top_shopcar">
                <img src="../../../static/img/usercenter/shopcar.png" alt="">
                <span>我要出售</span>
            </div>
        </div>

        <div class="tel_con">
            <ul class="con_t">
                <li class="con_t_item" v-for="(item,i) in titles" :key="i"
                v-bind:class="{active:i == num}"
                @click="tab(i)">{{item}}</li>
            </ul>

            <div class="content">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                    <p>亲爱的用户：</p>
                    <p>您好！为了给您提供更好的服务，我们希望收集您在使用伊甸网时的投诉和建议。对您的配合和支持表示衷心感谢！</p>
                    <el-form-item label="请选择提交类型" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="我要投诉" value='2'></el-radio>
                            <el-radio label="我要建议" value='1'></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <el-form-item label="活动区域" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="提出内容" prop="desc" >
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="您可以在这填写您对伊甸城的各个不满的地方"></el-input>
                    </el-form-item>
                    <el-form-item label="您的称呼" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入称呼"></el-input>
                    </el-form-item>
                    <el-form-item label="您的电话" prop="telephone">
                        <el-input v-model="ruleForm.telephone" placeholder="请输入电话号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>
<script>
        import {validatePhone} from '@/util/rules.js'
export default{

    data(){
        return{
            msg:'这是测试内容',
            teloption:[],
            titles:["投诉建议"],/* ,"真假客服验证","举报假客服" */
            num:0,
            ruleForm: {
                resource:2,
                // region:'',
                desc:'',
                name:'',
                telephone:''
            },
            rules:{
                resource: [
                    { required: true, message: '请选择提交类型', trigger: 'change' }
                ],
                // region: [
                //     { required: true, message: '请选择活动区域', trigger: 'change' }
                // ],
                desc:[
                    { required: true, message: '请输入内容', trigger: 'change' }
                ],
                name:[
                    { required: true, message: '请选择名称', trigger: 'change' }
                ],
                telephone:[
                    { required: true, message: '请输入电话号', trigger: 'change' },
                    {validator: validatePhone, trigger: 'blur'}
                ]
            }
        }
   },
   methods:{
       tab(i){
           this.num=i;
       },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log(this.desc,this.name,this.name,this.telephone,this.resource);
                let opinions = this.desc;
                let appellation =this.name;
                let mobile = this.telephone;
                let status = this.resource;
                this.$api.complaint(opinions,appellation,mobile,status)
                    .then(res=>{
                            console.log(res)
                           this.$alert(res.msg, '提交成功', {
                                     confirmButtonText: '确定',
                                     callback: action => {
                                       this.$message({
                                         type: 'info',
                                         message: `action: ${ action }`
                                       });
                                     }
                                   });
                    })
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
.tel{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.tel_top{
    color: #919191;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
.top_text{
    font-size: 14px;
    padding: 15px;
}
.top_shopcar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    margin: 4px;
    background-color:#1b7fc3;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
}
.top_shopcar img{
    margin-right: 8px;
}
.tel_con{
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
}
.con_t{
    display: flex;
    border-bottom: 1px solid #efefef;
}
.con_t_item {
    background-color: #f9f9f9;
    width: 170px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    color: #949494;
}
.active{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}


.content{
    height: 600px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    vertical-align:middle;
    justify-content: center;
}
.content_c{
    width: 714px;
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
}
.c_choose{
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background-color: #f2f2f2;
    display: flex;
    border-radius: 5px;
}
.choose_item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.choose_item img {
    margin-right: 15px;
}
.c_shoose .current{
    color: #388bca;

}

.content_c textarea{
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
    outline:none;
    border:none;
    border: 1px solid #eae3e3;
}
.input{
    padding: 10px;
    border-radius: 3px;
    margin-top: 20px;
    outline:none;
    border:none;
    border: 1px solid #eae3e3;
}
.store{
    width: 100%;

}
.store1{
    position: relative;
}
.store1 img{
    position: absolute;
    top: 37px;
    right: 11px;
}
.in2{
    display: flex;
    justify-content: space-between;

}
.in2-item{
   width: 48%;
}
.content_c button{
    margin-top: 20px;
    width: 100%;
    background-color: #1a7fc3;
    color: #fff;
    padding: 10px;
    outline:none;
    border:none;
    font-size: 14px;
    border-radius: 3px;
}
</style>
