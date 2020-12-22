<template>
<!-- 为什么选择  表格样式 -->
<div class="cobdition_table_all">
    <div class="cobdition_table_container"  >
        <div class="cobdition_table_item_l" >
            <div class="cobdition_table_item_t cs " > </div>
            <div class="cobdition_table_item_t cq " > </div>
            <div class="cobdition_table_item_c " v-for="(item,index) in cond.arrl" :key="index" >{{item.text}}</div>
        </div>
        <div class="cobdition_table_item_r" >
            <div class="cobdition_table_item_t cs" ></div>
            <div class="cobdition_table_item_t cq" ></div>
            <div class="cobdition_table_item_c " ></div>
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
        cond:Object
    }
}
</script>
<style scoped>
.cobdition_table_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.cobdition_table_container{
    width: 100%;
    padding: 10px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cobdition_table_item_l{
    width: 19%;
    display: flex;
    flex-direction: column;
}
.cobdition_table_item_r{
    width: 79%;
    display: flex;
    flex-direction: column;
}
.cobdition_table_item_t{
    width: 100%;
    height: 34px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
.tt{
    background-color: #187fc4;
    color: #fff;
}
.bb{
    background-color: #f2f6ff;
    color:#1681c5;
}
.cobdition_table_item_c{
    width: 100%;
    height: 50px;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
}


</style>