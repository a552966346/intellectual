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
                                        <div style="display: flex;justify-content: space-between;">
                                                <h2>{{top_data.name}}</h2>
                                                <div style="cursor: pointer;" @click="top_sc(top_data.id)">
                                                       <img :src="img" alt="" v-show="isimg">
                                                       <img :src="img2" alt="" v-show="!isimg">
                                                </div>
                                        </div>

                                        <p>{{top_data.sketch}}</p>
                                </div>
                                <div class="topall_center">
                                        <div class="solt" style="display:flex;flex-direction: column;">
                                                 <p style="font-size: 13px;">普通担保31-35个工作日，成功率高可加急，版权顾问全程专业服务</p>
                                                        <div class="slot_bord" v-if="question">
                                                                <p v-for="(item,index) in question" :key="index" @click="xuanze(index)" >
                                                                        <span >{{item.feetitle}}</span><span :class="{color:color==index}">￥{{item.fee_cost}}/件</span>
                                                                </p>
                                                        </div>
                                                        <div class="money">￥<h2>{{ isfee(top_data.fee,question[color])}}</h2>元起</div>
                                                <!-- <slot name="topall">
                                                        <div class="moren" style="display: flex;">
                                                                <p style="margin-right:30px;">价格<span v-if="top_data.fee>=10000">￥{{(top_data.fee/10000)}}万元</span>
                                                                <span v-else>￥{{top_data.fee}}</span></p>
                                                                <span style="color:#ccc;font-size:12px;padding:6px;">官费200</span>
                                                        </div>

                                                </slot> -->
                                        </div>
                                        <!-- <div class="inp" v-show="!isShow">
                                                <p>联系电话</p><input type="tel">
                                        </div>
                                        <div class="inp" v-show="!isShow">
                                                <p>联系人：</p><input type="text">
                                        </div> -->
                                </div>
                                <div class="topall_bottom">
                                        <div class="bottom_left">
                                                <div class="left_left" >
                                                        <span>{{nub}}</span>
                                                        <span><button @click="but1">+</button><button @click="but2">-</button></span>
                                                </div>
                                                <div class="left_but">
                                                        <button @click="shop(top_data.id)">加入购物车<p>--<img src="../../../static/img/transfer/transfer_right.png" alt="">--</p></button>
                                                </div>

                                        </div>
                                        <div class="bottom_right" >
                                                <button @click="tankuang" >
                                                        <img src="../../../static/img/service/service_kefu.png" alt="">
                                                        <span >咨询客服</span>
                                                </button>
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

        export default {
                data() {
                        return {
                                // qiye: '企业知识产贯�,
                                nub: 1,
                                isshow:false,
                                img:'../../../static/img/index/inde_sc_one.png',
                                img2:'../../../static/img/index/inde_sc_two.png',
                                isimg:false,
                                color:0,

                                text:''
                        }
                },
                props: {
                        image: '',
                        top_data: '',
                        isShow: false,
                        question:''

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
                        },
                        shop(id,nub,uid){
                                if (this.$store.state.user == ''|| this.$store.state.user ==null || this.$store.state.user ==undefined) {
                                        this.$message({
                                                  showClose: true,
                                                  message: '请登录后操作'
                                                });
                                         this.$router.push({path:'/login'});
                                }else{
                                        let user =JSON.parse(sessionStorage['user']);
                                        uid = user.id;
                                        nub = this.nub;
                                        console.log(this.text)
                                        this.$api.getshop(id,1,nub,uid,this.text)
                                        .then(res=>{
                                        if(res.code == 1){
                                                this.$message({
                                                          message: res.msg,
                                                          type: 'success'
                                                        });
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
                                }

                        },
                        tankuang(){
                                this.isshow=true
                        },
                        shows(){
                                this.isshow = false
                        },
                        top_sc(id){
                                if (this.$store.state.user == ''|| this.$store.state.user ==null || this.$store.state.user ==undefined) {
                                        this.$message({
                                                  showClose: true,
                                                  message: '请登录后操作'
                                                });
                                         this.$router.push({path:'/login'});
                                }else{
                                      if(!this.isimg){
                                              this.$api.getCollection(id,1,this.$store.state.user.user_id)
                                              .then(res=>{
                                                   this.$message({
                                                             message: res.msg,
                                                             type: 'success'
                                                           });
                                                        this.isimg = true
                                              })
                                              .catch(err => {
                                                        console.log(err)
                                                })
                                      }else{
                                             this.$api.getdelCollection(id,this.$store.state.user.user_id)
                                             .then(res=>{
                                                     this.$message({
                                                               message: res.msg,
                                                               type: 'success'
                                                             });
                                                          this.isimg = false
                                             })
                                             .catch(err => {
                                                        console.log(err)
                                                })
                                      }
                                }
                        },
                        isfee(fee,feels){
                                let money = Number(fee)+Number(feels.fee_cost)
                                this.text = feels.feetitle
                                return money
                        },
                        xuanze(index){
                                this.color = index
                        },

                },
                components:{
                        'v-customer':customer
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
        .text_top img{
                width: 25px;
                height: 25px;
        }
        .text_top>p {
                padding: 10px;
                color: #A7A7A7;
                background-color: #F3F6FF;
                font-size: 12px;
        }

        .topall_center {
                padding: 5px 0;
                margin: 20px 0;
        }

        .solt {
                background: url(../../../static/img/service/price.png)no-repeat;
                background-size: cover;
                padding: 15px 5px;
        }

        .moren {
                font-size: 15px;
                color: #aaa;
        }

        .moren>p>span {
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
                align-items: flex-end;
                justify-content: center;
                padding: 3px 0;
        }

        .left_but>button>p>img {
               width: 15px;
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
                cursor: pointer;
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
                cursor: pointer;
        }

        .bottom_right span {
                padding: 5px;
        }
        .iscolor{color: #0184FE;}
        .color{background-color: #0184FE !important;color: #fff !important;font-size: 14px;}
        .zhiding{position: absolute;bottom: 100px;right: 100px;}
        .zhiding>img{width: 50px;}
        .slot_bord{display: flex;padding: 10px 0;flex-wrap: wrap;}
        .slot_bord>p{margin-right: 5px;margin-bottom: 10px;}
        .slot_bord>p>span{background-color: #f5f5f5;color: #0184FE;font-size: 14px;padding: 5px;border: 1px solid #0184FE;font-size: 12px;}
         .slot_bord>p>span:nth-child(1){border-right: none;background-color: #0184FE;color: #fff;}
          .money{display: flex;align-items: center;color: #D30102;}
</style>
