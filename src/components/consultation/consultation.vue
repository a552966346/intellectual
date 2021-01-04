<template>
  <div class="consultation_left">
      <div class="consultation_top">
        <div class="consultation_flex">
          <div class="consultation_tou">
            <img :src="det.src" alt="">
          </div>
          <div class="consultation_city">{{det.text}}</div>
          <div class="consultation_liji">立即咨询</div>
        </div>
        <div class="consultation_dong">
          <h3>交易动态</h3>
          <div class="consultation_text">
            <div class="consultation_xian"></div>
            <div class="consultation_shi">交易实时动态</div>
            <div class="consultation_xian"></div>
          </div>
        </div>
        <div class="consultation_gou">
            <div class="consultation_jiao" v-for="(item,index) in det.arr" :key="index">
              <div class="consultation_house">
                <div>{{item.hour}}</div>
                <div>{{item.text}}</div>
              </div>
              <div class="consultation_lei">
               {{item.type}}
              </div>
            </div>
        </div>
      </div>
      <div class="consultation_list">
        <div class="consultation_zhuan">推介专利</div>
        <div v-for="(item,index) in det.patent" :key="index">
          <div class="consultation_img">
            <img :src="item.src" alt="">
          </div>
          <div>{{item.name}}</div>
          <div class="consultation_bet">
            <div>￥{{item.money}}</div>
            <div>发明专利</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props:{
      det:Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .consultation_left{
    width: 100%;
  }
  .consultation_top{
    background-color: white;
    box-shadow: 3px 0px 9px 1px rgba(183, 183, 183, 0.5);
  }
  .consultation_flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
  .consultation_tou{
    width: 105px;
    height: 105px;
    border-radius: 50%;
    border: 5px solid #e6f3f9;
    overflow: hidden;
  }
  .consultation_tou img{
    width: 100%;
  }
  .consultation_city{
    margin: 20px 0;
  }
  .consultation_liji{
    width: 120px;
    border-radius: 5px;
    color: #187FC4;
    border: 1px solid #187FC4;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
  .consultation_dong{
    padding: 15px;
    color: #187FC4;
    text-align: center;
    background-color: #e5e3e4;
  }
  .consultation_text{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  .consultation_xian{
    width: 40px;
    background-color: #187FC4;
    height: 1px;
    margin-top: 12px;
  }
  .consultation_shi{
    margin:0 10px;
    margin-top: 12px;
  }
  .consultation_gou{
    background-color: white;
    padding: 12px;
  }
  .consultation_jiao{
    background-color:#f6f6f6;
    padding: 10px;
    font-size: 13px;
    margin-bottom: 12px;
  }
  .consultation_house{
    display: flex;
  }
  .consultation_house div:nth-child(1){
    width: 60px;
    height: 28px;
    padding: 5px;
    color: white;
    margin-right: 15px;
    border-radius: 20px;
    background-color: #187FC4;
    text-align: center;
  }
   
  .consultation_lei{
    color:#a7a7a7;
    margin-top: 5px;
  }
  .consultation_list{
    background-color: white;
    padding: 10px;
    box-shadow: 3px 0px 9px 1px rgba(183, 183, 183, 0.5);
    margin-top: 20px;
  }
  .consultation_img img{
    width: 100%;
    border-radius: 5px;
    margin: 10px 0;
  }
  .consultation_zhuan{text-align: center;}
  .consultation_bet{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:10px 0;
  }
  .consultation_bet div:nth-child(1){
    color: #187FC4;
  }
</style>
