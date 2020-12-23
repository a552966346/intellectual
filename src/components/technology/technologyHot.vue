<template>
  <div class="technologyHot_all">
    <div
      v-for="(item, index) in option"
      :key="index"
      class="technologyHot_content"
    >
      <div class="technologyHot_title">
        <div
          class="technologyHot_timg"
          :style="{ 'background-image': 'url(' + item.titleimg + ')' }"
        >
          <div><img :src="item.titleimg1" alt="" /></div>
          <div>{{ item.tit }}</div>
        </div>
      </div>
      <div class="technologyHot_body" >
        <div v-for="(items, index) in item.options" :key="index"> 
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <el-tag size="mini" color="red" class="tag">{{ items.id}}</el-tag>
                <span>{{ items.listtitle }}</span>
              </template>
              <el-menu-item>{{ items.option1 }}</el-menu-item>
              <el-menu-item>{{ items.option2 }}</el-menu-item>
              <el-menu-item>{{ items.option3 }}</el-menu-item>
              <el-menu-item>{{ items.option4 }}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:{
    option:Object,
    
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.technologyHot_all {
  display: flex;
  justify-content: space-between;
  height: 570px;
}
.technologyHot_all > div {
  width: 33.3%;
  position: relative;
}

.technologyHot_title {
  height: 170px;
}
.technologyHot_timg {
  height: 100%;
  background: no-repeat;
  background-size: 100% 100%;
  padding-top: 45px;
}
.technologyHot_timg > div {
  text-align: center;
  color: #ffffff;
  font-size: 20px;
}
.tag {
  color: #ffffff;
}
.technologyHot_content {
  height: 510px;
  display: flex;
  flex-direction: column;
}
.technologyHot_content:hover {
  box-shadow: 3px 3px 10px #8abfdf, -3px -3px 10px #8abfdf;
  /* position: relative; */
  /* top: -10%; */
  top: -30px;
  height: 570px;
}
.technologyHot_body {
  flex: 1;
  overflow: auto;
}
.technologyHot_body::-webkit-scrollbar {
  display: none;
}
</style>