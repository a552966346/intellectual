<template>
  <div>
      <v-topsearch></v-topsearch>
      <v-navigation></v-navigation>
      <div class="copyright_pay">
        <img src="../../../static/img/paycenter/copyright_top.png" alt="">
        <!-- 分类 -->
        <div class="copyright_sort">
            <div class="copyright_select">
                <dl>
                    <dt>版权分类</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">小说作品</a>
                       <a href="#">剧本作品</a>
                       <a href="#">人文社科</a>
                       <a href="#">美术作品</a>
                       <a href="#">漫画作品</a>
                       <a href="#">摄影作品</a>
                       <a href="#">软件作品</a>
                       <a href="#">图形作品</a>
                    </dd>
                </dl>
                <dl>
                    <dt>交易方式</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">转让</a>
                       <a href="#">授权</a>
                       <a href="#">分账</a>
                    </dd>
                </dl>
                <dl>
                    <dt>授权方式</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">独家</a>
                       <a href="#">非独家</a>
                    </dd>
                </dl>
                <dl>
                    <dt>授权范围</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">全部版权</a>
                       <a href="#">复制权</a>
                    </dd>
                </dl>
                <dl>
                    <dt>出售价格</dt>
                    <dd>
                       <a href="#"><span>√</span>不限</a>
                       <a href="#">1万以下</a>
                       <a href="#">1-2万</a>
                       <div class="copyright_sure">
                        <input type="text"><p>元 -</p>
                        <input type="text"><p>元</p> 
                        <button>确定</button>
                       </div>
                    </dd>
                </dl>
                <dl>
                    <dt>筛选条件</dt>
                    <dd> 
                        <a href="#"><font>清空筛选条件</font></a>
                    </dd>
                </dl>
            </div>
            <div class="copyright_active">
                <img src="../../../static/img/paycenter/copyright_pay.png" alt="">
                <div class="copyright_bg">
                    <h2>交易动态</h2>
                    <div class="copyright_line"></div>
                    <p>交易实时动态</p>
                    <div class="copyright_lines"></div>
                </div>
                <div class="copyright_gd">
                    <div class="copyright_content" v-for="(item, index) in copyrightList" :key="index">
                        <div class="copyright_title">
                            <span>23小时</span>
                            <p>*********</p>
                        </div>
                        <div class="copyright_box">
                            <ul class="copyright_list" :class="{copyright_top:animate}">
                                <li>
                                    <span>{{item.sort}}</span>
                                    <span>-</span>
                                    <span class="copyright_hui"> {{item.name}}</span>
                                    <span>编号</span>
                                    <span class="copyright_hui"> {{item.amount}}</span>
                                </li>
                            </ul>
				        </div>
			        </div>
                </div>
            </div>
        </div>
        <!-- 排序-->
        <div>
            <copyrightOrdinary :arr='arr'></copyrightOrdinary>
        </div>


        <!-- 猜你喜欢 -->
        <div>
            <copyrightBottom :arr='arr'></copyrightBottom> 
        </div>
     
      </div>
      <v-combotttom></v-combotttom>
  </div>
</template>

