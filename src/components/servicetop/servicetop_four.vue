<template>
        <div id="pctAll">
                <div id="pctTop">
                        <div class="topall_img">
                                <el-carousel trigger="click" height="300px">
                                        <el-carousel-item v-for="(item,index) in image" :key="index" style="display: flex;justify-content: center;align-items: center;">
                                                <img :src="item" alt="">
                                        </el-carousel-item>
                                </el-carousel>
                        </div>
                        <div class="topRight">
                                <div class="topHeader">
                                        <p>{{top_data.name}}</p>
                                        <p v-html="top_data.sketch"></p>
                                </div>
                                <div class="topSelect">
                                        <select name="" id="">
                                                <option value="">选择国家地区</option>
                                        </select>
                                        <select name="" id="">
                                                <option value="">申请体系</option>
                                        </select>
                                        <select name="" id="">
                                                <option value="">专利类型</option>
                                        </select>
                                </div>
                                <div class="topBottom">
                                        <div class="btoCostOne">
                                                <div class="btoOneLeft">
                                                        <span>费用合计：</span>
                                                        <span>￥{{top_data.fee}}</span>
                                                </div>

                                        </div>
                                        <div class="rfooter">
                                                <div class="rfooterLeft">
                                                        <div class="num">
                                                                <div>1</div>
                                                                <div>
                                                                        <span>+</span>
                                                                        <span>-</span>
                                                                </div>
                                                        </div>

                                                        <div class="car">
                                                                <div>加入购物车</div>
                                                                <div>
                                                                        <p>---<span>></span>---</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="rfooterRight">
                                                        <img src="../../../static/img/service/service_kefu.png" alt="">
                                                        <span>咨询客服</span>
                                                </div>
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

                        }
                },
                props: {
                        title: '',
                        top_data: '',
                        image:''
                }
        }
</script>
<style>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        #pctTop {
                width: 100%;
                margin: 0 auto;
                padding: 20px;
                display: flex;
                background-color: #fff;
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

        .topRight {
                flex: 3;
                padding: 11px 20px 0 35px;
        }

        .topHeader>p:nth-child(1) {
                font-size: 22px;
                letter-spacing: 2px;
                color: #2f2f2f;

        }

        .topHeader>p:nth-child(2) {
                font-size: 13px;
                width: 100%;
                padding: 8px;
                background: #f3f6ff;
                margin-top: 10px;
                color: #898a8e;

        }

        .topSelect {
                padding: 30px 0;
        }

        .topSelect>select {
                width: 170px;
                height: 40px;
                font-size: 14px;
                color: #585858;
                border: 1px solid#585858;
                border-radius: 5px;
                margin-right: 30px;
                padding: 10px 10px 10px 10px;
                outline: none;
        }


        .topBottom {
                width: 100%;
                border: 1px solid #187fc4;
                padding: 20px;
                /* padding: 17px 26px 0 26px; */
                color: #676767;
                font-size: 14px;
                background: #f3f6ff;
                margin-bottom: 50px;

        }

        .topBottom>.btoCostOne {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 32px;
                padding-bottom: 15px;
        }

        .topBottom>.btoCostOne span {
                display: inline-block;
        }

        .topBottom>.btoCostOne>.btoOneLeft>span:nth-child(1) {
                text-indent: 14px;
        }

        .topBottom>.btoCostOne>.btoOneLeft>span:nth-child(2) {
                color: #fe0000;
        }

        .rfooter {
                display: flex;
                /* margin-bottom: 25px; */
        }

        .rfooter>.rfooterLeft {
                width: 210px;
                height: 58px;
                border: 2px solid #187fc4;
                border-radius: 4px;
                display: flex;
                background: #187fc4;
        }

        .rfooter>.rfooterLeft>.num {
                display: flex;
                width: 73px;
                border-radius: 4px;
                background: #187fc4;
        }

        .rfooter>.rfooterLeft>.num>div:nth-child(1) {
                width: 40px;
                border-right: 2px solid #187fc4;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #187fc4;
                background: #fff;

        }

        .rfooter>.rfooterLeft>.num>div:nth-child(2) {
                background: #fff;
                border-right: 2px solid #187fc4;
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
        }

        .rfooter>.rfooterLeft>.num>div:nth-child(2)>span:nth-child(1) {
                border-bottom: 2px solid #187fc4;
                border-top-right-radius: 4px;
                overflow: hidden;
                background: #fff;
        }

        .rfooter>.rfooterLeft>.num>div:nth-child(2)>span {
                width: 30px;
                height: 27px;
                color: #187fc4;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .rfooter>.rfooterLeft>.car {
                width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                color: #fdfffe;
                background: #187fc4;
        }

        .rfooter>.rfooterRight {
                width: 172px;
                height: 58px;
                background: #ff7046;
                border-radius: 4px;
                margin-left: 10px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                font-size: 16px;
                color: #feffff;
        }

        .rfooter>.rfooterRight>img {
                width: 40px;
        }

        .car>div>p {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3px 0;
        }

        .car>div>p>span {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #fff;
                border-radius: 50%;
                padding: 0 3px;
                font-size: 11px;
        }
</style>
