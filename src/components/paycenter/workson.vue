<template>
    <div class="">
        <div class="work_all">
            <ul class="works_list">
              <li class="color1" v-for="(item, index) in wks" :key="index + 'list'">
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
                  <span class="works_price" v-if="item.fee >= 10000"><label>￥</label>{{ item.fee / 10000 }}万元</span>
                  <span class="works_price" v-else><label>￥</label>{{ item.fee }}元</span>
                  <img src="../../../static/img/paycenter/copyright_right.png"/>
                </p>
                <div class="works_kefu" @click="kefu">立即议价</div>
              </li>
            </ul>
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
      wks:Array
    },
    methods:{
        kefu(){
            this.$emit("kefu")
        }
    }
}
</script>
<style scoped>
.works_list {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
}

.works_list li {
  list-style: none;
  width: 19%;
  padding: 10px;
  /* background: #f5f5f5; */
  height: 352px;
  margin-bottom: 20px;
  margin-left: 10px;
  box-shadow: 2px 2px 15px rgb(211, 209, 209);
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
  padding: 3px 9px;
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