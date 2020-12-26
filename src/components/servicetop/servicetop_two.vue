<template>
        <div id="serviceTop">
                <div class="topAll">
                        <div class="topall_img">
                                <el-carousel trigger="click" height="300px">
                                        <el-carousel-item v-for="(item,index) in image" :key="index" style="display: flex;justify-content: center;align-items: center;">
                                                <img :src="item" alt="">
                                        </el-carousel-item>
                                </el-carousel>
                        </div>
                        <div class="right">
                                <div class="rHeader">{{top_data.name}}</div>
                                <div class="rHeadercont">{{top_data.sketch}}</div>
                                <div class="rServiceType">
                                        <span>服务类型：</span>
                                        <span :class="{rServiceTypeActive:nub1==index}" v-for="(item,index) in name" @click="qiehuan(index)" :key="index">{{item}}</span>
                                        <span class="rightCommon">?</span>
                                </div>
                                <div class="costSlow">
                                        <span>费用减缓：</span>
                                        <span :class="{costLowActive:nub2==index}" v-for="(item,index) in fee" @click="qiehuan2(index)" :key="index">{{item}}</span>
                                        <span class="rightCommon">?</span>
                                </div>
                                <p class="complete">
                                        <span></span>
                                        <span>完善更多专利信息，可尽快安排技术专家重新撰写</span>
                                        <span>点击完善</span>
                                </p>
                                <div class="rBottom">
                                        <div class="bottom">
                                                <div class="bottomLeft">
                                                        <div>
                                                                <span>服务费用：</span>
                                                                <span>￥{{top_data.serve_fee}}</span>
                                                        </div>
                                                        <div>
                                                                <span>国知局费用：</span>
                                                                <span>￥{{top_data.know_fee}}</span>
                                                                <span>（{{top_data.know_fee_remark}}）</span>
                                                        </div>
                                                        <div>
                                                                <span>费用合计：</span>
                                                                <span v-if="top_data.fee>=10000">{{(top_data.fee/10000)}}万元</span>
                                                                <span v-else>{{top_data.fee}}元</span>
                                                        </div>
                                                </div>
                                                <div class="bottomRight">
                                                        <input type="checkbox">
                                                        <span>官费自缴</span>
                                                        <span class="rightCommon">?</span>
                                                </div>
                                        </div>
                                        <div class="rfooter">
                                                <div class="rfooterLeft">
                                                        <div class="num">
                                                                <div>{{isnub}}</div>
                                                                <div>
                                                                        <span @click="but1">+</span>
                                                                        <span @click="but2">-</span>
                                                                </div>
                                                        </div>

                                                        <div class="car" @click="shop(top_data.id)">
                                                                <div>加入购物车</div>
                                                                <div>
                                                                        <p>---<img src="../../../static/img/transfer/transfer_right.png" alt="">---</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="rfooterRight" @click="tankuang">
                                                        <img src="../../../static/img/service/service_kefu.png" alt="">
                                                        <span>咨询客服</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                        <v-customer @shows="shows"></v-customer>
                </div>
        </div>
</template>

<script>
        import customer from '@/components/customers/customer_services.vue'

	export default{
		data(){
			return{
                                isnub:1,
                                name:['标准','授权保险'],
                                nub1:0,
                                fee:['减缓85%','减缓70%','无减缓'],
                                nub2:0,
                                isshow:false
			}
		},
		props:{
			image:'',
                        top_data:'',
                        nub:''
		},
                methods:{
                        qiehuan(index){
                                this.nub1= index
                        },
                        qiehuan2(index){
                                this.nub2= index
                        },
                        but2() {
                                console.log(11111)
                                if(this.isnub>=1){
                                        this.isnub--
                                }
                        },
                        but1() {
                                        this.isnub++

                        },
                        shop(id,nub,uid){
                                if (sessionStorage.getItem("key") != null) {
                                        let user =JSON.parse(sessionStorage['user']); 
                                        uid = user.id;
                                        nub = this.nub;
                                        this.$api.getshop(id,1,nub,uid)
                                        .then(res=>{
                                        if(res.code == 1){
                                                console.log(res.data)
                                                this.$router.push({
                                                path:'/shopcart',
                                                query:{
                                                        id:id
                                                }
                                        })
                                        }else{
                                                console.log(res.msg)
                                        }
                                        })
                                        .catch(err => {
                                        console.log(err)
                                        })
                                }else{
                                        this.$router.push({path:'/login'});
                                }        

                               
                        },
                        tankuang(){
                                this.isshow=true
                        },
                        shows(){
                                this.isshow = false
                        },
                },
                components:{
                        'v-customer':customer
                }
	}
