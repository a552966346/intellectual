<template>
<!-- 公共问题 -->
<div class="publicproblems_all">
    <div class="publicproblems_container">
        <div class="publicproblems_item" v-for="(item,index) in pub.arrq" :key="index">
            <div class="publicproblems_item_q">
                <div class="publicproblems_item_q_img">
                    <img src="../../../static/img/copyright/q.png" alt="">
                </div>
                <div class="publicproblems_item_q_text" >{{item.q}} </div>
            </div>
            <div class="publicproblems_item_a">
                <div class="publicproblems_item_a_text" v-html="item.a"></div>
                <div class="publicproblems_item_a_img">
                    <img src="../../../static/img/copyright/a.png" alt="">
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
    props:{
        pub:Object
    }
}
</script>
<style scoped>
.publicproblems_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 15px;
}
.publicproblems_all img{
    vertical-align: middle;
}
.publicproblems_container{
    padding: 10px;
    width: 100%;
}
.publicproblems_item_q,
.publicproblems_item_a{
    display: flex;
    align-content: center;
    font-size: 14px;
    letter-spacing: 1px;
}
.publicproblems_item_a{
    display: flex;
    justify-content: flex-end;
    text-align:justify;
}
.publicproblems_item_q_text{
    padding-top: 14px;
    
    

}
.publicproblems_item_a_text{
    width: 50%;
    justify-content: flex-end;
    display: flex;
    line-height: 20px;
    padding-top: 14px;
}
</style>