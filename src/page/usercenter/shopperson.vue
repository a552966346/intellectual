<template>
    <div class="shopperson">
        <div class="shop_top">
            <div class="top_text">我是卖家/我出售的商标</div>
            <div class="top_shopcar">
                <img src="../../../static/img/usercenter/shopcar.png" alt="">
                <span @click="sell">我要出售</span> 
            </div>
        </div>
        <!-- 订单 -->
        <div class="shop_order" v-show="showorder" >
                <div class="sborder_all" v-show="showsborder" @click.self="showssb" v-if="type==1">
                    <v-sborder ></v-sborder>
                </div>
                <div class="zlorder_all" v-show="showzlorder" @click.self="showszl" v-else-if="type==2">
                    <v-zlorder ></v-zlorder>
                </div>
                <div class="bqorder_all" v-show="showbqorder" @click.self="showsbq" v-else-if="type==3" >
                    <v-bqorder ></v-bqorder>
                </div>
                <div class="jsorder_all" v-show="showjsorder" @click.self="showsjs" v-else>
                    <v-jsorder ></v-jsorder>
                </div>
        </div>
        <!-- 出售 -->
        <div class="shop_con" v-show="show">
            <div class="s_t_sea">
                    <input type="s_text" placeholder="请输入您要查找的商品编号或注册号">
                    <div class="s_search">搜索</div>
            </div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" width="40px">
                
              <el-tab-pane label="出售商标" name="first" >
                <div class="cssb_all" >
                    <v-cssb ></v-cssb>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出售专利" name="second">
                <div class="cszl_all" >
                    <v-cszl ></v-cszl>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出售版权" name="third">
                <div class="csbq_all" >
                    <v-csbq ></v-csbq>
                </div>
              </el-tab-pane>
              <el-tab-pane label="技术转让" name="fourth">
                <div class="jszr_all" >
                    <v-jszr ></v-jszr>
                </div>
                
              </el-tab-pane>  
            </el-tabs>
        </div> 
    </div>
</template>
<script>
import cszl from '../../components/usercenter/cszl.vue'
import cssb from '../../components/usercenter/cssb.vue'
import csbq from '../../components/usercenter/csbq.vue'
import jszr from '../../components/usercenter/jszr.vue'
import jsorder from '../../components/usercenter/jsorder.vue'
import sborder from '../../components/usercenter/sborder.vue'
import bqorder from '../../components/usercenter/bqorder.vue'
import zlorder from '../../components/usercenter/zlorder.vue'


export default{
    data(){
        return{
            msg:'这是测试内容',
            activeName: 'first',
            showjsorder:true,
            showzlorder:true,
            showbqorder:true,
            showsborder:true,
            showorder:true,
            show:false,
            type:1,
        }
            
    },
    mounted() {
            // 卖家   商标订单
            this.$api.getuserTrademarkOrder()
            .then(res=>{
                    this.traOrder = res.data
                    

            })
            // 卖家   专利订单
            this.$api.getuserPatentsOrder()
            .then(res=>{
                    this.patOrder = res.data
                    

            })
            // 卖家   版权订单
            this.$api.getuserCopyrightOrder()
            .then(res=>{
                    this.copOrder = res.data

            })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      sell(){
            this.show=true
            this.showorder=false
            this.isshowzl=true
            this.isshowsb=true
            this.isshowbq=true
            this.isshowjs=true
      }
    },
    components:{
        "v-cszl": cszl,
        "v-cssb": cssb,
        "v-csbq": csbq,
        "v-jszr": jszr,
        "v-zlorder": zlorder,
        "v-sborder": sborder,
        "v-bqorder": bqorder,
        "v-jsorder": jsorder,
    }
    
}
</script>
<style scoped>

.shopperson{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.shop_top{
    color: #919191;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
.top_text{
    font-size: 14px;
    padding: 15px;
}
.top_shopcar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    margin: 4px;
    background-color:#1b7fc3;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
}
.top_shopcar img{
    margin-right: 8px;
}

.shop_con,
.shop_order{
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #efefef;
    border-radius: 5px;
    position: relative;
}
.s_con_t{
    display: flex;
    border-bottom: 1px solid #efefef;
}
.s_con_t_item {
    background-color: #f9f9f9;
    width: 145px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    color: #949494;
}
.s_con_t_item:hover{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}


.s_t_sea{
    display: flex;
    align-items: center;
    width: 280px;
    position: absolute;
    top: 14px;
    right: 0;
}
.s_t_sea input{
    width: 220px;
    display: flex;
    font-size: 10px;
    border: 1px solid #efefef;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px ;
}
.s_search{
    width: 50px;
    height: 25px;
    font-size: 14px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
}

.s_con_b{
    margin-top: 20px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    color: #b7b7b7;
}


.s_con_b_item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.s_content{
    height: 300px;
    margin-top: 15px;
    display: flex;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}


.s_content_c{
   text-align: center;
   vertical-align:middle;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
   font-size: 16px;
   color: #5f5f5f;
   line-height: 1.5;
   
}
.s_content_c p:nth-of-type(2){
    font-size: 12px;
}
.s_content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}
.s_content_c a{
    color: #1c7fc3;
    text-decoration: none;
}

.s_content_d>.con_b{
    border: none;
}


</style>