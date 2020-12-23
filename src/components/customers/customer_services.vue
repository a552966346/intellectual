<template>
    <div id="all">
        <div class="customer_service">
            <div class="customer_con">
                <div class="customer_left">
                    <div class="customer_head">
                        <img src="../../../static/img/customer/customer_tou.png" alt="">
                    </div>
                    <div class="customer_txt">
                        <h3>联系人</h3>:
                        <p>王经理</p>
                    </div>
                    <div class="customer_txt">
                        <h3>职务</h3>:
                        <p>伊甸城资深知识产权顾问</p>
                    </div>
                    <div class="customer_txt">
                        <h3>时间</h3>:
                        <p>周一至周五 8：30-17：00</p>
                    </div>
                    <div class="customer_txt">
                        <h3>手机号</h3>:
                        <p>18910769211</p>
                    </div>
                </div>
                <div class="customer_right">
                    <div class="customer_image">
                        <img src="../../../static/img/customer/customer_scaneer.png" alt="">
                    </div>
                    <div class="customer_int">
                        扫一扫，立即联系客服
                    </div>
                </div>
            </div>
            <div class="customer_close">
                <img src="../../../static/img/customer/customer_close.png" alt="">
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#all{
    height: 100%;
}
.customer_service{
    width: 45%;
    height: 50%;
    margin: 50px auto;
    border: 1px solid red;
    background: url(../../../static/img/customer/customer_bg.jpg)
                no-repeat;
    background-size: 100% 100%;
}
.customer_service>img{
    width: 100%;
    height: 100%;
}
.customer_con{
    width: 100%;
    height: 70%;
    margin: 0 auto;
    margin-top: 130px;
    background: url(../../../static/img/customer/customer_bj.png)
                no-repeat center;
    background-size: 100% 100%;
    padding: 50px 80px;
    display: flex;
    align-items: center;
    position: relative;
}
.customer_con>img{
    width: 100%;
}
.customer_left{
    width: 60%;
}
.customer_head{
    width: 30%;
    border-radius: 50%;
    margin-left: 30px;
}
.customer_head img{
    width: 100%;
}
.customer_txt{
    display: flex;
    align-items: center;
    letter-spacing:1px;
}
.customer_txt h3{
    width: 65px;
    text-align: justify;
    text-align-last: justify;
}
.customer_txt p{
    color: #929292;
    padding-left: 10px;
    font-size: 15px;
}
.customer_right{
    width: 40%;
    padding-left:50px;
}
.customer_image{
    width: 70%;
}
.customer_image>img{
    width: 100%;
}
.customer_int{
    width: 80%;
    background: url(../../../static/img/customer/customer_rectangle.png)
                no-repeat center;
    background-size: 100% 100%;
    font-size: 15px;
    color: white;
    padding: 15px;
    line-height: 25px;
}
.customer_close{
    position: absolute;
    top: 10%;
    right: 27%;
}
</style>