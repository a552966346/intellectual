<template>
        <div class="patenscree_all">
                <div class="patenscree_left">
                        <div class="patenscree_leftrow" v-for="(item,index) in patenscree" :key="index">
                                <div class="patenscree_lefthead">{{item.head}}</div>
                                <div class="patenscree_leftcontent">
                                        <span>不限</span>
                                        <span  :class="{color:iscolor[index] == nubs}" v-for="(second, nubs) in item.childlist" @click="choosecon(index,nubs,second.name,)" :key="second.id">{{second.name}}</span>
                                        <div class="patenscree_leftprice" v-if="index==4">
                                                <input type="text">&nbsp;元&nbsp;-&nbsp;<input type="text">&nbsp;元<button>确定</button>
                                        </div>
                                </div>
                        </div>
                        <div class="patenscree_leftrow">
                                <div class="patenscree_lefthead">其他条件</div>
                                <div class="patenscree_leftother">
                                        <div class="patenscree_leftdrop">
                                                <el-dropdown>
                                                        <span class="el-dropdown-link">
                                                                交易类型<i class="el-icon-arrow-down el-icon--right"></i>
                                                        </span>
                                                        <el-dropdown-menu slot="dropdown" class="patenscree_leftdropmenu">
                                                                <el-dropdown-item>交易类型1</el-dropdown-item>
                                                        </el-dropdown-menu>
                                                </el-dropdown>
                                        </div>
                                        <div class="patenscree_leftdrop">
                                                <el-dropdown>
                                                        <span class="el-dropdown-link">
                                                                专利状态<i class="el-icon-arrow-down el-icon--right"></i>
                                                        </span>
                                                        <el-dropdown-menu slot="dropdown">
                                                                <el-dropdown-item>专利状态1</el-dropdown-item>
                                                        </el-dropdown-menu>
                                                </el-dropdown>
                                        </div>
                                </div>
                        </div>
                        <div class="patenscree_leftrow">
                                <div class="patenscree_lefthead">筛选条件</div>
                                <div class="patenscree_leftcontent">
                                        <p @click="choosenull">清空筛选条件</p>
                                        <span v-for="(item,index) in screetext" :key="index">{{item}}</span>
                                </div>
                        </div>
                </div>
                <div class="patenscree_right">
                        <div class="copyright_active">
                                <img src="../../../static/img/paycenter/copyright_pay.png" alt="">
                                <div class="copyright_bg">
                                        <h2>交易动态</h2>
                                        <div class="copyright_line"></div>
                                        <p>交易实时动态</p>
                                        <div class="copyright_lines"></div>
                                </div>
                                <div class="copyright_gd">
                                        <div class="marquee">
                                                <div class="marquee_box">
                                                        <ul class="marquee_list" :class="{marquee_top:animate}">
                                                                <li v-for="(item, index) in marqueeList" class="marquee_item" :key="index">
                                                                        <div class="marquee_itemtop">
                                                                                <span>{{item.amount}}</span>
                                                                                <span> {{item.name}}购买了专利</span>
                                                                        </div>
                                                                        <div class="marquee_itembottom">
                                                                                <span> {{item.machine}}</span>
                                                                                <span>编号{{item.number}}</span>
                                                                        </div>
                                                                </li>
                                                        </ul>
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
                        iscolor:[],
                        patenscree: [{
                                id:1,
                                head: '行业分类',
                                childlist: [{
                                                name: '农业牧业',
                                                id:1
                                        },
                                        {
                                                name: '农业牧业',
                                                id:2
                                        },
                                        {
                                                name: '农业牧业',
                                                id:3
                                        },
                                        {
                                                name: '农业牧业',
                                                id:4
                                        },
                                        {
                                                name: '农业牧业',
                                                id:5
                                        },
                                        {
                                                name: '农业牧业',
                                                id:6
                                        },
                                        {
                                                name: '农业牧业',
                                                id:7
                                        },
                                        {
                                                name: '农业牧业',
                                                id:8
                                        }
                                ]
                        }, {
                                id:2,
                                head: '是否独家',
                                childlist: [{
                                                name: '独家',
                                                id:1
                                        },
                                        {
                                                name: '非独家',
                                                id:2
                                        }
                                ]
                        },{
                                id:3,
                                head: '专利类型',
                                childlist: [{
                                                name: '发明专利',
                                                id:1
                                        },
                                        {
                                                name: '实用新型',
                                                id:2
                                        },
                                        {
                                                name: '外观设计',
                                                id:3
                                        }
                                ]
                        }, {
                                id:4,
                                head: '是否特价',
                                childlist: [{
                                                name: '非特价商品',
                                                id:1
                                        },
                                        {
                                                name: '特价商品',
                                                id:2
                                        }
                                ]
                        }, {
                                id:5,
                                head: '出售价格',
                                childlist: [{
                                                name: '3000以下',
                                                id:1
                                        },
                                        {
                                                name: '3000-1万',
                                                id:2
                                        },
                                        {
                                                name: '1万-3万',
                                                id:3
                                        },
                                        {
                                                name: '3万以上',
                                                id:4
                                        }
                                ],
                        },
                ],
                screetext: [],
                animate: false,
                marqueeList: [{
                                name: '开心果',
                                machine: '09类科学仪器',
                                amount: '10小时',
                                number:'0000001'
                        },
                        {
                                name: '芒果干',
                                machine: '09类科学仪器',
                                amount: '5小时',
                                number:'0000001'
                        },
                        {
                                name: '草莓干',
                                machine: '09类科学仪器',
                                amount: '5小时',
                                number:'0000001'
                        },
                        {
                                name: '无核白葡萄干',
                                machine: '09类科学仪器',
                                amount: '5小时',
                                number:'0000001'
                        }
                        ]
                }
        },
        created: function() {
                setInterval(this.showMarquee, 2000)
        },
        methods: {
                showMarquee: function() {
                        this.animate = true;
                        setTimeout(() => {
                                this.marqueeList.push(this.marqueeList[0]);
                                this.marqueeList.shift();
                                this.animate = false;
                        }, 500)
                },
                choosecon(index,nubs,name) {
                        this.iscolor[index] = nubs
                        console.log(name)
                        this.$set(this.screetext,index,name) 
                        console.log(this.screetext)

                },
                choosenull() {
                        this.iscolor = []
                        this.screetext = []
                }
        }
}
</script>

