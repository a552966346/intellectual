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
                    <el-form-item label="专利分类：">
                            <select name="zhuanlilei" v-model="select" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择专利分类</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="专利注册号：" prop="register">
                            <el-input v-model="zlform.register" placeholder="请填写专利注册号（共13位）" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="申请时间：" prop="time">
                        <el-date-picker v-model="zlform.time" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="过期时间：" prop="date">
                        <!-- <el-date-picker v-model="zlform.date" type="date" placeholder="选择日期"></el-date-picker> -->
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
                            <div class="tu">
                                <div class="tu_img"><img src="../../../static/img/usercenter/add.png" alt=""></div>
                                <div class="tu_text">
                                    <p>添加图片</p><p>专利图片</p>
                                </div>
                            </div>
                    </el-form-item>
                    <el-form-item label="专利描述：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="zlform.textarea"></el-input>
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
            
            zlform: {
                    name: '', //名称
                    // select: '',
                    register:'',//注册号
                    time:'',//申请时间
                    date:'',//过期时间
                    sellprice: '', //售价
                    textarea:'',
                    qq:'',
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
    }
}
</script>
<style scoped>
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
.el-form-item__content>.tu{
    width: 180px;
    height: 180px;
    background-color: #dadada;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.el-form-item__content>.tu>.tu_img{
    height: 50px; 
    width: 50px;   
    margin-bottom: 24px;
}
.el-form-item__content>.tu>.tu_img>img{
    width: 100%;
}
.el-form-item__content>.tu>.tu_text>p{
    line-height: 2;
    color: #fff;
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
</style>