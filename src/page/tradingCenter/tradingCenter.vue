<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="consultation_all">
                        <!-- 导航 -->
                        <div></div>
                        <!--  -->
                        <div>交易中心>版权变更</div>
                        <!-- 中间内容 -->
                        <div class="consultation_center">
                                <!-- 左边内容 -->
                                <div class="consultation_right">
                                        <v-apply></v-apply>
                                        <v-process :list="list" :service="service"></v-process>
                                </div>
                                <!-- 右边内容 -->
                                <div class="consultation_left">
                                        <v-consultation :det="det"></v-consultation>
                                </div>
                        </div>
                </div>
                1
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import consultation from '../../components/consultation/consultation.vue';
        import proce from '../../components/process/process.vue';
        import apply from '../../components/apply/apply.vue'
        export default {
                name: 'tradingcenter',
                data() {
                        return {
                                msg: '这是测试内容',
                                det: {
                                        src: 'http://zjgqniu.jzhxwl.com/uploads/20201121/FvQyxh_jSa7GW_EjGD4xgGidXMuU.jpg',
                                        text: '伊甸城-舒畅',
                                        arr: [{
                                                        hour: '23小时',
                                                        text: '******购买了商标',
                                                        type: "09类-科学仪器，编号*****"
                                                },
                                                {
                                                        hour: '21小时',
                                                        text: '******购买了商标1',
                                                        type: "09类-科学仪器1，编号*****"
                                                }
                                        ],
                                        patent: [{
                                                        src:'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
                                                        name: '门板涂漆装置',
                                                        money: '18800',
                                                },
                                                {
                                                        src: 'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
                                                        name: '门板涂漆装置',
                                                        money: '20000',
                                                }
                                        ]
                                },
                                 list:[
                                        {name:'服务详情'},
                                        {name:'申请流程'},
                                        {name:'所需材料'},
                                        {name:'伊甸优势'},
                                        {name:'服务承诺'},
                                        {name:'常见问题'}
                                ],
                                service:[
                                        {
                                                name:'服务详情',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        },
                                        {
                                                name:'申请流程',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        },
                                        {
                                                name:'所需材料',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        },
                                        {
                                                name:'伊甸优势',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        },
                                        {
                                                name:'服务承诺',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        },
                                        {
                                                name:'常见问题',
                                                img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg'
                                        }
                                ]

                        }
                },
                components: {
                        'v-consultation': consultation,
                        'v-process':proce,
                        'v-apply':apply,
                }
        }
</script>

<style scoped>
        /* scoped 样式隔离 */
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        .consultation_all {
                max-width: 1200px;
                margin: 0 auto;
        }

        .consultation_center {
                display: flex;
        }

        .consultation_right {
                flex: 1;
                padding-right: 20px;
        }

        .consultation_left {
                width: 220px;
        }
</style>
