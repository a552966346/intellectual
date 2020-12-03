<template>
        <div>
                <v-topsearch></v-topsearch>
                <v-navigation></v-navigation>
                <div class="copyright_pay">
                        <img src="../../../static/img/paycenter/copyright_top.png" alt="">
                        <!-- 分类 -->
                        <patentscreen></patentscreen>
                        <!-- 排序-->
                        <div>
                                <copyrightOrdinary :arr='arr'></copyrightOrdinary>
                        </div>


                        <!-- 猜你喜欢 -->
                        <div>
                                <copyrightBottom :arr='arr'></copyrightBottom>
                        </div>

                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import patentscreen from '@/components/paycenter/patentscreen.vue';             //专利筛选组件
        import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
        import copyrightBottom from '@/components/paycenter/copyrightBottom.vue'
        export default {
                data() {
                        return {
                                animate: false,
                                copyrightList: [{
                                                sort: '09类',
                                                name: '科学仪器',
                                                amount: '****'
                                        },
                                        {
                                                sort: '09类',
                                                name: '科学仪器',
                                                amount: '****'
                                        }
                                ],
                                arr: [{
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年5',
                                                ban: '版权分类：美术作品5',
                                                price: '6000123.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年4',
                                                ban: '版权分类：美术作品4',
                                                price: '6000222.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年3',
                                                ban: '版权分类：美术作品3',
                                                price: '6000333.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年2',
                                                ban: '版权分类：美术作品2',
                                                price: '600033.00',
                                        },
                                        {
                                                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                                                text: '爱你一万年1',
                                                ban: '版权分类：美术作品1',
                                                price: '600033.00',
                                        }
                                ]
                        }
                },
                created: function() {
                        setInterval(this.showcopyright, 2000)
                },
                methods: {
                        showcopyright: function() {
                                this.animate = true;
                                setTimeout(() => {
                                        this.copyrightList.push(this.copyrightList[0]);
                                        this.copyrightList.shift();
                                        this.animate = false;
                                }, 500)
                        },
                },
                components: {
                        copyrightOrdinary,
                        copyrightBottom,
                        patentscreen
                }
        }
</script>

<style scoped>
        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                text-decoration: none;
        }

        .copyright_pay {
                background: #f6f6f6;
        }
</style>
