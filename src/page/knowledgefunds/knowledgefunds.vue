<template>
    <div>
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <!-- 图片 -->
        <div class="k_title_image"></div>
        <!-- 设立目的 -->
        <div class="purposeofestablishment container">
            <v-comtitle :title="title_all[0]" :inform_title='title_text_all[0]' :color='title_color' :background_img_url='title_bg_url[0]'></v-comtitle>
            <div class="flex-container">
                <div class="flex-item basic_1">
                    <img src="../../../static/img/knowledgefunds/change.png">
                    <h4>设立目的</h4>
                    <p>解决科技型中心企业缺少实物资产抵押而导致的融资难问题</p>
                </div>
                <div class="flex-item basic_2">
                    <img src="../../../static/img/knowledgefunds/servicescope.png">
                    <h4>服务范围</h4>
                    <p>产业落地区域拥有核心知识产权的科技型中小企业</p>
                </div>
                <div class="flex-item basic_3">
                    <img src="../../../static/img/knowledgefunds/support.png">
                    <h4>支持方式</h4>
                    <p>为银行等金融机构的贷款损失提供赔偿，最高赔偿比例60%</p>
                </div> 
            </div>
                

        </div>
        <!-- 设立原则 -->
        <div class="eatablishmentprinciple container">
            <v-comtitle :title="title_all[1]" :inform_title='title_text_all[1]' :color='title_color' :background_img_url='title_bg_url[1]'></v-comtitle>
            <div class="eatablishmentprinciple_1 flexcontainer">
                <div class=" flexitem2">
                    <div class="  flexitem4 flexitem4_t">
                        <div class="flexitem flexitem4_tl">
                            <div>
                                <img src="../../../static/img/knowledgefunds/government.png">
                                <h4>政府引导</h4>
                                <p>政府出台知识产权质押融资补贴。政府牵头设立知识产权质押融资风险池，用于补偿金融机构坏账损失。</p>
                            </div>
                        </div>
                        <div class="flexitem flexitem4_tr">
                            <div>
                                <img src="../../../static/img/knowledgefunds/area.png">
                                <h4>区域落地</h4>
                                <p>根据区域相关政策，调整相关指标，制定相应的地方知贷宝产品方案，形成区域特色。</p>    
                            </div>
                        </div>
                    </div>
                    <div class="flexitem4 flexitem4_b">
                        <div class="flexitem flexitem4_bl">
                            <div>
                                <img src="../../../static/img/knowledgefunds/market.png">
                                <h4>市场运作</h4>
                                <p>金融机构、中知在线及服务机构根据自身标准独立立项、审批，不受干预，形成市场化、可持续的运作模式。</p>

                            </div>
                        </div>
                        <div class="flexitem flexitem4_br">
                            <div>
                                <img src="../../../static/img/knowledgefunds/professionalmanagement.png">
                                <h4>专业管理</h4>
                                <p>中知在线、金融机构、服务机构等联合组成知贷宝运营方，负责产品的宣传、推广和日常管理等。</p>     
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="flexitem flexitem3">
                    <div>
                        <img src="../../../static/img/knowledgefunds/risk-sharing.png">
                        <h4>风险共担</h4>
                        <p>根据区域相关政策，贷款风险由政府、银行、担保、中知在线、运营机构等多方共同承担。</p>
                    </div>

                </div>
            </div>
        </div>
        <!-- 我们的服务 -->
        <div class="ourservices container">
            <v-comtitle :title="title_all[2]" :inform_title='title_text_all[2]' :color='title_color' :background_img_url='title_bg_url[2]'></v-comtitle>
            <div class="ourservices_1">
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/survey.png" alt="">
                    <h4>IP筛选与尽职调查</h4>
                </div>
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/design.png" alt="">
                    <h4>标准化交易结构设计</h4>
                </div>
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/assessment.png" alt="">
                    <h4>知识产权价值评估</h4>
                </div>
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/generations.png" alt="">
                    <h4>知识产权事务代办</h4>
                </div>
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/monitoring.png" alt="">
                    <h4>知识产权跟踪监控</h4>
                </div>
                <div class="flex3-item">
                    <img src="../../../static/img/knowledgefunds/serviceagencies.png" alt="">
                    <h4>牵头协调服务机构</h4>
                </div>
                
                
            </div>
        </div>
        <!-- 我们的愿景 -->
        <div class="ourvision ">
            <v-comtitle :title="title_all[3]" :inform_title='title_text_all[3]' :color='title_color1' :background_img_url='title_bg_url[3]'></v-comtitle>            <!-- <img class="ktitle" src="../../../static/img/knowledgepledge/Investment_field.png" alt=""> -->
            <div class="ourvision_1 container">
                <div class="">
                    <p>伊甸知识产权证券化平台优势资源，专注知识产权金融创新</p>
                    <p>推动知识产权证券化多元标准发展，助力科创中小企业腾飞</p>
                </div>
                
            </div>
        </div>
        <v-combotttom></v-combotttom>
    </div>
