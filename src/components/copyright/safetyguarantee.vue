<template>
<!-- 安全保障  -->
<div class="safetyguarantee_all">
    <div class="safetyguarantee_container"  >
        <div class="safetyguarantee_items">
            <div class="safetyguarantee_item" v-for="(item,index) in safe.arr" :key="index">
                <div class="safetyguarantee_img">
                    <img :src="item.src" alt="">
                </div>
                <div class="safetyguarantee_text">
                    <div class="safetyguarantee_text_t">{{item.title}}</div>
                    <p>{{item.text}}</p>
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
        safe:Object
    }
}
</script>
<style scoped>
.safetyguarantee_all {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 15px;
}
.safetyguarantee_container{
    padding: 10px 20px;
    width: 84%;
}
.safetyguarantee_items{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* height: 440px; */
}
.safetyguarantee_item{
    width: 33%;
    /* height: 92px; */
    margin-top: 20px;
    background-color: #f5f6f8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 25px 10px 25px;
}
.safetyguarantee_text{
    margin-left: 16px;
}
.safetyguarantee_text_t{
    font-size: 14px;
    line-height: 22px;
}
.safetyguarantee_text>p{
    color: #c9c1ba;
    font-size: 12px;
    line-height: 19px;
}

</style>
