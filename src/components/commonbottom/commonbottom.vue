<template>
 <div id="commonbottom">
   <div class="commonbottom_top">
     <div class="bottom_left_item">
       <img src="../../../static/img/common/white_logo.png" alt="">
       <p>{{address}}</p>
       <p>{{support}}</p>
     </div>
     <div class="bottom_right_item">
       <div>
         <p>新手指引</p>
         <li>注册登录</li>
         <li>忘记密码</li>
         <li>关于合同</li>
       </div>
       <div>
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
       </div>
     </div>
   </div>
   <div class="commonbottom_bottom">
      <p>{{records}}</p>
   </div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      address:'地址:山西晋中市定阳路1100号 (职工医学院对面)',
      support:'技术支持:晋中华迅网路技术股份有限公司',
      records:'备案号'
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
  .bottom_right_item li{
    list-style: none;
    padding: 15px 0 0 0;
  }
  .commonbottom_bottom{
    width: 100%;
    height: 27%;
    border-top: 1px solid #444;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
</style>