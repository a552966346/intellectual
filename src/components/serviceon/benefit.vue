<template>
    <div class="benefit_all">
        <div class="benefit_block" v-for="(item,index) in mrt" :key="index">
            <div class="benefit_blockimg">
                <img :src="item.imga" alt="">
            </div>
            <div class="benefit_blofz">
                {{item.txt}}
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
            mrt:''
        }
    }
</script>

<style>
.benefit_all{width: 100%;height: 330px;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;font-size: 12px;}
.benefit_block{width: 110px;height: 120px;display: flex;align-content: center;justify-content: center;flex-direction: column;}
.benefit_blockimg{height: 95px;width: 100%; display: flex;align-content: center;justify-content: center;}
.benefit_blockimg img{width: 100%;height: 100%;}
.benefit_blofz{flex: 1;display: flex;justify-content: center;align-items: center;color: #fff;background-color: #666;}
</style>