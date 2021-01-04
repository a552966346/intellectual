<template>
  <div>
    <v-topsearch></v-topsearch>
    <v-navigation></v-navigation>
    <div class="works_all">
      <div class="works">
        <v-transfertop
          :top_data="top_data"
          :iscolor="iscolor"
          @xuanze="xuanze"
          @qinchu="qinchu"
          @delet="delet"
          @sousuo="sousuo"
        ></v-transfertop>
        <ul class="works_list">
          <li
            class="color1"
            v-for="(item, index) in lists"
            :key="index + 'list'"
          >
            <div class="works_colors">
              <!-- <router-link class="works_pro" :to="{path:'/service_xlj',query:{ id:item.id}}"> -->
              <div class="works_sele">
                <img :src="item.images_text" />
              </div>
              <!-- </router-link> -->
            </div>

            <p class="works_p1">
              <span>{{ item.name }}</span>
            </p>
            <p class="works_p2" v-if="item.categoryid_text">
              {{ item.categoryid_text.name }}
            </p>
            <p class="works_p3">
              <span class="works_price" v-if="item.fee >= 10000"
                ><label>￥</label>{{ item.fee / 10000 }}万元</span
              >
              <span class="works_price" v-else
                ><label>￥</label>{{ item.fee }}元</span
              >
              <img
                src="../../../static/img/paycenter/copyright_right.png"
                alt=""
              />
            </p>
            <div class="works_kefu" @click="kefu">立即议价</div>
          </li>
        </ul>
      </div>
    </div>
    <v-combotttom></v-combotttom>
    <!-- 客服弹窗 -->
    <div class="tanchuang" v-show="isshowtwo" @click.self="showstwo">
      <v-customer @shows="showstwo"></v-customer>
    </div>
  </div>
</template>
<script>
import transfer_top from "../../components/transfer/transfer_top.vue";
import customer from "@/components/customers/customer_services.vue"; //客服弹窗

export default {
  data() {
    return {
      top_data: [
          ["行业分类","","../../../static/img/transfer/transfer_fl.png",[
              '美术作品','摄影作品','雕塑','生活创意作品','影视作品','建筑作品','汉服设计','创意作品'
          ]]
      ],
      iscolor: [],
      isshowtwo: false, //客服
      lists: [
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
    };
  },
 
  methods: {
    kefu() {
      this.isshowtwo = true;
    },
    showstwo() {
      this.isshowtwo = false;
    },
    xuanze(id) {
      this.id = id;
      console.log(id);
      this.ispost(this.id);
    },
    //搜索
    sousuo(id) {
      this.id = id;
      this.ispost(id);
    },
    ispost(id) {
      this.$api
        .gettechnologylist(id)
        .then((res) => {
          console.log(res);
          this.left_data = res.data.lists.data;
          this.botm_data = res.data.youlike;
          this.nub = res.data.lists.data.length;
          // 分页
          // this.total=res.data.lists.total;
          // this.currentPage=res.data.lists.current_page;
          // this.pagesize=res.data.lists.per_page;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    qinchu() {
      this.iscolor = [];
      this.ispost();
    },
    delet(id) {
      this.id = id;
      this.ispost(this.id);
    },
  },
  components: {
    "v-transfertop": transfer_top,
    "v-customer": customer,
  },
};
</script>
<style scoped>
.tanchuang {
  position: fixed;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.works_all {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.works {
  width: 1200px;
}
.works_list {
  margin: 20px 0;
  background-color: #e9e9e9;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}

.works_list li {
  list-style: none;
  width: 19%;
  padding: 10px;
  background: #f5f5f5;
  height: 352px;
  margin-bottom: 20px;
  margin-left: 10px;
}

.works_list a {
  text-decoration: none;
  color: black;
  background-color: #f5f5f5;
}

.works_list li > a:first-child {
  display: block;
  width: 100%;
  overflow: hidden;
}

.works_list li:hover .works_coloritem {
  display: block;
}

.works_list li:hover .works_kefu {
  display: block;
  cursor: pointer;
}

.works_list li:hover .works_p2 {
  display: none;
}

.works_colors {
  height: 235px;
}

.works_sele > img {
  width: 100%;
  padding: 10px;
  max-height: 210px;
}

.works_sele {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.works_selector {
  width: 100%;
  height: 21px;
  box-sizing: border-box;
  padding: 3px;
  display: flex;
  justify-content: center;
}

.works_coloritem {
  width: 20%;
  height: 15px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.8);
  float: left;
  cursor: pointer;
  display: none;
}

.works_p1 {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.works_p1 > img {
  width: 15px;
  margin-right: 10px;
}

.works_p1 > span {
  font-size: 15px;
  font-weight: 200;
}

.works_p2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0;
  font-size: 12px;
  color: #ccc;
}

.works_p3 {
  border-top: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 9px;
}

.works_p3 > span {
  font-size: 15px;
  color: #fa7219;
  font-weight: bold;
}

.works_p3 > img {
  width: 15px;
}

.works_kefu {
  display: none;
  background-color: #187fc4;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 8px 0;
}
</style>
                        