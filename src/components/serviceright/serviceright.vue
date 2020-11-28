<template>
        <div class="serviceright">
                <div class="serviceright_top">
                        <p v-for="(item,index) in toptext" :key='item.id' @click="click_text(index)" :class="{iscolor:index==iscolor}">{{item.text}}</p>
                </div>
                <div class="serviceright_center">
                        <div class="center_text" id="text_0">
                                <p><img src="" alt=""><span>高企认定好处</span></p>
                                <img src="../../../static/img/index/about_right_two.png" alt="">
                        </div>
                        <div class="center_text" id="text_1">
                                <img src="../../../static/img/index/about_right_one.png" alt="">
                        </div>
                       <v-comtitle title="认定条件"></v-comtitle>
                        <div class="center_text" id="text_2">
                                <img src="../../../static/img/index/about_right_three.png" alt="">
                        </div>
                        <div class="center_text" id="text_3">
                                 <p><img src="" alt=""><span>认定条件</span></p>
                                <img src="../../../static/img/index/index_enterprise_bg.jpg" alt="">
                        </div>
                        <v-comtitle title="常见问题"></v-comtitle>
                        <div class="center_text" id="text_4">
                                <p><img src="" alt=""><span>常见问题</span></p>
                                <img src="../../../static/img/common/white_logo.png" alt="">
                        </div>
                </div>
        </div>
</template>
<script>
        export default{
                data(){
                        return{
                                toptext:[{text:'高企认定好处',id:1},{text:'服务流程',id:2},{text:'认定条件',id:3},{text:'申请资料',id:4},{text:'常见问题',id:5},{text:'典型案列',id:6}],
                                iscolor:0
                        }
                },
                methods:{
                        click_text(s){
                                this.iscolor = s
                                if(s==3||s==5){s -= 2;}
                                this.$el.querySelector('#text_'+s).scrollIntoView()
                        }
                }
        }
</script>

<style>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        .serviceright{width: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #fff;}
        .serviceright_top{display: flex;padding-bottom:20px ;padding-left: 10px;}
        .serviceright_top>p{padding: 10px;}
        .serviceright_center{flex: 1;}
        .center_text{padding-bottom:20px ;}
        .center_text>p{display: flex;align-items: center;padding: 10px;}
         .center_text>p>img{width: 10px;}
         .center_text>p>span{padding-left: 5px;font-size: 16px;}
         .center_text img{width: 100%;}
         .iscolor{color: #1780C2!important;}
</style>
