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
                    <el-radio v-model="radio" label="1">纸质发票</el-radio>&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-radio v-model="radio" label="2">电子发票</el-radio>
                </div>
                <div>
                    <span>发票类型：</span>
                    <span>增值税普通发票</span>
                </div>
            </div>
            <div class="content_input">
                <div><span>姓名：</span><el-input v-model="input1" ></el-input></div>  
                <div><span>电话：</span><el-input v-model="input2"></el-input></div> 
            </div>
            <div class="content_input">
                <div><span>邮箱：</span><el-input v-model="input3" ></el-input></div>  
                <div><span>地址：</span><el-input v-model="input4" ></el-input></div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        radio: '1',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      };
    }
}
</script>
<style scoped>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 13px;
        }
        #invoice{
            width: 1200px;
            margin:0 auto;
            background: #fff;
            border-radius: 10px;
        }
        .pay_header{
            display: flex;
            padding: 20px 0;
        }
        .pay_header>div{
            padding: 5px 15px;
            margin-right: 50px;
            border-left: 4px solid #187fc2;

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
        }
        .content_select{
            margin: 25px 0;
            display: flex;
        }
        .content_select>div{
            width: 50%;
            display: flex;
            align-items: center;
            margin-left: 33px;
        }
        .content_select>div:nth-child(2){
            margin-left: 24px;
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
       
        .content_input{
            margin-bottom: 10px;
            display: flex;
        }
        .content_input>div{
            width: 50%;
            display: flex;
            align-items: center;
        }
        .content_input>div>span{
            display: inline-block;
            width: 110px;
            text-align: right;
        }
        
    </style>