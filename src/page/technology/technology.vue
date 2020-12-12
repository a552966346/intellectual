<template>
        <div>
                <!-- 公共搜索头部 -->
                <v-topsearch></v-topsearch>
                  <!-- 顶部导航 -->
                <v-navigation></v-navigation>

                <div class="technology_top">
                        <img src="../../../static/img/technology/banner.png" alt="altText">
                </div>





                <!-- 公共底部 -->
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import navigation from '@/components/navigation/navigation.vue';
        export default {
          name:'technology',
          data(){
            return{

            }
          },
          methods: {

          },
          components:{
            'v-navigation':navigation,
          }
        }
</script>

<style scoped="scoped">
        .technology_top img{
                width: 100%;
        }
</style>
