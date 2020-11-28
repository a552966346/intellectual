<template>
        <div id="serviceleft">
                <!-- 头部 -->
                <div class="serviceleft_title">
                        <span>伊甸城推荐</span>
                </div>
                <!-- 内容 -->
                <div class="serviceleft_cont">
                      <div class="serviceleft_item" v-for="(item,index) in leftdata" :key="item.id" >
                           <!-- 标题 -->
                           <div class="serviceleft_item_title" >
                                <div class="serviceleft_item_title1"></div>
                                <div class="serviceleft_item_title2">{{item.titname}}</div>
                           </div>
                           <!-- 跳转 -->
                           <div class="serviceleft_item_lian" v-for='(isitem,ind) in item.type' :key='isitem.id'>
                                <router-link to="" class="common_lian">{{isitem.name}}</router-link>
                           </div>
                      </div>

                </div>
        </div>
</template>

<script>
        export default{
                data(){
                        return{
                                leftdata:[
                                        {
                                           id:1,
                                           titname:'国内专利申请',
                                           type:[{
                                               id:1,
                                               name:'发明专利'
                                           },{
                                              id:2,
                                              name:'实用新型'
                                           },{
                                              id:3,
                                              name:'外观设计'
                                           }]
                                        },{
                                            id:2,
                                            titname:'涉外专利申请',
                                            type:[{
                                                id:1,
                                                name:'PCT国际专利申请'
                                            },{
                                               id:2,
                                               name:'单独国家直接申请'
                                            }]
                                        },{
                                            id:3,
                                            titname:'商标服务',
                                            type:[{
                                                id:1,
                                                name:'普通商标注册'
                                            },{
                                               id:2,
                                               name:'商标变更'
                                            },{
                                               id:3,
                                               name:'商标续展'
                                            }]
                                        },{
                                            id:4,
                                            titname:'版权服务',
                                            type:[{
                                                id:1,
                                                name:'软件著作权登记'
                                            },{
                                               id:2,
                                               name:'美术作品登记'
                                            },{
                                               id:3,
                                               name:'文学作品登记'
                                            }]
                                        },{
                                            id:5,
                                            titname:'其他服务',
                                            type:[{
                                                id:1,
                                                name:'企业知识产权展示'
                                            },{
                                               id:2,
                                               name:'企业高企认定'
                                            }]
                                        }
                                ]
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
</style>
