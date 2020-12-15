<template>
    <div class="buyperson">
        <div class="buy_top">
            我是买家/我的购买订单
        </div>
        <div class="buy_con">
            <ul class="con_t">
                <li class="con_t_item">全部订单</li>
                <li class="con_t_item">未付款订单</li>
                <li class="con_t_item">已预约的订单</li>
                <li class="con_t_item">交接中的订单</li>
                <li class="con_t_item">已完成的订单</li>
                <li class="con_t_search">
                    <div class="t_sea">
                        <input type="text" placeholder="请输入您要查找的订单号">
                        <div class="search">搜索</div>
                    </div>
                
                </li>
            </ul>
            <ul class="con_b">
                <li class="con_b_item">订单详情</li>
                <li class="con_b_item">数量</li>
                <li class="con_b_item">价格</li>
                <li class="con_b_item">订单状态</li>
                <li class="con_b_item">订单操作</li>
                <li class="con_b_item">客服信息</li>
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
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.buyperson{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.buy_top{
    color: #919191;
    background-color: #fff;
    font-size: 14px;
    padding: 15px;
    border: 1px solid #efefef;
    border-radius: 5px;
}
.buy_con{
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
    width: 115px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    color: #949494;
}
.con_t_item:hover{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}

.con_t_search{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.t_sea{
    display: flex;
    align-items: center;
    width: 230px;  
   
}
.t_sea input{
    font-size: 10px;
    border: 1px solid #efefef;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px ;
}
.search{
    width: 50px;
    height: 25px;
    font-size: 14px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
}

.con_b{
    margin-top: 20px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #efefef;
    display: flex;
    justify-content: space-around;
    color: #b7b7b7;
}
.con_b_item{
    display: flex;
    justify-content: center;
    align-items: center;
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