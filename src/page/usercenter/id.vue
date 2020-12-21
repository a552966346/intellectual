<template>
    <div class="id">
        <div class="id_top">
            <div class="top_text">账号设置/实名认证</div>
        </div>
        <ul class="id_con">
                <button class="con_t_item">个人实名认证</button>       
                <button class="con_t_item">企业实名认证</button>    
            <li class="t_right">
                <button>联系认证客服</button>
            </li>
        </ul>      
        <div class="id_center">
            <div class="center_t">
                <span>实名认证</span>
                <img src="../../../static/img/usercenter/exclamationpoint.png" alt="">
                <span>未认证实名认证后，可提升账号安全等级，资金提现，绑定银行卡等操作</span>
            </div>
            <div class="center_b">
                <div class="name"><p>真实姓名:</p>
                    <el-input v-model="realname" placeholder="请输入您的真实姓名，认证后不可更改"></el-input>
                    <!-- <input v-model="realname"  type="text" placeholder="请输入您的真实姓名，认证后不可更改"> -->
                </div>
                <div class="ids"><p>证件号码:</p>
                    <el-input v-model="idnumber" placeholder="请输入您真实姓名对应的证件号码"></el-input>
                    <!-- <input v-model="idnumber"  type="text" placeholder="请输入您真实姓名对应的证件号码"> -->
                </div>
                <p>温馨提示：证件必须是清洗彩色原件版本。可以是扫描件或者数码拍摄照片。仅支持jpg、png、jpeg的图片格式。2M以内。</p>
                <div class="ids_1">身份证人像面:
                    <div class="ids_11">
                        <!-- <img src="../../../static/img/usercenter/photo.png" alt=""> -->
                        <!-- <button>上传图片</button> -->
                       <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    示例:
                    <div class="ids_12">
                        <div class="img"><img src="../../../static/img/usercenter/example-1.png" alt=""></div>
                        <p>请提供清晰照片，漏出证件四角</p>
                    </div>
                </div>
                <div class="ids_1">身份证国徽面:
                    <div class="ids_11">
                        <img src="../../../static/img/usercenter/photo.png" alt="">
                        <button>上传图片</button>
                    </div>
                    示例:
                    <div class="ids_12">
                        <div class="img"><img src="../../../static/img/usercenter/example-1.png" alt=""></div>
                        <p>请提供清晰照片，漏出证件四角</p>
                    </div>
                </div>
                <div class="ids_1 photo">手持身份证照片:
                    <div class="ids_11">
                        <img src="../../../static/img/usercenter/photo.png" alt="">
                        <button>上传图片</button>
                    </div>
                    示例:
                    <div class="ids_12">
                        <div class="img"><img src="../../../static/img/usercenter/example-1.png" alt=""></div>
                        <p>请提供清晰照片，漏出证件四角</p>
                    </div>
                </div>
                <div class="bank"><p>开户银行:</p>
                    <el-input v-model="bank" placeholder="请选择您的账号"></el-input>
                    <!-- <input v-model="bank"  type="text" placeholder="请选择您的账号"> -->
                    <img src="../../../static/img/usercenter/arrow.png" alt="">
                </div>
                <div class="bankname"><p>支行名称:</p>
                    <el-input v-model="subbranch" placeholder="请输入支行名称"></el-input>
                    <!-- <input v-model="subbranch"  type="text" placeholder="请输入支行名称"> -->
                </div>
                <div class="openingaccount"><p>开户地区:</p>
                    <el-input v-model="subbranch" placeholder="请选择开户身份"></el-input><img class="arrow1" src="../../../static/img/usercenter/arrow.png" alt="">
                    <el-input v-model="city" placeholder="请选择开户市级"></el-input><img class="arrow2" src="../../../static/img/usercenter/arrow.png" alt="">
                    <!-- <input v-model="subbranch"  type="text" placeholder="请选择开户身份">
                    <input v-model="city"  type="text" placeholder="请选择开户市级"> -->
                </div>
                <div class="name"><p>银行卡号:</p>
                    <el-input v-model="cardnumber" placeholder="请输入对应真实姓名开户的银行卡号"></el-input>
                    <!-- <input v-model="cardnumber"  type="text" placeholder="请输入对应真实姓名开户的银行卡号"> -->
                </div>
                <div class="phone"><p>绑定手机:</p>
                    <el-input v-model="mobile" placeholder="155****2220"></el-input>
                    <!-- <input v-model="mobile"  type="text" placeholder="155****2220"> -->
                    <button>免费获取校验码</button>
                </div>
                <div class="phonenumber"><span>手机校验码:</span>
                    <el-input v-model="captcha" placeholder="请输入您收到的手机校验码"></el-input>
                    <!-- <input v-model="captcha" type="text" placeholder="请输入您收到的手机校验码"> -->
                </div>
                <div class="submit">
                    <button  @click="ispost">提交</button>
                    <div class="sub_text">
                        <img src="../../../static/img/usercenter/exclamationpoint.png" alt="">
                        <span>请填写真实信息，一旦填写，不可更改！</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            uid:'',
            realname:'',
            idnumber:'',
            idfront:'',
            idrear:'',
            idhand:'',
            bank:'',
            imageUrl:'',
            subbranch:'',
            province:'',
            city:'',
            cardnumber:'',
            type:'',
            mobile:'',
            captcha:'',
            dialogImageUrl: '',
            dialogVisible: false
            
        };
   },
   methods:{
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    ispost(){
        console.log(this.realname);
        console.log(this.idnumber);
        this.$api.authentication()
        .then(res=>{
            console.log(res);
        })
    }
   }
   
}
</script>
<style scoped>
.id{
    width: 100%;
    height: 100%;
    padding: 10px 30px;
}
.id_top{
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
.id_con{
    background-color: #fff;
    font-size: 14px;
    padding: 3px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
}
.id_con .con_t_item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #949494;
}
.id_con button{
    margin-left: 10px;
    color: #fff;
    border: none;
    padding: 2px 10px;
    border-radius: 3px;
    font-size: 14px;
}
.con_t_item:nth-of-type(1) {
    background-color: #1a7fc3;
    color: #fff;
}
.con_t_item:nth-of-type(2) {
    background-color: #eeeeee;
    color: #878787;
}
.t_right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.t_right button{
    background-color: #e4404b;

}

