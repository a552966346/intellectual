<template>
 <div id="components_topesarch">
   <div class="topesarch" style="background-image: url(../../../static/img/common/searchtop_bg.png);">
      <el-image
        style="width: 300px; "
        src="../../../static/img/login/logo.png"
        fit="fill"></el-image>
        <div class="search_input">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select search_text">
            <el-select v-model="select" slot="prepend" placeholder="商标">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
           <el-button type="primary" slot="append" class="search_btn">搜索</el-button>
          </el-input>
        </div>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      select:'',
      input3:''
    }
  },
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #components_topesarch{
    height: 150px;
    display: flex;
    justify-content: center;
  }
  #components_topesarch>.topesarch{
    background-size:auto 80%;
    background-repeat:no-repeat;
    background-position:right bottom;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-select{
    width: 80px;
    font-size: 15px;
    color:#187fc4;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .search_input{
    padding-right: 40px;
    width: 55%;
  }
  .search_text{
    border:2px solid #187fc4;
    border-radius: 0;
  }
  .search_btn{
    width: 100px;
    background: #187fc4;
    color: red;
    font-size: 15px;
  }
</style>
