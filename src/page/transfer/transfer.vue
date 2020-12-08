<template>
</template>

<script>
</script>

<style>
</style>
<template>
       <div>
                <v-topsearch></v-topsearch>
               <div id="transfer">
                        <v-navigation></v-navigation>
                        <img src="../../../static/img/transfer/transfer_banner.png" alt="">
                        <div class="transfer_all">
                                <v-transfertop></v-transfertop>
                                <div class="transfer_cen">
                                        <div class="transfer_cen_left">
                                                <v-transferleft></v-transferleft>
                                        </div>
                                        <div class="transfer_cen_right">
                                                <v-transferrig></v-transferrig>
                                        </div>
                                </div>
                        </div>
               </div>
               <v-combotttom></v-combotttom>
       </div>
</template>

<script>
        import transfer_top from  '../../components/transfer/transfer_top.vue'
        import transfer_left from  '../../components/transfer/transfer_left.vue'
        import transfer_right from  '../../components/transfer/transfer_right.vue'
        export default{
                data(){
                        return{

                        }
                },
                components:{
                       'v-transfertop': transfer_top,
                       'v-transferleft': transfer_left,
                       'v-transferrig': transfer_right
                }
        }
</script>

<style>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        #transfer{width: 100%;display: flex;flex-direction: column;align-items: center;background-color: #F5F5F5;}
        .transfer_all{width: 1200px;background-color: #fff;}
        .transfer_cen{width: 100%;display: flex;border-top: 20px solid #f5f5f5;border-bottom: 20px solid #f5f5f5;}
        .transfer_cen_left{flex: 8;border-right: 10px solid #EBEFF3;}
        .transfer_cen_right{flex: 3;}
</style>
