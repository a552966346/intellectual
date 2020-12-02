<template>
  <div class="Publictitle_all">
    <div class="Publictitle_title">
      <div class="Publictitle_title_left">
          <!-- <img src="../../../static/img/common/apply_form.png" alt=""> -->
      </div>
      <div class="Publictitle_title_right">
        <p style="font-size: 25px; padding-left: 15px">版权变更</p>
        <div class="Publictitle_title_text1">
          <p class="p_text1">
            版权登记后需更改登记信息，应向版权局申请变更，1~2个月完成审核并发证。本项业务的实施单位为伊甸城代理事务所（普通合伙）。
          </p>
          <!-- 维权赔付添加项 -->
          <!-- <div class="dbed">
            <div>
              担保额度
            </div>
            <div class="dbed_mon">
              <div>30万</div>
              <div>60万</div>
              <div>100万</div>
            </div>
          </div> -->
        </div>
        <div class="price">
          <span>价格：</span>
          <span>￥800</span>
        </div>
        <div class="tel_num">
          <span class="input_span">联系电话</span>
          <input type="text" >
        </div>
        <div class="pop">
          <span class="input_span">联系人</span>
          <input type="text" >
        </div>
        <div  class="divbutton">
          <button>免费咨询</button>
        </div>
        <div class="tips">
          <p>
            提交申请后，伊甸团队知识产权顾问将尽快与您联系
          </p>
        </div>
      </div>
    </div>
    <div class="Publictitle_body">
      <div class="Publictitle_body_up">
        <span>诚信机构</span>
        <p>
          国家商标局备案机构，请放心交易
        </p>
      </div>
      <div class="Publictitle_body_down">
        <!-- 底部内容待填充 -->
        <div class="Publictitle_body_down_left">
          <div>即买即用</div>
          <div>签署合同</div>
          <div>确认后收款</div>
          <div>支持线下</div>
          <div>担保交易</div>
        </div>
        <div class="Publictitle_body_down_text">商标局备案机构，请放心交易</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.Publictitle_all {
  width: 100%;
}
.Publictitle_title {
  display: flex;
}
.p_text1{
    padding: 15px;
    color: #8a8b8d;
    letter-spacing: 2px;
    font-size: 14px;
}
.price{
    padding: 30px 10px;
    background-color: #f0eeef;
    margin-top: 10px;
}
input:focus{outline: none;}
.price>span:nth-child(1){
    color: #8a8b8d;
    text-align: center
}
.price>span:nth-child(2){
    color: red; 
    font-size: 30px
}
.tel_num{
    line-height: 40px; 
    margin-top: 10px; 
    display: flex
}
.pop{
    line-height: 40px; 
    margin-top: 20px; 
    display: flex
}
.Publictitle_title > div {
  width: 50%;
  padding: 30px;
}
.tips{
    margin-top: 20px; 
    margin-left: 80px;
}
.tips>p{
    width: 100%;
    font-size: 8px;
    text-align: center;
    color: #8a8b8d;
    letter-spacing: 1px;
}
.Publictitle_title_text1 {
  background-color: #f3f6ff;
  margin-top: 20px;
}
.input_span {
  padding-left: 15px;
  width: 80px;
  text-align: center;
  color: #8a8b8d;
}
.Publictitle_title_left img {
  width: 100%;
}
.divbutton{
    margin-top: 30px; 
    margin-left: 110px; 
    width: 300px
}
input {
  margin-left: 30px;
  height: 40px;
  width: 300px;
  border: none;
  border: 1px solid #8a8b8d;
}
button {
  width: 100%;
  background-color: #187fc4;
  border: none;
  padding: 15px 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
}
.Publictitle_body {
  border-bottom: 2px dashed #eeeeee;
}
.Publictitle_body > div {
  width: 100%;
  padding: 20px;
  display: flex;
}
.Publictitle_body_up>span{
    border-radius: 10px;
    border: 1px solid #fb9d3d;
    text-align: center;
    padding: 2px 12px;
    color: #fb9d3d;
}
.Publictitle_body_up>P{
    margin-left: 10px; 
    padding: 2px 12px
}
button:focus{outline: none;}
.Publictitle_body_down{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.Publictitle_body_down_left{
  width: 70%;
  display: flex;
}
.Publictitle_body_down>div>div{
  color: #f5f5f5;
  opacity: 0.5;
  font-size: 14px;
  padding-right: 70px;
}
.Publictitle_body_down_text{
  color: #f5f5f5;
  opacity: 0.5;
  font-size: 14px;
  flex: 1;
}
/* 维权赔付添加项 */
/* .dbed{
  display: flex;
  padding: 20px 15px;
}
.dbed:nth-child(1){
  width: 90px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
}
.dbed_mon:nth-child(1){
  border: 1px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-size: 16px;
  letter-spacing: 3px;
  margin-right: 15px;
  color: #8d8d8d;
}
.dbed_mon:nth-child(2){
  border: 1px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-size: 16px;
  letter-spacing: 3px;
  margin-right: 15px;
  color: #8d8d8d;
}
.dbed_mon:nth-child(3){
  border: 1px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-size: 16px;
  letter-spacing: 3px;
  color: #8d8d8d;
} */
</style>