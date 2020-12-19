<template>
<!-- 服务保障  表格样式 -->
<div class="serviceassurance_table_all">
    <div class="serviceassurance_table_container"  >
        <div class="serviceassurance_table_item" >
            <div class="serviceassurance_table_item_t tl" >{{sert.ltitle}} </div>
            <div class="serviceassurance_table_item_c cl" v-for="(item,index) in sert.arrl" :key="index" >{{item.text}}</div>
        </div>
        <div class="serviceassurance_table_item" >
            <div class="serviceassurance_table_item_t tr" >{{sert.rtitle}}</div>
            <div class="serviceassurance_table_item_c cr" v-for="(item,index) in sert.arrr" :key="index" >{{item.text}}</div>
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
        sert:Object
    }
}
</script>
<style scoped>
.serviceassurance_table_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.serviceassurance_table_container{
    width: 100%;
    padding: 10px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.serviceassurance_table_item{
    width: 49%;
    display: flex;
    flex-direction: column;
}
.serviceassurance_table_item_t{
    width: 100%;
    height: 34px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
.tl{
    background-color: #187fc4;
    color: #fff;
}
.tr{
    background-color: #7d7d7d;
    color: #fff;
}
.serviceassurance_table_item_c{
    width: 100%;
    height: 50px;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    font-size: 13px;
}
.cl{
    background-color:#f2f6ff;
    color: #579bd0;
}
.cr{
    background-color: #f2f2f4;
    color: #b0b0b0;
}

</style>