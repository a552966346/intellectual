<template>
    <div class="navigation_all">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#187fc4"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">服务中心</el-menu-item>
        <el-menu-item index="3">交易中心</el-menu-item>
        <el-menu-item index="4">金融中心</el-menu-item>
        <el-menu-item index="5">跳蚤市场</el-menu-item>
        <el-menu-item index="6">新闻中心</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeIndex:'1'
            };
        },
        methods:{
            handleSelect(key,keyPath){
                console.log(key,keyPath);
            }
        }
    }
</script>
<style>
	.navigation_all{width: 100%;background-color:#187fc4}
    .el-menu-demo{width: 1200px;display: flex;align-content: center; margin: 0 auto;}
    .el-menu--horizontal>.el-menu-item{
        flex: 1;
        text-align: center;
    }
</style>