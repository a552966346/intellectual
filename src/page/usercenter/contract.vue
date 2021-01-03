<template>
    <div class="contract">
        <div class="contract_top">
                    <div class="overview_title">
                        <div class="myoverview">
                            收益总览<span>共有0份合同</span>
                        </div>
                    </div>
        </div>
        <div class="contract_con">
            <ul class="con_t">
                <!-- <div class="searchc">搜索</div>
                <input type="text" placeholder="关键词：合同名称、合同编号、订单/商品编号">
                <button type="danger" size="mini">查询</button>
                <button type="primary" size="mini">清空</button>          -->
            </ul>
            <ul class="con_b">
                <li class="con_b_item">合同名称</li>
                <li class="con_b_item">合同项目</li>
                <li class="con_b_item">发起时间</li>
                <li class="con_b_item">签单时间</li>
                <li class="con_b_item">合同编号</li>
                <li class="con_b_item">状态</li>
                <li class="con_b_item">操作</li>
            </ul>
            <div class="content">
                <div class="content_c">
                    <img src="../../../static/img/usercenter/nodata.png" alt="">
                    <p>暂无数据~</p>
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
            tabPosition: 'left'
              }
   },
}
</script>
<style scoped>
.contract{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.contract_top{
    color: #919191;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
}

.overview_title{
    height: 34px;
    width: 100%;
    /* padding: 10px 20px; */
    margin-top: 10px;
}
.myoverview{
    border-left: 4px solid#197ec3;
    padding-left: 16px;
    font-size: 16px;
    line-height: 16px;
    color: #666666;
}
.myoverview span {
    font-size: 12px;
    margin-left: 10px;
    color: #949494;
}

.contract_con{
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
}
.con_t{
    border: 1px solid #f2f2f2;
    background-color: #f9f9f9;
    padding: 5px;
    display: flex;
    align-items: center;
}

.contract_con  input{
    width: 30%;
    height: 30px;
    display: flex;
    font-size: 10px;
    border: 1px solid #efefef;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px ;
    color: #bbb;
    
}
.contract_con .con_t .searchc{
    width: 70px;
    height: 25px;
    font-size: 16px;
    color: #5e5e5e;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contract_con .con_t button{
    margin-left: 10px;
    color: #fff;
    border: none;
    padding: 2px 20px;
    border-radius: 3px;
    font-size: 14px;
    outline: none;
}
.contract_con .con_t button:first-of-type{
    background-color: #e4404b;
}
.contract_con .con_t button:last-of-type{
    background-color: #1a7fc3;
}

.con_b{
    margin-top: 20px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    color: #b7b7b7;
    background-color: #f9f9f9;
}
.con_b_item{
    flex: 1;
    border: 1px solid #f2f2f2;;
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
   font-size: 14px;
   color: #5f5f5f;
   line-height: 1.5;
}

.content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
    width: 80%;
}

</style>