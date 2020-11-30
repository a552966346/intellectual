<template>
  <div class="Publictitle_all">
    <div class="Publictitle_title">
      <div class="Publictitle_title_left">
        <!-- <img src="./img/liasons_common_group_title.png" alt="" /> -->
      </div>
      <div class="Publictitle_title_right">
        <p style="font-size: 25px; padding-left: 15px">版权变更</p>
        <div class="Publictitle_title_text1">
          <p class="p_text1">
            版权登记后需更改登记信息，应向版权局申请变更，1~2个月完成审核并发证。本项业务的实施单位为伊甸城代理事务所（普通合伙）。
          </p>
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
      <div class="Publictitle_body_down"></div>
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
    margin-left: 80px
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
  display: flex;
}
.Publictitle_body > div {
  width: 50%;
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
</style>