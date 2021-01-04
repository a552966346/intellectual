<template>
        <div id="pctAll">
                <div id="pctTop">
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
                                        <p v-html="top_data.sketch"></p>
                                </div>
                                <div class="topSelect">
                                        <select name="" id="">
                                                <option value="">选择国家地区</option>
                                        </select>
                                        <select name="" id="">
                                                <option value="">申请体系</option>
                                        </select>
                                        <select name="" id="">
                                                <option value="">专利类型</option>
                                        </select>
                                </div>
                                <div class="topBottom">
                                        <div class="btoCostOne">
                                                <div class="btoOneLeft">
                                                        <span>费用合计：</span>
                                                       <span v-if="top_data.fee>=10000">{{(top_data.fee/10000)}}万元</span>
                                                       <span v-else>{{top_data.fee}}元</span>
                                                </div>

                                        </div>
                                        <div class="rfooter">
                                                <div class="rfooterLeft">
                                                        <div class="num">
                                                                <div>{{nub}}</div>
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
        export default {
                data() {
                        return {
                                nub:1,
                                isshow:false,
                                img:'../../../static/img/index/inde_sc_one.png',
                                img2:'../../../static/img/index/inde_sc_two.png',
                                isimg:false
                        }
                },
                props: {
                        title: '',
                        top_data: '',
                        image:''
                },
                methods:{
                        but1(){
                                this.nub++
                        },
                        but2(){
                                if(this.nub>=1){
                                        this.nub--
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
                                        if(this.top_data.basic_text){
                                                this.$api.getshop(id,1,nub,uid,this.top_data.basic_text.feetitle)
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
                                        }else{
                                                this.$api.getshop(id,1,nub,uid,'')
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
                        }
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

        #pctTop {
                width: 100%;
                margin: 0 auto;
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
                flex: 3;
                padding: 11px 20px 0 35px;
        }

        .topHeader>p:nth-child(1) {
                font-size: 22px;
                letter-spacing: 2px;
                color: #2f2f2f;

        }
        .topHeader img{
                width: 25px;
                height: 25px;
        }
        .topHeader>p:nth-child(2) {
                font-size: 13px;
                width: 100%;
                padding: 8px;
                background: #f3f6ff;
                margin-top: 10px;
                color: #898a8e;

        }

        .topSelect {
                padding: 30px 0;
        }

        .topSelect>select {
                width: 170px;
                height: 40px;
                font-size: 14px;
                color: #585858;
                border: 1px solid#585858;
                border-radius: 5px;
                margin-right: 30px;
                padding: 10px 10px 10px 10px;
                outline: none;
        }


        .topBottom {
                width: 100%;
                border: 1px solid #187fc4;
                padding: 20px;
                /* padding: 17px 26px 0 26px; */
                color: #676767;
                font-size: 14px;
                background: #f3f6ff;
                margin-bottom: 50px;

        }

        .topBottom>.btoCostOne {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 32px;
                padding-bottom: 15px;
        }

        .topBottom>.btoCostOne span {
                display: inline-block;
        }

        .topBottom>.btoCostOne>.btoOneLeft>span:nth-child(1) {
                text-indent: 14px;
        }

        .topBottom>.btoCostOne>.btoOneLeft>span:nth-child(2) {
                color: #fe0000;
        }

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
