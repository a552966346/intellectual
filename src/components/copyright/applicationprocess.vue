<template>
<!-- 申请流程 2个图-->
<div class="applyProcess_all">
    <div class="applyProcess_container">

        <div class="applyProcess_img">
            <img :src="app.src" alt="">
        </div>
        <div class="applyProcess_items">
            <div class="applyProcess_item">
                <div class="app_item_top">
                    <div class="app_item_top_l">
                        <div class="app_item_top_l_t">
                            <img src="../../../static/img/copyright/lingo.png" alt="">
                        </div>
                        <div class="app_item_top_l_text">{{app.top_text}}</div> 
                    </div>
                    <div class="app_item_top_r">{{app.top_r}} </div>
                </div>
                <div class="app_item_bottom">
                    
                        <div class="app_item_bottom_item_l">
                            <div class="app_item_bottom_item_img">
                                <img src="../../../static/img/copyright/person_apply.png" alt="">
                            </div>
                            <ul class="app_item_bottom_item_text" >
                                <li v-for="(item,index) in app.arrl" :key="index"><div class="circle"></div><span>{{item.text}}</span></li>
                            </ul>
                        </div>
                        <div class="app_item_bottom_item_r">
                            <div class="app_item_bottom_item_img">
                                <img src="../../../static/img/copyright/company_apply.png" alt="">
                            </div>
                            <ul class="app_item_bottom_item_text" > 
                                <li v-for="(item,index) in app.arrr" :key="index"><div class="circle"></div><span>{{item.text}}</span> </li>
                                
                            </ul>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props: {
        app:Object
        
        
    }
    
}
</script>
<style scoped>
.applyProcess_all {
    width: 100%;
    height: 440px;
}
.applyProcess_container{
    background-color: #7381a4;
    height: 350px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}
.applyProcess_img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 139px;
    background: no-repeat center;
}
.applyProcess_img img{
    width: 90%;
}
.applyProcess_items{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 284px;
    
}
.applyProcess_item{
    background-color: #fff;
    height: 240px;
    padding: 16px 14px;
    width: 96%;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 2px rgb(227 224 224);
}
.app_item_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.app_item_top_l{
    
    color: #949494;
    display: flex;
    align-items: center;
}
.app_item_top_l_text{
    margin-left: 10px;
    font-size: 15px;
}
.app_item_top_r{
    font-size: 12px;
    color: #cbcbcb;
}
.app_item_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9d9d9d;
}

.app_item_bottom_item_l,
.app_item_bottom_item_r{
    display: flex;
    width: 49.5%;
}
.app_item_bottom_item_img{
    z-index: 5;
}
.app_item_bottom_item_text{
    background-color: #f7f6fb;
    padding: 10px 0;
    padding-left: 20px;
    flex: 1;
    height: 165px;
    margin-left: -17px;
    display: flex;
    flex-direction: column;
}
li{
    list-style: none;
}
.app_item_bottom_item_text>li{
    font-size: 10px;
    line-height: 2.25;
    border-bottom: 1px solid #ede6e6;
    display: flex;
    align-items: center;
    flex: 1;
}
.circle{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #d4d4d4;
    margin-right: 10px;
}
</style>