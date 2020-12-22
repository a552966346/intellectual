<template>
     <div id="paytime">
        <div class="pay_header">
            <div><span>下单时间：</span><span>2020-09-1 13:25:33</span></div>
            <div><span>订单编号：</span><span>452B154G1236S4</span></div>
            <div><span>支付状态：</span><span>待支付</span></div>
        </div>
        <div class="time_content">
            <div><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1938692794,1846043279&fm=26&gp=0.jpg" alt=""></div>
            <dl>
                <dt>商标撤删申请</dt>
                <dd><span>商标注册时间：</span><span>2018-12-15</span></dd>
                <dd><span>商标分类：</span><span>食用色素，饮料色素，粉刷用石灰浆，陶瓷涂料，油漆，染料，水彩固定剂，画家，装饰家，印刷商和艺术家用金属箔，木材涂料</span></dd>
                <dd><span>待支付：</span><span>￥18800</span><span>（不含官费）</span></dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 14px;
        }
        #paytime{
            width: 1200px;
            margin: 20px auto;
            padding-bottom: 30px;
            background:#fff;
            border-radius: 10px;
        }
        .pay_header{
            display: flex;
            /* background: orange; */
            padding: 20px 0;
        }
        .pay_header>div{
            padding: 5px 30px;
            /* font-size: 18px; */
            margin-right: 50px;
        }
        .pay_header>div:nth-child(1){
            border-left: 5px solid #187fc2;
        }
        .pay_header>div:nth-child(3)>span:nth-child(2){
            color: #e00000;
        }
        .time_content{
            display: flex;
            margin: 0 10px;
            background: #f9f9f9;
        }
        .time_content>div{
            width: 250px;
            /* height: 190px; */
            background: palegoldenrod;
        }
        .time_content>div>img{
            width: 100%;
            height: 100%;
        }
        .time_content>dl{
            padding: 30px;
        }
        .time_content dt{
            font-size: 20px;
            margin-bottom: 30px;
        }
        .time_content dd{
            margin-bottom: 10px;
        }
        .time_content >dl>dd:nth-child(4)>span:nth-child(2){
            color: #e00000;
            font-size: 18px;
        }
</style>