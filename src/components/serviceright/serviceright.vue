<template>
        <div class="serviceright">
                <div class="serviceright_top">
                        <p v-for="(item,index,) in toptext" :key='item.id' @click="text_click(index)" :class="{iscolor:index==iscolor}" v-html="item"></p>
                </div>
                <div class="serviceright_center">
                        <div class="center_text" :id="txt+index" v-for="(item,index) in right_data">
                                <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span v-html="toptext[index]"></span></p>
                                <!-- <img :src="item.img" alt=""> -->
                                <p v-html="item"></p>
                                 <!-- <div><v-process  v-show="item.nub==1"></v-process></div> -->
                        </div>
                         <!-- <div class="center_text" id="txt0" >
                                <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>服务优势</span></p>
                               <p v-html="advantage"></p>
                                 <div><v-process  v-show="item.nub==1"></v-process></div>
                        </div>
                        <div class="center_text" id="txt1" >
                                <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>服务流程</span></p>
                                <img :src="advantage" alt="">
                                 <div><v-process  v-show="item.nub==1"></v-process></div>
                        </div> -->
                        <div class="center_text" :id="txt+(right_data.length)">
                                <p ><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>常见问题</span></p>
                                <img src="" alt="">
                                <p v-for="(item,index) in question"><span>问题：{{item.question}}</span><span>回复：{{item.answer}}</span></p>
                                 <!-- <div><v-process  v-show="item.nub==1"></v-process></div> -->
                        </div>
                        <div class="center_text" :id="txt+(right_data.length+1)">
                                <p ><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>典型案例</span></p>
                                <img src="" alt="">
                                 <!-- <div><v-process  v-show="item.nub==1"></v-process></div> -->
                        </div>
                </div>
        </div>
</template>
<script>
        import process from './serviceright_process.vue'
        export default{
                data(){
                        return{
                                advantage:'',
                                question:'',
                                txt:'text_',
                                 iscolor:0,
                        }
                },
                props:{
                        toptext:'',
                        right_data:''
                },
                mounted() {
                        this.$api.severproblem()
                        .then(res=>{
                                console.log(res)
                               this.advantage = res.data.advantage
                               this.question = res.data.question
                        })
                },
                methods:{
                        text_click(porp){
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
        .center_text>p>span{padding-left: 5px;font-size: 16px;margin: auto 0;width: 50%;}
        .center_text>div{width: 100%;border-radius: 10px;}
        .center_text img{width: 100%;}
        .iscolor{color: #1780C2!important;}
        .center_text img{width: auto;}
        .center_text>p:nth-child(2) img{
                width: 100%;
                height: 350px;
        }
</style>
