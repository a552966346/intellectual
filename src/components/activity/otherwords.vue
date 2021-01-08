<template>
    <div class="other_works_show">
       <div class="show_top">
         <div class="top_l">
              <p>GALLERY</p>
              <div class="line"></div>
         </div>
         <div class="top_r">
           <div class="tr1" @click="shangchuan">
            <span>+</span> 上传我的作品
           </div>
           <div class="tr2"></div>
         </div>

       </div>
       <div >
               <div class="show_cen">
                       <div class="lists" v-for="(item,index) in list" :key="index">
                           <div class="list"  @click="istype(index)">{{item.name}}</div>
                           <div class="list_img">
                             <img src="../../../static/img/activity/arrow.png" alt="">
                           </div>
                       </div>
                    </div>
                    <div class="imgall">
                            <div class="show" v-for="(item,index) in images" :key="index" v-show="cshow ==index">
                                        <div class="waterFall-box" ref="box">
                                            <div class="img-box" v-for="(item1, index) in item.flea" :key="index" ref="img">
                                              <img :src="item1.images" alt="">
                                            </div>
                                            <footer v-if="isLoad == false"
                                                    :style="{position: 'absolute', top: Math.max(...heightArray)+'px', color: 'red', left: '50%', transform: 'translateX(-50%)'}">
                                              没有图片加载了...
                                            </footer>
                                          </div>
                            </div>
                    </div>

       </div>


    </div>
</template>
<script>
export default {
  data() {
    return {
      seen: null,
      cshow:0,
      flea:[],
       images: [], //存储图片资源
      imgWidth: 220, //图片的宽度
      heightArray: [],  //存储高度数组，用于判断最小高度的图片位置
      isLoad: true,  //是否继续加载图片
      surplusW: 0, //是否存在剩余宽度
      offsetP: 0,
      count: 0
    }
  },
  props:{
    list:''
  },
  created() {
          this.$api.fleadata()
          .then(res=>{
                  console.log(res)
                  this.images  = res.data
                   this.loadImgHeight()
          })
          .catch(err=>{
                  console.log(err)
          })
  },
  mounted() {
        const _this = this
              //监听滚动条滚动，实现懒加载图片
              window.addEventListener('scroll', function () {
                //得到可滚动距离
                const scrollDistance = document.documentElement.scrollHeight - document.documentElement.clientHeight
                //滚动到顶部的距离
                const scroll = document.documentElement.scrollTop
                if (scrollDistance == scroll) {
                  _this.$api.fleadata()
                  .then(res=>{
                    if (res.data.code == 200) {
                      _this.count += 1
                      if(_this.count == 4) {
                        _this.isLoad = false
                      }
                      if(_this.isLoad) {
                        const start = _this.images.length
                        for (let item of res.data.data) {
                          _this.images.push(item)
                        }
                        //滑到底部继续加载图片，this.$nextTick()异步加载，待资源虚拟DOM加载完毕
                        _this.$nextTick(() => {
                          _this.positionImg(start)
                        })
                      }
                    }
                  })
                }
              })
  },
  methods:{
    shangchuan(){
        this.$emit("shangchuan")
    },
    kefu(){
        this.$emit("kefu")
    },
    enter(index){
        this.seen = index

    },
    leave(){
        this.seen = null
    },
    istype(index){
            this.cshow= index
    },
    running(id){
            this.$router.push({
                    path:'/detils',
                    query:{
                            id:id
                    }
            })
    },
     /**
           * 预加载图片资源
           * */
          loadImgHeight() {
            let count = 0 //计数变量 判断是否预加载图片是否完成
            this.images.forEach((item) => {
              //使用image类预加载图片
              item.flea.forEach((item1)=>{
                      let image = new Image()
                      image.src = item1.img
                      image.onload = image.onerror = event => {
                        count++
                        if(count == this.images.length) {
                          this.$nextTick(() => {
                            this.init()
                            this.positionImg(0)
                          })
                        }
                      }
              })
            })
          },
          /**
           * @remarks 初始化
           * 初始化容器的宽度，计算出容器可容纳多少固定宽度图片的列，
           * 如果可排列固定宽度的图片宽度无法沾满容器的宽度，需要计算出空余的宽度，固定首图片的left
           * */
          init() {
            //得到页面的宽度
            const pageWidth_padding = this.$refs.box[0].clientWidth
            //页面的padding像素
            this.offsetP = this.$refs.box[0].style.paddingLeft.replace(/[^0-9]/ig, "")
            //获得页面的真实宽度（除去padding、margin、border...）
            const pageWidth = pageWidth_padding - (this.offsetP * 2)
            //计算出当前页面可展示多少列图片
            const column = Math.floor(pageWidth / this.imgWidth)
            //偏移像素值
            this.surplusW = pageWidth - (column * this.imgWidth)
            //初始化存储高度数组
            for (let i = 0; i < column; i++) {
              this.heightArray.push(0)
            }
          },
          /**
           * @remark 定位图片
           * @param:
           *  start: 循环开始位置，开始为0，如果滚动条滑到底部，则start为容器存在图片资源的数量即this.images.length
           *  ----------宽高都计算img的父容器的宽高
           * */
          positionImg(start) {
            //获得img标签的父容器的DOM
            let parentDom = this.$refs.img
            for (let i = start; i < this.images[0].flea.length; i++) {
              //获得最小高度
              const minHeight = Math.min(...this.heightArray)
              //获得最小高度索引
              const index = this.heightArray.indexOf(minHeight)
              //获得当前图片的高度
              const currHeight = parentDom[i].clientHeight
              //定位
              parentDom[i].style.transform = '50px'
              parentDom[i].style.position = 'absolute'
              parentDom[i].style.top = minHeight + 'px'
              parentDom[i].style.left = this.imgWidth * index + + ((Math.floor((this.surplusW / 2)) + 30)) +  'px'
              this.heightArray[index] += currHeight
            }
            //对父容器赋值当前heightArray数组的最大高度
            this.$refs.box[0].style.height = Math.max(...this.heightArray) + 50 + 'px'
          }
  }
}
</script>

