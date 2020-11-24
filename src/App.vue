<template>
  <div id="app">
    <div class="common_top">
      <div>
        <div class="common_top_left">
          <p>hi 下午好欢迎来到伊甸城！</p>
          <p>|登录|免费注册|</p>
        </div>
        <div>
            <!--<aside :class="collasped?'menu-collapsed':'menu-expanded'" class="el-col-4">
              <el-menu class="el-menu-vertical-demo" :collapse="collapsed" :unique-opened="true" :router="true">
                <el-menu-item :index="'/'+child1.url" v-for="child1 in menuList" :key="child1.id" v-if="!child1.childNode">
                    <i :class="child1.iconCls" style="font-size:16px"></i>
                    <span slot="title">{{child1.name}}</span>
                </el-menu-item>
                <el-submenu :index="'/'+child1.url" v-for="child in menuList" :key="child1.id" v-if="child1.childNode">
                  <el-menu-item :index="'/'+child2.url" v-for="child2 in child1.childNode" :key="child2.id" v-if="!child2.childNode" class="menuTwo">
                    <i :class="child2.iconCls"></i>{{child2.name}}
                  </el-menu-item>
                  <template slot="title" v-if="child1.childNode">
                    <i :class="child1.iconCls"></i>
                    <span slot="title">{{child1.name}}</span>
                  </template>
                  <el-submenu :index="'/'+child2.url" v-for="child2 in child1.childNode" :key="child2.id" v-if="child2.childNode" class="menuTwo">
                    <template slot="title">
                      <i :class="child2.iconCls"></i>
                      <span slot="title">{{child2.name}}</span>
                    </template>
                    <el-menu-item-group class="menuThree">
                      <el-menu-item :index="'/'+child3.url" v-for="child3 in child2.childNode" :key="child3.id">
                        <i :class="child3.iconCls" style="font-size:16px;"></i>{{child3.name}}
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </aside>-->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
   name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
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
