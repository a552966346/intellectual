<template>
    <div class="transfer_con">
        <div class="transfer_lefts">
            <div class="transfer_sort">
                    <span :class="{sortactive:this.sortnumber==1}" @click="comsort(1)">综合排序<i class="el-icon-bottom transfer_sorticon"></i></span>
                    <span :class="{sortactive:this.sortnumber==2}" @click="comsort(2)">浏览热度<i class="el-icon-bottom transfer_sorticon"></i></span>
                    <span :class="{sortactive:this.sortnumber==3}" @click="comsort(3)">发布时间<i class="el-icon-bottom transfer_sorticon"></i></span>
                    <!-- <div class="transfer_sortright">
                            <div :class="{transfer_sortitem:true,sortactive:this.listsortnum==1}" @click="listsort(1)"><i class="el-icon-s-grid"></i></div>
                            <div :class="{transfer_sortitem:true,sortactive:this.listsortnum==2}" @click="listsort(2)"><i class="el-icon-s-unfold"></i></div>
                            <div class="transfer_sortpage">
                                <div><i class="el-icon-arrow-left"></i></div>
                                <div><i class="el-icon-arrow-right"></i></div>
                            </div>
                    </div> -->
            </div>
            <div class="transfer_other"  v-for="(item,index) in arr" :key="index">
                <div class="transfer_img">
                    <img :src="item.url" alt="">
                </div>
                <div class="transfer_txt">
                    <h3>液体位置控制器</h3>
                    <div class="transfer_fen" >
                        <div class="transfer_sha">
                            <p><span>行业分类</span></p>
                            <p><span>应用领域</span></p>   
                            <p><span>技术类型</span></p>   
                            <p><span>成熟程度</span></p>   
                            <p><span>交易方式</span></p>
                        </div>
                        <div class="transfer_xia">
                            <p><span>其他</span></p>
                            <p><span>其他</span></p>
                            <p><span>实用新型专利</span></p>
                            <p><span>不限</span></p> 
                            <p><span>不限</span></p>
                        </div>    
                    </div>
                        <div class="transfer_price">交易价格 <span>面议</span> </div>
                </div>
                <div class="transfer_right">
                    <div class="transfer_xiao">
                        <img src="../../../static/img/technologytransfer/transfer_eye.png" alt="">
                        <span>46</span>
                        <font>发布时间：2020-08—11 11:36:38</font>
                    </div>
                    <div class="transfer_botom">
                        <a class="transfer_share">
                            <img src="../../../static/img/technologytransfer/transfer_share.png" alt="">
                        </a>
                        <a class="transfer_share">
                            <img src="../../../static/img/technologytransfer/transfer_love.png" alt="">
                        </a>
                        <a class="transfer_kefu">
                            <img src="../../../static/img/technologytransfer/transfer_kefu.png" alt="">
                            <span>联系客服</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="transfer_page">
                <span>共十四页</span>
                <button class="transfer_prev">首页</button>
                <button class="transfer_prev">上一页</button>
                <button class="transfer_btn">1</button>
                <button class="transfer_btn">2</button>
                <button class="transfer_btn">3</button>
                <button class="transfer_btn">4</button>
                <button class="transfer_btn">5</button>
                <span>....</span>
                <button class="transfer_btn">14</button>
                <button class="next">下一页</button>
                <button class="last">尾页</button>
                <span>
                    到第
                    <input type="text">
                    页
                </span>
                <button>确定</button>
            </div>
        </div>
        <div class="transfer_rights">
            <div class="transfer_recommend">
                <div class="transfer_cheng">
                    <p>相关成果推荐 <span>更多</span><img src="../../../static/img/technologytransfer/transfer_right.png" alt=""> </p>
                </div>
                <a class="transfer_pro" href="#" v-for="(item,index) in arrlist" :key="index">
                    <div class="transfer_more">
                        <div class="transfer_zhao">
                            <img src="https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif" alt="">
                        </div>
                        <span>透气性医用手套用复合材料及其制备方法</span>
                        <div class="transfer_jia">
                            <span>5.24万</span>
                            <span style="font-weight:300;">不限</span>
                        </div>
                        <div class="transfer_foo">
                            <div class="transfer_ask">
                                <p>咨询客服 </p>
                                <font style="background-color:#00a3bf;"><img src="../../../static/img/technologytransfer/transfer_tou.png" alt=""> </font>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
        return {
                sortnumber:1,           //左侧边排序切换
                listsortnum:1,             //右侧 列表形式排序
        arr: [{
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年5',
                ban: '版权分类：美术作品5',
                price: '6000123.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年4',
                ban: '版权分类：美术作品4',
                price: '6000222.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年3',
                ban: '版权分类：美术作品3',
                price: '6000333.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年2',
                ban: '版权分类：美术作品2',
                price: '600033.00',
        }
],
         arrlist: [{
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年5',
                ban: '版权分类：美术作品5',
                price: '6000123.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年4',
                ban: '版权分类：美术作品4',
                price: '6000222.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年3',
                ban: '版权分类：美术作品3',
                price: '6000333.00',
        },
        {
                url: 'https://cdn.yuzhua.com/data/upload/2020-03-16/5e6f46dc89e29.gif',
                text: '爱你一万年2',
                ban: '版权分类：美术作品2',
                price: '600033.00',
        }
],
        }
    },
    methods: {
        comsort(index){
                this.sortnumber=index
        },
        listsort(index){
                this.listsortnum=index
        }
    }
}
</script>

