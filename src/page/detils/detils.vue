<template>
<div>
    <v-topsearch></v-topsearch>
    <v-navigation></v-navigation>
    <div class="fleadd_all">
          <div class="fleadd_banner"></div>
          <div class="fleadd_container">
                <p>跳蚤市场>商品详情</p>
                <div class="paint_example">
                  <div>
                    <div class="shadow"></div>
                    <img src="../../../static/img/activity/example_item_img.png" alt="">
                  </div>
                  <div>
                        <p>油画作品展示</p>
                        <p>GALLERY</p>
                        <div class="line"></div>
                        <p>装饰性艺术是人类古老的艺术展现手法之一，她与人类生活密切相关，在现代技术日益发展的今天，装饰性艺术日益丰富和流行，在人们生活、工作、娱乐的各个方面，无不体现着装饰性艺术的魅力，装饰性</p>
                        <div class="buy">
                            <div class="buy1">
                                     立即购买
                            </div>
                            <div class="buy2"></div>
                        </div>
                  </div>
                </div>
                <!-- 产品信息 -->
                <div class="productmessage">
                      <div class="pro_t">
                        <p>产品信息</p>
                        <p>PRODUCE &nbsp;&nbsp; INFORMATION</p>
                      </div>
                      <div class="pro_cen">
                        <div class="pro_cen_l" >
                            <div class="l_item" v-for="(item,index) in proin.arr1" :key="index">
                              <p><img :src="item.src" alt=""><span>{{item.tit}}</span>{{item.text}}</p>
                              <p><img :src="item.src1"><span>{{item.tit1}}</span>{{item.text1}}</p>
                              <p><img :src="item.src2"><span>{{item.tit2}}</span>{{item.text2}}</p>
                            </div>
                            <div class="l_item items" v-for="(item1,index) in proin.arr2" :key="index">
                              <p><img :src="item1.src"><span>{{item1.tit}}</span>{{item1.text}}</p>
                              <p><img :src="item1.src1"><span>{{item1.tit1}}</span>{{item1.text1}}</p>
                            </div>
                            <div class="l_it">{{proin.p}}</div>
                        </div>
                        <div class="pro_cen_r">
                          <div class="r_top">
                            <div class="circle"><img :src="person.tou" alt=""> </div>
                            <p>{{person.tet}}</p>
                          </div>
                          <div class="r_item" v-for="(items,index) in person.arr"  
                          :key="index"><img :src="items.src"><p>{{items.text}}</p></div>
                        </div>
                      </div>

                </div>
                <!-- 产品详情 -->
                <div class="productdetails">
                  <div class="pro_t">
                        <p>产品详情</p>
                        <p>PRODUCE &nbsp;&nbsp; DETAILS</p>
                  </div>
                
                  <div class="pd"></div>
                  <p class="pa">{{text[0]}}</p>
                </div>

                <!-- 细节效果 -->
                <div class="detaileffect">
                    <div class="pro_t">
                        <p>细节效果</p>
                        <p>DETAILS &nbsp;&nbsp; EFFECT</p>
                    </div>
                
                    <div class="de">
                      <div class="de_item" v-for="(item2,index) in de" :key="index">
                        <img :src="item2.src" alt="">
                      </div> 
                    </div>
                    <p class="pa">{{text[1]}}</p>
                </div>
          </div>
          <!-- 联络我们 -->
          <div class="fleadd_fotter">
              <div class="ff_container">
                <div class="ffl">
                        <h4>即刻与我们联络</h4>
                        <p>问题并不是被发现，而是被感悟到，它取决于你和周围的人。如果你感觉哪地方不对，不妨与我们专家沟通了解，这对你不会有任何损失。</p>
                        <div class="ff_items">
                          <div class="ff_item" v-for="(it,index) in ffl" :key="index">
                            <div class="ff_item_img"><img :src="it.src" alt=""></div>
                            <div class="ff_item_con">
                              <p>{{it.text}}</p><span>{{it.tet}}</span>
                            </div>
                          </div>
                        </div>
                </div>

                <div class="ffr">
                        <h4>免费获取解决方案</h4>
                        <el-form ref="form_rule" :model="form" label-width="100px" :rules="form_rul">
                                        <el-form-item label="您的姓名" prop="name">
                                                <el-input v-model="form.name" placeholder="填写您的姓名" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="您的企业" prop="qy">
                                                <el-input v-model="form.qy" placeholder="填写您的企业" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="联系方式" prop="phone">
                                                <el-input v-model="form.phone" placeholder="填写您的联系方式" style="width: 100%"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证号码" prop="authcode">
                                                <el-row>
                                                        <el-col :span="12">
                                                                <div class="grid-content">
                                                                        <el-input type="text" v-model="form.authcode"
                                                                                autocomplete="off" placeholder='输入验证码'>
                                                                        </el-input>
                                                                </div>
                                                        </el-col>
                                                        <el-col :span="12">
                                                                <div class="grid-content" style="text-align: center;">
                                                                        <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                                                        alt="" @click="getVerification"></div>
                                                                </div>
                                                        </el-col>
                                                </el-row>
                                        </el-form-item>
                                        <el-form-item>
                                                <el-button type="primary" style="color: ; background: #276bf0; width: 42%;margin-bottom:20px;border-radius:25px;"
                                                        @click="submit('form_rule')">提交</el-button>
                                        </el-form-item>
                                </el-form>
                </div>
              </div>
          </div>
      
    </div>
    <v-combotttom></v-combotttom>
