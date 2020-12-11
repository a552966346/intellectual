<template>
    <div id="serviceTopThree">
        <div id="topAll">
            <div class="topLeft">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=192655212,4161260789&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="topRight">
                <div class="topHeader">
                    <h3>{{title}}</h3>
                    <p><span>更新时间：2020-03-06 &nbsp;17:29:03</span><span>专利号：201410369182X&nbsp;<span>复制</span></span></p>
                </div>
                <div class="topBody">
                        <div class="topBody_lei">
                                <div>
                                        <p>行业分类</p>
                                        <p>农林牧业</p>
                                </div>
                                <div>
                                        <p>应用领域</p>
                                        <p>高技术服务</p>
                                </div>
                                <div>
                                        <p>技术类型</p>
                                        <p>不限</p>
                                </div>

                                <div>
                                        <p>行业分类</p>
                                        <p>不限</p>
                                </div>
                                <div>
                                        <p>行业分类</p>
                                        <p>不限</p>
                                </div>
                        </div>
                        <div class="topBody_money">
                                <img src="" alt=""><span>价格</span>
                                <div class="topBody_money_text">
                                        <h1>面议</h1>
                                        <div>
                                                <span><img src="" alt="">38</span>
                                                <span><img src="" alt="">分享</span>
                                                <span><img src="" alt="">收藏</span>
                                        </div>
                                </div>
                        </div>
                        <div class="topBody_btn">
                                <div class="bottom_left">
                                        <div class="left_left">
                                                <span>{{nub}}</span>
                                                <span><button @click="but1">+</button><button @click="but2">-</button></span>
                                        </div>
                                        <div class="left_but">
                                                <button>加入购物车<p>--<span>></span>--</p></button>
                                        </div>

                                </div>
                                <div class="bottom_right">
                                        <button>
                                                <img src="../../../static/img/service/service_kefu.png" alt="">
                                                <span>咨询客服</span>
                                        </button>
                                </div>
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
                        nub:1
                }
        },
        props:{
                title:''
        }
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #topAll{
         width: 100%;
        padding: 20px;
        display: flex;
        background-color: #fff;
    }
    .topLeft{
        flex: 2;
    }
    .topLeft>img{
            width: 100%;
            height: 80%;
    }
    .topRight{
        flex: 5;
        padding: 11px 20px ;
    }
    .topHeader>p:nth-child(1){
        font-size: 22px;
        letter-spacing: 2px;
        color: #2f2f2f;
    }
    .topHeader>p:nth-child(2){
        padding: 5px 0 40px 0;
        width: 100%;
        border-bottom: 1px solid #ddd;
    }
    .topHeader>p:nth-child(2)>span{
        display: inline-block;
        padding: 1px 20px 1px 0;
        font-size: 11px;
        color: #838a92;
    }
    .topHeader>p:nth-child(2)>span:nth-child(1){
        border-right: 1px solid#838a92;
        margin-right: 10px;
    }
    .topHeader>p:nth-child(2)>span:nth-child(2)>span{
        display: inline-block;
        text-align: center;
        align-items: center;
        border: 1px solid #ccc;
        padding: 1px 5px;
    }
    .topBody{padding: 10px 0;}
    .topBody_lei{display: flex;padding: 20px 0;}
    .topBody_lei>div{flex: 1;border-right: 1px solid #ddd;margin-right: 30px;}
    .topBody_lei>div:last-child{border: none;}
    .topBody_lei>div>p:nth-child(1){
            font-size: 15px;
            color: #aaa;
    }
    .topBody_lei>div>p:nth-child(2){
            font-size: 15px;
            color: #111111;
    }
    .topBody_money{
            padding: 10px 20px;
            background-color:#FFF4F0 ;
    }
    .topBody_money>img{
            width: 20px;
            margin-right: 5px;
    }
    .topBody_money>span{
            color: #EAB0A3;
            font-size: 15px;
    }
    .topBody_money_text{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
    }
    .topBody_money_text>h1{
            color: #FF6738;
    }
    .topBody_money_text>div{
            padding: 0 10px;
            color:#F7B24A ;
            font-size: 15px;
    }
    .topBody_money_text>div>img{
            width: 20px;
            margin-right: 5px;
    }
    /* 按钮 */
    .topBody_btn {display:flex;margin:10px 0;}
    .bottom_left {display:flex;padding:2px;background-color:#1780C2;align-items:center;height:60px;width:170px;border-radius:5px;overflow:hidden;}
    .left_left {flex:2;display:flex;}
    .left_left>span:nth-child(1) {padding:18px 8px;font-size:15px;background-color:#fff;border-top-left-radius:5px;border-bottom-left-radius:5px;}
    .left_left>span:nth-child(2) {display:flex;flex-direction:column;margin-left:2px;}
    .left_left span button:nth-child(1) {border-top-right-radius:2px;}
    .left_left span button:nth-child(2) {border-bottom-right-radius:2px;}
    .left_left span button {padding:6px;border:none;background-color:#fff;outline:none;}
    .left_left span button:nth-child(2) {margin-top:2px;}
    .left_but {flex:5;text-align:center;}
    .left_but>button {background-color:#1780C2;color:#fff;font-size:15px;border:none;width:100%;height:60px;outline:none;}
    .left_but>button>p{display: flex;align-items: center;justify-content: center;padding: 3px 0;}
    .left_but>button>p>span{display: flex;align-items: center;justify-content: center;border: 1px solid #fff;border-radius: 50%;padding: 0 3px;font-size: 11px;}
    .bottom_right {margin-left:20px;padding:5px;height:60px;width:165px;background-color:#FF7046;border-radius:5px;overflow:hidden;display: flex;justify-content: center;}
    .bottom_right img {width:30px;}
    .bottom_right>button {background-color:#FF7046;height:50px;padding:10px 20px;border:none;color:#fff;outline:none;display:flex;align-items:center;}
    .bottom_right span {padding:5px;}
</style>
