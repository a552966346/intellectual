<template>
        <!-- 技术转移首页最新需求 -->
        <div id="indexpay_item">
                <!-- 左侧内容 -->
                <img :src="payleft_img_url" alt="">
                <!-- 右侧内容 -->
                <div class="indexpay_right">
                        <!-- 查看更多 -->
                        <div class="indexpay_right_more">
                                <span>
                                        <router-link to="technology">查看更多></router-link>
                                </span>
                        </div>
                        <!-- 查看列表 -->
                        <div class="indexpay_right_list">
                                <div class="indexpay_right_item" v-for="(item,index) in demand" @mouseenter="enter(index)" @mouseleave="leave(index)">
                                        <div  class="indexpay_right_contitem1">
                                              <div class="item_top">
                                                      <p>
                                                        <span></span>
                                                        <span v-if="item.type==0">非专利</span>
                                                        <span v-if="item.type==1">发明专利</span>
                                                        <span v-if="item.type==2">实用新型专利</span>
                                                        <span v-if="item.type==3">外观专利</span>
                                                        <span v-if="item.type==4">版权</span>
                                                      </p>
                                                      <div class="item_top_title">{{item.name}}</div>
                                                      <p><img src="../../../static/img/technology/invest.png" alt=""><span>投入资金:</span><span>面议</span></p>
                                                      <p><img src="../../../static/img/technology/coop.png" alt=""><span>合作方式:</span><span>面议</span></p>
                                              </div>
                                              <div class="item_bottom" v-show="!see[index]">
                                                      <span>预算：</span>
                                                      <span>面议</span>
                                              </div>
                                             <div class="indexpay_right_contitem2" v-show="see[index]">
                                                       <router-link :to="'service_xlj_two?id='+item.id">
                                                              <div>
                                                                       <img src="../../../static/img/technology/detail.png" alt="">
                                                                      查看详情
                                                              </div>
                                                       </router-link>
                                              </div>
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
                        payleft_img_url: String,////最新需求右左侧图片
                        demand:Array,//最新需求右侧内容
                },
                data() {
                        return {
                                active: 0,
                                see:[]
                        }
                },
                methods: {
                        enter(index){
                                this.$set(this.see,index,true)
                        },
                        leave(index){
                           this.$set(this.see,index,false)
                        }
                }
        }
</script>


<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
        /* 最新需求 */
        #indexpay_item{width: 1200px;margin: 20px auto;background: #fff;border-radius: 10px;display: flex;}
        /* 右侧内容 */
         .indexpay_right{flex: 1;padding: 15px 10px;display: flex;flex-direction: column;box-shadow: 1px 0px 5px 3px rgba(212, 224, 240, 0.16);box-shadow: 0px 0px 5px 1px #c1dbf9;}
        /* 查看更多 */
        .indexpay_right_more{display: flex;justify-content: flex-end;padding: 0 0 10px;border-bottom: 1px solid #eeeeee;}
        .indexpay_right_more a{color: #333;text-decoration: none;}
         /*查看列表*/
        .indexpay_right_list{display: flex;padding: 15px 0;flex: 1;flex-wrap: wrap;}
         /* .indexpay_right_list{display: flex;padding: 15px 0;flex: 1;flex-wrap: wrap;align-content: space-between;} */
         /* 每一块内容 */
        .indexpay_right_item{width: 25%;height: 206px;border: 1px solid #EEEEEE;padding:0px 20px;border-top: none;letter-spacing: 1px;}
        .indexpay_right_contitem1{width: 100%;}
        .item_top{width: 100%;}

        .item_top>P{margin: 10px 0;display: flex;align-items: center;}

        .item_top>P:nth-child(1){font-size: 11px;color: #187fc4;display: flex;align-items: center;}
        .item_top>P:nth-child(1)>span:nth-child(1){display: inline-block;width: 25px;height: 25px;border-radius: 50%;/* color: #95b3f7;*/background: #e8f3f9;}
        .item_top>P:nth-child(1)>span:nth-child(2){margin-left: -10px;}
        /* 标题 */
        .item_top .item_top_title{color: #333;font-weight: bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}

        .item_top>P:nth-child(3), .item_top>P:nth-child(4), .item_bottom{font-size: 13px;color: #c9c9c9;}
        .item_top>P:nth-child(3)>img, .item_top>P:nth-child(4)>img{display: inline-block;width: 14px;height: 14px;margin-right: 10px;}
        .item_bottom{padding: 20px 0px;}
        /* 每一块内容底部移入 */
        .item_bottom>span:nth-child(2){display: inline-block;color: #187fc4;font-size: 16px;}

        /* .indexpay_right_list>div:nth-child(8)~div{border-bottom: none;} */

        /* 移入效果查看详情 */
        .indexpay_right_contitem2{display: flex;justify-content: center;align-items: center;padding: 20px 0px;}
        .indexpay_right_contitem2 a{text-decoration: none;color: #fff;font-size: 14px;}
        .indexpay_right_contitem2 a div{background-color: #187fc4;width: 110px;padding: 8px 0px;display: flex;justify-content: center;align-items: center;}
        .indexpay_right_contitem2 a div img{width: 16px;margin-right: 10px;}

        .indexpay_right_item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);}
</style>
