<template>
    <div class="servicetr_all">
        <div class="servicetr_blcs" v-for="(item,index) in mulist" :key="index">
            <div class="servicetr_blclet">
                <img :src="item.src" alt="">
            </div>
            <div class="servicetr_blcret">
                {{item.text}}
            </div>
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
            mulist:''
        }
    }
</script>

<style>
    .servicetr_all{width: 100%;height: 300px; display: flex; flex-wrap: wrap;justify-content: space-around;}
    .servicetr_blcs{width: 400px;height: 108px;border: 1px solid #9abded;display: flex;align-items: center;justify-content: space-around;flex-direction: row;padding: 0 20px;}
    .servicetr_blclet{width: 66px;height: 66px;}
    .servicetr_blcret{flex: 1;justify-content: center;align-items: center;font-size: 14px;padding-left: 20px;color:#406eaf;}
</style>