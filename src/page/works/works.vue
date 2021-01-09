<template>
  <div class="works_title" @scroll.stop="scroll">
    <v-topsearch></v-topsearch>
    <v-navigation></v-navigation>
    <div class="works_all">
      <div class="works">
        <worksscreen :type='true' @choosecon="choosecon"  @search="search"  @choosenull="choosenull"
                            :worksscree="worksscree"   :iscolor="iscolor" @delet="delet"></worksscreen>
      <!--  <div class="patent_sort">
              <span :class="{ sortactive: this.sortnumber == 0 }" @click="comsort(0)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
              <span :class="{ sortactive: this.sortnumber == 1 }" @click="comsort(1)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
              <span :class="{ sortactive: this.sortnumber == 2 }" @click="comsort(2)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>
        </div> -->
        <div class="show">
                    <div class="waterFall-box" ref="box" >
                        <div class="img-box" v-for="(item1, index) in images" :key="index" ref="img" @mouseover="enter(index)" @mouseleave="leave">
                          <img :src="item1.images" alt="">
                          <div class="other_works_txt" v-show="seen==index">
                                  <h4>{{item1.name}}</h4>
                                  <p>{{item1.summarize}}</p>
                                  <span>￥{{item1.fee}}元</span>
                          </div>
                        </div>
                        <footer v-if="isLoad == false"
                                   :style="{position: 'absolute', top: Math.max(...heightArray)+'px', color: 'red', left: '50%', transform: 'translateX(-50%)'}">
                             没有图片加载了...
                           </footer>
                      </div>
        </div>
      </div>

    </div>
    <v-combotttom ></v-combotttom>
    <!-- 客服弹窗 -->
    <div class="tanchuang" v-show="isshowtwo" @click.self="showstwo">
      <v-customer @shows="showstwo"></v-customer>
    </div>
  </div>
</template>
<script>
import worksscreen from '@/components/paycenter/worksscreen.vue'
import worksbottom from '@/components/paycenter/worksbottom.vue'
import workson from "../../components/paycenter/workson.vue";
import customer from "@/components/customers/customer_services.vue"; //客服弹窗

