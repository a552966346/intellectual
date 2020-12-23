<template>
        <div>
                <v-topsearch></v-topsearch>
                <div class="shopcart_all">
                        <!-- 导航 -->
                        <v-navigation></v-navigation>
                        <!--  -->
                        <div class="shopcart_all_Center">
                            <div class="shopcart_zsd">
                                <div class="shopcart_zsdtop">
                                    <input type="checkbox" name="" id="">
                                    <div class="shopcart_zsall">专利交易</div>
                                </div>
                                <div class="shopcart_zsdcet" v-for="(item,index) in zsdlist" :key="index">
                                    <div class="shopcart_zsdcetlet">
                                        <el-checkbox v-model="item.checkModel" @change="handleCheckItemChange" style="vertical-align:top;margin-top:20px;"></el-checkbox>
                                        <!-- <input type="checkbox" name="" id=""> -->
                                        <div class="shopcart_zsdcettop">
                                            <div class="shopcart_zsdcettopimg">
                                                <img src="../../../static/img/shop/shop_one.png" alt="">
                                            </div>
                                            <div class="shopcart_zsdcettopfot">
                                                <div class="shopcart_zsdcettopfotbox">
                                                     <img src="../../../static/img/shop/shop_qq.png" alt="">
                                                     联系客服
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shopcart_zsdcetret">
                                        <div class="shopcart_zsdcetrettop">
                                            商品名称
                                        </div>
                                        <div class="shopcart_zsdcetretcet" v-for="(item,index) in wdlist" :key="index">
                                            {{item.text}}
                                        </div>
                                    </div>
                                    <div class="shopcart_zsdceterrn">
                                        <div>￥28000.00</div>
                                    </div>
                                    <div class="shopcart_zsdcefhtea">
                                        <el-input-number class="shopcart_zsdcefhin" size="mini" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </div>
                                    <div class="shopcart_zsdcefviet">
                                        <div>￥28000</div>
                                    </div>
                                </div>
                                <div class="shopcart_zsdfot">
                                    <div class="shopcart_zsdfotlet">
                                        <!-- <input type="checkbox" name="" id="">
                                        <div class="shopcart_zsall">全选</div> -->
                                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                        <div class="shopcart_zsall">删除</div>
                                        <div class="shopcart_zsall">移入收藏夹</div>
                                    </div>
                                    <div class="shopcart_zsdfotret">
                                        <div>已选择0件</div>
                                        <div>共计:￥0.00</div>
                                        <div class="shopcart_zsdfotretmt">
                                            <div>去结算</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="shopcart_bottom">
                  <img src="../../../static/img/index/cooperation_img.png" alt="">
                </div >
                <v-combotttom></v-combotttom>
        </div>
</template>

<script>
        import servicetop from '../../components/servicetop/servicetop.vue'
        import serviceleft from '../../components/serviceleft/serviceleft.vue'
        import serviceright_proc_t from '../../components/serviceright/serviceright_proc_t.vue'
        import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
        import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
        import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
        import guarantee from '../../components/serviceon/guarantee.vue'//服务保障
        import advantage from '../../components/serviceon/advantage.vue'//服务优势
        export default{
                name:'service',
                data(){
                        return{
                            zsdlist:[{checkModel:false,},{checkModel:false,},{checkModel:false,},{checkModel:false,},{checkModel:false,}],
                            wdlist:[{text:'专利行业：包装印刷'},{text:'专利注册号：201510233066x'},{text:'专利状态：已下证'},{text:'商品编号：640HA8F72860703XIPI5933'}],
                            num: 1,
                            checkAll:false,
                            checkedAllShops:[],
                            checkItemData:[],
                        }
                },
                components:{
                    'v-servicet':servicetop,
                    'v-serviceleft':serviceleft,
                    'v-applyprocess':applicationprocess,//申请流程 2个图
                    'v-publicproblems':publicproblems,//公共问题
                    'v-serviceassurance':serviceassurance,//服务保障  123样式
                    'v-servicerightP':serviceright_proc_t,
                    'v-guarantee':guarantee,//服务保障
                    'v-advantage':advantage//服务优势   
                },
                methods:{
                    handleChange(value) {
                        console.log(value);
                    },
                    handleCheckAllChange(val){
                    this.zsdlist.map((item,i)=>{
                        item.checkModel = val;
                    })
                    },
                    handleCheckItemChange(val){
                    for(let i = 0,l = this.zsdlist.length;i < l;i ++){
                        if(this.zsdlist[i].checkModel !== val){
                        this.checkAll = false;
                        return;
                        }
                    }
                    this.checkAll = val;
                    }
                }
        }
</script>

<style scoped>
        * {margin:0;padding:0;box-sizing:border-box;}
        .shopcart_all_text {width:100%;padding:10px 0;}
        .shopcart_all {width:100%;margin:0 auto;display:flex;flex-direction:column;align-items:center;background-color:#f5f5f5;}
        .shopcart_all_Center {width:1200px;background-color:#f5f5f5;padding: 30px 0;}
        .shopcart_zsd{width: 100%;height: auto;background-color: #fff;}
        .shopcart_zsdtop{width: 100%;height: 60px;border-bottom: 1px solid #ccc;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;padding: 0 30px;font-size: 14px;}
        .shopcart_zsdcet{width: 100%;height: 170px;margin: 10px 0;display: flex;justify-content: flex-start;align-items: center;border: 1px solid #ccc;}
        .shopcart_zsdcetlet{width: 16%;height: 100%;display: flex;justify-content: space-evenly;align-items: flex-start;padding: 20px 0;}
        .shopcart_zsdcettop{width: 89px;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;}
        .shopcart_zsdcettopimg{width: 100%;height: 89px;}
        .shopcart_zsdcettopimg img{width: 100%;height: 100%;}
        .shopcart_zsdcettopfot{width: 100%; flex: 1; display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdcettopfotbox{width: 90%;height: 24px;border: 1px solid red;display: flex;justify-content: center;align-items: center;font-size: 14px;color: red;}
        .shopcart_zsdcetret{width: 40%;height: 100%;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;}
        .shopcart_zsall{padding-left: 10px;}
        .shopcart_zsdcetrettop{font-weight: bold;font-size: 16px;}
        .shopcart_zsdcetretcet{margin-top: 5px;font-size: 14px;}
        .shopcart_zsdceterrn{width: 10%;height: 100%;display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdceterrn>div{font-weight: bold;}
        .shopcart_zsdcefhin{width: 80%;}
        .shopcart_zsdcefhtea{width: 15%;height: 100%;display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdcefviet{flex: 1;height: 100%;display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdcefviet>div{color: #ff6600;font-weight: bold;}
        .shopcart_zsdfot{width: 100%;height: 80px;background-color: #e8e8ed;display: flex;justify-content: space-between;align-items: center;flex-direction: row;padding-left: 30px; font-size: 14px;}
        .shopcart_zsdfotlet{width: 20%;height: 100%;display: flex;justify-content: space-between; align-items: center;}
        .shopcart_zsdfotret{width: 30%;height: 100%;display: flex;justify-content: space-between; align-items: center;}
        .shopcart_zsdfotretmt{height: 100%;width: 40%;background-color: red;display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdfotretmt>div{color: #fff;font-size: 24px;font-weight: bold;}
        .el-checkbox{margin-top:0px ! important;}
</style>
