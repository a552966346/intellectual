<template>
    <div class="about_all">
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <div class="about_banner">
            <img src="../../../static/img/about/about_banter.png" alt="altText">
        </div>
        <el-container style="padding:1px 0">
                <el-aside width="201px" style="border-right:1px solid rgba(230,230,230);">
                    <el-menu
                    collapse-transition
                    :default-active="$route.path"
                    class="aside-menu-test"
                    text-color="#000"
                    :router="true"
                    :unique-opened="true"
                    >
                    <el-submenu :index="index+''" v-for='(item,index) in list_data' :key="index" >
                        <template slot="title">{{item.name}}</template>
                        <el-menu-item-group router='true'>
                        <el-menu-item :index="'/'+item.type +'?id='+items.id"   @click="ispost(items.id)"   v-for="(items,indes) in item.children" :key="indes">{{items.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-aside>
                <v-navcter :right_data="right_data"  :id="id"></v-navcter>
                <!-- <router-view/> -->
            </el-container>
        <v-combotttom></v-combotttom>
    </div>
</template>
<script>
import navcter from '@/components/navcter/navcter.vue'
   export default {
    data() {
      return {
        list_data:[],//左侧分类数据  :index="'/'+item.type +'?id='+item.id+'ids'+items.id" @click="goTo('/'+item.type +'?id='+item.id+'?ids'+items.id)"  @click="ispost(items.id)"
        right_data:[],
        id:''
        }
    },
    beforeMount(){
        var router_path = this.$route.query.id;

        this.$api.getaboutcat()
        .then(res=>{
            if(res.code==1){
                this.list_data = res.data
                this.ispost(router_path);
            }else{
                this.$message({
                showClose: true,
                message: '暂无数据！'
                });
            }
        })
        .catch(err => {
            console.log(err)
        })


    },
    mounted(){
        var url = window.location.href;
        var id = url.split('ids')[1];
    },
    methods:{
        items(){},
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        goTo(path) {
            this.$router.go(path);
        },
        // 请求列表
        ispost(id){
            this.id = id
            // console.log(id);
            this.right_data = [];
            this.$api.getaboutdetiles(id)
            .then(res=>{
                // console.log(res);
                 this.right_data = res.data
            })
        }
    },
    components:{
    'v-navcter':navcter
    }
  };
</script>

<style>
.about_banner{widows: 100%;height: 250px;}
.el-header {color: #333;line-height: 60px;border-bottom: 1px solid #ccc;}
.about_muspan{border-left:10px solid #0163d2;font-size: 20px;padding-left: 20px;}
.el-aside {color: #333;}
.el-container{width: 1200px !important;margin: 0 auto;}
.about_cet p{text-indent: 2em;line-height: 30px;}
.about_cet {display: flex;justify-content: center;align-items: center;flex-direction: column;}
.el-menu{border-right: none !important;}
.about_cet p:first-child{font-size: 24px;display: flex;justify-content: center;align-items: center;}
.el-menu-item .is-active{border-bottom-color: none !important;}
.el-menu-item:hover{color: #1787FB !important;text-decoration: underline;}
.el-menu-item{border-bottom: none !important;}
.el-menu-item.is-active{border-bottom: none !important;text-decoration:none;}
</style>
