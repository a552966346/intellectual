<template>
 <div>

  <!-- 公共搜索头部 -->
  <v-topsearch></v-topsearch>
    <!-- 顶部导航 -->
  <v-navigation></v-navigation>
    <!-- 顶部选项卡 -->
  <v-banner></v-banner>
  <div>

  </div>

  <!-- 交易中心 -->
  <div class="index_pay">
    <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :background_img_url='title_bg_url[0]'></v-comtitle>
    <v-indexpayitem :payleft_img_url='pay_img_list[0]' :type='false'></v-indexpayitem>
    <v-indexpayitem :payleft_img_url='pay_img_list[1]' :type='true'></v-indexpayitem>
    <v-indexpayitem :payleft_img_url='pay_img_list[2]' :type='true'></v-indexpayitem>
  </div>

  <!-- 企业服务 -->
  <div class="index_enterprise">
     <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color' :background_img_url='title_bg_url[1]'></v-comtitle>
    <div class="index_enterpriseasd">
       <div class="index_enterpriseasdwron" >
         <div class="index_entesdwr">
           企业服务
         </div>
          <div class="index_entesdwrqw">
           致力于小微企业提供数字金融服务
         </div>
         <div class="index_entesdwrqwas">
           <div>立即咨询></div>
         </div>
       </div>
       <div class="index_enterpriseasdwrtw">
         <div class="index_entwkjk">
         </div>
         <div class="index_entwkjkas">
           <div class="index_cmetk">
             知识产权贯标
           </div>
           <div class="index_cmetkaw">
             享受政府资助最高30万
           </div>
           <div class="index_cmetkaqw">
             查看详情
           </div>
         </div>
       </div>
       <div class="index_enterpriseasdwrtr">
         <div class="index_entwkjkr">
         </div>
         <div class="index_entwkjkas">
           <div class="index_cmetk">
             知识产权贯标
           </div>
           <div class="index_cmetkaw">
             享受政府资助最高30万
           </div>
           <div class="index_cmetkaqw">
             查看详情
           </div>
         </div>
       </div>
    </div>
  </div>

  <!-- 跳蚤市场、合伙人、新闻、伊甸网 -->
  <div class="index_content">
    <!-- 跳蚤市场 -->
    <!-- <div>
      <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :background_img_url='title_bg_url[2]'></v-comtitle>
    </div> -->
    <!-- 新闻 -->
    <div>
      <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :background_img_url='title_bg_url[3]'></v-comtitle>
    </div>
    <!-- 合伙人 -->
    <div>
      <v-comtitle :title="title_all[4]" :inform_title='title_text_all[4]' :background_img_url='title_bg_url[4]'></v-comtitle>
    </div>
    <!-- 伊甸网  -->
    <div class="index_about">
      <v-comtitle :title="title_all[5]" :inform_title='title_text_all[5]' :background_img_url='title_bg_url[5]'></v-comtitle>
      <div class="index_about_content">
        <div class="index_left_content">
          <h3>伊甸城介绍</h3>
          <p>伊甸城（山西）信息技术有限公司于2016年06月12日成立。法定代表人马志士,公司经营范围包括：技术推广、技术服务、技术开发、技术转让、技术咨询；软件开发；企业管理咨询；设计、制作、代理、发布广告；会议服务；承办展览展示活动；数据处理（数据处理中的银行卡中心、PUE值在1.5以上的云计算数据中心除外）；销售电子产品等。</p>
          <div class="index_left_swiper">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="index_right_content">
          <img src="../../../static/img/index/about_right_one.png" alt="">
          <img src="../../../static/img/index/about_right_two.png" alt="">
          <img src="../../../static/img/index/about_right_three.png" alt="">
        </div>
      </div>
    </div>
  </div>

  <!-- 合作平台 -->
  <div>
    <img src="../../../static/img/index/cooperation_img.png" alt="">
  </div>

  <!-- 公共底部 -->
  <v-combotttom></v-combotttom>
 </div>
</template>

<script>
import indexpayitem from '@/components/indexpayitem/indexpayitem.vue'
import navigation from '@/components/navigation/navigation.vue'
import banner from '@/components/banner/banner.vue'
export default {
  name:'index',
  data(){
    return{
      // commtitle组件传值所需
      title_color:'#fff',
      title_all:["交易中心",'企业服务','跳蚤市场','新闻中心','合伙人计划','了解伊甸网'],
      title_text_all:['交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      ],
      title_bg_url:['../../../static/img/common/Trading_Center.png',
                    '../../../static/img/common/bg_text.png',
                    '../../../static/img/common/flea_market.png',
                    '../../../static/img/common/News_Center.png',
                    '../../../static/img/common/Partnership_plan.png',
                    '../../../static/img/common/Learn_about_Eden.png',
                  ],
      //交易中心组件所需
      pay_img_list:['../../../static/img/index/zhuanli_pay.png',
                    '../../../static/img/index/shangbiao_pay.png',
                    '../../../static/img/index/ruanzhu_pay.png'
                  ],
      msg:'这是测试内容'
    }
  },
  components:{
    'v-indexpayitem':indexpayitem,
    'v-navigation':navigation,
    'v-banner':banner
  }
}
</script>

<style scoped>
/* scoped 样式隔离 */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* 交易 */
  .index_pay{
    background: #f6f6f6;
    padding-bottom: 20px;
   
  }
  /* 企业服务 */
  .index_enterprise{
    background-image:url(../../../static/img/index/index_enterprise_bg.jpg) ;
    padding: 30px;
  }
  .index_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f6f6f6;
    padding: 25px 0;
  }
  .index_about{
    width: 1200px;
  }
  .index_about_content{
    display: flex;
  }
  .index_left_content{
    padding: 30px;
    background: #fff;
    margin-right:30px;
  }
  .index_left_content>h3{
    padding: 10px 0;
  }
  .index_left_content>p{
    font-size: 14px;
    line-height: 25px;
  }
  .index_right_content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_right_content>img{
    margin-bottom:20px ;
  }
  .index_right_content>img:last-of-type{
    margin-bottom: 0;
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
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .index_left_swiper{
    padding: 25px 0; 
  }
  .index_enterpriseasd{width: 1240px;height: 420px;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
  .index_enterpriseasdwron{border: 20px solid #fff; width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbaon.png);background-size: cover;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 3%; color: #fff;}
  .index_enterpriseasdwrtw{border: 20px solid #fff; width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatw.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
  .index_enterpriseasdwrtr{border: 20px solid #fff; width: 400px;height: 380px;background-image: url(../../../static/img/index/index_twbatr.png);background-size: cover;display: flex;justify-content: space-between;flex-direction: column;}
  .index_entesdwr{font-size: 30px;font-weight: bold;}
  .index_entesdwrqwas{border: 1px solid #fff;padding: 3%;border-radius: 8px;}
  .index_entwkjk{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_banrtwstw.png);background-size: cover;}
  .index_entwkjkr{width: 100%;height: 140px;background-image: url(../../../static/img/index/index_benarwst.png);background-size: cover;}
  .index_entwkjkas{width: 100%;flex: 1;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;padding: 2%; color: #fff;padding: 0 30px;}
  .index_cmetk{font-size: 24px; font-weight: bold;}
  .index_cmetkaqw{border: 1px solid #fff;padding: 10px;font-size: 14px;}
</style>