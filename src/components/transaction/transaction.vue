<template>
  <div class="Publictitle_all">
    <div class="Publictitle_title">
      <div class="Publictitle_title_left">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583035764,1571388243&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="Publictitle_title_right">
        <p style="font-size: 25px; padding-left: 15px">发明专利申请</p>
        <div class="Publictitle_title_text1">
          <p class="p_text1">
            发明专利指对产品，方法或者其改进所提出的技术方案，相较于实用新型，外观设计，发明专利的法律状态最为稳定且技术价值最高。
          </p>
        </div>
        <!-- 外观设计专利申请 隐藏项 -->
        <div class="sertype">
          <div>服务类型：</div>
          <div class="sertypeone">
            <div
              :class="{ active: active == index }"

              v-for="(item, index) in option1"
              :key="index"
              @click="select(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="mon">
          <div>费用减缓：</div>
          <div class="monone">
            <div
              :class="{ activeone: change == index, imghid :hid == index }"
              v-for="(item, index) in option2"
              :key="index"
              @click="selects(index)"
            >
              {{ item.data }}
              <div :class="{show:change == index,aa:flag}"><img src="../../../static/img/transaction/transaction_tip.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="tip">
          <div class="tiptext">
            完善更多专利信息，可尽快安排技术专家查新撰写
          </div>
          <a href="">点击完善</a>
        </div>
        <div class="applybtn">
          <div>
            <div>服务费用：</div>
            <div>￥xxxx</div>
          </div>
          <div>
            <div>国知局费用：</div>
            <div>￥560</div>
            <div>xxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div>
            <div>费用合计：</div>
            <div>￥3000</div>
          </div>
          <div>
            <button>确认申请</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: 0,
      active: 0,
      hid: 0,
      flag:true,
      option1: [{ name: "标准" }, { name: "授权保险" }],
      option2: [{ data: "减缓85%" }, { data: "减缓70%" }, { data: "无减缓" }],
      imgages:[{img: ""}]
    };
  },
  methods: {
    select(num) {
      this.active = num;
    },
    selects(num2) {
      this.change = num2;
    },
  },
};
</script>
<style scoped>
* {
  text-decoration: none;
}
.aa{
        display: none;
}
.show{
        display: block;
}
.active {
  background-color: #187fc4;
  color: #fff !important;
}

.activeone {
  border:1px solid #187fc4 !important;
}

.Publictitle_all {
  width: 100%;
}

.Publictitle_title {
  display: flex;
}

.p_text1 {
  padding: 15px;
  color: #8a8b8d;
  letter-spacing: 2px;
  font-size: 14px;
}

.price {
  padding: 30px 10px;
  background-color: #f0eeef;
  margin-top: 10px;
}

input:focus {
  outline: none;
}

.price > span:nth-child(1) {
  color: #8a8b8d;
  text-align: center;
}

.price > span:nth-child(2) {
  color: red;
  font-size: 30px;
}

.tel_num {
  line-height: 40px;
  margin-top: 10px;
  display: flex;
}

.pop {
  line-height: 40px;
  margin-top: 20px;
  display: flex;
}

.Publictitle_title > div {
  width: 50%;
  padding: 30px;
}

.tips {
  margin-top: 20px;
  margin-left: 80px;
}

.tips > p {
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
/* 外观设计专利申请 隐藏项 */
.sertype {
  display: flex;
  margin-top: 20px;
}

.sertype > div:nth-child(1) {
  width: 90px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8d8d8d;
}

.sertypeone {
  display: flex;
  cursor: pointer;
}

.sertypeone > div:nth-child(1) {
  border: 1px solid #187fc4;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  font-size: 16px;
  letter-spacing: 3px;
  margin-right: 15px;
  color: #8d8d8d;
}
.sertypeone > div:nth-child(2) {
  border: 1px solid #187fc4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 5px 15px;
  color: #8d8d8d;
}
.mon {
  display: flex;
  margin-top: 20px;
}
.monone {
  display: flex;
  cursor: pointer;
}
.monone > div {
  position: relative;
}
.monone > div>div img{
  position: absolute;
  width: 18%;
  height: 60%;
  top: 0;
  right: 0;
}

.mon > div:nth-child(1) {
  width: 90px;
  height: 28px;
  padding: 13px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #8d8d8d;
}

.monone > div{
  border: 1px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  font-size: 16px;
  margin-right: 15px;
  color: #8d8d8d;
}

.tip {
  display: flex;
}

.tip > a {
  font-size: 14px;
  padding: 15px 0;
  padding-left: 20px;
  color: #187fc4;
}
.tiptext {
  font-size: 14px;
  padding: 15px 0;
  padding-left: 20px;
  color: #8d8d8d;
}

.applybtn {
  border: 1px solid #187fc4;
  padding: 15px;
  background-color: #f4f6ff;
}

.applybtn > div {
  display: flex;
  padding: 15px 0;
  color: #8d8d8d;
}

.applybtn > div > button {
  outline-style: none;
  border: none;
  background-color: #187fc4;
  padding: 10px 25px;
  border-radius: 6px;
  font-size: 16px;
  color: #fff;
}
</style>
