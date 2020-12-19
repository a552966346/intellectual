<template>
        <div class="trademark_content">
                <ul class="trademark_list">
                        <li class="color1" v-for="(item,index) in iscent" :key="index+'list'">
                                <!-- <router-link class="trademark_pro" :to="{path:'/service_xlj',query:{ id:item.id}}"> -->
                                        <div class="trademark_colors" :style="{background:item.bgcolor}">
                                                <router-link class="trademark_pro" :to="{path:'/service_xlj',query:{ id:item.id}}">
                                                <div class="trademark_sele">
                                                        <img :src="item.images_text[0]">
                                                </div>
                                                </router-link>
                                                <div class="trademark_selector">
                                                        <div class="trademark_coloritem" :style="{background: m}" v-for="(m,i) in color"
                                                                @click="colorbtn(m,i,index)" :key="m"></div>
                                                </div>
                                        </div>
                                        <p class="trademark_p1">
                                                <span>{{item.name}}</span>
                                                <img src="../../../static/img/paycenter/copyright_like.png" alt="">
                                        </p>
                                        <p class="trademark_p2">{{item.categoryid_text}}</p>
                                        <p class="trademark_p3">
                                                <span class="trademark_price"><label>￥</label>{{item.fee}}</span>
                                                <img src="../../../static/img/paycenter/copyright_right.png" alt="">
                                        </p>
                                        <div class="trademark_kefu" href="#">立即议价</div>
                                <!-- </router-link> -->
                        </li>
                </ul>
        </div>
</template>

<script>
        export default {
                data() {
                        return {
                                currentId: '111111',
                                color: ['rgb(230, 92, 92)', 'rgb(246, 139, 108)', 'rgb(246, 189, 108)',
                                        'rgb(126, 152, 205)', 'rgb(197, 120, 209)'
                                ],
                        }
                },
                props:['iscent'],
                methods: {
                        /*
                         * m-----当前选中的颜色
                         * i-----当前选中颜色在这个数组中的下标
                         * index----最外面数组 当前选中的下标
                         * */
                        colorbtn(m, i, index) {
                                this.$set(this.iscent[index], 'bgcolor', m);
                                this.$forceUpdate();
                                // this.iscent[index];
                                this.$emit('colorbtn',m,index)
                        }
                }
        }
</script>

<style scoped>
        .trademark_content {
                max-width: 1200px;
                margin: 0 auto;
        }

        .trademark_list {
                display: flex;
                flex-wrap: wrap;
                margin-left: -1%;
        }

        .trademark_list li {
                list-style: none;
                margin-left: 1%;
                width: 19%;
                padding: 10px;
                background: #fff;
                height: 360px;
                margin-bottom: 20px;
        }

        .trademark_list a {
                text-decoration: none;
                color: black;
        }

        .trademark_list li>a:first-child {
                display: block;
                width: 100%;
                overflow: hidden;
        }

        .trademark_list li:hover .trademark_coloritem {
                display: block;
        }

        .trademark_list li:hover .trademark_kefu {
                display: block;
        }

        .trademark_list li:hover .trademark_p2 {
                display: none;
        }

        .trademark_colors {
                height: 235px;

        }

        .trademark_sele>img {
                /* max-width: 210px; */
                width: 100%;
                padding: 10px;
                max-height: 210px;
        }

        .trademark_sele {
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
        }

        .trademark_selector {
                width: 100%;
                height: 21px;
                box-sizing: border-box;
                padding: 3px;
                display: flex;
                justify-content: center;
        }

        .trademark_coloritem {
                width: 20%;
                height: 15px;
                box-sizing: border-box;
                border: 1px solid rgba(255, 255, 255, .8);
                float: left;
                cursor: pointer;
                display: none;
        }

        .trademark_p1 {
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        .trademark_p1>img {
                width: 15px;
                margin-right: 10px;
        }

        .trademark_p1>span {
                font-size: 15px;
                font-weight: 200;
        }

        .trademark_p2 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 10px 0;
                font-size: 12px;
                color: #ccc;
        }

        .trademark_p3 {
                border-top: 1px solid #cecece;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 9px;
        }

        .trademark_p3>span {
                font-size: 15px;
                color: #fa7219;
                font-weight: bold;
        }

        .trademark_p3>img {
                width: 15px;
        }

        .trademark_kefu {
                display: none;
                background-color: #187fc4;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                padding: 8px 0;
        }
</style>
