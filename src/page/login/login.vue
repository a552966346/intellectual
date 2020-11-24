<template>
 <div id="login">
   <div class="login_top">
      <el-image
      style="width: 300px; "
      src="../../../static/img/login/logo.png"
      fit="fill"></el-image>
      <div>
         <el-image
          style="width: 20px; "
          src="../../../static/img/login/home_icon.png"
          fit="fill"></el-image>
          <p>返回伊甸城首页</p>
      </div>
   </div>
   <div class="login_center">

   </div>
   <div class="login_bottom">

   </div>
 </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
     
    }
  }
}

</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #login{
    height: 100%;
  }
  /* 顶部 */
  .login_top{
    height:15%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 40px 15% 20px;
  }
  .login_top>div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_top>div>p{
    padding-left: 15px;
  }
  /* 中部 */
  .login_center{
    height: 65%;
    background-image:url('../../../static/img/login/login_bg.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
</style>