<template>
    <div class="servicesx_all">
        <div class="servicesx_firt">
            <i class="el-icon-share"></i>
            <div>商标信息变更</div>
        </div>
        <div class="servicesx_cont">
            <p>针对不同行业不同商标名字进行精准查询，检索近似风险，将风险降到最低，选择我们，让您在使用商标途中无忧！</p>
        </div>
        <div class="servicesx_cet">
            <div class="servicesx_cbolk" v-for="(item,index) in list" :key="index">
                <div class="servicesx_cboimg">
                    <img src="" alt="">
                </div>
                <div class="servicesx_cbsze">
                    官方自营
                </div>
                <div class="servicesx_cbta">
                </div>
                <div class="servicesx_cbot">
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
.servicesx_all{width: 100%;height: 300px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicesx_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.servicesx_cont{width: 100%;height: 120px;display: flex;justify-content: center;align-items: center;}
.servicesx_cet{width: 100%;flex: 1;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
.servicesx_cbolk{width: 185px;height: 185px;border: 1px solid #d9ebff;display: flex;justify-content: space-evenly;align-items: center;flex-direction: column;}
.servicesx_cboimg{width: 66px;height: 66px;background-color: #d9ebff;}
.servicesx_cbta{width: 30px;height: 2px;background-color: #187fc4;}
.servicesx_cbsze{color: #187fc4;font-size: 20px;}
.servicesx_cbot{font-size: 14px;color: #9abded;}
</style>