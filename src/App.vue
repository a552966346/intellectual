<template>
  <div id="app">
    <div class="common_top">
      <div>
        <div class="common_top_left">
          <p>hi 下午好欢迎来到伊甸城！</p>
          <p>| <router-link to="/login" class="common_run">登录/注册</router-link></p>
        </div>
        <div class="common_top_right">
          <router-link to="/usercenter">个人中心</router-link>
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
   name: 'App',
   
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
  text-decoration: none;
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
  width: 25%;
  justify-content: space-around;
}
.common_top_right{
  display: flex;
  width: 40%;
  justify-content: space-between;

}
.common_top_right>a{
  text-decoration: none;
  color: #333;
}
.common_login{
  text-decoration:none;
  color: #333;
}
.common_run{
  text-decoration:none;
  color: #333;
  padding-left: 20px;
}
</style>
