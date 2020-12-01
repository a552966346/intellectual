<template>
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
</template>

<script>
export default {
    name: 'copyrightBottom',
    data(){
        return{
        }
    },
    props:{
        arr:Array,
    }
}
</script>

<style>
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