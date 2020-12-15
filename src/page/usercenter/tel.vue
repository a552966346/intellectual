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
                <li class="con_t_item">投诉建议</li>
                <li class="con_t_item">真假客服验证</li>
                <li class="con_t_item">举报假客服</li>
            </ul>
            
            <div class="content">
                <div class="content_c">
                    <p>亲爱的用户：</p>
                    <p>您好！为了给您提供更好的服务，我们希望收集您在使用伊甸网时的投诉和建议。对您的配合和支持表示衷心感谢！</p>
                    <div class="c_choose">
                        <div class="choose_item current">
                            <img src="../../../static/img/usercenter/tick_active.png" alt="">
                            我要投诉
                        </div>
                        <div class="choose_item">
                            <img src="../../../static/img/usercenter/tick.png" alt="">
                            我要建议
                        </div>
                    </div>
                    <div class="store1">
                        <input class="input store" type="text" placeholder="网店"><img src="../../../static/img/usercenter/arrow.png" alt="">
                    </div>
                    
                    <textarea name="" id="" cols="30" rows="10" placeholder="您可以在这里填写您对伊甸的各方面不满的地方"></textarea>
                    <div class="in2">
                        <input class="input in2-item" type="text" placeholder="您的称呼">
                        <input class="input in2-item" type="text" placeholder="您的电话">
                    </div>
                    <button>立即提交</button>
                </div>
            </div>
            
        </div> 
    </div>
</template>
<script>
export default{
    data(){
        return{
            msg:'这是测试内容',
            tabPosition: 'left'
              }
   },
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
.con_t_item:hover{
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
    height: 64px;
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