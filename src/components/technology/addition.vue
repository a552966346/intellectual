<template>
        <!-- 技术转让高附加值服务 -->
        <div id="addition">
                <div class="item" v-for="(item,index) in add">
                        <img :src="item.images" alt="">
                        <div class="item_content">
                                <p>
                                        <img :src="item.images1" alt="">
                                        <span>{{item.title}}</span>
                                </p>
                                <p>{{item.cont}}</p>
                                <p @click="tankuang">
                                       
                                             <span>了解详情</span>
                                             <img src="../../../static/img/technology/jiantou.png" alt="">
                                        
                                </p>
                        </div>
                </div>
                <div class="tanchuang" v-show="isshow" @click.self="shows">
                        <v-customer @shows="shows"></v-customer>
                </div>
        </div>
</template>

<script>
        import customer from '@/components/customers/customer_services.vue'

        export default {
                // 组件中接受的值
                props: {
                        // payleft_img_url:String
                        add:Array,//高附加值服务

                },
                data() {
                        return {
                                active: 0,
                                isshow:false
                        }
                },
                methods: {
                        tankuang(){
                                this.isshow=true
                        },
                        shows(){
                                this.isshow = false
                        },
                },
                components:{
                        'v-customer':customer
                }
        }
</script>
<style scoped>
        *{text-decoration: none;}
       #addition{width: 1200px;margin: 20px auto;background: #fff;display: flex;}
       /* 每一块内容 */
       .item{width: 33%;border-radius: 5px;margin-right: 10px;}
       .item:hover{position: relative;box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);top: -3px;}
       .item:nth-child(3n+3){margin-right: 0px!important;}
       .item>img{width: 100%;}
       .item_content{padding: 30px;}
       .item_content>p:nth-child(1){display: flex;align-items: center;margin-bottom: 20px;font-size: 20px;}
       .item_content>p:nth-child(1)>img{height: 25px;width: 25px;margin-top: 3px;margin-right: 10px;}
       .item_content>p:nth-child(2){font-size: 14px;color: #757575;margin-bottom: 30px;line-height: 22px;}
       .item_content>p:nth-child(3){font-size: 18px;display: flex;align-items: center;}
       .item_content>p:nth-child(3) {display: flex;align-items: center;color: #757575;cursor: pointer;}
       .item_content>p:nth-child(3) img{width: 70px;height: 20px;}

       .item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.9);}
</style>
