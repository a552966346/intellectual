<template>
        <div id="servicetop">
                <div class="topall">
                        <div class="topall_img">
                                <el-carousel trigger="click" height="300px">
                                        <el-carousel-item v-for="(item,index) in image" :key="index" style="display: flex;justify-content: center;align-items: center;">
                                                <img :src="item" alt="">
                                        </el-carousel-item>
                                </el-carousel>
                        </div>
                        <div class="topall_text">
                                <div class="text_top">
                                        <h2>{{top_data.name}}</h2>
                                        <p>{{top_data.sketch}}</p>
                                </div>
                                <div class="topall_center">
                                        <div class="solt" style="display:flex;">
                                                <slot name="topall">
                                                        <p style="margin-right:30px;">价格：<span>￥{{top_data.fee}}</span></p>
                                                        <span style="color:#ccc;font-size:12px;padding:6px;">官费200</span>
                                                </slot>
                                        </div>
                                        <div class="inp" v-show="isShow !=''">
                                                <p>联系电话：</p><input type="tel">
                                        </div>
                                        <div class="inp" v-show="isShow !=''">
                                                <p>联系人：</p><input type="text">
                                        </div>
                                </div>
                                <div class="topall_bottom">
                                        <div class="bottom_left">
                                                <!-- <div class="left_left">
                                                        <span>{{nub}}</span>
                                                        <span><button @click="but1">+</button><button @click="but2">-</button></span>
                                                </div> -->
                                                <div class="left_but">
                                                        <button>加入购物车<p>--<span>></span>--</p></button>
                                                </div>

                                        </div>
                                        <div class="bottom_right">
                                                <button>
                                                        <img src="../../../static/img/service/service_kefu.png" alt="">
                                                        <span>咨询客服</span>
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                                // qiye: '企业知识产贯标',
                                nub: 1
                        }
                },
                props: {
                        image: '',
                        top_data: '',
                        isShow: ''
                },
                mounted() {

                },
                methods: {
                        but1() {
                                this.nub++
                        },
                        but2() {
                                if (this.nub > 0) {
                                        this.nub--
                                } else {
                                        this.nub = 0
                                }
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

        #servicetop {
                width: 1200px;
                background-color: #fff;
                box-shadow: 1px 1px 10px 2px #ccc;
        }

        .topall {
                display: flex;
                width: 100%;
        }

        .topall_img {
                flex: 2;
                padding: 20px;
                display: flex;
                justify-content: center;
        }

        .el-carousel {
                width: 100%;
                height: 100%;
        }

        .el-carousel__item {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .el-carousel__item>img {
                width: 100%;
                height: 100%;
        }

        .topall_text {
                flex: 3;
                padding: 20px;
        }

        .text_top>h2 {
                padding: 5px 0;
                color: #555;
        }

        .text_top>p {
                padding: 10px;
                color: #A7A7A7;
                background-color: #F3F6FF;
        }

        .topall_center {
                padding: 5px 0;
                margin: 20px 0;
        }

        .solt {
                background: url(../../../static/img/index/index_enterprise_bg.jpg)no-repeat;
                background-size: cover;
                padding: 15px 5px;
        }

        .solt>p {
                font-size: 15px;
                color: #ccc;
        }

        .solt>p>span {
                padding-left: 20px;
                font-size: 20px;
                color: #D94A4B;
        }

        .inp {
                width: 100%;
                padding: 10px 0;
                display: flex;
        }

        .inp>p {
                font-size: 14px;
                color: #aaa;
                width: 15%;
                display: flex;
                /* justify-content:center;*/
                align-items: center;
        }

        .inp input {
                margin-left: 20px;
                padding: 5px;
                height: 30px;
                width: 250px;
                outline: none;
        }

        /* 按钮 */
        .topall_bottom {
                display: flex;
                margin: 10px 0;
        }

        .bottom_left {
                display: flex;
                padding: 2px;
                background-color: #1780C2;
                align-items: center;
                height: 60px;
                width: 170px;
                border-radius: 5px;
                overflow: hidden;
        }

        .left_left {
                flex: 2;
                display: flex;
        }

        .left_left>span:nth-child(1) {
                padding: 18px 8px;
                font-size: 15px;
                background-color: #fff;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
        }

        .left_left>span:nth-child(2) {
                display: flex;
                flex-direction: column;
                margin-left: 2px;
        }

        .left_left span button:nth-child(1) {
                border-top-right-radius: 2px;
        }

        .left_left span button:nth-child(2) {
                border-bottom-right-radius: 2px;
        }

        .left_left span button {
                padding: 6px;
                border: none;
                background-color: #fff;
                outline: none;
        }

        .left_left span button:nth-child(2) {
                margin-top: 2px;
        }

        .left_but {
                flex: 5;
                text-align: center;
        }

        .left_but>button {
                background-color: #1780C2;
                color: #fff;
                font-size: 15px;
                border: none;
                width: 100%;
                height: 60px;
                outline: none;
        }

        .left_but>button>p {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3px 0;
        }

        .left_but>button>p>span {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #fff;
                border-radius: 50%;
                padding: 0 3px;
                font-size: 11px;
        }

        .bottom_right {
                margin-left: 20px;
                padding: 5px;
                height: 60px;
                width: 165px;
                background-color: #FF7046;
                border-radius: 5px;
                overflow: hidden;
                display: flex;
                justify-content: center;
        }

        .bottom_right img {
                width: 30px;
        }

        .bottom_right>button {
                background-color: #FF7046;
                height: 50px;
                padding: 10px 20px;
                border: none;
                color: #fff;
                outline: none;
                display: flex;
                align-items: center;
        }

        .bottom_right span {
                padding: 5px;
        }
</style>
