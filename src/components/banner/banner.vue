<template>
        <div class="bnner" id="banner">
                <div class="bnner_all">
                      <el-tabs type="border-card" v-model="activeName" class="banner_switch" >
                              <!-- 交易中心 -->
                              <el-tab-pane :label="paycenter.name+' '+paycenter.keys" name="first" :key="'first'" class="baner_trade">
                                      <!-- 交易中心标题 -->
                                      <div class="baner_commontop">{{paycenter.keys_tow}}</div>
                                      <!-- 交易中心内容 -->
                                      <div class="baner_trade_cont">
                                              <div class="baner_tradecont_item" v-for="(item,index) in paycenter.children">
                                                     <!-- 三大卡片 -->
                                                      <div class="baner_tradeitem_top">
                                                            <img :src="banimg[index]" alt="">
                                                      </div>
                                                      <div class="baner_tradeitem_bottom">
                                                              <div class="baner_tradeitem_bottom1">
                                                                   <div v-for="(item1,index1) in item.children" :class="{banimg:bgimg==index1}" v-if="index1<4">
                                                                        <router-link :to="item.keywords+'?id='+item1.id+'&name='+item1.name">{{item1.name}}></router-link>
                                                                   </div>
                                                              </div>
                                                              <div class="baner_tradeitem_bottom2">
                                                                   <div style="padding-left: 15px;">
                                                                         <router-link :to="item.keywords">查看更多></router-link>
                                                                    </div>
                                                              </div>
                                                      </div>
                                              </div>
                                      </div>
                              </el-tab-pane>
                              <!-- 服务中心 -->
                              <el-tab-pane :label="severcenter.name+' '+severcenter.keys" name="second" :key="'second'">
                                      <!-- 服务中心标题 -->
                                      <div class="baner_commontop">{{severcenter.keys_tow}}</div>
                                      <!-- 服务中心选项卡内容 -->
                                      <div class="baner_sever_cont">
                                              <div class="baner_severcont_item" v-for="(item,index) in severcenter.children">
                                                      <div class="baner_severcont_topitem">{{item.name}}</div>
                                                      <div class="baner_severcont_botitem">
                                                                <div class="baner_botall_item" v-for="(item1,index) in item.children">
                                                                        <router-link :to="item1.keywords+'?id='+item1.id">
                                                                               <div class="baner_botall_picitem">
                                                                                       <img :src="bantwimg[index]" alt="">
                                                                               </div>
                                                                               <div class="baner_botall_textitem">
                                                                                      <P>{{item1.name}}</P>
                                                                                      <P>{{msmin[index]}}</P>
                                                                               </div>
                                                                        </router-link>
                                                                </div>
                                                        </div>
                                              </div>


                                      </div>
                              </el-tab-pane>
                              <!-- 金融中心 -->
                              <el-tab-pane :label="jinrongcenter.name+' '+jinrongcenter.keys" name="three" :key="'three'">
                                      <!-- 金融中心标题 -->
                                      <div class="baner_commontop">{{jinrongcenter.keys_tow}}</div>
                                       <!-- 金融中心选项卡内容 -->
                                      <div class="baner_jinrongcenter_bot">
                                              <div class="baner_jinrongcenter_picbot" v-for="(item,index) in banotimg">
                                                      <router-link :to="'/'+item.keywords">
                                                              <img :src="item.img" alt="">
                                                      </router-link>
                                              </div>
                                      </div>
                              </el-tab-pane>
                      </el-tabs>
                      <!-- banner栏搜索 -->
                       <div class="baner_search">
                               <div class="searchbox">
                                       <input id="searchText" oninput="inputing()" onsubmit="return false;" type="text"
                                               class="text keyword" placeholder="请您输入关键字信息进行搜索如：天猫旗舰店     商标注册     包装设计     网站建设     企业店铺     淘宝/天猫代入驻">
                                       <a href="javascript:void(0)" class="btn searchbtn"><i></i></a>
                                       <div class="searched" style="display: none;"></div>
                               </div>
                       </div>
                </div>
        </div>
</template>
<script>
        export default {
                data() {
                        return {
                                paycenter:{},//交易中心
                                severcenter:{},//服务中心
                                jinrongcenter:{},//金融中心
                                activeName: 'first',
                                // 交易中心banner图
                                banimg: [
                                        '../../../static/img/index/banner_cteon.png',
                                        '../../../static/img/index/banner_ctetw.png',
                                        '../../../static/img/index/banner_ctetr.png'
                                ],
                                // 服务中心小图片
                                bantwimg: [
                                        '../../../static/img/index/bannertwon.png',
                                        '../../../static/img/index/bannertwtw.png',
                                        '../../../static/img/index/bannertwtr.png',
                                        '../../../static/img/index/bannertwfh.png',
                                        '../../../static/img/index/bannertwfv.png',
                                        '../../../static/img/index/bannertwsx.png',
                                        '../../../static/img/index/bannersctr.png',
                                        '../../../static/img/index/bannertrtr.png',
                                        '../../../static/img/index/bannerscni.png',
                                        '../../../static/img/index/bannerscfv.png',
                                        '../../../static/img/index/bannertrtw.png',
                                        '../../../static/img/index/bannersctn.png'
                                ],
                                msmin: ['￥800/元', '￥1600/元', '￥700/元', '￥700/元', '￥350/元', '￥350/元'],
                                banotimg: [
                                       {img: '../../../static/img/index/bannerobon.png',
                                       keywords:"financing"
                                       },
                                       {
                                           img: '../../../static/img/index/bannerobtw.png' ,
                                           keywords:"property"
                                       }

                                ],
                                bgimg:1
                        }
                },
                mounted() {
                        console.log(11)
                        this.$api.getindextop()
                        .then(res=>{
                                 console.log(res,'首页banner图')
                                this.paycenter = res.data[0];//交易中心
                                this.severcenter = res.data[1];//服务中心
                                this.jinrongcenter = res.data[2];//金融中心

                        })
                }
        }
