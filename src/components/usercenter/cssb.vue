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
                    <el-form-item label="商标名称：" prop="name">
                            <el-input v-model="sbform.name" placeholder="请输入商标名称：" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="使用范围：" prop="region">
                            <el-input v-model="sbform.region" placeholder="请输入使用范围：" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="商标价格：" prop="minprice">
                            <el-input v-model="sbform.minprice" placeholder="请输入您的商标出售价格" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="创意说明：" >
                            <el-input type="textarea" :rows="5" placeholder="请输入内容"  style="width: 300px;" v-model="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="联系QQ：" prop="qq">
                            <el-input v-model="sbform.qq" placeholder="请输入您的联系QQ" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="" >
                        <div class="fabu">
                            <el-button type="success">立即发布</el-button>
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

            sbform: {
                    sbname:'',//商标名称
                    select: '',
                    register:'',//注册号
                    minprice: '', //售价
                    qq:'',
                    nuber:'',
                    region:''
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
                   nuber:[{
                        required: true,
                        trigger: 'blur',
                        message: '请输入商标注册号'
                   }],
                   region:[{
                           required: true,
                           trigger: 'blur',
                           message: '请输入商标使用范围'
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
                   }]
            },
            sbclass:[]
        }
    },
    mounted() {
            this.$api.shopsbclass()
            .then(res=>{
                    console.log(res)
                    this.sbclass = res.data
            })
    }
}
</script>
<style scoped>
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


</style>
