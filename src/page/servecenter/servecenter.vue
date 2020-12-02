<template>
 <div>
   <v-topsearch></v-topsearch>
   <v-navigation></v-navigation>
   <div id="servecneter">
     <!-- 服务中心头部导航 -->
     <div></div>

     <!-- 热门服务 -->
     <div></div>

     <!-- 商标服务 -->
     <div>
        <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :background_img_url='title_bg_url[0]'></v-comtitle>
     </div>

     <!-- 专利服务 -->
     <div>
         <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :background_img_url='title_bg_url[1]'></v-comtitle>
     </div>

     <!-- 版权服务 -->
     <div>  
        <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :background_img_url='title_bg_url[2]' :color='title_color'></v-comtitle>
     </div>

     <!-- 企业服务 -->
     <div>
         <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :background_img_url='title_bg_url[3]'></v-comtitle>
     </div>
   </div>
   <v-combotttom></v-combotttom>
 </div>
</template>

<script>
export default {
  data(){
    return{
      title_color:'#fff',
      title_all:["商标服务",'专利服务','版权服务','企业服务'],
      title_text_all:['交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      '交易快报: 186****123,25分钟前购买了****专利',
                      ],
      title_bg_url:['../../../static/img/common/Trading_Center.png',
                  '../../../static/img/common/bg_text.png',
                  '../../../static/img/common/flea_market.png',
                  '../../../static/img/common/News_Center.png',
                ],
    }
  }
}

</script>
<style>
</style>