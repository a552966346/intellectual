<template>
    <div class="servicechange_all">
        <div class="servicechange_firt">
            <i class="el-icon-share"></i>
            <div>必要性</div>
        </div>
        <div class="servicechange_cont">
            <p>针对不同行业不同商标名字进行精准查询，检索近似风险，将风险降到最低，选择我们，让您在使用商标途中无忧！</p>
        </div>
        <div class="servicechange_cet">
            <div class="servicechange_cbolk" v-for="(item,index) in lists" :key="index">
                <div class="servicechange_cboimg">
                     <img :src="item.src" alt="">
                </div>
                
               
                <div class="servicechange_cbot">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[{},{},{},{},]
            }
        },
        props:{
            lists:Object
        }
    }
</script>

<style>
.servicechange_all{width: 100%;height: 300px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicechange_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.servicechange_cont{width: 100%;height: 120px;display: flex;justify-content: center;align-items: center;}
.servicechange_cet{margin-top: 20px;width: 100%;flex: 1;display: flex;justify-content: center;align-items: center;flex-direction: row;}
.servicechange_cbolk{border-radius: 10px;width: 170px;margin: 0 5px;height: 185px;border: 1px solid #d9ebff;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;}
.servicechange_cboimg{width: 66px;height: 66px;display: flex;justify-content: center;align-items: center;}
.servicechange_cbot{font-size: 14px;color: #9abded;padding: 5px;text-align: center;}
</style>