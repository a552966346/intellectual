<template>
        <div id="serviceleft">
                <!-- 头部 -->
                <div class="serviceleft_title">
                        <span>伊甸城推荐</span>
                </div>
                <!-- 内容 -->
                <div class="serviceleft_cont">
                      <div class="serviceleft_item">
                           <!-- 标题 -->
                           <div class="serviceleft_item_title">
                                <div class="serviceleft_item_title1"></div>
                                <div class="serviceleft_item_title2">国内专利申请</div>
                           </div>
                           <!-- 跳转 -->
                           <div class="serviceleft_item_lian">
                                <router-link to="" class="common_lian">发明专利</router-link>
                                <router-link to="" class="common_lian">实用设计</router-link>
                                <router-link to="" class="common_lian">外观设计</router-link>
                           </div>
                      </div>
                      <div class="serviceleft_item">
                           <!-- 标题 -->
                           <div class="serviceleft_item_title">
                                <div class="serviceleft_item_title1"></div>
                                <div class="serviceleft_item_title2">涉外专利申请</div>
                           </div>
                           <!-- 跳转 -->
                           <div class="serviceleft_item_lian">
                                <router-link to="" class="common_lian">发明专利</router-link>
                                <router-link to="" class="common_lian">实用设计</router-link>
                                <router-link to="" class="common_lian">外观设计</router-link>
                           </div>
                      </div>
                      <div class="serviceleft_item">
                           <!-- 标题 -->
                           <div class="serviceleft_item_title">
                                <div class="serviceleft_item_title1"></div>
                                <div class="serviceleft_item_title2">涉外专利申请</div>
                           </div>
                           <!-- 跳转 -->
                           <div class="serviceleft_item_lian">
                                <router-link to="" class="common_lian">发明专利</router-link>
                                <router-link to="" class="common_lian">实用设计</router-link>
                                <router-link to="" class="common_lian">外观设计</router-link>
                           </div>
                      </div>
                </div>
        </div>
</template>

<script>
        export default{
                data(){
                        return{

                        }
                }
        }
</script>

<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
        #serviceleft{width: 100%;background-color: #fff;box-shadow: 1px 1px 10px 2px #ccc;}
        .serviceleft_title{background-color: #1a7fc3;height: 50px;color: white;display: flex;align-items: center;padding: 0px 15px;font-size: 18px;}
        .serviceleft_cont{background-color: #fff;padding: 0px 15px;padding-top:30px;}
        .serviceleft_item{padding-bottom: 25px;}
        .serviceleft_item_title{padding-bottom: 20px;display: flex;align-items: center;padding-bottom: 25px;font-size: 18px;}
        .serviceleft_item_title1{-webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);width: 15px;height: 15px;background-color:#1a7fc3 ;}
        .serviceleft_item_title2{font-weight: bold;padding-left: 10px;letter-spacing:1px;}
        /* 跳转链接 */
        .serviceleft_item_lian{display: flex;flex-direction: column;}
        .common_lian{padding-bottom: 20px;padding-left: 25px;color: #999;font-weight: bold;}
        .serviceleft_item_lian .common_lian:last-child{padding-bottom: 0px!important;}
</style>