</template>
<script>
import knowledgefundsVue from '../knowledgefunds/knowledgefunds.vue'
export default {
    name:'knowledgefunds',
    data(){
        return{
            // comtitle组件传值所需
            title_color:'#1a82c2',
            title_color1:'#fff',
            title_all:["设立目的",'设立原则','我们的服务','我们的愿景'],
            title_text_all:[,,,,],
            title_bg_url:['../../../static/img/knowledgefunds/purposeofestablishment.png',
                          '../../../static/img/knowledgefunds/eatablishmentprinciple.png',
                          '../../../static/img/knowledgefunds/ourservices.png',
                          '../../../static/img/knowledgefunds/eatablishmentprinciple.png',
                        ],
            msg:'这是测试内容'
              }
   },
}
</script>
<style scoped>
.container{
      width: 1200px;
      margin: 0 auto;
}
.k_title_image{
    background: url(../../../static/img/knowledgefunds/k_title.png);
    width: 100%;  
    height: 500px;
}
.ktitle{
    display: block;
    margin: -23px auto 70px;
}
/* 设立目的 */
.purposeofestablishment{
    margin-top: 80px; 
    position: relative;
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
    box-shadow: 0 0 5px 3px #bdd1e8;
    flex: 1;
    padding: 20px;
    text-align: center;
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
    color: #177ec4;
    font-size: 22px;
    line-height: 80px;
}
.flex-item p{
    color: #989898;
    font-size: 16px;
    line-height: 29px;
    text-indent: 2em;
}
    


/* 设立原则 */
.eatablishmentprinciple{
    margin-top: 110px;
}
.flexcontainer{
    width: 100%;   
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
}
.flexitem3{
    height: 490px;
    flex: 1;
}
.flexitem2{
    flex: 2;
    display: flex;
    flex-direction: column;
}
.flexitem4{
    display: flex;
}
.flexitem4_t{
    flex: 4;
    display: flex;
}
.flexitem4_b{
    flex: 5;
    display: flex;
}
.flexitem4_tl{
    flex: 4;
}
.flexitem4_tr{
    flex: 5;
}
.flexitem4_bl{
    flex: 5;
}
.flexitem4_br{
    flex: 4;
}
.flexitem {
    box-shadow: 0 0 5px 3px #bdd1e8;
    margin: 10px; 
    text-align: left;
    position: relative;
}
.flexitem div{
    padding-left: 30px;
    padding-right: 30px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}
.flexitem img{
    margin-bottom: 10px;
}
.flexitem h4{
    font-size: 24px;
    color: #6d6d6d;
    line-height: 40px;
}
.flexitem p{
    font-size: 12px;
    color: #9d9d9d;
    line-height: 20px;
}

/* 我们的服务 */
.ourservices{
    margin-top: 120px;
}
.ourservices_1{
    display: flex;
    justify-content: space-around;
    margin-top: 14px;
}
.flex3-item{
    flex: 1;
    width: 166px;
    text-align: center;  
}
.flex3-item img{
    margin: 40px auto;
}
.flex3-item h4{
    color:#1a73d5;
    font-size: 20px;
}



/* 我们的愿景 */
.ourvision{
    padding-top: 36px;
    background: url(../../../static/img/knowledgefunds/bg-ourvision.png) 0 0 no-repeat;
    height: 483px;
    margin-top: 98px;
}
.ourvision_1 {
    height: 202px;
    border-radius: 6px;
    background: url(../../../static/img/knowledgefunds/ourvision.png);
    background-position: center;
    margin: 54px auto 0;    
}
.ourvision_1 div{
    font-size: 20px;
    color: #989898;
    padding:  76px;
    letter-spacing: 2px;
    line-height: 27px;
}


</style>