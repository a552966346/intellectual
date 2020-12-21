<template>
<!-- 申请流程 0个图-->
<div class="applyProcess0_all">
    <div class="applyProcess0_container">
        <v-comtitle :title="title_all" :inform_title='title_text_all' :color='title_color'></v-comtitle>

        <div class="applyProcess0_img">
            <img :src="app.src" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            title_color:'#fff',
            // title_all:["软件著作权登记流程","美术作品登记流程","文学作品登记流程","著作权变更流程","著作权版权转让流程"],
            // title_text_all:[
            //     "流程合理完善，让您的著作权登记更为流畅简单",
            //     "流程合理完善，让您的著作权登记更为流畅简单",
            //     "流程合理完善，让您的著作权登记更为流畅简单",
            //     "流程合理完善，让您的著作权登记更为流畅简单",
            //     "流程合理完善，让您的著作权登记更为流畅简单"
            // ]
        }
    },
    props: {
        title_all:'',
        title_text_all:'',
        app:Object

    }

}
</script>
<style scoped>
.applyProcess0_all {
    width: 100%;
}
.applyProcess0_container{
    background-color: #7381a4;
    height: 300px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}
.applyProcess0_img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 139px;
    background: no-repeat center;
}

</style>
