<template>
        <div id="transfer_left">
                <div class="transfer_left_top">
                        <div v-for="(item,index) in transfer_left_top" :class="{xuanzhong:active==index}" @click="shaixuan(index)">
                                <p>{{item.name}}</p>
                                <i class="el-icon-bottom transfer_sorticon"></i>
                        </div>
                </div>
                <div class="transfer_left_center">
                        <div class="left_xiang" v-for="(item,index) in left_data" :key="item.id">
                                <img :src="item.images_text[0]" alt="">
                                <div class="left_xiang_text">
                                        <div class="xiang_title">
                                                <p>{{item.name}}</p>
                                                <div>
                                                        <p><img src="../../../static/img/transfer/transfer_eye.png" alt=""></p>
                                                        <span>49</span>
                                                        <p>发布时间：{{item.creatime_text}}</p>
                                                </div>
                                        </div>
                                        <div class="left_xinag_text_leixin">
                                                <div class="text_leixin_left">
                                                        <div>
                                                                <p>行业分类</p>
                                                                <p>{{item.categoryid_text}}</p>
                                                        </div>
                                                        <div>
                                                                <p>应用领域</p>
                                                               <p v-if="item.territory == 0">高技术服务</p>
                                                               <p v-else-if="item.territory == 1">建筑业</p>
                                                               <p v-else-if="item.territory==2">新材料</p>
                                                               <p v-else-if="item.territory == 3">新能源与节能</p>
                                                               <p v-else-if="item.territory == 4">环境与资源</p>
                                                               <p v-else-if="item.territory == 5">现代农业</p>
                                                               <p v-else-if="item.territory == 6">生物与新医药</p>
                                                               <p v-else-if="item.territory == 7">航天航空</p>
                                                                <p v-else-if="item.territory == 8">其他</p>
                                                        </div>
                                                        <div>
                                                                <p>技术类型</p>
                                                                <p v-if="item.type == 0">非专利</p>
                                                                <p v-else-if="item.type == 1">发明专利</p>
                                                                <p v-else-if="item.type==2">实用新型专利</p>
                                                                <p v-else-if="item.type == 3">外观专利</p>
                                                                <p v-else-if="item.type == 4">版权</p>
                                                        </div>

                                                        <div>
                                                                <p>成熟程度</p>
                                                                <p v-if="item.maturity == 0">正在研发</p>
                                                                <p v-else-if="item.maturity == 1">已有样品</p>
                                                                <p v-else-if="item.maturity==2">通过小试</p>
                                                                <p v-else-if="item.maturity == 3">通过中试</p>
                                                                <p v-else-if="item.maturity == 4">可以量产</p>
                                                        </div>
                                                        <div>
                                                                <p>交易方式</p>
                                                                <p v-if="item.means == 0">完全转让</p>
                                                                <p v-else-if="item.means == 1">许可转让</p>
                                                                <p v-else-if="item.means==2">技术入股</p>
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
                                        <p>交易价格<span>{{item.fee}}</span></p>
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
                                currentPage:1  //数据数量
                        }
                },
                props:{
                        left_data:'',
                        nub: 0,
                },
                methods: {
                        shaixuan(index) {
                                this.active = index
                                this.$emit('shaixuan',index)
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

        .transfer_left_top>div>i {
                height: 15px;
                color: #ccc;
                margin-left: 5px;
                background-color: #ddd;
        }

        .xuanzhong>p {
                color: #000 !important;
                font-weight: bold;
        }

        .xuanzhong>i {
                color: #0184FE !important;
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
                height: 20px;
                padding-bottom: 2px;
        }

        .xiang_title>div p {
                font-size: 12px;
                color: #aaa;
                margin-left: 10px;
        }
        .xiang_title>div span {
                font-size: 12px;
                color: #aaa;
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
