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
                                    <!-- <input type="checkbox" name="" id=""> -->
                                    <!-- <div class="shopcart_zsall">专利交易</div> -->
                                </div>
                                <div class="shopcart_zsdcet" v-for="(item,index) in zsdlist" :key="index" v-if="item.product">
                                    <div class="shopcart_zsdcetlet">
                                        <el-checkbox v-model="item.checkModel"  @change="handleCheckItemChange(index,item.num,item.checkModel)" style="vertical-align:top;margin-top:20px;"></el-checkbox>
                                        <div class="shopcart_zsdcettop">
                                            <div class="shopcart_zsdcettopimg">
                                                <img :src="item.product.images" alt="">
                                            </div>
                                            <!-- <div class="shopcart_zsdcettopfot">
                                                <div class="shopcart_zsdcettopfotbox">
                                                     <img src="../../../static/img/shop/shop_qq.png" alt="">
                                                     联系客服
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="shopcart_zsdcetret">
                                        <div class="shopcart_zsdcetrettop">
                                            {{item.product.name}}
                                        </div>
                                        <div class="shopcart_zsdcetretcet">
                                            {{item.product.sketch}}
                                        </div>
                                        <div v-if="item.remark !=''" style="font-size: 12px;color: #ccc;">
                                                ({{item.remark}})
                                        </div>
                                    </div>
                                    <div class="shopcart_zsdceterrn">
                                        <div v-if="item.fee>=10000">￥{{(item.product.fee/10000)}}万元</div>
                                        <div v-else>￥{{item.product.fee}}</div>
                                    </div>
                                    <div class="shopcart_zsdcefhtea">
                                        <el-input-number class="shopcart_zsdcefhin" size="mini" v-model="item.num" @change="handleChange(item.product.fee,item.num,index,item.checkModel)"  :min="1" :max="10" label="描述文字"></el-input-number>
                                    </div>
                                    <div class="shopcart_zsdcefviet">
                                        <!-- <div v-if="sole[index]">￥{{sole[index]}}</div> -->
                                         <div >￥{{zong(item.product.fee,item.num,index)}}</div>
                                    </div>
                                </div>
                                <div class="shopcart_zsdfot">
                                    <div class="shopcart_zsdfotlet">
                                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                        <div class="shopcart_zsall" @click="dele">删除</div>
                                        <!-- <div class="shopcart_zsall">移入收藏夹</div> -->
                                    </div>
                                    <div class="shopcart_zsdfotret">
                                        <div>已选择<span>{{checkedNum}}</span>件</div>
                                        <div>共计:￥<span v-if="cartTotalPrice>=10000">{{cartTotalPrice/10000}}万元</span><span v-else>{{cartTotalPrice}}</span></div>
                                        <div class="shopcart_zsdfotretmt">
                                             <div class="shopcart_zsdfotretzf" @click="setment">去结算</div>
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
                            zsdlist:[{checkModel:false,id:'',num:'',product:[{breviary_image:'',category_id:'',categoryid_text:'',content:'',contenttitle:'',creatime_text:''}]}],
                            num: 1,
                            checkAll:false,
                            checkedAllShops:[],
                            checkItemData:[],
                            uid:'',
                            checkedNum:0,
                            cartTotalPrice:0,
                            sole:[], //单件商品总价
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
                // updated() {
                //         this.handleCheckAllChange()
                // },
                mounted(){
                        if(this.$store.state.user){
                                 this.ispost();
                        }else{
                                this.$router.push({
                                        path:"/login"
                                })
                        }
                },
                beforeMount(){
                      let snlist = [];
                            snlist = this.zsdlist;let prd=0;
                            // snlist.forEach(function(item){
                            //    prd = item.product.fee;
                            //    sole = prd /item.num;
                            // });
                },
                methods:{
                    //单件商品总价
                    handleChange(fee,num,index,val){
                            if(val){
                                 let money = fee*num
                                    this.sole[index] = money
                                    if(this.checkedNum!=0){
                                            this.checkedNum = 0
                                            this.cartTotalPrice = 0
                                    }
                                    for(let i=0;i<this.zsdlist.length;i++){
                                            if(this.zsdlist[i].checkModel){
                                                   this.checkedNum += this.zsdlist[i].num
                                                    this.cartTotalPrice += this.sole[i]
                                            }
                                    }
                                    return money
                            }else{
                                    let money = fee*num
                                       this.sole[index] = money
                                       return money
                            }

                    },
                    zong(fee,num,index){
                             let money = fee * num
                            this.sole[index] = money
                            if(money>=10000){
                                  return money/10000+'万元'
                            }else{
                                     return money
                            }
                    },
                    ispost(){
                     let user =this.$cookies.get("user"); //获取cookies
                     this.uid = user.id;
                     this.$api.shopdata(this.uid)
                     .then(res=>{
                             console.log(res)
                        this.zsdlist = res.data;
                     })
                     .catch(res=>{
                     })
                    },
                    handleCheckAllChange(val){
                            if(val){
                                  for(let i=0;i<this.sole.length;i++){
                                          if(!this.zsdlist[i].checkModel){
                                                  this.zsdlist[i].checkModel = true
                                                  this.cartTotalPrice +=Number(this.sole[i])
                                                  this.checkedNum += this.zsdlist[i].num;
                                          }
                                  }
                            }else{
                                    for(let i=0;i<this.sole.length;i++){
                                            this.zsdlist[i].checkModel = false
                                    }
                                    this.checkedNum = 0;
                                    this.cartTotalPrice = 0;
                            }

                    },
                    handleCheckItemChange(index,nub,val){
                        if(val){
                                this.checkedNum +=nub
                                this.cartTotalPrice += this.sole[index]
                        }else{
                                this.checkedNum -=nub
                                this.cartTotalPrice -= this.sole[index]
                        }

                    },
                    dele(uid){
                        let user =this.$cookies.get("user"); //获取cookies
                        uid = user.id;
                        let snlist = [];let ids ='';
                        snlist = this.zsdlist.filter(function(item){
                            return item.checkModel == true;
                        });
                        snlist.forEach(function(item){
                            ids += item.id+',';
                        });
                        this.$api.deletecart(ids,uid)
                        .then(res=>{
                            this.ispost();
                            this.$forceUpdate();
                        })
                        .catch(res=>{
                        })
                    },
                    setment(uid){
                        let user =this.$cookies.get("user"); //获取cookies
                        uid = user.id;
                        let that =this
                        let snlist = [];let ids ='';let tys =''; let numb='', money='',remark='';
                        snlist = this.zsdlist.filter(function(item){
                            return item.checkModel == true;
                        });
                        snlist.forEach(function(item,index){
                            ids += item.product.id+',';
                            tys += item.type+',';
                            numb += item.num+',';
                            money +=that.sole[index]+','
                            remark += item.remark+'/'
                        });
                        this.$api.createorder(ids,tys,numb,uid,money,remark)
                        .then(res=>{
                            sessionStorage['data']=JSON.stringify(res.data);
                            this.$router.push({path: '/paydetial'});
                        })
                        .catch(res=>{
                        })
                    }
                }
        }
</script>

<style scoped>

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
        .shopcart_zsdfotlet{width: 10%;height: 100%;display: flex;justify-content: space-between; align-items: center;font-size: 15px;}
        .shopcart_zsdfotret{width: 30%;height: 100%;display: flex;justify-content: space-between; align-items: center;}
        .shopcart_zsdfotretmt{height: 100%;width: 40%;background-color: red;display: flex;justify-content: center;align-items: center;}
        .shopcart_zsdfotretzf{color: #fff;font-size: 24px;font-weight: bold;}
        .el-checkbox{margin-top:0px ! important;}
</style>
