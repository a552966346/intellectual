<template>
    <div class="bnner" id="banner">
        <el-tabs type="border-card" v-model="activeName" class="banw">
            <el-tab-pane :label="label_all[0]+banfz[0]" name="first" :key="'first'" class="baner_mt">
                <div class="baner_tp">{{message[0]}}</div>
                <div class="baner_cet">
                    <div class="banner_mut">
                        <div class="banner_mutop">
                            <img :src="banimg[0]" alt="">
                        </div>
                        <div class="banner_mucet">
                            <div class="banner_mucetlft">
                                <div>{{message[1]}}</div>
                                <div>{{message[2]}}</div>
                                <a href="">{{message[3]}}</a>
                            </div>
                            <div class="banner_mucetret">
                                <div>{{message[4]}}</div>
                                <div>{{message[5]}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="banner_mut">
                        <div class="banner_mutop" :background_img_url="banimg[1]">
                             <img :src="banimg[1]" alt="">
                        </div>
                        <div class="banner_mucet">
                            <div class="banner_mucetlft">
                                <div>{{message[1]}}</div>
                                <div>{{message[2]}}</div>
                                <a href="">{{message[3]}}</a>
                            </div>
                            <div class="banner_mucetret">
                                <div>{{message[4]}}</div>
                                <div>{{message[5]}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="banner_mut">
                        <div class="banner_mutop" :background_img_url="banimg[2]">
                              <img :src="banimg[2]" alt="">
                        </div>
                        <div class="banner_mucet">
                            <div class="banner_mucetlft">
                                <div>{{message[1]}}</div>
                                <div>{{message[2]}}</div>
                                <a href="">{{message[3]}}</a>
                            </div>
                            <div class="banner_mucetret">
                                <div>{{message[4]}}</div>
                                <div>{{message[5]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane :label="label_all[1]+banfz[1]" name="second" :key="'second'">
                <div class="baner_tp">{{message[0]}}</div>
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
                        </div>
                    </div>
                    <div class="banner_muts">
                        <div class="banner_mutsop">{{meset[2]}}</div>
                        <div class="banner_mucet">
                        </div>
                    </div>
                    <div class="banner_muts">
                        <div class="banner_mutsop">{{meset[3]}}</div>
                        <div class="banner_mucet">
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane :label="label_all[2]+banfz[2]" name="three" :key="'three'">
                <div class="baner_tp">{{message[0]}}</div>
                <div></div>
                <div></div>
                <div></div>
            </el-tab-pane>
             <div class="baner_ft">
                    <div class="searchbox">
                        <input id="searchText" oninput="inputing()" onsubmit="return false;"  type="text" class="text keyword" placeholder="请您输入关键字信息进行搜索如：天猫旗舰店     商标注册     包装设计     网站建设     企业店铺     淘宝/天猫代入驻">
                        <a href="javascript:void(0)" class="btn searchbtn"><i></i></a>
                        <div class="searched" style="display: none;"></div>
                    </div>
                </div>
        </el-tabs>
    </div>
</template>
<script>
     export default {
        data() {
            return {
                activeName: 'first',
                label_all:["交易中心","服务中心","金融中心"],
                banfz:["汇聚优质资源，交易安心","助力您的企业高速成长","助力您的企业高速成长"],
                message:["立足无形资产交易，布局企业一站式服务，全职律师跟保障","服装鞋帽>","日化>","查看更多>","医药用品>","机械设备>"],
                banimg:[
                    '../../../static/img/index/banner_cteon.png',
                    '../../../static/img/index/banner_ctetw.png',
                    '../../../static/img/index/banner_ctetr.png'
                ],
                meset:['商标注册','专利申请','版权登记','企业服务'],
                bantwimg:[
                    '../../../static/img/index/bannertwon.png',
                    '../../../static/img/index/bannertwtw.png',
                    '../../../static/img/index/bannertwtr.png',
                    '../../../static/img/index/bannertwfh.png',
                    '../../../static/img/index/bannertwfv.png',
                    '../../../static/img/index/bannertwsx.png'
                ],
                msqtx:['商标注册','无忧注册','商标转让','商标续展','商标变更','许可备案'],
                msmin:['￥800/元','￥1600/元','￥700/元','￥700/元','￥350/元','￥350/元']
            }
        }
    }
</script>
<style>
    #banner{width: 100%;height: 556px;background-image: url(../../../static/img/index/index_enterprise_bg.jpg);border-radius: 5px;box-shadow: 0 3px 40px 0 rgba(0,0,0,.5);display: flex;justify-content: center;align-items:center;}
    .banw{width: 1200px;height: 476px;}
    .baner_mt{height: 100%; width: 100%; display: flex;justify-content: end;align-items: center;flex-direction: column;}
    .baner_tp{display: flex;justify-content: center;align-items: center;margin: 30px 0;}
    .baner_cet{display: flex;justify-content: space-around;align-items: center;flex-direction: row;width: 100%;}
    .baner_cetq{display: flex;justify-content: space-around;align-items: center;flex-direction: row;width: 100%;}
    .banner_mut{width: 350px;height: 230px;display: flex;justify-content: center;align-content: center;flex-direction:column;box-shadow:  2px 2px 10px 2px #ccc;}
    .baner_ft{border-radius: 0 0 5px 5px;position: absolute;width: 1200px;left: 0;bottom: 10px;}
    .searchbox{width: 1123px;height: 43px;background: #fff;border-radius: 60px;margin: 0 auto;box-shadow: 0 0 5px #ddd;position: relative;z-index: 11;}
    .searched{width: 1050px;background: #fff;position: absolute;left: 55px;top: 86px;z-index: 10;padding: 10px 20px;border-radius: 0 0 5px 3px;box-shadow: 0 0 10px #eee;display: none;}
    .searchbox .text {width: 1050px;height: 43px;position: absolute;left: 15px;top: 0;color: #666;}
    a:link{text-decoration:none;}
    .searchbox a.btn{display: block;width: 60px;height: 43px;position: absolute;right: 0;top: 0;}
    input, button{border: 0;outline: none;background: none;}
    input{font-family:微软雅黑, Microsoft YaHei, \5FAE\8F6F\96C5\9ED1;font-size:12px;}
    .searchbox a.btn i{position: absolute;width: 24px;height: 19px;left: 50%;top: 50%;margin-left: -12px;margin-top: -9.5px;background: url(../../../static/img/index/sys_icon.png) no-repeat -40px -0px;}
    .el-tabs--border-card>.el-tabs__content{height:85% !important;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
    .el-tabs__content{height: 100%;display: flex;justify-content: center;align-content: center;padding: 0 !important;}
    .banner_mutop{width: 100%;height: 100px;}
    .banner_mutop>img{width: 100%;height: 100%;}
    .banner_mucet{width: 100%;flex: 1;display: flex;justify-content: space-around;align-items: center;}
    .banner_mucetlft{display: flex;justify-content: baseline;align-items: flex-start;flex-direction: column;height: 80%;width: 50%; border-right: 1px solid #ccc;padding: 5px;display: flex;justify-content: space-between;align-items: end;flex-direction: column;}
    .banner_muts{width: 288px;height: 260px;}
    .banner_mutsop{width: 100%;height: 50px;display: flex;justify-content: center;align-items: center;}
    .el-tabs--border-card>.el-tabs__header{height: 60px !important;}
    .el-tabs__nav-wrap{height: 100%;}
    .el-tabs__nav-scroll{height: 100%;}
    .el-tabs__nav{height: 100% !important;width: 100%;display: flex;justify-content: space-around;align-items: center;}
    .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{height: 100% !important;display: flex;justify-content: space-around;align-items: center;}
    .el-tab-pane{width: 100%;height: 100%;}
    .banner_muqblk{height: 100px;width: 80px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
    .banner_mucet{width: 100%; height: 80%; display: flex;}
    .banner_muq{width: 100%; height: 100%; display: flex;justify-content: space-around;align-items: center;flex-direction: row;flex-wrap: wrap;}
    .banner_muqimg{width: 100%;height: 60%;}
    .banner_muqimg img{width: 100%;height: 100%;}
</style>