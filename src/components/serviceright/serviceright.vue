<template>
        <div class="serviceright">
                <div class="serviceright_top">
                        <p v-for="(item,index,) in toptext" :key='item.id' @click="text_click(index)" :class="{iscolor:index==iscolor}" v-html="item"></p>
                </div>
                <div class="serviceright_center">
                        <div class="center_text" :id="txt+index" v-for="(item,index) in right_data">
                                <p><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span v-html="toptext[index]"></span></p>
                                <!-- <img :src="item.img" alt=""> -->
                                <p v-html="item" style="text-indent: 2em;"></p>
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
                                <!-- <img src="" alt=""> -->
                                <div v-for="(item,index) in question">
                                        <p style="font-weight: bold;color: #222;">{{index+1}}、{{item.question}}</p>
                                        <p>{{item.answer}}</p>
                                </div>
                        </div>
                        <div class="center_text" :id="txt+(right_data.length+1)">
                                <p ><img src="../../../static/img/service/serviceright_jiantou.png" alt=""><span>典型案例</span></p>
                                <div v-html="advantage"></div>
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
                                txt:'text_',
                                 iscolor:0,
                        }
                },
                props:{
                        toptext:'',
                        right_data:'',
                        question:''
                },
                mounted() {
                        this.$api.severproblem()
                        .then(res=>{
                               this.advantage = res.data.advantage
                        })
                        .catch(err => {
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
        .serviceright{width: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #fff;}
        .serviceright_top{display: flex;padding:20px 15px;}
        .serviceright_top>p{padding: 10px;cursor: pointer;}
        .serviceright_center{flex: 1;display: flex;flex-direction: column;}
        .center_text{padding:10px 20px ;flex: 1;}
        .center_text>p,.center_text>div{
                padding-bottom: 10px;
        }
        .center_text>div>p:nth-child(1){
                text-indent: 1em;
        }
        .center_text>div>p:nth-child(2){
                text-indent: 3em;
                font-size: 15px;
        }
        .center_text>div>p>img{
                height: 350px;
        }
        .center_text>p>span{padding-left: 5px;font-size: 16px;margin: auto 0;width: 50%;font-weight: bold;}
        .center_text>div{width: 100%;border-radius: 10px;}
        .center_text img{width: 100%;}
        .iscolor{color: #1780C2!important;}
        .center_text img{width: auto;}
</style>
