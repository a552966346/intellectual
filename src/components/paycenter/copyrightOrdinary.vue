<template>
    <div class="copyright_content">
        <div class="copyright_con"  v-for="(item,index) in arr" :key="index">
            <a class="" href="" >
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

<style>
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
</style>
