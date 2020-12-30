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
                <img src="../../../static/img/copyright/close.png" alt="" >
            </div>

      </div>
      <div class="tanchuang_body">
        <div class="tanchuang_bodytit"></div>
        <el-form ref="form_rul" :model="form1" label-width="100px" :rules="form_rul">
          <el-form-item label="收件人" prop="name" >
            <el-input v-model="form1.name"
              placeholder="请输入姓名"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="form1.phone"
              placeholder="请输入您的联系方式（必填）"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item label="收件地址" prop="address">
                <div id="addressHorizontalSelect">
                    <el-row>
                        <el-col :span="span">
                            <el-select size="medium" v-model="provinceCode" @focus="getProvinces" @change="changeProvince" 
                                :placeholder='省' filterable>
                                <el-option v-for="item in provinceList" :key="item.provinceCode" :label="item.provinceName" :value="item.provinceCode">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="span" v-if="!hideCity">
                            <el-select size="medium" v-model="cityCode" @focus="getCities" @change="changeCity" :placeholder='市' filterable>
                                <el-option v-for="item in cityList" :key="item.cityCode" :label="item.cityName" :value="item.cityCode">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="span" v-if="!hideCity && !hideArea">
                             <el-select size="medium" v-model="areaCode" @focus="getAreas" @change="changeArea" :placeholder='区/县' filterable>
                              <el-option v-for="item in areaList" :key="item.areaCode" :label="item.areaName" :value="item.areaCode">
                              </el-option>
                             </el-select>
                        </el-col>
                    </el-row>
                    <el-input v-model="form1.add"  placeholder="请输入详细地址" style="width: 70%"></el-input>
                </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="color: #fff; background: #2b3d63; width: 42%"
             @click="submit('form_rul')" >确认提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
        import {
                validatePhone
        } from '@/util/rules.js'
export default {
  name: 'addressHorizontalSelect',
  data() {
    return {
        provinceList: [], // 省份列表
        cityList: [], // 城市列表
        areaList: [], // 区/县列表
        provinceCode: '', // 省份编码
        cityCode: '', // 城市编码
        areaCode: '', // 区/县编码
        cityFlag: false, // 避免重复请求的标志
        provinceFlag: false,
        areaFlag: false,
      form1:{
        name:'',
        phone:'',
        address:'',
        add:'',
      },
      isshow:false,
      select:'',
      html:'',
      form_rul: {
              phone: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入手机号'
              }, {
                      validator: validatePhone,
                      trigger: 'blur'
              }],
             
              name: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入姓名'
              }, ],
              add: [{
                      required: true,
                      trigger: 'blur',
                      message: '请输入详细地址'
              }, ],
      },
      option:''
    };
  },
  created () {
    this.getProvinces()
  },
  methods:{
    close(){
      this.$emit("close")
    },
    
    getVerification() {
            this.html = Math.random();
    },
    submit(fromname) {
            this.$refs[fromname].validate((valid) => {
                    this.$api.getsellpost( this.form1.phone, this.form1.name, '', 3,
                                    this.form1.address)
                            .then(res => {
                                    console.log(res)
                                    if (res.code == 1) {
                                            this.$message({
                                                    message: '提交成功',
                                                    type: 'success'
                                            });
                                            this.$emit("submit")
                                    } else {
                                            this.$message.error({
                                                    message: '提交失败',
                                                    type: 'error'
                                            });
                                    }
                            })
            })
    },
    //地址栏
    fetchData (array, url, code) {
             this.$http({
              method: 'get',
              url: url + '/' + code
             })
             .then(res => {
              if (res.data.code === this.API.SUCCESS) {
               let body = res.data.body || []
               array.splice(0, array.length, ...body)
              }
             })
             .catch(err => {
              console.log(err)
             })
             .finally(res => {
             })
    },
    // 根据国家编码获取省份列表
    getProvinces () {
             if (this.provinceFlag) {
              return
             }
             this.fetchData(this.provinceList, this.API.province, 156)
             this.provinceFlag = true
    },
            // 省份修改，拉取对应城市列表
            changeProvince (val) {
             this.fetchData(this.cityList, this.API.city, this.provinceCode)
             this.cityFlag = true
             this.cityCode = ''
             this.areaCode = ''
             this.$emit('addressSelect', val)
            },
            // 根据省份编码获取城市列表
            getCities () {
             if (this.cityFlag) {
              return
             }
             if (this.provinceCode) {
              this.fetchData(this.cityList, this.API.city, this.provinceCode)
              this.cityFlag = true
             }
            },
            // 城市修改，拉取对应区域列表
            changeCity (val) {
             this.fetchData(this.areaList, this.API.area, this.cityCode)
             this.areaFlag = true
             this.areaCode = ''
             this.$emit('addressSelect', val)
            },
            // 根据城市编码获取区域列表
            getAreas () {
             if (this.areaFlag) {
              return
             }
             if (this.cityCode) {
              this.fetchData(this.areaList, this.API.area, this.cityCode)
             }
            },
            // 区域修改
            changeArea (val) {
             this.$emit('addressSelect', val)
            },
            // 重置省市区/县编码
            reset () {
             this.provinceCode = '',
             this.cityCode = '',
             this.areaCode = ''
            },
            // 地址编码转换成省市区列表
            addressCodeToList (addressCode) {
             if (!addressCode) return false
             this.$http({
              method: 'get',
              url: this.API.addressCode + '/' + addressCode
             })
             .then(res => {
              let data = res.data.body
              if (!data) return
              if (data.provinceCode) {
               this.provinceCode = data.provinceCode
               this.fetchData(this.cityList, this.API.city, this.provinceCode)
              } else if (data.cityCode) {
               this.cityCode = data.cityCode
               this.fetchData(this.areaList, this.API.area, this.cityCode)
              } else if (data.areaCode) {
               this.areaCode = data.areaCode
              }
             })
             .finally(res => {
             })
            }
  },
  watch: {
    addressCode: {
        deep: true,
        immediate: true,
        handler (newVal) {
            if (newVal) {
                this.addressCodeToList(newVal)
            } else {
                this.$nextTick(() => {
                    this.reset()
                })
            }
        }
    }
 },
  computed: {
        span () {
         if (this.hideCity) {
          return 24
         }
         if (this.hideArea) {
          return 12
         }
         return 8
        }
 },
  props: {
    hideCity: { // 隐藏市
        type: Boolean,
        default: false
    },
    hideArea: { // 隐藏区/县
        type: Boolean,
        default: false
    },
    addressCode: null // 地址编码
 },
 
 model: {
    prop: 'addressCode',
    event: 'addressSelect'
 },
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
.el-form-item__label{
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
  padding: 25px;
}
.tanchuang_body {
  width: 400px;
  margin: 0 auto;

}
.el-col{
    margin-bottom: 10px;
}
.el-col-8 {
    width: 40%;
    margin-right: 10%;
}
</style>
