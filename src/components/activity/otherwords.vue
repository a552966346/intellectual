<template>
    <div class="other_works_show">
       <div class="show_top">
         <div class="top_l">
              <p>GALLERY</p>
              <div class="line"></div>
         </div>
         <div class="top_r">
           <div class="tr1" @click="shangchuan">
            <span>+</span> 上传我的作品
           </div>
           <div class="tr2"></div>
         </div>
         
       </div>
       <div class="show_cen">
          <div class="lists" v-for="(item,index) in list" :key="index">
              <div class="list">{{item.tet}}</div>
              <div class="list_img">
                <img src="../../../static/img/activity/arrow.png" alt="">
              </div>
          </div>
       </div>
       <div class="show">
            <div class="other_works_item">
                  <div class="other_works_item1">
                    <img src="../../../static/img/activity/other1-1.png" alt="">
                  </div>
                  <div class="other_works_item2">
                    <img src="../../../static/img/activity/other1-2.png" alt="">
                  </div>
                  <div class="other_works_item1">
                    <img src="../../../static/img/activity/other1-1.png" alt="">
                  </div>
            </div>
            <div class="other_works_item item2">
              <div class="other_works_item1">
                <img src="../../../static/img/activity/other2-1.png" alt="">
              </div>
              <div class="other_works_item2">
                <img src="../../../static/img/activity/other2-2.png" alt="">
              </div>
              <div class="other_works_item2">
                    <img src="../../../static/img/activity/other1-2.png" alt="">
              </div>
            </div>
            <div class="other_works_item">
              <div class="other_works_item1">
                <img src="../../../static/img/activity/other3-1.png" alt="">
              </div>
              <div class="other_works_item1 kong">
                
              </div>
              
              <div class="other_works_item1 kong1">
                <img src="../../../static/img/activity/other3-1.png" alt="">
              </div>
              <div class="other_works_item1">
                <img src="../../../static/img/activity/other3-1.png" alt="">
              </div>
            </div>
       </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      list:[
        {tet:'美术作品'},{tet:'摄影作品'},{tet:'雕塑'},{tet:'生活创意作品'},{tet:'影视作品'},{tet:'建筑作品'},{tet:'汉服设计'},{tet:'创意作品'},
      ]

    };
  },
  methods:{
    shangchuan(){
        this.$emit("shangchuan")
    }
  }
}
</script>
<style scoped>
.other_works_show{
  margin-bottom: 60px;
}
.show_top{
  display: flex;
  justify-content: space-between;
}
.top_l>p{
    font-size: 28px;
    padding: 20px 0;
}
.top_r{
  width: 30%;
  position: relative;
}
.tr1 span{
  font-size: 25px;
  margin-right: 5px;
}
.tr1,.tr2{
  background-color: pink;
  width: 44%;
  height: 54px;
  margin-right: 20px;
  position: absolute;
  border: 1px solid #000;
}
.tr1{
  background-color: #fff;
  bottom: 0px;
  right: 0px;
  z-index: 2;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tr2{
  background-color: #0163d2;
  top: 12px;
  right: 17px;
}
.show_cen{
  font-size: 18px;
  margin-top: 20px ;
  display: flex;
  
}
.lists{
  cursor: default; 
}
.lists:hover .list{
  color: #000;
  font-weight: 550;
}
.lists:hover .list_img{
  opacity: 1;
}
.list{
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list_img{
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.list_img img{
  width: 15%;
}

.show{
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
}
.other_works_item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.other_works_item div:nth-of-type(2),
.kong1{
  margin: 29px 0;
}
.item3{
  margin-top: 462px;
}
.item2{
  margin: 0 42px;
}
.item2 div:nth-of-type(2){
  width: 211%;
}
.show img{
  width: 100%;
}
.kong{
  width: 370px;
 
}

.other_works_item1{
  flex: 1;
}
.other_works_item2{
  flex: 2;
}
</style>