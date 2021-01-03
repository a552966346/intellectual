<template>
    <div>
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <!-- 图片 -->
        <div class="k_title_image"></div>
        <!-- 产品推荐 -->
        <div class="pro_rem container">
            <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color' :background_img_url='title_bg_url[0]'></v-comtitle>
            <!-- <img class="ktitle" src="../../../static/img/knowledgepledge/Product_recommendation.png" alt=""> -->
            <div class="pro_rem_1 ">
                <img src="../../../static/img/knowledgepledge/pro_rec_2.png" alt="">
                <h2>{{konwlist.name}}</h2>
                <p>{{konwlist.desc}}</p>
                <ul class="pro_rem_2">
                    <li><div></div>区域：{{konwlist.province_text+konwlist.city_text}}</li>
                    <li><div></div>质押物：{{konwlist.hypothecate}}</li>
                    <li><div></div>产品模式：{{konwlist.pattern}}</li>                    
                </ul>
                <ul class="pro_rem_2">
                    <li><div></div>期限：{{konwlist.deadline}}</li>
                    <li><div></div>额度：{{konwlist.quota}}</li>
                    <li><div></div>银行：{{konwlist.bank_text}}</li>
                </ul>
            </div>
            <div class="button">
                <el-button type="primary" style="width:154px">立即申请</el-button>   <el-button type="primary " plain style="width:154px" @click="kefu">在线咨询</el-button>     
            </div>
        </div>
        <!-- 基本条件 -->
        <div class="basic container">
            <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color' :background_img_url='title_bg_url[1]'></v-comtitle>
            <div class="flex-container">
                <div class="flex-item basic_1">
                    <img src="../../../static/img/knowledgepledge/basic_1.png">
                    <h4>财务状况良好</h4>
                    <p>财务健康，有一定的收入和利润<br>   （年收入一千万以上，净利润300万以上特别优质企业可放宽标准）</p>
                </div>
                <div class="flex-item basic_2">
                    <img src="../../../static/img/knowledgepledge/basic_2.png">
                    <h4>拥有核心知识产权</h4>
                    <p>拥有五种知识产权中的一项或者多项应用于企业主营业务中的知识产权已经具有盈利能力</p>
                </div>
                <div class="flex-item basic_3">
                    <img src="../../../static/img/knowledgepledge/basic_3.png">
                    <h4>额度100至5000万</h4>
                    <p>成本低，可申请政府补贴，根据不同地区情况最高补贴成本50%</p>
                </div> 
            </div>
        </div>
        <!-- 服务流程 -->
        <div class="application container">
            <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color' :background_img_url='title_bg_url[2]'></v-comtitle>
            <div class="application_1 ">
                <img src="../../../static/img/knowledgepledge/application_1.png" alt="">
            </div>
        </div>
        <!-- 投资领域 -->
        <div class="investment ">
            <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color1' :background_img_url='title_bg_url[3]'></v-comtitle>            <!-- <img class="ktitle" src="../../../static/img/knowledgepledge/Investment_field.png" alt=""> -->
            <div class="investment_1 container">
                <div class="investment1_item">
                    <img src="../../../static/img/knowledgepledge/in_1.png" alt="">
                    <div>
                        <h4>生物医药</h4>
                        <p>生物医药产业由生物技术产业与医药产业共同组成。制药产业与生物医学工程产业是现代医药产业的两大支柱。</p>
                    </div>
                   
                </div>
                <div class="investment1_item">
                    <img src="../../../static/img/knowledgepledge/in_2.png" alt="">
                    <div>
                        <h4>节能环保</h4>
                        <p>节能环保产业涉及节能环保技术装备、产品和服务等，产业链长，关联度大，吸纳就业能力强，对经济增长拉动作用明显。</p>
                    </div>
                </div>
                <div class="investment1_item">
                    <img src="../../../static/img/knowledgepledge/in_3.png" alt="">
                    <div>
                        <h4>智能制造</h4>
                        <p>智能制造，源于人工智能的研究。一般认为智能是知识和智力的总和，前者是智能的基础，后者是指获取和运用知识求解的能力。</p>
                    </div>
                </div>
                <div class="investment1_item">
                    <img src="../../../static/img/knowledgepledge/in_4.png" alt="">
                    <div>
                        <h4>信息技术</h4>
                        <p>信息技术是用于管理和处理信息所采用的各种技术的总称。主要是应用计算机科学技术和通信技术来设计、开发、安装和实施信息系统及应用软件。</p>
                    </div>
                </div>
            </div>
        </div>
        <v-combotttom></v-combotttom>
         <!-- 客服弹窗 -->
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                        <v-customer @shows="shows"></v-customer>
                </div>
    </div>