export default {
  data() {
    return {
      worksscree: [],
      iscolor: [],
      isshowtwo: false, //客服
      wks: [
        {
          images_text: "../../../static/img/activity/other1-1.png",
          name: "美少女",
          fee: "59000",
        },
        {
          images_text: "../../../static/img/activity/other2-1.png",
          name: "名字",
          fee: "59000",
        },
        {
          images_text: "../../../static/img/activity/other3-1.png",
          name: "名字",
          fee: "5900",
        },
        {
          images_text: "../../../static/img/activity/other2-1.png",
          name: "名字",
          fee: "59000",
        },
        {
          images_text: "../../../static/img/activity/other1-1.png",
          name: "美少女",
          fee: "59000",
        },
        {
          images_text: "../../../static/img/activity/other3-1.png",
          name: "名字",
          fee: "9000",
        },
        {
          images_text: "../../../static/img/activity/other2-1.png",
          name: "名字",
          fee: "46000",
        },
        {
          images_text: "../../../static/img/activity/other1-1.png",
          name: "美少女",
          fee: "59000",
        },
        {
          images_text: "../../../static/img/activity/other3-1.png",
          name: "名字",
          fee: "59000",
        },
      ],
      images:[], //图片
      sortnumber: 0, //左侧边排序切换
      page:1, //分页
      seen:null,
      imgWidth: 300, //图片的宽度
      heightArray: [],  //存储高度数组，用于判断最小高度的图片位置
      isLoad: true,  //是否继续加载图片
      surplusW: 0, //是否存在剩余宽度
      offsetP: 0,
      count: 0,
       list:[],
       id:{}
    };
  },
  mounted(){
          this.$api.worksclass()
          .then(res=>{
                  console.log(res)
                 this.worksscree = res.data
          })
          this.ispost(this.page,this.id)
  },
  methods: {
    kefu() {
      this.isshowtwo = true;
    },
    showstwo() {
      this.isshowtwo = false;
    },
    // comsort(index) {
    //         this.sortnumber = index
    //         if(index == 1){
    //                 this.$set(this.id,2,"desc")
    //                 this.$set(this.id,3,"")
    //                 this.ispost(1,this.id)
    //         }else if(index == 2){
    //                 this.$set(this.id,3,"desc")
    //                 this.$set(this.id,2,"")
    //                 this.ispost(1,this.id)
    //         }else{
    //                  this.ispost()
    //         }
    // },
    // 分类筛选
    choosecon(id) {
            this.id = id
            this.ispost(1,this.id)
    },
    enter(index){
        this.seen =index
    },
    leave(){
        this.seen =null
    },
    search(id){
            this.id = id
            this.ispost(1,id)
    },
    //清空筛选
    choosenull() {
            this.iscolor = []
            this.screetext = []
            this.id = {}
            this.page = 1
            // this.ispost()
    },
    //删除条件
    delet(id){
            this.ispost(1,id)
    },
    scroll(e){
            const _this = this
                    if(e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight){
                            this.page++
                            this.$api.workspost(this.page,this.id)
                            .then(res=>{
                                    console.log(res)
                                     if (res.code == 1) {
                                          if(res.data.data.length < 16) {
                                            _this.isLoad = false
                                          }
                                          if(_this.isLoad) {
                                            const start = _this.images.length
                                            let leng = res.data.data.length
                                             let count = 0
                                            for (let item of res.data.data) {
                                                     _this.images.push(item)
                                            }
                                                     //滑到底部继续加载图片，this.$nextTick()异步加载，待资源虚拟DOM加载完毕
                                                 _this.$nextTick(() => {
                                                   _this.loadImgHeight(start)
                                                 })
                                          }
                                        }
                            })
                    }
    },
    ispost(page,id){
            console.log(id)
            this.$api.workspost(page,id)
            .then(res=>{
                     this.heightArray = []
                     this.isLoad =true
                    this.images = res.data.data
                    this.$nextTick(function(){
                             this.init()
                             this.loadImgHeight(0)
                    })

            })
    },
    /**
          * 预加载图片资源
          * */
         loadImgHeight(start) {
           let count = 0 //计数变量 判断是否预加载图片是否完成
           this.images.forEach((item) => {
             //使用image类预加载图片
                     let image = new Image()
                     image.src = item.images
                     image.onload = image.onerror = event => {
                       count++
                       if(count == this.images.length) {
                         this.$nextTick(() => {
                           this.positionImg(start)
                         })
                       }
                     }
           })
         },
         /**
          * @remarks 初始化
          * 初始化容器的宽度，计算出容器可容纳多少固定宽度图片的列，
          * 如果可排列固定宽度的图片宽度无法沾满容器的宽度，需要计算出空余的宽度，固定首图片的left
          * */
         init() {
           //得到页面的宽度
           const pageWidth_padding = this.$refs.box.clientWidth
           //页面的padding像素
           this.offsetP = this.$refs.box.style.paddingLeft.replace(/[^0-9]/ig, "")

           //获得页面的真实宽度（除去padding、margin、border...）
           const pageWidth = pageWidth_padding - (this.offsetP * 2)
           //计算出当前页面可展示多少列图片
           const column = Math.floor(pageWidth / this.imgWidth)
           //偏移像素值
           this.surplusW = pageWidth - (column * this.imgWidth)
           //初始化存储高度数组
           for (let i = 0; i <column; i++) {
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
           console.log(this.$refs.img)
                      for (let i = start; i < this.images.length; i++) {
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
                      this.$refs.box.style.height = Math.max(...this.heightArray) + 50 + 'px'
         }
  },
  components: {
    "v-customer": customer,
    "v-workson": workson,
    "v-worksbottom": worksbottom,
    worksscreen,
  },
};
</script>
<style scoped>
      .works_title{height: 95%; overflow-y: scroll;}
      .tanchuang {position: fixed;z-index: 9999;background: rgba(0, 0, 0, 0.2);width: 100%; height: 100%;top: 0;right: 0;left: 0;bottom: 0;display: flex;justify-content: center;align-items: center;}
      .works_all {display: flex;flex-direction: column;align-items: center;}
      .works {width: 1200px;}
      .patent_sort{max-width: 1200px;width: 100%;margin:20px auto;height: 50px;background-color: #fff;color: #666;font-size: 14px;display: flex;align-items: center;border: 1px solid #eceff6;margin-bottom: 20px;position: relative;}
      .patent_sort>span{width: 135px;text-align: center;cursor: pointer;height: 50px;line-height: 50px;border-right: 1px solid #f1f1f1;}
      .patent_sorticon{font-weight: bold;}
      .sortactive{color: #1580c4;}
      .worksbottom{background-color: #fff;}
      .waterFall-box {
                 position: relative;
                 /* text-align: center; */
                 /* overflow-y: hidden; */
                 /* overflow-x: hidden; */
               }

               .waterFall-box .img-box {
                 width: 290px;
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
               .other_works_txt{
                       position: absolute;
                       z-index: 99;
                       height: 80px;
                       bottom: 0px;
                       background: rgba(0,0,0,0.5);
                       width: 100%;
                       padding: 5px 8px;
                       /* display: flex;
                       flex-direction: column;
                       justify-content: center; */
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
</style>
