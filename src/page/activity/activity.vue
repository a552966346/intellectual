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
         <div class="line"></div>
         <p>装饰性艺术是人类古老的艺术展现手法之一，她与人类生活密切相关，在现代技术日益发展的今天，装饰性艺术日益丰富和流行，在人们生活、工作、娱乐的各个方面，无不体现着装饰性艺术的魅力，装饰性</p>
         <p>01.</p>
       </div>
       <div>
         <img src="../../../static/img/activity/example_item_img.png" alt="">
       </div>
     </div>
     <!-- 其它作品推荐 -->
     <div class="other_works">
       <p>其他作品展示</p>
       <div>
         <img src="" alt="">
         <img src="" alt="">
       </div>
       <div>

       </div>
     </div>
     <!-- 交易流程 -->
     <div class="transaction_flow">
       <p>交易流程</p>
       <div class="transaction_flow_title">
         <p>OTHER CASES</p>
         <div class="line"></div>
       </div>
       <div class="transaction_flow_content">
         <div @mouseleave='mouse_leave(0)' @mouseover="mouse_over(0)">
           <img :src="transaction_imglist[0]" alt="">
           <h3>查阅作品</h3>
           <p>智创城NO.4——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔。</p>
         </div>
         <div @mouseleave='mouse_leave(1)' @mouseover="mouse_over(1)">
           <img :src="transaction_imglist[1]" alt="">
           <h3>查阅作品</h3>
           <p>智创城NO.4——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔。</p>
         </div>
         <div @mouseleave='mouse_leave(2)' @mouseover="mouse_over(2)">
           <img :src="transaction_imglist[2]" alt="">
           <h3>查阅作品</h3>
           <p>智创城NO.4——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔。</p>
         </div>
         <div @mouseleave='mouse_leave(3)' @mouseover="mouse_over(3)">
           <img :src="transaction_imglist[3]" alt="">
           <h3>查阅作品</h3>
           <p>智创城NO.4——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔。</p>
         </div>
       </div>
     </div>
     <!-- 活动专区 -->
     <div class="activity_prefecture">
       <div>
         <div class="activity_zone_left">
           <p>活动专区</p>
           <p>ACTIVITY ZONE</p>
           <div class="white_line"></div>
           <div class="activity_left_bottom">
             <div>
               <p>视频</p>
               <p>▬→</p>
               <div class="activity_left_bottom_none">
                  <img src="../../../static/img/activity/activity_oilpainting.png" alt="">
               </div>
             </div>
             <div>
               <p>油画</p>
               <p>▬→</p>
               <div class="activity_left_bottom_none">
                  <img src="../../../static/img/activity/activity_oilpainting.png" alt="">
               </div>
             </div>
             <div>
               <p>摄影作品</p>
               <p>▬→</p>
               <div class="activity_left_bottom_none">
                  <img src="../../../static/img/activity/activity_oilpainting.png" alt="">
               </div>
             </div>
             <div>
               <p>设计作品</p>
               <p>▬→</p>
               <div class="activity_left_bottom_none">
                  <img src="../../../static/img/activity/activity_oilpainting.png" alt="">
               </div>
             </div>
             <div>
               <p>雕塑作品</p>
               <p>▬→</p>
               <div class="activity_left_bottom_none">
                  <img src="../../../static/img/activity/activity_oilpainting.png" alt="">
               </div>
             </div>
             <div>
               <p>敬请期待...</p>
               <p>▬→</p>
               <div class="export"></div>
             </div>
           </div>
         </div>
         <div class="activity_zone_right">
            <el-carousel :interval="4000" type="card" height="500px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
         </div>
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
      transaction_imglist:[
        '../../../static/img/activity/cy_icon.png',
        '../../../static/img/activity/dd_icon.png',
        '../../../static/img/activity/qd_icon.png',
        '../../../static/img/activity/yy_icon.png'
      ]
    }
  },
  methods: {
    mouse_leave(index){
      if(index == 0){
        var srt_url = '../../../static/img/activity/cy_icon.png'
      }else if(index == 1){
        var srt_url = '../../../static/img/activity/dd_icon.png'
      }else if(index==2){
        var srt_url = '../../../static/img/activity/qd_icon.png'
      }else{
        var srt_url = '../../../static/img/activity/yy_icon.png'
      }
      this.$set(this.transaction_imglist,index,srt_url)
    },
    mouse_over(index){
      if(index == 0){
        var srt_url = '../../../static/img/activity/cy_icon_active.png'
      }else if(index == 1){
        var srt_url = '../../../static/img/activity/dd_icon_active.png'
      }else if(index==2){
        var srt_url = '../../../static/img/activity/qd_icon_active.png'
      }else{
        var srt_url = '../../../static/img/activity/yy_icon_active.png'
      }
      this.$set(this.transaction_imglist,index,srt_url)
    }
  },
  
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
.line{
  width:120px;
  border-bottom: 2px solid #000;
}
.white_line{
  width:120px;
  border-bottom: 2px solid #fff;
  padding: 20px 0;
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
.painting_example>div>p:nth-child(4){
  font-size: 15px;
  margin-left:120px;
  line-height: 25px;
  color: #676767;
  padding: 20px 0;
}
.painting_example>div>p:nth-child(5){
  font-size: 26px;
}
/* 其它作品 */
.other_works{
  width: 1200px;
}
.other_works>p{
  font-size: 34px;
}
/* 交易流程 */
.transaction_flow{
  width: 1200px;
}
.transaction_flow>p{
  font-size: 34px;
}
.transaction_flow_title{
  font-size: 26px;
}
.transaction_flow_title>p{
  padding: 20px 0;
}
.transaction_flow_content{
  display:flex;
  align-items: center;
  padding: 30px 0;
}
.transaction_flow_content>div{
  flex: 1;
  margin:0 1%;
  padding:30px 25px 60px;
  font-size: 14px;
}
.transaction_flow_content>div:hover{
  background: #187fc4;
  color:#fff
}
.transaction_flow_content>div>img{
  width: 60px;
  padding:30px 0 ;
}
.transaction_flow_content>div>h3{
  font-size: 25px;
  font-weight: normal;
  padding: 20px 0;
}
/* 活动专区 */
.activity_prefecture{
  width: 100%;
  background-image: url(../../../static/img/activity/activtiy_bg.png);
  background-size: cover;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activity_prefecture>div{
  height: 80%;
  width: 80%;
  display: flex;
}
.activity_zone_left{
  color:#fff;
  font-size: 28px;
  width: 50%;
}
.activity_zone_left>p:first-of-type{
  font-size: 44px;
  padding: 15px 0;
}
.activity_zone_left>.activity_left_bottom{
  margin-top: 40px;
  /* height: 60%; */
  width: 100%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
}
.activity_left_bottom>div{
  width: 33.3%;
  height: 160px;
  border-right: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.activity_left_bottom_none{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
.activity_left_bottom_none img{
  width: 100%;
  height: 160px;

}
.activity_left_bottom>div:hover .activity_left_bottom_none{
  display: block;
}
.activity_left_bottom>div:nth-child(6){
  position: relative;
  overflow: hidden;
}
.export{
  background-color: #4270e0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: absolute;
  bottom: -15px;
  right: -8px;
}

.activity_left_bottom>div>p{
  color: #676767;
  font-size: 20px;
  
}
.activity_left_bottom>div:nth-child(3),.activity_left_bottom>div:nth-child(6){
  border-right: none;
}
.activity_left_bottom>div:nth-child(4),.activity_left_bottom>div:nth-child(5),.activity_left_bottom>div:nth-child(6){
  border-bottom: none;
}
.activity_zone_right{
  flex: 1;
  padding: 30px 40px;
}

/* 轮播图 */
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
     border-radius: 10px;
    border: 1px solid #ccc;
  }

</style>