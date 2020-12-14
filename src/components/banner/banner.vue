<template>
        <div class="bnner" id="banner">
                <div class="bnner_all">
                      <el-tabs type="border-card" v-model="activeName" class="banner_switch">
                              <!-- 交易中心 -->
                              <el-tab-pane :label="paycenter.name+paycenter.keys" name="first" :key="'first'" class="baner_trade">
                                      <!-- 交易中心标题 -->
                                      <div class="baner_commontop">{{paycenter.keys_tow}}</div>
                                      <!-- 交易中心内容 -->
                                      <div class="baner_trade_cont">
                                              <div class="baner_tradecont_item" v-for="(item,index) in paycenter.children">
                                                      <div class="baner_tradeitem_top">
                                                            <img :src="banimg[index]" alt="">
                                                      </div>
                                                      <div class="baner_tradeitem_bottom banner_mucet">
                                                              <div class="baner_tradeitem_bottom1">
                                                                   <div class="">123</div>
                                                                   <div class="">123</div>
                                                                   <div class="">123</div>
                                                                   <div class="">123</div>
                                                              </div>
                                                              <div class="baner_tradeitem_bottom2">
                                                                   <div class="">123</div>

                                                              </div>
                                                      </div>
                                              </div>
                                      </div>
                              </el-tab-pane>
                              <!-- 服务中心 -->
                              <el-tab-pane :label="label_all[1]+banfz[1]" name="second" :key="'second'">
                                      <!-- 服务中心标题 -->
                                      <div class="baner_commontop">{{message[1]}}</div>
                                      <!-- 服务中心选项卡内容 -->
                                      <div class="baner_cetq">
                                              <div class="banner_muts">
                                                      <div class="banner_mutsop">{{meset[0]}}</div>
                                                      <div class="banner_mucet">
                                                              <div class="banner_muq">
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[0]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[0]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[0]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[1]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[1]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[1]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[2]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[2]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[2]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[3]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[3]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[3]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[4]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[4]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[4]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[5]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[5]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[5]}}
                                                                              </div>
                                                                      </div>
                                                              </div>
                                                      </div>
                                              </div>
                                              <div class="banner_muts">
                                                      <div class="banner_mutsop">{{meset[1]}}</div>
                                                      <div class="banner_mucet">
                                                              <div class="banner_muq">
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[0]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[0]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[0]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[1]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[1]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[1]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[2]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[2]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[2]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[3]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[3]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[3]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[4]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[4]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[4]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[5]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[5]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[5]}}
                                                                              </div>
                                                                      </div>
                                                              </div>
                                                      </div>
                                              </div>
                                              <div class="banner_muts">
                                                      <div class="banner_mutsop">{{meset[2]}}</div>
                                                      <div class="banner_mucet">
                                                              <div class="banner_muq">
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[0]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[0]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[0]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[1]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[1]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[1]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[2]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[2]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[2]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[3]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[3]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[3]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[4]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[4]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[4]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[5]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[5]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[5]}}
                                                                              </div>
                                                                      </div>
                                                              </div>
                                                      </div>
                                              </div>
                                              <div class="banner_muts">
                                                      <div class="banner_mutsop">{{meset[3]}}</div>
                                                      <div class="banner_mucet">
                                                              <div class="banner_muq">
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[0]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[0]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[0]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[1]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[1]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[1]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[2]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[2]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[2]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[3]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[3]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[3]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[4]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[4]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[4]}}
                                                                              </div>
                                                                      </div>
                                                                      <div class="banner_muqblk">
                                                                              <div class="banner_muqimg">
                                                                                      <img :src="bantwimg[5]" alt="">
                                                                              </div>
                                                                              <div class="banner_muqfz">
                                                                                      {{msqtx[5]}}
                                                                              </div>
                                                                              <div class="banner_muqmn">
                                                                                      {{msmin[5]}}
                                                                              </div>
                                                                      </div>
                                                              </div>
                                                      </div>
                                              </div>
                                      </div>
                              </el-tab-pane>
                              <el-tab-pane :label="label_all[2]+banfz[2]" name="three" :key="'three'">
                                      <!-- 金融中心标题 -->
                                      <div class="baner_commontop">{{message[2]}}</div>
                                       <!-- 金融中心选项卡内容 -->
                                      <div class="baner_wfct">
                                              <div class="baner_wdmblk">
                                                      <img :src="banotimg[0]" alt="">
                                              </div>
                                              <div class="baner_wdmblk">
                                                      <img :src="banotimg[1]" alt="">
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
                                paycenter:{},
                                severcenter:{},
                                jinrongcenter:{},
                                activeName: 'first',
                                label_all: ["交易中心", "服务中心", "金融中心"],
                                banfz: ["汇聚优质资源，交易安心", "助力您的企业高速成长", "助力您的企业高速成长"],
                                message: ["立足无形资产交易，布局企业一站式服务，全职律师跟保障", "立足无形资产交易，布局企业一站式服务，全职律师跟保障",
                                        "致力于更多微小企业提供数字金融服务", "服装鞋帽>", "日化>", "查看更多>", "医药用品>", "机械设备>"
                                ],
                                banimg: [
                                        '../../../static/img/index/banner_cteon.png',
                                        '../../../static/img/index/banner_ctetw.png',
                                        '../../../static/img/index/banner_ctetr.png'
                                ],
                                meset: ['商标注册', '专利申请', '版权登记', '企业服务'],
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
                                msqtx: ['商标注册', '无忧注册', '商标转让', '商标续展', '商标变更', '许可备案'],
                                msmin: ['￥800/元', '￥1600/元', '￥700/元', '￥700/元', '￥350/元', '￥350/元'],
                                banotimg: [
                                        '../../../static/img/index/bannerobon.png',
                                        '../../../static/img/index/bannerobtw.png'
                                ]
                        }
                },
                mounted() {
                        console.log(11)
                        this.$api.getindextop()
                        .then(res=>{
                                 console.log(res)
                                console.log(res.data)
                                this.paycenter = res.data[0];
                                this.severcenter = res.data[1];
                                this.jinrongcenter = res.data[2];
                               // this.text = res.data
                        })
                }
        }
