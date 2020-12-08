<template>
        <div id="transfer_left">
                <div class="transfer_left_top">
                        <div v-for="(item,index) in transfer_left_top" :class="{xuanzhong:active==index}" @click="shaixuan(index)">
                                <p>{{item.name}}</p>
                                <img src="../../../static/img/transfer/transfer_xia.png" alt="">
                        </div>
                </div>
                <div class="transfer_left_center">
                        <div class="left_xiang">
                                <img src="" alt="">
                                <div class="left_xiang_text">
                                        <div class="xiang_title">
                                                <p>液体位置控制器</p>
                                                <div>
                                                        <p><img src="" alt=""><span>49</span></p>
                                                        <p>发布时间：2020-11-16 19:52:17</p>
                                                </div>
                                        </div>
                                        <div class="left_xinag_text_leixin">
                                                <div class="text_leixin_left">
                                                        <div>
                                                                <p>行业分类</p>
                                                                <p>其他</p>
                                                        </div>
                                                        <div>
                                                                <p>应用领域</p>
                                                                <p>其他</p>
                                                        </div>
                                                        <div>
                                                                <p>技术类型</p>
                                                                <p>实用新型专利</p>
                                                        </div>

                                                        <div>
                                                                <p>行业分类</p>
                                                                <p>不限</p>
                                                        </div>
                                                        <div>
                                                                <p>行业分类</p>
                                                                <p>完全转让</p>
                                                        </div>
                                                </div>
                                                <div class="text_leixin_right">
                                                        <div><img src="../../../static/img/transfer/transfer_xin.png"
                                                                        alt=""></div>
                                                        <div><img src="../../../static/img/transfer/transfer_zhuanf.png"
                                                                        alt=""></div>
                                                        <button>
                                                                <img src="../../../static/img/transfer/transfer_kefu.png"
                                                                        alt="">
                                                                <p>联系客服</p>
                                                        </button>
                                                </div>
                                        </div>
                                        <p>交易价格<span>面议</span></p>
                                </div>
                        </div>
                        <div class="transfer_left_center_bottom">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                        :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
                                        :total="nub">
                                </el-pagination>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                                transfer_left_top: [{
                                        name: '综合排序'
                                }, {
                                        name: '浏览热度'
                                }, {
                                        name: '发布时间'
                                }],
                                active: 0,
                                nub: '',
                                currentPage:1
                        }
                },
                methods: {
                        shaixuan(index) {
                                this.active = index
                        },
                        handleSizeChange(val) {
                                console.log(`每页 ${val} 条`);
                        },
                        handleCurrentChange(val) {
                                console.log(`当前页: ${val}`);
                        }

                }
        }
</script>

<style>
        * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }

        #transfer_left {
                width: 100%;
                display: flex;
                flex-direction: column;
                border: 1px solid #EDF3FF;
        }

        .transfer_left_top {
                display: flex;
                border-bottom: 1px solid #f5f5f5;
                padding: 5px 10px;
        }

        .transfer_left_top>div {
                display: flex;
                padding: 10px;
                align-items: center;
        }

        .transfer_left_top>div>p {
                color: #ccc;
                font-size: 14px;
        }

        .transfer_left_top>div>img {
                height: 15px;
                background-color: #ddd;
        }

        .xuanzhong>p {
                color: #000 !important;
                font-weight: bold;
        }

        .xuanzhong>img {
                background-color: #EDF3FF !important;
        }

        .transfer_left_center {
                flex: 1;
        }

        .left_xiang {
                padding: 20px;
                display: flex;
                align-items: center;
                border-bottom: 10px solid #f5f5f5;
        }

        .left_xiang>img {
                height: 100px;
                width: 100px;
        }

        .left_xiang_text {
                padding-left: 15px;
                width: 90%;
        }

        .xiang_title {
                display: flex;
                padding: 5px 0 10px 0;
                justify-content: space-between;
        }

        .xiang_title>p {
                font-size: 18px;
                font-weight: bold;
        }

        .xiang_title>div {
                display: flex;
        }

        .xiang_title>div img {
                height: 10px;
        }

        .xiang_title>div p {
                font-size: 12px;
                color: #aaa;
                margin-left: 10px;
        }

        .left_xinag_text_leixin {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
        }

        .text_leixin_left {
                display: flex;
                width: 73%;
        }

        .text_leixin_left>div>p {
                font-size: 13px;
        }

        .text_leixin_left>div>p:nth-child(1) {
                color: #ccc;
        }

        .text_leixin_left>div>p:nth-child(2) {
                padding: 5px 0;
                color: #555;
        }

        .text_leixin_left>div {
                width: 20%;
                border-right: 1px solid #ccc;
                margin-right: 10px;
        }

        .text_leixin_left>div:last-child {
                border: none;
        }

        .left_xiang_text>p {
                font-size: 13px;
                color: #ccc;
        }

        .left_xiang_text>p>span {
                color: #F75E30;
                font-size: 18px;
                padding-left: 10px;
                font-weight: bold;
        }

        .text_leixin_right {
                display: flex;
                width: 27%;
                align-items: center;
        }

        .text_leixin_right>div {
                border: 1px solid #ccc;
                margin-right: 10px;
                display: flex;
                align-items: center;

                justify-content: center;
                padding: 5px;
        }

        .text_leixin_right>div>img {
                width: 20px;
                height: 20px;
        }

        .text_leixin_right>button {
                display: flex;
                align-items: center;
                width: 120px;
                color: #117BC1;
                font-size: 15px ;
                font-weight: bold;
                justify-content: center;
                padding: 10px 0;
                border: none;
                outline: none;
                background-color: #F1F5FE;
        }

        .text_leixin_right>button>img {
                width: 20px;
                height: 20px;
                margin-right: 5px;
        }
</style>
