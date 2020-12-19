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
                                <p>
                                        <router-link to="">
                                             <span>了解详情</span>
                                             <img src="../../../static/img/technology/jiantou.png" alt="">
                                        </router-link>
                                </p>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                // 组件中接受的值
                props: {
                        // payleft_img_url:String
                        add:Array,//高附加值服务

                },
                data() {
                        return {
                                active: 0
                        }
                },
                methods: {

                }
        }
</script>
<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
       #addition{width: 1200px;margin: 20px auto;background: #fff;display: flex;}
       /* 每一块内容 */
       .item{width: 33%;border-radius: 5px;box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);margin-right: 10px;}
       .item:nth-child(3n+3){margin-right: 0px!important;}
       .item>img{width: 100%;}
       .item_content{padding: 30px;}
       .item_content>p:nth-child(1){display: flex;align-items: center;margin-bottom: 20px;font-size: 20px;}
       .item_content>p:nth-child(1)>img{height: 25px;width: 25px;margin-top: 3px;margin-right: 10px;}
       .item_content>p:nth-child(2){font-size: 14px;color: #757575;margin-bottom: 30px;line-height: 22px;}
       .item_content>p:nth-child(3){font-size: 18px;display: flex;align-items: center;}
       .item_content>p:nth-child(3) a{display: flex;align-items: center;color: #757575;}
       .item_content>p:nth-child(3) img{width: 70px;height: 20px;}

       .item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.9);}
</style>
