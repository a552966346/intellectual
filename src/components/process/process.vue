<template>
        <div class="process_all">
                <div class="process_list">
                        <a :class="{'active':item.active}" v-for="(item,index) in list" @click="selects(item,index)">{{item.item}}</a>
                </div>
                <div>
                        <div class="process_text">
                                <div class="process_fle" id="process_ti">
                                        <img src="../../../static/img/process/process_xiao.png" alt="">
                                        <div>服务详情</div>
                                </div>
                                <div class="process_wan">
                                        <img src="https://dss3.bdstatic.com
                                        70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2747364614,2411895227&fm=26&gp=0.jpg" alt="">
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
                active: false,
            }
          },
          methods:{
                  selects(item,index) {
          　　　　　　this.$nextTick(function () {
          　　　　　　　　this.list.forEach(function (item) {
          　　　　　　　　　　Vue.set(item,'active',false);
          console.log(item,"111")
          　　　　　　　　});
          　　　　　　　　Vue.set(item,'active',true);
          　　　　　　});
          　　　　}
          },
          props:{
            det:Object,
            list:Array
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
