<template>
 <div>
   <v-topsearch></v-topsearch>
   <v-navigation></v-navigation>
  <!-- 活动专区 -->
   <div class="activity_all">
     <!-- 推荐 -->
     <div class="activity_recommend">
        <div>
          <p>大学生文创作品在线交易市场</p>
          <p>功能简介-让创意流动起来<br>
             为大学生提供优秀的文创作品交易市场<br>
             可上传美术作品、摄影作品、雕塑、生活创意作品、影视作品、建筑作品、汉服设计等文创作品</p>
          <router-link to='/detils'>查看详情</router-link>
        </div>
     </div>
     <!-- 油画作品展示 -->
     <div class="painting_example">
       <div>
         <p>油画作品展示</p>
         <p>GALLERY</p>
         <p>装饰性艺术是人类古老的艺术展现手法之一，她与人类生活密切相关，在现代技术日益发展的今天，装饰性艺术日益丰富和流行，在人们生活、工作、娱乐的各个方面，无不体现着装饰性艺术的魅力，装饰性</p>
         <p>01.</p>
       </div>
       <div>
         <img src="../../../static/img/activity/example_item_img.png" alt="">
       </div>
     </div>
   </div>
   <v-combotttom></v-combotttom>
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
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.activity_all{
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.activity_recommend{
  width:100%;
  background-image: url(../../../static/img/activity/top_background_img.png);
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-left: 250px;
}
.activity_recommend>div{
  color: #fff;
  text-decoration: none;
}
.activity_recommend>div>a{
  text-decoration: none;
  color: #fff;
  padding: 5px 10px ;
  letter-spacing: 1px;
  border:1px solid #fff
  
}
.activity_recommend>div>p:nth-child(1){
  font-size: 36px;
  /* font-weight: bold; */
  letter-spacing: 1px;
  padding: 20px 0;
}
.activity_recommend>div>p:nth-child(2){
  line-height: 30px;
  font-size: 16px;
  padding-bottom: 40px;
}

/* 油画例子 */
.painting_example{
  width:1200px;
  display: flex;
  padding: 50px 0;
  align-items: flex-end;
}
.painting_example>div:first-of-type{
  padding-right:80px;
}
.painting_example>div:last-of-type>img{
  width: 675px;
}
.painting_example>div>p:nth-child(1){
  font-size: 36px;
}
.painting_example>div>p:nth-child(2){
  font-size: 28px;
  padding: 20px 0;
}
.painting_example>div>p:nth-child(3){
  font-size: 15px;
  margin-left:120px;
  line-height: 25px;
  color: #676767;
  padding: 20px 0;
}
.painting_example>div>p:nth-child(4){
  font-size: 26px;
}
</style>