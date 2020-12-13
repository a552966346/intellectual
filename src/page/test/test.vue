<template>
        <div class="all">
                <!-- <div>
                       <v-servicetopt>
                        </v-servicetopt>
                </div> -->
                
        </div>

</template>

<script>
 // import servicetop_three from '../../components/servicetop/servicetop_three.vue'
 export default{
         name:'test',
         data(){
                 return{

                 }
         },
         // components:{
         //        'v-servicetopt':servicetop_three
         // }
 }
</script>

<style>
        *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }
        .all{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
        }
        .all>div{
                width: 1200px;
        }
</style>
