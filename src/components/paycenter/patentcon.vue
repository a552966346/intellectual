<template>
    <div >
        <div class="patent_product">
            <div class="patent_content">
                <div class="patent_con"  v-for="(item,index) in arr" :key="index">
                    <a  href="#" >
                        <div class="patent_img">
                            <img :src="item.url" alt="">
                            <span>{{item.con}}</span>
                        </div>
                        <p>{{item.ban}}</p>
                        <!-- <div class="patent_line"></div> -->
                        <div class="patent_price">
                            <span>￥{{item.price}}</span>
                            <p>{{item.text}}</p>
                        </div>
                        <div class="patent_bargain">立即议价</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data() {
                return {
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
        },
         {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                ban: '一种油炸肉丸快速过滤油框',
                price: '6000123.00',
                text:'食品饮料',
                con:'发明专利'
        }
            ]
                }
        }
    }
</script>

<style scoped>
.patent_product{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.patent_product  a{
    background-color: #fff;
    margin: 10px 0;
}
.patent_content{
    display: flex;
    flex-wrap: wrap;
    margin-left: -1%;
}
.patent_con{
    width: 19%;
    color: black;
    text-decoration: none;
    background-color: #fff;
    margin-left: 1%;
    margin-bottom: 10px;
}
.patent_con>a{text-decoration: none;color: #000;display: inline-block;}
.patent_con>a:hover .patent_bargain{display: block;}
.patent_con>a:hover .patent_price{display: none;}
.patent_bargain{display: none;background-color: #2b3d63;color: #fff;border-radius: 5px;text-align: center;padding: 8px 0;}
.patent_img{
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #cccccc;
    position: relative;
    margin:0 10px;
}
.patent_img>span{
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
.patent_con p{
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
</style>