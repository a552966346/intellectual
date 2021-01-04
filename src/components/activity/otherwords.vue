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
                        <ul class="works_list">
                                <li class="color1" v-for="(item,index) in lists" :key="index+'list'">
                                        <div class="works_colors" >
                                                <!-- <router-link class="works_pro" :to="{path:'/service_xlj',query:{ id:item.id}}"> -->
                                                        <div class="works_sele">
                                                                <img :src="item.images_text">
                                                        </div>
                                                <!-- </router-link> -->
                                                
                                        </div>

                                        <p class="works_p1">
                                                <span>{{item.name}}</span>
                                        </p>
                                        <p class="works_p2" v-if="item.categoryid_text">{{item.categoryid_text.name}}</p>
                                        <p class="works_p3">
                                                <span class="works_price" v-if="item.fee>=10000"><label>￥</label>{{(item.fee/10000)}}万元</span>
                                                <span class="works_price" v-else><label>￥</label>{{item.fee}}元</span>
                                                <img src="../../../static/img/paycenter/copyright_right.png" alt="">
                                        </p>
                                        <div class="works_kefu" @click="kefu">立即议价</div>
                                </li>
                        </ul>
       <!-- <div class="show">
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
       </div> -->
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      list:[
        {tet:'美术作品'},{tet:'摄影作品'},{tet:'雕塑'},{tet:'生活创意作品'},{tet:'影视作品'},{tet:'建筑作品'},{tet:'汉服设计'},{tet:'创意作品'},
      ],
      lists:[
        {images_text:"../../../static/img/activity/other1-1.png",
        name:'美少女',
        fee:'59000',},
        {images_text:"../../../static/img/activity/other2-1.png",
        name:'名字',
        fee:'59000',},
        {images_text:"../../../static/img/activity/other3-1.png",
        name:'名字',
        fee:'5900',},
        {images_text:"../../../static/img/activity/other2-1.png",
        name:'名字',
        fee:'59000',},
        {images_text:"../../../static/img/activity/other1-1.png",
        name:'美少女',
        fee:'59000',},
        {images_text:"../../../static/img/activity/other3-1.png",
        name:'名字',
        fee:'9000',},
        {images_text:"../../../static/img/activity/other2-1.png",
        name:'名字',
        fee:'46000',},
        {images_text:"../../../static/img/activity/other1-1.png",
        name:'美少女',
        fee:'59000',},
        {images_text:"../../../static/img/activity/other3-1.png",
        name:'名字',
        fee:'59000',},
      ]


    };
  },
  methods:{
    shangchuan(){
        this.$emit("shangchuan")
    },
    kefu(){
        this.$emit("kefu")
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


.works_list {
  background-color: #e9e9e9;
                display: flex;
                flex-wrap: wrap;
                padding-top: 10px;
        }

        .works_list li {
                list-style: none;
                width: 19%;
                padding: 10px;
                background: #f5f5f5;
                height: 352px;
                margin-bottom: 20px;
                margin-left: 10px;
        }

        .works_list a {
                text-decoration: none;
                color: black;
                background-color: #f5f5f5;
        }

        .works_list li>a:first-child {
                display: block;
                width: 100%;
                overflow: hidden;
        }

        .works_list li:hover .works_coloritem {
                display: block;
        }

        .works_list li:hover .works_kefu {
                display: block;
                cursor: pointer;
        }

        .works_list li:hover .works_p2 {
                display: none;
        }

        .works_colors {
                height: 235px;
        }

        .works_sele>img {
                width: 100%;
                padding: 10px;
                max-height: 210px;
        }

        .works_sele {
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .works_selector {
                width: 100%;
                height: 21px;
                box-sizing: border-box;
                padding: 3px;
                display: flex;
                justify-content: center;
        }

        .works_coloritem {
                width: 20%;
                height: 15px;
                box-sizing: border-box;
                border: 1px solid rgba(255, 255, 255, .8);
                float: left;
                cursor: pointer;
                display: none;
        }

        .works_p1 {
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        .works_p1>img {
                width: 15px;
                margin-right: 10px;
        }

        .works_p1>span {
                font-size: 15px;
                font-weight: 200;
        }

        .works_p2 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 10px 0;
                font-size: 12px;
                color: #ccc;
        }

        .works_p3 {
                border-top: 1px solid #cecece;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 9px;
        }

        .works_p3>span {
                font-size: 15px;
                color: #fa7219;
                font-weight: bold;
        }

        .works_p3>img {
                width: 15px;
        }

        .works_kefu {
                display: none;
                background-color: #187fc4;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                padding: 8px 0;
        }
</style>