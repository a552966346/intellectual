<template>
        <!-- 技术转移首页的专利排行榜 -->
        <div id="toplist">
                <div class="item"v-for="(item,index) in rank" @mouseleave="con1s=[]">
                        <img :src="item.image" alt="">
                        <div class="itemall">
                                <div class="item_list" v-for="(items,index1) in item.cont">
                                        <div class="item_list_item" @click="con1(index,index1)" >
                                                <router-link to="">
                                                        <span>{{items.id}}</span>
                                                        <p>{{items.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-show="con1s[index]==index1">
                                                <p>发明人:{{items.detail.people}}</p>
                                                <p>申请号:{{items.detail.number}}</p>
                                                <p>专利状态:{{items.detail.status}}</p>
                                                <p>发布时间:{{items.detail.time}}</p>
                                        </div>
                                </div>

                        </div>

                        <div class="item_bottom">
                                <img src="../../../static/img/technology/enter.png" alt="">
                        </div>
                </div>
                <!-- <div class="item">
                        <img :src="rank[1].image" alt="">
                        <div class="itemall">
                                <div class="item_list" v-for="(item,index) in rank[1].cont">
                                        <div class="item_list_item" @click="con2(index)" >
                                                <router-link to="">
                                                        <span>{{item.id}}</span>
                                                        <p>{{item.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-if="con1s[1]==index">
                                                <p>发明人:{{item.detail.people}}</p>
                                                <p>申请号:{{item.detail.number}}</p>
                                                <p>专利状态:{{item.detail.status}}</p>
                                                <p>发布时间:{{item.detail.time}}</p>
                                        </div>
                                </div>

                        </div>

                        <div class="item_bottom">
                                <img src="../../../static/img/technology/enter.png" alt="">
                        </div>
                </div>
                <div class="item">
                        <img :src="rank[2].image" alt="">
                        <div class="itemall">
                                <div class="item_list" v-for="(item,index) in rank[2].cont">
                                        <div class="item_list_item" @click="con3(index)">
                                                <router-link to="">
                                                        <span>{{item.id}}</span>
                                                        <p>{{item.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-if="con1s[2]==index">
                                                <p>发明人:{{item.detail.people}}</p>
                                                <p>申请号:{{item.detail.number}}</p>
                                                <p>专利状态:{{item.detail.status}}</p>
                                                <p>发布时间:{{item.detail.time}}</p>
                                        </div>
                                </div>

                        </div>

                        <div class="item_bottom">
                                <img src="../../../static/img/technology/enter.png" alt="">
                        </div>
                </div> -->
        </div>
</template>
<script>
        export default {
                props: {
                        // payleft_img_url:String
                        rank:Array,
                },
                data() {
                        return {
                                active: 0,
                                con1s:[],
                        }
                },
                methods: {
                        // enter(index,index1){
                        //         this.$set(this.num,index,index1);
                        // }
                        con1(index,index1){
                                this.$set(this.con1s,index,index1)
                        },

                }
        }
</script>
<style scoped>
        *{text-decoration: none;}
        #toplist{width: 1200px;margin: 20px auto;background: #fff;display: flex;}
        .item{width: 33.3%;}
        .itemall{padding: 30px 30px 10px 30px;}
        .item>img{width: 100%;}
        .item_list{margin-bottom: 30px;}
        .item_list .item_list_item a{display: flex;align-items: center;font-size: 16px;justify-content: space-between;color: #333;}
        .item_list .item_list_item p{flex: 1;padding: 0px 15px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
        .itemall .item_list:nth-child(1) .item_list_item span{background: #f54643;color: #fff;}
        .itemall .item_list:nth-child(2) .item_list_item span{background: #ff8544;color: #fff;}
        .itemall .item_list:nth-child(3) .item_list_item span{background: #ffa933;color: #fff;}

        .item_list .item_list_item span{display: inline-block;width: 15px;height: 15px;background: #f6f6f6;color: #bebdc3;font-size: 10px;text-align: center;line-height: 15px;}
        .item_list .item_list_item img{width: 20px;}
        .item_list_detailitem{padding: 0px 30px;}
        .item_list_detailitem p{padding-top: 10px;font-size: 12px;}

        .item_bottom{width: 100%;display: flex;justify-content: flex-end;padding-right: 20px;}
        .item_bottom>img{width: 80px;height: 40px;}

        .item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);}
</style>