.id_center{
    background-color: #fff;
    font-size: 14px;
    padding: 3px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
   
}
.center_t{
    padding: 5px 10px;
    color: #d5d5d5;
    font-size: 12px;
}
.center_t span:nth-of-type(1){
    font-size: 14px;
    color: #ef545e;
}
.center_t img{
    margin: 0 5px;
}
.center_b{
    margin: 20px 10%;
    color: #606060;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
.center_b>div{
    margin-top: 15px;
    display: flex;
}
.center_b>div>p{
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    padding: 0 10px;
}
.center_b el-input{
    margin-left: 20px;
    height: 32px;
    padding: 5px;
    border: none;
    font-size: 14px;
    color: #bbb;
    /* width: 272px; */
    border: 1px solid #f2f2f2;
    border-radius: 5px;
}
p {
    font-size: 12px;
    line-height: 3;
}
.ids_1{
    display: flex;

}
.ids_11{
    width: 167px;
    height: 137px;
    background-color: #fafafa;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ids_11 img{
    width: 20%;
}
.ids_11 button{
    background-color: #1a7fc3;
    border: none;
    border-radius: 7px;
    color: #fff;
    padding: 5px 10px;
    margin-top: 15px;
    font-size: 10px;
}
.ids_12{
    width: 170px;
    height: 101px;
    background-color: #fafafa;
    margin: 0 20px;
    padding: auto;
    
}
.ids_12 .img{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ids_12 img{
    width: 94%;
    
}
.ids_12 p{
    font-size: 10px;
    color: #c1bfc0;
}
.photo{
    text-indent: -1em;
}
.bank{
    position: relative;
}
.bank img{
    position: absolute;
    top: 15px;
    right: 11px;
}
.openingaccount{
    position: relative;
    text-indent: 8em;
}
.openingaccount el-input{
    width: 21%;
    padding-left: 6px;
}
.openingaccount .arrow1{
    position: absolute;
    top: 15px;
    right: 277px;
}
.openingaccount .arrow2{
    position: absolute;
    top: 15px;
    right: 125px;
}
.phone{
    text-indent: 2em;
}
.phone el-input{
    width: 35%;
}
.phone button{
    background-color: #f3f3f3;
    color: #636363;
    font-size: 14px;
    line-height: 1.5;
    border: none;
    padding: 5px;
    border-radius: 5px;
    margin-left: 10px;
}
.phonenumber{
    text-indent: -1em;
}
.submit{
    display: flex;
}
.submit button{
    background-color: #1a7fc3;
    border: none;
    color: #fff;
    padding: 5px  35px;
    border-radius: 5px;
    margin-right: 10px;

}
.sub_text{
    display: flex;
    margin: 3px;
    padding: 5px;
    color: #fc8c8d;
    border: 1px solid #fc8c8d;
    background-color: #f9edef;
    font-size: 10px;
}
.sub_text img{
    margin:0  5px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }


</style>