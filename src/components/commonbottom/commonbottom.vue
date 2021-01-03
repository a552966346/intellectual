<template>
 <div id="commonbottom">
   <div class="commonbottom_top">
     <div class="bottom_left_item">
       <img src="../../../static/img/common/white_logo.png" alt="">
       <p>{{address}}</p>
       <p>{{support}}</p>
     </div>
     <div class="bottom_right_item">
       <div v-for="(item,index) in text" :key="index">
         <p>{{item.name}}</p>
                 <li v-for="children in item.children" :key="children.id" @click="run(children.id)">{{children.name}}</li>
         <!-- <li>忘记密码</li>
         <li>关于合同</li> -->
       </div>
       <!-- <div>
         <p>业务指导</p>
         <li>技术交底书</li>
         <li>关于费用</li>
         <li>业务流程</li>
       </div>
       <div>
         <p>支付方式</p>
         <li>网银支付</li>
         <li>银行汇款</li>
         <li>支付宝支付</li>
         <li>余额支付</li>
       </div>
       <div>
         <p>售后服务</p>
         <li>维权投诉</li>
         <li>退款说明</li>
         <li>发票管理</li>
       </div> -->
     </div>
   </div>
   <div class="commonbottom_bottom">
      <!-- <p>{{records}}</p> -->
      <p>{{msg}}</p>
   </div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      address:'地址:山西晋中市定阳路1100号 (职工医学院对面)',
      support:'技术支持:晋中华迅网络科技股份有限公司',
      // records:'备案号：',
      text:'',
      msg:'版权所有：Copyright © 2020 山西知识产权交易中心 晋ICP备20002788号  服务热线：18910769211'
    }
  },
  beforeMount() {
          this.$api.getbottom()
          .then(res=>{
                 this.text = res.data
          })
          .catch(err => {
                  console.log(err)
          })
  },
  methods:{
          run(id){
                  console.log(id)
                  this.$router.push({
                          path:'/aboutus',
                          query:{
                                  id:id
                          }
                  })
          }
  }
}

</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #commonbottom{
    height: 350px;
    width: 100%;
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .commonbottom_top{
    flex: 1;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom_left_item{
    height: 100%;
    font-size: 14px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  .bottom_right_item{
    flex:1;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
  .bottom_right_item>div>p{
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .bottom_right_item a{
          color: #fff;
  }
  .bottom_right_item li{
    list-style: none;
    padding: 15px 0 0 0;
    cursor: pointer;
  }
  .commonbottom_bottom{
    width: 100%;
    height: 27%;
    border-top: 1px solid #444;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
</style>
