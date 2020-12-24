<template>
    <div class="servicetw_all">
        <!-- <div class="servicetw_firt">
            <img src="../../../static/img/service/serviceright_jiantou.png" alt="">
            <div class="servicetw_fiws">伊甸优势</div>
        </div> -->
        <div class="servicetw_cet">
            <div class="servicetw_cbolk" v-for="(item,index) in list.arr" :key="index">
                <div class="servicetw_cboimg">
 
                    <img :src="item.src" alt="">
                </div>
                <div class="servicetw_cbsze">{{item.title}}</div>
                <div class="servicetw_cbta"></div>
                <div class="servicetw_cbot">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               
                // list:[]
            }
        },
        props:{
             list:Object
        }
    }
</script>

<style>
.servicetw_all{width: 100%;height: 300px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicetw_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.servicetw_cet{width: 100%;flex: 1;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
.servicetw_cbolk{width: 185px;height: 185px;border: 1px solid #d9ebff;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;border-radius: 10px;}
.servicetw_cboimg{width: 66px;height: 66px;}
.servicetw_cbta{width: 30px;height: 2px;background-color: #187fc4;}
.servicetw_cbsze{color: #187fc4;font-size: 16px;}
.servicetw_cbot{font-size: 12px;color: #9abded;height: 34px;padding: 0 14px 10px;text-align: center;}
.servicetw_fiws{margin-left: 10px;}
</style>