<script>
import copyrightOrdinary from '@/components/paycenter/copyrightOrdinary.vue'
import copyrightBottom from '@/components/paycenter/copyrightBottom.vue'
export default {
    data(){
        return{
                animate: false,
                copyrightList: [{
                        sort: '09类',
                        name: '科学仪器',
                        amount: '****'
                    },
                    {
                        sort: '09类',
                        name: '科学仪器',
                        amount: '****'
                    }
                ],
            arr:[
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年5',
                ban:'版权分类：美术作品5',
                price:'6000123.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年4',
                ban:'版权分类：美术作品4',
                price:'6000222.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年3',
                ban:'版权分类：美术作品3',
                price:'6000333.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年2',
                ban:'版权分类：美术作品2',
                price:'600033.00',
            },
            {
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3504410683,1736346119&fm=26&gp=0.jpg',
                text:'爱你一万年1',
                ban:'版权分类：美术作品1',
                price:'600033.00',
            }
        ]
        }
    },
    	created: function() {
                setInterval(this.showcopyright, 2000)
            },
            methods: {
                showcopyright: function() {
                    this.animate = true;
                    setTimeout(() => {
                        this.copyrightList.push(this.copyrightList[0]);
                        this.copyrightList.shift();
                        this.animate = false;
                    }, 500)
                },
			},
    components:{
        copyrightOrdinary,
        copyrightBottom
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    .copyright_pay{
        background: #f6f6f6;
    }
    /* 版权分类 */
    .copyright_sort{
        width: 1200px;
        margin: 25px auto 15px;
        display: flex;
    }
    .copyright_select{
        width: 960px;
    }
    .copyright_select dl{
        border-bottom: 1px dashed #E8E5F1;
        width: 100%;
        background: #F9FAFE;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .copyright_select dt{
        width: 110px;
        display: inline-block;
        text-align: center;
        color: #464646;
        font-size: 14px;
        line-height: 40px;
        font-weight: 700;
        vertical-align: center;
    }
    .copyright_select dl dd{
        width: 847px;
        line-height: 53px;
        padding: 6px 0;
        background: #fff;
        display: inline-block;
        text-align: 20px;
        vertical-align: center;
    }
    .copyright_sure{
        display: inline;
        margin-left:42%;
    }
    .copyright_sure input{
        width: 60px;
        height: 23px;
        border: 1px solid #f0f0f0;
        outline: none;
        color: #ccc;
    }
    .copyright_sure button{
        color: #666;
        font-size: 13px;
        padding: 2px 2px;
        margin-right: 8px;
        background: #fff;
        border: 1px solid #f0f0f0; 
        outline: none;
        margin-left: 5px;
    }
    .copyright_sure p{
        display: inline-block;
        color: #cecece;
        font-size: 12px;
        margin-left: 3px;
    }
    .copyright_sure button:hover{
        color: #fff;
        background-color:#3b5791 ;
    }
    .copyright_select dl:last-child{
        background: #fff;
        line-height: 45px;
    }
    font{
        border: 1px solid #cecece;
        font-size: 13px;
        padding: 5px;
    }
    .copyright_select dd span{
        display: inline-block;
        height: 15px;
        line-height: 15px;
        color: #7588b2;
        border: 1px solid #7588b2;
        padding: 0 3px;
        font-size: 12px;
    } 
    .copyright_select a:first-child{
        color: #7685ae;
    }  
    .copyright_select a:not(:first-child){
        margin-right: 42px;
    }
    .copyright_select a{
        text-decoration: none;
        color: #A3A4A6;
        margin-left: 10px;
        font-size: 14px;
        
    }
   .copyright_active{
       flex: 1;
       margin-left: 20px;
   }
   .copyright_active>img{
       width: 220px;
   }
   .copyright_bg{
        background: url(../../../static/img/paycenter/copyright_bg.png) 
                    no-repeat center;
        background-size: 100% 100%;
        text-align: center;
        position: relative;
   }
   .copyright_bg h2{
        color: #2385c7;
        font-size: 20px;
        padding: 9px 0 5px;
   }
   .copyright_bg p{
       padding: 10px 0;
        color: #2385c7;
        font-size: 13px;
   }
   .copyright_line,.copyright_lines{
       border-top: 1px solid #2385c7;
       width: 20px;
   }
   .copyright_line{
       position: absolute;
        left: 45px;
        bottom: 15px;
   }
   .copyright_lines{
       position: absolute;
       right: 45px;
        bottom: 15px;
   }
   .copyright_gd{
       width: 220px;
       padding:  10px;
       background: #fff;
   }
   .copyright_content{
	width:200px;
	color: #3A3A3A;
	background-color:#f6f6f6;
	display: flex;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
    margin-bottom: 10px;
}

.copyright_title {
	height: 30px;
	font-size: 14px;
	align-items: center
}
.copyright_title span{
	padding: 2px;
	border-radius: 10px;
	background-color: #197ec6;
	color: #fff;
	margin: 0 12px;
}
.copyright_title p{
    display: inline-block;
    padding-top: 8px;
}
.copyright_box {
	display: block;
	position: relative;
	width: 100%;
	height: 30px;
	overflow: hidden;
}
.copyright_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
.copyright_top {
	transition: all 0.5s;
	margin-top: -30px;
}

.copyright_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 10px;
}

.copyright_list li span {
	padding: 0 2px;
}
.copyright_list span{
	color: #cecece;
}

.copyright_hui {
	color: #cecece;
}
</style>
