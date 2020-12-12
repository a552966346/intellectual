<template>
 <div id="indexpay_item">
   <img :src="payleft_img_url" alt="">
   <div class="indexpay_right">
      <div>
        <p>精选商品总共<span>256</span>件</p>
        <span>查看更多></span>
      </div>
      <div class="indexpay_right_list">
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                            
                    </div>
            </div>
          </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  // 组件中接受的值
  props:{
        payleft_img_url:String
  },
  data() {
    return {
        active:0
    }
  },
  methods:{

  }
}
</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #indexpay_item{
    width: 1200px;
    margin: 20px auto;
    background: #fff;
    border-radius: 10px;
    display: flex;
  }
  .indexpay_right{
    flex:1;
    padding:15px 25px;
    display: flex;
    flex-direction: column;
  }
  .indexpay_right>div:nth-child(1){
    display: flex;
    justify-content: flex-end;
    padding: 0 0 10px;
    border-bottom: 1px solid #f6f6f6;
  }
  .indexpay_right>div:nth-child(1) p{
    padding-right: 15px;
  }
  .indexpay_right>div:nth-child(1) span:nth-child(1){
    color: #1780c2;
    font-size: 17px;
  }
  .indexpay_right_list{
    display: flex;
    padding: 20px 0;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .indexpay_right_list>div{
          width: 20%;
          border:1px solid #EEEEEE;
  }


</style>
