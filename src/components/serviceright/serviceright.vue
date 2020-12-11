<template>
        <div class="serviceright">
                <div class="serviceright_top">
                        <p v-for="(item,index,) in toptext" :key='item.id' @click="text_click(index)" :class="{iscolor:index==iscolor}">{{item.text}}</p>
                </div>
                <div class="serviceright_center">
                        <div class="center_text" :id="txt+index" v-for="(item,index) in toptext">
                                <p v-show="item.nub !=1"><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>{{item.text}}</span></p>
                                <img :src="item.img" alt=""v-show="item.nub !=1">
                                 <div><v-process  v-show="item.nub==1"></v-process></div>
                        </div>

                </div>
        </div>
</template>
<script>
        import process from './serviceright_process.vue'
        export default{
                data(){
                        return{
                                txt:'text_',

                        }
                },
                props:{
                        iscolor:0,
                        toptext:''
                },
                methods:{
                        text_click(porp){
                                console.log(porp)
                                this.iscolor = porp
                                this.$el.querySelector('#text_'+porp).scrollIntoView()
                }
             },
             components:{
                     'v-process':process
             }
        }
</script>

<style>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        .serviceright{width: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #fff;}
        .serviceright_top{display: flex;padding:20px 15px;}
        .serviceright_top>p{padding: 10px;cursor: pointer;}
        .serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .center_text{padding-bottom:20px ;flex: 1;}
        .center_text>p{display: flex;align-items: center;padding: 10px 20px;}
        .center_text>p>img{width: auto;}
        .center_text>p>span{padding-left: 5px;font-size: 16px;margin: auto 0;}
        .center_text>div{width: 100%;border-radius: 10px;}
        .center_text img{width: 100%;}
        .iscolor{color: #1780C2!important;}
        .center_text img{width: auto;}
</style>
