<template>
<div id="toplist">
    <div class="item">
        <img src="../../../static/img/technology/toplist1.png" alt="">
        <div class="itemall">
            <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪(公开号)</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        </div>
        <div class="item_bottom">
            <img src="../../../static/img/technology/enter.png" alt="">
        </div>
    </div>
    <div class="item">
        <img src="../../../static/img/technology/toplist1.png" alt="">
        <div class="itemall">
            <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪(公开号)</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        </div>
        <div class="item_bottom">
            <img src="../../../static/img/technology/enter.png" alt="">
        </div>
    </div>
    <div class="item">
        <img src="../../../static/img/technology/toplist1.png" alt="">
        <div class="itemall">
            <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪(公开号)</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        <div class="item_list">
            <span>1</span>
            <p>一种多功能坡度测量仪</p>
            <img src="../../../static/img/technology/toplistjiantou.png" alt="">
        </div>
        </div>
        <div class="item_bottom">
            <img src="../../../static/img/technology/enter.png" alt="">
        </div>
    </div>
</div>

</template>
<script>
export default {
    props:{
        // payleft_img_url:String
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
    #toplist{
        width: 1200px;
        margin: 20px auto;
        background: #fff;
        display: flex;
        /* border: 1px solid #3333; */
    }
    .item{
        width: 33.3%;
        /* border-radius: 5px; */
        /* box-shadow: 0 0px 5px 5px rgba(212,224,240,0.5); */
        /* margin-right: 3px; */
        /* padding: 30px; */
    }
    .itemall{
        padding: 30px 30px 10px 30px;
    }
    .item>img{
        width: 100%;
    }
    .item_list{
        display: flex;
        /* padding: 5px 40px; */
        justify-content: space-between;
        align-items: center;
        /* padding: 30px; */
        margin-bottom: 30px;
        font-size: 16px;
    }
    .item_list>span{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: #f6f6f6;
        color: #bebdc3;
        font-size: 10px;
        text-align: center;
        line-height: 15px;
    }
    .item_list>img{
        width: 20px;
        height: 20px;
    }
    .itemall>div:nth-child(1)>span{
        background: #f54643;
        color: #fff;
    }
    .itemall>div:nth-child(2)>span{
        background: #ff8544;
        color: #fff;
    }
    .itemall>div:nth-child(3)>span{
        background: #ffa933;
        color: #fff;
    }
    .item_bottom{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
    }
    .item_bottom>img{
        width: 80px;
        height: 40px;
    }
</style>