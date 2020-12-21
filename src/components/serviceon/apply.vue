<template>
    <div class="apply_all">
        <div class="apply_top">
           {{nawqli[0].nawqtit}}
        </div>
        <div class="apply_cet">
            <div class="apply_cetbl" v-for="(items,index) in nawqli[0].nawqlist" :key="index">
                <div class="apply_cetbltop">
                    <div class="apply_cetbltoptt">
                        <div class="apply_cetbltopttimg">
                            <img :src="items.cttimg" alt="">
                        </div>
                        <div class="apply_cetbltopttit">
                            {{items.ttle}}
                        </div>
                    </div>
                    <div class="apply_cetbltopttct">
                            {{items.cbct}}
                    </div>
                </div>
                <div class="apply_cetblfot">
                        {{items.cbctft}}
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
            nawqli:''
        }
    }
</script>

<style>
.apply_all{width: 100%;height: 450px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.apply_top{width: 100%;height: 80px;display: flex;justify-content: center;align-items: center;border: 1px solid #dce7ff;}
.apply_cet{flex: 1;width: 100%;display: flex;justify-content: space-between;align-items: center;flex-direction: row;margin-top: 20px;}
.apply_cetbl{width: 48%; height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;border: 1px solid #dce7ff;}
.apply_cetbltop{width: 100%;height: 70%;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 0 15px;}
.apply_cetbltoptt{width: 100%;height: 40%;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.apply_cetbltopttimg{width: 77px;height: 77px;display: flex;justify-content: center;align-items: center;}
.apply_cetbltopttimg img{width: 100%;height: 100%;}
.apply_cetbltopttct{ width: 100%; height: 40%; display: flex;justify-content: center;align-items: center;}
.apply_cetblfot{width: 100%;height: 30%;display: flex;justify-content: center;align-items: center;background-color: #187fc4;color: #fff;padding: 0 15px;}
</style>