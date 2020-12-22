<template>
<!-- 服务保障  123样式 -->
<div class="serviceassurance_all">
    <div class="serviceassurance_container"  >
        <div class="serviceassurance_item" v-for="(item,index) in ser.arr" :key="index">
            <div class="serviceassurance_item_img">
                <img :src="item.src" alt="">
            </div>
            <div class="serviceassurance_item_title">{{item.title}}</div>
            <div class="serviceassurance_item_text">{{item.text}}</div>
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
        ser:Object
    }
}
</script>
<style scoped>
.serviceassurance_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 15px;
}
.serviceassurance_container{
    padding: 10px 20px;
}
.serviceassurance_item{
    box-shadow: 2px 2px 3px 3px #e8e8f1;
    width: 100%;
    display: flex;
    padding: 40px 20px 20px;
    margin-bottom: 30px;

}
.serviceassurance_item_img{
    margin-top: -13px;
}
.serviceassurance_item_title{
    color: #1b7fc5;
    font-weight: 700;
    /* font-size: 22px; */
}
.serviceassurance_item_text{
    margin-left: 9px;
    font-size: 15px;
    color: #4d87be;
    line-height: 1.6;
    width: 625px;
}

</style>