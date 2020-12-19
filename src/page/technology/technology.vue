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
                <div class="technology_list">
                        <v-toplist></v-toplist>
                </div>


                <!-- 项目对接与推荐 -->
                <v-comtitle :title="title_all[3]" :color='title_color'
                        :background_img_url='title_bg_url[3]'></v-comtitle>
                <div class="technology_list">
                        <v-project></v-project>
                        <v-map></v-map>
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
                       // new Swiper ('.swiper-container', {
                       //         loop: true,
                       //         slidesPerView: 3,
                       //         observer:true,
                       //         spaceBetween: 30,
                       //         nextButton: '.swiper-button-next',
                       //         prevButton: '.swiper-button-prev',

                       //   })
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
