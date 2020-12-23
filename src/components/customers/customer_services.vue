<template>
    <div id="all">
        <div class="customer_service">
                    <img src="../../../static/img/customer/customer_close.png" alt="" @click.self="shows">
            <div class="customer_con">
                <div class="customer_left">
                    <div class="customer_head">
                        <img src="../../../static/img/customer/customer_tou.png" alt="">
                    </div>
                    <div>
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
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
            shows(){
                    this.$emit("shows")
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
        width: 40%;
        height: 50%;
}
.customer_service{
    /* border: 1px solid #ccc; */
    height: 100%;
    background: url(../../../static/img/customer/customer_bg.jpg)
                no-repeat;
    background-size: 100% 100%;
    background-position: top;
}
.customer_service>img{
    width: 100%;
    height: 100%;
}
.customer_con{
    width: 100%;
    height: 70%;
    margin: 0 auto;
    margin-top: 50px;
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
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.customer_image{
    width: 70%;
}
.customer_image>img{
    width: 100%;
}
.customer_int{
    width:100%;
    background: url(../../../static/img/customer/customer_rectangle.png)
                no-repeat center;
    background-size: 100% 100%;
    font-size: 12px;
    color: white;
    padding: 15px;
    line-height: 25px;
    text-align: center;
}
.customer_service>img{
            width: 80px;
            height: 80px;
            position: relative;
            top: 10px;
            left: 90%;
}
</style>
