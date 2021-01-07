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
       <div >
               <div class="show_cen">
                       <div class="lists" v-for="(item,index) in list" :key="index">
                           <div class="list"  @click="istype(index)">{{item.name}}</div>
                           <div class="list_img">
                             <img src="../../../static/img/activity/arrow.png" alt="">
                           </div>
                       </div>
                    </div>
                    <div class="imgall">
                            <div class="show" v-for="(item,index) in list" :key="index" v-show="cshow ==index">
                                        <img :src="item1.images" v-for="(item1,index) in item.flea" alt=""  @click="running(item1.id)" @mouseenter="enter(index)" @mouseleave="leave">
                                        <!-- <div class="other_works_txt" v-for="(item1,index) in item.flea" v-show="seen==index">
                                                <h4>{{item1.name}}</h4>
                                                <p>{{item1.summarize}}</p>
                                                <span>{{item1.fee}}</span>
                                        </div> -->
                            </div>
                    </div>

       </div>


    </div>
</template>
<script>
export default {
  data() {
    return {
      seen: null,
      cshow:0,
      flea:[]
    }
  },
  props:{
    list:''
  },
  mounted() {

  },
  methods:{
    shangchuan(){
        this.$emit("shangchuan")
    },
    kefu(){
        this.$emit("kefu")
    },
    enter(index){
        this.seen = index

    },
    leave(){
        this.seen = null
    },
    istype(index){
            this.cshow= index
    },
    running(id){
            this.$router.push({
                    path:'/detils',
                    query:{
                            id:id
                    }
            })
    }
  }
}
</script>
<style scoped>
.mother_works_show{
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
.imgall{
        width: 100%;
        /* overflow-x: hidden; */
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
        display: flex;
        flex-wrap: wrap;
        /* align-content:center; */
        padding: 15px;
}

.show>img{
        flex: 1 1 auto;
        margin: 0 10px 10px 0;
        box-shadow: 2px 2px 5px #ccc;
        /* width: 100%; */
        height: 300px;
}
.show>img:last-child{
        /* width: auto; */
}
.show>div{
        flex: 1 1 auto;
        height: 100px;
        font-display: flex;
}
.other_works_item2{
        /* position: fixed; */
        max-width: 30%;
        height: 100%;
       display: flex;
       padding: 5px;
       flex-direction: column;
        justify-content: center;
        align-items: center;
}
.other_works_item2 img{
        width: 100%;
        display: flex;
        justify-content: start;
        height:  100%;
         box-shadow: 2px 2px 5px #ccc;
}
.other_works_txt{
        position: relative;
        z-index: 9;
        height: 80px;
        top: -80px;
        background: rgba(0,0,0,0.5);
        width: 100%;
        padding: 5px 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
}
.other_works_txt>h4{
      color: #eee;
}
.other_works_txt>p:nth-child(2){
        width: 90%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        color: #ddd;
        font-size: 15px;
}
.other_works_txt>span:nth-child(3){
        color: #EB3941;
        font-size: 13px;
}
</style>
