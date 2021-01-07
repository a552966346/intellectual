<template>
     <div id="invoice">
        <div class="pay_header">
            <div>开具发票:</div>
        </div>
        <div class="invoice_nav">
            <span v-bind:class="isShow?'nav_active':''" v-on:click="handleTab">个人</span>
            <span v-bind:class="!isShow?'nav_active':''" v-on:click="handleTab(false)">单位</span>
        </div>
        <!-- 个人发票 -->
        <div class="invoice_content" v-show="isShow">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="发票信息" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="纸质发票"></el-radio> 
                <el-radio label="电子发票"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mailbox">
                <el-input v-model="ruleForm.mailbox"></el-input>
            </el-form-item>
            <el-form-item label="发票信息:" prop="resource">
                <div>增值税普通发票</div>
            </el-form-item>
            <el-form-item label="电话" prop="Telephone">
                <el-input v-model="ruleForm.Telephone"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        </div>
        <!-- 单位发票 -->
        <div class="invoice_content" v-show ='!isShow'>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="发票信息" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="纸质发票"></el-radio>
                    <el-radio label="电子发票"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="单位名称" prop="unitname">
                    <el-input v-model="ruleForm.unitname" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="注册地址" prop="comaddress">
                    <el-input v-model="ruleForm.comaddress" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="account">
                    <el-input v-model="ruleForm.account" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="收票人姓名" prop="tickname">
                    <el-input v-model="ruleForm.tickname" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="收票人电话" prop="ticktele">
                    <el-input v-model="ruleForm.ticktele" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="发票信息:" prop="resource">
                    <div>增值税普通发票</div>
                </el-form-item>
                <el-form-item label="税号" prop="paragraph">
                    <el-input v-model="ruleForm.paragraph" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="contact">
                    <el-input v-model="ruleForm.contact" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="开户行" prop="bankdeposit">
                    <el-input v-model="ruleForm.bankdeposit" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="收票人地址" prop="tickaddress">
                    <el-input v-model="ruleForm.tickaddress" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item label="收票人邮箱" prop="emailaddress">
                    <el-input v-model="ruleForm.emailaddress" class="el-input__inner"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        radio1: '1',
        radio2: '3',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
        input14: '',
        isShow:true,

         ruleForm: {
          name: '',
          mailbox: '',
          Telephone: '',
          address: '',

          unitname:'',
          comaddress:'',
          account:'',
          tickname:'',
          ticktele:'',
          paragraph:'',
          contact:'',
          bankdeposit:'',
          tickaddress:'',
          emailaddress:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          mailbox: [
            { required: true, message: '请输入邮箱号', trigger: 'blur' },
            { message: '请带@符号', trigger: 'blur' }
          ],
          Telephone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11个字符', trigger: 'blur' }
          ],
           address: [
            { required: true, message: '请输入地址', trigger: 'blur' },
            { min: 1, message: '请输入地址', trigger: 'blur' }
          ],
           unitname: [
            { required: true, message: '请输入单位名称', trigger: 'blur' },
            { min: 1, message: '请输入单位名称', trigger: 'blur' }
          ],
           comaddress: [
            { required: true, message: '请输入注册地址', trigger: 'blur' },
            { min: 1, message: '请输入注册地址', trigger: 'blur' }
          ],
           account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 1, message: '请输入账号', trigger: 'blur' }
          ],
           tickname: [
            { required: true, message: '请输入收票人姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           ticktele: [
            { required: true, message: '请输入收票人电话', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11字符', trigger: 'blur' }
          ],

           paragraph: [
            { required: true, message: '请输入税号', trigger: 'blur' },
            { min: 1, message: '请输入税号', trigger: 'blur' }
          ], 
          contact: [
            { required: true, message: '请输入联系电话', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在 11个字符', trigger: 'blur' }
          ],

           bankdeposit: [
            { required: true, message: '请输入开户行', trigger: 'blur' },
            { min: 1, message: '请输入开户行', trigger: 'blur'}
          ],
           tickaddress: [
            { required: true, message: '请输入收票人地址', trigger: 'blur' },
            { min: 1, message: '请输入收票人地址', trigger: 'blur'}
          ],
           emailaddress: [
            {required: true, message: '请输入收票人邮箱', trigger: 'blur' },
            {min: 3, max: 5, message: '请输入带@字符', trigger: 'blur'}
          ],
          resource: [
            {required: true, message: '请选择发票信息', trigger: 'change'}
          ],
        },
        watch: {
            dialogSequenceVisible: function (val,oldVla) {
                if (this.$refs['form'] != undefined) {
                    this.$refs["form"].resetFields();
                    this.$refs["from"].clearValidate();
                }
            }
        }
      };
    },
     methods: {
      handleTab(bool=true){
        this.isShow = bool
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
}
</script>
<style scoped>
        *{
            font-size: 13px;
        }
        #invoice{
            width: 1200px;
            margin:0 auto;
            background: #fff;
            border-radius: 10px;
        }
        .pay_header{
            display: flex;
            padding: 20px 0;
        }
        .pay_header>div{
            padding: 5px 15px;
            margin-right: 50px;
            border-left: 4px solid #187fc2;
        }
        .invoice_nav{
            border-bottom: 1px solid #ccc;
        }
        .invoice_nav>span{
            display: inline-block;
            padding: 10px 0;
            margin: 0 20px;

            cursor: pointer;
        }
        .nav_active{
            border-bottom: 2px solid #187fc2;
            color: #187fc2;
        }
        .invoice_content{
            padding: 25px;
        }
        .content_select{
            margin: 25px 0;
            display: flex;
        }
        .content_select>div{
            width: 50%;
            display: flex;
            align-items: center;
            margin-left: 33px;
        }
        .content_select>div:nth-child(2){
            margin-left: 24px;
        }
        .content_select>div>span{
            display: inline-block;
            
        }
        .content_select>div>span:nth-child(2n-1){
            margin-right: 30px;
        }
        .content_select>div>span:nth-child(2n){
            margin-right: 10px;
        }
        .content_input{
            margin-bottom: 10px;
            display: flex;
        }
        .content_input>div{
            width: 50%;
            display: flex;
            align-items: center;
            margin-right: 100px;
        }
        .content_input>div>span{
            display: inline-block;
            width: 110px;
            text-align: right;
        }
        .el-input{width: 25% !important;border: none !important;}
        .el-button{width: 124px;height: 30px;}
        .el-form-item{margin: 20px 0;}
    </style>