<template>
        <div id="serviceTopThree">
                <div id="topAll">
                        <div class="topall_img">
                                <el-carousel trigger="click" height="300px">
                                        <el-carousel-item v-for="(item,index) in image" :key="index" style="display: flex;justify-content: center;align-items: center;">
                                                <img :src="item" alt="">
                                        </el-carousel-item>
                                </el-carousel>
                        </div>
                        <div class="topRight">
                                <div class="topHeader">
                                        <h3>{{top_data.name}}</h3>
                                        <p><span>创建时间：{{top_data.creatime_text}}</span></p>
                                </div>
                                <div class="topBody">
                                        <div class="topBody_lei">
                                                <div>
                                                        <p>行业分类</p>
                                                        <p>{{top_data.categoryid_text}}</p>
                                                </div>
                                                <div>
                                                        <p>应用领域</p>
                                                        <p v-if="top_data.territory == 0">高技术服务</p>
                                                        <p v-else-if="top_data.territory == 1">建筑业</p>
                                                        <p v-else-if="top_data.territory==2">新材料</p>
                                                        <p v-else-if="top_data.territory == 3">新能源与节能</p>
                                                        <p v-else-if="top_data.territory == 4">环境与资源</p>
                                                        <p v-else-if="top_data.territory == 5">现代农业</p>
                                                        <p v-else-if="top_data.territory == 6">生物与新医药</p>
                                                        <p v-else-if="top_data.territory == 7">航天航空</p>
                                                        <p v-else-if="top_data.territory == 8">其他</p>
                                                </div>
                                                <div>
                                                        <p>技术类型</p>
                                                        <p v-if="top_data.type == 0">非专利</p>
                                                        <p v-else-if="top_data.type == 1">发明专利</p>
                                                        <p v-else-if="top_data.type==2">实用新型专利</p>
                                                        <p v-else-if="top_data.type == 3">外观专利</p>
                                                        <p v-else-if="top_data.type == 4">版权</p>
                                                </div>

                                                <div>
                                                        <p>成熟程度</p>
                                                        <p v-if="top_data.maturity == 0">正在研发</p>
                                                        <p v-else-if="top_data.maturity == 1">已有样品</p>
                                                        <p v-else-if="top_data.maturity==2">通过小试</p>
                                                        <p v-else-if="top_data.maturity == 3">通过中试</p>
                                                        <p v-else-if="top_data.maturity == 4">可以量产</p>
                                                </div>
                                                <div>
                                                        <p>交易方式</p>
                                                        <p v-if="top_data.means == 0">完全转让</p>
                                                        <p v-else-if="top_data.means == 1">许可转让</p>
                                                        <p v-else-if="top_data.means==2">技术入股</p>
                                                </div>
                                        </div>
                                        <div class="topBody_money">
                                                <img src="" alt=""><span>价格</span>
                                                <div class="topBody_money_text">
                                                        <h1>{{top_data.fee}}</h1>
                                                        <div>
                                                                <span><img src="" alt="">{{top_data.clicks}}</span>
                                                                <span><img src="" alt="">分享</span>
                                                                <span><img src="" alt="">收藏</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="topBody_btn">
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
                                                                <img src="../../../static/img/service/service_kefu.png"
                                                                        alt="">
                                                                <span>咨询客服</span>
                                                        </button>
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
                                nub: 1
                        }
                },
                props: {
                        title: '',
                        top_data: '',
                        image: ''
                },
                mounted() {

                },
                methods: {
                        but2() {
                                console.log(11111)
                        },
                        but1() {
                                console.log(1111)
                        }
                }
        }
</script>
<style>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        #topAll {
                width: 100%;
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
                flex: 5;
                padding: 11px 20px;
        }

        .topHeader>p:nth-child(1) {
                font-size: 22px;
                letter-spacing: 2px;
                color: #2f2f2f;
        }

        .topHeader>p:nth-child(2) {
                padding: 5px 0 40px 0;
                width: 100%;
                border-bottom: 1px solid #ddd;
                color: #838a92;
        }

        .topHeader>p:nth-child(2)>span {
                display: inline-block;
                padding: 1px 20px 1px 5px;
                font-size: 11px;
        }

        .topHeader>p:nth-child(2)>span:nth-child(2)>span {
                display: inline-block;
                text-align: center;
                align-items: center;
                border: 1px solid #ccc;
                padding: 1px 5px;
        }

        .topBody {
                padding: 10px 0;
        }

        .topBody_lei {
                display: flex;
                padding: 20px 0;
        }

        .topBody_lei>div {
                flex: 1;
                border-right: 1px solid #ddd;
                margin-right: 30px;
        }

        .topBody_lei>div:last-child {
                border: none;
        }

        .topBody_lei>div>p:nth-child(1) {
                font-size: 15px;
                color: #aaa;
        }

        .topBody_lei>div>p:nth-child(2) {
                font-size: 15px;
                color: #111111;
        }

        .topBody_money {
                padding: 10px 20px;
                background-color: #FFF4F0;
        }

        .topBody_money>img {
                width: 20px;
                margin-right: 5px;
        }

        .topBody_money>span {
                color: #EAB0A3;
                font-size: 15px;
        }

        .topBody_money_text {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
        }

        .topBody_money_text>h1 {
                color: #FF6738;
        }

        .topBody_money_text>div {
                padding: 0 10px;
                color: #F7B24A;
                font-size: 15px;
        }

        .topBody_money_text>div>img {
                width: 20px;
                margin-right: 5px;
        }

        /* 按钮 */
        .topBody_btn {
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
