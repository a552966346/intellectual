<template>
        <div>
                <div class="copyright_product">
                        <div class="copyright_content">
                                <div class="copyright_con" v-for="(item,index) in iscent" :key="index">
                                        <div class="copyright_txt">
                                                <router-link  :to="'/service_xlj_four?id='+item.id">
                                                <div class="copyright_img">
                                                        <img :src="item.images_text[0]" alt="">
                                                </div>
                                                </router-link> 
                                                <a href="#" class="copyright_active">
                                                <div class="copyright_ti">
                                                        <h3>{{item.name}}</h3>
                                                        <img src="../../../static/img/paycenter/copyright_like.png" alt="">
                                                </div>
                                                <p>{{item.categoryid_text}}</p>
                                                <div class="copyright_price">
                                                        <span>￥{{item.fee}}</span>
                                                        <img src="../../../static/img/paycenter/copyright_right.png"
                                                                alt="">
                                                </div>
                                                <div class="copyright_bargain">立即议价</div>
                                                </a>
                                        </div>
                                </div>
                        </div>
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
                        iscent:''
                }
        }
</script>

<style scoped>
        /* 心仪版权 */
        .copyright_product {
                max-width: 1200px;
                margin: 0 auto;
                overflow: hidden;
        }

        .copyright_product a {
                background-color: #fff;
                margin: 10px 0;
        }

        .copyright_content {
                display: flex;
                flex-wrap: wrap;
                margin-left: -1%;
        }

        .copyright_con {
                width: 19%;
                height: 352px;
                padding: 10px;
                color: black;
                text-decoration: none;
                background-color: #fff;
                margin-left: 1%;
                margin-bottom: 10px;
        }

        .copyright_con>.copyright_txt {
                width: 100%;
                display: inline-block;
        }
        .copyright_active{
                text-decoration: none;
                color: #000;
        }
        .copyright_con .copyright_active:hover .copyright_bargain {
                display: block;
        }

        .copyright_con .copyright_active:hover p {
                display: none;
        }

        .copyright_con .copyright_active:hover .copyright_price {
                border: none;
        }

        .copyright_bargain {
                display: none;
                background-color: #2b3d63;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                padding: 8px 0;
        }

        .copyright_img {
                height: 210px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                background: #cccccc;
        }

        .copyright_img>img {
                width: 100%;
        }

        .copyright_ti {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 9px;
        }

        .copyright_ti>img {
                width: 15px;
        }

        .copyright_ti>h3 {
                font-size: 15px;
                font-weight: 200;
                margin: 10px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        }

        .copyright_con p {
                font-size: 12px;
                color: #ccc;
                margin-bottom: 20px;
                padding: 0 9px;
        }

        .copyright_price {
                border-top: 1px solid #cecece;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 9px;
        }

        .copyright_price>img {
                width: 15px;
        }

        .copyright_price>span {
                font-size: 15px;
                color: #fa7219;
                font-weight: bold;
        }
</style>
