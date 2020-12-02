<template>
        <div class="process_all">
                <div class="process_list">
                        <a :href="'#process_text'+index" :class="{'active':active==index}" v-for="(item,index) in list" @click="selects(index)">{{item.name}}</a>
                </div>
                <div>
                        <div class="process_text" v-for="(item,index) in service" :id="'process_text'+index">
                                <div class="process_fle" id="process_ti">
                                        <img src="../../../static/img/process/process_xiao.png" alt="">
                                        <div>{{item.name}}</div>
                                </div>
                                <div class="process_wan">
                                        <img :src="item.img" alt="">
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
</style>
