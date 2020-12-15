<template>
    <div class="message">
        <div class="message_top">
            <div class="top_text">我的消息</div>
        </div>
        <div class="message_con">
            <ul class="con_t">
                <li class="con_t_item">全部消息</li>
                <li class="con_t_item">未读消息</li>
                <li class="con_t_item">已读消息</li>
                <li class="con_t_del">
                    <div class="t_del">
                        <img src="../../../static/img/usercenter/del.png" alt="">
                        <div class="del">批量删除</div>
                    </div>
                </li>
                
               
            </ul>
            
            <div class="content">
                <div class="content_c">
                    <img src="../../../static/img/usercenter/nomessage.png" alt="">
                    <p>您现在还没有收到信息哦~</p>
                    <button class="top_shopcar">去首页看看</button>
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
.message{
    width: 100%;
    height: 100%;
    padding: 30px 30px 0;
}
.message_top{
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
.message_con{
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
    color: #949494;
}
.con_t_item {
    background-color: #f9f9f9;
    width: 145px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    
}
.con_t_item:hover{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}
.con_t_del{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.t_del{
    display: flex;
    align-items: center;
}
.t_del img{
    width: 16px;
}

.del{
    margin:0  10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
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
    font-size: 16px;
    color: #5f5f5f;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}
.content_c p:nth-of-type(2){
    font-size: 12px;
}
.content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}

.top_shopcar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    padding: 4px;
    margin-top: 10px;
    background-color:#1b7fc3;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
    line-height: 2;
    border: none;
}

</style>