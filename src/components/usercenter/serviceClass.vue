<template>
        <div class="all">
                <div v-for="item in uqdata" :key="item.id" v-if="item !== null" >
                        <div class="time_content" @click="run(item.type,item.categoryid_text,item.category_id)">
                            <div><img :src="item.images_text[0]" alt=""></div>
                            <dl>
                                <dt>{{item.name}}</dt>
                                <dd><span>商标注册时间：</span><br/><span>{{item.creatime_text}}</span></dd>
                                <dd v-if="item.categoryid_text&&item.categoryid_text.name"><span>商标分类：</span><span>{{item.categoryid_text.name}}</span></dd>
                                <dd v-else-if="item.categoryid_text&&item.categoryid_text==null"><span>商标分类：</span><span>无</span></dd>
                                <dd v-else><span>商标分类：</span><span>{{item.categoryid_text}}</span></dd>
                                <!-- <dd><span>购买数量：</span><span>{{item1.number}}件</span></dd> -->
                                <dd><span>商品单价：</span><span>￥{{item.fee}}</span><span>/件（不含官费）</span></dd>
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
    methods:{
            run(type,key,id,ids){
                    if(type==1){
                            this.$router.push({
                                    path:key.keywords,
                                    query:{id:ids}
                            })
                    }
                    else if(type ==2){
                            this.$router.push({
                                    path:'/service_xlj',
                                    query:{id:id}
                            })
                    }
                    else if(type ==3){
                            this.$router.push({
                                    path:'/service_xlj_three',
                                    query:{id:id}
                            })
                    }
                    else if(type ==4){
                            this.$router.push({
                                    path:'/service_xlj_four',
                                    query:{id:id}
                            })
                    }
                    else if(type ==5){
                            this.$router.push({
                                    path:'/service_xlj_two',
                                    query:{id:id}
                            })
                    }
            }
    }
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
                /* flex-direction: column; */
                flex-wrap: wrap;
        }
        .all>div{
                width: 25%;
                margin: 0 10px 10px 0;
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
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .time_content>div>img{
            width: 100%;
            /* height: 100%; */
        }
        .time_content>dl{
            padding: 15px 10px;
            color: #222;
        }
        .time_content dt{
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: 600;
            color: #222;
        }
        .time_content dd{
                font-size: 13px;
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
