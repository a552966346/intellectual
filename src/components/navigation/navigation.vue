<template>
    <div class="navigation_all">
        <el-menu
        theme="dark"
        :default-active="this.$store.state.activeIndex"
        class="el-menu-demo"
        router mode="horizontal"
        @select="handleSelect"
        background-color="#187fc4"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/servecenter">服务中心</el-menu-item>
        <el-submenu index='2'>
            <template slot="title">交易中心</template>
            <el-menu-item index="/paycenter/trademark">商标转让</el-menu-item>
            <el-menu-item index="/paycenter/patent">专利转让</el-menu-item>
            <el-menu-item index="/paycenter/copyright">版权转让</el-menu-item>
        </el-submenu>
        <el-submenu index='3'>
            <template slot="title">金融中心</template>
            <el-menu-item index="/knowledgepledge">知识产权质押融资</el-menu-item>
            <el-menu-item index="/knowledgefunds">知识产权基金</el-menu-item>
        </el-submenu>
        <el-menu-item index="/transfer">技术转移</el-menu-item>
        <!-- <el-menu-item index="5">跳蚤市场</el-menu-item>-->
        <el-menu-item index="/about">关于我们</el-menu-item> 
        </el-menu>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            };
        },
        methods:{
            handleSelect(key,keyPath){
                this.$store.state.activeIndex = key
                console.log(key,keyPath);
            }
        }
    }
</script>
<style>
	.navigation_all{width: 100%;background-color:#187fc4}
    .el-menu-demo{width: 1200px;display: flex;align-content: center; margin: 0 auto; border-bottom: none !important;}
    .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu{
        flex: 1;
        text-align: center;
    }
</style>