</script>
<style >
        a:link{text-decoration: none;}
        .searchbox input, button{border: 0;outline: none;background: none;}
        .searchbox input{font-family: 微软雅黑, Microsoft YaHei, \5FAE\8F6F\96C5\9ED1;font-size: 12px;}
       /* 选项卡共同一级标题 */
       .baner_commontop{display: flex;justify-content: center;align-items: center;color: #909399;padding-top: 20px;padding-bottom: 25px;font-size: 14px;}
        #banner{width: 100%;height: 556px;background-image: url(../../../static/img/index/index_enterprise_bg.jpg);display: flex;justify-content: center;align-items: center;}
        .bnner_all{width: 1200px;height: 86%;background-color: #fff;display: flex;flex-direction: column;overflow: hidden;border-radius: 10px;}
        .el-tabs__content{height: 100%;display: flex;justify-content: center;align-content: center;padding: 0 !important;}
        .el-tab-pane{width: 100%;height: 100%;display: flex;flex-direction: column;}
        .el-tabs--border-card>.el-tabs__content{height: 85% !important;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
        /* banner栏搜索 */
        .baner_search{width: 100%;padding: 15px 0px;background-color: #ebebf3;display: flex;justify-content: center;align-items: center;}
        .searchbox{width: 93%;height: 43px;background: #fff;border-radius: 60px;margin: 0 auto;box-shadow: 0 0 5px #ddd;position: relative;z-index: 11;}
        .searched{width: 1050px;background: #fff;position: absolute;left: 55px;top: 86px;z-index: 10;padding: 10px 20px;border-radius: 0 0 5px 3px;box-shadow: 0 0 10px #eee;display: none;}
        .searchbox .text{width: 1050px;height: 43px;position: absolute;left: 15px;top: 0;color: #666;}
        .searchbox a.btn{display: block;width: 60px;height: 43px;position: absolute;right: 0;top: 0;}
        .searchbox a.btn i{position: absolute;width: 24px;height: 19px;left: 50%;top: 50%;margin-left: -12px;margin-top: -9.5px;background: url(../../../static/img/index/sys_icon.png) no-repeat -40px -0px;}
       /* 选项卡切换头部 */
        .banner_switch{width: 100%;flex: 1;height: 0;}
       .bnner .el-tabs__nav{width: 100%;display: flex;}
        .bnner .el-tabs__nav>div{flex: 1;width: 0;height: 60px;display: flex;align-items: center;justify-content: center;border-left-color: #DCDFE6!important;}
        /* 选中效果 */
       .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{height: 60px!important;display: flex;justify-content: center;align-items: center;}

       /* 交易中心 */
       .baner_trade{height: 100%;width: 100%;display: flex;flex-direction: column;justify-content: end;align-items: center;}
       .baner_trade_cont{width: 100%;padding: 0px 30px;display: flex;justify-content: space-around;align-items: center;}
       .baner_tradecont_item{width: 31%;display: flex;justify-content: center;align-content: center;flex-direction: column;box-shadow: 0px 0px 5px 1px #c1dbf9;}
       .baner_tradeitem_top{width: 100%;height: 100px;}
       .baner_tradeitem_top>img{width: 100%;height: 100%;}
       .baner_tradeitem_bottom{display: flex;flex-direction: column;padding-left: 15px;padding-top: 30px;}
       .baner_tradeitem_bottom a{color: #909399;font-size: 15px;}
       .baner_tradeitem_bottom1{display: flex;flex-wrap: wrap;width: 100%;}
       .baner_tradeitem_bottom1>div{width: 50%;padding: 7px 0;padding-left: 15px;}
       .banimg{background: url(../../../static/img/index/hover_jian.png)no-repeat 0 0; background-size: 100% 100%; }
       .banimg>a{color: #fff !important; font-size: 16px;}
       .baner_tradeitem_bottom2{width: 100%;padding-top: 5px;padding-bottom: 20px;}

        /* 服务中心内容 */
       .baner_sever_cont{width: 100%;/* flex: 1; */padding: 0px 30px;display: flex;}
       .baner_severcont_item{width: 25%;}
       .baner_severcont_topitem{width: 100%;display: flex;justify-content: center;align-items: center;padding-bottom: 30px;font-size: 20px;letter-spacing: 1px;}
       .baner_severcont_botitem{width: 100%;display: flex;flex-wrap: wrap;/* align-items: center; */}
       /* .baner_severcont_botitem{width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;} */
       .baner_botall_item{width: 33.3333%;padding-bottom: 30px;}
       .baner_botall_picitem{width: 100%;display: flex;justify-content: center;align-items: center;padding-bottom: 5px;}
       .baner_botall_picitem img{width: 34px;height: 34px;}
       .baner_botall_textitem p{text-align: center;padding-bottom: 2px;}
        .baner_botall_textitem p:nth-child(1){text-align: center;font-size: 14px;color: #333;}
        .baner_botall_textitem p:nth-child(2){color: #909399;font-size: 13px;}

        /* 金融中心 */
        .baner_jinrongcenter_bot{width: 90%;height: 75%;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
        .baner_jinrongcenter_picbot{width: 48%;height: 100%;display: flex;justify-content: center;align-items: center;}
        .baner_jinrongcenter_picbot img{width: 100%;height: 100%;}

</style>
