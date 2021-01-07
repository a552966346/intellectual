<template>
        <div class="technologyHot_all">
                <div v-for="(item, index) in option" :key="index" class="technologyHot_content">
                        <div class="technologyHot_title">
                                <div class="technologyHot_timg" :style="{ 'background-image': 'url(' + item.titleimg + ')' }">
                                        <div><img :src="item.titleimg1" alt=""></div>
                                        <div>{{ item.tit }}</div>
                                </div>
                        </div>
                        <div class="technologyHot_body">
                                <div v-for="(items, index) in item.options" :key="index">
                                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                                                @close="handleClose">
                                                <el-submenu index="1">
                                                        <template slot="title">
                                                                <el-tag size="mini" color="red" class="tag">{{ items.id}}</el-tag>
                                                                <span>{{ items.title }}</span>
                                                        </template>
                                                        <el-menu-item>{{ items.people }}</el-menu-item>
                                                        <el-menu-item>{{ items.number }}</el-menu-item>
                                                        <el-menu-item>{{ items.status }}</el-menu-item>
                                                        <el-menu-item>{{ items.time }}</el-menu-item>
                                                </el-submenu>
                                        </el-menu>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                props: {
                        option: Array,
                },
                data() {

                        return {
                                // option: [
                                //   {
                                //     titleimg: "../../../static/img/technology/technologyHot_list_lr.png",
                                //     titleimg1: "../../../static/img/technology/technologyHotrm.png",
                                //     tit: "热门专利",
                                //   },
                                //   {
                                //     titleimg:
                                //       "../../../static/img/technology/technologyHot_listmiddle.png",
                                //     titleimg1: "../../../static/img/technology/technologyHotzx.png",
                                //     tit: "最新专利",
                                //   },
                                //   {
                                //     titleimg: "../../../static/img/technology/technologyHot_list_lr.png",
                                //     titleimg1: "../../../static/img/technology/technologyHotqg.png",
                                //     tit: "求购专利",
                                //   },
                                // ],
                                // options: [
                                //   {
                                //     id: "1",
                                //     listtitle: "导航一",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                //   {
                                //     id:"2",
                                //     listtitle: "导航二",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                //   {
                                //     id:"3",
                                //     listtitle: "导航三",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                //   {
                                //     id:"4",
                                //     listtitle: "导航四",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                //   {
                                //     id:"5",
                                //     listtitle: "导航五",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                //   {
                                //     id:"6",
                                //     listtitle: "导航六",
                                //     option1: "选项一",
                                //     option2: "选项二",
                                //     option3: "选项三",
                                //     option4: "选项四",
                                //   },
                                // ],
                        };
                },
                methods: {
                        handleOpen() {},
                        handleClose() {}
                }
        };
</script>

<style>

        .technologyHot_all {
                display: flex;
                justify-content: space-between;
                height: 570px;
        }

        .technologyHot_all>div {
                width: 33.3%;
                position: relative;
        }

        .technologyHot_title {
                height: 170px;
        }

        .technologyHot_timg {
                height: 100%;
                background: no-repeat;
                background-size: 100% 100%;
                padding-top: 45px;
        }

        .technologyHot_timg>div {
                text-align: center;
                color: #ffffff;
                font-size: 20px;
        }

        .tag {
                color: #ffffff;
        }

        .technologyHot_content {
                height: 510px;
                display: flex;
                flex-direction: column;
        }

        .technologyHot_content:hover {
                box-shadow: 3px 3px 10px #ccc, -3px -3px 10px #ccc;
                top: -30px;
                height: 570px;
        }

        .technologyHot_body {
                flex: 1;
                overflow: auto;
        }

        .technologyHot_body::-webkit-scrollbar {
                display: none;
        }
</style>
