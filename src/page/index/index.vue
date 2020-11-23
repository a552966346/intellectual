<template>
 <div>
   <p>{{msg}}</p>
 </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      msg:'这是测试内容'
    }
  }
}
</script>

<style scoped>
/* scoped 样式隔离 */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>