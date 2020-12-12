<template>
    <el-container>
        <el-main>
            <el-header class="about_mut">
                <span class="about_muspan">关于我们</span>
            </el-header>
            <div class="about_cet">
                <p>伊甸城简介</p>
                <p>智创城NO.4-伊甸创新创业基地位于山西转型综合改革示范区大学城产业园区内。项目占地面积200亩地，总建筑面积30万平方米，总资产25亿人民币。由全球最大的建筑设计事务所美国RTKL携手世界第一景观设计事务所美国AECOM领衔设计，清控科创携手中科院联合运营管理，着力“打造智创新高地，建设山西梦工厂！”</p>
                <p>基地首期开业运营2万平方米，至2021年底将全部开业。为大学城师生及创业者提供集研发、创业、社交、体验等功能于一体的工作和生活空间。</p>
                <img src="../../../static/img/about/about_center.png" alt="altText"/>
            </div>    
        </el-main>
    </el-container>
</template>
<script>
export default {
  data() {
    return {};
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