<template>
 <div id="commontitle" :style="{backgroundImage:'url('+background_img_url+')'}">
   <div class="commontitle" :style="{color: color?color:'#1a81c6'}">
     <img src="../../../static/img/common/blue_line_left.png" alt="">
     <p>{{title}}</p>
     <img src="../../../static/img/common/blue_line_right.png" alt="">
   </div>
   <div class="common_inform" :style="{color: color?color:'#999'}">
     <p>{{inform_title}}</p>
   </div>
 </div>
</template>

<script>
export default {
  // 组件中接受的值 
  props:{                      
      title:String,
      inform_title:String,
      color:String,
      background_img_url:String
  },
  data() {
    return {
      
    }
  },
}

</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #commontitle{
    background-size: auto 45%;
    background-repeat: no-repeat;
    background-position: center bottom;
  }
  .commontitle{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #1a81c6;
    padding: 10px 0;
  }
  .commontitle>p{
    font-weight: bold;
    padding: 0 10px;
  }
  .common_inform{
    text-align: center;
    font-size: 18px;
    color: #999;
    padding: 0 0 10px;
  }
  .common_inform>p{
    min-height: 24px;
  }
</style>