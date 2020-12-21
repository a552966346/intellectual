<template>
    <div class="serviceni_all">
        <div class="serviceni_firt">
            <i class="el-icon-share"></i>
            <div>业务介绍</div>
        </div>
        <div class="serviceni_cent">
            <div class="serviceni_centlet">
                <img src="" alt="">
            </div>
            <div class="serviceni_centret">
                <div class="serviceni_centretbl">
                    <p>信息安全</p>
                    <p>
                        请您放心，您提供的资料我们都会对外保密，我们会对您提供过来的材料进行严格的保密处理，绝不例外！
                    </p>
                </div>
                <div class="serviceni_centretbl">
                    <p>专属顾问</p>
                    <p>
                        请您放心，您提供的资料我们都会对外保密，我们会对您提供过来的材料进行严格的保密处理，绝不例外！
                    </p>
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
            mt:''
        }
    }
</script>

<style>
.serviceni_all{width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
.serviceni_firt{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
.serviceni_cent{flex: 1;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;}
.serviceni_centretbl{display: flex;justify-content: flex-start;align-items: center;flex-direction: column;}
</style>