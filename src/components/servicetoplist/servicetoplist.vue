<template>
        <div class="list">
                <!-- 第一种 -->
                <div class="list_item">
                        <div class="list_topitem">
                              <div class="list_topitem_left">京</div>
                              <div class="list_topitem_right">
                                      <p>北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年</p>
                                      <p>北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，</p>
                              </div>
                        </div>
                        <div class="list_botitem">
                                <div class="list_botitem_left">
                                       <div class="list_botitem_leftitem">
                                           <p class="text">价格</p>
                                           <p>￥1500.00</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">官费</p>
                                           <p>￥200.00</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">联系电话</p>
                                           <p>15535435698</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">联系人</p>
                                           <p>小飞侠</p>
                                       </div>
                                </div>
                                <div class="list_botitem_right">
                                        <div><img src="../../../static/img/service/icon26.png"></div>
                                        <div><img src="../../../static/img/service/icon27.png">联系客服</div>
                                        <div><router-link to="">查看详情</router-link></div>
                                </div>
                        </div>
                </div>
                <!-- 第二种 -->
                <div class="list_item">
                        <div class="list_topitem">
                              <div class="list_topitem_left">京</div>
                              <div class="list_topitem_right">
                                      <p>成立满五年北京科技类公司，成立满五年</p>
                                      <p>北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，成立满五年北京科技类公司，</p>
                              </div>
                        </div>
                        <div class="list_botitem">
                                <div class="list_botitem_left">
                                       <div class="list_botitem_leftitem">
                                           <p class="text">服务类型</p>
                                           <p>标准</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">费用减缓</p>
                                           <p>减缓70%</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">服务费用</p>
                                           <p>￥1500.00</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">国知局费用</p>
                                           <p>￥151.00</p>
                                       </div>
                                       <div class="list_botitem_leftitem">
                                           <p class="text">费用合计</p>
                                           <p>￥3151</p>
                                       </div>
                                </div>
                                <div class="list_botitem_right">
                                        <div><img src="../../../static/img/service/icon26.png"></div>
                                        <div><img src="../../../static/img/service/icon27.png">联系客服</div>
                                        <div><router-link to="">查看详情</router-link></div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default{
                props: {
                     // service:Array,
                },
                data() {
                        return {

                        }
                },
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
        .list_topitem_left{width: 55px;height: 61px;background-size: 100% 100%;font-size: 14px;color: #7B64F2;text-align: center;line-height: 54px;font-weight: bold;background-image: url(../../../static/img/service/icon32.png);}
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
</style>
