<template>
    <div class="servicesv_all">
        <div class="servicesv_second">
            <p>
                {{svali.svat}}
            </p>
            <span v-for="(item,index) in svali.mlist" :key="index">
                <i class="el-icon-caret-right"></i>
                {{item.text}}
            </span>
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
            svali:''
        }
    }
</script>

<style>
.servicesv_all{width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicesv_second{width: 100%;height: 100%;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;}
.servicesv_second p{display: flex;justify-content: space-around;align-items: center;flex-direction: row;font-size: 14px;color: #474747;line-height: 1.7;}
.servicesv_second>span{color: #888;padding: 5px 0;font-size: 12px;margin-top: 5px;}
.el-icon-caret-right{color: #6584f0;font-size: 14px;}
</style>
