<template>
        <div id="project">
                <div class="project_left">
                        <span></span>
                        <p>{{project.cont}}</p>
                        <div>
                                <img src="../../../static/img/technology/projectjiantou.png" alt="">
                        </div>
                </div>
                <div class="project_right">
                        <div class="swiper-container">
                                <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(item,index) in project.pic">
                                               <img :src="item" alt="">
                                        </div>
<!--                                        <div class="swiper-slide">
                                               <img src="../../../static/img/technology/projectjiantou.png" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                               <img src="../../../static/img/technology/projectjiantou.png" alt="">
                                        </div> -->
                                </div>
                                <!-- 如果需要分页器 -->
                                <!-- <div class="swiper-pagination"></div> -->

                                <!-- 如果需要导航按钮 -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>

                                <!-- 如果需要滚动条 -->
                                <!-- <div class="swiper-scrollbar"></div> -->
                        </div>
                </div>
        </div>
</template>
<script>
        export default {
                props: {
                        // payleft_img_url:String
                        project:Object,
                },
                data() {
                        return {
                                active: 0
                        }
                },
                methods: {

                },
                mounted(){
                        new Swiper ('.swiper-container', {
                                loop: true,
                                // slidesPerView: 3,
                                // observer:true,
                                // spaceBetween: 30,
                                nextButton: '.swiper-button-next',
                                prevButton: '.swiper-button-prev',

                          })
                }
        }
</script>
<style scoped>
        *{margin: 0;padding: 0;box-sizing: border-box;}
        #project{width: 1200px;margin: 20px auto;background: #fff;display: flex;padding: 0px 100px;/* border: 1px solid #3333;*/}
        .project_left{width: 60%;padding: 20px 120px 0 0;}
        .project_left>p{line-height: 40px;color: #959595;font-size: 16px;letter-spacing: 2px;}
        .project_left>span{display: block;width: 60px;height: 50px;border-top: 5px solid #187fc4;margin-top: 30px;}
        .project_left>div{background: #8abfe1;width: 30px;height: 30px;display: flex;justify-content: center;align-items: center;margin-top: 30px;}
        .project_left>div>img{width: 25px;height: 25px;}
        .project_right{width: 40%;height: 410px;background: orange;}

        .swiper-container{width: 100%;height: 100%;}
        .swiper-wrapper{width: 100%;height: 100%;}
        .swiper-slide img{width: 100%;height: 100%;}
</style>
