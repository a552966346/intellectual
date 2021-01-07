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
         <!-- <img src="" alt="">
         <img src="" alt=""> -->
         <v-otherwords :list="list" @shangchuan="shangchuan" ></v-otherwords>
       </div>
       <div>

       </div>
     </div>
     <!-- 交易流程 -->
     <div class="flex_transaction_flow">
       <p>交易流程</p>
       <div class="flex_transaction_flow_title">
         <p>OTHER CASES</p>
         <div class="line"></div>
       </div>
       <div class="flex_transaction_flow_content">
         <div @mouseout='mouse_out' @mouseover="mouse_over">
               <img :src="transaction_imglist[0]" v-show="!imgshow">
               <img :src="image[0]" v-show="imgshow">
           <h3>查阅作品</h3>
           <p>智创城NO.1——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔。</p>
         </div>
         <div @mouseout='mouse_out1' @mouseover="mouse_over1">
           <img :src="transaction_imglist[1]" v-show="!imgshow1">
           <img :src="image[1]" v-show="imgshow1">
           <h3>预约看样</h3>
           <p>智创城NO.2——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手世界。</p>
         </div>
         <div @mouseout='mouse_out2' @mouseover="mouse_over2">
           <img :src="transaction_imglist[2]" v-show="!imgshow2">
           <img :src="image[2]" v-show="imgshow2">
           <h3>签订合同</h3>
           <p>智创城NO.3——伊甸城创新创业基地位于山西转型综合改革示范区大学城产的建筑设计事务所美国RTKL携手。</p>
         </div>
         <div @mouseout='mouse_out3' @mouseover="mouse_over3">
           <img :src="transaction_imglist[3]" v-show="!imgshow3">
           <img :src="image[3]" v-show="imgshow3">
           <h3>交易完成</h3>
           <p>智创城NO.4——伊甸城创新创业基地位于山西转型综合改革示范区大学。</p>
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
             </div>
             <p class="export"></p>
             <p>▬→</p>
           </div>
         </div>
         <div class="activity_zone_right">
            <el-carousel :interval="4000" type="card" height="560px">
              <el-carousel-item v-for="item in 4" :key="item" width="300px">
                <!-- <h3 class="medium">{{ item }}</h3> -->
                <h4>报名</h4>
                <p>报名参加2020年伊甸城-圣诞节艺术</p>
                <h5>参与时间</h5>
                <div class="time">
                  2020年11月20日-2020年11月30日
                </div>
                <h5>联系方式</h5>
                <div class="tel">0354-2057888</div>
                <div class="activity_zone_right_img">
                  <img src="../../../static/img/activity/lunbotubutton.png" alt="">
                </div>
              </el-carousel-item>
            </el-carousel>
         </div>
       </div>
     </div>
   </div>
   <v-combotttom></v-combotttom>
   <div class="tanchuang" v-show="isshow" @click.self="shows" >
               <v-shangchuan @close="close" @fabu="fabu"></v-shangchuan>
   </div>
 </div>
</template>

<script>
import shangchuan from '../../components/activity/shangchuan.vue';
import otherwords from '../../components/activity/otherwords.vue'
export default {
  data(){
    return{
      isshow:false,
      imgshow:false,
      imgshow1:false,
      imgshow2:false,
      imgshow3:false,
      transaction_imglist:[
              require('../../../static/img/activity/cy_icon.png'),
              require('../../../static/img/activity/dd_icon.png'),
              require('../../../static/img/activity/qd_icon.png'),
              require('../../../static/img/activity/yy_icon.png')
      ],
      image:[
              require('../../../static/img/activity/cy_icon_active.png'),
              require('../../../static/img/activity/dd_icon_active.png'),
              require('../../../static/img/activity/qd_icon_active.png'),
              require('../../../static/img/activity/yy_icon_active.png')
      ],
      list:[]
    }
  },
  mounted() {
        this.ispost()
  },
  methods: {
    mouse_out(){//移出
      this.imgshow= false
    },
    mouse_over(){//移入
      this.imgshow= true
    },
    mouse_out1(){//移出
      this.imgshow1= false
    },
    mouse_over1(){//移入
      this.imgshow1= true
    },
    mouse_out2(){//移出
      this.imgshow2= false
    },
    mouse_over2(){//移入
      this.imgshow2= true
    },
    mouse_out3(){//移出
      this.imgshow3= false
    },
    mouse_over3(){//移入
      this.imgshow3= true
    },
    close(){
       this.isshow = false
    },
    shangchuan(){
      this.isshow = true
    },
    fabu(){
            this.ispost()
    },
    ispost(){
            this.$api.fleadata()
            .then(res=>{
                    console.log(res)
                    this.list = res.data
                    console.log(this.list)
            })
            .catch(err=>{
                    console.log(err)
            })
    }
  },
  components:{
    'v-otherwords':otherwords,
    'v-shangchuan':shangchuan,

  }

}

