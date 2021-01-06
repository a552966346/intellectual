<template>
  <div class="all">
    <div class="tanchuang_all">
      <div class="tanchuang_title">
        <!-- left -->
        <div class="tanchuang_title_l">
          <div class="tanchuang_title_text">添加收件地址</div>
        </div>
        <!-- right -->
        <div class="tanchuang_title_r" @click="close">
          <img src="../../../static/img/copyright/close.png" alt="" />
        </div>
      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit"></div>
        <el-form
          ref="form_rul"
          :model="form1"
          label-width="100px"
          :rules="form_rul"
        >
          <el-form-item label="收件人" prop="name">
            <el-input
              v-model="form1.name"
              placeholder="请输入姓名"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input
              v-model="form1.phone"
              placeholder="请输入您的联系方式（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="是否默认" prop="resource">
              <el-radio-group v-model="form1.resource">
                <el-radio :label="1">默认</el-radio>
                <el-radio :label="0">非默认</el-radio>
              </el-radio-group>
            </el-form-item>
          <el-form-item label="收件地址" prop="province">
            <div id="addressHorizontalSelect">
              <el-row>
                <el-col :span="span">
                  <el-select
                    size="medium"
                    v-model="form1.province"
                    @change="changeProvince"
                    placeholder="省"
                    filterable
                  >
                    <el-option
                      v-for="item in provinceList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="span" v-if="!hideCity">
                  <el-select
                    size="medium"
                    v-model="form1.city"
                    @change="changeCity"
                    placeholder="市"
                    filterable
                  >
                    <el-option
                      v-for="item in cityList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="span" v-if="!hideCity && !hideArea">
                  <el-select
                    size="medium"
                    v-model="form1.area"
                    @change="changeArea"
                    placeholder="区 / 县"
                    filterable
                  >
                    <el-option
                      v-for="item in areaList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
              <el-input
                v-model="form1.add"
                placeholder="请输入详细地址"
                style="width: 70%"
                prop="add"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="color: #fff; background: #2b3d63; width: 42%"
              @click="submit('form_rul')"
              >确认提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validatePhone } from "@/util/rules.js";
export default {
  name: "addressHorizontalSelect",
  data() {
    return {
      uid:'',
      provinceList: [], // 省份列表
      cityList: [], // 城市列表
      areaList: [], // 区/县列表
      provinceCode: "", // 省份编码
      cityCode: "", // 城市编码
      areaCode: "", // 区/县编码
      cityFlag: false, // 避免重复请求的标志
      provinceFlag: false,
      areaFlag: false,
      nub:false,
      form1: {
        name: "",
        phone: "",
        province:'',
        city:'',
        area:'',
        add:'',
        resource:1
      },
      isshow: false,
      select: "",
      html: "",
      form_rul: {
        name: [
          {
            required: true,
            trigger: "blur",
            message: "请输入姓名",
          },
        ],
        phone: [
          {
            required: true,
            trigger: "blur",
            message: "请输入手机号",
          },
          {
            validator: validatePhone,
            trigger: "blur",
          },
        ],
        province: [
          {
            required: true,
            trigger: "change",
            message: "请输入省份-市级-区县-详细地址",
          },
        ],
        resource:[
                {
                  required: true,
                  trigger: "change",
                  message: "是否默认",
                },
        ]
      },
    };
  },
  beforeMount(){
    this.$api.areadata()
    .then((res) => {
      this.provinceList = res.data;
         res.data.forEach(function(item){
      })
    })
    .catch(err =>{
        console.log(err);
    });
  },
  methods: {
    close() {
      this.$emit("close");
    },
    getVerification() {
      this.html = Math.random();
    },
    submit(fromname) {
      let user =this.$cookies.get("user");
      this.uid = user.id;
      this.$refs[fromname].validate((valid) => {
        if(valid){
          this.$api.receadd(this.uid,this.form1.name,this.form1.phone,this.form1.province,this.form1.city,this.form1.area,this.form1.add,this.form1.resource)
          .then((res) => {
            if (res.code == 1) {
              this.nub = true;
              this.$message({
                message: "提交成功",
                type: "success",
              });
              this.$emit("submit",this.nub);
            } else {
              this.$message.error({
                message: "提交失败",
                type: "error",
              });
            }
          })
          .catch(err =>{
                  console.log(err);
          });
        }
      });
    },
    // 省份修改，拉取对应城市列表
    changeProvince(val) {
      console.log(val);
        this.$api.citydata(val)
        .then((res) => {
            console.log(res.data,'省')
        this.cityList = res.data;
        })
        .catch(err =>{
            console.log(err);
        });
    },
    changeCity(val){
          this.$api.citydata(val)
          .then((res) => {
              console.log(res.data,'区')
            this.areaList = res.data;
          })
          .catch(err =>{
                  console.log(err);
          })
    },
    changeArea(val){
      this.$api.citydata(val)
      .then((res) => {
          console.log(res.data,'区')
        this.areaList = res.data;
      })
      .catch(err =>{
          console.log(err);
      })
    }
  },
  computed: {
    span() {
      if (this.hideCity) {
        return 24;
      }
      if (this.hideArea) {
        return 12;
      }
      return 8;
    },
  },
  props: {
    hideCity: {
      // 隐藏市
      type: Boolean,
      default: false,
    },
    hideArea: {
      // 隐藏区/县
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "addressCode",
    event: "addressSelect",
  },
};
</script>

<style>
.all {
  padding: 20px;
  width: 40%;
}
.tanchuang_all {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.el-form-item__label {
  text-align: center !important;
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

.tanchuang_title_l {
  display: flex;
}
.tanchuang_title_r {
  margin-right: 5px;
  height: 50px;
  display: flex;
  align-items: center;
}
.tanchuang_title_r img {
  height: 36px;
}
.tanchuang_bodytit {
  padding: 25px;
}
.tanchuang_body {
  width: 400px;
  margin: 0 auto;
}
.el-col {
  margin-bottom: 10px;
}
.el-col-8 {
  width: 40%;
  margin-right: 10%;
}
</style>