</script>

<style>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        #serviceTop {
                width: 1200px;
                margin: 0 auto;
                background-color: #fff;
        }

        .topAll {
                width: 100%;
                padding: 20px;
                display: flex;
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

        .right {
                flex: 3;
                /* background: #ddd; */
                padding: 11px 20px 0 35px;
        }

        .right>.rHeader {
                font-size: 22px;
                letter-spacing: 2px;
                color: #2f2f2f;
        }

        .right>.rHeadercont {
                padding: 0 10px;
                font-size: 12px;
                line-height: 26px;
                background: #f3f6ff;
                letter-spacing: 1px;
                margin: 10px 0 17px 0;
                color: #8a8b8f;
        }

        .rServiceType,
        .costSlow {
                width: 100%;
                height: 40px;
                font-size: 13px;
                /* color: #8d8d8d; */
                display: flex;
                align-items: center;
        }

        .costSlow {
                margin-top: 16px;
        }

        .rServiceType>span,
        .costSlow>span {
                display: inline-block;
                margin-right: 20px;
                height: 100%;
        }

        .rServiceType>span:nth-child(2),
        .rServiceType>span:nth-child(3),
        .costSlow>span:nth-child(2),
        .costSlow>span:nth-child(3),
        .costSlow>span:nth-child(4) {
                text-align: center;
                line-height: 40px;
                width: 120px;
                font-size: 14px;
                border-radius: 2px;
        }

        .rServiceType>span:nth-child(2),
        .rServiceType>span:nth-child(3) {
                border: 1px solid #187fc4;
                color: #187fc4;
        }

        /* 服务类型点击效果 */
        .rServiceTypeActive {
                background: #187fc4;
                color: #fefeff !important;
        }

        .right .rightCommon {
                width: 23px;
                height: 23px;
                border-radius: 50%;
                border: 2px solid #187fc4;
                color: #187fc4;
                font-size: 12px;
                text-align: center;
                line-height: 23px;
                font-weight: 600;
        }

        .costSlow>span:nth-child(1),
        .rServiceType>span:nth-child(1) {
                line-height: 40px;
        }

        .costSlow>span:nth-child(2),
        .costSlow>span:nth-child(3),
        .costSlow>span:nth-child(4) {
                border: 1px solid #989898;
                color: #989898;
        }

        /* 费用减缓点击效果 */
        .costLowActive {
                border: 2px solid #187fc4 !important;
        }

        /* 完善信息 */
        .complete {
                height: 60px;
                display: flex;
                flex-direction: row;
                align-items: center;
        }

        .complete>span {
                font-size: 13px;
        }

        .complete>span:nth-child(1) {
                width: 15px;
                height: 21px;
                background: cornsilk;
                margin-right: 7px;
        }

        .complete>span:nth-child(2) {
                color: #747474;
        }

        .complete>span:nth-child(3) {
                color: #177dc5;
                margin-left: 15px;
        }

        /* 底部费用合计 */
        .rBottom>.bottom {
                display: flex;
                justify-content: space-between;
        }

        .bottomLeft>div {
                padding-bottom: 10px;
        }

        .bottomLeft>div>span:nth-child(2) {
                color: red;
        }

        .bottomLeft>div:nth-child(1),
        .bottomLeft>div:nth-child(3) {
                text-indent: 14px;
        }

        .bottomLeft>div:nth-child(2)>span:nth-child(3) {
                margin-left: 10px;
        }

        .bottom>.bottomRight {
                display: flex;
                width: 98px;
                height: 22px;
                justify-content: center;
                align-items: center;
        }

        .bottom>.bottomRight>span {
                margin-left: 2px;
        }

        .bottom>.bottomRight>input {
                height: 13;
                width: 13px;
                border-radius: 2px;
        }

        .rBottom {
                width: 100%;
                border: 1px solid #187fc4;
                padding: 17px 26px 17px 26px;
                color: #676767;
                font-size: 14px;
                background: #f3f6ff;

        }

        .rightCommon {
                display: flex !important;
                ;
                justify-content: center;
                align-items: center;
        }

        /* 按钮 */
        .rfooter {
                display: flex;
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
                cursor: pointer;
        }

        .rfooter>.rfooterRight>img {
                width: 40px;
        }

        .car>div>p {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding: 3px 0;
        }

        .car>div>p>img {
                width: 15px;
        }
</style>
