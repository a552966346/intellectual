<template>
    <div class="id">
        <div class="id_top">
            <div class="top_text">账号设置/实名认证</div>
        </div>
        <ul class="id_con">
            <li  class="con_t_item">
                <button>个人实名认证</button>       
            </li >
            <li  class="con_t_item">
                <button>企业实名认证</button>    
            </li>
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
                <div class="name">真实姓名:
                    <input type="text" placeholder="请输入您的真实姓名，认证后不可更改">
                </div>
                <div class="ids">证件号码:
                    <input type="text" placeholder="请输入您真实姓名对应的证件号码">
                </div>
                <p>温馨提示：证件必须是清洗彩色原件版本。可以是扫描件或者数码拍摄照片。仅支持jpg、png、jpeg的图片格式。2M以内。</p>
                <div class="ids_1">身份证人像面:
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
                <div class="bank">开户银行:
                    <input type="text" placeholder="请选择您的账号">
                    <img src="../../../static/img/usercenter/arrow.png" alt="">
                </div>
                <div class="bankname">支行名称:
                    <input type="text" placeholder="请输入支行名称">
                </div>
                <div class="openingaccount">开户地区:
                    <input type="text" placeholder="请选择开户身份"><img class="arrow1" src="../../../static/img/usercenter/arrow.png" alt="">
                    <input type="text" placeholder="请选择开户市级"><img class="arrow2" src="../../../static/img/usercenter/arrow.png" alt="">
                </div>
                <div class="name">银行卡号:
                    <input type="text" placeholder="请输入对应真实姓名开户的银行卡号">
                </div>
                <div class="phone">绑定手机:
                    <input type="text" placeholder="155****2220">
                    <button>免费获取校验码</button>
                </div>
                <div class="phonenumber">手机校验码:
                    <input type="text" placeholder="请输入您收到的手机校验码">
                </div>
                <div class="submit">
                    <button>提交</button>
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
            msg:'这是测试内容'
              }
   },
}
</script>
<style scoped>
.id{
    width: 100%;
    height: 100%;
    padding: 30px 30px 0;
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


.con_t_item:nth-of-type(1)  button{
    background-color: #1a7fc3;
}
.con_t_item:nth-of-type(2)  button{
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
    background-color: pink;
}
.center_b>div{
    margin-top: 15px;
}
.center_b input{
    margin-left: 20px;
    height: 32px;
    padding: 5px;
    border: none;
    font-size: 14px;
    color: #bbb;
    width: 272px;
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
.openingaccount input{
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
.phone input{
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


</style>