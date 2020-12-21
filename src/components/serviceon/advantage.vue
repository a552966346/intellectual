<template>
    <div class="advantage_all">
        <div class="advantage_blok" v-for="(item,index) in yst" :key="index">
            <div class="advantage_lef">
                <img src="../../../static/img/service/advantage_one.png" alt="">
            </div>
            <div class="advantage_ret">
                <div>高通过率</div>
                <div>系统智能查询+专业顾问人工查询</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                yst:[{},{},{},{},{},{},] 
            }
        }
    }
</script>

<style>
.advantage_all{width: 100%;height: 330px;display: flex;justify-content: space-around;flex-wrap: wrap;align-items: center;}
.advantage_blok{width: 248px;height: 110px;background-color: #fafafa;display: flex;justify-content: center;align-content: center;flex-direction: row;}
.advantage_lef{display: flex;justify-content: center;align-items: center;}
.advantage_ret{flex: 1; display: flex;justify-content: space-evenly;flex-direction: column;}
</style>