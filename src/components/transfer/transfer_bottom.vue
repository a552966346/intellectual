<template>
  <div class="transfer_bottms">
        <div class="transfer_like">
        <div class="transfer_title">
            <div class="transfer_copy">
                <h2>没有找到您心仪的成果？</h2>
                <a href="#">
                    <p>联系客服帮您找</p>
                </a>
                <span>或</span>
                <a href="#">
                    <p style="background-color:#3c568f">发布求购需求</p>
                </a>
            </div>
            <div class="transfer_dash">
                <p>不要急哦，马上联系服务顾问获取！</p>
            </div>
            <div class="transfer_line">
                <div class="transfer_left"></div>
                <p>猜您喜欢</p>
                <div class="transfer_right"></div>
            </div>
        </div>
        <div class="transfer_bpro">
            <div class="transfer_bottom" v-for="(item,index) in botm_data" :key="item.id">
                 <router-link  :to="'/service_xlj_two?id='+item.id">
                        <div class="transfer_rig">
                            <img :src="item.images_text[0]" alt="">
                            <h3>{{item.name}}</h3>
                            <div class="transfer_con">
                                <p v-if="item.fee>=10000">￥{{(item.fee/10000)}}万元</p>
                                <p v-else>￥{{item.fee}}元</p>
                                <span>{{item.categoryid_text}}</span>
                            </div>
                        </div>
                </router-link>
             </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
             arr: [{
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '一种多用途靠背椅',
                price: '面议',
                new: '实用新型专利',
             },
             {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '一种多用途靠背椅',
                price: '面议',
                new: '实用新型专利',
             },
             {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '一种多用途靠背椅',
                price: '面议',
                new: '实用新型专利',
             },
             {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '一种多用途靠背椅',
                price: '面议',
                new: '实用新型专利',
             },
             {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '一种多用途靠背椅',
                price: '面议',
                new: '实用新型专利',
             }
            ]
        }
    },
    props:{
            botm_data:''
    }
}
</script>


<style scoped>
.transfer_bottms{
    background-color: #f6f6f6;
    padding-bottom: 20px;
    }
.transfer_title{
    width: 100%;
    position: relative;
    background: url(../../../static/img/paycenter/copyright_xiao.png)
                no-repeat center center;
    background-position: 260px 0;
}
.transfer_copy{
    margin: 0 auto;
    text-align: center;
    padding-right: 14px;
}
.transfer_copy h2{
    display: inline-block;
    font-weight: 450;
    padding-bottom: 10px;
}
.transfer_copy p{
    padding: 0px 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    font-size: 13px;
    display: inline-block;
    color: #fff;
    background-color: #ff7137;
}
.transfer_copy span{
    font-size: 13px;
}
.transfer_line{
    position: relative;
}
.transfer_left{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 45%;
    bottom: 45%;
}
.transfer_right{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 45%;
    left: 53%;
}
.transfer_dash{
    width: 500px;
    border-top:1px dashed #cecece ;
    margin: 0 auto;
    padding-top: 10px;
}
.transfer_dash>p{
    color: #ccc;
    font-size: 13px;
}
.transfer_line>p{
    text-align: center;
    color: #ccc;
    font-size: 15px;
    margin: 20px 0 30px;
}
.transfer_bpro{
    display: flex;
    flex-wrap: wrap;
    margin: 0 25px;
    }

.transfer_bottom{
    height: 260px;
    width: 20%;
    padding:20px;
    color: black;
    background-color: #f5f5f5;
    margin: 0 0 25px;
}
.transfer_bottom>a{
        text-decoration: none;
}
.transfer_bpro .transfer_bottom:last-child .transfer_rig{
    border: none;
}
.transfer_rig{
    border-right: 1px solid #ccc;
    height: 90%;
    width: 206px;
}
.transfer_bottom img{
        height: 80%;
        width: 100%;
    max-width: 185px;
}
.transfer_bottom h3{
    color: #000;
    font-size: 15px;
    margin: 10px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.transfer_con{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.transfer_con>p{
    color: #f95347;
    font-weight: bold;
}
.transfer_con>span{
    color: #8ea8d9;
    margin-right: 20px;
}
.transfer_like{
    max-width: 1200px;
    background-color: #fff;
    margin: 0px auto;
    padding: 30px 0 0;
}
</style>
