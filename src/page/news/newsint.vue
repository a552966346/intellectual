<template>
        <div id="news">
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>

                <div class="news_all">
                        <p>首页>新闻详情</p>
                        <div class="newsint_all">
                                <div class="newsint_title">
                                        <h3>{{news.title}}</h3>
                                        <div>
                                                <span v-if="news.clicks ==null"><img src="../../../static/img/news/newsint_eye.png"
                                                                alt="">阅读量：0</span>
                                                <span v-else-if="news.clicks!=null"><img src="../../../static/img/news/newsint_eye.png"
                                                                alt="">阅读量：{{news.clicks}}</span>
                                                <span><img src="../../../static/img/news/newsint_ri.png" alt="">时间：{{news.createtime_text}}</span>
                                        </div>
                                </div>
                                <div class="newsint_con">
                                        <div class="newsint_txt">
                                                <p style="font-weight: bold;">{{news.desc}}</p>
                                                <p><br></p>
                                                <p style="text-align:center;"><img :src="news.image" alt=""></p>
                                                <p><br></p>
                                                <div v-html="news.content">
                                                </div>
                                        </div>
                                        <div class="newsint_right">
                                                <div class="newsint_right_title">
                                                        <i class="el-icon-picture" color="#17AAFC"></i>
                                                        <p>最新新闻</p>
                                                </div>
                                                <div class="newsint_right_cen">
                                                        <div v-for="item in newstwo" :key="item.id" @click="running(item.id)">
                                                                <img :src="item.image" alt="">
                                                                <p>{{item.title}}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>


                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                                news: '',
                                newstwo: []
                        }
                },
                mounted() {
                        let id = this.$route.query.id
                        console.log(id)
                        this.running(id)
                        this.$api.getnewsnew()
                                .then(res => {
                                        console.log(res)
                                        this.newstwo = res.data
                                })
                },
                methods:{
                        running(id){
                                this.$api.getnews(id)
                                        .then(res => {
                                                console.log(321)
                                                console.log(res)
                                                this.news = res.data

                                        })
                        }
                }
        }
</script>

<style scoped>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        .newsint_all {
                width: 1200px;
                margin: 0 auto;
                padding: 25px 0;
                /* display: flex; */
                /* background-color: #f5f5f5; */
        }

        .news_all {
                background-color: #f5f5f5;
        }

        .news_all>p {
                width: 1200px;
                margin: 0 auto;
                padding: 5px 0;
        }

        .newsint_con {
                /* width: 100%; */
                display: flex;
                width: 100%;
                height: 100%;
                /* padding: 90px 0 50px; */
                /* background-color: #fff; */

        }

        .newsint_right {
                width: 30%;
                padding: 15px;
                background-color: #fff;
                height: 850px;
        }

        .newsint_right_title {
                width: 100%;
                display: flex;
                align-items: center;
                border-bottom: 5px solid #f5f5f5;
                padding: 5px 0;
        }

        .newsint_right_title>i {
                color: #17AAFC;
        }

        .newsint_right_title>p {
                margin-left: 5px;
                font-weight: bold;
                font-size: 15px;
                border-bottom: 1px solid #1495E7;
        }

        .newsint_title {
                width: 1200px;
                margin: 0 auto;
                border-bottom: 20px solid #f5f5f5;
                text-align: center;
                line-height: 30px;
                color: #b3b3b3;
                text-align: center;
                padding: 40px 0;
                background-color: #fff;
        }

        .newsint_title div span>img {
                vertical-align: middle;
                width: 18px;
                margin-right: 5px;

        }

        .newsint_right_cen {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 10px;
        }

        .newsint_right_cen>div {
                width: 45%;
                margin: 0 5px 15px 0;
                cursor: pointer;
        }
        .newsint_right_cen>div img{
                width: 100%;
                height: 100px;
        }
        .newsint_right_cen>div p{
                padding: 5px 0;
                width: 100%;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
        }
        h3 {
                margin-bottom: 20px;
                font-size: 24px;
                color: #333;
                font-weight: bold;
        }

        span {
                margin-right: 15px;
        }

        .newsint_txt {
                width: 70%;
                margin: 0 auto;
                line-height: 30px;
                padding: 15px 30px;
                border-bottom: 1px solid #e7eaf3;
                font-size: 14px;
                color: #666;
                background-color: #fff;
                border-right: 20px solid #f5f5f5;
                display: flex;
                flex-direction: column;
                align-items: center;
        }

        .newsint_txt>p img {
                width: 80%;
        }

        .newsint_txt div img {
                width: 80%;
        }

        .newsint_txt p {
                font-size: 16px;
                color: #666;
                text-indent: 2em;
        }

        .news_footer {
                width: 1200px;
                margin: 0 auto;
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        a {
                color: #666;
        }

        .left-box>div {
                padding-bottom: 10px;
        }
</style>