</div>
</template>
<script>
import {
                validatePhone
        } from '@/util/rules.js'
  export default {
    data() {
      return {
        form: {
          name: '',
          qy: '',
          phone: '',
          authcode: '',
        },
        form_rul: {
                phone: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入手机号'
                }, {
                        validator: validatePhone,
                        trigger: 'blur'
                }],
                authcode: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入验证码'
                }, {
                        min: 4,
                        max: 6,
                        trigger: 'blur',
                        message: '验证码错误'
                }],
                name: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入您的姓名'
                }, ],
                qy: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入企业名称'
                }, ],
                
        },
        html: '',
        proin:{
          p:'环境艺术发展至今，多元文化的特点尤为明显。设计理念必须要以人为本，针对客户年、职业、爱好、文化层次等特点，根据客户主观方面的个人喜好，“因人而异”。注:因边框大小不同，各款画芯大小有差别，以实际大小为准，另手绘画芯和装裱时均会产生误差，误差为正常，能接受再购买，见谅!',
          arr1:[{src:'../../../static/img/fleadd/fleadd1.png',tit:'产品名称：',text:'莫奈（春天的花）',src1:'../../../static/img/fleadd/fleadd2.png',tit1:'风格：',text1:'现代简约',src2:'../../../static/img/fleadd/fleadd3.png',tit2:'人气：',text2:'319'},
          {src:'../../../static/img/fleadd/fleadd4.png',tit:'产品工艺：',text:'手绘+手工装裱',src1:'../../../static/img/fleadd/fleadd5.png',tit1:'等级：',text1:'一等品',src2:'../../../static/img/fleadd/fleadd6.png',tit2:'产地：',text2:'山西'},],
          arr2:[
          {src:'../../../static/img/fleadd/fleadd7.png',tit:'产品材质：',text:'金卡亚麻油画布',src1:'../../../static/img/fleadd/fleadd8.png',tit1:'适合场景：',text1:'家居装饰，酒店，玄关，会所，售楼处，企业文化'},]
        },
        person:{
          tou:'../../../static/img/fleadd/tou.png',tet:'设计师：张笑',
          arr:[
          {src:'../../../static/img/fleadd/fleadd_email.png',text:'邮箱:12598784＠Q.OOM'},
          {src:'../../../static/img/fleadd/fleadd_phone.png',text:'手机号:15885798585'},
          {src:'../../../static/img/fleadd/fleadd_design.png',text:'受计理念:设计理念是设计师在空间品构思过程中所确立的主导思想，它斌予品文化内涵和风格特点。'},
          ]
        },
        text:['文创是高附加值产品，是大众消裁与日俱増的消热点，也是门店多元经营的重要组成部分。“美学、精致、品味、体验”已成为年青一代生活中不可或缺的追求。为丰富书店经营品类，向读者提供多元化服务，提升门店格调从而动整体销售，文化用品中心从2017年底开始，加大文创产品的引进和推广。目前，已引进多家具有较强实力的供应商，涉及日常用品、文具、玩具茶具、餐具、家居装饰和小家电等国内外商品，可满足不同顾需求。创城NO.4伊甸创新创业基地位于山西转型综合改革示范区大学城产业园区内。项目占地面积200亩，总建筑面积30万平方米，总投25亿人民币。由全球最大的建筑设计事务所美国RTKL携手世界第一观设计事务所美国 AECOM领衔设计智创城NO.4一伊甸创',
        '文创是高附加值产品，是大众消残与日俱増的消热点，也是门店多元经营的重要组成部分。＂美学、精致、品味、体验”已成为年青一代生活中不可或缺的追求。为丰富书店经营品类，向读者提供多元化服务，提升门店格调从而带动整体销售，文化用品中心从2017年底开始，加大'
        ],
        de:[
          {src:'../../../static/img/fleadd/detail1.png'},{src:'../../../static/img/fleadd/detail2.png'},{src:'../../../static/img/fleadd/detail3.png'}
        ],
        ffl:[
          {src:'../../../static/img/fleadd/fleadd_tel.png',text:'王先生',tet:'0234-2057888'},
          {src:'../../../static/img/fleadd/fleadd_address.png',text:'联系地址',tet:'山西省晋中市定阳路1100号'},
        ]
        
      }
    },
    methods:{
      getVerification() {
          this.html = Math.random();
      },
      submit(form_rule) {
        this.$refs[form_rule].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
.fleadd_all{
  width: 100%;
  
}
.pa{
  padding: 0 20px;
  color: #666;
  margin: 30px 0  50px 0;
}
.fleadd_banner{
  background: url("../../../static/img/fleadd/fleadd_banner_bg.png");
  height: 500px;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
}
.fleadd_container{
    width:1200px;
    margin: auto;
    font-size: 16px;
}
.fleadd_container>p{
  margin-top: 40px;
}
.line{
  width:120px;
  border-bottom: 2px solid #000;
}
.paint_example{
  margin: auto;
  display: flex;
  padding: 40px 0;
  align-items: flex-end;
}
.paint_example>div:first-of-type{
  padding-right:80px;
  position: relative;
}

.shadow{
  position: absolute;
  right: 37px;
  bottom: -26px;
  width: 600px;
  height: 600px;
  background-color: #e5e3e3;
  z-index: -1;
}
.paint_example>div:last-of-type>img{
  width: 675px;
  z-index: 5;
}
.paint_example>div>p:nth-child(1){
  font-size: 36px;
}
.paint_example>div>p:nth-child(2){
  font-size: 28px;
  padding: 20px 0;
  color: #a7a7a7;
}
.paint_example>div>p:nth-child(4){
  font-size: 15px;
  /* margin-left:120px; */
  line-height: 25px;
  color: #676767;
  padding: 20px 0;
}
.buy{
  position: relative;
  height: 60px;
}

.buy1,.buy2{
  background-color: pink;
  width: 35%;
  height: 60px;
  margin-right: 20px;
  position: absolute;
  border: 1px solid #000;
}
.buy1{
  background-color: #f6f6f6;
  bottom: 0px;
  right: 0px;
  z-index: 2;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buy2{
  background-color: #0163d2;
  top: 22px;
  right: 20px;
}


.pro_t{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}
.pro_t>p:nth-of-type(1){
  font-size: 20px;
  color: #187fc4;
  line-height: 2;
  letter-spacing: 1px;
  font-weight: 600;
}
.pro_t>p:nth-of-type(2){
  font-size: 16px;
  color: #a1a1a1;
}
.pro_cen{
  margin: 40px 0;
  display: flex;
}
.pro_cen_l{
  flex: 2;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 4;
  margin-right: 20px;
  padding:0 20px;
}
.pro_cen_r{
  flex: 1;
  border: 1px solid #ccc;
}
.l_item{
  height: 50px;
  display: flex;
  border-bottom: 1px solid #dad4d4;
  /* padding:0 20px; */
}
.l_item>p{
  color: #a7a7a7;
  width: 33.3%;
}
.l_item>p>span{
  color: black;
}
.items>p:nth-of-type(2){
  width: 66.7%;
  
}
.l_it{
  line-height: 2;
  padding: 10px 0;
  color: #a7a7a7;
}
.pro_cen_l p>img{
  margin-right: 5px;
}

.r_top{
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #ededed;
  justify-content: center;
}
.circle{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.r_item{
  padding: 5px 20px;
  border-bottom: 1px solid #efefef;
  line-height: 2;
  font-size: 14px;
  display: flex;
}
.r_item>img{
  margin-right: 20px;
  height: 24px;
  margin-top: 5px;
}

.pd{
  margin-top: 40px;
  background:url("../../../static/img/fleadd/pd_bg.png") no-repeat;
  height: 430px;
}
.de{
  height: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
.de_item{
  width: 32%;
}
.fleadd_fotter{
  background-color: #fbfbfb;
  width: 100%;
  height: 410px;
  padding: 40px 0 30px;
  
}
.ff_container{
  width: 1200px;
  margin: auto;
  height: 400px;
  display: flex;
  padding: 0 50px;
}
.ffl{
  width: 40%;
  margin-right: 20%;
}
.ffl>h4,
.ffr>h4{
  font-size: 16px;
  color: #333;
  line-height: 2;
  margin: 10px 0;

}
.ffl>p{
  font-size: 14px;
  color: #afafaf;
  line-height: 2;
  margin-bottom: 10px 0;
}
.ff_items{
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.8;
}
.ff_item{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.ff_item_img{
  margin-right: 20px;
  width: 40px;
}
.ff_item_img>img{
  height: 100%;
}

.ff_item_con>p{
  color: #5c5c5c;
}

</style>