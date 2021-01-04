<template>
  <div class="all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
            <!-- left -->
            <div class="tanchuang_title_l">
                <div class="tanchuang_title_img">
                    <img src="../../../static/img/copyright/tc_z.png" alt="" >
                </div>
                <div class="tanchuang_title_text">温馨提示</div>
            </div>
            <!-- right -->
            <div class="tanchuang_title_r" @click="close">
                <img src="../../../static/img/copyright/close.png" alt="" >
            </div>

      </div>
      <div class="tanchuang_body">
          <div class="tanchuang_bt">
              温馨提示：专利最新费减政策如下，如有疑问，请 <span>咨询右侧顾问</span>  或拨打免费客服热线 <span> 0519-88238816</span>
          </div>
          <div class="tanchuang_text">
              <h4>一、可请求减缴的收费项目：</h4>
              <p>1.申请费（不包括公布印刷费、申请附加费）；</p>
              <p>2.发明专利申请实质审查费；</p>
              <p>3.年费（自授予专利权当年起六年内的年费）；</p>
              <p>4.复审费。</p>
          </div>
          <div class="tanchuang_text">
              <h4>二、费减新政标准解读</h4>
              <p>1.企业申请，上年度应纳税总额低于100万可享受费减；</p>
              <p>2.个人申请，提供上年度年收入少于6万的证明可享受费减；</p>
              <p>3.事业单位，社会团体，非盈利性科研院所只需提供身份证明可享受费减；</p>
              <p>4.减缓只分为单个申请人或多个申请人，单个申请人享受减交85%的优惠，多个申请人享受 减交70%的优惠。申请人为个人或公司。</p>
              <p>5.两个或者两个以上的个人或者单位为共同专利申请人或者共有专利权人的，应当分别符合各 自减缴标准。</p>
          </div>
          <div class="tanchuang_text">
              <h4>三、备注</h4>
              <p>1.新政下费减备案手续办理流程请浏览<a href="#">《专利费用（官费）减缓备案系统投入运行后的办理流程》</a></p>
              <p>2.专利减缴新政详情请浏览国务院印发<a href="#">《专利收费减缴办法》</a></p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
        
      }
     
    
    },
    methods:{
        close(){
            this.$emit("close")
        },
    }
  
  
                    
            
  
}
</script>

<style>
.all {
  padding: 20px;
  width: 60%;
  color: #888888;
}
.tanchuang_all {
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
}

.tanchuang_title_text {
  font-size: 15px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title {
  background: #29334c;
  color: white;
  display: flex;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tanchuang_title_img{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-right: 8px;
}
.tanchuang_title_l{
  display: flex;
}
.tanchuang_title_r{
  margin-right: 5px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title_r img{
  height: 36px;
}
.tanchuang_body {
  padding: 20px;
    padding-bottom: 30px;

}
.tanchuang_bt {
  font-size: 16px;
}
.tanchuang_bt>span{
    color: #558a3e;
}
.tanchuang_text h4{
    color: red;
    font-size: 16px;
    margin-top: 18px;
    line-height: 2;
}
.tanchuang_text p{
    line-height: 2;
    font-size: 15px;
}
.tanchuang_text p>a{
    color: #09f;
}

</style>
