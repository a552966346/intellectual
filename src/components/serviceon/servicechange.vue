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
            <div class="servicechange_cbolk" v-for="(item,index) in list" :key="index">
                <div class="servicechange_cboimg">
                    <img src="" alt="">
                </div>
                <div class="servicechange_cbsze">
                    官方自营
                </div>
                <div class="servicechange_cbta">
                </div>
                <div class="servicechange_cbot">
                    伊甸自营专利申请服务
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[{},{},{},{}]
            }
        }
    }
</script>

<style>
.servicechange_all{width: 100%;height: 300px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicechange_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.servicechange_cont{width: 100%;height: 120px;display: flex;justify-content: center;align-items: center;}
.servicechange_cet{width: 100%;flex: 1;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
.servicechange_cbolk{width: 185px;height: 185px;border: 1px solid #d9ebff;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;}
.servicechange_cboimg{width: 66px;height: 66px;background-color: #d9ebff;}
.servicechange_cbta{width: 30px;height: 2px;background-color: #187fc4;}
.servicechange_cbsze{color: #187fc4;font-size: 20px;}
.servicechange_cbot{font-size: 14px;color: #9abded;}
</style>