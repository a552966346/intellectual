<template>
    <div class="serviceon_all">
        <div class="serviceon_secrt" v-for="(item,index) in met.feli" :key="index">
            <div class="serviceon_secon">
                <img :src="item.ming">
                <div>{{item.mitt}}</div>
            </div>
            <div class="serviceon_sectr">
                <div class="serviceon_sectric">
                    <img :src="item.mitim">
                </div>
                <div class="serviceon_sectw">
                    <div v-for="(items,index) in item.felida" :key="index">{{items.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            met:'',
            mess:''
        },
        data(){
            return{
            }
        },
       
    }
</script>

<style>
    .serviceon_all{width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;font-size: 14px;}
    .serviceon_secrt{width: 100%;height: 204px;display: flex;justify-content: center;align-items: center;flex-direction:column;margin-top: 15px;border-radius: 5px; border: 1px solid #9abded;}
    .serviceon_secon{width: 100%;height: 50px;display: flex; align-items: center;flex-direction: row;padding: 0 15px; border-bottom:1px dashed #9abded;}
    .serviceon_sectr{width: 100%;flex: 1;display: flex;justify-content: center;align-items: center;flex-direction: row;padding: 15px;}
    .serviceon_sectw{width: 100%;height: 100%;display: flex;justify-content: space-between;align-items: flex-start;flex-direction:column;padding: 15px;}
    .serviceon_sectric{height: 100%;display: flex;justify-content: center;align-content: flex-start;padding: 15px 0;}
    .serviceon_sectric img{width: 100%; height: 25px;}
    .serviceon_secon>div{margin-left: 10px;}
</style>