<style scoped>
        .patenscree_all {
                max-width: 1200px;
                margin: 20px auto;
                background-color: #f6f6f6;
                display: flex;
                justify-content: space-between;
        }

        .patenscree_left {
                width: 78.5%;
                background-color: #fff;
                font-size: 15px;
        }

        .patenscree_leftrow {
                display: flex;
                border-bottom: 1px dashed #e9e7f2;
        }

        .patenscree_lefthead {
                width: 160px;
                background-color: #f9fafe;
                border-right: 1px solid #eeedf5;
                text-align: center;
                padding: 15px;
                font-weight: bold;
                color: #333;
        }

        .patenscree_leftcontent {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                padding: 15px;
                padding-bottom: 5px;
                position: relative;
        }

        .patenscree_leftcontent span {
                width: 12.5%;
                color: #666;
                padding-bottom: 10px;
                cursor: pointer;
        }

        .patenscree_leftcontent span:nth-child(1) {
                color: #1881c5;
                font-weight: bold;
        }
        .addclass{color: #1881c5 !important;}
        .patenscree_leftprice {
                position: absolute;
                right: 15px;
                color: #999;
        }

        .patenscree_leftprice>input {
                width: 50px;
                border: 1px solid #e0e0e0;
                height: 25px;
                padding: 0 3px;
        }

        .patenscree_leftprice>input:focus {
                outline: none;
        }

        .patenscree_leftprice>button {
                background-color: #177ec1;
                border: none;
                color: #fff;
                padding: 0 5px;
                height: 25px;
                margin-left: 5px;
        }

        .patenscree_leftother {
                flex: 1;
                padding: 15px;
                display: flex;
        }

        .patenscree_leftdrop {
                cursor: pointer;
                width: 150px;
                padding-right: 20px;
        }

        .patenscree_leftcontent p {
                height: 25px;
                padding: 0 10px;
                border: 1px solid #dfe2e7;
                color: #666;
                font-size: 14px;
                margin-right: 20px;
                cursor: pointer;
        }

        .patenscree_right {
                width: 20%;
                background-color: #fff;
        }

        .copyright_active>img {
                width: 240px;
        }

        .copyright_bg {
                background: url(../../../static/img/paycenter/copyright_bg.png) no-repeat center;
                background-size: 100% 100%;
                text-align: center;
                position: relative;
        }

        .copyright_bg h2 {
                color: #2385c7;
                font-size: 20px;
                padding: 9px 0 5px;
        }

        .copyright_bg p {
                padding: 10px 0;
                color: #2385c7;
                font-size: 13px;
        }

        .copyright_line,
        .copyright_lines {
                border-top: 1px solid #2385c7;
                width: 20px;
        }

        .copyright_line {
                position: absolute;
                left: 45px;
                bottom: 15px;
        }

        .copyright_lines {
                position: absolute;
                right: 45px;
                bottom: 15px;
        }

        .copyright_gd {
                width: 100%;
                padding: 10px;
                background: #fff;
        }

        * {
                margin: 0;
                padding: 0;
        }

        .marquee_box {
                display: block;
                position: relative;
                width: 100%;
                height: 120px;
                overflow: hidden;
        }

        .marquee_list {
                width: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
        }

        .marquee_top {
                transition: all 0.5s;
                margin-top: -60px;
        }

        .marquee_list li {
                height: 60px;
                line-height: 30px;
                font-size: 12px;
                padding-left: 20px;
                display: flex;
                box-sizing: border-box;
        }

        .marquee_list li span {
                padding: 0 2px;
                display: flex;
                box-sizing: border-box;
        }

        .red {
                color: #FF0101;
        }

        .marquee_item {
                background-color: #f6f6f6;
                display: flex;
                flex-direction: column;
        }

        .marquee_itemtop,
        .marquee_itembottom {
                display: flex;
                align-items: center;
        }
        .marquee_itemtop span{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
        }
        .marquee_itemtop span:nth-child(1) {
                background-color: #187fc2;
                border-radius: 15px;
                line-height: 20px;
                height: 20px;
                padding: 0 5px;
                color: #fff;
                margin-right: 5px;
        }
        .color{
                color: #2385c7!important;
        }
</style>
