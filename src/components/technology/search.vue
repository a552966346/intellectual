<template>
 <div id="indexpay_item">
   <img :src="payleft_img_url" alt="">
   <div class="indexpay_right">
      <div>
        <p><span><</span><span>1</span><span>/</span><span>2</span><span>></span></p>
        <span>查看更多></span>
      </div>
      <div class="indexpay_right_list">
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机   
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                         自保温墙体及制作工艺     
                    </div>
                    <div>
                      <span>面议</span>
                      <span>发明专利</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
                    </div>
            </div>
            
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/technology/ceshi.png" alt="">
            <div>
                    <div>
                        一种下料机    
                    </div>
                    <div>
                      <span>面议</span>
                      <span>不限</span>
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
    box-shadow: 1px 0px 5px 3px rgba(212,224,240,0.16);
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
  /*  */
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
          /* border-radius: 5px; */
          padding: 20px;
          border-top: none;
  }

  
  .indexpay_right_item img{
      width: 172px;
      height: 125px;
      border-radius: 5px;
      margin-bottom: 10px;
      width: 100%;
  }
  .indexpay_right_item>div>div:nth-child(1){
      font-size: 14px;
      margin: 0px 0px 60px 0;
  }
  .indexpay_right_item>div>div:nth-child(2){
      display: flex;
      justify-content: space-between;
  }
  .indexpay_right_item>div>div:nth-child(2)>span:nth-child(1){
      font-size: 15px;
      color: #ff6e3f;
  }
  .indexpay_right_item>div>div:nth-child(2)>span:nth-child(2){
      font-size: 11px;
      color: #95b3f7;
  }
  .indexpay_right_list>div:nth-child(5)~div{
      border-bottom: none;
  }
  .indexpay_right_item:hover{
     box-shadow: 0 0px 5px 5px rgba(212,224,240,0.5);
  }
</style>
