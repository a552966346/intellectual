<template>
     <div id="invoice">
        <div class="pay_header">
            <div>开具发票:</div>
        </div>
        <div class="invoice_nav">
            <span class="nav_active">个人</span>
            <span>单位</span>
        </div>
        <div class="invoice_content">
            <div class="content_select">
                <div>
                    <span>发票信息:</span>
                    <span class="select_active"></span>
                    <span>纸质发票</span>
                    <span></span>
                    <span>电子发票</span>
                </div>
                <div>
                    <span>发票类型：</span>
                    <span>增值税普通发票</span>
                </div>
            </div>
            <div class="content_input">
                <div><span>姓名：</span><input type="text"></div>  
                <div><span>电话：</span><input type="text"></div> 
            </div>
            <div class="content_input">
                <div><span>邮箱：</span><input type="text"></div>  
                <div><span>地址：</span><input type="text"></div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 14px;
        }
        #invoice{
            width: 1200px;
            margin:0 auto;
            background: #fff;
            border-radius: 10px;
        }
        .pay_header{
            display: flex;
            /* background: orange; */
            padding: 20px 0;
        }
        .pay_header>div{
            padding: 5px 30px;
            /* font-size: 18px; */
            margin-right: 50px;
            border-left: 5px solid #187fc2;

        }
        .invoice_nav{
            border-bottom: 1px solid #ccc;
        }
        .invoice_nav>span{
            display: inline-block;
            padding: 10px 0;
            margin: 0 20px;
        }
        .nav_active{
            border-bottom: 2px solid #187fc2;
            color: #187fc2;
        }
        .invoice_content{
            padding: 25px;
            /* background: orange; */
        }
        .content_select{
            margin: 25px 0;
            display: flex;
        }
        .content_select>div{
            width: 50%;
            display: flex;
            align-items: center;
        }
        .content_select>div>span{
            display: inline-block;
            
        }
        .content_select>div>span:nth-child(2n-1){
            margin-right: 30px;
        }
        .content_select>div>span:nth-child(2n){
            margin-right: 10px;
        }
        .content_select>div:nth-child(1)>span:nth-child(2),.content_select>div>span:nth-child(4){
            height: 16px;
            width: 16px;
            border:2px solid #187fc2;
            border-radius: 50%;
        }
        .select_active{
            border: 5px solid #187fc2 !important;
            
        }
        .content_input{
            margin-bottom: 10px;
            display: flex;
        }
        .content_input>div{
            width: 50%;
        }
        .content_input>div>span{
            display: inline-block;
            width: 90px;
            text-align: right;
        }
        .content_input>div>input{
            width: 350px;
            height: 40px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>