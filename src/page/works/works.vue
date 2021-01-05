<template>
  <div>
    <v-topsearch></v-topsearch>
    <v-navigation></v-navigation>
    <div class="works_all">
      <div class="works">
        <worksscreen :type='true' @choosecon="choosecon" @ischange="ischange" @search="search" @choosenull="choosenull"
                            :worksscree="worksscree"   :iscolor="iscolor" @delet="delet"></worksscreen>
        <div class="patent_sort">
              <span :class="{ sortactive: this.sortnumber == 0 }" @click="comsort(0)">综合排序<i class="el-icon-bottom patent_sorticon"></i></span>
              <span :class="{ sortactive: this.sortnumber == 1 }" @click="comsort(1)">发布时间<i class="el-icon-bottom patent_sorticon"></i></span>
              <span :class="{ sortactive: this.sortnumber == 2 }" @click="comsort(2)">价格排序<i class="el-icon-bottom patent_sorticon"></i></span>
        </div>
        <v-workson :wks="wks" @kefu="kefu" ></v-workson>
        <div class="copyright_page">
               <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page="currentPage"
                      :page-size="pagesize" layout="prev, pager, next, jumper" :total="total">
               </el-pagination>
        </div>
        <div class="worksbottom">
            <v-worksbottom :listdata="listdata" @kefu="kefu"></v-worksbottom>
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
      worksscree: [
          ["行业分类","",[
              '美术作品','摄影作品','雕塑','生活创意作品','影视作品','建筑作品','汉服设计','创意作品'
          ]]
      ],
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
      listdata:[
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
      ],
      sortnumber: 0, //左侧边排序切换
      // 分页
      currentPage: 1,
      pagesize: 1,
      total:1,
      val:1
    };
  },
 
  methods: {
    kefu() {
      this.isshowtwo = true;
    },
    showstwo() {
      this.isshowtwo = false;
    },
    comsort(index) {
            this.sortnumber = index
            if (index == 1) {
                    this.$set(this.id, 8, "desc")
                    this.$set(this.id, 9, "")
                    // this.ispost(this.id)
            } else if (index == 2) {
                    this.$set(this.id, 9, "desc")
                    this.$set(this.id, 8, "")
                    // this.ispost(this.id)
            } else {
                    // this.ispost()
            }
    },
    // 分类筛选
    choosecon(id) {
            this.id = id
            // this.ispost(this.id)
    },
    // 下拉筛选
    ischange(id) {
            this.id = id
            // this.ispost(this.id)
    },
    //搜索
    search(id) {
            this.id = id
            // this.ispost(id)
    },
    // // 请求列表id
    // ispost(id) {
    //         this.$api.getlist(id)
    //                 .then(res => {
    //                         // console.log(res,'商标转让列表')
    //                         this.iscent = res.data.lists.data
    //                         this.listdata = res.data.youlike
    //                         // 分页
    //                         this.total=res.data.lists.total;
                            // this.currentPage=res.data.lists.current_page;
    //                         this.pagesize=res.data.lists.per_page;
                            
    //                 })
    //                 .catch(res=>{
    //                         console.log(res)
    //                 })
    // },
    //清空筛选
    choosenull() {
            this.iscolor = []
            this.screetext = []
            this.id = {}
            // this.ispost()
    },
    //删除条件
    delet(id){
            // this.ispost(id)
    },
   
    // 分页
    handleSizeChange(val) {
       console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
        // 输入页数
        console.log(`当前页: ${val}`);
        this.id[12] = val
        this.ispost(this.id)
        document.getElementById("transfer").scrollIntoView()
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
      .tanchuang {position: fixed;z-index: 9999;background: rgba(0, 0, 0, 0.2);width: 100%; height: 100%;top: 0;right: 0;left: 0;bottom: 0;display: flex;justify-content: center;align-items: center;}
      .works_all {display: flex;flex-direction: column;align-items: center;}
      .works {width: 1200px;}
      .patent_sort{max-width: 1200px;width: 100%;margin:20px auto;height: 50px;background-color: #fff;color: #666;font-size: 14px;display: flex;align-items: center;border: 1px solid #eceff6;margin-bottom: 20px;position: relative;}
      .patent_sort>span{width: 135px;text-align: center;cursor: pointer;height: 50px;line-height: 50px;border-right: 1px solid #f1f1f1;}
      .patent_sorticon{font-weight: bold;}
      .sortactive{color: #1580c4;}
      .worksbottom{background-color: #fff;}
      /* 页数*/
      .copyright_page{text-align: center;background: rgb(249 249 249);padding: 20px 30px;max-width: 1200px;width: 100%;margin: 10px auto 30px;line-height: 29px;font-size: 14px;color: #999;}
      .copyright_page span{color: #666;font-size: 14px;padding-right: 8px;height: 31px;line-height: 31px;}
      .copyright_page button{color: #666;font-size: 14px;padding: 5px 10px;margin-right: 8px;background: #fff;border: 1px solid #f0f0f0;outline: none;}
      .copyright_page input{color: #666;font-size: 14px;width: 40px;height: 31px;line-height: 31px;border: 1px solid #f0f0f0;outline: none;padding: 0 5px;outline: none;}
      .copyright_page button:hover{background-color: #3b5791;color: #fff;outline: none;}
</style>
                        