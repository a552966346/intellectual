<template>
    <div class="zjmanage">
        <div class="manage_top">
            <div class="top_text">资金管理/我的账户</div>

            <div class="top_r">
                <span>提现</span> 
            </div>
        </div>
        <div class="manage_center">
            <div class="manage_item">
                <p class="title">资金管理</p>
                <p>FUND MANAGEMENT</p>
            </div>
            <div class="manage_item item">
                <p>账户可用资金(元)</p>
                <span>0.00</span>
                <button  class="manage_button" >提现</button>
            </div>
            <div class="manage_item item">
                <p>账户冻结资金(元)</p>
                <span>0.00</span>
            </div>
            <div class="manage_item items">
                <p>其他押金：0.00元</p>
                <p>资金明细</p>
                <p>还没绑定银行卡&nbsp;&nbsp;&nbsp;&nbsp;前去绑定</p>
                
            </div>
        </div>
        <div class="manage_con">
            <ul class="con_t">
                <li class="con_t_item" v-for="(item,i) in titles" :key="i"
                v-bind:class="{active:i == num}" 
                @click="tab(i)">{{item}}</li>
                <!-- <li class="con_t_item">我要提现</li>
                <li class="con_t_item">绑定银行卡</li>
                <li class="con_t_item">发票索取</li>
                <li class="con_t_item">我的押金</li> -->
            </ul>
            
            <div class="content">
                <div class="content_c">
                    <img src="../../../static/img/usercenter/order.png" alt=""><span>您还没有订单，去逛逛吧~</span> 
                </div>
            </div>
            
        </div> 
    </div>
</template>
<script>
export default{
    data(){
        return{
            msg:'这是测试内容',
            tabPosition: 'left',
            titles:["资金明细","我要提现","绑定银行卡","发票索取","我的押金"],
            num:0
            }
   },
   methods:{
       tab(i){
           this.num=i;
       }
   }
}
</script>
<style scoped>
.zjmanage{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;

}
.manage_top{
    color: #919191;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
.top_text{
    font-size: 14px;
    padding: 15px;
}
.top_r{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    margin: 4px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
}


.manage_center{
    background: url("../../../static/img/usercenter/bg_zjmanage.png");
    height: 290px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.manage_item{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    color: #fff;
}
.manage_item .title{
    font-size: 30px;
}
.item p{
    font-size: 18px;
    line-height: 23px;
}
.item span {
    font-size: 24px;   
    line-height: 1.5; 
}
.manage_button{
    background-color: #fff;
    padding: 2px 5px;
    border: 1px solid rgba(0,0,0,0.16);
    border-radius: 5px;
    color: #3589c9;
    width: 60px;
}
.items{
    font-size: 15px;
}







.manage_con{
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
}
.con_t{
    display: flex;
    border-bottom: 1px solid #efefef;
}
.con_t_item {
    background-color: #f9f9f9;
    flex: 1;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    color: #949494;
}
.active{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}


.content{
    height: 300px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}

.content_c{
   text-align: center;
   vertical-align:middle;
  
   /* padding: 26px; */
}
.content_c  img{
    vertical-align:middle;
  
}
.content_c span{
    font-size: 14px;
}

</style>