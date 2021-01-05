<template>
    <div class="receadd_all">
        <div class="receadd_tpw">
            账号设置/收货地址
        </div>
        <div class="receadd_top">
            <span class="receadd_tos">收货地址</span>
            <img class="receadd_toimg" src="../../../static/img/usercenter/exclamationpoint.png" alt="">
            <span class="receadd_toft">完善收件地址信息，方可正常收取快递资料。</span>
        </div>
            <div class="receadd_cent">
            <span class="receadd_sapn">您已创建<span>{{numb}}</span>个收件地址!</span>
            <button class="receadd_btn" @click="create">新建收货地址</button>
            <el-table
                :data="recedalist"
                height="250"
                border
                style="width: 100%">
                <el-table-column
                prop="recipients"
                label="姓名"
                width="80">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="手机号"
                width="120">
                </el-table-column>
                <el-table-column
                prop="province_text"
                label="省份"
                width="80">
                </el-table-column>
                <el-table-column
                prop="city_text"
                label="市"
                width="80">
                </el-table-column>
                <el-table-column
                prop="area_text"
                label="区"
                width="80">
                </el-table-column>
                <el-table-column
                prop="address"
                label="详细地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="tanchuang" v-show="isshow" @click.self="shows">
            <v-receadd @close="close" @submit="submit" ></v-receadd>
        </div>
    </div>
    
</template>

<script>
import receadd from '@/components/usercenter/receadd.vue'//求购弹窗
    export default {
        data(){
            return{
                isshow:false,
                numb:0,
                nub:false,
                uid:'',
                recedalist:[]
            }
        },
        mounted(){
            this.credata()
        },
        methods: {
            credata(){
                let user =this.$cookies.get("user"); //获取cookies
                    this.uid = user.id;
                    this.$api.recelist(this.uid)
                    .then((res) => {
                        console.log(res)
                        if(res.data == null){
                            this.numb = 0;
                        }else{
                            this.recedalist = res.data;
                            this.numb = res.data.length;
                        }
                    })
                    .catch((res) => {
                        console.log(res)
                    })
            },
            create(){
                this.isshow = true
            },
            shows(){
                this.isshow = false
            },
            close(){//商标隐藏弹框
                this.isshow = false
            },
            submit(){
                if(this.nub = true){
                    this.numb++;
                }
                this.isshow = false
                this.credata();
            },
        },
        components:{
        'v-receadd':receadd,//购买弹窗
        }
    }
</script>

<style scoped>
   .tanchuang{position: fixed;z-index: 9999;background: rgba(0,0,0,0.2);width: 100%;height: 100%;top:0;right:0;left:0;bottom:0;display: flex;justify-content: center;align-items: center;}
    .receadd_all{
        height: 100%;
        width: 100%;
        background-color: #f0f0f0;
        padding: 15px 0 0 10px;
        display: flex;
        flex-direction: column;
    }
    .receadd_tpw{
        width: 100%;
        height: 52px;
        background-color: #fff;
        display: flex;justify-content: flex-start;align-items: center;
        padding-left: 15px;
        font-size: 14px;
    }
    .receadd_cent{
        width: 100%;
        flex: 1;
        background-color: #fff;
        padding-left: 135px;
        display: flex;
        flex-direction: column;
    }
    .receadd_cent button{
        outline: none;
    }
    .receadd_top{
        margin-top: 15px;
        width: 100%;
        background-color: #fff;
        padding: 10px 15px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: row;
    }
    .receadd_tos{
        color: red;
        font-size: 18px;
        font-weight: bold;
    }
    .receadd_toft{
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
    }
    .receadd_toimg{
        height: 15px;
        margin: 5px 0px 0px 15px;
    }
    .receadd_btn{width: 150px;height: 40px; color: white;background-color: red;border: none;font-size: 16px;margin-top: 10px;}
    .receadd_sapn{
        font-size: 14px;
    }
</style>