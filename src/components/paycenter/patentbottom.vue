<template>
    <div class="patent_bottms">
        <div class="patent_like">
        <div class="patent_title">
            <div class="patent_copy">
                <h2>没有找到您心仪的专利？</h2>
                <a href="#">
                    <p>联系客服帮您找</p>
                </a>
                <span>或</span>
                <a href="#">
                    <p style="background-color:#3c568f">发布求购需求</p>
                </a>
            </div>
            <div class="patent_dash">
                <p>猜中您喜欢的专利有点难度呢，马上联系客服为你推荐更多专利</p>
            </div>
            <div class="patent_line">
                <div class="patent_left"></div>
                <p>猜您喜欢</p>
                <div class="patent_right"></div>
            </div>
        </div>
        <div class="patent_bpro">
            <div class="patent_bottom" v-for="(item,index) in listdata" :key="item.id">
                <!-- <a  href="#" > -->
                        <router-link :to="'/service_xlj_three?id='+item.id">
                        <div class="patent_img">
                            <img :src="item.images_text[0]" alt="">
                            <span>{{item.categoryid_text}}</span>
                        </div>
                        </router-link>
                        <p>{{item.name}}</p>
                        <div class="patent_price">
                            <span>￥{{item.fee}}</span>
                            <p>{{item.categoryid_text}}</p>
                        </div>
                        <div class="patent_bargain">立即议价</div>
                <!-- </a> -->
             </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
     data(){
        return{
             arr: [{
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'实用新型'
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'实用新型'
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'实用新型'
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'实用新型'
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'实用新型'
        }
        ]
        }
    },
    props:{
            listdata:''
    }
}
</script>

<style scoped>
.patent_bottms{
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f6f6f6;
    padding-bottom: 20px;
    }
.patent_title{
    width: 100%;
    position: relative;
    background: url(../../../static/img/paycenter/copyright_xiao.png)
                no-repeat center center;
    background-position: 260px 0;
}
.patent_copy{
    margin: 0 auto;
    text-align: center;
    padding-right: 14px;
}
.patent_copy h2{
    display: inline-block;
    font-weight: 450;
    padding-bottom: 10px;
}
.patent_copy p{
    padding: 0px 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    font-size: 13px;
    display: inline-block;
    color: #fff;
    background-color: #ff7137;
}
.patent_copy span{
    font-size: 13px;
}
.patent_line{
    position: relative;
}
.patent_left{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 45%;
    bottom: 45%;
}
.patent_right{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 45%;
    left: 53%;
}
.patent_dash{
    width: 500px;
    border-top:1px dashed #cecece ;
    margin: 0 auto;
    padding-top: 10px;
}
.patent_dash>p{
    color: #ccc;
    font-size: 13px;
}
.patent_line>p{
    text-align: center;
    color: #ccc;
    font-size: 15px;
    margin: 20px 0 30px;
}
.patent_bpro{
    display: flex;
    flex-wrap: wrap;
    }
.patent_bottom{
    width: 19%;
    padding:10px;
    color: black;
    text-decoration: none;
    margin-left: -1%;
    background-color: #f5f5f5;
    margin-left: 10px;
    margin-bottom: 10px;
}
.patent_bottom>a{text-decoration: none;color: #000;display: inline-block;}
.patent_bottom>a:hover .patent_bargain{display: block;}
.patent_bottom>a:hover .patent_price{display: none;}
.patent_bargain{display: none;background-color: #2b3d63;color: #fff;border-radius: 5px;text-align: center;padding: 8px 0;}
.patent_img{
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.patent_img>span{
    width: 30%;
    height: 13%;
    position: absolute;
    top: 0;
    left: 0;
    background:#187fc4;
    color:#fff;
    font-size: 10px;
    padding: 5px;
    border-bottom-right-radius: 10px;
}
.patent_img>img{
    width: 100%;
}
.patent_bottom p{
    font-size: 14px;
    margin: 11px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.patent_price{
    border-top: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 9px;
}
.patent_price>span{
    font-size: 15px;
    color:#fa7219 ;
    font-weight: bold;
}
.patent_price>p{
    font-size: 13px;
    color: #ccc;
    margin: 0;
}
.patent_like{
    max-width: 1200px;
    background-color: #fff;
    padding: 30px 0 0;
}
</style>
