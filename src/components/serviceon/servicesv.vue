<template>
    <div class="servicesv_all">
        <div class="servicesv_firt">
            <i class="el-icon-share"></i>
            <div>业务介绍</div>
        </div>
        <div class="servicesv_second">
            <p>
                商标在注册有效期限内，当其注册人变更其名义、地址、代理人，或者删减指定的商品的，应及时向商标局办理变更手续。企业、事业单位和个人工商业者的地址改变后，若不进行商标变更备案，后续若商标被异议、撤三、无效，都无法及时收到商标局下发的通知，最终可能导致权利的丧失。
            </p>
            <span>
                <i class="el-icon-caret-right"></i>
                变更申请人/注册人名义
            </span>
            <span>
                 <i class="el-icon-caret-right"></i>
                变更地址
            </span>
            <span>
                 <i class="el-icon-caret-right"></i>
                变更集体/证明商标管理规则/集体成员名单
            </span>
            <span>
                 <i class="el-icon-caret-right"></i>
                变更商标代理人/文件接收人申请
            </span>
            <span>
                 <i class="el-icon-caret-right"></i>
                删减商品/服务项目
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.servicesv_all{width: 100%;height: 330px;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.servicesv_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.servicesv_second{width: 100%;height: 100%;display: flex;justify-content: space-around;align-items: flex-start;flex-direction: column;}
.servicesv_second p{display: flex;justify-content: space-around;align-items: center;flex-direction: row;}
</style>