<style scoped>
.transfer_sort{
    width: 960px;
    height: 50px;
    background-color: #fff;
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    border: 1px solid #eceff6;
    position: relative;
}
.transfer_sort>span{
    width: 135px;
    text-align: center;
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #f1f1f1;
}
.transfer_sorticon{
    font-weight: bold;
}
.sortactive{
    color: #1580c4;
}
/* 左边的内容 */
.transfer_pro{
    text-decoration: none;
    color: black;
}
.transfer_pro:hover .transfer_foo{
    display: block;
}
.transfer_pro:hover .transfer_jia{
    display: none;
}
.transfer_con{
   width: 1200px;
   margin: 0 auto;
   display: flex;
}
.transfer_other{
    width: 960px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 30px 10px 30px 40px;
    margin-bottom: 15px;
}
.transfer_img{
    flex: 1;
    border: 1px solid #ccc;
}
.transfer_other img{
    max-width: 150px;
    max-height: 150px;
}
.transfer_txt{
    margin-left: 10px;
    flex: 6;
}
.transfer_txt>h3{
    margin-bottom: 20px;
}
.transfer_fen{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.transfer_sha{
    color: #ccc;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
}
.transfer_xia{
    color: black;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.transfer_txt p{
    border-right: 1px solid #e0e0e0;
    width: 89px;
}
.transfer_txt span{
    padding-left: 5px;  
}
.transfer_price{
    margin-top: 16px;
    color: #ccc;
    font-size: 14px;
}
.transfer_price span{
    font-size: 16px;
    color:#fb7445;
    font-weight: bold;
}
.transfer_right{
    flex: 4;
    margin-left: 35px;
}
.transfer_xiao{
    width: 100%;
    display: flex;
    align-items: center;
}
.transfer_xiao span{
    color: #b0aaaa;
    font-size: 14px;
    margin: 0 10px 0 5px;
}
.transfer_xiao font{
    color: #9aa1ab;
    font-size: 14px;
}
.transfer_right img {
    width:18px;
}
.transfer_botom{
    margin-top: 20px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.transfer_share{
    width: 30px;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d8d8d8;
    margin-right: 10px;
}
.transfer_share img{
    width: 18px;
}
.transfer_kefu{
    background-color:#f2f6ff;
    margin-left: 20px;
    padding: 5px;
    color: #1a7fc3;
    display: flex;
    align-items: center;
}
.transfer_kefu img{
    margin-right: 5px;
}
.transfer_cheng{
    background-color:#1a7fc3;
    width: 230px;
    height: 50px;
    padding: 10px;
    line-height: 30px;
}
.transfer_cheng>p{
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
}
.transfer_cheng span{
    margin-left: 30px;
    font-size: 14px;
}
.transfer_cheng img{
    width: 15px;
}
.transfer_more{
    width: 230px;
    background-color: #fff;
    padding: 15px;
}
.transfer_zhao{
    width: 200px;
}
.transfer_more img{
   width: 100%;
}
.transfer_more span{
    font-size: 14px;
}
.transfer_jia{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}
.transfer_jia span{
    color: #1d7fc6;
    font-weight: bold;
}
.transfer_foo{
    display: none;
}
.transfer_ask {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.transfer_ask p{
    color: #fff;
    background-color: #1a7fc3;
    text-align: center;
    width: 165px;
    height: 100%;
    font-size: 14px;
    padding: 5px 0;
}
.transfer_ask font{
    width: 35px;
    padding: 3.5px;
    text-align: center;
}
.transfer_ask img{
    width: 18px;
}
/* 推荐 */
.transfer_recommend{
    width: 230px;
    margin-left: 10px;
}
/* 页数 */
.transfer_page{
    background: #fff;
    padding: 12px 30px;
    text-align: left;
    width: 960px;
    margin-top: 15px;
    line-height: 29px;
    font-size: 14px;
    color: #999;
}
.transfer_page span{
    color: #666;
    font-size: 14px;
    padding-right: 8px;
    height: 31px;
    line-height: 31px;
}
.transfer_page button{
    color: #666;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 8px;
    background: #fff;
    border: 1px solid #f0f0f0;
    outline: none;
}
.transfer_page input{
    color: #666;
    font-size: 14px;
    width: 40px;
    height: 31px;
    line-height: 31px;
    border: 1px solid #f0f0f0;
    outline: none;
    padding: 0 5px;
    outline: none;
}
.transfer_page button:hover{
    background-color:#3b5791 ;
    color: #fff;
    outline: none;
}
</style>