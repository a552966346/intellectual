<template>
        <div id="transfer_top_all">
                <!-- <div class="top_title">
                        <div class="top_titlexiang" v-for="(item,index) in top_all_titlexiang">
                                <img :src="item.img" alt="">
                                <p>{{item.name}}<span>{{item.nub}}</span></p>
                        </div>
                </div> -->
                <div class="top_center">
                        <div class="top_center_lei" >
                                <div class="top_center_all" v-for="(item,index) in top_data" :key="index">
                                        <div class="center_lei_left">
                                                <div>
                                                        <img :src="item[2]" alt="">
                                                        <p>{{item[0]}}</p>
                                                </div>

                                        </div>
                                        <div class="center_lei_right">
                                                <div @click="xuanze(undefined,item[1],index,undefined)">
                                                        <p  :class="{color:iscolor[index]===undefined}">不限</p>
                                                        <img src="../../../static/img/transfer/transfer_dh.png" alt=""
                                                                v-show="iscolor[index] ===undefined">
                                                </div>
                                                <div @click="xuanze(nubs,item[1],index,text)" v-for="(text,nubs) in item[3]" :key="nubs" v-if="text !=''">
                                                        <p :class="{color:iscolor[index]===nubs}" >{{text}}</p>
                                                        <img src="../../../static/img/transfer/transfer_dh.png" alt=""
                                                                v-show="iscolor[index]===nubs">
                                                </div>
                                                <!-- <div @click="xuanze(nubs,item[1],index,text)" v-for="(text,nubs) in item[3]" :key="nubs" v-if="text !=''">
                                                        <p :class="{color:iscolor[index]===nubs}">{{text}}</p>
                                                        <img src="../../../static/img/transfer/transfer_dh.png" alt=""
                                                                v-show="iscolor[index]===nubs">
                                                </div> -->
                                        </div>
                                </div>
                                <div class="top_center_all" >
                                        <div class="center_lei_left">
                                                <div>
                                                        <i class="el-icon-search" ></i>
                                                        <p>搜索条件</p>
                                                </div>
                                        </div>
                                        <div class="center_lei_right" style="display: flex;padding-left: 15px;">
                                               <input type="text" v-model="input" style="height: 35px;outline: none;border-top-left-radius: 5px;border-bottom-left-radius:5px;border: 1px solid #ccc;"><button @click="sousuo" style="background-color:#1A7FC3;color: #fff;padding: 0 10px;border-top-right-radius: 5px;border-bottom-right-radius:5px;">搜索</button>
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
                                        <button @click="qinchu">清除全部</button>
                                        <span v-for="(item,index) in text_sx" :key="index" v-if="item!='不限'" @click="delet(index)">{{item}}</span>
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
                                        img: require('../../../static/img/transfer/transfer_zan.png'),
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
                                text_sx: [],
                                id:{},
                                input:''
                        }

                },
                props:{
                        top_data:'',
                        iscolor:''
                },
                mounted() {
                        this.text_sx[6] = this.$route.query.name
                },

                methods: {
                        /*
                          s ---- 选择项目id
                          i ----类型索引
                          t  ---- 选中项目名
                          */
                        xuanze(s, item,i, t) {
                                this.iscolor[i]=s;
                                if(t =="不限" ){
                                     this.$set(this.text_sx,i,null)
                                }else{
                                this.$set(this.text_sx,i,t)
                                }
                                this.$set(this.id,i,s)
                                this.$emit('xuanze',this.id)

                        },
                        // 清空
                        qinchu() {
				this.id = {}
                                this.text_sx = []
                                this.$emit('qinchu')
                        },
                        //搜索
                        sousuo(){
                                 this.$set(this.text_sx,6,this.input)
                                this.$set(this.id,8,this.input)
                                this.$emit('sousuo',this.id)
                        },
                        // 删除条件
                        delet(index){
                                this.iscolor[index]=undefined
                                this.$set(this.text_sx,index,null)
                                this.id[index] = null
                                this.$emit('delet',this.id)
                        }
                }
        }
</script>

<style>

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
        align-items: center;
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
        color: #666;
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
.center_lei_left i{
        color: #1D5CBD;
        margin-right: 5px;
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
        align-items: center;
        padding: 5px 15px;
}

.center_lei_right p{
        cursor: pointer;
        font-size: 12px;
}

.center_lei_right>div>img {
        height: 15px;
        margin-left: 5px;
        background-color: #EDF3FF;
}

.center_lei_right>span {
        padding-left:15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 12px;
        color: #666;
}

#shaixuan {
        border-bottom: none;
        border-top: 1px solid #ccc;
}
#shaixuan p,span{
        font-size: 13px;
}
.center_lei_right>button {
        border: 1px solid #666;
        background-color: #fff;
        padding: 0 3px;
        color: #666;
        outline: none;
}
.color{color: #1D5CBD!important;}
</style>
