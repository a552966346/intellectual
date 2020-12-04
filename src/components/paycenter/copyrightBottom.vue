<template>
    <div class="copyright_bottms">
        <div class="copyright_like">
        <div class="copyright_title">
            <div class="copyright_copy">
                <h2>没有找到您心仪的版权？</h2>
                <a href="#">
                    <p>联系客服帮您找</p>
                </a>
                <span>或</span>
                <a href="#">
                    <p style="background-color:#3c568f">发布求购需求</p>
                </a>
            </div>
            <div class="copyright_dash">
                <p>猜中您喜欢的版权有点难度呢，马上联系客服为你推荐更多版权</p>
            </div>
            <div class="copyright_line">
                <div class="copyright_left"></div>
                <p>猜您喜欢</p>
                <div class="copyright_right"></div>
            </div>
        </div>
        <div class="copyright_bpro">
            <div class="copyright_bottom" v-for="(item,index) in arr" :key="index">
                <a href="#" >
                    <div class="copyright_img1">
                        <img :src="item.url" alt="">
                    </div>
                <div class="copyright_text">
                    <h3>{{item.text}}</h3>
                    <img src="../../../static/img/paycenter/copyright_like.png" alt="">
                </div>
                <p>{{item.ban}}</p>
                <div class="copyright_prices">
                    <span>￥{{item.price}}</span>
                    <img src="../../../static/img/paycenter/copyright_right.png" alt="">
                </div>
                <div class="copyright_quick">立即议价</div>
                </a>
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
                text: '爱你一万年5',
                ban: '版权分类：美术作品5',
                price: '6000123.00',
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text: '爱你一万年4',
                ban: '版权分类：美术作品4',
                price: '6000222.00',
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text: '爱你一万年3',
                ban: '版权分类：美术作品3',
                price: '6000333.00',
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text: '爱你一万年2',
                ban: '版权分类：美术作品2',
                price: '600033.00',
        },
        {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text: '爱你一万年1',
                ban: '版权分类：美术作品1',
                price: '600033.00',
        }
]
        }
    }
}
</script>


<style scoped>
.copyright_bottms{
    background-color: #f6f6f6;
    padding-bottom: 20px;
    }
.copyright_title{
    width: 100%;
    position: relative;
    background: url(../../../static/img/paycenter/copyright_xiao.png)
                no-repeat center center;
    background-position: 260px 0;
}
.copyright_copy{
    margin: 0 auto;
    text-align: center;
    padding-right: 14px;
}
.copyright_copy h2{
    display: inline-block;
    font-weight: 450;
    padding-bottom: 10px;
}
.copyright_copy p{
    padding: 0px 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    font-size: 13px;
    display: inline-block;
    color: #fff;
    background-color: #ff7137;
}
.copyright_copy span{
    font-size: 13px;
}
.copyright_line{
    position: relative;
}
.copyright_left{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 45%;
    bottom: 45%;
}
.copyright_right{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 45%;
    left: 53%;
}
.copyright_dash{
    width: 500px;
    border-top:1px dashed #cecece ;
    margin: 0 auto;
    padding-top: 10px;
}
.copyright_dash>p{
    color: #ccc;
    font-size: 13px;
}
.copyright_line>p{
    text-align: center;
    color: #ccc;
    font-size: 16px;
    margin: 20px 0 30px;
}
.copyright_bpro{
    display: flex;
    flex-wrap: wrap;
    }
.copyright_bottom{
    width: 18%;
    padding:10px;
    color: black;
    text-decoration: none;
    margin-left: -1%;
    background-color: #f5f5f5;
    margin-left: 22px;
    margin-bottom: 10px;
}
.copyright_bottom>a{text-decoration: none;color: #000;display: inline-block;}
.copyright_bottom>a:hover .copyright_quick{display: block;}
.copyright_bottom>a:hover p{display: none;}
.copyright_bottom>a:hover .copyright_prices{border: none;}
.copyright_quick{display: none;background-color: #2b3d63;color: #fff;border-radius: 5px;text-align: center;padding: 8px 0;}
.copyright_img{
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #cccccc;
}
.copyright_img1>img{
    width: 100%;
}
.copyright_text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 9px;
}
.copyright_text>img{
    width: 15px;
}
.copyright_text>h3{
    font-size: 15px;
    font-weight: 200;
    margin: 10px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.copyright_bottom p{
    font-size: 12px;
    color: #ccc;
    margin-bottom: 20px;
    padding: 0 9px;
}
.copyright_prices{
    border-top: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 9px;
}
.copyright_prices>img{
    width: 15px;
}
.copyright_prices>span{
    font-size: 15px;
    color:#fa7219 ;
    font-weight: bold;
}
.copyright_like{
    width: 1200px;
    background-color: #fff;
    margin: 0px auto;
    padding: 30px 0 0;
}
</style>