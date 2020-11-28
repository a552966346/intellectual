<template>
  <div>
      <v-topsearch></v-topsearch>
      <v-navigation></v-navigation>
      <div class="copyright_pay">
        <img src="../../../static/img/paycenter/copyright_top.png" alt="">
        <!-- 分类 -->
        <div>
            
        </div>
        <!-- 产品列表 --> 
        <div>

        </div>
        <!-- 猜你喜欢 -->
        <div>
            <v-paybottom></v-paybottom>
        </div>   
      </div>
      <v-combotttom></v-combotttom>
  </div>
</template>

<script>
import paycenterbottom from '@/components/paycenterrecommend/paycenterrecommend.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
        'v-paybottom':paycenterbottom
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .copyright_pay{
        background: #f6f6f6;
    }
</style>