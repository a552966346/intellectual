<template>
   <div class="copyright_title">
        <div class="copyright_copy">
            <h2>{{titles}}</h2>
            <a href="#">
                <p>联系客服帮您找</p>
            </a>
            <span>或</span>
            <a href="#">
                <p style="background-color:#3c568f">发布求购需求</p>
            </a>
        </div>
        <div class="copyright_dash">
            <p>猜中您喜欢的版权有点难度呢，马上联系客服为你推荐更多版权</p>
        </div>
        <div class="copyright_line">
            <div class="copyright_left"></div>
            <p>猜您喜欢</p>
            <div class="copyright_right"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        titles:String
    }

}
</script>

<style scoped>

    .copyright_title{
        width: 100%;
        position: relative;
        background: url(../../../static/img/paycenter/copyright_xiao.png)
                    no-repeat center center;
        background-position: 260px 0;
    }
    .copyright_copy{
        margin: 0 auto;
        text-align: center;
        padding-right: 14px;
    }
    .copyright_copy h2{
        display: inline-block;
        font-weight: 450;
        padding-bottom: 10px;
    }
    .copyright_copy p{
        padding: 0px 10px;
        border-radius: 4px;
        text-align: center;
        line-height: 25px;
        font-size: 13px;
        display: inline-block;
        color: #fff;
        background-color: #ff7137;
    }
    .copyright_copy span{
        font-size: 13px;
    }
    .copyright_line{
        position: relative;
    }
    .copyright_left{
        width: 25px;
        border-top: 1px solid #ccc;
        position: absolute;
        left: 45%;
        bottom: 45%;
    }
    .copyright_right{
        width: 25px;
        border-top: 1px solid #ccc;
        position: absolute;
        bottom: 45%;
        left: 53%;
    }
    .copyright_dash{
        width: 500px;
        border-top:1px dashed #cecece ;
        margin: 0 auto;
        padding-top: 10px;
    }
    .copyright_dash>p{
        color: #ccc;
        font-size: 13px;
    }
    .copyright_line>p{
        text-align: center;
        color: #ccc;
        font-size: 16px;
        margin: 20px 0 30px;
    }
</style>