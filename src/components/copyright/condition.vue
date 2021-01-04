<template>
<!-- 为什么选择  表格样式 -->
<div class="cobdition_table_all">
    <div class="cobdition_table_container"  >
        <div class="cobdition_table_item_l" >
            <div class="cobdition_table_item_t ">{{cond.tl}} </div>
            <div class="cobdition_table_item_tc" v-for="(item,index) in cond.arrt" :key="index">{{item.text}}</div>
            <div class="">
                <div class="cobdition_table_item_c cl " v-for="(items,index) in cond.arrl" :key="index" >
                    <!-- v-for="(item,index) in cond.arrl" :key="index" -->
                    <div class="cobdition_table_item_c1">{{items.n}}</div>
                    <div class="cobdition_table_item_c2">{{items.t}}</div>
                </div>
            </div>
            
        </div>
        <div class="cobdition_table_item_r" >
            <div class="cobdition_table_item_t0" >
                <div class="cobdition_table_item_t3" v-for="(it,index) in cond.arr" :key="index">{{it.t}}</div>
                
            </div>
            <div class="cobdition_table_item_c cr" v-for="(its,index) in cond.arrr" :key="index">
                <div class="cobdition_table_item_c3" v-html="its.t"></div>
                <div class="cobdition_table_item_c3" v-html="its.t2"></div>
                <div class="cobdition_table_item_c3" v-html="its.t3"></div>
                   
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
    width: 68%;
    display: flex;
    flex-direction: column;
}
.cobdition_table_item_r{
    width: 30%;
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
    font-size: 16px;
    background-color: #187fc4;
    color: #fff;
}
.cobdition_table_item_t0{
    height: 34px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}
.cobdition_table_item_t3{
    height: 34px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #187fc4;
    color: #fff;
    flex: 1;
    margin-right: 14px;
}
.cobdition_table_item_t3:nth-of-type(3){
    margin-right: 0;
}
.cobdition_table_item_tc{
    background-color: #f2f6ff;
    color: #1a7fc5;
    margin-top: 14px;
     height: 50px;
     font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.cobdition_table_item_c{
    width: 100%;
    height: 50px;
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    display: flex;
    color: #1a7fc5;
}
.cobdition_table_item_c1{
    width: 50px;
    margin-right: 14px;
    background-color: #f2f6ff;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cobdition_table_item_c2{
    flex: 1;
    background-color: #f2f6ff;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cobdition_table_item_c3{
    flex: 1;
    height: 50px;
    display: flex;
    background-color: #f2f6ff;
    color: #1a7fc5;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
}
.cobdition_table_item_c3:nth-of-type(3){
    margin-right: 0;
}


</style>
