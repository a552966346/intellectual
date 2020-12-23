<template>
  <div class="all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
        <img src="" alt="">
        <div class="tanchuang_title_text">我要出售版权</div>
      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit">填写详情</div>
        <el-form ref="form1" :model="form1" label-width="100px">
          <el-form-item label="版权名称">
            <el-input v-model="form1.name"
              placeholder="请输入版权名称（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="版权分类">
            <el-select v-model="form1.select" placeholder="请选择版权类型（必填）" style="width: 100%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form1.tel"
              placeholder="请输入您的联系方式（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item  label="验证号码">
            <div  style="display:flex"><el-input v-model="form1.haoma"
              placeholder="请输入您的验证号码（必填）"
              style="width: 70%"
            >
            </el-input>
            <el-button style="width:30%;background:#efefef;color:#919191;" type="mini">获取验证码</el-button></div>
            
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="color: #fff; background: #2b3d63; width: 42%"
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
      form1:{
        name:'',
        select:'',
        tel:'',
        haoma:''
      }
    };
  },
};
</script>

<style>
.all {
  padding: 20px;
}
.tanchuang_all {
  height: 550px;
  border-radius: 10px;
  overflow: hidden;
  background: #ccc;
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