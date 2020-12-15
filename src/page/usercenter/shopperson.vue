<template>
    <div class="shopperson">
        <div class="shop_top">
            <div class="top_text">我是卖家/我出售的商标</div>

            <div class="top_shopcar">
                <img src="../../../static/img/usercenter/shopcar.png" alt="">
                <span>我要出售</span> 
            </div>
        </div>
        <div class="shop_con">
            <ul class="con_t">
                <li class="con_t_item">出售商标</li>
                <li class="con_t_item">出售专利</li>
                <li class="con_t_item">出售版权</li>
                <li class="con_t_item">技术转让</li>
                <li class="con_t_search">
                    <div class="t_sea">
                        <input type="text" placeholder="请输入您要查找的商品编号或注册号">
                        <div class="search">搜索</div>
                    </div>
                
                </li>
            </ul>
            <ul class="con_b">
                <li class="con_b_item">商品</li>
                <li class="con_b_item">出售信息</li>
                <li class="con_b_item">价格</li>
                <li class="con_b_item">发布时间</li>
                <li class="con_b_item">当前状态</li>
                <li class="con_b_item">商品操作</li>
            </ul>
            <div class="content">
                <div class="content_c">
                    <img src="../../../static/img/usercenter/nomessage.png" alt="">
                    <p>没有看到您的商品信息。</p>
                    <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
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
.shopperson{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.shop_top{
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
.top_shopcar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    margin: 4px;
    background-color:#1b7fc3;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
}
.top_shopcar img{
    margin-right: 8px;
}
.shop_con{
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
    width: 145px;
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
}
.t_sea input{
    width: 220px;
    display: flex;
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
   font-size: 16px;
   color: #5f5f5f;
   line-height: 1.5;
}
.content_c p:nth-of-type(2){
    font-size: 12px;
}
.content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}
.content_c a{
    color: #1c7fc3;
    text-decoration: none;
}
</style>