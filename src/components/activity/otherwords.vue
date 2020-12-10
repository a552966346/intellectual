<template>
    <div class="other_works_show">
       <div class="show_top">
         <p>GALLERY</p>
         <div class="line"></div>
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

    };
  },
};
</script>
<style scoped>
.other_works_show{
  margin-bottom: 60px;
}
.show_top p{
    font-size: 28px;
    padding: 20px 0;
}
.show{
    margin-top: 30px;
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