<template>
 <div id="components_topesarch">
   <div class="topesarch">
      <img
        style="width: 300px; "
        src="../../../static/img/login/logo.png"
        fit="fill"></img>
        <div class="search_input">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select search_text">
            <el-select v-model="select" slot="prepend" placeholder="商标">
              <el-option label="服务中心" value="servicelist"></el-option>
              <el-option label="商标转让" value="trademarks"></el-option>
              <el-option label="专利转让" value="patents"></el-option>
              <el-option label="版权转让" value="copyright"></el-option>
            </el-select>
           <el-button type="primary" slot="append" class="search_btn" @click="search">搜索</el-button>
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
      input3:'',
      page:''
    }
  },
  methods:{
          search(){
                  if(this.$route.path!='/'+this.select){
                         this.$router.push({
                         			  path:this.select,
                         			  query:{
                         				  name:this.input3
                         			  }
                         })
                  }else{
                        this.$message({
                                  message: '请在下方进行搜索',
                                  type: 'warning'
                                });
                  }
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
    background-image: url(../../../static/img/common/searchtop_bg.png);
  }
  .el-select{
    width: 120px;
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
  .el-select-dropdown__item{
          text-align: center;
  }
</style>
