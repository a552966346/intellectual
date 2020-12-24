<template>
    <div>
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <div class="newsint_con">
            <div class="newsint_title">
                <h3>【活动通知】中小企业和创业者：“创客北京2020”创新创业大赛，报名启动！</h3>
                <div>
                    <span><img src="../../../static/img/news/newsint_eye.png" alt="">阅读量：743</span>
                    <span><img src="../../../static/img/news/newsint_ri.png" alt="">时间：2020.07.08</span>
                </div>
            </div>
            <div class="newsint_txt">
                <p>“创客北京2020”创新创业大赛启动啦！此次大赛分为企业组和创客组，设置了多种赛事，获奖项目可以获得奖金、证书和奖杯还有更多优厚福利哦~心动不如行动，快来报名吧！</p>
                <p><br></p>
                <p style="text-align:center;"><img src="https://api.cnipol.com/Uploads/ueditor/image/20200708/5f05a471407e3.jpg" alt=""></p>
                <p><br></p>
                <p>中知在线（WWW.CNIPOL.CON）作为市中小企业公共服务示范平台将开展窗口平台赛事的组织实施工作，对于符合条件的优秀企业项目经过选拔将推荐晋级区级赛区，更有机会亮相市级赛区！</p>
                <p><br></p>
                <p>目前，大赛项目正在火热征集中，报名截止时间至7月31日，欢迎符合条件的优秀企业及创业者积极报名参赛！</p>
                <p><br></p>
                <p><br></p>
                <p><strong><span style="font-size:16px;">注意！！！</span></strong></p>
                <p><span style="font-size:16px;">填写报名资料时：</span></p>
                <p><span style="font-size:16px;">▶报名推荐请选&nbsp;</span><span style="font-size:16px;text-decoration:underline;"><strong>东城区</strong></span></p>
                <p><span style="font-size:16px;">▶联网窗口请选&nbsp;</span><span style="font-size:16px;text-decoration:underline;"><strong>北京知乎科技有限责任公司</strong></span></p>
                <p><br></p>
                <p><br></p>
                <p><br></p>
                <p style="text-align:center;"><strong><span style="font-size:16px;">一、大赛背景</span></strong><span style="font-size: 16px;"><br></span></p>
                <p style="text-indent: 2em;"><span style="font-size: 16px;">为贯彻落实《中央办公厅国务院办公厅关于促进中小企业健康发展的指导意见》精神，按照《工业和信息化部 财政部关于举办2020年“创客中国”中小企业创新创业大赛的通知》（工信部联企业〔2020〕26号）要求，为进一步助力北京市构建高精尖经济结构，推动中小企业双创升级。北京市经济和信息化局和北京市财政局共同举办2020年“创客中国”北京市中小企业创新创业大赛暨“创客北京2020”创新创业大赛。（以下简称“大赛”）。现面向全市中小企业和创业者征集参赛项目,有关事项通知如下：</span></p>
            </div>
            <div class="news_footer">
                <div class="left-box">
                    <div><a href="/Index/show/catid/71/id/1496.html">上一篇：北京市知识产权保险与金融对接会成功举行</a></div>
                    <div><a href="/Index/show/catid/71/id/1472.html">下一篇：2020年中关村知识产金融线上沙龙成功举行</a></div>
                </div>
                <div class="right_box">
                    <span class="fl">分享到：</span>
                </div>
            </div>
        </div>
        <v-combotttom></v-combotttom>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
     mounted() {
        let id = this.$router.query.id
        this.$api.getnews(id)
                .then(res => {
                        console.log(321)
                        console.log(res)
                        
                })
      
            }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.newsint_con{
    width: 100%;
    height: 100%;
    padding: 90px 0 50px;
    background-color: #F6F7FB;
}
.newsint_title{
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #e7eaf3;
    text-align: center;
    line-height: 30px;
    padding-bottom: 30px;
    color: #b3b3b3;
    text-align: center;
    margin-bottom: 40px;
}
.newsint_title div span>img{
    vertical-align: middle;
    width: 18px;
    margin-right: 5px;
}
h3{
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    font-weight: bold;
}
span{
    margin-right: 15px;
}
.newsint_txt{
    width: 1200px;
    margin: 0 auto;
    line-height: 30px;
    padding-bottom: 50px;
    border-bottom: 1px solid #e7eaf3;
    font-size: 14px;
    color: #666;
}
.newsint_txt p{
    font-size: 16px;
    color: #666;
    text-indent: 2em;
}
.news_footer{
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
    color: #666;
}
.left-box>div{
    padding-bottom: 10px;
}
</style>