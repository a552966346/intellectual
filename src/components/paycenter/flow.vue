<template>
    <div id="flow">
        <div class="flow_header"><span>交易中心</span>><span>商品详情</span>><span>购买</span></div>
        <div class="flow_picture">
            <el-steps :active="2" align-center>
                <el-step title="选中中意产品" description=""></el-step>
                <el-step title="确认订单信息" description=""></el-step>
                <el-step title="付款支付资金" description=""></el-step>
                <el-step title="自助或联系客服交易" description=""></el-step>
                <el-step title="交易成功" description=""></el-step>
            </el-steps>
        </div>
    
    </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>
        *{margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 13px;
        }
        #flow{
            width: 1200px;
            margin: 10px auto;
        }
        .flow_header{
            padding: 20px 0;
        }
        .flow_picture{
            height: 200px;
            padding: 80px;
            background: #fff;
            border-radius: 10px;
        }
</style>