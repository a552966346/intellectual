<template>
        <!-- 技术转移首页 -->
        <div id="indexpay_item">
                <!-- 左侧内容 -->
                <img :src="payleft_img_url" alt="">
                <!-- 右侧内容 -->
                <div class="indexpay_right">
                        <!-- 查看更多 -->
                        <div class="indexpay_right_more">
                                <span>
                                        <router-link to="">查看更多></router-link>
                                </span>
                        </div>
                        <!-- 查看列表 -->
                        <div class="indexpay_right_list">
                                <div class="indexpay_right_item" v-for="(item,index) in transfer" @mouseenter="enter(index)" @mouseleave="leave(index)">
                                        <img :src="item.images" alt="">
                                        <div class="indexpay_right_contitem">
                                                <div class="indexpay_right_contitem1">
                                                      <div class="indexpay_right_contitem1_title"> {{item.name}}</div>
                                                      <div class="indexpay_right_contitem1_cont">
                                                              <span>面议</span>
                                                              <span v-if="item.type==0">非专利</span>
                                                              <span v-if="item.type==1">发明专利</span>
                                                              <span v-if="item.type==2">实用新型专利</span>
                                                              <span v-if="item.type==3">外观专利</span>
                                                              <span v-if="item.type==4">版权</span>
                                                      </div>
                                                </div>
                                                <!-- <div class="indexpay_right_contitem2" v-if="see==index">
                                                         <router-link to="">
                                                                <div>
                                                                         <img src="../../../static/img/technology/detail.png" alt="">
                                                                        查看详情
                                                                </div>
                                                         </router-link>
                                                </div> -->
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
                        payleft_img_url: String,//左侧边栏图片
                        transfer:Array,//技术转让右侧列表
                },
                data() {
                        return {
                                active: 0,
                                see:''
                        }
                },
                methods: {
                     enter(index){
                           this.see=index;
                     },
                     leave(index){
                        this.see
                     }
                }
        }
</script>


<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;}
        /* 技术转让 */
        #indexpay_item{width: 1200px;margin: 0px auto;background: #fff;border-radius: 10px;display: flex;}
        .indexpay_right{flex: 1;padding: 15px 10px;display: flex;flex-direction: column;box-shadow: 1px 0px 5px 3px rgba(212, 224, 240, 0.16);box-shadow: 0px 0px 5px 1px #c1dbf9;}
        /* 查看更多 */
        .indexpay_right_more{display: flex;justify-content: flex-end;padding: 0 0 10px;border-bottom: 1px solid #eeeeee;}
        .indexpay_right_more a{color: #333;text-decoration: none;}
        /*查看列表*/
        .indexpay_right_list{display: flex;padding: 15px 0;flex: 1;flex-wrap: wrap;align-content: space-between;}
        /* 每一块内容 */
        .indexpay_right_item{width: 20%;border: 1px solid #EEEEEE;padding: 20px;border-top: none;}
        .indexpay_right_item>img{width: 172px;height: 145px;border-radius: 5px;margin-bottom: 10px;width: 100%;}
        .indexpay_right_contitem{height: 80px;}
        .indexpay_right_contitem1{height: 80px;display: flex;flex-direction: column;justify-content: space-between;}
        .indexpay_right_contitem1_title{color: #333;font-weight: bold;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
        .indexpay_right_contitem1_cont{display: flex;justify-content: space-between;align-items: center;}
        .indexpay_right_contitem1_cont>span:nth-child(1){font-size: 15px;color: #ff6e3f;font-weight: bold;}
        .indexpay_right_contitem1_cont>span:nth-child(2){font-size: 11px;color: #95b3f7;}
        /* 移入效果查看详情 */
        .indexpay_right_contitem2{height: 80px;display: flex;justify-content: center;align-items: center;}
        .indexpay_right_contitem2 a{text-decoration: none;color: #fff;font-size: 14px;}
        .indexpay_right_contitem2 a div{background-color: #187fc4;width: 110px;padding: 8px 0px;display: flex;justify-content: center;align-items: center;}
        .indexpay_right_contitem2 a div img{width: 16px;margin-right: 10px;}

        .indexpay_right_item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);}
</style>