</script>
<style>

.activity_all{
  background: #f5f5f5;
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
  border:1px solid #fff;

}
.activity_recommend>div>a:hover,
.activity_recommend>div>a:target{
  background-color: #fff;
  color: #013d61;
  border: 1px solid #2b6d95;
}
.activity_recommend>div>p:nth-child(1){
  font-size: 36px;
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
.flex_transaction_flow{
  width: 1200px;
}
.flex_transaction_flow>p{
  font-size: 34px;
}
.flex_transaction_flow_title{
  font-size: 26px;
}
.flex_transaction_flow_title>p{
  padding: 20px 0;
}
.flex_transaction_flow_content{
  display:flex;
  align-items: center;
  padding: 30px 0;
}
.flex_transaction_flow_content>div{
  flex: 1;
  margin:0 1%;
  padding:30px 25px 60px;
  font-size: 14px;
  height: 384px;
  background-color:#fff;
}
.flex_transaction_flow_content>div:hover{
  background: #187fc4;
  color:#fff
}
.flex_transaction_flow_content>div>img{
  width: 60px;
  padding:30px 0 ;
}
.flex_transaction_flow_content>div>h3{
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
  justify-content: space-around;
}
.activity_zone_left{
  color:#fff;
  font-size: 28px;
  width: 38%;
}
.activity_zone_left>p:first-of-type{
  font-size: 44px;
  padding: 15px 0;
}
.activity_zone_left>.activity_left_bottom{
  margin-top: 40px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
}
.activity_left_bottom>div{
  width: 33.3%;
  height: 140px;
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
  width: 101%;
  height: 140px;

}
.activity_left_bottom>div:hover .activity_left_bottom_none{
  display: block;
}
.activity_left_bottom{
  position: relative;
  overflow: hidden;
}
.activity_left_bottom>p{
   position: absolute;
   bottom: 5px;
   right: 8px;
   color: #fff;
   font-size: 20px;
   cursor: pointer;
}
.activity_left_bottom .export{
  background-color: #4270e0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
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
  width: 50%;
  padding: 30px 0;
}

/* 轮播图 */
  .activity_zone_right .el-carousel__item{
    padding: 5%;
    display: flex;
    flex-direction: column;
  }

  .activity_zone_right .el-carousel__item:nth-child(2n) {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  .activity_zone_right .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  .activity_zone_right h4{
    font-size: 32px;
    font-weight: 400;
    line-height: 200%;
    opacity: 0.85;
  }
  .activity_zone_right p{
    color: #7c7c7c;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 200%;
    margin: 2% 0;
  }
  .activity_zone_right h5{
    font-size: 20px;
    font-weight: 300;
    line-height: 200%;
    opacity: 0.85;
    margin-top: 7%;
  }
  .activity_zone_right .time{
    padding-bottom: 5%;
    font-size: 16px;
    font-weight: 300;
    line-height: 200%;
    color: #8c8c8c;
    border-bottom: 1px solid #eee;
  }
  .activity_zone_right .tel{
    font-size: 16px;
    font-weight: 300;
    line-height: 300%;
    color: #557fe2;
  }
  .activity_zone_right_img{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .activity_zone_right_img img{
    width: 70%;
  }


</style>
