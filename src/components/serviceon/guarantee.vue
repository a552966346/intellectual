<template>
    <div class="guarantee_all">
        <div class="guarantee_left">
            <img :src="nut.nutimg" alt="">
        </div>
        <div class="guarantee_right">
            <div class="guarantee_rightbk" v-for="(item,index) in nut.data" :key="index">
                <div class="guarantee_riti">{{item.tit}}</div>
                <div class="guarantee_rict">{{item.cet}}</div>
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
            nut:''
        }
    }
</script>

<style>
.guarantee_all{width: 100%;height: 245px;display: flex;justify-content: center;align-items: center;flex-direction: row;}
.guarantee_left{width: 40%;height: 100%;}
.guarantee_left img{width: 100%;height: 100%;}
.guarantee_right{flex: 1;height: 100%; display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
.guarantee_rightbk{display: flex;justify-content: center;align-items: flex-start;flex-direction: column; width: 100%;height: 50%;}
.guarantee_riti{color: #1980c2;}
</style>