<template>

        <div id="process">
                <!--头部文字  -->
                <div class="process_all">
                        <div class="process_top">
                                <v-comtitle title="国际专利" inform_title='严格把控时间节点,熟练对接各个流程'></v-comtitle>
                                <img src=""
                                        alt="">
                        </div>
                        <div class="process_cen">
                                <div class="process_cen_top">
                                        <span>
                                                <div></div>
                                                <p>国际专利申请所需资料</p>
                                        </span>
                                        <p>资深顾问审核自恋，减少返回率，商业信息、公司信息严格保密</p>
                                </div>
                                <div class="process_cen_center">
                                        <div class="cen_center_lie">
                                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1160601342,3492929116&fm=26&gp=0.jpg" alt="">
                                                <div class="cen_center_lie_right">
                                                        <span>
                                                                <div></div>
                                                                <p>专利申请书(伊甸城代准备)</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>专利委托书(伊甸城代准备)</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>身份证正反面复印件</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>发明人信息</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>技术交底书</p>
                                                        </span>
                                                </div>
                                        </div>
                                        <div class="cen_center_lie">
                                                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3703990512,1304638862&fm=26&gp=0.jpg" alt="">
                                                <div class="cen_center_lie_right">
                                                        <span>
                                                                <div></div>
                                                                <p>专利申请书(伊甸城代准备)</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>专利委托书(伊甸城代准备)</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>身份证正反面复印件</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>发明人信息</p>
                                                        </span>
                                                        <span>
                                                                <div></div>
                                                                <p>技术交底书</p>
                                                        </span>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>


        </div>
</template>

<script>
</script>

<style scoped>
        * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
        }

        #process {
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
        }

        .process_all {
                width: 100%;

        }


        .process_top {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            background-color: #7381A4;
            height: 350px;
            width: 100%;
                padding: 30px 0;
        }

        .process_top>img {
                width: 100%;
                margin:  15px 0;
        }

        .process_cen {
                width: 98%;
                position: relative;
                z-index: 9999;
                background-color: #fff;
                padding: 20px 15px;
                border-radius: 5px;
                box-shadow: 5px 5px 5px #ccc;
                margin: 0 auto;
                top: -100px;
        }

        .process_cen_top {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
        }

        .process_cen_top>span,
        .process_cen_top>p {
                color: #777;
                font-size: 15px;
                display: flex;
                align-items: center;
        }

        .process_cen_top>span>div {
                -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                height: 10px;
                width: 10px;
                margin-right: 5px;
                background-color: #7381A4;
        }

        .process_cen_center {
                display: flex;
        }
        .process_cen_center>div:first-child{
                border-right: 20px solid #fff;
        }
        .cen_center_lie {
                display: flex;
                flex: 1;
                border-radius: 5px;

        }

        .cen_center_lie>img {
                width: 50%;
                position: relative;
                z-index: 999;
        }

        .cen_center_lie_right {
                flex: 3;
                background-color: #f5f5f5;
                padding: 15px;
        }

        .cen_center_lie_right>span {
                color: #777;
                font-size: 13px;
                width: 100%;
                border-bottom: 1px solid #ddd;
                padding: 10px 0;
                display: flex;
                align-items: center;
        }

        .cen_center_lie_right>span>div {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #ccc;
                margin-right: 10px;
        }
</style>
