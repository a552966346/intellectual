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
          
        </div>
                                <!-- 右边内容 -->
                                <div class="consultation_left">
                                        <v-consultation :det="det"></v-consultation>
                                </div>
                        </div>
                </div>
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import consultation from '../../components/consultation/consultation.vue'
        export default {
                name: 'copyrightChanges',
                data() {
                        return {
                                msg: '这是测试内容',
                                det: {
                                        src: 'http://zjgqniu.jzhxwl.com/uploads/20201121/FvQyxh_jSa7GW_EjGD4xgGidXMuU.jpg',
          text:'伊甸�李岩',
                                        arr: [{
                                                        hour: '23小时',
                                                        text: '******购买了商�,
                                                        type: "09�科学仪器，编�****"
                                                },
                                                {
                                                        hour: '21小时',
                                                        text: '******购买了商�',
                                                        type: "09�科学仪器1，编�****"
                                                }
                                        ],
                                        patent: [{
                                                        src: 'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
                                                        name: '门板涂漆装置',
                                                        money: '18800',
                                                },
                                                {
                                                        src: 'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
                                                        name: '门板涂漆装置',
                                                        money: '20000',
                                                }
                                        ]
                                }
                        }
                },
                components: {
                        'v-consultation': consultation
                }
        }
          arr:[
            {
              hour:'23小时',
              text:'******购买了商�,
              type:"09�科学仪器，编�****"
            },
            {
              hour:'21小时',
              text:'******购买了商�',
              type:"09�科学仪器1，编�****"
            }
          ],
          patent:[
            {
              src:'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
              name:'门板涂漆装置',
              money:'18800',
            },
            {
              src:'http://zjgqniu.jzhxwl.com/uploads/20201123/Fq4exNFF1hssRkCty125mSGQqFqv.jpg',
              name:'门板涂漆装置',
              money:'20000',
            }
          ]
        }
      }
    },
    components:{
      'v-consultation':consultation
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
                background-color: #187FC4;
        }

        .consultation_center {
                display: flex;
        }

        .consultation_right {
                flex: 1;
        }

        .consultation_left {
                width: 220px;
        }
</style>
