<template>
  <div>
      <v-topsearch></v-topsearch>
      <v-navigation></v-navigation>
      <div class="copyright_pay">
        <img src="../../../static/img/paycenter/copyright_top.png" alt="">
        <!-- 分类 -->
        <div class="copyright_sort">
            <div class="copyright_select">
                <dl>
                    <dt>版权分类</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">小说作品</a>
                       <a href="#">剧本作品</a>
                       <a href="#">人文社科</a>
                       <a href="#">美术作品</a>
                       <a href="#">漫画作品</a>
                       <a href="#">摄影作品</a>
                       <a href="#">软件作品</a>
                       <a href="#">图形作品</a>
                    </dd>
                </dl>
                <dl>
                    <dt>交易方式</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">转让</a>
                       <a href="#">授权</a>
                       <a href="#">分账</a>
                    </dd>
                </dl>
                <dl>
                    <dt>授权方式</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">独家</a>
                       <a href="#">非独家</a>
                    </dd>
                </dl>
                <dl>
                    <dt>授权范围</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">全部版权</a>
                       <a href="#">复制权</a>
                    </dd>
                </dl>
                <dl>
                    <dt>出售价格</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">1万以下</a>
                       <a href="#">1-2万</a>
                    </dd>
                </dl>
            </div>
        </div>
        <!-- 产品列表 -->
        <div class="copyright_list">
            <div class="copyright_sleft">
                <a href="#">
                    <span>综合排序</span>
                </a>
                <a href="#">
                    <span>价格排序</span>
                </a>
            </div>
            <div class="copyright_sright">
                <a class="copyright_on" href="#">
                    <img src="../../../static/img/paycenter/copyright_on.png" alt="">
                </a>
                <a class="copyright_menu" href="#">
                    <img src="../../../static/img/paycenter/copyright_menu.png" alt="">
                </a>
                <div class="copyright_jian">
                    <a href="#">
                        <font> ＜ </font>
                    </a>
                    <a href="#">
                        <font> ＞ </font>
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright_product">

            <copyrightOrdinary :arr='arr'></copyrightOrdinary>
        </div>






        <!-- 猜你喜欢 -->
        <div class="copyright_like">
            <copyrightTop :titles="msg"></copyrightTop>
            <copyrightBottom :arr='arr'></copyrightBottom> 
        </div>
        <div>
            <!-- <v-paybottom></v-paybottom> -->
        </div>
      </div>
      <v-combotttom></v-combotttom>
  </div>
</template>

<script>
import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
import copyrightBottom from '@/components/paycenter/copyrightBottom.vue'
import copyrightTop from '@/components/paycenter/copyrightTop.vue'
export default {
    data(){
        return{
            msg:"没有找到您心仪的版权？",
            arr:[
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年5',
                ban:'版权分类：美术作品5',
                price:'6000123.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年4',
                ban:'版权分类：美术作品4',
                price:'6000222.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年3',
                ban:'版权分类：美术作品3',
                price:'6000333.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年2',
                ban:'版权分类：美术作品2',
                price:'600033.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年1',
                ban:'版权分类：美术作品1',
                price:'600033.00',
            }
        ]
        }
    },
    components:{
        copyrightOrdinary,
        copyrightTop,
        copyrightBottom
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    /* 版权分类 */
    .copyright_select{
        margin: 15px;
        width: 960px;
        margin: 20px auto;
    }
    .copyright_select dl{
        border-bottom: 1px dashed #E8E5F1;
        width: 100%;
        zoom: 1;
        position: relative;
        background: #F9FAFE;
    }
    .copyright_select dl dt{
        width: 110px;
        display: inline-block;
    }
    .copyright_select dl dd{
        line-height: 24px;
        padding: 6px 0;
        background: #fff;
        margin-left: 110px;
        display: inline-block;
    }
    a{
        text-decoration: none;
        color: black;
    }
    /* 排序 */
    .copyright_list{
        width: 1200px;
        height: 50px;
        background: #fff;
        margin: 20px auto 10px auto;
        overflow: hidden;
    }
    .copyright_list a{
        display: block;
        float: left;
        font-size: 14px;
        color: #666666;
        line-height: 50px;
        border-right: 1px solid #cecece;
        width: 120px;
        text-align: center
    }
    .copyright_list span{
        background: url(../../../static/img/paycenter/copyright_desc.png)
            no-repeat  right center;
        color: #5c8cd6;
        padding: 0 10px;
    }
    .copyright_sright{
        float: right;
        height: 50px;
        border-left: 1px solid #eee;
        margin-left: 10px;
    }
    .copyright_on>img{
        width: 13px;
    }
    .copyright_jian{
        float: right;
        height: 50px;
        padding: 0 10px;
    }
    .copyright_jian a{
        color: #999;
        display: block;
        width: 22px;
        height: 22px;
        border: 1px solid #e2e2e2;
        background: #fff;
        text-align: center;
        line-height: 22px;
        cursor: pointer;
        margin: 13px 2.5px;
        float: left;
    }
    /* 心仪版权 */
    .copyright_product{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .copyright_product  a{
        background-color: #fff;
        margin: 10px 0;
    }
    .copyright_pay{
        background: #f6f6f6;
    }
</style>
