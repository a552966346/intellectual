<template>
    <div class="pay_all">
        <div id="paytime" v-for="item in uqdata" :key="item.id" v-if="item.product_data">
            <div class="pay_header">
                <div><span>下单时间：</span><span>{{item.creatime_text}}</span></div>
                <div><span>订单编号：</span><span>{{item.order_sn}}</span></div>
                <div><span>订单状态：</span>
                <span v-if="item.status==0">待付款</span>
               <span v-if="item.status==1">已支付</span>
                <span v-if="item.status==2">已完成</span>
                <span v-if="item.status==3">已取消</span>
                </div>
            </div>
            <div class="time_content"   v-for="(item1,index) in item.product_data" v-if="item1 !== null" :key="item1.id">
                <div><img :src="item1.images_text[0]" alt=""></div>
                <dl>
                    <dt>{{item1.name}}</dt>
                    <dd><span>商标注册时间：</span><span>{{item1.creatime_text}}</span></dd>
                    <dd v-if="item1.categoryid_text&&item1.categoryid_text.name"><span>商标分类：</span><span>{{item1.categoryid_text.name}}</span></dd>
                    <dd v-else-if="item1.categoryid_text&&item1.categoryid_text==null"><span>商标分类：</span><span>无</span></dd>
                    <dd v-else><span>商标分类：</span><span>{{item1.categoryid_text}}</span></dd>
                    <dd><span>购买数量：</span><span>{{item1.number}}件</span></dd>
                    <dd><span>待支付商品单价：</span><span>￥{{item1.fee}}</span><span>/件（不含官费）</span></dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        uqdata:{}
    },
    data(){
        return{

        }
    },
}
</script>
<style scoped>
      *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 13px;
        }
        .pay_all{
                width: 100%;
            /* width: 1200px; */
            background:#fff;
            margin: 20px auto;
            height: auto;
        }
        #paytime{
             width: 100%;
            /* width: 1200px; */
            margin: 20px auto;
            padding-bottom: 30px;
            background:#fff;
            border-radius: 10px;
        }
        .pay_header{
            display: flex;
            padding: 20px 0;
        }
        .pay_header>div{
            padding: 5px 15px;
            margin-right: 130px;

        }
        .pay_header>div:nth-child(1){
            border-left: 4px solid #187fc2;
        }
        .pay_header>div:nth-child(3)>span:nth-child(2){
            color: #e00000;
        }
        .time_content{
            display: flex;
            margin: 0 10px;
            margin-bottom: 10px;
            background: #f9f9f9;
        }
        .time_content>div{
            width: 225px;
        }
        .time_content>div>img{
            width: 100%;
            height: 100%;
        }
        .time_content>dl{
            padding: 30px;
        }
        .time_content dt{
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: 600;
        }
        .time_content dd{
            margin-bottom: 10px;
        }
        .time_content dd:last-child{
            margin-top: 20px;
        }
        .time_content >dl>dd:last-child>span:nth-child(2){
            color: #e00000;
            font-size: 16px;
            font-weight: 600;
        }
</style>
