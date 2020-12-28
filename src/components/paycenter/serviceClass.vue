<template>
        <div class="all">
                <div v-for="item in uqdata" :key="item.id">
                        <div>
                                <p v-if="item.type==1">服务中心</p>
                                <p v-if="item.type==2">商标交易</p>
                                <p v-if="item.type==3">专利交易</p>
                                <p v-if="item.type==4">版权交易</p>
                                <p v-if="item.type==5">技术转移</p>
                        </div>
                        <router-link :to="'/'+item.product.categoryid_text.keywords+'?id='+item.product.category_id"  v-if="item !== null" :key="item.id">
                                <div class="time_content">
                                    <div><img :src="item.product.images_text[0]" alt=""></div>
                                    <dl>
                                        <dt>{{item.product.name}}</dt>
                                        <dd><span>商标注册时间：</span><span>{{item.product.creatime_text}}</span></dd>
                                        <dd v-if="item.product.categoryid_text&&item.product.categoryid_text.name"><span>商标分类：</span><span>{{item.product.categoryid_text.name}}</span></dd>
                                        <dd v-else-if="item.product.categoryid_text&&item.product.categoryid_text==null"><span>商标分类：</span><span>无</span></dd>
                                        <dd v-else><span>商标分类：</span><span>{{item.product.categoryid_text}}</span></dd>
                                        <!-- <dd><span>购买数量：</span><span>{{item1.number}}件</span></dd> -->
                                        <dd><span>商品单价：</span><span>￥{{item.product.fee}}</span><span>/件（不含官费）</span></dd>
                                    </dl>
                                </div>
                        </router-link>
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
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }
        .all{
                width: 100%;
                display: flex;
                flex-direction: column;
        }
        .all>div>div:nth-child(1){
                padding: 10px 0;
        }
        .all p{
                padding-left: 5px;
                border-left: 2px solid #127CC4;
                /* padding: 10px 5px; */
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
            color: #222;
        }
        .time_content dt{
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: 600;
            color: #222;
        }
        .time_content dd{
            margin-bottom: 10px;
             color: #222;
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
