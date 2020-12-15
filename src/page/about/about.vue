<template>
    <div class="about_all">
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <div class="about_banner">
            <img src="../../../static/img/about/about_banter.png" alt="altText">
        </div>
        <!--:default-openeds="['1']"-->
        <el-container style="padding:1px 0">
                <el-aside width="201px" style="border-right:1px solid rgba(230,230,230);">
                    <el-menu
                    collapse-transition
                    :default-active="$route.path"
                    class="aside-menu-test"
                    text-color="#000"
                    router
                    :collapse="collapse"
                    >
                        <el-submenu :index="index" v-for='(item,index) in list_data' :key="index">
                            <template slot="title">{{item.name}}</template>
                            <el-menu-item-group router='true'>
                            <el-menu-item index="/about" @click="goTo('/about')" v-for="(items,indes) in item.children" :key="indes">{{items.name}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <router-view/>
            </el-container>
        <v-combotttom></v-combotttom>
    </div>
</template>
<script>
import navcter from '@/components/navcter/navcter.vue'
import navctertw from '@/components/navcter/navctertw.vue'
   export default {
    data() {
      return { 
          list_data:[],//左侧分类数据

      }
    },
    beforeMount() {
        this.$api.getaboutcat()
        .then(res=>{
            console.log(res)
            console.log(123456)
            if(res.code==1){
                this.list_data = res.data 
            }
        })
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        goTo(path) {
            this.$router.replace(path);
        }
    },
    components:{
    'v-navcter':navcter,
    'v-navcter':navctertw,
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