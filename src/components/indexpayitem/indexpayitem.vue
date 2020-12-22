<template>
        <!-- 首页交易中心 -->
        <div id="indexpay_item">
                <!-- 左侧图片 -->
                <img :src="payleft_img_url" alt="">
                <!-- 右侧内容 -->
                <!-- 商标交易 -->
                <div class="indexpay_right" v-if="trade">
                        <!-- 查看更多 -->
                        <div>
                                <p>精选商品总共<span>{{num}}</span>件</p>
                                <span>
                                        <router-link to="/trademarks" style="color: #333;">查看更多></router-link>
                                </span>
                        </div>
                        <div class="indexpay_right_list">
                                <div class="indexpay_right_item"  v-for="(item,index) in trade" :key="item.id" v-if="index<8">
                                        <router-link :to="'service_xlj?id='+item.id">
                                                <img :src="item.images_text[0]" alt="">
                                                <p class="title_blodes">{{item.name}}</p>
                                                <p>{{item.summarize}}</p>
                                                <p class="title_blue">￥{{item.fee}}</p>
                                        </router-link>
                                </div>
                        </div>
                </div>
                <!-- 版权交易 -->
                <div class="indexpay_right" v-if="istrades">
                        <!-- 查看更多 -->
                        <div>
                                <p>精选商品总共<span>{{num}}</span>件</p>
                                <span>
                                        <router-link to="/copyright" style="color: #333;">查看更多></router-link>
                                </span>
                        </div>
                        <div class="indexpay_right_list" >
                                <div class="indexpay_right_item" v-for="(item,index) in istrades" :key="item.id" v-if="index<8">
                                        <router-link :to="'service_xlj_four?id='+item.id">
                                                <img :src="item.images_text[0]" alt="">
                                                <p class="title_blodes">{{item.name}}</p>
                                                <p>{{item.summarize}}</p>
                                                <p class="title_blue">￥{{item.fee}}</p>
                                        </router-link>
                                </div>
                        </div>
                </div>
                <!-- 专利交易 -->
                <div class="indexpay_right" v-if="hot">
                        <!-- 查看更多 -->
                        <div>
                                <p>精选商品总共<span>{{num}}</span>件</p>
                                <span>
                                        <router-link to="/patents" style="color: #333;">查看更多></router-link>
                                </span>
                        </div>
                        <div class="indexpay_right_lists" >
                                <div class="activie_list">
                                        <span :class="{active:active==index}" v-for="(item,index) in hot" :key="index"
                                                @click="active_top(index,item.id,item.name)">{{item.name}}</span>
                                </div>
                                <div class="indexpay_right_item_list">
                                        <div class="indexpay_right_item_item" v-for="(item,index) in transaction" v-if="index<9">
                                                <router-link :to="'service_xlj_three?id='+item.id">
                                                        <p class="title">{{item.name}}</p>
                                                        <div class="er">
                                                                <p>行业分类：{{item.categoryid_text.name}}</p>
                                                                <p v-if="item.patenttype==1">发明专利</p>
                                                                <p v-if="item.patenttype==2">实用新型</p>
                                                                <p v-if="item.patenttype==3">外观设计</p>
                                                        </div>
                                                        <p v-if="item.condition==1">专利状态：授权未下证</p>
                                                        <p v-if="item.condition==2">专利状态：已下证</p>
                                                        <p class="pay">售价<span> ￥{{item.fee}}</span></p>
                                                </router-link>
                                        </div>
                                </div>
                        </div>
                </div>

        </div>
</template>

<script>
        export default {
                // 组件中接受的值
                props: {
                        payleft_img_url: String, //左侧图片
                        hot: Array, //交易中心的热门推荐
                        transaction:Array,//交易中心的块内容
                        trade:Array,//商标交易的块内容
                        num:String,//三块的数量
                        istrades:Array//软著交易的块内容
                },
                data() {
                        return {
                                active: 0
                        }
                },
                methods: {
                        active_top(index,id,name) {
                                this.active = index;
                                this.$router.push({
                                        path:"/patents",
                                        query:{
                                                id:id,
                                                name:name
                                        }
                                })
                        }
                }
        }
</script>


<style scoped>
     *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
     /* 交易中心 */
    #indexpay_item{width: 1200px;margin: 20px auto;background: #fff;border-radius: 10px;display: flex;}
    /* 交易中心右侧内容 */
    .indexpay_right{flex: 1;padding: 15px 25px;display: flex;flex-direction: column;}
    /* 交易中心右侧内容的查看更多*/
    .indexpay_right>div:nth-child(1){display: flex;justify-content: flex-end;padding: 0 0 10px;border-bottom: 1px solid #f6f6f6;}
    .indexpay_right>div:nth-child(1) p{padding-right: 15px;color: #333;}
    .indexpay_right>div:nth-child(1) p span{color: #1780c2;font-size: 17px;}
     /* 商品交易/软著交易 */
    .indexpay_right_list{width: 100%;display: flex;padding: 20px 0;flex: 1;flex-wrap: wrap;align-content: space-between;}
    .indexpay_right_item{width: 31.3333%;margin-right: 2%;border: 1px solid #dddddd;padding: 20px;border-radius: 5px;width: 23%;}
    .indexpay_right_item:nth-child(4n+4){margin-right: 0%!important;}

    .indexpay_right_item img{width: 172px;height: 125px;border-radius: 5px;margin-bottom: 10px;width: 100%;}
    .indexpay_right_item p{padding: 5px 0;font-size: 14px;color: #333;}
    .indexpay_right_item p:nth-of-type(2){color:#909399;}
    .title_blodes{font-size: 17px !important;font-weight: bold;}
    .title_blue{color: #1980c5!important;font-weight: bold;font-size: 15px;}
    .indexpay_right_item:hover{box-shadow: 1px 1px 6px #cee4f2;position: relative;top: -3px;}
    /* 专利交易*/
    .indexpay_right_lists{flex: 1;padding: 10px 0;display: flex;flex-direction: column;}
    .activie_list{padding: 0px 0;display: flex;}
    .activie_list span{padding: 3px 10px;margin: 0 5px;}
    .active{background: #4b7ef1;border-radius: 30px;color: #fff}
    .indexpay_right_item_list{width: 100%;display: flex;align-content: space-between;flex-wrap: wrap;flex: 1;padding: 15px 0;}
    .indexpay_right_item_item{width: 32%;margin-right: 2%;padding: 20px 15px;border-radius: 5px;border: 1px solid #dddddd;font-size: 14px;margin-bottom: 1%;}
    .indexpay_right_item_item:nth-child(3n+3){margin-right: 0%!important;}

    .indexpay_right_item_item .title{font-size: 18px;font-weight: bold;display: inline-block;white-space: nowrap;width: 100%;overflow: hidden;text-overflow: ellipsis;color: #333;}
    .indexpay_right_item_item .er{display: flex;justify-content: space-between;}
    .indexpay_right_item_item .er p:first-of-type{display: inline-block;width: 65%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #909399!important;}
    .indexpay_right_item_item .er p:last-of-type{color: #187ec6;text-align: right;}
    .indexpay_right_item_item p{padding-bottom: 10px;color: #909399;}
    .indexpay_right_item_item p:last-of-type{padding-bottom: 0;color: #909399;}
    .pay span{font-size: 16px;color: #187ec6;}
</style>
