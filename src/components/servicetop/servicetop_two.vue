<template>
        <div id="serviceTop">
                <div class="topAll">
                        <div class="left">
                                <img src="" alt="">
                        </div>
                        <div class="right">
                                <div class="rHeader">实用新型专利申请</div>
                                <div class="rHeadercont">实用新型专利又称小发明或小专利，是对通常是指对产品的形状、构造或者结合其所提出的适于实用的新的技术方案。授权周期短，实用性强。</div>
                                <div class="rServiceType">
                                        <span>服务类型：</span>
                                        <span>标准</span>
                                        <span>授权保险</span>
                                        <span class="rightCommon">?</span>
                                </div>
                                <div class="costSlow">
                                        <span>费用减缓：</span>
                                        <span>减缓85%</span>
                                        <span>减缓70%</span>
                                        <span>无减缓</span>
                                        <span class="rightCommon">?</span>
                                </div>
                                <p class="complete">
                                        <span></span>
                                        <span>完善更多专利信息，可尽快安排技术专家重新撰写</span>
                                        <span>点击完善</span>
                                </p>
                                <div class="rBottom">
                                        <div class="btoCostOne">
                                                <div class="btoOneLeft">
                                                        <span>服务费用：</span>
                                                        <span>￥1999</span>
                                                </div>
                                                <div class="btoOneRight">
                                                        <input type="checkbox">
                                                        <span>官费自缴</span>
                                                        <span class="rightCommon">?</span>
                                                </div>
                                        </div>
                                        <div class="btoCostTwo">
                                                <span>国知局费用：</span>
                                                <span>￥75</span>
                                                <span>（实用新型：申请费：￥75）</span>
                                        </div>
                                        <div class="btoCostAll">
                                                <span>费用合计：</span>
                                                <span>￥2074</span>
                                        </div>
                                        <div class="rfooter">
                                                <div class="rfooterLeft">
                                                        <div class="num">
                                                                <div>1</div>
                                                                <div>
                                                                        <span>+</span>
                                                                        <span>-</span>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="car">
                                                                <div>加入购物车</div>
                                                                <div>
                                                                        <span>---</span><span></span><span>---</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="rfooterRight">
                                                        <img src="" alt="">
                                                        <span>咨询客服</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
</script>

