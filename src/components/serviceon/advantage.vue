<template>
    <div class="advantage_all">
        <div class="advantage_blok" v-for="(item,index) in yst" :key="index">
            <div class="advantage_lef">
                <img :src="item.ystimg" alt="">
            </div>
            <div class="advantage_ret">
                <div class="advantage_tt">{{item.ysttit}}</div>
                <div class="advantage_ct">{{item.ystcet}}</div>
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
            yst:''
        }
    }
</script>

<style >
.advantage_all{width: 100%;height: 330px;display: flex;justify-content: space-around;flex-wrap: wrap;align-items: center;}
.advantage_blok{width: 248px;height: 110px;background-color: #fafafa;display: flex;justify-content: center;align-content: center;flex-direction: row;border: 1px solid #ccc;border-radius: 5px;}
.advantage_lef{display: flex;justify-content: center;align-items: center; padding: 10px;}
.advantage_ret{flex: 1; display: flex;justify-content: space-evenly;flex-direction: column;padding-right: 5px;}
.advantage_tt{font-size: 14px;font-weight: bold;}
.advantage_ct{font-size: 12px;}
</style>