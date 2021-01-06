<template>
    <el-container>
        <el-main>
            <el-header class="about_mut">
                <span class="about_muspan">{{right_data.title}}</span>
            </el-header>
            <div class="about_cet">
                <p v-html="right_data.content"></p>
            </div>    
        </el-main>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props:{
    right_data:'',
    id:''
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.about_cet p{
  font-size: 14px !important;
}
</style>