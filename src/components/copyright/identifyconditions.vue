<template>
<!-- 认定条件  -->
<div class="identifyconditions_all">
    <div class="identifyconditions_container"  >
        <div class="identifyconditions_item" v-for="(item,index) in iden.arr" :key="index">
            <div class="identifyconditions_item_img">
                <img :src="item.src" alt="">
            </div>
            <div class="identifyconditions_item_img2">
                <img src="../../../static/img/copyright/iden_number.png" alt="">
            </div>
            <div class="identifyconditions_item_text">{{item.text}}</div>

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
        iden:Object
    }
}
</script>
<style scoped>
.identifyconditions_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 15px;
}
.identifyconditions_container{
    padding: 10px 20px;
    width: 84%;
    padding: 20px;
}
.identifyconditions_item{
    width: 100%;
    display: flex;
    margin-top: 10px;

}
.identifyconditions_item_img2{
    margin: 0 20px;
}
.identifyconditions_item_text{
    color: #5c9ccf;
    font-size: 16px;
    line-height: 1.7;
}
</style>