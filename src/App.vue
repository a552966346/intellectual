<template>
  <div id="app">
    <div class="common_top">
      <div>
        <div class="common_top_left">
          <p>hi 下午好欢迎来到伊甸城！</p>
          <p>| <a href="" class="common_login">登录</a> | <a href="" class="common_run">免费注册</a> |</p>
        </div>
        <div class="common_top_right">
          <p>个人中心</p>
          <p>购物车</p>
          <p>免费咨询热线：0354-2057888</p>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
   name: 'App'
  }
</script>

<style>
#app {
  height: calc(100%);
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  overflow-x:hidden;
}
.common_top{
  background:#f6f6f6;
  font-size: 14px;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}
.common_top>div{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.common_top_left{
  display: flex;
  width: 30%;
  justify-content: space-around;
}
.common_top_right{
  display: flex;
  width: 40%;
  justify-content: space-between;
}
.common_login{
  text-decoration:none;
}
.common_run{
  text-decoration:none;
}
</style>