</template>·    
<script>
import customer from '@/components/customers/customer_services.vue'//客服弹窗
import knowledgepledgeVue from '../knowledgepledge/knowledgepledge.vue'
export default {
    name:'knowledgepledge',
    data(){
        return{
            // comtitle组件传值所需
            id:'',
            title_color:'#1a82c2',
            title_color1:'#fff',
            title_all:["产品推荐",'基本条件','服务流程','投资领域'],
            title_text_all:[,,,'海量投资领域推荐'],
            title_bg_url:['../../../static/img/knowledgepledge/Product_recommendation.png',
                            '../../../static/img/knowledgepledge/Basic_conditions.png',
                            '../../../static/img/knowledgepledge/Application_process.png',
                            '../../../static/img/knowledgepledge/Investment_field.png',
                        ],
            konwlist:[],
            isshow:false,
            }
           
   },
   beforeMount(id){
       this.konwlist = [];
        this.$api.getfinancialdetiles(1)
        .then(res=>{
            console.log(res)
            this.konwlist = res.data
        })
	.catch(res=>{
	        console.log(res)
	})
   },
   methods:{
       //客服弹框隐藏
        shows(){
                this.isshow =false
        },
        kefu(){
            this.isshow =true
        },
   },
   components:{
       'v-customer':customer
   }
}
</script>
<style scoped>
.container{
      width: 1200px;
      margin: 0 auto;
}
.k_title_image{
    background: url(../../../static/img/knowledgepledge/k_title.png);
    width: 100%;  
    height: 500px;
    
}
.ktitle{
    display: block;
    margin: -23px auto 70px;
}
/* 产品推荐 */
.pro_rem{
    margin-top: 80px; 
    position: relative;
}
    
.pro_rem_1{
    height: 450px;
    border-radius: 10px;
    box-shadow: 1px 3px 3px 2px #528fd4;
    padding: 38px 66px; 
    margin-top: 46px;
}
.pro_rem_1 img{
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 20px;
}
.pro_rem_1 h2{
    display: inline-block;
    padding-left: 20px;
    font-size: 26px;
}
.pro_rem_1 p{
    color: #666;
    font-size: 18px;
}
.pro_rem_2{
    color: #666;
    margin-top: 60px;
    width: 280px;
    list-style: none;
    float: left;
}
.pro_rem_2 li{
    height: 60px;
    font-size: 18px;
}
.pro_rem_2 li div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    color: #1366ce;
    display: inline-block;
    border: 2px solid #1366ce;
    margin-right: 25px;
}
.button {
    height: 50px;
    position: absolute;
    bottom: 60px;
    right: 85px;
}
/* 基本条件 */
.basic{
    margin-top: 110px;
}
.flex-container{
    height: 360px;
    width: 100%;   
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
}
.flex-item {
    height: 356px;
    width: 376px;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.16);
    flex: 1;
    padding: 20px;
    text-align: center;
}
.flex-item:hover{
    position: relative;
    top: -5px;

}
.basic_2,
.basic_3 {
    margin-left: 65px;

}
.flex-item img {
    margin: 20px auto;
    display: block;
    width: 100px;
}
.flex-item h4{
    color: #333;
    font-size: 22px;
    line-height: 80px;
}
.flex-item p{
    color: #989898;
    font-size: 16px;
    line-height: 29px;
    text-indent: 2em;
}
/* 服务流程 */
.application{
    margin-top: 120px;

}
.application_1 img{
    display: block;
    margin: 54px auto 0;

}
/* 投资领域 */
.investment{
    padding-top: 36px;
    background-image: url(../../../static/img/knowledgepledge/bg_investment_1.png);
    height: 583px;
    margin-top: 98px;
}
.investment .ktitle{
    margin: -49px auto 0px;;
}
.investment1{
    display: flex;
    justify-content: space-around;
}
.investment1_item{
    flex: 1;
    height: 200px;
    width: 590px;
    background-color: #fffeff;
    margin-bottom: 18px;
    
    float: left;
    padding-left: 34px;
}
.investment1_item:nth-of-type(2n-1){
    margin-right: 18px;
}
.investment1_item img{
    float: right;
    width: 182px;
    margin: 22px 24px;
}
.investment1_item div{
    padding-top: 44px;
}
.investment1_item h4{
    font-size: 18px;
    line-height: 54px;
}
.investment1_item p{
    font-size: 14px;
    color: #989898;
    line-height: 25px;
}

</style>