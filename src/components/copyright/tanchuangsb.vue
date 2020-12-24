<template>
  <div class="all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
            <!-- left -->
            <div class="tanchuang_title_l">
                <div class="tanchuang_title_img">
                    <img src="../../../static/img/copyright/tc_r.png" alt="" >
                </div>
                <div class="tanchuang_title_text">我要出售商标</div>
            </div>
            <!-- right -->
            <div class="tanchuang_title_r" @click="close">
                <img src="../../../static/img/copyright/close.png" alt="" >
            </div>

      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit">填写详情</div>
        <el-form ref="form_rul" :model="form" label-width="100px">
          <el-form-item label="注册商标号">
            <el-input v-model="form.name"
              placeholder="请输入您的注册商标号"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="商标类别">
                  <el-select v-model="form.select" placeholder="请选择商标类别（必填）"style="width: 100%">
                      <el-option v-for="item in data" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
          </el-form-item>
          <el-form-item label="出售底价">
            <el-input v-model="form.minprice"
              placeholder="请输入出售底价（必填）"
              style="width: 100%s"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.tel"
              placeholder="请输入您的联系方式（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item  label="验证号码">
            <div  style="display:flex"><el-input v-model="form.haoma"
              placeholder="请输入您的验证号码（必填）"
              style="width: 70%"
            >
            </el-input>
            <el-button  style="width:30%;background:#efefef;color:#919191;" type="mini">获取验证码</el-button></div>

          </el-form-item>
          <el-form-item >
            <el-button
              type="primary"
              style="color: #fff; background: #2b3d63; width: 42%;margin-bottom:20px"
              >确认发布</el-button
            >
            <el-button
              type="primary"
              style="
                border: 1px solid #ceaa88;
                background: #fff;
                color: #eb9848;
                width: 42%;

              "
              >联系创建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        name:'',
        select:'',
        minprice:'',
        tel:'',
        haoma:''
      },
      data:''
    };
  },
  mounted(){
      this.$api.getselldata()
      .then(res => {
              // console.log(9999)
              // console.log(res)
              this.data= res.data
              console.log(this.data,"商标分类")
      })
  },
  methods:{
    close(){
      console.log(125)
      this.$emit("close")
    }
  }
};
</script>

<style>
.all {
  padding: 20px;
  width: 40%;
}
.tanchuang_all {
  /* height: 550px; */
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.tanchuang_title_text {
  font-size: 15px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title {
  background: #29334c;
  color: white;
  display: flex;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tanchuang_title_img{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-right: 8px;
}
.tanchuang_title_l{
  display: flex;
}
.tanchuang_title_r{
  margin-right: 5px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title_r img{
  height: 36px;
}
.tanchuang_bodytit {
  font-size: 16px;
  text-align: center;
  padding: 30px;
  color: #484848;
}
.tanchuang_body {
  width: 400px;
  margin: 0 auto;

}
</style>
