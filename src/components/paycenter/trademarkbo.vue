<template>
   <div class="trademark_content">
       <div class="trademark_like">
        <div class="trademark_title">
            <div class="trademark_copy">
                <h2>没有找到您心仪的商标？</h2>
                <a href="#">
                    <p>联系客服帮您找</p>
                </a>
                <span>或</span>
                <a href="#">
                    <p style="background-color:#3c568f">发布求购需求</p>
                </a>
            </div>
            <div class="trademark_dash">
                <p>猜中您喜欢的商标有点难度呢，马上联系客服为你推荐更多商标</p>
            </div>
            <div class="trademark_line">
                <div class="trademark_left"></div>
                <p>猜您喜欢</p>
                <div class="trademark_right"></div>
            </div>
        </div>
          <ul class="trademark_list">
		        <li class="color1" v-for="(item,index) in listdata" :key="index+'list'" >
		            <a class="trademark_pro" href="#" >
		                <div class="trademark_colors"  :style="{background:item.bgcolor}">
                                        <div class="trademark_sele">
                                                <img :src="item.images_text[0]">
                                        </div>

		                    <div class="trademark_selector">
		                        <div class="trademark_coloritem" :style="{background: m}" v-for="(m,i) in color" @click="colorbtn(m,i,index)" :key="m"></div>
		                    </div>
		                </div>
		                <p class="trademark_p1">
		                    <span>{{item.name}}</span>
		                    <img src="../../../static/img/paycenter/copyright_like.png" alt="">
		                </p>
		                <p class="trademark_p2">{{item.categoryid_text}}</p>
		                <p class="trademark_p3">
		                    <span class="trademark_price"><label>￥</label>{{item.fee}}</span>
		                    <img src="../../../static/img/paycenter/copyright_right.png" alt="">
		                </p>
                        <div class="trademark_kefu" href="#">立即议价</div>
		            </a>
		        </li>
		    </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentId:'111111',
                 color:['rgb(230, 92, 92)','rgb(246, 139, 108)','rgb(246, 189, 108)','rgb(126, 152, 205)','rgb(197, 120, 209)'],
			}
		  },
                  props:{
                          listdata:''
                  },
		  methods:{
		  	/*
		  	* m-----当前选中的颜色
		  	* i-----当前选中颜色在这个数组中的下标
		  	* index----最外面数组 当前选中的下标
		  	* */
			colorbtn(m,i,index){
                                // console.log(m)
				this.$set(this.listdata[index],'bgcolor',m);
                                 this.$forceUpdate();
                                // console.log(this.listdata[index])
				this.listdata[index];
			}
		  }
}
</script>

<style scoped>
.trademark_like{
    max-width: 1200px;
    background-color: #fff;
    margin: 0px auto;
    padding: 30px 0 0;
}
.trademark_title{
    width: 100%;
    position: relative;
    background: url(../../../static/img/paycenter/copyright_xiao.png)
                no-repeat center center;
    background-position: 260px 0;
}
.trademark_copy{
    margin: 0 auto;
    text-align: center;
    padding-right: 14px;
}
.trademark_copy h2{
    display: inline-block;
    font-weight: 450;
    padding-bottom: 10px;
}
.trademark_copy p{
    padding: 0px 10px;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    font-size: 13px;
    display: inline-block;
    color: #fff;
    background-color: #ff7137;
}
.trademark_copy span{
    font-size: 13px;
}
.trademark_line{
    position: relative;
}
.trademark_left{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 45%;
    bottom: 45%;
}
.trademark_right{
    width: 25px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 45%;
    left: 53%;
}
.trademark_dash{
    width: 500px;
    border-top:1px dashed #cecece ;
    margin: 0 auto;
    padding-top: 10px;
}
.trademark_dash>p{
    color: #ccc;
    font-size: 13px;
}
.trademark_line>p{
    text-align: center;
    color: #ccc;
    font-size: 15px;
    margin: 20px 0 30px;
}
.trademark_content{
    width: 1200px;
    margin: 0 auto;
    background-color: #f6f6f6;
    padding-bottom: 20px;
}
.trademark_list {
    display: flex;
    flex-wrap: wrap;
}
.trademark_list li{
    list-style: none;
    width: 19%;
    padding: 10px;
    background: #f5f5f5;
    height: 352px;
    margin-bottom: 20px;
    margin-left: 10px;
}
.trademark_list a{
    text-decoration: none;
    color: black;
    background-color: #f5f5f5;
}
.trademark_list li>a:first-child{
    display: block;
    width: 100%;
    overflow: hidden;
}
.trademark_list li:hover .trademark_coloritem{
    display: block;
}
.trademark_list li:hover .trademark_kefu{
    display: block;
}
.trademark_list li:hover .trademark_p2{
    display: none;
}
.trademark_colors{
        height: 235px;
}
.trademark_sele >img{
    max-width: 210px;
    max-height: 210px;
}
.trademark_sele{
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
}
.trademark_selector{
    width: 100%;
    height: 21px;
    box-sizing: border-box;
    padding: 3px;
    display: flex;
    justify-content: center;
}
.trademark_coloritem{
    width: 20%;
    height: 15px;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,.8);
    float: left;
    cursor: pointer;
    display: none;
}
.trademark_p1{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.trademark_p1>img{
    width: 15px;
    margin-right: 10px;
}
.trademark_p1>span{
    font-size: 15px;
    font-weight: 200;
}
.trademark_p2{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin: 10px 0;
    font-size: 12px;
    color: #ccc;
}
.trademark_p3{
    border-top: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 9px;
}
.trademark_p3>span{
    font-size: 15px;
    color:#fa7219 ;
    font-weight: bold;
}
.trademark_p3>img{
    width: 15px;
}
.trademark_kefu{
    display: none;
    background-color: #187fc4;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    padding: 8px 0;
}
</style>
