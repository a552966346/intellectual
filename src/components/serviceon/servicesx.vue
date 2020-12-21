<template>
    <div class="servicesx_all">
        <div class="servicesx_cont">
            <img :src="changli.contimg" alt="">
        </div>
        <div class="servicesx_cet">
            <div class="servicesx_cbolk" v-for="(item,index) in changli.list" :key="index">
                <div class="servicesx_cboimg">
                    <img :src="item.cboimg" alt="">
                </div>
                <div class="servicesx_cbsze">
                    {{item.cbstit}}
                </div>
                <!-- <div class="servicesx_cbta">
                </div> -->
                <div class="servicesx_cbot">
                    {{item.cbot}}
                </div>
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
            changli:''
        }
    }
</script>

<style>
.servicesx_all{width: 100%;height: 300px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicesx_cont{width: 100%;height: 120px;display: flex;justify-content: center;align-items: center;}
.servicesx_cet{width: 100%;flex: 1;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
.servicesx_cbolk{width: 185px;height: 185px;border: 1px solid #d9ebff;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;}
.servicesx_cboimg{width: 66px;height: 66px;display: flex;justify-content: center;align-items: center;}
.servicesx_cbta{width: 30px;height: 2px;background-color: #187fc4;}
.servicesx_cbsze{color: #187fc4;font-size: 16px;font-weight: bold;}
.servicesx_cbot{font-size: 14px;color: #9abded;padding: 0 15px;display: flex;justify-content: center;align-items: center;}
</style>