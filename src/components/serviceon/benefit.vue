<template>
    <div class="benefit_all">
        <div class="benefit_block" v-for="(item,index) in mrt" :key="index">
            <div class="benefit_blockimg">
                <img src="../../../static/img/service/benefit_ismg.png" alt="">
            </div>
            <div class="benefit_blofz">
                个人
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                mrt:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
            }
        }
    }
</script>

<style>
.benefit_all{width: 100%;height: 330px;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;}
.benefit_block{width: 110px;height: 120px;display: flex;align-content: center;justify-content: center;flex-direction: column;}
.benefit_blockimg{height: 95px;width: 100%; display: flex;align-content: center;justify-content: center;}
.benefit_blockimg img{width: 100%;height: 100%;}
.benefit_blofz{flex: 1;display: flex;justify-content: center;align-items: center;color: #fff;background-color: #666;}
</style>