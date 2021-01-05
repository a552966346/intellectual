<template>
        <div class="list">
                <!-- 第二种 -->
                <div v-if="listdata.length!=0">
                     <div class="list_item" v-for="(item,index) in listdata" >
                             <div class="list_topitem">
                                   <div class="list_topitem_left">
                                          <img :src="item.breviary_image">
                                   </div>
                                   <div class="list_topitem_right">
                                           <p>{{item.categoryid_text.name}}</p>
                                           <p>{{item.sketch}}</p>
                                   </div>
                             </div>
                             <div class="list_botitem">
                                     <div class="list_botitem_left">
                                            <div class="list_botitem_leftitem" v-if="item.status">
                                                <p class="text">服务状态</p>
                                                <p v-if="item.status=='normal'">正常</p>
                                            </div>
                                           <!-- <div class="list_botitem_leftitem">
                                                <p class="text">费用减缓</p>
                                                <p>减缓70%</p>
                                            </div> -->
                                            <div class="list_botitem_leftitem" v-if="item.fee">
                                                <p class="text">服务费用</p>
                                                <p>￥{{item.fee-0}}</p>
                                            </div>
                                            <div class="list_botitem_leftitem" v-if="item.know_fee">
                                                <p class="text">国知局费用</p>
                                                <p>￥{{item.know_fee-0}}</p>
                                            </div>
                                            <div class="list_botitem_leftitem" v-if="item.know_fee||item.fee">
                                                <p class="text">费用合计</p>
                                                <p>￥{{(item.fee-0)+(item.know_fee-0)}}</p>
                                            </div>
                                     </div>
                                     <div class="list_botitem_right">
                                             <div><img src="../../../static/img/service/icon26.png"></div>
                                             <div><img src="../../../static/img/service/icon27.png">联系客服</div>
                                             <div class="list_a"><router-link :to="item.categoryid_text.keywords+'?id='+item.category_id">查看详情</router-link></div>
                                     </div>
                             </div>
                     </div>

                </div>
                <div v-else style="background-color: #fff;display: flex;justify-content: center;">
                         <img src="../../../static/img/service/word_none.png">
                       <!-- <p style="font-size: 15px;text-align: center;padding: 10px;">暂无数据!!!!</p> -->
                </div>
        </div>
</template>

<script>
        export default{
                props: {
                       listdata: '',

                },
                data() {
                        return {

                        }
                }


        }
</script>

<style scoped>
        *{padding: 0;margin: 0;text-decoration: none;box-sizing: border-box;}
        /* 整体列表 */
        .list{width: 1200px;margin: 0 auto;padding-bottom: 5px;}
        /* 一条内容 */
        .list_item{width: 100%;background-color: #fff;margin-bottom: 15px;padding: 10px 30px 30px 20px;}
         .list_item:hover{box-shadow: 1px 1px 10px 2px #ccc;}
        /* 上边内容 */
        .list_topitem{width: 100%;display: flex;}
        .list_topitem_left{width: 55px;height: 61px;}
        .list_topitem_left img{width: 100%;height: 100%;}
        .list_topitem_right{flex: 1;flex-direction: column;width: 0;padding-left: 10px;}
        .list_topitem_right p:nth-child(1){padding-top: 8px;color: #464646;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
        .list_topitem_right p:nth-child(2){padding-top: 5px;color: #666666;font-size: 12px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
        /* 下边内容 */
        .list_botitem{display: flex;justify-content: space-between;align-items: center;}

        .list_botitem_leftitem{width: 110px;height: 57px;background-color: #FAFBFD;float: left;text-align: left;position: relative;margin-right: 6px;padding-left: 10px;padding-top: 10px;}
        .list_botitem_leftitem p:nth-child(1){margin-left: 10px;font-size: 12px;color: #999999;margin-bottom: 12px;position: relative;}
        .text::before{content: '';width: 5px;height: 5px;background-color:#DEE0E9;border-radius: 50%;position: absolute;left: -10px;top: 6px;}
        .list_botitem_leftitem p:nth-child(2){font-size: 14px;color: #333333;margin-left: 10px;}
        /* 按钮 */
        .list_botitem_right{height: 100%;}
        .list_botitem_right div{border: 1px solid #dfdfdf;display: inline-block;height: 30px;border-radius: 4px;text-align: center;line-height: 30px;margin-left: 5px;font-size: 14px;color: #9f9fa0;}
        .list_botitem_right div:nth-child(1){width: 48px;}
        .list_botitem_right div:nth-child(2){width: 98px;}
        .list_botitem_right div:nth-child(3){width: 98px;}
        .list_botitem_right div a{color: #9f9fa0;}
        .list_botitem_right img{display: inline-block;width: 17px;height: 14px;line-height: 30px;vertical-align: middle;margin-right: 5px;}
        .list_a:hover{background-color: #0066CC;}
        .list_a:hover a{color: #FFFFFF!important;}
</style>