</script>
<style>
        a:link{text-decoration: none;}
        input, button{border: 0;outline: none;background: none;}
        input{font-family: 微软雅黑, Microsoft YaHei, \5FAE\8F6F\96C5\9ED1;font-size: 12px;}

        #banner{width: 100%;height: 556px;background-image: url(../../../static/img/index/index_enterprise_bg.jpg);display: flex;justify-content: center;align-items: center;}
        .bnner_all{width: 1200px;height: 86%;background-color: #fff;display: flex;flex-direction: column;overflow: hidden;}
        /* banner栏搜索 */
        .baner_search{width: 100%;padding: 15px 0px;background-color: #ebebf3;display: flex;justify-content: center;align-items: center;}
        .searchbox{width: 1123px;height: 43px;background: #fff;border-radius: 60px;margin: 0 auto;box-shadow: 0 0 5px #ddd;position: relative;z-index: 11;}
        .searched{width: 1050px;background: #fff;position: absolute;left: 55px;top: 86px;z-index: 10;padding: 10px 20px;border-radius: 0 0 5px 3px;box-shadow: 0 0 10px #eee;display: none;}
        .searchbox .text{width: 1050px;height: 43px;position: absolute;left: 15px;top: 0;color: #666;}
        .searchbox a.btn{display: block;width: 60px;height: 43px;position: absolute;right: 0;top: 0;}
        .searchbox a.btn i{position: absolute;width: 24px;height: 19px;left: 50%;top: 50%;margin-left: -12px;margin-top: -9.5px;background: url(../../../static/img/index/sys_icon.png) no-repeat -40px -0px;}
       /* 选项卡切换头部 */
        .banner_switch{width: 100%;flex: 1;height: 0;}
       .el-tabs__nav{width: 100%;display: flex;}
        .el-tabs__nav>div{flex: 1;width: 0;height: 60px;display: flex;align-items: center;justify-content: center;border-left-color: #DCDFE6!important;}
        /* 选中效果 */
       .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{height: 60px!important;display: flex;justify-content: center;align-items: center;}

        /* 选项卡共同标题 */
        .baner_commontop{display: flex;justify-content: center;align-items: center;color: #909399;padding-top: 20px;padding-bottom: 30px;font-size: 14px;}



       .el-tab-pane{width: 100%;height: 100%;}
       .el-tabs--border-card>.el-tabs__content{height: 85% !important;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
       .el-tabs__content{height: 100%;display: flex;justify-content: center;align-content: center;padding: 0 !important;}

       /* 交易中心 */
       .baner_trade{height: 100%;width: 100%;display: flex;flex-direction: column;justify-content: end;align-items: center;}
       .baner_trade_cont{display: flex;flex-direction: row;justify-content: space-around;align-items: center;width: 100%;padding: 0px 30px;}
       .baner_tradecont_item{width: 31%;display: flex;justify-content: center;align-content: center;flex-direction: column;box-shadow: 0px 0px 5px 1px #c1dbf9;}
       .baner_tradeitem_top{width: 100%;height: 100px;}
       .baner_tradeitem_top>img{width: 100%;height: 100%;}
       .baner_tradeitem_bottom{display: flex;flex-direction: column;padding: 0px 30px;padding-top: 30px;}
       .baner_tradeitem_bottom1{display: flex;flex-wrap: wrap;width: 100%;}
        .baner_tradeitem_bottom1>div{width: 50%;padding-bottom: 15px;color: #909399;}
        .baner_tradeitem_bottom2{width: 100%;padding-top: 5px;padding-bottom: 20px;color: #909399;}

        /* 服务中心内容 */
       .baner_cetq{display: flex;justify-content: space-around;align-items: center;flex-direction: row;width: 100%;}
       .banner_muts{width: 288px;height: 260px;}
       .banner_mutsop{width: 100%;height: 50px;display: flex;justify-content: center;align-items: center;}
       .banner_muqblk{height: 100px;width: 80px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
       .banner_muq{width: 100%;height: 100%;display: flex;justify-content: space-around;align-items: center;flex-direction: row;flex-wrap: wrap;}
       .banner_muqimg{width: 100%;height: 40%;display: flex;justify-content: center;align-items: center;}
       .banner_muqimg img{height: 80%;}

        /* 金融中心 */
        .baner_wfct{width: 90%;height: 65%;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;flex-direction: row;}
        .baner_wdmblk{width: 48%;height: 100%;display: flex;justify-content: center;align-items: center;}
        .baner_wdmblk img{width: 100%;height: 100%;}

       /* 交易中心/服务中心共同内容 */
       .banner_mucet{width: 100%;flex: 1;display: flex;justify-content: space-around;align-items: center;}
       .banner_mucet{width: 100%;height: 80%;display: flex;}




</style>
