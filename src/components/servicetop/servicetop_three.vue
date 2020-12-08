<template>
    <div id="serviceTopThree">
        <div id="topAll">
            <div class="topLeft"></div>
            <div class="topRight">
                <div class="topHeader">
                    <p>一种下料机</p>
                    <p><span>更新时间：2020-03-06 &nbsp;17:29:03</span><span>专利号：201410369182X&nbsp;<span>复制</span></span></p>
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
    #topAll{
        width: 1200px; 
        height: 520px;
        margin: 0 auto;
        /* background: pink; */
        padding: 20px;
        display: flex;
    }
    .topLeft{
        flex: 1.2;
        background: orange;
    }
    .topRight{
        flex: 3;
        /* background: #ddd; */
        padding: 11px 20px 0 35px;
    }
    .topHeader>p:nth-child(1){
        font-size: 22px;
        letter-spacing: 2px;
        color: #2f2f2f;
    }
    .topHeader>p:nth-child(2){
        padding-bottom: 64px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        margin: 10px 0;
    }
    .topHeader>p:nth-child(2)>span{
        display: inline-block;
        padding: 1px 20px 1px 0;
        font-size: 11px;
        color: #838a92;
        /* display: flex; */
    }
    .topHeader>p:nth-child(2)>span:nth-child(1){
        border-right: 1px solid#838a92;
        margin-right: 10px;
    }
    .topHeader>p:nth-child(2)>span:nth-child(2)>span{
        display: inline-block;
        width: 40px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        /* display: flex;
        justify-content: center; */
        align-items: center;
        border: 1px solid #ccc;
    }
</style>