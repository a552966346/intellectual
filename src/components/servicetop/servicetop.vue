<template>
        <div id="servicetop">
                <div class="topall">
                        <div class="topall_img">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=192655212,4161260789&fm=26&gp=0.jpg">
                        </div>
                        <div class="topall_text">
                                <div class="text_top">
                                        <h2>{{qiye}}</h2>
                                        <p>指导和帮助企业进一步强化知识产权创造、运用、管理和保护，增强自主创新能力。</p>
                                </div>
                                <div class="topall_center">
                                        <p>服务费：<span>￥1000</span></p>
                                        <div><p>联系电话：</p><input type="tel"></div>
                                        <div><p>联系人：</p><input type="text"></div>
                                </div>
                                <div class="topall_bottom">
                                        <div class="bottom_left">
                                                <span>1</span>
                                                <span><button>+</button><button>-</button></span>
                                                <button>加入购物车</button>
                                        </div>
                                        <div class="bottom_right">
                                                <button>
                                                        <img src="" alt="">
                                                        <span>咨询客服</span>
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default{
                data(){
                        return{
                                qiye:'企业知识产贯标'
                        }
                }
        }
</script>

<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;}
        #servicetop{
               width: 1200px;
               background-color: #fff;
               box-shadow: 1px 1px 10px 2px #ccc;
        }
        .topall{
                display: flex;
                width: 100%;
        }
        .topall_img{
                flex: 2;
                padding: 20px;
        }
        .topall_img>img{
                width: 100%;
                height: 100%;
        }
        .topall_text{
                flex: 3;
                padding: 20px;
        }
        .text_top>h2{
                padding: 5px;
        }
         .text_top>p{
                 padding: 10px;
                 background-color: #F3F6FF;
         }
         .topall_center{
                 padding: 5px;
                 margin: 20px 0;
         }
         .topall_center>p{
                 background: url(../../../static/img/index/index_enterprise_bg.jpg)no-repeat;
                 background-size: cover;
                 font-size: 15px;
                 color: #ccc;
                 padding: 15px 5px;
         }
          .topall_center>p>span{
                padding-left: 20px;
                font-size: 20px;
                color:#D94A4B ;
          }
           .topall_center>div{
                   width: 100%;
                   padding: 10px;
                   display: flex;
           }
          .topall_center>div>p{
                  font-size: 14px;
                  color: #ccc;
                  width: 10%;
          }
          .topall_center input{
                  margin-left: 20px;
                  padding: 5px;
                  height: 30px;
                  width: 200px;
                  outline: none;
          }
          .topall_bottom{
                  display: flex;
                  margin: 10px 0;
          }
          .bottom_left{
                  display: flex;
                     padding: 2px;
                  background-color: #1780C2;
                  align-items: center;
                  height: 60px;
                width: 170px;
                border-radius: 5px;
                overflow: hidden;
          }
          .bottom_left>span:nth-child(1){
                 padding: 18px 8px;
                  font-size: 15px;
                  background-color: #fff;
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
          }
           .bottom_left>span:nth-child(2){
                   display: flex;
                   flex-direction: column;
                   margin-left: 2px;
           }
           .bottom_left span button:nth-child(1){
                   border-top-right-radius: 2px;
           }
           .bottom_left span button:nth-child(2){
                   border-bottom-right-radius: 2px;
           }
         .bottom_left span button{
                 padding: 6px;
                 border: none;
                 background-color: #fff;
                 outline: none;
         }
           .bottom_left span button:nth-child(2){
                   margin-top:2px ;
           }
          .bottom_left>button{
                  background-color: #1780C2;
                  color: #fff;
                  font-size: 15px;
                  border: none;
                  padding: 10px 20px;
                   outline: none;
          }
          .bottom_right{
                  margin-left: 20px;
                  padding: 5px;
                  height: 60px;
                  width: 165px;
                  background-color: #FF7046;
                  border-radius: 5px;
                  overflow: hidden;
          }
          .bottom_right>button{
                background-color: #FF7046;
                  height: 50px;
                  padding: 10px 20px;
                  border: none;
                  color: #fff;
                   outline: none;
          }
</style>
