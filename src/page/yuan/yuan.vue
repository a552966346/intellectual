<template>
<div class="all">
  <v-applyprocess></v-applyprocess>
</div>
</template>
<script>
import applicationprocess from '../../components/applicationprocess/applicationprocess.vue'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      'v-applyprocess':applicationprocess
    }
    
  }
</script>
<style scoped>
.all{
  width: 1056px;
}

</style>