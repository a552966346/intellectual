<template>
<div id="map">
    <div class="map_left">

    </div>
    <div class="map_right">
        <div class="right_header">
            <span></span>
            <div>联系方式</div>
            <p>您好，如果有项目对接，请联系我司。</p>
        </div>
        <div class="right_bottom">
            <div>
                <img src="../../../static/img/technology/phone.png" alt="">
                <span>王女士：</span>
                <span>18910769211（微信同手机号）</span>
            </div>
            <div>
                <img src="../../../static/img/technology/email.png" alt="">
                <span>邮箱：</span>
                <span>info@edencity.cn</span>
            </div>
            <div>
                <img src="../../../static/img/technology/address.png" alt="">
                <span>地址：</span>
                <span>山西智创城NO.4-伊甸创新创业基地知识产权展示交易中心</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        // payleft_img_url:String
  },
  data() {
    return {
        active:0
    }
  },
  methods:{

  }
}
</script>
<style scoped>
     *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    #map{
        width: 1200px;
        margin: 40px auto;
        background: #fff;
        display: flex;
        padding-left:80px;
        /* border: 1px solid #3333; */
    }
    .map_left{
        width: 51%;
        height: 360px;
        background: orange;
        margin-top: 20px;
    }
    .map_right{
        width: 49%;
        padding: 70px 0 60px 70px;
    }
    .right_header>span{
        display: block;
        width: 60px;
        height: 20px;
        border-top: 5px solid #187fc4;
    }
    .right_header>div{
        font-size: 22px;
        letter-spacing: 2px;
    }
    .right_header>p{
        color: #b5b5b5;
        font-size: 15px;
        margin-top: 12px;
    }
    .right_bottom{
        margin-top: 60px;
    }
    .right_bottom>div{
        display: flex;
        align-items: center;
        color: #b5b5b5;
        font-size: 15px;
        margin: 15px 0;
    }
    .right_bottom>div>img{
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 15px;
    }
</style>