<template>
<div>
    <div class="jsorder_all">
        <div class="s_t_sea">
                    <!-- <input type="s_text" placeholder="请输入您要查找的商品编号或注册号">
                    <div class="s_search">搜索</div> -->
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

            <el-tab-pane label="全部技术" name="first">
            </el-tab-pane>
            <el-tab-pane label="审核中的技术" name="second">
            </el-tab-pane>
            <el-tab-pane label="在售中的技术" name="third">
            </el-tab-pane>
            <el-tab-pane label="交接中的技术" name="fourth">
            </el-tab-pane>
            <el-tab-pane label="已完成的技术" name="fifth">
            </el-tab-pane>
        </el-tabs>
        <div v-if="copzy.length!=0">
                <paytime  :uqdata="copzy"></paytime>
        </div>
        <div class="none" v-else>
            <div class="s_content">
              <div class="s_content_c">
                <img src="../../../static/img/usercenter/nomessage.png" alt="">
                <p>没有看到您的商品信息。</p>
                <p>如果您有商品，您可以去<span @click="sell">登记出售信息</span></p>
              </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
         import paytime from '@/components/usercenter/serviceClass.vue'
export default {
    data(){
        return{
            activeName: 'first',
            jslist:[],
            copzy:[]
        }
    },
    components:{
            paytime
    },
    mounted() {
            this.getzy()
    },
    methods: {
      handleClick(tab, event) {
              if(this.activeName=='first'){
                      this.getzy()
              }else if(this.activeName=="second"){
                       this.getzy(0)
              }else if(this.activeName=='third'){
                      this.getzy(1)
              }
      },
      sell(){
          this.$emit('sell')
      },
      getzy(type){
              this.$api.getusertechnologydata(this.$store.state.user.id,type)
              .then(res=>{
                      this.copzy = res.data.data

              })
      }
    }
}
</script>
<style scoped>

.jsorder_all{
    position: relative;
}
.s_t_sea{
    display: flex;
    align-items: center;
    width: 280px;
    position: absolute;
    top: 6px;
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
.s_content_c span{
    color: #1c7fc3;
    text-decoration: none;
    cursor: pointer;
}
</style>
