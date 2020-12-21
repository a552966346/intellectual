<template>
    <div class="servicezl_all" >
        <!-- ../../../static/img/service/severic_zlon.png -->
            <img :src="idenimg.src" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props: {
            idenimg: Object,
        }
    }
</script>

<style>
.servicezl_all{width: 100%;height: auto;display: flex;justify-content: center;align-items: center;}
</style>