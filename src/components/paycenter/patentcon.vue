<template>
        <div>
                <div class="patent_product">
                        <div class="patent_content">
                                <div class="patent_con" v-for="(item,index) in iscent" :key="item.id">
                                        <!-- <a href="#"> -->
                                                <a href="#">
                                                <div class="patent_img">
                                                        <!-- <a href="#"> -->
                                                        <img :src="item.images_text[0]" alt="">
                                                        <!-- </a> -->
                                                        <span>{{item.categoryid_text}}</span>
                                                </div>
                                                </a>
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
        .patent_product {
                max-width: 1200px;
                margin: 0 auto;
                overflow: hidden;
        }

        .patent_product a {
                background-color: #fff;
                margin: 10px 0;
        }

        .patent_content {
                display: flex;
                flex-wrap: wrap;
                margin-left: -1%;
        }

        .patent_con {
                width: 19%;
                color: black;
                text-decoration: none;
                background-color: #fff;
                margin-left: 1%;
                margin-bottom: 10px;
        }

        .patent_con>a {
                text-decoration: none;
                color: #000;
                display: inline-block;
        }

        .patent_con>a:hover .patent_bargain {
                display: block;
        }

        .patent_con>a:hover .patent_price {
                display: none;
        }

        .patent_bargain {
                display: none;
                background-color: #2b3d63;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                padding: 8px 0;
        }

        .patent_img {
                height: 210px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                position: relative;
                margin: 0 10px;
        }

        .patent_img>span {
                width: 30%;
                height: 13%;
                position: absolute;
                top: 0;
                left: 0;
                background: #187fc4;
                color: #fff;
                font-size: 10px;
                padding: 5px;
                border-bottom-right-radius: 10px;
        }

        .patent_img img {
                width: 100%;
        }

        .patent_con p {
                font-size: 14px;
                margin: 11px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        }

        .patent_price {
                border-top: 1px solid #cecece;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 9px;
        }

        .patent_price>span {
                font-size: 15px;
                color: #fa7219;
                font-weight: bold;
        }

        .patent_price>p {
                font-size: 13px;
                color: #ccc;
                margin: 0;
        }
</style>
