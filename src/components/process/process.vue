<template>
        <div class="process_all">
                <div class="process_list">
                        <a :href="'#process_text'+index" :class="{'active':active==index}" v-for="(item,index) in list" :key="index" @click="selects(index)">{{item.name}}</a>
                </div>
                <div>
                        <div class="process_text" v-for="(item,index) in service" :key="index" :id="'process_text'+index">
                                <div class="process_fle" id="process_ti">
                                        <img src="../../../static/img/process/process_xiao.png" alt="">
                                        <div>{{item.name}}</div>
                                </div>
                                <div class="process_wan" v-if="(index+1)<service.length">
                                        <img :src="item.img" alt="">
                                </div>
                                <div class="process_wan1" v-else>
                                        <div>
                                                <div class="process_q"><span>Q</span></div>
                                                <div class="process_yi">
                                                        <h4>伊甸城川理服务费说明</h4>
                                                        <p>
                                                               伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明
                                                        </p>
                                                </div>
                                        </div>
                                        <div>
                                                <div class="process_q"><span>Q</span></div>
                                                <div class="process_yi">
                                                        <h4>伊甸城川理服务费说明</h4>
                                                        <p>
                                                               伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明
                                                        </p>
                                                </div>
                                        </div>
                                        <div>
                                                <div class="process_q"><span>Q</span></div>
                                                <div class="process_yi">
                                                        <h4>伊甸城川理服务费说明</h4>
                                                        <p>
                                                               伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明伊甸城川理服务费说明
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        import Vue from 'vue'
        export default {
          name: 'process',
          data() {
            return {
                active: 0,
            }
          },
          methods:{
                selects(num){
                        this.active = num
                }
          },
          props:{
            det:Object,
            list:Array,
            service:Array
          }
        }
</script>

<style scoped="scoped">
        .process_all{
                width: 100%;
                padding: 10px;
                box-shadow: 3px 0px 9px 1px rgba(183, 183, 183, 0.5);
                background-color: white;
        }
        .process_list{
                display: flex;
                align-items: center;
                border-bottom: 1px dotted #CCCCCC;
                line-height: 40px;
        }
        .process_list>a{
                margin-right: 20px;
                cursor: pointer;
                text-decoration: none;
                color: black;
        }
        .active{
                color: #1780C2!important;
                border-bottom: 3px solid #1780C2;
        }
        .process_text{
                margin-bottom: 30px;
                margin-top: 15px;
        }
        .process_fle{
                display: flex;
                align-items: center;
                margin: 20px 0;
        }
        .process_fle img{
                margin-right: 10px;
        }
        .process_wan img{width: 100%;}
        .process_wan1{
                display: flex;
                flex-wrap: wrap;
        }
        .process_wan1>div{
                width: 48%;
                margin-left: 2%;
                background-color: #e8f3f9;
                display: flex;
                padding: 15px;
                margin-bottom: 15px;
        }
        .process_q{
                width: 25px;
                height: 25px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size-adjust: 30px;
                font-weight: bold;
                background-color: #1366CE;
                margin-right: 10px;
        }
        .process_q span{
                position: relative;
                bottom: 2px;
        }
        .process_yi{
                flex: 1;
                width: 0;
        }
        .process_yi p{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 15px;
                margin-top: 5px;
                color: #737576;
        }
</style>
