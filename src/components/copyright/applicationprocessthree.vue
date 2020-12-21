<template>
<!-- 申请流程 3个图-->
<div class="applyProcess3_all">
    <div class="applyProcess3_container">

        <div class="applyProcess3_img">
            <img :src="appthree.src" alt="">
        </div>
        <div class="applyProcess3_items">
            <div class="applyProcess3_item">
                <div class="app3_item_top">
                    <div class="app3_item_top_l">
                        <div class="app3_item_top_l_t">
                            <img src="../../../static/img/copyright/lingo.png" alt="">
                        </div>
                        <div class="app3_item_top_l_text">{{appthree.top_text}}</div> 
                    </div>
                    <div class="app3_item_top_r">{{appthree.top_r}} </div>
                </div>
                <div class="app3_item_bottom">
                   
                        <div class="app3_b_item" v-for="(item,index) in appthree.arr" :key="index">
                            <div class="app3_b_item_t" >
                                <div class="app3_b_item_timg">
                                    <img :src="item.src" alt="">
                                </div>
                                <div class="app3_b_item_t_title">{{item.title}}</div>
                            </div>
                            <div class="app3_b_item_con" >
                                <p v-for="(items,index) in item.children" :key="index">{{items.text}}</p>  
                            </div>
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
        appthree:Object
        
    }
    
}
</script>
<style scoped>
.applyProcess3_all {
    width: 100%;
    height: 450px;
}
.applyProcess3_container{
    background-color: #7381a4;
    height: 350px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}
.applyProcess3_img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 139px;
    background: no-repeat center;
}
.applyProcess3_items{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 284px;
    
}
.applyProcess3_item{
    background-color: #fff;
    height: 240px;
    padding: 20px 20px;
    width: 98%;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 2px rgb(227 224 224);
}
.app3_item_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.app3_item_top_l{
    font-size: 16px;
    color: #949494;
    display: flex;
    align-items: center;
}
.app3_item_top_l_text{
    margin-left: 10px;
}
.app3_item_top_r{
    font-size: 12px;
    color: #cbcbcb;
}
.app3_item_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9d9d9d;
    padding: 20px 0 10px 0;
}
.app3_b_item{
    width: 32%;
    height: 150px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px rgb(193 200 221);
    padding: 14px;
}
.app3_b_item_t{
    display: flex;
    align-items: center;
}
.app3_b_item_t_title{
    font-size: 18px;
    color: black;
    font-weight: 550;
    margin-left: 10px;
}
.app3_b_item_con{
    margin-top: 10px;
    line-height: 1.6;
    font-size: 12px;
}


</style>