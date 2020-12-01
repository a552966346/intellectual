<template>
    <div >
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
            <div class="copyright_content">
                <div class="copyright_con"  v-for="(item,index) in arr" :key="index">
                    <a  href="#" >
                        <div class="copyright_img">
                                <img :src="item.url" alt="">
                        </div>
                        <div class="copyright_ti">
                                <h3>{{item.text}}</h3>
                                <img src="../../../static/img/paycenter/copyright_like.png" alt="">
                        </div>
                        <p>{{item.ban}}</p>
                        <div class="copyright_price">
                                <span>￥{{item.price}}</span>
                                <img src="../../../static/img/paycenter/copyright_right.png" alt="">
                        </div>
                        <div class="copyright_bargain">立即议价</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright_page">
            <span>共十四页</span>
            <button class="copyright_prev">首页</button>
            <button class="copyright_prev">上一页</button>
            <button class="copyright_btn">1</button>
            <button class="copyright_btn">2</button>
            <button class="copyright_btn">3</button>
            <button class="copyright_btn">4</button>
            <button class="copyright_btn">5</button>
            <span>....</span>
            <button class="copyright_btn">14</button>
            <button class="next">下一页</button>
            <button class="last">尾页</button>
            <span>
                到第
                <input type="text">
                页
            </span>
            <button>确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'copyrightOrdinary',
        data() {
                return {
                }
        },
        props:{
                arr:Array,
        }
    }
</script>

<style scoped>
 /* 排序 */
 a{
     text-decoration: none;
 }
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
.copyright_content{
    display: flex;
    flex-wrap: wrap;
    margin-left: -1%;
}
.copyright_con{
    width: 19%;
    padding:10px;
    color: black;
    text-decoration: none;
    background-color: #fff;
    margin-left: 1%;
    margin-bottom: 10px;
}
.copyright_con>a{text-decoration: none;color: #000;display: inline-block;}
.copyright_con>a:hover .copyright_bargain{display: block;}
.copyright_con>a:hover p{display: none;}
.copyright_con>a:hover .copyright_price{border: none;}
.copyright_bargain{display: none;background-color: #2b3d63;color: #fff;border-radius: 5px;text-align: center;padding: 8px 0;}
.copyright_img{
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #cccccc;
}
.copyright_img>img{
    width: 100%;
}
.copyright_ti{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 9px;
}
.copyright_ti>img{
    width: 15px;
}
.copyright_ti>h3{
    font-size: 15px;
    font-weight: 200;
    margin: 10px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.copyright_con p{
    font-size: 12px;
    color: #ccc;
    margin-bottom: 20px;
    padding: 0 9px;
}
    .copyright_price{
    border-top: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 9px;
}
.copyright_price>img{
    width: 15px;
}
.copyright_price>span{
    font-size: 15px;
    color:#fa7219 ;
    font-weight: bold;
}
/* 页数 */
.copyright_page{
    background: #fff;
    padding: 20px 30px;
    text-align: left;
    width: 1200px;
    margin:10px auto 30px;
    line-height: 29px;
    font-size: 14px;
    color: #999;
}
.copyright_page span{
    color: #666;
    font-size: 14px;
    padding-right: 8px;
    height: 31px;
    line-height: 31px;
}
.copyright_page button{
    color: #666;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 8px;
    background: #fff;
    border: 1px solid #f0f0f0; 
    outline: none;
}
.copyright_page input{
    color: #666;
    font-size: 14px;
    width: 40px;
    height: 31px;
    line-height: 31px;
    border: 1px solid #f0f0f0;
    outline: none;
    padding: 0 5px;
    outline: none;
}
button:hover{
    background-color:#3b5791 ;
    color: #fff;
    outline: none;
}
</style>
