<template>
  <div id="app">
    <div class="common_top" id="top">
      <div >
        <div class="common_top_left">
          <p>hi 下午好欢迎来到伊甸城！</p>
          <p v-if=" this.$store.state.user== ''||  this.$store.state.user==null ||  this.$store.state.user==undefined">| <router-link to="/login" class="common_run" >登录/注册</router-link></p>
          <p v-else>| <router-link to="/usercenter" class="common_run" >欢迎您:{{this.$store.state.user.username}}</router-link></p>
        </div>
        <div class="common_top_right">
          <router-link to="/usercenter">个人中心</router-link>
          <router-link to="/shopcart">购物车</router-link>
          <p>免费咨询热线：0354-2057888</p>
        </div>
      </div>
    </div>
    <div class="xuanfu">
            <div class="erweima" v-show="isbg==1">
                    <img src="../static/img/index/erweima.png" alt="">
            </div>
            <div class="xianshi">
                    <img src="../static/img/index/kefu.png" alt="">
                    <div class="xuanfu_one">
                            <p @click="one" :class="{bgcolor:isbg==1}"><span>扫二</span><span>维码</span></p>
                    </div>
                    <div class="xuanfu_one">
                             <p @click="two" @mouseleave="twos" :class="{bgcolor:isbg==2}"><span>返回</span><span>顶部</span></p>
                    </div>
            </div>

    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
   name: 'App',
   data(){
           return{
                   user:{},
                   isbg:''
           }
   },
        beforeMount(){
                 this.$store.state.user =  JSON.parse(sessionStorage.getItem('user'))
                 if(this.$store.state.user == ''|| this.$store.state.user==null || this.$store.state.user==undefined){
                         this.$store.state.user =  JSON.parse(localStorage.getItem('user'))
                 }
                 console.log(this.$store.state.user)
        },
        methods:{
                one(){
                        this.isbg =1
                },
                two(){
                        this.isbg = 2
                        document.getElementById("top").scrollIntoView()
                        this.$emit('menu')
                },
                twos(){
                        this.isbg =null
                }
        }
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
  /* width: 25%; */
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
.xuanfu{
       position: absolute;
       right: 100px;
       top: 20%;
       z-index: 99999;
       display: flex;
}
.xianshi{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
.xianshi>img{
        width: 100px;
        margin-bottom: 5px;
}
.xuanfu_one{
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        margin-bottom: 5px;
}
.xuanfu_one p{
        background-color: #fff;
        display: flex;
        height: 60px;
        width: 60px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 13px;
}
.erweima{
     float: left;
     position: relative;
     top: 50px;
}
.erweima>img{
        width: 150px;
}
.bgcolor{
        background-color: #007DDB !important;
        color: #fff;
}
</style>