<style>
        *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }
        #serviceTop{
                width: 1200px;
                margin: 0 auto;
        }
        .topAll{
                width: 100%;
                height: 520px;
                /* background: pink; */
                padding: 20px;
                display: flex;
        }
        .left{
                flex: 1.2;
                background: orange;
        }
        .right{
                flex: 3;
                /* background: #ddd; */
                padding: 11px 20px 0 35px;
        }
        .right>.rHeader{
                font-size: 22px;
                letter-spacing: 2px;
                color: #2f2f2f;
        }
        .right>.rHeadercont{
                padding:  0 10px;
                font-size: 12px;
                line-height: 26px;
                background: #f3f6ff;
                letter-spacing: 1px;
                margin: 10px 0 17px 0;
                color: #8a8b8f;
        }
        .rServiceType,.costSlow{
                width: 100%;
                height: 40px;
                font-size: 13px;
                color: #8d8d8d;
                display: flex;
                align-items: center;
        }
        .costSlow{
                margin-top: 16px;
        }
        .rServiceType>span,.costSlow>span{
                display: inline-block;
                margin-right: 20px;
                height: 100%;  
        }
        .rServiceType>span:nth-child(2),.rServiceType>span:nth-child(3),.costSlow>span:nth-child(2),.costSlow>span:nth-child(3),.costSlow>span:nth-child(4){
                text-align: center;
                line-height: 40px;
                width: 120px;
                font-size: 14px;
                border-radius: 2px;
        }
        .rServiceType>span:nth-child(2){
                background: #187fc4;
                color: #fefeff;
        }
        .rServiceType>span:nth-child(3),.costSlow>span:nth-child(2){
                border: 1px solid #187fc4;
                color: #187fc4;
        }
        .right .rightCommon{
                width: 23px;
                height: 23px;
                border-radius: 50%;
                border: 2px solid #187fc4;
                color: #187fc4;
                font-size: 12px;
                text-align: center;
                line-height: 23px;
                font-weight: 600;
        }
        .costSlow>span:nth-child(1),.rServiceType>span:nth-child(1){
                line-height: 40px;
        }
        .costSlow>span:nth-child(3),.costSlow>span:nth-child(4){
                border: 1px solid #989898;
                color: #989898;
        }
        .complete{
                height:60px;
                display: flex;
                flex-direction: row;
                align-items: center;
        }
        .complete>span{
                font-size: 13px;
        }
        .complete>span:nth-child(1){
                width: 15px;
                height: 21px;
                background: cornsilk;
                margin-right: 7px;
        }
        .complete>span:nth-child(2){
                 color: #747474;
        }
        .complete>span:nth-child(3){
                color:#177dc5;
                margin-left: 15px;
        }       
        .rBottom{
                height: 205px;
                width: 100%;
                border: 1px solid #187fc4;
                padding: 17px 26px 0 26px;
                color: #676767;
                font-size: 14px;
                background: #f3f6ff;
                
        }    
        .rBottom>.btoCostOne{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 32px;
                
                /* text-indent: 0.1em; */
        }
        .rBottom>.btoCostOne span{
                display: inline-block;
        }
        .rBottom>.btoCostOne>.btoOneLeft>span:nth-child(1){
                text-indent: 14px;
        }
        .rBottom>.btoCostOne>.btoOneLeft>span:nth-child(2){
                color: #fe0000;
        }
        .rBottom>.btoCostOne>.btoOneRight{
                display: flex;
                width: 98px;
                height: 22px;
                justify-content: center;
                align-items: center;
        }
        .rBottom>.btoCostOne>.btoOneRight>span{
                margin-left: 2px;
        }
        .rBottom>.btoCostOne>.btoOneRight>input{
                height: 13;
                width: 13px;
                border-radius: 2px;
        }
        .rBottom>.btoCostTwo{
                margin-bottom:16px;
        }
        .rBottom>.btoCostTwo>span{
                display: inline-block;
        }
        .rBottom>.btoCostTwo>span:nth-child(2){
                 color: #fe0000;
                 margin-right: 26px;
        }
        .rBottom>.btoCostAll>span:nth-child(1){
                display: inline-block;
                text-indent: 14px;
        }
        .rBottom>.btoCostAll{
                margin-bottom: 20px;
        }
        .rBottom>.btoCostAll>span:nth-child(2){
                color: #fe0000;
        }
        .rightCommon{
                display: flex!important;;
                justify-content: center;
                align-items: center;
        }
        .rfooter{
                display: flex;
        }
        .rfooter>.rfooterLeft{
                width: 210px;
                height: 58px;
                border: 2px solid #187fc4;
                border-radius: 4px;
                display: flex;
                background: #187fc4;
        }
        .rfooter>.rfooterLeft>.num{
                display: flex;
                width: 73px;
               border-radius: 4px;
               background: #187fc4;
        }
        .rfooter>.rfooterLeft>.num>div:nth-child(1){
                width: 40px;
                border-right: 2px solid #187fc4;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #187fc4;
                background: #fff;
                
        }
        .rfooter>.rfooterLeft>.num>div:nth-child(2){
                 background: #fff;
                border-right: 2px solid #187fc4;
                border-bottom-right-radius: 4px;
                border-top-right-radius:4px;
        }
        .rfooter>.rfooterLeft>.num>div:nth-child(2)>span:nth-child(1){
                border-bottom: 2px solid #187fc4;
                border-top-right-radius:4px;
                overflow: hidden;
                background: #fff;
        }
        .rfooter>.rfooterLeft>.num>div:nth-child(2)>span{
                width: 30px;
                height: 27px;
                color:  #187fc4;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        .rfooter>.rfooterLeft>.car{
                width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                color: #fdfffe;
                background: #187fc4;
        }
        
        .rfooter>.rfooterRight{
                width: 172px;
                height: 58px;
                background: #ff7046;
                border-radius: 4px;
                margin-left: 10px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                font-size: 16px;
                color: #feffff;
        }
</style>
