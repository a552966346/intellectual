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
        <!-- 排序-->
        <div>
            <copyrightOrdinary :arr='arr'></copyrightOrdinary>
        </div>


        <!-- 猜你喜欢 -->
        <div>
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
export default {
    data(){
        return{
            text:"共14页",
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
    .copyright_pay{
        background: #f6f6f6;
    }
</style>