<style scoped>
.mother_works_show{
  margin-bottom: 60px;
}
.show_top{
  display: flex;
  justify-content: space-between;
}
.top_l>p{
    font-size: 28px;
    padding: 20px 0;
}
.top_r{
  width: 30%;
  position: relative;
}
.tr1 span{
  font-size: 25px;
  margin-right: 5px;
}
.tr1,.tr2{
  background-color: pink;
  width: 44%;
  height: 54px;
  margin-right: 20px;
  position: absolute;
  border: 1px solid #000;
}
.tr1{
  background-color: #fff;
  bottom: 0px;
  right: 0px;
  z-index: 2;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tr2{
  background-color: #0163d2;
  top: 12px;
  right: 17px;
}
.show_cen{
  font-size: 18px;
  margin-top: 20px ;
  display: flex;
}
.imgall{
        width: 100%;
        /* overflow-x: hidden; */
}
.lists{
  cursor: default;
}
.lists:hover .list{
  color: #000;
  font-weight: 550;
}
.lists:hover .list_img{
  opacity: 1;
}
.list{
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list_img{
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.list_img img{
  width: 15%;
}
.show{
        display: flex;
        /* flex-wrap: wrap; */
        flex-direction: column;
        /* align-content:center; */
        padding: 15px;
}

/* .show>img{
        flex: 1 1 auto;
        margin: 0 10px 10px 0;
        box-shadow: 2px 2px 5px #ccc;

        height: 300px;
} */
.show-hang{
        display: flex;
        height: 200px;
        overflow: hidden;
}
.show-img{
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
}
.show-img>div{
       width: 100%;
}
.show-img>div>img{
        width: 100%;
}
.other_works_item2 img{
        width: 100%;
        display: flex;
        justify-content: start;
        height:  100%;
         box-shadow: 2px 2px 5px #ccc;
}
.other_works_txt{
        position: relative;
        z-index: 9;
        height: 80px;
        top: -80px;
        background: rgba(0,0,0,0.5);
        width: 100%;
        padding: 5px 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
}
.other_works_txt>h4{
      color: #eee;
}
.other_works_txt>p:nth-child(2){
        width: 90%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        color: #ddd;
        font-size: 15px;
}
.other_works_txt>span:nth-child(3){
        color: #EB3941;
        font-size: 13px;
}



 .waterFall-box {
            position: relative;
            text-align: center;
            overflow-y: hidden;
          }

          .waterFall-box .img-box {
            width: 210px;
            vertical-align: top;
            display: block;
            float: left;
          }

          .waterFall-box .img-box img {
            width: 100%;
            animation: imgBox .5s ease-in-out;
          }

          .waterFall-box .img-box img:hover {
            transform: translateY(-3px);
            transition: transform .5s ease-in-out;
            box-shadow: 0 20px 20px 2px #737373;
          }

          @keyframes imgBox {
            0%{
              opacity: 0;
              transform: translateY(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
</style>
