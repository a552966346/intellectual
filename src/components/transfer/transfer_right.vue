<template>
        <div id="transfer_right">
                <div class="transfer_recommend">
                    <div class="transfer_cheng">
                        <p>相关成果推荐 <span>更多<img src="../../../static/img/technologytransfer/transfer_right.png" alt=""></span> </p>
                    </div>
                    <a class="transfer_pro" href="#">
                        <div class="transfer_more">
                            <div class="transfer_zhao">
                                <img src="https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif" alt="">
                            </div>
                            <span>透气性医用手套用复合材料及其制备方法</span>
                            <div class="transfer_jia">
                                <span>5.24万</span>
                                <span style="font-weight:300;">不限</span>
                            </div>
                            <div class="transfer_foo">
                                <div class="transfer_ask">
                                    <p>咨询客服 </p>
                                    <font style="background-color:#00a3bf;"><img src="../../../static/img/technologytransfer/transfer_tou.png" alt=""> </font>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
</template>

<script>
</script>

<style>
        *{padding: 0;margin: 0;box-sizing: border-box;}
        #transfer_right{width: 100%;}
       .transfer_cheng{
           background-color:#1a7fc3;
           width: 100%;
           padding: 10px;
           line-height: 30px;
       }
       .transfer_cheng>p{
               display: flex;
               justify-content: space-between;
       }

       .transfer_pro{
           text-decoration: none;
           color: black;
       }
       .transfer_pro:hover .transfer_foo{
           display: block;
       }
       .transfer_pro:hover .transfer_jia{
           display: none;
       }
       .transfer_cheng>p{
           color: #fff;
           display: flex;
           align-items: center;
           justify-content: space-around;
           font-size: 16px;
       }
       .transfer_cheng span{
               display: flex;
               align-items: center;
           margin-left: 30px;
           font-size: 14px;
       }
       .transfer_cheng img{
           width: 15px;
       }
       .transfer_more{
           width: 100%;
           background-color: #fff;
           padding: 15px;
       }
       .transfer_zhao{
           width: 200px;
       }
       .transfer_more img{
          width: 100%;
       }
       .transfer_more span{
           font-size: 14px;
       }
       .transfer_jia{
           display: flex;
           justify-content: space-between;
           margin-top: 5px;
       }
       .transfer_jia span{
           color: #1d7fc6;
           font-weight: bold;
       }
       .transfer_foo{
           display: none;
       }
       .transfer_ask {
           display: flex;
           justify-content: space-between;
           align-items: center;
       }
       .transfer_ask p{
           color: #fff;
           background-color: #1a7fc3;
           text-align: center;
           width: 90%;
           height: 100%;
           font-size: 14px;
           padding: 5px 0;
       }
       .transfer_ask font{
           width: 10%;
           padding: 3.5px;
           text-align: center;
       }
       .transfer_ask img{
           width: 18px;
       }
</style>
