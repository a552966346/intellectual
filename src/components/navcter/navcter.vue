<template>
    <el-container>
        <el-main>
            <el-header class="about_mut">
                <span class="about_muspan">{{right_data.title}}</span>
            </el-header>
            <div class="about_cet">
                <h2>{{right_data.title}}</h2>
                <p>{{right_data.content}}</p>
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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style>
</style>