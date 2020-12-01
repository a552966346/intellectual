<template>
 <div id="indexpay_item">
   <img :src="payleft_img_url" alt="">
   <div class="indexpay_right">
      <div>
        <p>精选商品总共<span>256</span>件</p>
        <span>查看更多></span>
      </div>
      <div class="indexpay_right_list" v-if="type">
          <div class="indexpay_right_item">
            <img src="../../../static/img/index/item_img.png" alt="">
            <p class="title_blodes">BEST</p>
            <p><span>第三类</span>日化用品</p>
            <p class="title_blue">￥29400~39999</p>
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/index/item_img.png" alt="">
            <p class="title_blodes">BEST</p>
            <p><span>第三类</span>日化用品</p>
            <p class="title_blue">￥29400~39999</p>
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/index/item_img.png" alt="">
            <p class="title_blodes">BEST</p>
            <p><span>第三类</span>日化用品</p>
            <p class="title_blue">￥29400~39999</p>
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/index/item_img.png" alt="">
            <p class="title_blodes">BEST</p>
            <p><span>第三类</span>日化用品</p>
            <p class="title_blue">￥29400~39999</p>
          </div>
          <div class="indexpay_right_item">
            <img src="../../../static/img/index/item_img.png" alt="">
            <p class="title_blodes">BEST</p>
            <p><span>第三类</span>日化用品</p>
            <p class="title_blue">￥29400~39999</p>
          </div>
      </div>
      <div class="indexpay_right_lists" v-if="!type">
        <div class="activie_list">
          <span :class="{active:active==index}" v-for="(text,index) in text" :key = "index" @click="active_top(index)">{{text.name}}</span>
        </div>
        <div class="indexpay_right_item_list">
          <div class="indexpay_right_item_item">
            <p class="title">一种货物自动分拣系统一种货物自动分拣系统 </p>
            <div class="er">
              <p>行业分类：计算、推算、计数 </p>
              <p>发明专利</p>
            </div>
            <p>专利状态：已下证</p>
            <p class="pay">售价<span> ￥ 1680.0</span></p>
          </div>
          <div class="indexpay_right_item_item">
            <p class="title">一种货物自动分拣系统 </p>
            <div class="er">
              <p>行业分类：计算、推算、计数</p>
              <p>发明专利</p>
            </div>
            <p>专利状态：已下证</p>
            <p class="pay">售价<span> ￥ 1680.0</span></p>
          </div>
          <div class="indexpay_right_item_item">
            <p class="title">一种货物自动分拣系统 </p>
            <div class="er">
              <p>行业分类：计算、推算、计数</p>
              <p>发明专利</p>
            </div>
            <p>专利状态：已下证</p>
            <p class="pay">售价<span> ￥ 1680.0</span></p>
          </div>
          <div class="indexpay_right_item_item">
            <p class="title">一种货物自动分拣系统 </p>
            <div class="er">
              <p>行业分类：计算、推算、计数</p>
              <p>发明专利</p>
            </div>
            <p>专利状态：已下证</p>
            <p class="pay">售价<span> ￥ 1680.0</span></p>
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
      payleft_img_url:String,
      type:Boolean,
  },
  data() {
    return {
	text:[{name:'热门推荐'},{name:'机械'},{name:'物理'},{name:'化学'},{name:'电学'},{name:'生活家居'},{name:'固定建筑'},{name:'纺织'}],
        active:0
    }
  },
  methods:{
        active_top(s){
                this.active = s;
        }
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

  .indexpay_right_item{
    border: 1px solid #dddddd;
    padding: 20px;
    border-radius: 5px;
    width: 23%;
  }
  .indexpay_right_item>img{
    border-radius:5px;
    margin-bottom: 10px;
    width: 100%;
  }
  .indexpay_right_item>p{
    padding: 5px 0;
    font-size: 14px;
  }
  .title_blodes{
    font-size: 17px !important;
    font-weight: bold;
  }
  .title_blue{
    color: #1980c5;
    font-weight: bold;
    font-size: 15px;
  }
  .indexpay_right_item:hover{
    box-shadow: 1px 1px 6px #cee4f2;
    position: relative;
    top: -3px;
  }
/* 分割线 */
  .indexpay_right_lists{
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }
  .activie_list{
    padding: 0px 0;
    display: flex;
  }
  .activie_list>span{
    padding:3px 10px;
    margin: 0 5px;
  }
  .activie_list>.active{
    background: #4b7ef1;
    border-radius: 30px;
    color:#fff
  }
  .indexpay_right_item_list{
    display: flex;
    justify-content: space-between;
    align-content:flex-start;
    flex-wrap: wrap;
    flex: 1;
    padding: 15px 0;
  }
  .indexpay_right_item_item{
    width: 32%;
    padding:20px 15px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    font-size: 14px;
    height: 32%;
    margin-bottom: 1%;
  }
  .indexpay_right_item_item>.title{
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .indexpay_right_item_item>.er{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .indexpay_right_item_item>.er>p:first-of-type{
    display: inline-block;
    width: 65%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .indexpay_right_item_item>.er>p:last-of-type{
    color:#187ec6;
    width: 35%;
    text-align: right;
  }
  .indexpay_right_item_item>p{
    padding-bottom:10px;
  }
  .indexpay_right_item_item>p:last-of-type{
    padding-bottom: 0;
  }
  .pay>span{
    font-size: 16px;
    color: #187ec6;
  }
</style>
