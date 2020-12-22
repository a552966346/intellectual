<template>
<!-- 为什么选择  表格样式 -->
<div class="whychoose_table_all">
    <div class="whychoose_table_container"  >
        <div class="whychoose_table_item_l" >
            <div class="whychoose_table_item_t tt " >{{why.ltitle}} </div>
            <div class="whychoose_table_item_c bb" v-for="(item,index) in why.arrl" :key="index" >{{item.text}}</div>
        </div>
        <div class="whychoose_table_item_r" >
            <div class="whychoose_table_item_t tt" >{{why.rtitle}}</div>
            <div class="whychoose_table_item_c bb" v-for="(item,index) in why.arrr" :key="index" >{{item.text}}</div>
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
        why:Object
    }
}
</script>
<style scoped>
.whychoose_table_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.whychoose_table_container{
    width: 100%;
    padding: 10px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.whychoose_table_item_l{
    width: 19%;
    display: flex;
    flex-direction: column;
}
.whychoose_table_item_r{
    width: 79%;
    display: flex;
    flex-direction: column;
}
.whychoose_table_item_t{
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
.whychoose_table_item_c{
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