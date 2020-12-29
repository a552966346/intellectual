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
                    <el-form-item label="您要出售的商品：" >
                        <div class="cssc_con">
                            <div class="top_js">科技成果</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="技术类型：">
                            <select name="leixing" v-model="jsform.leixing" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择技术类型</option>
                                    <!-- <option v-for="(item,index) in data" :value="item.id" :key="index">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="成果名称：" prop="name">
                            <el-input v-model="jsform.name" placeholder="请输入成果名称" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="成果编号：" prop="id">
                            <el-input v-model="jsform.id" placeholder="请输入成果编号" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="行业分类：">
                            <select name="fenlei" v-model="jsform.fenlei" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择行业分类</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="应用领域：">
                            <select name="lingyu" v-model="jsform.lingyu" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择应用领域</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="成熟程度：">
                            <select name="chengshu" v-model="jsform.chengshu" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择成熟程度</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="出售方式：">
                            <select name="csfs" v-model="jsform.csfs" style="width: 300px;height: 40px; border: 1px solid #ccc; outline: none;border-radius: 5px; color: rgb(191 183 183);padding-left: 15px;">
                                    <option value="">请选择出售方式</option>
                                    <!-- <option v-for="item in data" :value="item.id">{{item.name}}</option> -->
                            </select>
                    </el-form-item>
                    <el-form-item label="商品主图：" >
                            <span>请选择图片上传方式，丰富真实的图片信息将加速商品出售</span>
                            <div class="tu">
                                <div class="tu_img"><img src="../../../static/img/usercenter/add.png" alt=""></div>
                                <div class="tu_text">
                                    <p>添加图片</p><p>如产品效果图</p>
                                </div>
                            </div>
                    </el-form-item>
                    <el-form-item label="出售金额：" prop="price">
                            <el-input v-model="jsform.price" placeholder="请输入出售金额 单位：元" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="描述：" >
                            <el-input v-model="jsform.textarea" type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" ></el-input>
                    </el-form-item>
                    <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="jsform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
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

            jsform: {
                    name:'',//商标名称
                    // select: '',
                    leixing:'',//类型
                    fenlei:'',//分类
                    lingyu:'',//领域
                    chengshu:'',//成熟程度
                    csfs:'',//出售方式
                    price: '', //售价
                    qq:'',
                    id:'',
                    textarea:''
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
                    minprice: [{
                            required: true,
                            trigger: 'blur',
                            message: '请输入出售低价'
                    }, ],

            },


        }
    },
    props:{
        isshowjs:false,
    }
}
</script>
<style scoped>
.csjs_head_item em,.csjs_head_item span{font-style:normal;font-size:30px;position:absolute;left: -10px;top: 4px;color:  #ebdbdb;}
.csjs_head_item span{left: -11px;color: #fafafa;}
.csjs_head{
    height: 90px;
    padding: 20px;
}
.csjs_head_container{
    height: 100%;
    display: flex;
}
.csjs_head_item{
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
.jszr_top{
    display: flex;
    align-items: center;
    margin: 20px ;

}
.top_js{
    width: 120px;
    margin: 5px 20px 5px 0;
    display: flex;
    justify-content: center;
    line-height: 27px;
    color:red;
    cursor: pointer;
    background: url('../../../static/img/usercenter/redtitle.png') no-repeat 0 0 ;
    background-size: 120px 27px;
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
    display: flex;
    justify-content: center;
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
