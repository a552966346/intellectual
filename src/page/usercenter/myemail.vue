<template>
    <div class="myemail_all">
        <div class="myemail_tpw">
            <span>我是卖家/我的域名/whois邮箱</span> 
            <button class="">查看我的域名</button>
        </div>
        <div class="myemail_top">
            <span class="myemail_tos">whois邮箱</span>
        </div>
        <div class="myemail_cent">
            <span class="myemail_toft">
                <div>whois邮箱绑定须知:</div>
                <div>1.若您的不同域名在多个whois邮箱管理下，您可以把这些邮箱和您的账户进行绑定。</div>
                <div>2.在添加域名出售时，若添加的域名whios邮箱已绑定成功，则添加的域名会自动通过系统验证。</div>
                <div>3.若遇到邮箱验证或者绑定问题，请及时联系客服人工验证审核!(<div>点击联系客服</div>)</div>
            </span>
            <div>
                您绑定的邮箱:
                <input>
                <div>绑定新邮箱</div>
            </div>
            <div>
                <div>邮箱</div>
                <div>是否已验证</div>
                <div>操作</div>
            </div>
        </div>
    </div>
</template>

<script>
import index from '../index/index.vue'
    export default {
        components: { index },
            data(){
                return{

                }
            },
        methods: {

        }
    }
</script>

<style scoped>
    .myemail_all{
        height: 100%;
        width: 100%;
        background-color: #f0f0f0;
        padding: 15px 0 0 10px;
        display: flex;
        flex-direction: column;
    }
    .myemail_tpw{
        width: 100%;
        height: 52px;
        background-color: #fff;
        display: flex;justify-content: space-between;align-items: center;
        padding: 0px 15px;
        font-size: 14px;
    }
    .myemail_cent{
        width: 100%;
        flex: 1;
        background-color: #fff;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
    }
    .myemail_top{
        margin-top: 15px;
        width: 100%;
        background-color: #fff;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: row;
        border-bottom: 2px solid #f0f0f0;
    }
    .myemail_tos{
        color: orange;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid orange;
    }
    .myemail_toft{
        font-size: 14px;
        display: flex;
        justify-content: flex-start;
        margin-left: 15px;
        flex-direction: column;
    }
    .myemail_toimg{
        height: 15px;
        margin: 5px 0px 0px 15px;
    }
</style>