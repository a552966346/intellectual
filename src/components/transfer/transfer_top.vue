<template>
        <div id="transfer_top_all">
                <div class="top_title">
                        <div class="top_titlexiang" v-for="(item,index) in top_all_titlexiang">
                                <img :src="item.img" alt="">
                                <p>{{item.name}}<span>{{item.nub}}</span></p>
                        </div>
                </div>
                <div class="top_center">
                        <div class="top_center_lei" >
                                <div class="top_center_all"v-for="(item,index) in top_center_lei" :key="index">
                                        <div class="center_lei_left">
                                                <div>
                                                        <img :src="item.img" alt="">
                                                        <p>{{item.names}}</p>
                                                </div>

                                        </div>
                                        <div class="center_lei_right">
                                                <div @click="xuanze(text.id,index,text.name)" v-for="text in item.lei">
                                                        <p :class="{color:id[index]==text.id}">{{text.name}}</p>
                                                        <img src="../../../static/img/transfer/transfer_dh.png" alt=""
                                                                v-show="id[index]==text.id">
                                                </div>

                                        </div>
                                </div>
                        </div>
                        <div class="top_center_all" id="shaixuan">
                                <div class="center_lei_left">
                                        <div>
                                                <img src="../../../static/img/transfer/transfer_sx.png" alt="">
                                                <p>筛选条件</p>
                                        </div>
                                </div>
                                <div class="center_lei_right">
                                        <span v-for="item in text_sx">{{item}}</span>
                                        <button @click="qinchu">清除全部</button>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                                top_all_titlexiang: [{
                                        img: '../../../static/img/transfer/transfer_zan.png',
                                        name: '满意度',
                                        nub: '99.6%'
                                }, {
                                        img: '',
                                        name: '历史交易金额',
                                        nub: '448,975,194元'
                                }, {
                                        img: '',
                                        name: '历史交易订单数量',
                                        nub: '2,291个'
                                }, {
                                        img: '',
                                        name: '为您解决烦忧-24小时在线',
                                        nub: '专业顾问'
                                }],
                                top_center_lei: [{
                                                id: 1,
                                                names: '行业分类',
                                                img: '../../../static/img/transfer/transfer_fl.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '农林牧业',
                                                                id: 2
                                                        }
                                                ]
                                        },
                                        {
                                                id: 2,
                                                names: '应用领域',
                                                img: '../../../static/img/transfer/transfer_yy.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '高技术服务',
                                                                id: 2
                                                        },
                                                        {
                                                                name: '建筑业',
                                                                id: 3
                                                        },
                                                        {
                                                                name: '新材料',
                                                                id: 4
                                                        },
                                                        {
                                                                name: '新能源与节能',
                                                                id: 5
                                                        },
                                                        {
                                                                name: '资源与环境',
                                                                id: 6
                                                        },
                                                        {
                                                                name: '现代农业',
                                                                id: 7
                                                        },
                                                        {
                                                                name: '生物与新药',
                                                                id: 8
                                                        },
                                                        {
                                                                name: '资源与环境',
                                                                id: 9
                                                        },
                                                        {
                                                                name: '航空港航天',
                                                                id: 10
                                                        },
                                                        {
                                                                name: '其他',
                                                                id: 11
                                                        }
                                                ]
                                        }, {
                                                id: 3,
                                                names: '技术类新',
                                                img: '../../../static/img/transfer/transfer_yy.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '非专利',
                                                                id: 2
                                                        },
                                                        {
                                                                name: '发明专利',
                                                                id: 3
                                                        },
                                                        {
                                                                name: '实用性专利',
                                                                id: 4
                                                        },
                                                        {
                                                                name: '外观专利',
                                                                id: 5
                                                        },
                                                        {
                                                                name: '版权',
                                                                id: 6
                                                        }
                                                ]
                                        }, {
                                                id: 4,
                                                names: '成熟程度',
                                                img: '../../../static/img/transfer/transfer_yy.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '正在研发',
                                                                id: 2
                                                        },
                                                        {
                                                                name: '已有样品',
                                                                id: 3
                                                        },
                                                        {
                                                                name: '通过小试',
                                                                id: 4
                                                        },
                                                        {
                                                                name: '通过中试',
                                                                id: 5
                                                        },
                                                        {
                                                                name: '可以量产',
                                                                id: 6
                                                        }
                                                ]
                                        }, {
                                                id: 5,
                                                names: '交易方式',
                                                img: '../../../static/img/transfer/transfer_yy.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '完全转让',
                                                                id: 2
                                                        },
                                                        {
                                                                name: '许可转让',
                                                                id: 3
                                                        },
                                                        {
                                                                name: '技术入股',
                                                                id: 4
                                                        }
                                                ]
                                        }, {
                                                id: 6,
                                                names: '交易价格',
                                                img: '../../../static/img/transfer/transfer_yy.png',
                                                lei: [{
                                                                name: '不限',
                                                                id: 1
                                                        },
                                                        {
                                                                name: '1-10万',
                                                                id: 2
                                                        },
                                                        {
                                                                name: '10-50万',
                                                                id: 3
                                                        },
                                                        {
                                                                name: '50-100万',
                                                                id: 4
                                                        },
                                                        {
                                                                name: '100-500万',
                                                                id: 5
                                                        },
                                                        {
                                                                name: '100-1000万',
                                                                id: 6
                                                        },
                                                        {
                                                                name: '1000万以上',
                                                                id: 7
                                                        }
                                                ]
                                        }
                                ],
                                id: [1, 1, 1, 1, 1, 1],
                                text_sx: [],
                        }

                },
                mounted() {

                },

                methods: {
                        xuanze(s, i, t) {
                                this.id[i]=s;
                                  this.$set(this.text_sx,i,t)
                                console.log(this.text_sx)
                        },
                        qinchu() {
                                this.text_sx = []
                                this.id =[1, 1, 1, 1, 1, 1]
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

        #transfer_top_all {
                width: 100%;
                display: flex;
                flex-direction: column;
        }

        .top_title {
                display: flex;
                border-top:20px solid #f5f5f5 ;
                border-bottom: 20px solid #f5f5f5;
                padding: 10px;
        }

        .top_titlexiang {
                flex: 1;
                border-right: 2px solid #f5f5f5;
                display: flex;
                align-items: center;
        }
        .top_title>div:last-child{border: none;}
        .top_titlexiang>img {
                height: 20px;
        }

        .top_titlexiang>p {
                font-size: 15px;
                padding-left: 15px;
                display: flex;
                align-items: center;
        }

        .top_titlexiang>p>span {
                color: #FE3F24;
                font-size: 22px;
                padding-left: 10px;
        }

        .top_center>div:last-child {
                padding: 10px  30px;
        }

        .top_center_all {
                display: flex;
                 padding: 10px 10px;
                border-bottom: 1px dashed #ccc;
        }
        .top_center_lei>div:last-child{
                border: none;
        }
        .top_center_lei{
                padding: 0 20px;
        }
        .top_center_lei p{
                font-size: 13px;
                color: #aaa;
        }
        .center_lei_left {
                display: flex;
                width: 10%;
                align-items: flex-start;
        }
        .center_lei_left p{
                color: #000;
                font-weight: bold;
        }
        .center_lei_left>div {
                padding: 5px 0;
                display: flex;
                align-items: center;
        }

        .center_lei_left>div>img {
                height: 20px;
                margin-right: 5px;
        }

        .center_lei_right {
                display: flex;
                width: 90%;
                flex-wrap: wrap;
        }

        .center_lei_right>div {
                display: flex;
                width: 11%;
                align-items: center;
                padding: 5px 0;
        }

        .center_lei_right>div>img {
                height: 15px;
                margin-left: 5px;
                background-color: #EDF3FF;
        }

        .center_lei_right>span {
                padding-right: 10px;
                display: flex;
                align-items: center;
        }

        #shaixuan {
                border-bottom: none;
                border-top: 1px solid #ccc;
        }
        #shaixuan p,span{
                font-size: 13px;
        }
        .center_lei_right>button {
                border: 1px solid #ccc;
                background-color: #fff;
                padding: 0 3px;
                color: #aaa;
                outline: none;
        }
        .color{color: #1D5CBD!important;}
</style>
