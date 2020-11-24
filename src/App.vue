<template>
  <div id="app">
    <div class="common_top">
      <div>
        <div class="common_top_left">
          <p>hi 下午好欢迎来到伊甸城！</p>
          <p>|登录|免费注册|</p>
        </div>
        <div>

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
  height: calc(100% - 35px);
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
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
}
.common_top_left{
  display: flex;
}
</style>
