<template>
        <!-- 左图右子 -->
        <div id="proc_t">
                 <!-- <v-comtitle title="业务介绍" inform_title=''></v-comtitle> -->
                <div class="proc_t">
                        <div class="proc_t_left">
                                <img src="../../../static/img/service/serviceright_pos_t.png" alt="">
                        </div>
                        <div class="proc_t_right">
                                <p><span>注册商标的好处</span></p>
                                <p><i class="el-icon-caret-right"></i>塑造企业品牌心想，抢先市场，增加企业无形资产</p>
                                <p><i class="el-icon-caret-right"></i>品牌纠纷的盾牌</p>
                                <p><i class="el-icon-caret-right"></i>增加销售者购买信心，消费者眼中识别码</p>
                                <p><i class="el-icon-caret-right"></i>入住天猫、京东、速卖通、亚马逊等电商平台的必要通行证</p>
                                <p><i class="el-icon-caret-right"></i>办理质检、卫检、条码等重要条件</p>
                                <p><i class="el-icon-caret-right"></i>商标可以通过转让，许可给他人使用，或质押来转换实现其价值</p>
                        </div>
                </div>
        </div>
</template>

<script>
</script>

<style>
        *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }
        #proc_t{
                width: 100%;
        }
        .proc_t{
                display: flex;
                justify-content: center;
                padding: 10px;
                /* align-items: center; */
        }
        .proc_t_left{
                flex: 2;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        .proc_t_left>img{
                width: 90%;
        }
        .proc_t_right{
                flex:3;
                display: flex;
                flex-direction: column;
                justify-content: center;
        }
        .proc_t_right>p{
                  color: #ccc;
                font-size: 15px;
                display: flex;
                align-items: center;
                padding: 5px 0;
        }
        .proc_t_right>p>span{
                width: 100%;
                text-align: center;
                color: #117BC1;
                font-size: 18px;
                font-weight: bold;
        }
        .proc_t_right>p>i{
                color:#117BC1 ;
                margin-right: 10px;
                width: 8px;
        }
</style>
