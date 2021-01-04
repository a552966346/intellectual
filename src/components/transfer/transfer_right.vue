<template>
        <div id="transfer_right">
                <div class="transfer_recommend">
                    <div class="transfer_cheng">
                        <p>相关成果推荐
                            <router-link :to="'/transfer'"><span>更多<img src="../../../static/img/transfer/transfer_right.png" alt=""></span></router-link> </p>
                    </div>
                    <div class="transfer_pro" >
                        <div class="transfer_more" v-for="(item,index) in hots" @mouseover="isshow_two(index)" @mousedown="isshows_two">
                            <div class="transfer_zhao">
                                <img :src="item.images" alt="">
                            </div>
                            <span>{{item.name}}</span>
                            <div class="transfer_jia" v-show="!(shows==index)">
                                <span v-if="item.fee>=10000">{{(item.fee)/10000}}万元</span>
                                <span v-else>{{item.fee}}</span>
                                <span style="font-weight:300;">不限</span>
                            </div>
                            <div class="transfer_foo" v-show="shows==index">
                                <div class="transfer_ask" >
                                    <p @click="tankuang">咨询客服 </p>
                                    <font style="background-color:#00a3bf;"><img src="../../../static/img/transfer/transfer_tou.png" alt=""> </font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                        <v-customer @shows="showst"></v-customer>
                </div>
        </div>
</template>

<script>
import customer from '@/components/customers/customer_services.vue'
export default {
    data(){
        return{
            hots:[],
            shows:'',
            isshow:false
        }
    },
     mounted() {
        this.$api.hottui()
                .then(res => {
                        console.log(321)
                        console.log(res)
                        this.hots = res.data

                })
                .catch(err => {
                                console.log(err)
                })

            },
            methods:{
                    isshow_two(index){
                        this.shows = index
                    },
                    isshows_two(){
                     this.shows =undefined
                    },
                    tankuang(){
                            this.isshow=true
                    },
                    showst(){
                            this.isshow = false
                    },

    },
    components:{
            'v-customer':customer
    }
}
</script>

<style>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        #transfer_right{width: 100%;}
       .transfer_cheng{
           background-color:#1a7fc3;
           width: 100%;
           padding: 10px;
           line-height: 30px;
       }
       .transfer_cheng>p{
               display: flex;
               justify-content: space-between;
       }
        a{
            color: #fff;
        }
       .transfer_pro{
           text-decoration: none;
           color: black;
       }
     /*  .transfer_pro:hover>.transfer_foo{
           display: block;
       }
       .transfer_pro:hover>.transfer_jia{
           display: none;
       } */
       .transfer_cheng>p{
           color: #fff;
           display: flex;
           align-items: center;
           justify-content: space-around;
           font-size: 16px;
       }
       .transfer_cheng span{
               display: flex;
               align-items: center;
           margin-left: 30px;
           font-size: 14px;
       }
       .transfer_cheng img{
           width: 15px;
       }
       .transfer_more{
           width: 100%;
           background-color: #fff;
           padding: 15px;
       }
       .transfer_zhao{
           width: 170px;
           margin: 0 auto;
       }
       .transfer_more img{
          width: 100%;
       }
       .transfer_more span{
           font-size: 14px;
           padding: 5px 0;
       }
       .transfer_jia{
           display: flex;
           justify-content: space-between;
           height:30px;
       }
       .transfer_jia span{
           color: #1d7fc6;
           font-weight: bold;
       }
       .transfer_foo{
           /* display: none; */
           height: 30px;
       }
       .transfer_ask {
           display: flex;
           justify-content: space-between;
           align-items: center;
       }
       .transfer_ask p{
           color: #fff;
           background-color: #1a7fc3;
           text-align: center;
           width: 90%;
           height: 100%;
           font-size: 14px;
           padding: 5px 0;
       }
       .transfer_ask font{
           width: 10%;
           padding: 3.5px;
           text-align: center;
       }
       .transfer_ask img{
           width: 18px;
       }
</style>
