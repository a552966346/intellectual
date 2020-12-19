<template>
    <div id="addition">
        <div class="item">
            <img src="../../../static/img/technology/tecservice1.png" alt="">
            <div class="item_content">
                <p>
                    <img src="../../../static/img/technology/seveice.png" alt="">
                    <span>专利服务</span>
                </p>
                <p>专利服务其实是专利服务其实是专利服务其实是专利服务其实是</p>
                <p>
                    <span>了解详情</span>
                    <img src="../../../static/img/technology/jiantou.png" alt="">
                </p>
            </div>
        </div>
        <div class="item">
            <img src="../../../static/img/technology/tecservice1.png" alt="">
            <div class="item_content">
                <p>
                    <img src="../../../static/img/technology/seveice.png" alt="">
                    <span>专利服务</span>
                </p>
                <p>专利服务其实是专利服务其实是专利服务其实是专利服务其实是</p>
                <p>
                    <span>了解详情</span>
                    <img src="../../../static/img/technology/jiantou.png" alt="">
                </p>
            </div>
        </div>
        <div class="item">
            <img src="../../../static/img/technology/tecservice1.png" alt="">
            <div class="item_content">
                <p>
                    <img src="../../../static/img/technology/seveice.png" alt="">
                    <span>专利服务</span>
                </p>
                <p>专利服务其实是专利服务其实是专利服务其实是专利服务其实是</p>
                <p>
                    <span>了解详情</span>
                    <img src="../../../static/img/technology/jiantou.png" alt="">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // 组件中接受的值
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
    #addition{
        width: 1200px;
        margin: 20px auto;
        background: #fff;
        display: flex;
        /* border: 1px solid #3333; */
    }
    .item{
        width: 33%;
        border-radius: 5px;
        box-shadow: 0 0px 5px 5px rgba(212,224,240,0.5);
        margin-right: 4px;
    }
    .item>img{
        width: 100%;
    }
    .item_content{
        padding: 30px;
    }
    .item_content>p:nth-child(1){
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        font-size: 20px;
    }
    .item_content>p:nth-child(1)>img{
        height: 25px;
        width: 25px;    
        margin-top: 3px;
    }
    .item_content>p:nth-child(2){
        font-size: 14px;
        color: #757575;
        margin-bottom: 40px;
    }
    .item_content>p:nth-child(3){
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #757575;
    }
    .item_content>p:nth-child(3)>img{
        width: 70px;
        height: 20px;
    }
</style>