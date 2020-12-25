<template>
        <div id="hover_right">
                <div class="hover_recommend">
                    <div class="hover_cheng">
                        <p>热门需求
                            <router-link  :to="'/transfer'"><span>更多<img src="../../../static/img/transfer/transfer_right.png" alt=""></span></router-link>  </p>
                    </div>
                    <!-- <a class="hover_pro" href="#"> -->
                        <div class="hover_more">
                            <div class="hover_jia">
                                <div class="one"><div style="background-color: #FA6B75;">1</div><span>{{hot[0].name}}</span></div>
                                <div class="two">
                                        <span v-if="hot[0].fee>=10000">{{(hot[0].fee)/10000}}</span>
                                        <span v-else>{{hot[0].fee}}</span>
                                        <span style="font-weight:300;">{{hot[0].creatime_text}}</span>
                                </div>
                            </div>
                            <div class="hover_jia">
                                <div class="one"><div  style="background-color: #F97A37;">2</div><span>{{hot[1].name}}</span></div>
                                <div class="two">
                                        <span v-if="hot[1].fee>=10000">{{(hot[0].fee)/10000}}</span>
                                        <span v-else>{{hot[1].fee}}</span>
                                        <span style="font-weight:300;">{{hot[1].creatime_text}}</span>
                                </div>
                            </div>
                            <div class="hover_jia">
                                <div class="one"><div  style="background-color: #FAC539;">3</div><span>{{hot[2].name}}</span></div>
                                <div class="two">
                                        <span v-if="hot[2].fee>=10000">{{(hot[0].fee)/10000}}</span>
                                        <span v-else>{{hot[2].fee}}</span>
                                        <span style="font-weight:300;">{{hot[2].creatime_text}}</span>
                                </div>
                            </div>
                            <div class="hover_jia">
                                <div class="one"><div style="background-color: #ccc;">4</div><span>{{hot[3].name}}</span></div>
                                <div class="two">
                                        <span v-if="hot[3].fee>=10000">{{(hot[0].fee)/10000}}</span>
                                        <span v-else>{{hot[3].fee}}</span>
                                        <span style="font-weight:300;">{{hot[3].creatime_text}}</span>
                                </div>
                            </div>
                            <div class="hover_jia">
                                <div class="one"><div style="background-color: #ccc;">5</div><span>{{hot[4].name}}</span></div>
                                <div class="two">
                                        <span v-if="hot[4].fee>=10000">{{(hot[0].fee)/10000}}</span>
                                        <span v-else>{{hot[4].fee}}</span>
                                        <span style="font-weight:300;">{{hot[4].creatime_text}}</span>
                                </div>
                            </div>

                        </div>
                    <!-- </a> -->
                </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            hot:[]
        }
    },
     mounted() {
        let id = this.$route.query.id
        // console.log(id)
        this.$api.hotnews(id)
                .then(res => {
                        // console.log(321)
                        console.log(res)
                        this.hot = res.data
                        
                })
      
            }
}
</script>

<style scoped>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        #hover_right{width: 100%;}
       .hover_cheng{
           background-color:#1a7fc3;
           width: 100%;
           padding: 10px;
           line-height: 30px;
       }
       a{
           color: #fff;
       }
       .hover_cheng>p{
               display: flex;
               justify-content: space-between;
       }

       .hover_pro{
           text-decoration: none;
           color: black;
       }

       .hover_cheng>p{
           color: #fff;
           display: flex;
           align-items: center;
           justify-content: space-around;
           font-size: 16px;
       }
       .hover_cheng span{
               display: flex;
               align-items: center;
           margin-left: 30px;
           font-size: 14px;
       }
       .hover_cheng img{
           width: 15px;
       }
       .hover_more{
           width: 100%;
           background-color: #fff;
           padding: 15px;
       }
       .hover_zhao{
           width: 200px;
       }
       .hover_more img{
          width: 100%;
       }
       .hover_more span{
           font-size: 14px;
       }
       .hover_jia{
         /*  display: flex;
           justify-content: space-between; */
           margin-bottom: 10px;
           border-bottom: 1px solid #f5f5f5;
           padding: 10px 5px;
       }
       .hover_jia>div:nth-child(2) span:nth-child(1){
           color: #FA6B75;
           font-size: 18px;
           font-weight: bold;
       }
        .hover_jia>div:nth-child(2) span:nth-child(2){
            color: #ccc;
            font-size: 13px;
            font-weight: bold;
        }
        .one{
                display: flex;
                padding: 5px 0;
        }
        .one>div{
                width: 20px;
                height: 20px;

                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        .one>span{
                padding-left: 10px;
        }
        .two{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
        }
</style>
