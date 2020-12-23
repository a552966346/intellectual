<template>
        <div>
                <!-- 公共搜索头部 -->
                <v-topsearch></v-topsearch>
                <!-- 顶部导航 -->
                <v-navigation></v-navigation>
                <!-- 顶部banner图 -->
                <div class="technology_top">
                        <img src="../../../static/img/technology/banner.png" alt="altText">
                        <!-- 选项卡搜索 -->
                        <div class="technology_sousuo">
                                <div class="technology_jishu">
                                        <div :class="{active:acv==index}" v-for="(item,index) in arr" :key="index"
                                                @click="qiehuan(index)">{{item}}</div>
                                </div>
                                <!-- 技术转让 -->
                                <div :class="{display:acv==1}">
                                        <div class="technology_sou">
                                                <div class="technology_input">
                                                        <input type="text" placeholder="请输入想要查找的技术丶专利名称">
                                                </div>
                                                <div class="technology_search">搜索</div>
                                        </div>
                                        <div class="technology_flex">
                                                <div>技术成果推广</div>
                                                <div>科技成果评价</div>
                                                <div>商业计划书</div>
                                                <div>企业陪跑</div>
                                                <div>招投标</div>
                                        </div>
                                </div>
                                <!-- 技术需求 -->
                                <div :class="{display:acv==0}">
                                        <div class="technology_sou">
                                                <div class="technology_input">
                                                        <input type="text" placeholder="请输入想要查找的技术丶专利名称1">
                                                </div>
                                                <div class="technology_search">搜索</div>
                                        </div>
                                        <div class="technology_flex">
                                                <div>技术成果推广1</div>
                                                <div>科技成果评价1</div>
                                                <div>商业计划书</div>
                                                <div>企业陪跑</div>
                                                <div>招投标</div>
                                        </div>
                                </div>
                        </div>
                </div>
                <!-- 技术转移服务标题 -->
                <div class="technology_transfer">
                     <v-comtitle :title="title_all[0]"  :color='title_color'
                                :background_img_url='title_bg_url[0]'></v-comtitle>
                </div>
                <!-- 技术转让 -->
                <div class="technology_list">
                        <v-search :payleft_img_url="payleft_img_url[0]" :transfer='transfer'></v-search>
                </div>
                <!-- 最新需求 -->
                <div class="technology_list">
                        <!-- <v-search :payleft_img_url="payleft_img_url"></v-search> -->
                        <v-demand :payleft_img_url="payleft_img_url[1]" :demand='newneed'></v-demand>
                </div>
                <!-- 高附加值服务 -->
                <v-comtitle :title="title_all[1]"  :color='title_color'
                        :background_img_url='title_bg_url[1]'></v-comtitle>
                <div class="technology_list">
                        <v-addition :add="addall"></v-addition>
                </div>

                <!-- 专利排行榜 -->
                <v-comtitle :title="title_all[2]"  :color='title_color'
                        :background_img_url='title_bg_url[2]'></v-comtitle>
                <div class="technology_list" >
                        <v-toplist :rank="ranking"></v-toplist>
                </div>


                <!-- 项目对接与推荐 -->
                <v-comtitle :title="title_all[3]" :color='title_color'
                        :background_img_url='title_bg_url[3]'></v-comtitle>
                <div class="technology_list">
                        <v-project :project="project"></v-project>
                        <v-map :contract='contract'></v-map>
                </div>

                <!-- 公共底部 -->
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import navigation from '@/components/navigation/navigation.vue';
        import search from '@/components/technology/search.vue';
        import demand from '@/components/technology/demand.vue';
        import addition from '@/components/technology/addition.vue';
        import toplist from '@/components/technology/toplist.vue';
        import project from '@/components/technology/project.vue';
        import map from '@/components/technology/map.vue'
        export default {
                name: 'technology',
                data() {
                        return {
                                arr: [
                                        '技术转让', '技术需求'
                                ],
                                acv: 0,
                                title_color: '#1a82c2',
                                // title_color1: '#fff',
                                // title_text_all: [ ],
                                title_all: ["技术转移服务", '高附加值服务', '专利排行榜', '项目对接与推荐'],//所有的一级标题
                                // 所有的一级标题的背景
                                title_bg_url: ['../../../static/img/technology/jishuzhuanyi.png',
                                        '../../../static/img/technology/gaofujiazhi.png',
                                        '../../../static/img/technology/zhuanli.png',
                                        '../../../static/img/technology/xiangmuduijie.png',
                                ],
                                //技术转移侧边栏图片
                                payleft_img_url: ['../../../static/img/technology/list1.png','../../../static/img/technology/list2.png'],
                                transfer:[],//技术转让右侧列表
                                newneed:[],//最新需求右侧列表
                                // 高附加值服务
                                addall:[{
                                        images:'../../../static/img/technology/tecservice1.png',
                                        images1:'../../../static/img/technology/seveice.png',
                                        title:'专利服务',
                                        cont:'专利服务其实是知BAI知产权里边的一个服DU之一，同时也是一个重要的服务之一。'
                                },{
                                       images:'../../../static/img/technology/tecservice2.png',
                                       images1:'../../../static/img/technology/seveice.png',
                                       title:'商标服务',
                                       cont:'服务商标与商品商标具有相同的特征与特点。区别在与服务商标意识的是服务项目，商品商标标识的是有形商品。'
                                },{
                                        images:'../../../static/img/technology/tecservice3.png',
                                        images1:'../../../static/img/technology/seveice.png',
                                        title:'金融服务',
                                        cont:'金融服务是指金融机构运用货币交易手段融通有价物品，向金融活动参与者和顾客提供的共同受益、获得满足的活动。'
                                }],
                                // 项目对接与推荐
                                project:{
                                     cont:'伊甸城知识产权展示交易中心以服务高校科研院所及科创企业知识产权成果转移转化为核心，致力于建设知识产权登记、托管、挂牌、交易、转化、运营、融资、保护为一体的专业化、规范化的知识产权产业链生态平台，构建知识产权及知识产权运营及知识产权融资服务体系并探索知识产权产业化、资本化、国际化道路。',
                                     pic:['../../../static/img/index/index_intro_swiper.png','../../../static/img/index/index_intro_swiper.png','../../../static/img/index/index_intro_swiper.png']

                                },
                                // 联系方式
                                contract:{
                                        cont:'您好，如果有项目对接，请联系我司。',
                                        phone:'18910769211',
                                        email:'info@edencity.cn',
                                        address:'山西智创城NO.4-伊甸创新创业基地知识产权展示交易中心'
                                },
                                // 专利排行榜
                                ranking:[{
                                             image:'../../../static/img/technology/toplist1.png',
                                             cont:[{
                                                     id:1,
                                                     title:'一种多功能坡度测量仪(公开号:123)',
                                                     detail:{
                                                             people:'小王1-1',
                                                             number:'CN1-1',
                                                             status:'未知1-1',
                                                             time:'2020-12-21'
                                                     }
                                             },{
                                                  id:2,
                                                  title:'一种道路清雪(公开号：123)',
                                                  detail:{
                                                          people:'小王1-2',
                                                          number:'CN1-2',
                                                          status:'未知1-2',
                                                          time:'2020-12-21'
                                                        }
                                             },{
                                                id:3,
                                                title:'可自动调整扭转刚度的翻转装',
                                                detail:{
                                                        people:'小王1-3',
                                                          number:'CN1-3',
                                                          status:'未知1-3',
                                                          time:'2020-12-21',
                                                        }
                                             },{
                                                 id:4,
                                                 title:'十字形贴片双模微带带通滤波器',
                                                 detail:{
                                                         people:'小王1-4',
                                                           number:'CN1-4',
                                                           status:'未知1-4',
                                                           time:'2020-12-21',
                                                 }
                                             },{
                                                id:5,
                                                title:'专利交易-我要出售：潜泳器',
                                                detail:{
                                                        people:'小王1-5',
                                                        number:'CN1-5',
                                                        status:'未知1-5',
                                                        time:'2020-12-21',
                                                }
                                             },{
                                                id:6,
                                                title:'六开模模架',
                                                detail:{
                                                        people:'小王1-6',
                                                        number:'CN1-6',
                                                        status:'未知1-6',
                                                        time:'2020-12-21',
                                                }
                                             }]
                                        },
                                        {
                                             image:'../../../static/img/technology/toplist2.png',
                                             cont:[{
                                                     id:1,
                                                     title:'超薄大直径吸顶风扇灯',
                                                     detail:{
                                                             people:'小王2-1',
                                                             number:'CN2-1',
                                                             status:'未知2-1',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:2,
                                                     title:'一种可伸展的马桶水箱盖',
                                                     detail:{
                                                             people:'小王2-2',
                                                             number:'CN2-2',
                                                             status:'未知2-2',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:3,
                                                     title:'一种出烟点烟一体式烟盒',
                                                     detail:{
                                                             people:'小王2-3',
                                                             number:'CN2-3',
                                                             status:'未知2-3',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:4,
                                                     title:'一种上楼辅助装置',
                                                     detail:{
                                                             people:'小王2-4',
                                                             number:'CN2-4',
                                                             status:'未知2-4',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:5,
                                                     title:'无链条齿轮人力车',
                                                     detail:{
                                                             people:'小王2-5',
                                                             number:'CN2-5',
                                                             status:'未知2-5',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:6,
                                                     title:'一种防冻输水管路',
                                                     detail:{
                                                             people:'小王2-6',
                                                             number:'CN2-6',
                                                             status:'未知2-6',
                                                             time:'2020-12-21',
                                                     }
                                             }]
                                        },
                                        {
                                             image:'../../../static/img/technology/toplist1.png',
                                             cont:[{
                                                     id:1,
                                                     title:'M专利交易:鞋底防滑',
                                                     detail:{
                                                             people:'小王3-1',
                                                             number:'CN3-1',
                                                             status:'未知3-1',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:2,
                                                     title:'买专利一种净化空气窗',
                                                     detail:{
                                                             people:'小王3-2',
                                                             number:'CN3-2',
                                                             status:'未知3-2',
                                                             time:'2020-12-21',
                                                    }
                                             },{
                                                     id:3,
                                                     title:'专利交易--专利求购：实用型高',
                                                     detail:{
                                                             people:'小王3-3',
                                                             number:'CN3-3',
                                                             status:'未知3-3',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:4,
                                                     title:'一种离心式强力污水处理装置',
                                                     detail:{
                                                             people:'小王3-4',
                                                             number:'CN3-4',
                                                             status:'未知3-4',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:5,
                                                     title:'M专利交易:氢燃料电池',
                                                     detail:{
                                                             people:'小王3-5',
                                                             number:'CN3-5',
                                                             status:'未知3-5',
                                                             time:'2020-12-21',
                                                     }
                                             },{
                                                     id:6,
                                                     title:'购买专利蓝莓饮料专利',
                                                     detail:{
                                                             people:'小王3-6',
                                                             number:'CN3-6',
                                                             status:'未知3-6',
                                                             time:'2020-12-21',
                                                     }
                                             }]
                                        }
                                ]

                        }

                },
                methods: {
                        qiehuan(ind) {
                                this.acv = ind
                        }
                },
                components: {
                        'v-navigation': navigation,
                        'v-search': search,
                        'v-demand': demand,
                        'v-addition': addition,
                        'v-toplist': toplist,
                        'v-project': project,
                        'v-map': map
                },
                mounted(){
                       this.$api.gettransfer()
                       .then(res=>{
                               console.log(res,'技术转让')
                               this.transfer=res.data;
                               // this.transaction=res.data.transaction;
                               // this.num1=res.data.count;
                       })
                       this.$api.getnewneed()
                       .then(res=>{
                               console.log(res,'最新需求')
                               this.newneed=res.data;
                               // this.transaction=res.data.transaction;
                               // this.num1=res.data.count;
                       })
                }
        }
</script>

<style scoped="scoped">
        *{padding: 0;margin: 0;box-sizing: border-box;text-decoration: none;list-style: none;}
        .display{display: none;}
        /* bannner图 */
        .technology_top{position: relative;display: flex;justify-content: center;}
        .technology_top img{width: 100%;}
        .technology_sousuo{width: 750px;padding: 40px 50px;border-radius: 5px;background-image: url(../../../static/img/technology/dbbgimg.png);background-size: 100% 100%;bottom: -100px;position: absolute;}
        /* 技术转移服务标题 */
        .technology_transfer{padding-top: 120px;}
        /* 技术转让 */
        .technology_list{width: 1200px;margin: 30px auto;}

        .technology_jishu{display: flex;}
        .technology_jishu>div{width: 120px;height: 40px;line-height: 40px;text-align: center;background-color: #f4f3ef;cursor: pointer;}
        .active{color: white;background-color: #187fc4 !important;}
        .technology_sou{display: flex;align-items: center;}
        .technology_search{width: 120px;height: 45px;line-height: 45px;color: white;background-color: #187fc4;text-align: center;cursor: pointer;}
        .technology_input{flex: 1;width: 0;}
        .technology_input input{width: 100%;border: 1px solid #187fc4;height: 45px;padding-left: 20px;font-size: 15px;}
        .technology_flex{display: flex;align-items: center;flex-wrap: wrap;}
        .technology_flex>div{font-size: 13px;color: #999;margin-right: 15px;margin-top: 15px;}

</style>
