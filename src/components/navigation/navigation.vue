<template>
        <div class="navigation_all">
                <el-menu
                       theme="dark"
                       :default-active="$route.path"
                       class="el-menu-demo"
                       router mode="horizontal"
                       @select="handleSelect"
                       background-color="#187fc4"
                       text-color="#fff"
                       fontsize="16px"
                       active-text-color="#ffd04b">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-submenu :index='item.type' v-for="(item,id) in  this.$store.state.navbarlist" v-if="item.children.length !=0&&item.name != '服务中心'&&item.name != '技术转移'" :key="id">
                                <template slot="title">{{item.name}}</template>
                                <el-menu-item v-for="(isitem,isnub) in item.children" :index="'/'+isitem.keywords" :key="isnub">{{isitem.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item :index='item.type' v-else>{{item.name}}</el-menu-item>

                </el-menu>
        </div>
</template>
<script>
        export default {
                data() {
                        return {
                                data: '' // 导航栏
                        };
                },
                created(){
                        this.$api.getnavbar()
                                .then(res => {
                                        // console.log(res)
                                        this.$store.state.navbarlist = res.data
                                })
                                .catch(err => {
                                        console.log(err)
                                })
                        },
                methods: {

                         handleSelect(key,keyPath){
                                console.log(key,keyPath);
                          }

                }
        }
</script>
<style>
        .navigation_all {
                width: 100%;
                background-color: #187fc4;
        }
        a{
                text-decoration: none;
        }
        .el-menu-demo {
                width: 1200px;
                display: flex;
                align-content: center;
                margin: 0 auto;
                border-bottom: none !important;
                
        }

        .el-menu--horizontal>.el-menu-item,
        .el-menu--horizontal>.el-submenu,
        .el-submenu__title{
                flex: 1;
                /* text-align: center; */
                font-size: 16px!important;
                text-align: center;
        }
</style>
