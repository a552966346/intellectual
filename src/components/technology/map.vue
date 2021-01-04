<template>
<div id="map">
    <div class="map_left">
         <img src="../../../static/img/technology/map.png" alt="">
    </div>
    <div class="map_right">
        <div class="right_header">
            <span></span>
            <div>联系方式</div>
            <p>{{contract.cont}}</p>
        </div>
        <div class="right_bottom">
            <div>
                <img src="../../../static/img/technology/phone.png" alt="">
                <span>王女士：</span>
                <span>{{contract.phone}}（微信同手机号）</span>
            </div>
            <div>
                <img src="../../../static/img/technology/email.png" alt="">
                <span>邮箱：</span>
                <span>{{contract.email}}</span>
            </div>
            <div>
                <img src="../../../static/img/technology/address.png" alt="">
                <span>地址：</span>
                <span>{{contract.address}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
            props:{
                contract:Object,
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
    *{margin: 0;padding: 0;box-sizing: border-box;}
   #map{width: 1200px;margin: 40px auto;background: #fff;display: flex;padding-left:80px;}
   .map_left{width: 51%;height: 360px;margin-top: 20px;display: flex;justify-content: center;align-items: center;padding: 20px;box-shadow: 0px 0px 5px 1px #c1dbf9;}
   .map_left img{width: 100%;height: 100%;}
   .map_right{width: 49%;padding: 70px 0 60px 70px;}
   .right_header>span{display: block;width: 60px;height: 20px;border-top: 5px solid #187fc4;}
   .right_header>div{font-size: 22px;letter-spacing: 2px;}
   .right_header>p{color: #b5b5b5;font-size: 15px;margin-top: 12px;}
   .right_bottom{margin-top: 60px;}
   .right_bottom>div{display: flex;align-items: center;color: #b5b5b5;font-size: 15px;margin: 15px 0;}
   .right_bottom>div>img{width: 16px;height: 16px;display: inline-block;margin-right: 15px;}
</style>
