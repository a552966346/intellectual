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
                                        <div style="display: flex;justify-content: space-between;">
                                                <h2>{{top_data.name}}</h2>
                                                <div style="cursor: pointer;" @click="top_sc(top_data.id)">
                                                       <img :src="img" alt="" v-show="isimg">
                                                       <img :src="img2" alt="" v-show="!isimg">
                                                </div>
                                        </div>
                                        <p><span>创建时间：{{top_data.creatime_text}}</span>|<span>专利号：{{top_data.number}}&nbsp;
                                                        <!-- <span>复制</span> --></span>|<span>申请时间：{{top_data.application_text}}</span>|<span>注册年限：{{top_data.yearsnumber_text}}</span></p>
                                </div>
                                <div class="topBody">
                                        <div class="topBody_lei">
                                                <div>
                                                        <p>是否独家</p>
                                                        <p v-if="top_data.is_exclusive==1">独家</p>
                                                        <p v-else>非独家</p>
                                                </div>
                                                <div>
                                                        <p>组合</p>
                                                        <p v-if="top_data.combination == 1">中文</p>
                                                        <p v-else-if="top_data.combination == 2">英文</p>
                                                        <p v-else-if="top_data.combination ==3">中文+英文</p>
                                                        <p v-else-if="top_data.combination == 4">图像</p>
                                                        <p v-else-if="top_data.combination == 5">图像+中文</p>
                                                        <p v-else-if="top_data.combination == 6">组合</p>
                                                        <p v-else-if="top_data.combination == 7">数字</p>
                                                        <p v-else-if="top_data.combination == 8">拼英</p>
                                                        <p v-else-if="top_data.combination == 9">英文+图像</p>
                                                        <p v-else-if="top_data.combination == 10">英文+拼音</p>
                                                        <p v-else-if="top_data.combination == 11">中文+英文+图形</p>
                                                </div>
                                                <div>
                                                        <p>行业分类</p>
                                                        <p v-if="top_data.categoryid_text">{{top_data.categoryid_text.name}}</p>
                                                </div>
                                                <div v-if="top_data.nationality !=''">
                                                        <p>国籍</p>
                                                        <p>{{top_data.nationality}}</p>
                                                </div>
                                                <div v-if="top_data.strlenlength != 0">
                                                        <p>长度</p>
                                                        <p>{{top_data.strlenlength}}</p>
                                                </div>
                                        </div>
                                        <div class="topBody_money">
                                                <img src="" alt=""><span>价格</span>
                                                <div class="topBody_money_text">
                                                        <h1 v-if="top_data.fee>=10000">{{(top_data.fee/10000)}}万元</h1>
                                                        <h1 v-else>{{top_data.fee}}元</h1>
                                                        <div>
                                                               <span><img src="" alt="">浏览：{{top_data.clicks}}次</span>
                                                                <!-- <span><img src="" alt="">分享</span>
                                                                <span><img src="" alt="">收藏</span> -->
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="topBody_btn">
                                                <div class="bottom_left">
                                                        <div class="left_left">
                                                                <span>{{nub}}</span>
                                                                <span><button @click="but1">+</button><button @click="but2">-</button></span>
                                                        </div>
                                                        <div class="left_but">
                                                                <button @click="shop(top_data.id)">加入购物车<p>--<img src="../../../static/img/transfer/transfer_right.png" alt="">--</p></button>
                                                        </div>

                                                </div>
                                                <div class="bottom_right">
                                                        <button @click="tankuang">
                                                                <img src="../../../static/img/service/service_kefu.png"
                                                                        alt="">
                                                                <span>咨询客服</span>
                                                        </button>
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

        export default {
                data() {
                        return {
                                nub: 1,
                                isshow:false,
                                img:require('../../../static/img/index/inde_sc_one.png'),
                                img2:require('../../../static/img/index/inde_sc_two.png'),
                                isimg:false,
                                money:0
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
                               if(this.nub>=1){
                                       this.nub--
                               }
                       },
                       but1() {
                                       this.nub++

                       },
                       shop(id,nub,uid){
                               if (this.$store.state.user == ''|| this.$store.state.user ==null || this.$store.state.user ==undefined) {
                                       this.$message({
                                                 showClose: true,
                                                 message: '请登录后操作'
                                               });
                                        this.$router.push({path:'/login'});
                               }else{
                                       let user =this.$cookies.get("user"); //获取cookies
                                       uid = user.id;
                                       nub = this.nub;
                                       this.money = this.top_data.fee;
                                       // if(this.top_data.basic_text){
                                       //          this.$api.getshop(id,2,nub,uid,this.top_data.basic_text.feetitle,this.money)
                                       //          .then(res=>{
                                       //          if(res.code == 1){
                                       //                  this.$message({
                                       //                                  message: res.msg,
                                       //                                  type: 'success'
                                       //                          });
                                       //                  this.$router.push({
                                       //                  path:'/shopcart',
                                       //                  query:{
                                       //                          id:id
                                       //                  }
                                       //          })
                                       //          }else{
                                       //          }
                                       //          })
                                       //          .catch(err => {
                                       //          })
                                       // }else{
                                               this.$api.getshop(id,2,nub,uid,'',this.money)
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
                                                }
                                                })
                                                .catch(err => {
                                                })
                                       // }

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
                                              this.$api.getCollection(id,2,this.$store.state.user.user_id)
                                              .then(res=>{
                                                   this.$message({
                                                             message: res.msg,
                                                             type: 'success'
                                                           });
                                                        this.isimg = true
                                              })
                                              .catch(err => {
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
                                                })
                                      }
                                }
                        }
                },
                components:{
                        'v-customer':customer
                }
        }
</script>
<style>


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
        .topHeader img{
                width: 25px;
                height: 25px;
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
</style>
