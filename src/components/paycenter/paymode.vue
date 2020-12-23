<template>
    <div id="paymode">
        <div class="pay_header">
            <div>支付方式：</div>
        </div>
        <div class="mode_header">
            <div>
                 <el-radio v-model="radio" label="1"><span></span></el-radio><img src="../../../static/img/paycenter/zhifubao.jpg" alt="">
            </div>
           <div>
               <el-radio v-model="radio" label="2"><span></span></el-radio><img src="../../../static/img/paycenter/weixin.jpg" alt="">
           </div>
            <div>
                <el-radio v-model="radio" label="3"><span></span></el-radio><img src="../../../static/img/paycenter/yinlian.jpg" alt="">
            </div>
        </div>
        <div class="mode_detail">
            <div class="detail_list">
                <div><span>1</span><span>件商品，总商品金额：</span></div>
                <div>￥188000</div>
            </div>
            <div class="detail_list">
                <div><span>应支付金额：</span></div>
                <div>￥188000</div>
            </div>
            <div class="detail_list list3">
                <div><span>本次支付金额：</span></div>
                <div>￥188000</div>
            </div>

            <div class="detail_pay">立即支付</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        radio: '1'
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
        #paymode{
            width: 1200px;
            margin: 20px auto;
            background: #fff;
            border-radius: 10px;
            padding-bottom: 30px;
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
        .mode_header{
            margin: 10px 50px 50px 50px;
            display: flex;
        }
        .mode_header>div{
            margin-right: 100px;
            display: flex;
            align-items: center;
        }
        .mode_header span{
            display: inline-block;
        }
        .mode_detail{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        .detail_list>div{
            width: 150px;
            margin-bottom: 20px;
        }
        .detail_list>div:nth-child(1){
            margin-right: 80px;
            text-align: right;
        }
        .detail_list{
            display: flex;
        }
        .detail_pay{
            width: 210px;
            height: 35px;
            background: #187fc4;
            color: #fff;
            border-radius: 5px;
            text-align: center;
            line-height: 35px;
            margin-right: 100px;
        }
        .mode_detail>.list3>div:nth-child(2){
            font-size: 16px;
            color: #e00000;
            font-weight: 600;
        }
    </style>