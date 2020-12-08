<template>
        <div class="transfer_top">
             <div class="transfer_title">
                    <a class="transfer_text">
                        <p>满意度 <span>99.6%</span> </p>
                    </a>
                    <a class="transfer_text">
                        <p>历史交易金额： <span>448,975,194元</span> </p>
                    </a>
                    <a class="transfer_text">
                        <p>历史交易订单数量 <span>2,291个</span> </p>
                    </a>
                    <a class="transfer_text">
                        <p>为你解决烦忧—24小时在线 <span>专业顾问</span> </p>
                    </a>
                </div>
         <div class="transfer_all">
                <div class="transfer_left">
                        <div class="transfer_leftrow" v-for="(item,index) in transfer" :key="index">
                                <div class="transfer_lefthead">{{item.head}}</div>
                                <div class="transfer_leftcontent">
                                        <span>不限</span>
                                        <span v-for="(second,index) in item.childlist" @click="choosecon(second.name)" :key="index">{{second.name}}</span>
                                        <div class="transfer_leftprice" v-if="index==4">
                                                <input type="text">&nbsp;元&nbsp;-&nbsp;<input type="text">&nbsp;元<button>确定</button>
                                        </div>
                                </div>
                        </div>
                        <div class="transfer_leftrow">
                                <div class="transfer_lefthead">其他条件</div>
                                <div class="transfer_leftother">
                                        <div class="transfer_leftdrop">
                                                <el-dropdown>
                                                        <span class="el-dropdown-link">
                                                                交易类型<i class="el-icon-arrow-down el-icon--right"></i>
                                                        </span>
                                                        <el-dropdown-menu slot="dropdown" class="transfer_leftdropmenu">
                                                                <el-dropdown-item>交易类型1</el-dropdown-item>
                                                        </el-dropdown-menu>
                                                </el-dropdown>
                                        </div>
                                        <div class="transfer_leftdrop">
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
                        <div class="transfer_leftrow">
                                <div class="transfer_lefthead">筛选条件</div>
                                <div class="transfer_leftcontent">
                                        <p @click="choosenull">清空筛选条件</p>
                                        <span v-for="(item,index) in screetext" :key="index">{{item}}</span>
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
                                transfer: [{
                                                head: '行业分类',
                                                childlist: [{
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        },
                                                        {
                                                                name: '农业牧业'
                                                        }
                                                ]
                                        }, {
                                                head: '是否独家',
                                                childlist: [{
                                                                name: '独家'
                                                        },
                                                        {
                                                                name: '非独家'
                                                        }
                                                ]
                                        },
                                        {
                                                head: '专利类型',
                                                childlist: [{
                                                                name: '发明专利'
                                                        },
                                                        {
                                                                name: '实用新型'
                                                        },
                                                        {
                                                                name: '外观设计'
                                                        }
                                                ]
                                        }, {
                                                head: '是否特价',
                                                childlist: [{
                                                                name: '非特价商品'
                                                        },
                                                        {
                                                                name: '特价商品'
                                                        }
                                                ]
                                        }, {
                                                head: '出售价格',
                                                childlist: [{
                                                                name: '3000以下'
                                                        },
                                                        {
                                                                name: '3000-1万'
                                                        },
                                                        {
                                                                name: '1万-3万'
                                                        },
                                                        {
                                                                name: '3万以上'
                                                        }
                                                ]
                                        },
                                ],
                        }
                },
        }
</script>

<style scoped>
.transfer_title{
    width: 1200px;
    height: 50px;
    background-color: #fff;
    margin: 0 auto  20px;
    display: flex;
    justify-content: space-around;
}
.transfer_text{
    line-height: 27px;
}
.transfer_text>p:not{
    border-right:2px solid #f0f0f0 ;
    font-size: 15px;
}
.transfer_text span{
    font-size: 16px;
    color:#ff5d46;
    font-weight: bold;
    margin-left: 2px;
    margin-right: 27px;
}
.transfer_all {
    max-width: 1200px;
    margin: 20px auto;
    background-color: #f6f6f6;
    display: flex;
    justify-content: space-between;
}
.transfer_left {
    width: 1200px;
    background-color: #fff;
    font-size: 15px;
}

.transfer_leftrow {
    display: flex;
    border-bottom: 1px dashed #e9e7f2;
}

.transfer_lefthead {
    width: 160px;
    text-align: center;
    padding: 15px;
    font-weight: bold;
    color: #333;
}

.transfer_leftcontent {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    padding-bottom: 5px;
    position: relative;
}

.transfer_leftcontent span {
    width: 12.5%;
    color: #666;
    padding-bottom: 10px;
    cursor: pointer;
}

.transfer_leftcontent span:nth-child(1) {
    color: #1881c5;
    font-weight: bold;
}

.transfer_leftprice {
    position: absolute;
    right: 15px;
    color: #999;
}

.transfer_leftprice>input {
    width: 50px;
    border: 1px solid #e0e0e0;
    height: 25px;
    padding: 0 3px;
}

.transfer_leftprice>input:focus {
    outline: none;
}

.transfer_leftprice>button {
    background-color: #177ec1;
    border: none;
    color: #fff;
    padding: 0 5px;
    height: 25px;
    margin-left: 5px;
}

.transfer_leftother {
    flex: 1;
    padding: 15px;
    display: flex;
}

.transfer_leftdrop {
    cursor: pointer;
    width: 150px;
    padding-right: 20px;
}

.transfer_leftcontent p {
    height: 25px;
    padding: 0 10px;
    border: 1px solid #dfe2e7;
    color: #666;
    font-size: 14px;
    margin-right: 20px;
    cursor: pointer;
}

.transfer_right {
    width: 20%;
    background-color: #fff;
}
</style>
