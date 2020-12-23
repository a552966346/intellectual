<template>
    <div id="all">
        <v-topsearch></v-topsearch> 
        <v-navigation></v-navigation>
        <!-- 交易中心流程详情 -->
        <div>
            <v-flow></v-flow>
        </div>
        <!-- 下单时间 -->
        <div>
        <v-paytime></v-paytime>
        </div>
        <!-- 个人发票 -->
        <div>
            <v-invoice></v-invoice>
        </div>
        <!-- 单位发票 -->
        <div>
            <v-invoiceunit></v-invoiceunit>
        </div>
        <!-- 支付方式 -->
        <div>
            <v-paymode></v-paymode>
        </div>
        <v-combotttom></v-combotttom>
    </div>
</template>
<script>
import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
import patentscreen from '@/components/paycenter/patentscreen.vue'
import copyrightBottom from '@/components/paycenter/copyrightBottom.vue'
import flow from '@/components/paycenter/flow.vue'
import paytime from '@/components/paycenter/paytime.vue'
import invoice from '@/components/paycenter/invoice.vue'
import invoice_unit from '@/components/paycenter/invoice_unit.vue'
import paymode from '@/components/paycenter/paymode.vue'
export default {
    name:'pay',
         data(){
                 return{

                 }
         },
         components:{
            copyrightOrdinary,
            patentscreen,
            copyrightBottom,
            'v-flow':flow,
            'v-paytime':paytime,
            'v-invoice':invoice,
            'v-invoiceunit':invoice_unit,
            'v-paymode':paymode
    }
}
</script>
<style scoped>
    #all{
        background: #fafafa;
    }
    
</style>