<template>
        <!-- 技术转移首页的专利排行榜 -->
        <div id="toplist">
                <div class="item">
                        <img :src="rank[0].image" alt="">
                        <div class="itemall">
                                <div class="item_list" v-for="(item,index) in rank[0].cont">
                                        <div class="item_list_item" @mouseenter="con1=index" @mouseleave="con1=-1">
                                                <router-link to="">
                                                        <span>{{item.id}}</span>
                                                        <p>{{item.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-if="con1==index">
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
                        <img :src="rank[1].image" alt="">
                        <div class="itemall">
                                <div class="item_list" v-for="(item,index) in rank[1].cont">
                                        <div class="item_list_item" @mouseenter="con2=index" @mouseleave="con2=-1">
                                                <router-link to="">
                                                        <span>{{item.id}}</span>
                                                        <p>{{item.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-if="con2==index">
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
                                        <div class="item_list_item" @mouseenter="con3=index" @mouseleave="con3=-1">
                                                <router-link to="">
                                                        <span>{{item.id}}</span>
                                                        <p>{{item.title}}</p>
                                                        <img src="../../../static/img/technology/toplistjiantou1.png" alt="">
                                                </router-link>
                                        </div>
                                       <div class="item_list_detailitem" v-if="con3==index">
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
                                con1:-1,
                                con2:-1,
                                con3:-1,
                        }
                },
                methods: {
                        // enter(index,index1){
                        //         console.log(index1)
                        //         this.$set(this.num,index,index1);
                        //         console.log(this.num)
                        // }
                }
        }
</script>
<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;text-decoration: none;}
        #toplist{width: 1200px;margin: 20px auto;background: #fff;display: flex;/* border: 1px solid #3333;*/}
        .item{width: 33.3%;/* border-radius: 5px;*//* box-shadow: 0 0px 5px 5px rgba(212,224,240,0.5);*//* margin-right: 3px;*//* padding: 30px;*/}
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
        .item_list_detailitem p{padding-top: 10px;}

        .item_bottom{width: 100%;display: flex;justify-content: flex-end;padding-right: 20px;}
        .item_bottom>img{width: 80px;height: 40px;}

        .item:hover{box-shadow: 0 0px 5px 5px rgba(212, 224, 240, 0.5);}
</style>
