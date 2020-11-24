<template>
 <div>
   <div>
      <el-image
      style="width: 100px; height: 100px"
      :src="url[0]"
      :fit="fit"></el-image>
   </div>
   <div>

   </div>
   <div>

   </div>
 </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      url:[
        '/static/img/logo.png'
      ]
    }
  }
}

</script>
<style scoped>
</style>