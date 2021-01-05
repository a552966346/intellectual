<template>
        <div class="workss_content">
                <div class="works_like">
                        <div class="works_title">
                                <div class="works_copy">
                                        <h2>没有找到您心仪的商标？</h2>
                                        <a href="#" @click="kefu">
                                                <p >联系客服帮您找</p>
                                        </a>
                                        <!-- <span>或</span>
                                        <a href="#" @click="qiugou" >
                                                <p style="background-color:#3c568f">发布求购需求</p>
                                        </a> -->
                                </div>
                                <div class="works_dash">
                                        <p>猜中您喜欢的商标有点难度呢，马上联系客服为你推荐更多商标</p>
                                </div>
                                <div class="works_line">
                                        <div class="works_left"></div>
                                        <p>猜您喜欢</p>
                                        <div class="works_right"></div>
                                </div>
                        </div>
                        <ul class="works_list">
                                <li class="color1" v-for="(item,index) in listdata" :key="index+'list'">
                                        <!-- <router-link class="works_pro"  :to="{path:'/service_xlj',query:{ id:item.id}}"> -->

                                        <div class="works_colors" :style="{background:item.bgcolor}">
                                                <router-link class="works_pro" :to="{path:'/service_xlj',query:{ id:item.id}}">
                                                        <div class="works_sele">
                                                                <img :src="item.images_text">
                                                        </div>
                                                </router-link>
                                                
                                        </div>

                                        <p class="works_p1">
                                                <span>{{item.name}}</span>
                                                <!-- <img src="../../../static/img/paycenter/copyright_like.png" alt=""> -->
                                        </p>
                                        <p class="works_p2" v-if="item.categoryid_text">{{item.categoryid_text.name}}</p>
                                        <p class="works_p3">
                                                <span class="works_price" v-if="item.fee>=10000"><label>￥</label>{{(item.fee/10000)}}万元</span>
                                                <span class="works_price" v-else><label>￥</label>{{item.fee}}元</span>
                                                <img src="../../../static/img/paycenter/copyright_right.png" alt="">
                                        </p>
                                        <div class="works_kefu" @click="kefu">立即议价</div>
                                        <!-- </router-link> -->
                                </li>
                        </ul>
                </div>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                               
                                
                        }
                },
                props: {
                        listdata: ''
                },
                methods: {
                        
                        kefu(){
                                this.$emit("kefu")
                        },
                        
                       
                        

                },
                
        }
</script>

<style scoped>
       
        .works_like {
                max-width: 1200px;
                margin: 0px auto;
                padding: 30px 0 0;
        }

        .works_title {
                width: 100%;
                position: relative;
                background: url(../../../static/img/paycenter/copyright_xiao.png) no-repeat center center;
                background-position: 260px 0;
        }

        .works_copy {
                margin: 0 auto;
                text-align: center;
                padding-right: 14px;
        }

        .works_copy h2 {
                display: inline-block;
                font-weight: 450;
                padding-bottom: 10px;
        }

        .works_copy p {
                padding: 0px 10px;
                border-radius: 4px;
                text-align: center;
                line-height: 25px;
                font-size: 13px;
                display: inline-block;
                color: #fff;
                background-color: #ff7137;
        }

        .works_copy span {
                font-size: 13px;
        }

        .works_line {
                position: relative;
        }

        .works_left {
                width: 25px;
                border-top: 1px solid #ccc;
                position: absolute;
                left: 45%;
                bottom: 45%;
        }

        .works_right {
                width: 25px;
                border-top: 1px solid #ccc;
                position: absolute;
                bottom: 45%;
                left: 53%;
        }

        .works_dash {
                width: 500px;
                border-top: 1px dashed #cecece;
                margin: 0 auto;
                padding-top: 10px;
        }

        .works_dash>p {
                color: #ccc;
                font-size: 13px;
        }

        .works_line>p {
                text-align: center;
                color: #ccc;
                font-size: 15px;
                margin: 20px 0 30px;
        }

        .works_content {
                width: 1200px;
                margin: 0 auto;
                background-color: #f6f6f6;
                padding-bottom: 20px;
        }

        .works_list {
                display: flex;
                flex-wrap: wrap;
        }

        .works_list li {
                list-style: none;
                width: 19%;
                padding: 10px;
                height: 352px;
                margin-bottom: 20px;
                margin-left: 10px;
                box-shadow:2px 2px 15px rgb(211, 209, 209);
        }

        .works_list a {
                text-decoration: none;
                color: black;
                background-color: #f5f5f5;
        }

        .works_list li>a:first-child {
                display: block;
                width: 100%;
                overflow: hidden;
        }

        .works_list li:hover .works_coloritem {
                display: block;
        }

        .works_list li:hover .works_kefu {
                display: block;
                cursor: pointer;
        }

        .works_list li:hover .works_p2 {
                display: none;
        }

        .works_colors {
                height: 235px;
        }

        .works_sele>img {
                width: 100%;
                padding: 10px;
                max-height: 210px;
        }

        .works_sele {
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .works_selector {
                width: 100%;
                height: 21px;
                box-sizing: border-box;
                padding: 3px;
                display: flex;
                justify-content: center;
        }

        .works_coloritem {
                width: 20%;
                height: 15px;
                box-sizing: border-box;
                border: 1px solid rgba(255, 255, 255, .8);
                float: left;
                cursor: pointer;
                display: none;
        }

        .works_p1 {
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        .works_p1>img {
                width: 15px;
                margin-right: 10px;
        }

        .works_p1>span {
                font-size: 15px;
                font-weight: 200;
        }

        .works_p2 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 10px 0;
                font-size: 12px;
                color: #ccc;
        }

        .works_p3 {
                border-top: 1px solid #cecece;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 9px;
        }

        .works_p3>span {
                font-size: 15px;
                color: #fa7219;
                font-weight: bold;
        }

        .works_p3>img {
                width: 15px;
        }

        .works_kefu {
                display: none;
                background-color: #187fc4;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                padding: 8px 0;
        }
</style>
