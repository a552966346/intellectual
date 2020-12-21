<template>
    <div class="servicefv_all">
        <div class="servicefv_ret">
            <p>{{fvlist[0].text}}</p>
        </div>
        <div class="servicefv_let">
            <img :src="fvlist[0].img" alt="">
        </div>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               
           }
       },
       props:{
           fvlist:''
       } 
    }
</script>

<style>
    .servicefv_all{width: 100%;height: 220px;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
    .servicefv_let{width: 40%;height: 100%;}
    .servicefv_ret{flex: 1;display: flex;justify-content: center;align-items: center;padding-left: 25px;font-size: 14px;}
</style>