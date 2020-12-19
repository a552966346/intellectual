<template>
<!-- 业务流程-->
<div class="businessintroduction_all">
    <div class="businessintroduction_container">
        
        <div class="businessintroduction_item" v-for="(item,index) in bus.arr" :key="index">
            <div class="businessintroduction_item_top">{{item.top}}</div>
            <div class="businessintroduction_item_text" >{{item.text}}</div>
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
        bus:Object
        
    }
    
}
</script>
<style scoped>
.businessintroduction_all {
    width: 100%;
}
.businessintroduction_container{
    height: 348px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px 20px 20px;
    align-items: flex-start;
    
    
}
.businessintroduction_item{
    box-shadow: 1px 1px 3px 2px rgb(227 224 224);
    background-color: #fff;
    height: 144px;
    padding: 20px 20px;
    border-radius: 5px;
    width: 32%;
    margin-top: 20px;
    padding: 10px;
    margin-right: 1.3%;
}
.businessintroduction_item_top{
    font-size: 34px;
    font-weight: 700;
    height: 50px;
    width: 50px;
    text-align: center;
    border-bottom: 2px solid #116dd5;
    margin: 0 auto;
}
.businessintroduction_item_text{
    color: #7a7a7a;
    font-size: 13px;
    line-height: 1.3;
    margin-top: 22px;
}

</style>